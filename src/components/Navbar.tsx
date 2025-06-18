
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'gt-glass' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gt-primary to-gt-secondary rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-gt-glow transition-all duration-300">
              <Shield className="w-6 h-6 text-gt-background" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl text-gt-text">GameTrust</span>
              <span className="text-xs text-gt-text/60 -mt-1 hidden sm:block">by GameBox Arena</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/marketplace" 
              className="text-gt-text/80 hover:text-gt-primary font-medium transition-colors duration-200"
            >
              Marketplace
            </Link>
            <Link 
              to="/sell" 
              className="text-gt-text/80 hover:text-gt-primary font-medium transition-colors duration-200"
            >
              Sell
            </Link>
            <Link 
              to="/platforms" 
              className="text-gt-text/80 hover:text-gt-primary font-medium transition-colors duration-200"
            >
              All Platforms
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gt-text/80 hover:text-gt-primary font-medium transition-colors duration-200"
            >
              How It Works
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="gt-button-ghost">
                <User className="w-4 h-4 mr-2" />
                Sign In
              </Button>
            </Link>
            <Link to="/register">
              <Button className="gt-button-primary">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gt-text hover:text-gt-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gt-card border-t border-gt-border shadow-lg">
            <div className="container mx-auto px-4 py-6 space-y-4">
              <Link 
                to="/marketplace" 
                className="block text-gt-text hover:text-gt-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Marketplace
              </Link>
              <Link 
                to="/sell" 
                className="block text-gt-text hover:text-gt-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sell
              </Link>
              <Link 
                to="/platforms" 
                className="block text-gt-text hover:text-gt-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                All Platforms
              </Link>
              <Link 
                to="/how-it-works" 
                className="block text-gt-text hover:text-gt-primary font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="pt-4 border-t border-gt-border space-y-3">
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full gt-button-ghost">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full gt-button-primary">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
