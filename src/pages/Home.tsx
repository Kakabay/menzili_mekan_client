import HeroSection from '@/components/HeroSection';
import { PartnersSlider } from '@/components/PartnersSlider';
import FeaturesSection from '@/components/home/FeaturesSection';
import GallerySection from '@/components/home/GallerySection';
import useGetPages from '@/react-query/useGetPages';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPages();

  return (
    <>
      <HeroSection
        // banner={data ? data[0].banner_video_link : ""}
        poster={data ? data[0].banner.path : ''}
        size="big"
        page="home"
        title={data ? data[0].header : ''}
        buttonText="showreel"
      />
      <FeaturesSection />
      <GallerySection />
      <PartnersSlider />
    </>
  );
};

export default Home;
