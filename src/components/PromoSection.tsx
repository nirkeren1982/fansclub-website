import { TrendingUp, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Creators & Agencies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Get more new subscribers for your profile - Send us details and we'll list your profile for FREE
          </p>
        </div>

        {/* Three Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Increase Traffic */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Increase Traffic</h3>
          </div>

          {/* Promoted Placements */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Promoted Placements</h3>
          </div>

          {/* Zero Effort */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Zero Effort</h3>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="text-lg font-semibold px-8 py-6"
            asChild
          >
            <Link to="/promote">Promote Your Profile</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;

