import { useQuery } from '@tanstack/react-query'
import { fetchCreators, type Creator, type FetchCreatorsParams } from '@/lib/api'

interface UseCreatorsReturn {
  creators: Creator[]
  total: number
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useCreators(params: FetchCreatorsParams = {}): UseCreatorsReturn {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['creators', params],
    queryFn: () => fetchCreators(params),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  })

  return {
    creators: data?.items || [],
    total: data?.total || 0,
    loading: isLoading,
    error: error ? (error instanceof Error ? error.message : 'Failed to load creators') : null,
    refetch: async () => {
      await refetch()
    },
  }
}
