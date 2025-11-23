import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "@/components/Header";
import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { fetchCreators, type Creator } from '../lib/api';
import { MetaTags } from "@/components/SEO/MetaTags";
import { ItemListSchema } from "@/components/SEO/StructuredData";
import { generateTitle } from "@/utils/seo";

const Search = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  
  const [sortBy, setSortBy] = useState<'price_low' | 'price_high'>('price_low');
  const [allCreators, setAllCreators] = useState<Creator[]>([]);
  const [displayedCreators, setDisplayedCreators] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  
  const observerTarget = useRef<HTMLDivElement>(null);
  const limit = 24;

  // Fetch initial creators
  useEffect(() => {
    const loadCreators = async () => {
      setIsLoading(true);
      setError(null);
      setAllCreators([]);
      setDisplayedCreators([]);
      setOffset(0);
      setHasMore(true);

      try {
        const response = await fetchCreators({
          limit,
          offset: 0,
          search: searchQuery,
        });
        
        const creators = response.items || [];
        setAllCreators(creators);
        const sorted = sortCreators(creators, sortBy);
        setDisplayedCreators(sorted);
        setHasMore(creators.length === limit);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load creators');
      } finally {
        setIsLoading(false);
      }
    };

    loadCreators();
  }, [searchQuery]);

  // Sort function
  const sortCreators = (creators: Creator[], sort: string) => {
    if (!Array.isArray(creators) || creators.length === 0) return [];
    
    return [...creators].sort((a, b) => {
      const priceA = a.subscription_price || 0;
      const priceB = b.subscription_price || 0;
      
      if (sort === 'price_low') {
        if (priceA !== priceB) return priceA - priceB;
      } else if (sort === 'price_high') {
        if (priceA !== priceB) return priceB - priceA;
      }
      
      // Alphabetical tie-breaker
      const nameA = (a.display_name || a.username || '').toLowerCase();
      const nameB = (b.display_name || b.username || '').toLowerCase();
      return nameA.localeCompare(nameB);
    });
  };

  // Re-sort when sort option changes
  useEffect(() => {
    if (Array.isArray(allCreators) && allCreators.length > 0) {
      const sorted = sortCreators(allCreators, sortBy);
      setDisplayedCreators(sorted);
    }
  }, [sortBy, allCreators]);

  // Load more creators
  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);
    const newOffset = offset + limit;

    try {
      const response = await fetchCreators({
        limit,
        offset: newOffset,
        search: searchQuery,
      });

      const creators = response.items || [];
      
      if (creators.length === 0) {
        setHasMore(false);
      } else {
        setAllCreators(prev => [...prev, ...creators]);
        setOffset(newOffset);
        setHasMore(creators.length === limit);
      }
    } catch (err) {
      console.error('Error loading more creators:', err);
    } finally {
      setIsLoadingMore(false);
    }
  }, [isLoadingMore, hasMore, offset, searchQuery]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoadingMore) {
          loadMore();
        }
      },
      { threshold: 0.1 }
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [hasMore, isLoadingMore, loadMore]);

  const handleSortChange = (value: string) => {
    setSortBy(value as 'price_low' | 'price_high');
  };

  const pageTitle = searchQuery 
    ? `${searchQuery} OnlyFans Creators - Search Results`
    : 'Search OnlyFans Creators';
  
  const pageDescription = searchQuery
    ? `Search results for "${searchQuery}" - Browse OnlyFans creators matching your search. Filter by price and verification status.`
    : 'Search and discover OnlyFans creators. Find your favorite adult content creators.';

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle(pageTitle)}
        description={pageDescription}
        canonical={searchQuery ? `/search?q=${encodeURIComponent(searchQuery)}` : '/search'}
        keywords={`${searchQuery}, OnlyFans, creators, search, adult content`}
      />
      {displayedCreators.length > 0 && (
        <ItemListSchema
          creators={displayedCreators}
          pageTitle={pageTitle}
          pageUrl={`/search?q=${encodeURIComponent(searchQuery)}`}
        />
      )}
      
      <Header />
      <main className="flex-1">
        <section className="w-full py-8 md:py-24 bg-background">
          <div className="container px-8 md:px-24 lg:px-24">
            <div className="flex flex-col space-y-8">
              {/* Header */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black">Search Results</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Showing results for "{searchQuery}"
                </p>
              </div>

              {/* Sorting Menu */}
              <div className="flex justify-end">
                <Select value={sortBy} onValueChange={handleSortChange}>
                  <SelectTrigger className="w-full md:w-[220px]">
                    <SelectValue placeholder="Sort by price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price_low">Price: Low to High</SelectItem>
                    <SelectItem value="price_high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Error State */}
              {error ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-destructive">Error Loading Results</p>
                  <p className="text-muted-foreground mt-2">{error}</p>
                </div>
              ) : isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-64 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              ) : displayedCreators.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-muted-foreground">No creators found</p>
                  <p className="text-muted-foreground mt-2">
                    Try searching with different keywords
                  </p>
                </div>
              ) : (
                <>
                  {/* Creators Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {displayedCreators.map((creator) => (
                      <CreatorCard
                        key={creator.id || creator.username}
                        creator={creator}
                      />
                    ))}
                  </div>

                  {/* Loading More Indicator */}
                  {isLoadingMore && (
                    <div className="flex justify-center items-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                      <span className="ml-2 text-muted-foreground">Loading more creators...</span>
                    </div>
                  )}

                  {/* End of Results */}
                  {!hasMore && displayedCreators.length > 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>You've reached the end! • {displayedCreators.length} creators loaded</p>
                    </div>
                  )}

                  {/* Intersection Observer Target */}
                  <div ref={observerTarget} className="h-10" />
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

export default Search;

