import HeroSection from '@/components/HeroSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import FeaturesSection from '@/components/home/FeaturesSection';
import GallerySection from '@/components/home/GallerySection';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        // video="sdfsdf"
        banner="/cover.png"
        size="big"
        page="home"
        title="MenzilMekan Animation"
        subtitle="The Animation Studio of
        TPS Advertising Agency
        "
        buttonText="showreel"
      />
      <FeaturesSection />
      <GallerySection />
      <PartnersSlider />
    </>
  );
};

export default Home;
