import { useState, useEffect } from 'react'
import { fetchCreatorByUsername, type Creator } from '@/lib/api'

interface UseCreatorReturn {
  creator: Creator | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * React hook for fetching a single creator by username
 * 
 * @example
 * const { creator, loading, error } = useCreator('skylarmaexo')
 */
export function useCreator(username: string): UseCreatorReturn {
  const [creator, setCreator] = useState<Creator | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCreator = async () => {
    if (!username) {
      setError('Username is required')
      setLoading(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      const data = await fetchCreatorByUsername(username)
      
      if (!data) {
        setError('Creator not found')
        setCreator(null)
      } else {
        setCreator(data)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load creator')
      setCreator(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCreator()
  }, [username])

  return {
    creator,
    loading,
    error,
    refetch: loadCreator,
  }
}