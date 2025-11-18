import { useQuery } from '@tanstack/react-query'
import { fetchCreatorByUsername, type Creator } from '@/lib/api'

interface UseCreatorReturn {
  creator: Creator | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * React hook for fetching a single creator by username
 * Uses React Query for caching and automatic refetching
 * 
 * @example
 * const { creator, loading, error } = useCreator('skylarmaexo')
 */
export function useCreator(username: string): UseCreatorReturn {
  const {
    data: creator,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['creator', username],
    queryFn: () => fetchCreatorByUsername(username),
    enabled: !!username, // Only fetch if username is provided
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  })

  return {
    creator: creator || null,
    loading: isLoading,
    error: error 
      ? (error instanceof Error ? error.message : 'Failed to load creator')
      : (!creator && username ? 'Creator not found' : null),
    refetch: async () => {
      await refetch()
    },
  }
}