import { useState, useEffect } from 'react'
import { fetchCategories, type Category } from '../lib/api'

interface UseCategoriesReturn {
  categories: Category[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * React hook for fetching categories list
 * 
 * @example
 * const { categories, loading, error } = useCategories()
 */
export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchCategories()
      setCategories(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load categories')
      setCategories([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, []) // Only fetch once on mount

  return {
    categories,
    loading,
    error,
    refetch: loadCategories,
  }
}

