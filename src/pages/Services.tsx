import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import Form from '@/components/services/Form';
import ServicesBlock from '@/components/services/ServicesBlock';
import SectionTitle from '@/components/ui/SectionTitle';
import { useEffect } from 'react';

const Services = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeroSection
        banner="/services-banner.png"
        size="big"
        page="services"
        title="<p>CHARACTER & ANIMATION</p></br> <p>MOTION CAPTURE</p></br>
        <p>PRODUCT VISUALIZATION</p>"
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

      <Form />
    </>
  );
};

export default Services;
