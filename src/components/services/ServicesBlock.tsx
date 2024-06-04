import ServicesCard from './ServicesCard';
import useEmblaCarousel from 'embla-carousel-react';

const ServicesBock = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-[32px]">
        <ServicesCard
          title="Animation Production"
          text="Real-time animation production pipeline. Animost Studio offers full animation production services at 2X ~ 4X speed comparing to traditional workflow."
        />
        <ServicesCard
          title="3D Assets Creation"
          text="Animost Studio can assist you at every stage of 3D asset creation, from single asset work to full level and world creation, film or game-optimized assets."
        />
        <ServicesCard
          title="Motion Capture & Previz"
          text="Re60+ Optitrack cameras plus Faceware HMCs. One of largest motion capture facilities in South-East Asia ready for your mocap-related needs."
        />
      </div>

      <div className="md:hidden embla" ref={emblaRef}>
        <div className="embla-features__container">
          <div className="embla-features__slide">
            <ServicesCard
              title="Animation Production"
              text="Real-time animation production pipeline. Animost Studio offers full animation production services at 2X ~ 4X speed comparing to traditional workflow."
            />
          </div>
          <div className="embla-features__slide">
            <ServicesCard
              title="3D Assets Creation"
              text="Animost Studio can assist you at every stage of 3D asset creation, from single asset work to full level and world creation, film or game-optimized assets."
            />
          </div>
          <div className="embla-features__slide">
            <ServicesCard
              title="Motion Capture & Previz"
              text="Re60+ Optitrack cameras plus Faceware HMCs. One of largest motion capture facilities in South-East Asia ready for your mocap-related needs."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesBock;
