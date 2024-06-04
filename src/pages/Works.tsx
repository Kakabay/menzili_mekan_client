import HeroSection from '@/components/HeroSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import WorksSection from '@/components/works/WorksSection';
import { useEffect } from 'react';

const Works = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeroSection size="small" title="cartoons" />
      <WorksSection />
      <PartnersSlider />
    </>
  );
};

export default Works;
