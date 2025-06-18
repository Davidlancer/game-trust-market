
import { Link } from 'react-router-dom';
import { Shield, MessageCircle, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gt-card border-t border-gt-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-gold rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-gt-dark" />
              </div>
              <div className="flex flex-col">
                <span className="font-poppins font-bold text-xl text-gt-text">GameTrust</span>
                <span className="text-xs text-gt-text/60 -mt-1">by GameBox Arena</span>
              </div>
            </div>
            <p className="text-gt-text/70 mb-6 max-w-md">
              The most secure marketplace for buying and selling gaming accounts. 
              Protected by escrow, trusted by gamers worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gt-border rounded-lg flex items-center justify-center hover:bg-gt-gold/20 transition-colors">
                <MessageCircle className="w-5 h-5 text-gt-text hover:text-gt-gold" />
              </a>
              <a href="#" className="w-10 h-10 bg-gt-border rounded-lg flex items-center justify-center hover:bg-gt-gold/20 transition-colors">
                <Users className="w-5 h-5 text-gt-text hover:text-gt-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/marketplace" className="text-gt-text/70 hover:text-gt-gold transition-colors">Browse Accounts</Link></li>
              <li><Link to="/sell" className="text-gt-text/70 hover:text-gt-gold transition-colors">Sell Account</Link></li>
              <li><Link to="/how-it-works" className="text-gt-text/70 hover:text-gt-gold transition-colors">How It Works</Link></li>
              <li><Link to="/safety" className="text-gt-text/70 hover:text-gt-gold transition-colors">Safety Guide</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-poppins font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gt-text/70 hover:text-gt-gold transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="text-gt-text/70 hover:text-gt-gold transition-colors">FAQ</Link></li>
              <li><Link to="/terms" className="text-gt-text/70 hover:text-gt-gold transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gt-text/70 hover:text-gt-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gt-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gt-text/60 text-sm mb-4 md:mb-0">
            © 2024 GameTrust. All rights reserved. Powered by GameBox Arena.
          </p>
          <div className="flex items-center space-x-4 text-sm text-gt-text/60">
            <span className="flex items-center space-x-1">
              <Shield className="w-4 h-4 text-gt-success" />
              <span>Secure Trading</span>
            </span>
            <span>•</span>
            <span>24/7 Support</span>
            <span>•</span>
            <span>Trusted by 50K+ Users</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
