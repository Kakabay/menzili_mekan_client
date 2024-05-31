import Container from '@/components/Container';
import HeroSection from '@/components/HeroSection';
import Form from '@/components/services/Form';
import ServicesBlock from '@/components/services/ServicesBlock';
import SectionTitle from '@/components/ui/SectionTitle';

const Services = () => {
  return (
    <>
      <HeroSection
        size="big"
        page="services"
        title="A REAL-TIME ANIMATION STUDIO TO BOOST YOUR PRODUCTION SPEED"
        subtitle="Animost Studio was founded with the sole goal of helping fellow studios and partners to achieve a common goal: to produce animation content faster. We use motion capture and Unreal Engine in a real-time pipeline to achieve 2X ~ 4X production rate comparing to traditional approach. Find out more about our services here"
      />
      <section className="mt-[80px] mb-[140px]">
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
