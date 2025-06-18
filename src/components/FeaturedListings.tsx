
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Shield, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedListings = () => {
  const listings = [
    {
      id: '1',
      title: 'CODM Mythic Account - Damascus + Legendary',
      game: 'CODM',
      price: '₦85,000',
      originalPrice: '₦95,000',
      image: '/placeholder.svg',
      seller: {
        name: 'ProGamer_NG',
        rating: 4.9,
        verified: true,
        sales: 127
      },
      tags: ['Mythic', 'Damascus', 'Legendary'],
      level: 'Level 150',
      views: 234,
      timeLeft: '2 days left'
    },
    {
      id: '2',
      title: 'PUBG Conqueror Account - Rare Skins Collection',
      game: 'PUBG',
      price: '₦65,000',
      originalPrice: null,
      image: '/placeholder.svg',
      seller: {
        name: 'eSportsKing',
        rating: 4.8,
        verified: true,
        sales: 89
      },
      tags: ['Conqueror', 'Rare Skins', 'KD 3.2'],
      level: 'Tier: Conqueror',
      views: 189,
      timeLeft: '5 days left'
    },
    {
      id: '3',
      title: 'Free Fire VIP Account - DJ Alok + Elite Pass',
      game: 'Free Fire',
      price: '₦45,000',
      originalPrice: '₦50,000',
      image: '/placeholder.svg',
      seller: {
        name: 'FFMaster',
        rating: 4.7,
        verified: true,
        sales: 156
      },
      tags: ['DJ Alok', 'Elite Pass', 'Diamonds'],
      level: 'Level 65',
      views: 312,
      timeLeft: '1 day left'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Featured Listings
          </h2>
          <p className="text-xl text-gt-text/70 max-w-2xl mx-auto">
            Hand-picked premium accounts from our most trusted sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <Card key={listing.id} className="bg-gt-card border-gt-border game-card-hover overflow-hidden group">
              <div className="relative">
                <div className="h-48 bg-gt-border relative overflow-hidden">
                  <img 
                    src={listing.image} 
                    alt={listing.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-gt-blue/90 text-white border-0">
                      {listing.game}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-gt-danger/90 text-white border-0">
                      {listing.timeLeft}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-black/50 px-2 py-1 rounded">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-white text-xs">{listing.views}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="font-poppins font-semibold text-lg mb-2 line-clamp-2 group-hover:text-gt-gold transition-colors">
                    {listing.title}
                  </h3>
                  <p className="text-gt-text/60 text-sm">{listing.level}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-gt-gold/20 text-gt-gold border-gt-gold/30 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {listing.seller.verified && (
                        <Shield className="w-4 h-4 text-gt-success fill-current" />
                      )}
                      <span className="text-sm text-gt-text/80">{listing.seller.name}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-gt-gold fill-current" />
                      <span className="text-sm text-gt-text/80">{listing.seller.rating}</span>
                      <span className="text-xs text-gt-text/60">({listing.seller.sales})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-poppins font-bold text-gt-gold">
                        {listing.price}
                      </span>
                      {listing.originalPrice && (
                        <span className="text-sm text-gt-text/50 line-through">
                          {listing.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gt-text/60">Escrow protected</span>
                  </div>
                  
                  <Link to={`/listing/${listing.id}`}>
                    <Button className="gradient-gold text-gt-dark hover:scale-105 transition-transform">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/marketplace">
            <Button size="lg" variant="outline" className="border-gt-gold text-gt-gold hover:bg-gt-gold hover:text-gt-dark">
              View All Listings
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
