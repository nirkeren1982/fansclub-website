import { Search, Compass, BookOpen, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const headerRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsClosing(false);
  };

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMobileMenuOpen && !isClosing) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen, isClosing]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 md:h-20 items-center px-8 md:px-24 lg:px-24">
        {/* Logo - Clickable and returns to home */}
        <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
          <img 
            src="/logo.svg" 
            alt="FansClubOnly" 
            className="h-16 md:h-20 w-auto translate-y-[3px] md:translate-y-0"
            width="200"
            height="60"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center gap-6 mx-auto text-base">
          <Button variant="ghost" className="gap-2 text-base" asChild>
            <Link to="/explore">
              <Compass className="h-4 w-4" />
              <span>Explore</span>
            </Link>
          </Button>
          <Button variant="ghost" className="gap-2 text-base" asChild>
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
          className="md:hidden ml-auto bg-accent text-accent-foreground"
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

      {/* Mobile Navigation Menu - Modern Sidebar Overlay */}
      {(isMobileMenuOpen || isClosing) && (
        <>
          {/* Backdrop Overlay - click to close */}
          <div 
            className={`md:hidden fixed inset-0 z-40 transition-colors duration-300 ${
              isClosing ? "bg-black/0" : "bg-black/50"
            }`}
            onClick={closeMenu}
          />
          
          {/* Sidebar Menu - slides from right, takes 75% width */}
          <div 
            className={`md:hidden fixed right-0 top-16 h-[calc(100vh-64px)] w-3/4 bg-card shadow-lg z-50 overflow-y-auto transition-all duration-300 ease-out ${
              isClosing 
                ? "animate-out slide-out-to-right fade-out" 
                : "animate-in slide-in-from-right fade-in"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full justify-between">
              <nav className="flex flex-col py-4 px-4 space-y-2 text-base" aria-label="mobile menu">
                <Button 
                  variant="ghost" 
                  className="gap-2 justify-start w-full text-base" 
                  asChild
                >
                  <Link 
                    to="/explore"
                    onClick={closeMenu}
                  >
                    <Compass className="h-4 w-4" />
                    <span>Explore</span>
                  </Link>
                </Button>
                <Button 
                  variant="ghost" 
                  className="gap-2 justify-start w-full text-base" 
                  asChild
                >
                  <Link 
                    to="/blog"
                    onClick={closeMenu}
                  >
                    <BookOpen className="h-4 w-4" />
                    <span>Blog</span>
                  </Link>
                </Button>
              </nav>

              {/* Footer Section pinned to bottom */}
              <div className="border-t pt-4 px-4 mb-[30px]">
                <div className="space-y-2 mb-4">
                  <h4 className="font-semibold text-sm">Company</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li><Link to="/about" className="hover:text-foreground transition-colors" onClick={closeMenu}>About</Link></li>
                    <li><Link to="/blog" className="hover:text-foreground transition-colors" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/promote" className="hover:text-foreground transition-colors" onClick={closeMenu}>Add Your Profile</Link></li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Platform</h4>
                  <ul className="space-y-1 text-xs text-muted-foreground">
                    <li><Link to="/#top" className="hover:text-foreground transition-colors" onClick={closeMenu}>Search</Link></li>
                    <li><Link to="/explore" className="hover:text-foreground transition-colors" onClick={closeMenu}>Explore</Link></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">Top Creators</a></li>
                    <li><a href="#" className="hover:text-foreground transition-colors">New Creators</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
