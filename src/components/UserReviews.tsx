import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const UserReviews = () => {
  const reviews = [
    "This account finder is incredible.",
    "Best creator search engine by far.",
    "Location search is a game changer."
  ];

  return (
    <section className="w-full py-8 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Star className="h-4 w-4 fill-primary" />
            USER REVIEWS
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-5xl font-black">
              Here's what our users say
            </h2>
            <p className="text-muted-foreground">
              Based on 1,385 verified reviews
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl pt-6">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg font-medium">{review}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Overall Rating */}
          <div className="flex flex-col items-center pt-6">
            <div className="text-5xl font-black">4.8/5</div>
            <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;
