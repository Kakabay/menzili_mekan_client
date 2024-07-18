import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import ServicesBlock from "@/components/services/ServicesBlock";
import SectionTitle from "@/components/ui/SectionTitle";
import useGetPages from "@/react-query/useGetPages";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const { data } = useGetPages();

  return (
    <>
      <HeroSection
        banner={data ? data[2].banner.path : ""}
        size="big"
        page="services"
        title={data ? data[2].header : ""}
        subtitle="<p>We provide high quality and creativity solutions in various fields.</p></br>"
      />
      <section id="services" className="mt-10 md:mt-20">
        <Container>
          <div className="flex flex-col gap-[40px]">
            <SectionTitle type="big" text="Our services" />
            <ServicesBlock />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Services;
