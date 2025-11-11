import { Search, Home, Grid, Compass, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Search className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">CreatorHub</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/explore">
              <Compass className="h-4 w-4" />
              <span>Explore</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/categories">
              <Grid className="h-4 w-4" />
              <span>Categories</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/blog">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </Button>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:flex">
            Best Creators 🔥
          </Button>
          <Button variant="default" size="sm">
            Free Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
