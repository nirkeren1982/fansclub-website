import { useCreators } from "@/hooks/useCreators";
import  CreatorCard  from "@/components/CreatorCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Sparkles, ArrowRight } from "lucide-react";
import { useMemo } from "react";
import type { Creator } from "@/lib/api";

// Helper function to get today's date string (YYYY-MM-DD)
const getTodayDateString = (): string => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};

// Helper function to get 9 random creators for today
const getDailyRandomCreators = (allCreators: Creator[], count: number = 9): Creator[] => {
  if (!allCreators || allCreators.length === 0) return [];

  const storageKey = 'trending_creators_daily';
  const today = getTodayDateString();

  try {
    // Try to get stored selection from localStorage
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      const data = JSON.parse(stored);
      
      // Check if stored data is from today
      if (data.date === today && Array.isArray(data.creatorIds)) {
        const selected = allCreators.filter(c => data.creatorIds.includes(c.id));
        
        // If we have the full count, use stored selection
        if (selected.length === count) {
          console.log('Using today\'s stored trending creators');
          return selected;
        }
      }
    }
  } catch (e) {
    console.warn('Failed to parse stored trending creators, generating new selection');
  }

  // Generate new random selection for today
  console.log('Generating new random trending creators for today');
  
  // Filter to only quality creators (relaxed filter to ensure we get results)
  const eligible = allCreators.filter(c => 
    // Just ensure they have basic required fields
    c.username && c.id
  );

  console.log('getDailyRandomCreators:', {
    totalCreators: allCreators.length,
    eligibleCreators: eligible.length,
    allStatuses: allCreators.map(c => ({ username: c.username, status: c.status, verified: c.is_verified, hasImage: !!c.profile_image_url }))
  });

  if (eligible.length === 0) {
    console.warn('No eligible creators found! Returning all creators without filter');
    // If no eligible creators, return a random selection from all creators
    const shuffled = [...allCreators];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, Math.min(count, shuffled.length));
  }

  // Shuffle using Fisher-Yates algorithm (better than sort random)
  const shuffled = [...eligible];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Take the requested count
  const selected = shuffled.slice(0, Math.min(count, shuffled.length));
  
  // Store the IDs with today's date
  try {
    localStorage.setItem(storageKey, JSON.stringify({
      date: today,
      creatorIds: selected.map(c => c.id)
    }));
  } catch (e) {
    console.warn('Failed to store trending creators in localStorage');
  }

  return selected;
};

export function TrendingCreators() {
  const { creators, loading, error } = useCreators({
    limit: 100 // Fetch a larger pool to randomize from
  });

  // Get daily random selection using useMemo
  const dailyCreators = useMemo(() => {
    return getDailyRandomCreators(creators || [], 12);
  }, [creators]);

  console.log("TrendingCreators Debug:", { 
    totalCreators: creators?.length,
    dailySelected: dailyCreators.length,
    loading, 
    error,
    creators: creators,
    dailyCreators: dailyCreators
  });

  const gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8";

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Creators</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Loading the hottest creators right now...
            </p>
          </div>
          <div className={gridClass}>
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <Alert variant="destructive" className="max-w-2xl mx-auto">
            <AlertDescription>
              Failed to load trending creators. Please try again later.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  if (!dailyCreators || dailyCreators.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8 md:px-12 lg:px-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Creators</h2>
            <p className="text-gray-600 mb-8">
              No featured creators available at the moment.
            </p>
            <a href="/explore" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
              Explore All Creators
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">TRENDING NOW</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Creators</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most popular creators on OnlyFans right now • Refreshed daily
          </p>
        </div>
        <div className={gridClass}>
          {dailyCreators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/explore" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 hover:scale-105">
            Explore
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
    
  );
}