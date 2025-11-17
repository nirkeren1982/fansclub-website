import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";
import { fetchCreators, type Creator } from '../lib/api';
import { MetaTags } from "@/components/SEO/MetaTags";
import { ItemListSchema, BreadcrumbSchema } from "@/components/SEO/StructuredData";
import { generateTitle, getCategoryDisplayName } from "@/utils/seo";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const [allCreators, setAllCreators] = useState<Creator[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  
  const observerTarget = useRef<HTMLDivElement>(null);
  const limit = 24;

  const categoryName = slug ? getCategoryDisplayName(slug) : '';

  // Fetch initial creators
  useEffect(() => {
    const loadCreators = async () => {
      setIsLoading(true);
      setError(null);
      setAllCreators([]);
      setOffset(0);
      setHasMore(true);

      try {
        const response = await fetchCreators({
          limit,
          offset: 0,
          category: slug,
        });
        
        const creators = response.items || [];
        setAllCreators(creators);
        setHasMore(creators.length === limit);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load creators');
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      loadCreators();
    }
  }, [slug]);

  // Load more creators
  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore || !slug) return;

    setIsLoadingMore(true);
    const newOffset = offset + limit;

    try {
      const response = await fetchCreators({
        limit,
        offset: newOffset,
        category: slug,
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
  }, [isLoadingMore, hasMore, offset, slug]);

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

  const pageTitle = `${categoryName} OnlyFans Creators`;
  const pageDescription = `Discover ${categoryName} OnlyFans creators. Browse verified profiles with photos, videos, and subscription prices. ${allCreators.length > 0 ? `${allCreators.length}+ creators` : 'Explore creators'} in this category.`;

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle(pageTitle)}
        description={pageDescription}
        canonical={`/category/${slug}`}
        keywords={`${categoryName}, OnlyFans, ${slug}, creators, adult content, verified models`}
      />
      {allCreators.length > 0 && (
        <>
          <ItemListSchema
            creators={allCreators}
            pageTitle={pageTitle}
            pageUrl={`/category/${slug}`}
          />
          <BreadcrumbSchema
            items={[
              { name: 'Home', url: '/' },
              { name: 'Categories', url: '/explore' },
              { name: categoryName, url: `/category/${slug}` },
            ]}
          />
        </>
      )}
      
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-8 md:px-24 lg:px-24">
            <div className="flex flex-col space-y-8">
              {/* Header */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black">{categoryName} OnlyFans Creators</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Discover and explore {categoryName.toLowerCase()} creators
                </p>
              </div>

              {/* Error State */}
              {error ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-destructive">Error Loading Creators</p>
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
              ) : allCreators.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-muted-foreground">No creators found</p>
                  <p className="text-muted-foreground mt-2">
                    No creators in this category yet. Check back later!
                  </p>
                </div>
              ) : (
                <>
                  {/* Creators Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {allCreators.map((creator) => (
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
                  {!hasMore && allCreators.length > 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>You've reached the end! • {allCreators.length} creators loaded</p>
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

export default Category;

