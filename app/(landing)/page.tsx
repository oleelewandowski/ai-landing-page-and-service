import LandingContent from '@/components/LandingContent';
import LandingHero from '@/components/LandingHero';
import LandingNavbar from '@/components/LandingNavbar';

const Home = () => (
  <div className='h-full'>
    <LandingNavbar />
    <LandingHero />
    <LandingContent />
  </div>
);

export default Home;
