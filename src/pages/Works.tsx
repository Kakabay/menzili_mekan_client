import HeroSection from '@/components/HeroSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import WorksSection from '@/components/works/WorksSection';

const Works = () => {
  return (
    <>
      <HeroSection size="small" title="cartoons" />
      <WorksSection />
      <PartnersSlider />
    </>
  );
};

export default Works;
