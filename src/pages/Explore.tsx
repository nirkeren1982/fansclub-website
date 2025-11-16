import { useState, useEffect, useRef, useCallback } from 'react';
import Header from "@/components/Header";
import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreators } from '../hooks/useCreators';
import type { Creator } from '@/lib/api';
import { MetaTags } from "@/components/SEO/MetaTags";
import { ItemListSchema } from "@/components/SEO/StructuredData";
import { generateTitle } from "@/utils/seo";

const Explore = () => {
  const [allCreators, setAllCreators] = useState<Creator[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price_low' | 'price_high'>('popular');
  const [hasMore, setHasMore] = useState(true);
  const observerTarget = useRef<HTMLDivElement>(null);
  
  const limit = 24;
  const { creators, total, loading, error } = useCreators({
    limit,
    offset: (currentPage - 1) * limit,
  });

  // Helper function for alphabetical sorting (case-insensitive)
  const sortAlphabetically = (a: Creator, b: Creator) => {
    const nameA = a.username.toLowerCase();
    const nameB = b.username.toLowerCase();
    return nameA.localeCompare(nameB);
  };

  // Apply sorting to creators
  const sortCreators = (creatorsToSort: Creator[]) => {
    const sorted = [...creatorsToSort];
    
    switch (sortBy) {
      case 'price_low':
        return sorted.sort((a, b) => {
          const priceA = a.subscription_price || 0;
          const priceB = b.subscription_price || 0;
          
          if (priceA === priceB) {
            return sortAlphabetically(a, b);
          }
          return priceA - priceB;
        });
        
      case 'price_high':
        return sorted.sort((a, b) => {
          const priceA = a.subscription_price || 0;
          const priceB = b.subscription_price || 0;
          
          if (priceA === priceB) {
            return sortAlphabetically(a, b);
          }
          return priceB - priceA;
        });
        
      case 'popular':
        return sorted.sort((a, b) => {
          const viewsA = a.view_count || 0;
          const viewsB = b.view_count || 0;
          
          if (viewsA === viewsB) {
            return sortAlphabetically(a, b);
          }
          return viewsB - viewsA; // Most views first
        });
        
      case 'newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.date_added || 0).getTime();
          const dateB = new Date(b.date_added || 0).getTime();
          
          if (dateA === dateB) {
            return sortAlphabetically(a, b);
          }
          return dateB - dateA; // Newest first
        });
        
      default:
        return sorted;
    }
  };

  // Append new creators when they load
  useEffect(() => {
    if (creators && creators.length > 0) {
      if (currentPage === 1) {
        // First page - replace all creators and apply sorting
        setAllCreators(sortCreators(creators));
      } else {
        // Subsequent pages - append to existing and re-sort all
        const combined = [...allCreators, ...creators];
        setAllCreators(sortCreators(combined));
      }
      
      // Check if there are more creators to load
      const loadedCount = currentPage * limit;
      setHasMore(loadedCount < total);
    }
  }, [creators, currentPage, total, limit]);

  // Reset when sort changes
  const handleSortChange = (value: string) => {
    setSortBy(value as 'popular' | 'newest' | 'price_low' | 'price_high');
    setCurrentPage(1);
    setAllCreators([]);
    setHasMore(true);
  };

  // Intersection Observer for infinite scroll
  const handleObserver = useCallback((entries: IntersectionObserverEntry[]) => {
    const [target] = entries;
    if (target.isIntersecting && hasMore && !loading) {
      setCurrentPage(prev => prev + 1);
    }
  }, [hasMore, loading]);

  useEffect(() => {
    const element = observerTarget.current;
    if (!element) return;

    const option = {
      root: null,
      rootMargin: '100px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);

    return () => observer.unobserve(element);
  }, [handleObserver]);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle('Explore OnlyFans Models')}
        description="Browse and discover verified OnlyFans creators. Filter by category, price, and popularity. Find your next OnlyFans creator with our comprehensive directory."
        canonical="/explore"
        keywords="OnlyFans models, explore creators, adult content, OnlyFans directory, verified models"
      />
      {allCreators.length > 0 && (
        <ItemListSchema
          creators={allCreators}
          pageTitle="Explore OnlyFans Models"
          pageUrl="/explore"
        />
      )}
      
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-8 md:px-12 lg:px-16">
            <div className="flex flex-col space-y-8">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black">Explore OnlyFans Models</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Find your next OnlyFans creator
                </p>
              </div>

              {/* Sorting Section */}
              <div className="flex justify-end">
                {/* Sort Filter */}
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Most Popular</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Error State */}
              {error ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-destructive">Error Loading Creators</p>
                  <p className="text-muted-foreground mt-2">{error}</p>
                </div>
              ) : (
                <>
                  {/* Creators Grid */}
                  {allCreators.length === 0 && loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {[...Array(24)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="bg-gray-200 h-64 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  ) : allCreators.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-2xl font-bold text-muted-foreground">No creators found</p>
                      <p className="text-muted-foreground mt-2">Check back later for new creators</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {allCreators.map((creator) => (
                        <CreatorCard
                          key={creator.id || creator.username}
                          creator={creator}
                        />
                      ))}
                    </div>
                  )}

                  {/* Loading indicator for lazy load */}
                  {loading && allCreators.length > 0 && (
                    <div className="flex justify-center items-center py-8">
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                        <p className="text-muted-foreground">Loading more creators...</p>
                      </div>
                    </div>
                  )}

                  {/* Intersection observer target for infinite scroll */}
                  {hasMore && !loading && (
                    <div ref={observerTarget} className="h-10" />
                  )}

                  {/* End of list message */}
                  {!hasMore && allCreators.length > 0 && (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        You've reached the end! • {allCreators.length} creators loaded
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Explore;