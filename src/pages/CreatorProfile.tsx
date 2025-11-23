import { useParams } from "react-router-dom";
import { useMemo, useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Instagram, Twitter } from "lucide-react";
import { useCreator } from '../hooks/useCreator';
import { useCreators } from '../hooks/useCreators';
import { MetaTags } from "@/components/SEO/MetaTags";
import { PersonSchema, BreadcrumbSchema } from "@/components/SEO/StructuredData";
import { generateTitle, truncateDescription } from "@/utils/seo";
import { getCreatorImageUrl, handleImageError } from "@/utils/imageUtils";
import type { Creator } from '@/lib/api';

const CreatorProfile = () => {
  const { username } = useParams();
  const { creator, loading, error } = useCreator(username || '');
  const { creators: allCreators } = useCreators({ limit: 50, sort: 'popular' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Get random creators (excluding current creator)
  const randomCreators = useMemo(() => {
    if (!allCreators || !username) return [];
    
    // Filter out the current creator
    const filtered = allCreators.filter(c => c.username !== username);
    
    // Shuffle and get 4 random creators
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [allCreators, username]);

  // Auto-slide carousel every 5 seconds
  useEffect(() => {
    const startAutoSlide = () => {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % randomCreators.length);
      }, 5000);
    };

    const stopAutoSlide = () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };

    if (randomCreators.length > 0) {
      startAutoSlide();
    }

    return () => stopAutoSlide();
  }, [randomCreators.length]);

  // Scroll carousel to current slide
  useEffect(() => {
    if (carouselRef.current && randomCreators.length > 0) {
      const scrollLeft = currentSlide * (window.innerWidth * 0.85 + 16); // 85vw + gap
      carouselRef.current.scrollLeft = scrollLeft;
    }
  }, [currentSlide, randomCreators.length]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="w-full py-12 md:py-16 bg-secondary/20">
            <div className="container px-8 md:px-12 lg:px-16">
              <div className="flex flex-col items-center text-center space-y-6 animate-pulse">
                <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full bg-gray-200"></div>
                <div className="space-y-2">
                  <div className="h-10 w-64 bg-gray-200 rounded"></div>
                  <div className="h-6 w-48 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  // Error or not found state
  if (error || !creator) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <section className="w-full py-12 md:py-16">
            <div className="container px-8 md:px-12 lg:px-16">
              <div className="flex flex-col items-center text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-black">404</h1>
                <h2 className="text-2xl md:text-3xl font-bold">Creator Not Found</h2>
                <p className="text-muted-foreground max-w-md">
                  Sorry, we couldn't find the creator you're looking for.
                </p>
                <Button onClick={() => window.location.href = '/'}>
                  Back to Home
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  const pageTitle = `${creator.display_name || creator.username} (@${creator.username}) - OnlyFans Profile`;
  const bioExcerpt = creator.bio ? truncateDescription(creator.bio, 155) : `OnlyFans profile for ${creator.display_name || creator.username}`;
  const pageDescription = `${bioExcerpt} - ${creator.likes_count || 0} likes, ${creator.photos_count || 0} photos, ${creator.videos_count || 0} videos. Subscription: $${creator.subscription_price || 'Free'}. View full profile on FansClubOnly.`;

  return (
    <div className="min-h-screen flex flex-col">
      <MetaTags
        title={generateTitle(pageTitle)}
        description={truncateDescription(pageDescription)}
        canonical={`/creator/${creator.username}`}
        ogImage={getCreatorImageUrl(creator.username)}
        keywords={`${creator.username}, ${creator.display_name || creator.username}, OnlyFans, ${creator.categories?.join(', ') || ''}`}
        type="profile"
      />
      <PersonSchema creator={creator} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Creators', url: '/explore' },
          { name: creator.display_name || creator.username, url: `/creator/${creator.username}` },
        ]}
      />
      
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full pt-4 md:pt-8 pb-0 bg-secondary/20">
          <div className="container px-8 md:px-12 lg:px-16">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="relative">
                <img
                  src={getCreatorImageUrl(creator.username)}
                  alt={`${creator.display_name || creator.username} - OnlyFans Creator Profile Picture`}
                  loading="eager"
                  className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full object-cover border-4 border-background shadow-lg"
                  onError={(e) => handleImageError(e, creator.username)}
                />
                {/* VERIFIED badge - Hidden until backoffice is ready
                {creator.is_verified && (
                  <Badge className="absolute bottom-4 right-4 bg-primary text-primary-foreground">
                    VERIFIED
                  </Badge>
                )}
                */}
              </div>

              <div className="space-y-2">
                <h3 className="text-h3-mobile md:text-h3-desktop font-bold text-black">
                  {creator.display_name || creator.username}
                </h3>
                <p className="text-xl text-muted-foreground">@{creator.username}</p>
              </div>

              <div className="hidden">
                {creator.categories && creator.categories.length > 0 ? (
                  creator.categories.map((category, index) => (
                    <Badge key={index} variant="secondary">
                      {category}
                    </Badge>
                  ))
                ) : creator.category ? (
                  <Badge variant="secondary">{creator.category}</Badge>
                ) : null}
              </div>

              {/* PROMOTED badge - Hidden until backoffice is ready
              {creator.promoted && (
                <Badge className="bg-primary text-primary-foreground text-sm">
                  PROMOTED
                </Badge>
              )}
              */}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="w-full py-4 bg-background" id="creators_details">
          <div className="container px-8 md:px-12 lg:px-16 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-center">About</h2>
                <p className="text-bio-mobile md:text-bio-desktop text-[hsl(0_0%_45%)] leading-relaxed">
                  {creator.bio || "No bio available"}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {creator.likes_count ? creator.likes_count.toLocaleString() : '0'}
                  </p>
                  <p className="text-sm text-muted-foreground">Likes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {creator.photos_count || creator.photo_count || '0'}
                  </p>
                  <p className="text-sm text-muted-foreground">Photos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {creator.videos_count || creator.video_count || '0'}
                  </p>
                  <p className="text-sm text-muted-foreground">Videos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">
                    {creator.subscription_price ? `$${creator.subscription_price}` : 'FREE'}
                  </p>
                  <p className="text-sm text-muted-foreground">Per Month</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-4 bg-secondary/20">
          <div className="container px-8 md:px-12 lg:px-16 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              {creator.onlyfans_url && (
                <Button 
                  size="lg" 
                  className="w-full max-w-md gap-2 text-lg font-bold"
                  onClick={() => window.open(creator.onlyfans_url, '_blank', 'noopener,noreferrer')}
                  asChild
                >
                  <a href={creator.onlyfans_url} target="_blank" rel="noopener noreferrer">
                    Visit OnlyFans Profile
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              )}

              <div className="flex gap-4">
                {creator.instagram_url && (
                  <Button 
                    size="icon" 
                    variant="outline"
                    asChild
                  >
                    <a href={creator.instagram_url} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <Instagram className="h-5 w-5" />
                    </a>
                  </Button>
                )}
                {creator.twitter_url && (
                  <Button 
                    size="icon" 
                    variant="outline"
                    asChild
                  >
                    <a href={creator.twitter_url} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Related Creators */}
        <section className="w-full py-4 bg-background">
          <div className="container px-8 md:px-12 lg:px-16">
            <h2 className="text-2xl md:text-3xl font-black mb-8 text-center">Similar Creators</h2>
            {randomCreators.length > 0 ? (
              <>
                {/* Mobile Carousel */}
                <div className="md:hidden">
                  <div 
                    ref={carouselRef}
                    className="flex gap-4 overflow-x-auto scroll-smooth pb-4 -mx-4 px-4 snap-x snap-mandatory"
                  >
                    {randomCreators.map((randomCreator) => (
                      <div key={randomCreator.id || randomCreator.username} className="flex-shrink-0 w-[85vw] snap-center">
                        <CreatorCard
                          creator={randomCreator}
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Carousel Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {randomCreators.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all ${
                          currentSlide === index 
                            ? 'w-6 bg-primary' 
                            : 'w-2 bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {randomCreators.map((randomCreator) => (
                    <CreatorCard
                      key={randomCreator.id || randomCreator.username}
                      creator={randomCreator}
                    />
                  ))}
                </div>
              </>
            ) : (
              <p className="text-center text-muted-foreground py-8">Loading similar creators...</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreatorProfile;