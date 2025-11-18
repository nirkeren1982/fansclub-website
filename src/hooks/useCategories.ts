import { useQuery } from '@tanstack/react-query'
import { fetchCategories } from '@/lib/api'

interface Category {
  category_name: string
  creator_count: number
}

interface UseCategoriesReturn {
  categories: Category[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useCategories(): UseCategoriesReturn {
  const {
    data: categoryNames,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => fetchCategories(),
    staleTime: 10 * 60 * 1000, // 10 minutes (categories change less frequently)
    retry: 1,
  })

  // Transform array of strings into objects with creator_count
  // For now, we'll set count to 0 since fetchCategories only returns names
  const categories: Category[] = (categoryNames || []).map(name => ({
    category_name: name,
    creator_count: 0
  }))

  return {
    categories,
    loading: isLoading,
    error: error ? (error instanceof Error ? error.message : 'Failed to load categories') : null,
    refetch: async () => {
      await refetch()
    },
  }
}
