import { Search, Compass, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center px-8 md:px-12 lg:px-16">
        {/* Logo - Clickable and returns to home */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Search className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-primary">FansClubOnly</span>
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-6 mx-auto">
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/explore">
              <Compass className="h-4 w-4" />
              <span>Explore</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2" asChild>
            <Link to="/blog">
              <BookOpen className="h-4 w-4" />
              <span>Blog</span>
            </Link>
          </Button>
        </nav>

        {/* Spacer for desktop to balance the layout */}
        <div className="hidden md:block w-[200px]"></div>

        {/* Mobile Hamburger Menu Button - Increased size by 50% */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden ml-auto"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-9 w-9" />
          ) : (
            <Menu className="h-9 w-9" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu - Right aligned below hamburger */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-card absolute right-0 w-64 shadow-lg">
          <nav className="flex flex-col py-4 px-4 space-y-2">
            <Button 
              variant="ghost" 
              className="gap-2 justify-end w-full" 
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/explore">
                <span>Explore</span>
                <Compass className="h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="ghost" 
              className="gap-2 justify-end w-full" 
              asChild
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link to="/blog">
                <span>Blog</span>
                <BookOpen className="h-4 w-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
