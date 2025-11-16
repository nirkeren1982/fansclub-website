import { useState, useEffect } from 'react'
import { fetchCreators, type Creator, type FetchCreatorsParams } from '@/lib/api'

interface UseCreatorsReturn {
  creators: Creator[]
  total: number
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

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
  }, [JSON.stringify(params)])

  return {
    creators,
    total,
    loading,
    error,
    refetch: loadCreators,
  }
}
