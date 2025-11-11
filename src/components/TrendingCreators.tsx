import CreatorCard from "./CreatorCard";
import { useCreators } from '../hooks/useCreators';

const TrendingCreators = () => {
  const { creators, loading, error } = useCreators({ 
    limit: 6, 
    sort: 'popular',
    dir: 'desc'
  });

  if (loading) {
    return (
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black">Trending Creators</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 h-64 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-16 md:py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black">Trending Creators</h2>
            </div>
            <div className="text-red-500 text-center py-8">Failed to load creators</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-16 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black">Trending Creators</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creators?.map((creator) => (
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
        </div>
      </div>
    </section>
  );
};

export default TrendingCreators;
