import { supabase } from './supabase'

export interface Creator {
  id?: string
  username: string
  display_name?: string | null
  profile_image_url?: string | null
  bio?: string | null
  subscription_price?: number | null
  onlyfans_url?: string | null
  country?: string | null
  categories?: string[]
  likes_count?: number | null
  photos_count?: number | null
  videos_count?: number | null
  is_verified?: boolean
  promoted?: boolean
  status?: string | null
  date_added?: string
  last_updated?: string
  view_count?: number | null
}

export interface FetchCreatorsParams {
  limit?: number
  offset?: number
  category?: string
  search?: string
  minPrice?: number
  maxPrice?: number
}

export interface CreatorsResponse {
  total: number
  items: Creator[]
}

export async function fetchCreators(params: FetchCreatorsParams = {}): Promise<CreatorsResponse> {
  try {
    let query = supabase
      .from('v_creators')
      .select('*', { count: 'exact' })

    // Apply filters - Multi-word search (each word searched separately)
    if (params.search) {
      // Split search term into words (remove extra spaces, exclude numbers from being search terms)
      const searchWords = params.search
        .trim()
        .split(/\s+/) // Split by one or more spaces
        .filter(word => word.length >= 2) // Minimum 2 characters per word
        .filter(word => !/^\d+$/.test(word)); // Exclude pure numbers
      
      if (searchWords.length > 0) {
        // Build OR conditions for each word across username, display_name, bio, and categories
        const searchConditions = searchWords.map(word => {
          const sanitizedWord = word.replace(/[%_]/g, ''); // Sanitize special SQL LIKE characters
          return `username.ilike.%${sanitizedWord}%,display_name.ilike.%${sanitizedWord}%,bio.ilike.%${sanitizedWord}%`;
        }).join(',');
        
        query = query.or(searchConditions);
      }
    }

    if (params.category) {
      query = query.contains('categories', [params.category])
    }

    if (params.minPrice !== undefined) {
      query = query.gte('subscription_price', params.minPrice)
    }

    if (params.maxPrice !== undefined) {
      query = query.lte('subscription_price', params.maxPrice)
    }

    // Sorting
    query = query.order('promoted', { ascending: false })
    query = query.order('likes_count', { ascending: false, nullsFirst: false })

    // Pagination
    const limit = params.limit || 24
    const offset = params.offset || 0
    query = query.range(offset, offset + limit - 1)

    const { data, error, count } = await query

    if (error) throw error

    return {
      total: count || 0,
      items: data || []
    }
  } catch (error) {
    console.error('Failed to fetch creators:', error)
    throw error
  }
}

export async function fetchCreatorByUsername(username: string, incrementView: boolean = true): Promise<Creator | null> {
  try {
    const { data, error } = await supabase
      .from('v_creators')
      .select('*')
      .eq('username', username)
      .single()

    if (error) {
      if (error.code === 'PGRST116') return null // Not found
      throw error
    }

    // Increment view count if requested
    if (incrementView && data?.id) {
      await incrementCreatorViewCount(data.id)
    }

    return data
  } catch (error) {
    console.error('Failed to fetch creator:', error)
    return null
  }
}

export async function incrementCreatorViewCount(creatorId: string): Promise<void> {
  try {
    // Use RPC function to increment view count atomically
    const { error } = await supabase.rpc('increment_creator_view_count', {
      creator_id: creatorId
    })

    if (error) {
      console.error('Failed to increment view count:', error)
    }
  } catch (error) {
    console.error('Failed to increment view count:', error)
  }
}

export async function fetchCategories(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('v_categories')
      .select('category_name')
      .order('category_name')

    if (error) throw error

    return data?.map(cat => cat.category_name) || []
  } catch (error) {
    console.error('Failed to fetch categories:', error)
    return []
  }
}
