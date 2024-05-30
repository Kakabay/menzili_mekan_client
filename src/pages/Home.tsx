import HeroSection from '@/components/HeroSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import FeaturesSection from '@/components/home/FeaturesSection';
import GallerySection from '@/components/home/GallerySection';
import React from 'react';

const Home = () => {
  return (
    <>
      <HeroSection
        size="big"
        type="home"
        title="menzil mekan"
        subtitle="turkmen animation studio"
        buttonText="showreel"
      />
      <FeaturesSection />
      <GallerySection />
      <PartnersSlider />
    </>
  );
};

export default Home;
