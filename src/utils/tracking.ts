// Utility functions for anonymous user + session tracking and API calls

const ANON_USER_KEY = 'fco_user_id'
const SESSION_ID_KEY = 'fco_session_id'

function generateId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export function getAnonUserId(): string {
  if (typeof window === 'undefined') return ''

  const existing = window.localStorage.getItem(ANON_USER_KEY)
  if (existing) return existing

  const id = generateId()
  window.localStorage.setItem(ANON_USER_KEY, id)
  return id
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return ''

  const existing = window.sessionStorage.getItem(SESSION_ID_KEY)
  if (existing) return existing

  const id = generateId()
  window.sessionStorage.setItem(SESSION_ID_KEY, id)
  return id
}

function getApiBaseUrl() {
  // Use the backend Next.js app as the tracking API
  // In production this should point to the backend domain
  return import.meta.env.VITE_BACKEND_API_URL || 'https://onlyfans-directory.vercel.app'
}

export async function trackSearchEvent(params: {
  query: string
  resultCount?: number
  clickedCreatorUsername?: string
  clickedPosition?: number
  source?: string
}) {
  try {
    if (typeof window === 'undefined') return

    const anonUserId = getAnonUserId()
    const sessionId = getSessionId()

    const body = {
      anonUserId,
      sessionId,
      query: params.query,
      resultCount: params.resultCount,
      clickedCreatorUsername: params.clickedCreatorUsername,
      clickedPosition: params.clickedPosition,
      source: params.source,
      userAgent: navigator.userAgent,
    }

    await fetch(`${getApiBaseUrl()}/api/track/search`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (error) {
    // Fail silently to avoid impacting UX
    console.warn('Failed to track search event', error)
  }
}

export async function trackRecommendationClick(params: {
  sourceCreatorUsername: string
  clickedCreatorUsername: string
  position?: number
  section?: string
}) {
  try {
    if (typeof window === 'undefined') return

    const anonUserId = getAnonUserId()
    const sessionId = getSessionId()

    const body = {
      anonUserId,
      sessionId,
      sourceCreatorUsername: params.sourceCreatorUsername,
      clickedCreatorUsername: params.clickedCreatorUsername,
      position: params.position,
      section: params.section,
      userAgent: navigator.userAgent,
    }

    await fetch(`${getApiBaseUrl()}/api/track/recommendation-click`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
  } catch (error) {
    console.warn('Failed to track recommendation click', error)
  }
}


