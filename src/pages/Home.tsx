import HeroSection from "@/components/HeroSection";
import { PartnersSlider } from "@/components/PartnersSlider";
import FeaturesSection from "@/components/home/FeaturesSection";
import GallerySection from "@/components/home/GallerySection";
import useGetPages from "@/react-query/useGetPages";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPages();

  return (
    <>
      <HeroSection
        banner={"/home/main-page-banner.png"}
        size="big"
        page="home"
        title={data ? data[0].header : ""}
        buttonText="showreel"
      />
      <FeaturesSection />
      <GallerySection />
      <PartnersSlider />
    </>
  );
};

export default Home;
