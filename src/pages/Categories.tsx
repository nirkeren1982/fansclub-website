import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Flame, Gift, Clock, Target, MapPin } from "lucide-react";
import { useCategories } from '../hooks/useCategories';

const Categories = () => {
  const { categories, loading, error } = useCategories();

  const countries = [
    { emoji: "🇦🇷", name: "Argentina", slug: "argentina" },
    { emoji: "🇦🇺", name: "Australia", slug: "australia" },
    { emoji: "🇦🇹", name: "Austria", slug: "austria" },
    { emoji: "🇧🇪", name: "Belgium", slug: "belgium" },
    { emoji: "🇧🇷", name: "Brazil", slug: "brazil" },
    { emoji: "🇨🇦", name: "Canada", slug: "canada" },
    { emoji: "🇨🇱", name: "Chile", slug: "chile" },
    { emoji: "🇨🇳", name: "China", slug: "china" },
    { emoji: "🇨🇴", name: "Colombia", slug: "colombia" },
    { emoji: "🇨🇿", name: "Czech Republic", slug: "czech-republic" },
    { emoji: "🇩🇰", name: "Denmark", slug: "denmark" },
    { emoji: "🇫🇷", name: "France", slug: "france" },
    { emoji: "🇩🇪", name: "Germany", slug: "germany" },
    { emoji: "🇬🇷", name: "Greece", slug: "greece" },
    { emoji: "🇮🇳", name: "India", slug: "india" },
    { emoji: "🇮🇪", name: "Ireland", slug: "ireland" },
    { emoji: "🇮🇹", name: "Italy", slug: "italy" },
    { emoji: "🇯🇵", name: "Japan", slug: "japan" },
    { emoji: "🇲🇽", name: "Mexico", slug: "mexico" },
    { emoji: "🇳🇱", name: "Netherlands", slug: "netherlands" },
    { emoji: "🇳🇿", name: "New Zealand", slug: "new-zealand" },
    { emoji: "🇳🇴", name: "Norway", slug: "norway" },
    { emoji: "🇵🇱", name: "Poland", slug: "poland" },
    { emoji: "🇵🇹", name: "Portugal", slug: "portugal" },
    { emoji: "🇷🇺", name: "Russia", slug: "russia" },
    { emoji: "🇪🇸", name: "Spain", slug: "spain" },
    { emoji: "🇸🇪", name: "Sweden", slug: "sweden" },
    { emoji: "🇨🇭", name: "Switzerland", slug: "switzerland" },
    { emoji: "🇹🇭", name: "Thailand", slug: "thailand" },
    { emoji: "🇬🇧", name: "United Kingdom", slug: "united-kingdom" },
    { emoji: "🇺🇸", name: "United States", slug: "united-states" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Explore <span className="text-primary">OnlyFans Models</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Browse through categories and locations to find your perfect creator
              </p>
            </div>

            {/* Featured Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
              <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white group hover:shadow-lg transition-all cursor-pointer">
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <Flame className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Best Models</h3>
                  </div>
                  <p className="text-sm opacity-90">Discover top-rated OnlyFans creators</p>
                </div>
                <Flame className="absolute bottom-0 right-0 h-32 w-32 opacity-10 transform translate-x-8 translate-y-8" />
              </div>

              <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white group hover:shadow-lg transition-all cursor-pointer">
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <Gift className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Free Models</h3>
                  </div>
                  <p className="text-sm opacity-90">Browse completely free OnlyFans accounts</p>
                </div>
                <Gift className="absolute bottom-0 right-0 h-32 w-32 opacity-10 transform translate-x-8 translate-y-8" />
              </div>

              <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-green-500 to-teal-500 text-white group hover:shadow-lg transition-all cursor-pointer">
                <div className="relative z-10 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6" />
                    <h3 className="text-xl font-bold">Free-Trial Accounts</h3>
                  </div>
                  <p className="text-sm opacity-90">Try premium content with free trial offers</p>
                </div>
                <Clock className="absolute bottom-0 right-0 h-32 w-32 opacity-10 transform translate-x-8 translate-y-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="w-full py-16 md:py-24 bg-card">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black">
                    Explore Models <span className="text-primary">by Categories</span>
                  </h2>
                  <p className="text-muted-foreground mt-1">Find creators based on your interests</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-primary">⭐</span> All Categories (Themes, Genres & More)
                </h3>
                {error ? (
                  <div className="text-center py-8">
                    <p className="text-destructive font-bold text-lg">Error Loading Categories</p>
                    <p className="text-muted-foreground mt-2">{error}</p>
                  </div>
                ) : loading ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {[...Array(20)].map((_, i) => (
                      <div key={i} className="h-12 bg-gray-200 rounded animate-pulse"></div>
                    ))}
                  </div>
                ) : categories.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8">No categories available</p>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {categories.map((category) => (
                      <Link
                        key={category.category_name}
                        to={`/explore?category=${encodeURIComponent(category.category_name)}`}
                      >
                        <Button
                          variant="outline"
                          className="w-full justify-between h-auto py-3 px-4 text-left hover:border-primary hover:text-primary transition-colors"
                        >
                          <span className="text-sm font-medium truncate">{category.category_name}</span>
                          <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                            {category.creator_count.toLocaleString()}
                          </span>
                        </Button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black">
                    Explore Models <span className="text-primary">by Location</span>
                  </h2>
                  <p className="text-muted-foreground mt-1">Discover creators from around the world</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">All Countries</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                  {countries.map((country) => (
                    <Button
                      key={country.slug}
                      variant="outline"
                      className="justify-start h-auto py-3 px-4 text-left hover:border-primary hover:text-primary transition-colors"
                    >
                      <span className="text-xl mr-2">{country.emoji}</span>
                      <span className="text-sm font-medium truncate">{country.name}</span>
                    </Button>
                  ))}
                </div>
              </div>

              {/* Find Near Me */}
              <div className="bg-card rounded-xl p-8 text-center space-y-4 border">
                <h3 className="text-2xl font-bold">Find Creators Near You</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover OnlyFans creators in your local area. Connect with models from your city or region.
                </p>
                <Button size="lg" className="gap-2">
                  <MapPin className="h-5 w-5" />
                  Find Models Near Me
                </Button>
              </div>

              {/* Search CTA */}
              <div className="bg-primary/5 rounded-xl p-8 text-center space-y-4 border border-primary/20">
                <h3 className="text-2xl font-bold">Can't find what you're looking for?</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Use our advanced search to find your perfect creator
                </p>
                <Button variant="outline" size="lg">
                  Go to Advanced Search
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
