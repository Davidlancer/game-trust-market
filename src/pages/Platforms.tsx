
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Users, TrendingUp, ArrowRight } from 'lucide-react';

const Platforms = () => {
  const games = [
    {
      id: 'codm',
      name: 'Call of Duty Mobile',
      icon: '🛡️',
      description: 'Buy or sell elite CODM accounts with mythic weapons and legendary characters',
      platforms: ['Android', 'iOS', 'Emulator'],
      stats: { listings: 247, avgPrice: '₦45,000', popular: true },
      features: ['Mythic Weapons', 'Legendary Characters', 'Battle Pass Items', 'Rare Skins']
    },
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      icon: '🪖',
      description: 'Premium PUBG accounts with conqueror ranks and exclusive outfits',
      platforms: ['Android', 'iOS'],
      stats: { listings: 189, avgPrice: '₦35,000', popular: true },
      features: ['Conqueror Rank', 'Rare Outfits', 'Vehicle Skins', 'Weapon Finishes']
    },
    {
      id: 'freefire',
      name: 'Free Fire',
      icon: '🔥',
      description: 'Diamond-rich Free Fire accounts with all elite passes and characters',
      platforms: ['Android', 'iOS'],
      stats: { listings: 156, avgPrice: '₦25,000', popular: false },
      features: ['Elite Pass', 'Diamonds', 'Characters', 'Pet Collection']
    }
  ];

  const upcomingGames = [
    { name: 'Apex Legends Mobile', icon: '⚡', status: 'Coming Soon' },
    { name: 'Mobile Legends', icon: '⚔️', status: 'Coming Soon' },
    { name: 'Fortnite Mobile', icon: '🏗️', status: 'Coming Soon' }
  ];

  return (
    <div className="min-h-screen bg-gt-background pt-20 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-gt-text mb-4">
            Supported Games on GameTrust
          </h1>
          <p className="text-gt-text/70 text-lg max-w-2xl mx-auto">
            Secure marketplace for premium mobile gaming accounts across the most popular platforms
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="gt-card p-6 text-center">
            <div className="text-3xl font-mono font-bold text-gt-primary mb-2">592</div>
            <div className="text-gt-text/70">Active Listings</div>
          </div>
          <div className="gt-card p-6 text-center">
            <div className="text-3xl font-mono font-bold text-gt-secondary mb-2">1,847</div>
            <div className="text-gt-text/70">Successful Trades</div>
          </div>
          <div className="gt-card p-6 text-center">
            <div className="text-3xl font-mono font-bold text-gt-primary mb-2">99.2%</div>
            <div className="text-gt-text/70">Success Rate</div>
          </div>
        </div>

        {/* Supported Games */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold text-gt-text mb-8">Available Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card key={game.id} className="gt-card gt-hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{game.icon}</div>
                    {game.stats.popular && (
                      <Badge className="gt-badge bg-gt-primary/20 text-gt-primary border-gt-primary/30">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-gt-text">{game.name}</CardTitle>
                  <p className="text-gt-text/70 text-sm">{game.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Platforms */}
                  <div>
                    <div className="text-sm font-medium text-gt-text/80 mb-2">Platforms</div>
                    <div className="flex flex-wrap gap-2">
                      {game.platforms.map((platform) => (
                        <Badge key={platform} variant="outline" className="text-xs border-gt-border text-gt-text/70">
                          {platform}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <div className="text-sm font-medium text-gt-text/80 mb-2">Popular Features</div>
                    <div className="flex flex-wrap gap-2">
                      {game.features.slice(0, 3).map((feature) => (
                        <Badge key={feature} className="bg-gt-secondary/20 text-gt-secondary border-gt-secondary/30 text-xs">
                          {feature}
                        </Badge>
                      ))}
                      {game.features.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gt-border text-gt-text/50">
                          +{game.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-t border-gt-border">
                    <div>
                      <div className="text-lg font-mono font-bold text-gt-text">{game.stats.listings}</div>
                      <div className="text-xs text-gt-text/60">Active Listings</div>
                    </div>
                    <div>
                      <div className="text-lg font-mono font-bold text-gt-primary">{game.stats.avgPrice}</div>
                      <div className="text-xs text-gt-text/60">Avg. Price</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Link to={`/marketplace?game=${game.id}`} className="flex-1">
                      <Button variant="outline" className="w-full gt-button-ghost text-sm">
                        <Users className="w-4 h-4 mr-2" />
                        View Listings
                      </Button>
                    </Link>
                    <Link to={`/sell?game=${game.id}`} className="flex-1">
                      <Button className="w-full gt-button-primary text-sm">
                        Sell Account
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Escrow Badge */}
                  <div className="flex items-center justify-center text-xs text-gt-secondary pt-2">
                    <Shield className="w-3 h-3 mr-1" />
                    Escrow Protected
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-gt-text mb-8">Coming Soon</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingGames.map((game, index) => (
              <Card key={game.name} className="gt-card opacity-60 animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{game.icon}</div>
                  <h3 className="font-heading font-semibold text-gt-text mb-2">{game.name}</h3>
                  <Badge variant="outline" className="border-gt-border text-gt-text/50 text-xs">
                    {game.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 gt-card">
          <h2 className="text-2xl font-heading font-bold text-gt-text mb-4">
            Don't see your game?
          </h2>
          <p className="text-gt-text/70 mb-6">
            We're always expanding our platform. Let us know what games you'd like to see supported.
          </p>
          <Button className="gt-button-primary">
            Request New Game
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Platforms;
