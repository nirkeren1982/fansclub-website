import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-12 bg-card border-t">
      <div className="container px-8 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-primary-foreground font-bold">F</span>
              </div>
              <span className="text-lg font-bold text-primary">FansClubOnly</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate creator search engine. Find and connect with talented creators worldwide.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-3">
            <h4 className="font-semibold">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/#top" className="hover:text-foreground transition-colors">Search</Link></li>
              <li><Link to="/explore" className="hover:text-foreground transition-colors">Explore</Link></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Top Creators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">New Creators</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/promote" className="hover:text-foreground transition-colors">Add Your Profile</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
