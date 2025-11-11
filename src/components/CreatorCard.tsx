import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface CreatorCardProps {
  name: string;
  username: string;
  price: string;
  description: string;
  image: string;
  badge?: string;
}

const CreatorCard = ({ name, username, price, description, image, badge }: CreatorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
            {badge}
          </div>
        )}
      </div>
      <CardContent className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg line-clamp-1">{name}</h3>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-primary">{price}</span>
          {price === "FREE" && (
            <span className="text-xs text-muted-foreground">/month</span>
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-3">{description}</p>

        <Button asChild className="w-full gap-2 group-hover:bg-primary group-hover:text-primary-foreground">
          <Link to={`/creator/${username}`}>
            View Profile
            <ExternalLink className="h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default CreatorCard;
