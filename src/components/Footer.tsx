import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-card border-t text-sm md:text-base">
      <footer className="container px-8 md:px-24 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center">
              <a href="#hero" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/logo.svg" 
                  alt="FansClubOnly" 
                  className="h-14 md:h-16 w-auto"
                  width="200"
                  height="60"
                />
              </a>
            </div>
            <p className="text-sm md:text-base text-muted-foreground">
              The ultimate creator search engine. Find and connect with talented creators worldwide.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Platform</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li><Link to="/#top" className="hover:text-foreground transition-colors">Search</Link></li>
              <li><Link to="/explore" className="hover:text-foreground transition-colors">Explore</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Top Creators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Creators</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Company</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/promote" className="hover:text-foreground transition-colors">Add Your Profile</Link></li>
              <li><Link to="/qa" className="hover:text-foreground transition-colors">Q&A</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm md:text-base">Legal</h4>
            <ul className="space-y-2 text-sm md:text-base text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link to="/dmca" className="hover:text-foreground transition-colors">DMCA</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="text-sm md:text-base text-muted-foreground mt-8 text-center">
          FansClubOnly is an independent directory. We are not affiliated with OnlyFans. All trademarks belong to their respective owners.
        </p>
      </footer>
    </footer>
  );
};

export default Footer;
