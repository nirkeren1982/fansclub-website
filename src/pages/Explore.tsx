import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from "@/components/Header";
import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCreators } from '../hooks/useCreators';
import type { Creator } from '@/lib/api';
import { MetaTags } from "@/components/SEO/MetaTags";
import { ItemListSchema } from "@/components/SEO/StructuredData";
import { generateTitle } from "@/utils/seo";

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const creatorsPerPage = 28; // 7 rows × 4 columns
  
  // Get page and sort from URL params, with defaults and validation
  const pageFromUrl = parseInt(searchParams.get('page') || '1', 10);
  const currentPage = pageFromUrl > 0 ? pageFromUrl : 1; // Ensure page is at least 1
  const sortBy = (searchParams.get('sort') || 'popular') as 'popular' | 'newest' | 'price_low' | 'price_high';
  
  // Update URL params when page or sort changes
  const setCurrentPage = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('page', page.toString());
    setSearchParams(newParams, { replace: true });
  };
  
  const updateSortBy = (sort: 'popular' | 'newest' | 'price_low' | 'price_high') => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', sort);
    newParams.set('page', '1'); // Reset to page 1 when sort changes
    setSearchParams(newParams, { replace: true });
  };
  
  const { creators, total, loading, error } = useCreators({
    limit: creatorsPerPage,
    offset: (currentPage - 1) * creatorsPerPage,
  });

  // Helper function for alphabetical sorting (case-insensitive)
  const sortAlphabetically = (a: Creator, b: Creator) => {
    const nameA = a.username.toLowerCase();
    const nameB = b.username.toLowerCase();
    return nameA.localeCompare(nameB);
  };

  // Apply sorting to creators
  const sortedCreators = (() => {
    if (!creators) return [];
    const sorted = [...creators];
    
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
  })();

  // Handle sort change
  const handleSortChange = (value: string) => {
    updateSortBy(value as 'popular' | 'newest' | 'price_low' | 'price_high');
  };

  // Calculate pagination info
  const totalPages = Math.ceil(total / creatorsPerPage);
  
  // Ensure currentPage doesn't exceed totalPages (fix edge cases)
  useEffect(() => {
    if (totalPages > 0 && currentPage > totalPages) {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('page', '1');
      setSearchParams(newParams, { replace: true });
    }
  }, [totalPages, currentPage, searchParams, setSearchParams]);
  const startIndex = (currentPage - 1) * creatorsPerPage + 1;
  const endIndex = Math.min(currentPage * creatorsPerPage, total);

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle('Explore OnlyFans Models')}
        description="Browse and discover verified OnlyFans creators. Filter by category, price, and popularity. Find your next OnlyFans creator with our comprehensive directory."
        canonical="/explore"
        keywords="OnlyFans models, explore creators, adult content, OnlyFans directory, verified models"
      />
      {sortedCreators.length > 0 && (
        <ItemListSchema
          creators={sortedCreators}
          pageTitle="Explore OnlyFans Models"
          pageUrl={`/explore?page=${currentPage}`}
        />
      )}
      
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-8 md:px-24 lg:px-24">
            <div className="flex flex-col space-y-8">
              <div className="text-center md:text-center">
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
                  {sortedCreators.length === 0 && loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {[...Array(28)].map((_, i) => (
                        <div key={i} className="animate-pulse">
                          <div className="bg-gray-200 h-64 rounded-lg"></div>
                        </div>
                      ))}
                    </div>
                  ) : sortedCreators.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-2xl font-bold text-muted-foreground">No creators found</p>
                      <p className="text-muted-foreground mt-2">Check back later for new creators</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                      {sortedCreators.map((creator) => (
                        <CreatorCard
                          key={creator.id || creator.username}
                          creator={creator}
                        />
                      ))}
                    </div>
                  )}

                  {/* Pagination Info */}
                  {sortedCreators.length > 0 && (
                    <div className="flex justify-center py-8 border-t pt-8">
                      <div className="flex gap-2 items-center flex-wrap justify-center">
                        <Button
                          variant="outline"
                          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                          disabled={currentPage === 1 || loading}
                        >
                          ← Previous
                        </Button>
                        
                        {/* Page Numbers */}
                        <div className="flex gap-1">
                          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNum;
                            if (totalPages <= 5) {
                              pageNum = i + 1;
                            } else if (currentPage <= 3) {
                              pageNum = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                              pageNum = totalPages - 4 + i;
                            } else {
                              pageNum = currentPage - 2 + i;
                            }
                            
                            return (
                              <Button
                                key={pageNum}
                                variant={currentPage === pageNum ? "default" : "outline"}
                                onClick={() => setCurrentPage(pageNum)}
                                disabled={loading}
                                className="w-10"
                              >
                                {pageNum}
                              </Button>
                            );
                          })}
                        </div>

                        <Button
                          variant="outline"
                          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                          disabled={currentPage === totalPages || loading}
                        >
                          Next →
                        </Button>
                      </div>
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