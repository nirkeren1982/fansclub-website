import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Clear previous error
    setError("");

    // Trim whitespace
    const trimmedSearch = searchTerm.trim();

    // Validate minimum 2 characters
    if (trimmedSearch.length < 2) {
      setError("Need minimum 2 characters");
      return;
    }

    // Navigate to search results page with query parameter
    navigate(`/search?q=${encodeURIComponent(trimmedSearch)}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <section className="relative w-full bg-gradient-to-b from-background to-secondary py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Heading */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black">
              <span className="text-primary">Creator Search Engine</span>
              {" "}Find Creators Fast
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Search by name, username, category, location or interests
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-2xl space-y-2">
            <div className="relative">
            <Input
              type="text"
                placeholder="Find your next favorite creator"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setError(""); // Clear error on typing
                }}
                onKeyPress={handleKeyPress}
              className="h-14 pl-5 pr-14 text-base rounded-full border-2 shadow-lg"
            />
            <Button 
              size="icon"
              className="absolute right-1 top-1 h-12 w-12 rounded-full"
                onClick={handleSearch}
            >
              <Search className="h-5 w-5" />
            </Button>
            </div>
            {/* Error Message */}
            {error && (
              <p className="text-sm text-red-500 text-center">{error}</p>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
