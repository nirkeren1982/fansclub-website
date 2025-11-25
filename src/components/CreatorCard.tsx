import { memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Creator } from "@/lib/api";
import { getCreatorImageUrl, handleImageError } from "@/utils/imageUtils";

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = memo(({ creator }: CreatorCardProps) => {
  // Format likes count with commas
  const formatLikes = (likes: number | null) => {
    if (likes === null || likes === undefined) return "0";
    return likes.toLocaleString();
  };

  // Format likes count with K/M notation
  const formatLikesCompact = (likes: number | null) => {
    if (likes === null || likes === undefined) return "0";
    
    if (likes < 1000) {
      return `${likes}`;
    } else if (likes < 1000000) {
      // Format as K (e.g., 8.3K, 830K)
      const thousands = likes / 1000;
      // If it's a whole number, show without decimal (e.g., 830K)
      if (thousands % 1 === 0) {
        return `${thousands}K`;
      }
      // Otherwise show one decimal place (e.g., 8.3K)
      return `${thousands.toFixed(1)}K`;
    } else {
      // Format as M (e.g., 1.6M)
      const millions = likes / 1000000;
      return `${millions.toFixed(1)}M`;
    }
  };

  // Format price
  const formatPrice = (price: number | null) => {
    if (price === null || price === undefined || price === 0) return "FREE";
    return `$${price}`;
  };

  // Get display name
  const displayName = creator.display_name || creator.username;

  // Get image from local images folder (not from DB)
  const imageUrl = getCreatorImageUrl(creator.username);

  // Format price for display
  const priceDisplay = formatPrice(creator.subscription_price);

  return (
    <Link to={`/creator/${creator.username}`} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img 
            src={imageUrl} 
            alt={`${displayName} - OnlyFans Creator Profile Picture`}
            loading="lazy"
            decoding="async"
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            style={{ imageRendering: 'auto' }}
            onError={(e) => handleImageError(e, creator.username)}
          />
          {/* PROMOTED badge - Hidden until backoffice is ready
          {creator.promoted && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              PROMOTED
            </div>
          )}
          */}
        </div>
        <CardContent className="p-4 space-y-3">
          <div className="text-center">
            <h3 className="font-bold text-lg line-clamp-1">{displayName}</h3>
            <p className="text-sm text-muted-foreground">@{creator.username}</p>
          </div>
          
          {/* Price and Likes - Two Columns */}
          <div className="flex items-center justify-between">
            {/* Left Column - Price */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-primary">{priceDisplay}</span>
              {priceDisplay !== "FREE" && (
                <span className="text-xs text-muted-foreground">/month</span>
              )}
            </div>

            {/* Right Column - Likes count */}
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Heart className="h-4 w-4" />
              <span>{formatLikesCompact(creator.likes_count)} likes</span>
            </div>
          </div>

          {/* Categories - Hidden, only shown on creator profile page */}
          {/* {creator.categories && creator.categories.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {creator.categories.slice(0, 3).map((category, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          )} */}

          <Button asChild className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
            <div>
              View Profile
              <ExternalLink className="h-4 w-4" />
            </div>
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
});

CreatorCard.displayName = "CreatorCard";

export default CreatorCard;
