/**
 * Centralized API client for frontend-to-backend communication
 * All API calls go through this layer for consistency and error handling
 */

// Base API URL (use environment variable or default to localhost)
// Vite uses import.meta.env instead of process.env
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000'

// ============================================================================
// TYPES
// ============================================================================

export interface Creator {
  id?: string
  username: string
  display_name?: string | null
  profile_image_url?: string | null
  bio?: string | null
  subscription_price?: number | null
  onlyfans_url?: string | null
  instagram_url?: string | null
  twitter_url?: string | null
  tiktok_url?: string | null
  linktree_url?: string | null
  country?: string | null
  categories?: string[]
  likes_count?: number | null
  photos_count?: number | null
  videos_count?: number | null
  posts_count?: number | null
  follower_count_estimate?: number | null
  is_verified?: boolean
  promoted?: boolean
  gender?: string | null
  status?: string | null
  date_added?: string
  last_updated?: string
  last_scraped?: string | null
}

export interface Category {
  id: number | string
  name: string
  slug: string
  description?: string
  icon?: string
}

export interface Banner {
  id: string
  title?: string
  image_url: string
  link_url?: string
  position: 'header' | 'sidebar' | 'footer'
  display_order?: number
  is_active: boolean
  start_date: string
  end_date: string
}

export interface CreatorsResponse {
  total: number
  items: Creator[]
}

export interface FetchCreatorsParams {
  limit?: number
  offset?: number
  sort?: 'popular' | 'newest' | 'price_low' | 'price_high'
  dir?: 'asc' | 'desc'
  search?: string
  category?: string
  country?: string
}

export interface NewsletterSubscribeData {
  email: string
  name?: string
}

export interface NewsletterResponse {
  success: boolean
  message: string
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Build URL query string from params object
 */
function buildQueryString(params: Record<string, any>): string {
  const entries = Object.entries(params)
    .filter(([_, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => [key, String(value)])
  
  return new URLSearchParams(entries).toString()
}

/**
 * Handle API errors and return user-friendly message
 */
function handleApiError(error: any): string {
  if (error instanceof Error) {
    return error.message
  }
  if (typeof error === 'string') {
    return error
  }
  return 'An unknown error occurred'
}

/**
 * Base fetch wrapper with common settings
 */
async function apiFetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
  const url = `${API_BASE_URL}${endpoint}`
  
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  })
  
  return response
}

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Fetch paginated list of creators with optional filters
 * 
 * @example
 * const { total, items } = await fetchCreators({ limit: 24, sort: 'popular' })
 */
export async function fetchCreators(params: FetchCreatorsParams = {}): Promise<CreatorsResponse> {
  try {
    const queryString = buildQueryString(params)
    const endpoint = `/api/creators${queryString ? `?${queryString}` : ''}`
    
    const response = await apiFetch(endpoint)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch creators: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

/**
 * Fetch a single creator by username
 * 
 * @example
 * const creator = await fetchCreatorByUsername('skylarmaexo')
 */
export async function fetchCreatorByUsername(username: string): Promise<Creator | null> {
  try {
    if (!username || typeof username !== 'string') {
      throw new Error('Username is required')
    }
    
    const response = await apiFetch(`/api/creators/${encodeURIComponent(username)}`)
    
    if (response.status === 404) {
      return null
    }
    
    if (!response.ok) {
      throw new Error(`Failed to fetch creator: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    throw new Error(handleApiError(error))
  }
}

/**
 * Fetch all available categories
 * 
 * @example
 * const categories = await fetchCategories()
 */
export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await apiFetch('/api/categories')
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    // Return empty array on error (categories are non-critical)
    console.error('Failed to fetch categories:', error)
    return []
  }
}

/**
 * Fetch active banners by position
 * 
 * @example
 * const headerBanners = await fetchBanners('header')
 */
export async function fetchBanners(position: 'header' | 'sidebar' | 'footer' = 'header'): Promise<Banner[]> {
  try {
    const queryString = buildQueryString({ position })
    const response = await apiFetch(`/api/banners?${queryString}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch banners: ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    // Return empty array on error (banners are non-critical)
    console.error('Failed to fetch banners:', error)
    return []
  }
}

/**
 * Subscribe a user to the newsletter
 * 
 * @example
 * const result = await subscribeNewsletter({ email: 'user@example.com', name: 'John' })
 */
export async function subscribeNewsletter(data: NewsletterSubscribeData): Promise<NewsletterResponse> {
  try {
    if (!data.email || typeof data.email !== 'string') {
      return {
        success: false,
        message: 'Email is required',
      }
    }
    
    const response = await apiFetch('/api/newsletter/subscribe', {
      method: 'POST',
      body: JSON.stringify(data),
    })
    
    const result = await response.json()
    
    // Return the result regardless of status code (API handles error messages)
    return result
  } catch (error) {
    return {
      success: false,
      message: handleApiError(error),
    }
  }
}

/**
 * Health check to verify API is running
 * 
 * @example
 * const isHealthy = await checkHealth()
 */
export async function checkHealth(): Promise<boolean> {
  try {
    const response = await apiFetch('/api/health')
    
    if (!response.ok) {
      return false
    }
    
    const data = await response.json()
    return data.ok === true
  } catch (error) {
    console.error('Health check failed:', error)
    return false
  }
}

// ============================================================================
// EXPORT ALL
// ============================================================================

export default {
  fetchCreators,
  fetchCreatorByUsername,
  fetchCategories,
  fetchBanners,
  subscribeNewsletter,
  checkHealth,
}

