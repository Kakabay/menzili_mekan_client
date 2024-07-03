import HeroSection from "@/components/HeroSection";
import { PartnersSlider } from "@/components/PartnersSlider";
import FeaturesSection from "@/components/home/FeaturesSection";
import GallerySection from "@/components/home/GallerySection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        banner="/home/main-page-banner.png"
        size="big"
        page="home"
        title="Cartoon. Mocap. Commercial."
        buttonText="showreel"
      />
      <FeaturesSection />
      <GallerySection />
      <PartnersSlider />
    </>
  );
};

export default Home;
