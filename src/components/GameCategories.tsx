
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Shield } from 'lucide-react';

const GameCategories = () => {
  const games = [
    {
      id: 'codm',
      name: 'Call of Duty: Mobile',
      slug: 'codm',
      image: '/placeholder.svg',
      totalListings: '2,847',
      priceRange: '₦15,000 - ₦500,000',
      popularTags: ['Mythic Weapons', 'Legendary Skins', 'Damascus'],
      gradient: 'from-orange-500/20 to-red-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(255,69,58,0.3)]'
    },
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      slug: 'pubg',
      image: '/placeholder.svg',
      totalListings: '1,923',
      priceRange: '₦10,000 - ₦300,000',
      popularTags: ['Conqueror Rank', 'Mythic Outfits', 'Rare Skins'],
      gradient: 'from-blue-500/20 to-purple-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
    },
    {
      id: 'freefire',
      name: 'Free Fire',
      slug: 'free-fire',
      image: '/placeholder.svg',
      totalListings: '3,156',
      priceRange: '₦5,000 - ₦200,000',
      popularTags: ['Elite Pass', 'Diamonds', 'DJ Alok'],
      gradient: 'from-yellow-500/20 to-orange-600/20',
      borderGlow: 'hover:shadow-[0_0_30px_rgba(255,193,7,0.3)]'
    }
  ];

  return (
    <section className="py-20 bg-gt-card/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gt-text">Choose Your</span>{' '}
            <span className="bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text text-transparent">
              Gaming Platform
            </span>
          </h2>
          <p className="text-xl text-gt-text/70 max-w-2xl mx-auto">
            Browse verified accounts across the most popular mobile gaming platforms. 
            All listings protected by our advanced escrow system.
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {games.map((game, index) => (
            <Link 
              key={game.id} 
              to={`/game/${game.slug}`} 
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Card className={`gt-card overflow-hidden transition-all duration-500 ${game.borderGlow} group-hover:scale-[1.02]`}>
                {/* Game Header */}
                <div className={`h-32 bg-gradient-to-br ${game.gradient} relative border-b border-gt-border/30`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-gt-background/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <Badge className="gt-badge">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {game.totalListings}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-heading font-bold text-xl text-gt-text mb-1">
                      {game.name}
                    </h3>
                    <p className="text-gt-text/80 font-mono text-sm font-medium">
                      {game.priceRange}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  {/* Popular Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.popularTags.map((tag) => (
                      <Badge 
                        key={tag} 
                        className="gt-badge text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Card Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gt-border/30">
                    <div className="flex items-center space-x-4 text-sm text-gt-text/60">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Active</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4" />
                        <span>Verified</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-gt-primary/20 rounded-full flex items-center justify-center group-hover:bg-gt-primary/30 transition-colors">
                      <span className="text-gt-primary text-sm">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center animate-fade-in-up delay-600">
          <Link to="/marketplace">
            <button className="gt-button-ghost text-lg group">
              View All Gaming Platforms
              <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
