
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const GameCategories = () => {
  const games = [
    {
      id: 'codm',
      name: 'Call of Duty: Mobile',
      slug: 'codm',
      image: '/placeholder.svg',
      totalListings: '2,847',
      priceRange: '₦15,000 - ₦500,000',
      popularTags: ['Mythic', 'Legendary', 'Damascus'],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 'pubg',
      name: 'PUBG Mobile',
      slug: 'pubg',
      image: '/placeholder.svg',
      totalListings: '1,923',
      priceRange: '₦10,000 - ₦300,000',
      popularTags: ['Conqueror', 'Mythic Outfit', 'Rare Skins'],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'freefire',
      name: 'Free Fire',
      slug: 'free-fire',
      image: '/placeholder.svg',
      totalListings: '3,156',
      priceRange: '₦5,000 - ₦200,000',
      popularTags: ['Elite Pass', 'Diamonds', 'DJ Alok'],
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 bg-gt-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Choose Your Game
          </h2>
          <p className="text-xl text-gt-text/70 max-w-2xl mx-auto">
            Browse accounts for your favorite mobile games. All listings verified and protected by escrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <Link key={game.id} to={`/game/${game.slug}`} className="group">
              <Card className="bg-gt-card border-gt-border game-card-hover overflow-hidden">
                <div className={`h-48 bg-gradient-to-br ${game.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/20 text-white border-white/30">
                      {game.totalListings} listings
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-poppins font-bold text-2xl text-white mb-2">
                      {game.name}
                    </h3>
                    <p className="text-white/80 font-medium">
                      {game.priceRange}
                    </p>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2">
                    {game.popularTags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-gt-gold/20 text-gt-gold border-gt-gold/30 hover:bg-gt-gold/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-gt-text/60">
                      Browse accounts →
                    </span>
                    <div className="w-8 h-8 bg-gt-gold/20 rounded-full flex items-center justify-center group-hover:bg-gt-gold/30 transition-colors">
                      <span className="text-gt-gold text-sm">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/marketplace">
            <button className="text-gt-gold hover:text-gt-gold/80 font-semibold text-lg transition-colors">
              View All Games →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
