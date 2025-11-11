import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-background to-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
              <span className="text-primary">Creator Search Engine</span>
              {" "}— Find Creators Fast
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Search by name, username, category, location or interests
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-2xl relative">
            <Input
              type="text"
              placeholder='Try: "artist", "photographer", "New York", "fitness"...'
              className="h-14 pl-5 pr-14 text-base rounded-full border-2 shadow-lg"
            />
            <Button 
              size="icon"
              className="absolute right-1 top-1 h-12 w-12 rounded-full"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
