import { DotButton, useDotButton } from '../EmblaVarouselDotButton';
import ServicesCard from './ServicesCard';
import useEmblaCarousel from 'embla-carousel-react';

const ServicesBock = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-[32px]">
        <ServicesCard
          title="Animation Production"
          text="Real-time animation production pipeline. Animost Studio offers full animation production services at 2X ~ 4X speed comparing to traditional workflow."
          features={[
            'Main production',
            'Layout/Blocking',
            'Lighting/rendering',
            'Key animation & mocap',
            'Hand/secondary animation',
            'Facial expression, lip-sync',
          ]}
        />
        <ServicesCard
          title="3D Assets Creation"
          text="Animost Studio can assist you at every stage of 3D asset creation, from single asset work to full level and world creation, film or game-optimized assets."
          features={[
            '2D concept',
            '3D realistic and stylized characters',
            '3D environment design',
            '3D concept development',
            '3D modeling',
            '3D rigging and skinning',
          ]}
        />
        <ServicesCard
          title="Motion Capture & Previz"
          text="60+ Optitrack cameras plus Faceware HMCs. One of largest motion capture facilities in South-East Asia ready for your mocap-related needs"
          features={[
            'Body motion capture',
            'Facial motion capture',
            'Mocap cleanup & edit',
            'Film/game animation',
            'Secondary animation',
            'Real-time previsualization',
          ]}
        />
      </div>

      <div className="md:hidden embla flex flex-col gap-[40px]" ref={emblaRef}>
        <div className="embla-features__container">
          <div className="embla-features__slide">
            <ServicesCard
              title="Animation Production"
              text="Real-time animation production pipeline. Animost Studio offers full animation production services at 2X ~ 4X speed comparing to traditional workflow."
              features={[
                'Main production',
                'Layout/Blocking',
                'Lighting/rendering',
                'Key animation & mocap',
                'Hand/secondary animation',
                'Facial expression, lip-sync',
              ]}
            />
          </div>
          <div className="embla-features__slide">
            <ServicesCard
              title="3D Assets Creation"
              text="Animost Studio can assist you at every stage of 3D asset creation, from single asset work to full level and world creation, film or game-optimized assets."
              features={[
                '2D concept',
                '3D realistic and stylized characters',
                '3D environment design',
                '3D concept development',
                '3D modeling',
                '3D rigging and skinning',
              ]}
            />
          </div>
          <div className="embla-features__slide">
            <ServicesCard
              title="Motion Capture & Previz"
              text="60+ Optitrack cameras plus Faceware HMCs. One of largest motion capture facilities in South-East Asia ready for your mocap-related needs."
              features={[
                'Body motion capture',
                'Facial motion capture',
                'Mocap cleanup & edit',
                'Film/game animation',
                'Secondary animation',
                'Real-time previsualization',
              ]}
            />
          </div>
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesBock;
