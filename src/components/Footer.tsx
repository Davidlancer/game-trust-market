
import { Link } from 'react-router-dom';
import { Shield, MessageCircle, Users, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gt-card border-t border-gt-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gt-primary to-gt-secondary rounded-lg flex items-center justify-center shadow-lg">
                <Shield className="w-6 h-6 text-gt-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-gt-text">GameTrust</span>
                <span className="text-xs text-gt-text/60 -mt-1">Trusted by GameBox Arena</span>
              </div>
            </div>
            <p className="text-gt-text/70 mb-6 max-w-md leading-relaxed">
              The premier platform for secure digital game account trading. 
              Professional-grade escrow protection, verified sellers, and 
              bulletproof transaction security for the modern gamer.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gt-border rounded-lg flex items-center justify-center hover:bg-gt-primary/20 hover:text-gt-primary transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gt-border rounded-lg flex items-center justify-center hover:bg-gt-secondary/20 hover:text-gt-secondary transition-all duration-300"
              >
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gt-text">Platform</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/marketplace" 
                  className="text-gt-text/70 hover:text-gt-primary transition-colors duration-200 flex items-center group"
                >
                  Browse Accounts
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/sell" 
                  className="text-gt-text/70 hover:text-gt-primary transition-colors duration-200 flex items-center group"
                >
                  Sell Account
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/how-it-works" 
                  className="text-gt-text/70 hover:text-gt-primary transition-colors duration-200 flex items-center group"
                >
                  How It Works
                  <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link 
                  to="/safety" 
                  className="text-gt-text/70 hover:text-gt-primary transition-colors duration-200"
                >
                  Safety Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-gt-text">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gt-text/70 hover:text-gt-secondary transition-colors duration-200"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gt-text/70 hover:text-gt-secondary transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gt-text/70 hover:text-gt-secondary transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gt-text/70 hover:text-gt-secondary transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gt-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gt-text/60 text-sm mb-4 md:mb-0">
            © 2024 GameTrust. All rights reserved. Powered by GameBox Arena.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gt-text/60">
            <span className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-gt-secondary" />
              <span>Secure Trading</span>
            </span>
            <span className="hidden md:block">•</span>
            <span>24/7 Support</span>
            <span className="hidden md:block">•</span>
            <span className="gt-data">50K+ Verified Users</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
