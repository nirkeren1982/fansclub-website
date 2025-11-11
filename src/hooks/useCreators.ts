import { useState, useEffect } from 'react'
import { fetchCreators, type Creator, type FetchCreatorsParams } from '../lib/api'

interface UseCreatorsReturn {
  creators: Creator[]
  total: number
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * React hook for fetching creators list with filters
 * 
 * @example
 * const { creators, total, loading, error } = useCreators({ limit: 24, sort: 'popular' })
 */
export function useCreators(params: FetchCreatorsParams = {}): UseCreatorsReturn {
  const [creators, setCreators] = useState<Creator[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCreators = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCreators(params)
      setCreators(data.items)
      setTotal(data.total)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load creators')
      setCreators([])
      setTotal(0)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCreators()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]) // Re-fetch when params change

  return {
    creators,
    total,
    loading,
    error,
    refetch: loadCreators,
  }
}

