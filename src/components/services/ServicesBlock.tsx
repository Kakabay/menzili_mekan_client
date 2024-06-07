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
          title="Character & Animation"
          text="Our 3D character design and animation services can be used in various applications such as cartoons, videos, commercials, TV, websites, presentations and marketing strategies. We create custom and well-designed 3D characters and mascots with a unique personality."
          features={[
            'Character Design',
            'Concept Art',
            '3D Modeling, UV Map and Texturing',
            'Rigging and Animating',
            'Character Pose Rendering (Illustrations)',
            'Scene, Landscape, Props',
            'Animation',
          ]}
        />
        <ServicesCard
          title="Motion Capture"
          text="We can provide highly precise motion capture for your games, commercials and animations. We use Xsens MVN Link motion capture system."
          features={[
            'Body motion capture',
            'Mockup cleanup & edit',
            'Film/game animation',
            'Secondary animation',
          ]}
        />
        <ServicesCard
          title="Product Visualization"
          text="<p>We can bring your products to life with 3D and make it as close to reality as you imagined. We create high quality models for your products so we can contain all of product details from the design. We can render product images in an incredible view that would hardly be possible in photography.</p> 
          <p>You can showcase your product effectively by using 3d animations. Also, the stunning product manual.</p>
          "
          features={[
            '3D Products',
            'Virtual 3D demonstration of product',
            'Product Modeling, Rendering',
            'Interactive 3D walkthroughs',
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
