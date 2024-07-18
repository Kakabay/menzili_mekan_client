import HeroSection from "@/components/HeroSection";
import { PartnersSlider } from "@/components/PartnersSlider";
import WorksSection from "@/components/works/WorksSection";
import useGetPages from "@/react-query/useGetPages";
import { useEffect } from "react";

const Works = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPages();

  return (
    <>
      <HeroSection
        size="small"
        title={data ? data[1].header : ""}
        banner={data ? data[1].banner.path : ""}
      />
      <WorksSection />
      <PartnersSlider />
    </>
  );
};

export default Works;
