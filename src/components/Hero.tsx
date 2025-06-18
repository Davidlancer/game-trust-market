
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, Zap, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gt-gold/5 via-transparent to-gt-blue/5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gt-gold/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gt-blue/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <Badge className="mb-6 bg-gt-success/20 text-gt-success border-gt-success/30 hover:bg-gt-success/30">
            <Shield className="w-4 h-4 mr-2" />
            Secure Escrow Protection
          </Badge>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            Securely Buy & Sell
            <span className="block gradient-gold bg-clip-text text-transparent">
              Game Accounts
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gt-text/80 mb-8 leading-relaxed">
            Trade PUBG, CODM, and Free Fire accounts with confidence.{' '}
            <span className="text-gt-gold font-semibold">Your funds are protected</span> until you confirm delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/marketplace">
              <Button size="lg" className="gradient-gold text-gt-dark hover:scale-105 transition-all duration-300 text-lg px-8 py-4">
                Browse Accounts
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="lg" variant="outline" className="border-gt-gold text-gt-gold hover:bg-gt-gold hover:text-gt-dark transition-all duration-300 text-lg px-8 py-4">
                Sell Your Account
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-gt-card/50 rounded-xl border border-gt-border game-card-hover">
              <div className="w-12 h-12 bg-gt-gold/20 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-gt-gold" />
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Escrow Protection</h3>
              <p className="text-gt-text/70 text-center">Funds held safely until delivery confirmed</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gt-card/50 rounded-xl border border-gt-border game-card-hover">
              <div className="w-12 h-12 bg-gt-blue/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gt-blue" />
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Verified Sellers</h3>
              <p className="text-gt-text/70 text-center">All sellers undergo verification process</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-gt-card/50 rounded-xl border border-gt-border game-card-hover">
              <div className="w-12 h-12 bg-gt-success/20 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gt-success" />
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-2">Instant Delivery</h3>
              <p className="text-gt-text/70 text-center">Get your account details immediately</p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center justify-center space-x-6 text-gt-text/60">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gt-gold fill-current" />
              <span className="text-lg font-semibold text-gt-text">4.9/5</span>
              <span>Rating</span>
            </div>
            <div className="w-px h-6 bg-gt-border" />
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-gt-blue" />
              <span className="text-lg font-semibold text-gt-text">50K+</span>
              <span>Trusted Users</span>
            </div>
            <div className="w-px h-6 bg-gt-border" />
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-gt-success" />
              <span className="text-lg font-semibold text-gt-text">99.9%</span>
              <span>Safe Trades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
