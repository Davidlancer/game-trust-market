
import { Button } from '@/components/ui/button';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gt-background via-gt-background to-gt-card"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gt-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Main Headline */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            <span className="text-gt-text">Secure Digital</span><br />
            <span className="bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text text-transparent">
              Game Account Trading
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gt-text/70 mb-8 max-w-2xl mx-auto font-body">
            Verified digital ownership. Escrow-backed peace of mind. 
            Your wins, protected by GameBox Arena's trusted infrastructure.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up delay-200">
          <Link to="/marketplace">
            <Button className="gt-button-primary text-lg px-8 py-4 group">
              Browse Accounts
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link to="/sell">
            <Button className="gt-button-secondary text-lg px-8 py-4">
              Start Selling
            </Button>
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-400">
          <div className="gt-card p-6 text-center gt-hover-lift">
            <div className="w-16 h-16 bg-gt-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-gt-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">Escrow Protection</h3>
            <p className="text-gt-text/70">Funds held securely until transaction completion</p>
          </div>
          
          <div className="gt-card p-6 text-center gt-hover-lift">
            <div className="w-16 h-16 bg-gt-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-gt-secondary" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">Instant Verification</h3>
            <p className="text-gt-text/70">AI-powered account validation & fraud detection</p>
          </div>
          
          <div className="gt-card p-6 text-center gt-hover-lift">
            <div className="w-16 h-16 bg-gt-warning/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gt-warning" />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">Trusted Community</h3>
            <p className="text-gt-text/70">50K+ verified traders, zero tolerance policy</p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 pt-8 border-t border-gt-border animate-fade-in-up delay-600">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-gt-primary mb-1">50K+</div>
              <div className="text-sm text-gt-text/60">Active Traders</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-gt-secondary mb-1">₦2.5B+</div>
              <div className="text-sm text-gt-text/60">Secured Volume</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-gt-primary mb-1">99.8%</div>
              <div className="text-sm text-gt-text/60">Success Rate</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-mono font-bold text-gt-secondary mb-1">24/7</div>
              <div className="text-sm text-gt-text/60">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
