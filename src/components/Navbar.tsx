
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  User, 
  ShoppingCart, 
  Menu, 
  X,
  Search
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gt-dark/95 backdrop-blur-sm border-b border-gt-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center group-hover:animate-glow-pulse">
              <Shield className="w-5 h-5 text-gt-dark" />
            </div>
            <div className="flex flex-col">
              <span className="font-poppins font-bold text-xl text-gt-text">GameTrust</span>
              <span className="text-xs text-gt-text/60 -mt-1">by GameBox Arena</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gt-text/80 hover:text-gt-gold transition-colors">
              Browse Accounts
            </Link>
            <Link to="/sell" className="text-gt-text/80 hover:text-gt-gold transition-colors">
              Sell Account
            </Link>
            <Link to="/how-it-works" className="text-gt-text/80 hover:text-gt-gold transition-colors">
              How It Works
            </Link>
          </div>

          {/* Right Side - Search & User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gt-text/80 hover:text-gt-gold">
              <Search className="w-5 h-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gt-text/80 hover:text-gt-gold">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gt-card border-gt-border">
                <DropdownMenuItem>
                  <Link to="/dashboard" className="w-full">Dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/profile" className="w-full">My Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Login</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button className="gradient-gold text-gt-dark hover:scale-105 transition-transform">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-gt-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gt-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/marketplace" 
                className="text-gt-text/80 hover:text-gt-gold transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Accounts
              </Link>
              <Link 
                to="/sell" 
                className="text-gt-text/80 hover:text-gt-gold transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell Account
              </Link>
              <Link 
                to="/how-it-works" 
                className="text-gt-text/80 hover:text-gt-gold transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <div className="flex space-x-2 pt-2">
                <Button className="gradient-gold text-gt-dark flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
