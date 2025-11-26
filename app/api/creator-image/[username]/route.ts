import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function getSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL
  // Use service key for server-side access, fallback to anon key
  const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    return null
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: { persistSession: false },
  })
}

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  try {
    const { username } = params

    if (!username || typeof username !== 'string') {
      return NextResponse.json(
        { error: 'Username required' },
        { status: 400, headers: CORS_HEADERS }
      )
    }

    const supabase = getSupabaseClient()

    if (!supabase) {
      return NextResponse.json(
        { error: 'Database not configured' },
        { status: 500, headers: CORS_HEADERS }
      )
    }

    // Fetch HQ image URL from database
    const { data, error } = await supabase
      .from('creators')
      .select('profile_image_url_hq, profile_image_url')
      .eq('username', username)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: 'Creator not found' },
        { status: 404, headers: CORS_HEADERS }
      )
    }

    // Prefer HQ, fallback to LQ
    const imageUrl = data.profile_image_url_hq || data.profile_image_url

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'No image available' },
        { status: 404, headers: CORS_HEADERS }
      )
    }

    // Fetch the image from external source
    const imageResponse = await fetch(imageUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Referer': 'https://onlyfans.com/',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
      },
    })

    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Image not found' },
        { status: 404, headers: CORS_HEADERS }
      )
    }

    const imageBuffer = await imageResponse.arrayBuffer()
    const contentType = imageResponse.headers.get('content-type') || 'image/jpeg'

    // Set caching headers (cache for 7 days)
    const headers = new Headers(CORS_HEADERS)
    headers.set('Cache-Control', 'public, max-age=604800, immutable')
    headers.set('Content-Type', contentType)

    return new NextResponse(Buffer.from(imageBuffer), {
      status: 200,
      headers,
    })
  } catch (error) {
    console.error('Image proxy error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch image' },
      { status: 500, headers: CORS_HEADERS }
    )
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: CORS_HEADERS,
  })
}

