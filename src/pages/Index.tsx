
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GameCategories from '@/components/GameCategories';
import FeaturedListings from '@/components/FeaturedListings';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gt-dark">
      <Navbar />
      <Hero />
      <GameCategories />
      <FeaturedListings />
      <Footer />
    </div>
  );
};

export default Index;
