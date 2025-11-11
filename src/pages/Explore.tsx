import { useState } from 'react';
import Header from "@/components/Header";
import CreatorCard from "@/components/CreatorCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";
import { useCreators } from '../hooks/useCreators';
import { useCategories } from '../hooks/useCategories';

const Explore = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'newest' | 'price_low' | 'price_high'>('popular');
  const [searchInput, setSearchInput] = useState('');
  
  const limit = 24;
  const { creators, total, loading } = useCreators({
    limit,
    offset: (page - 1) * limit,
    sort: sortBy,
    search: searchQuery,
    category: selectedCategory,
  });

  const { categories } = useCategories();
  
  const totalPages = Math.ceil(total / limit);

  const handleSearch = () => {
    setSearchQuery(searchInput);
    setPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === 'all' ? '' : value);
    setPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value as 'popular' | 'newest' | 'price_low' | 'price_high');
    setPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col space-y-8">
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-black">Explore Creators</h1>
                <p className="text-muted-foreground mt-2 text-lg">
                  Discover amazing creators across all categories · {total.toLocaleString()} creators
                </p>
              </div>

              {/* Filters Section */}
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search */}
                <div className="flex-1 flex gap-2">
                  <Input
                    placeholder="Search creators..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    className="flex-1"
                  />
                  <Button onClick={handleSearch} size="icon">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory || 'all'} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="w-full md:w-[200px]">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

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

              {/* Loading State */}
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(24)].map((_, i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-gray-200 h-64 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              ) : creators.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-2xl font-bold text-muted-foreground">No creators found</p>
                  <p className="text-muted-foreground mt-2">Try adjusting your filters</p>
                </div>
              ) : (
                <>
                  {/* Creators Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {creators.map((creator) => (
                      <CreatorCard
                        key={creator.id || creator.username}
                        name={creator.display_name || creator.username}
                        username={creator.username}
                        price={creator.subscription_price ? `$${creator.subscription_price}` : "FREE"}
                        description={creator.bio?.substring(0, 100) || "No bio available"}
                        image={creator.profile_image_url}
                        badge={creator.is_verified ? "VERIFIED" : undefined}
                      />
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 pt-8">
                      <Button
                        variant="outline"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                      >
                        Previous
                      </Button>
                      
                      <div className="flex gap-2">
                        {[...Array(Math.min(5, totalPages))].map((_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (page <= 3) {
                            pageNum = i + 1;
                          } else if (page >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = page - 2 + i;
                          }
                          
                          return (
                            <Button
                              key={pageNum}
                              variant={page === pageNum ? "default" : "outline"}
                              onClick={() => setPage(pageNum)}
                            >
                              {pageNum}
                            </Button>
                          );
                        })}
                      </div>

                      <Button
                        variant="outline"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                      >
                        Next
                      </Button>
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
