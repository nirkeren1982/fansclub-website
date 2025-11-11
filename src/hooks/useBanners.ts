import { useState, useEffect } from 'react'
import { fetchBanners, type Banner } from '@/lib/api'

interface UseBannersReturn {
  banners: Banner[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

/**
 * React hook for fetching banners by position
 * 
 * @example
 * const { banners, loading, error } = useBanners('header')
 */
export function useBanners(position: 'header' | 'sidebar' | 'footer' = 'header'): UseBannersReturn {
  const [banners, setBanners] = useState<Banner[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadBanners = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchBanners(position)
      setBanners(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load banners')
      setBanners([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadBanners()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]) // Re-fetch when position changes

  return {
    banners,
    loading,
    error,
    refetch: loadBanners,
  }
}

