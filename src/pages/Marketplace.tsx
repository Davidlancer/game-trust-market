
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Star, Shield, Lock, CheckCircle, AlertTriangle } from 'lucide-react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGame, setSelectedGame] = useState('all');

  // Mock data for listings
  const listings = [
    {
      id: 1,
      game: 'CODM',
      title: 'Mythic AK-47 + Legendary Character',
      price: '₦45,000',
      seller: 'GamerPro123',
      rating: 4.9,
      sales: 47,
      verified: true,
      tags: ['Facebook Linked', 'Mythic Weapons', 'Max Level'],
      riskLevel: 'medium',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      game: 'PUBG',
      title: 'Conqueror Tier Account - Season 20',
      price: '₦65,000',
      seller: 'PUBGMaster',
      rating: 5.0,
      sales: 23,
      verified: true,
      tags: ['Gmail Only', 'Conqueror', 'Rare Skins'],
      riskLevel: 'low',
      image: '/placeholder.svg'
    },
    {
      id: 3,
      game: 'Free Fire',
      title: 'Diamond Account - All Elite Passes',
      price: '₦25,000',
      seller: 'FFKing',
      rating: 4.7,
      sales: 89,
      verified: true,
      tags: ['Unlinkable', 'Elite Pass', 'Diamonds'],
      riskLevel: 'high',
      image: '/placeholder.svg'
    }
  ];

  const getRiskBadge = (riskLevel: string) => {
    switch (riskLevel) {
      case 'low':
        return <Badge className="gt-badge-success text-xs"><CheckCircle className="w-3 h-3 mr-1" />Gmail Only</Badge>;
      case 'medium':
        return <Badge className="gt-badge-warning text-xs"><Lock className="w-3 h-3 mr-1" />Facebook Linked</Badge>;
      case 'high':
        return <Badge className="bg-gt-danger/20 text-gt-danger border-gt-danger/30 text-xs"><AlertTriangle className="w-3 h-3 mr-1" />Unlinkable</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gt-background pt-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading font-bold text-gt-text mb-2">Marketplace</h1>
          <p className="text-gt-text/70">Discover verified game accounts from trusted sellers</p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-10 bg-gt-background/80 backdrop-blur-md border-b border-gt-border/50 pb-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gt-text/50" />
              <Input
                placeholder="Search accounts (e.g., 'Mythic AK CODM')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="gt-input pl-10"
              />
            </div>

            {/* Game Filter */}
            <div className="flex gap-2">
              {['all', 'CODM', 'PUBG', 'Free Fire'].map((game) => (
                <Button
                  key={game}
                  variant={selectedGame === game ? "default" : "outline"}
                  onClick={() => setSelectedGame(game)}
                  className={selectedGame === game ? "gt-button-primary" : "gt-button-ghost"}
                >
                  {game === 'all' ? 'All Games' : game}
                </Button>
              ))}
            </div>

            <Button variant="outline" className="gt-button-ghost">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing, index) => (
            <Card key={listing.id} className="gt-card gt-hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                {/* Game Logo & Risk Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gt-primary/20 rounded-lg flex items-center justify-center mr-2">
                      <span className="text-gt-primary font-mono font-bold text-sm">{listing.game}</span>
                    </div>
                    <span className="text-gt-text/60 text-sm">{listing.game}</span>
                  </div>
                  {getRiskBadge(listing.riskLevel)}
                </div>

                {/* Account Preview */}
                <div className="aspect-video bg-gt-background rounded-lg mb-4 flex items-center justify-center border border-gt-border">
                  <span className="text-gt-text/50">Account Preview</span>
                </div>

                {/* Title & Price */}
                <h3 className="font-heading font-semibold text-gt-text mb-2 line-clamp-2">{listing.title}</h3>
                <div className="text-2xl font-mono font-bold text-gt-primary mb-4">{listing.price}</div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-gt-border text-gt-text/70">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Seller Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gt-card rounded-full mr-2"></div>
                    <div>
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gt-text">{listing.seller}</span>
                        {listing.verified && <Shield className="w-3 h-3 text-gt-secondary ml-1" />}
                      </div>
                      <div className="flex items-center text-xs text-gt-text/60">
                        <Star className="w-3 h-3 text-gt-warning mr-1" />
                        {listing.rating} • {listing.sales} sales
                      </div>
                    </div>
                  </div>
                </div>

                {/* Escrow Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gt-secondary">
                    <Shield className="w-3 h-3 mr-1" />
                    Escrow Protected
                  </div>
                  <Button className="gt-button-primary text-sm px-4 py-2">
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12 mb-8">
          <Button variant="outline" className="gt-button-ghost px-8">
            Load More Listings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
