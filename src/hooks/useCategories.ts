import { useState, useEffect } from 'react'
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
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const categoryNames = await fetchCategories()
      
      // Transform array of strings into objects with creator_count
      // For now, we'll set count to 0 since fetchCategories only returns names
      const categoriesWithCount = categoryNames.map(name => ({
        category_name: name,
        creator_count: 0
      }))
      
      setCategories(categoriesWithCount)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load categories')
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return {
    categories,
    loading,
    error,
    refetch: loadCategories,
  }
}
