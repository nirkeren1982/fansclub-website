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

type RecommendationClickBody = {
  anonUserId: string
  sessionId?: string
  sourceCreatorUsername: string
  clickedCreatorUsername: string
  position?: number
  section?: string
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

    const body = (await request.json()) as RecommendationClickBody

    if (!body.anonUserId || !body.sourceCreatorUsername || !body.clickedCreatorUsername) {
      return NextResponse.json(
        { ok: false, error: 'anonUserId, sourceCreatorUsername and clickedCreatorUsername are required' },
        { status: 400, headers: CORS_HEADERS },
      )
    }

    const {
      anonUserId,
      sessionId,
      sourceCreatorUsername,
      clickedCreatorUsername,
      position,
      section,
      country,
      city,
      userAgent,
    } = body

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

    // Insert recommendation click event
    const { error } = await supabase.from('recommendation_click_events').insert({
      anon_user_id: anonUserId,
      session_id: sessionId || null,
      source_creator_username: sourceCreatorUsername,
      clicked_creator_username: clickedCreatorUsername,
      position: position ?? null,
      section: section || null,
      country: country || null,
      city: city || null,
    })

    if (error) {
      console.error('Failed to insert recommendation_click_event', error)
      return NextResponse.json(
        { ok: false, error: 'Failed to record recommendation click' },
        { status: 500, headers: CORS_HEADERS },
      )
    }

    return NextResponse.json({ ok: true }, { headers: CORS_HEADERS })
  } catch (error) {
    console.error('Unexpected error in /api/track/recommendation-click', error)
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


