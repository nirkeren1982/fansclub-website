import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  const supabaseKey = process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  })
}

async function getGeoFromRequest(request: Request): Promise<{ country?: string; city?: string }> {
  try {
    // Try to get real client IP from headers
    const forwardedFor = request.headers.get('x-forwarded-for') || ''
    const ip = forwardedFor.split(',')[0].trim()

    if (!ip) {
      return {}
    }

    // Use a free geo-IP service (no API key) to resolve IP → country/city
    const res = await fetch(`https://ipwho.is/${ip}`, { next: { revalidate: 60 } })
    if (!res.ok) return {}

    const data = (await res.json()) as any
    if (data && data.success) {
      return {
        country: data.country || undefined,
        city: data.city || undefined,
      }
    }

    return {}
  } catch {
    // Fail silently if geo lookup fails
    return {}
  }
}

type SearchEventBody = {
  anonUserId: string
  sessionId?: string
  query: string
  normalizedQuery?: string
  resultCount?: number
  clickedCreatorUsername?: string
  clickedPosition?: number
  source?: string
  country?: string
  city?: string
  userAgent?: string
}

export async function POST(request: Request) {
  try {
    const supabase = getSupabaseClient()

    if (!supabase) {
      return NextResponse.json({ ok: false, error: 'Supabase not configured' }, { status: 500, headers: CORS_HEADERS })
    }

    const body = (await request.json()) as SearchEventBody

    if (!body.anonUserId || !body.query) {
      return NextResponse.json(
        { ok: false, error: 'anonUserId and query are required' },
        { status: 400, headers: CORS_HEADERS },
      )
    }

    const {
      anonUserId,
      sessionId,
      query,
      normalizedQuery,
      resultCount,
      clickedCreatorUsername,
      clickedPosition,
      source,
      country: countryFromBody,
      city: cityFromBody,
      userAgent,
    } = body

    // If country/city not provided by client, try to infer from IP
    const geo = await getGeoFromRequest(request)
    const country = countryFromBody || geo.country
    const city = cityFromBody || geo.city

    // Upsert anonymous user profile
    await supabase
      .from('users_anonymous')
      .upsert(
        [
          {
            anon_user_id: anonUserId,
            country: country || null,
            city: city || null,
            user_agent: userAgent || null,
            last_seen_at: new Date().toISOString(),
          },
        ],
        { onConflict: 'anon_user_id' },
      )

    // Insert search event
    const { error } = await supabase.from('search_events').insert({
      anon_user_id: anonUserId,
      session_id: sessionId || null,
      query,
      normalized_query: normalizedQuery || query.toLowerCase().trim(),
      result_count: resultCount ?? null,
      clicked_creator_username: clickedCreatorUsername || null,
      clicked_position: clickedPosition ?? null,
      source: source || null,
      country: country || null,
      city: city || null,
    })

    if (error) {
      console.error('Failed to insert search_event', error)
      return NextResponse.json(
        { ok: false, error: 'Failed to record search event' },
        { status: 500, headers: CORS_HEADERS },
      )
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS })
  } catch (error) {
    console.error('Unexpected error in /api/track/search', error)
    return NextResponse.json(
      { ok: false, error: 'Unexpected error' },
      { status: 500, headers: CORS_HEADERS },
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  })
}


