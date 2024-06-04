import Container from '../Container';
import FeaturesBlock from '../FeaturesBlock';
import { v4 } from 'uuid';
import useEmblaCarousel from 'embla-carousel-react';
import clsx from 'clsx';

const featuresData = [
  {
    title: 'awesome creativity',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
  {
    title: 'high-quality 2d and 3d animation',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
  {
    title: 'popularity and recognition',
    text: 'Ingenious stories and animated worlds. Unforgettable images of favorite characters',
  },
];

const FeaturesSection = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <section className="pt-[40px]">
      <Container>
        <div className="hidden md:flex lg:gap-[32px] md:gap-4 text-center">
          {featuresData.map((block) => (
            <FeaturesBlock key={v4()} text={block.text} title={block.title} />
          ))}
        </div>

        <div className="md:hidden embla-features text-center" ref={emblaRef}>
          <div className="embla-features__container">
            {featuresData.map((block) => (
              <div key={v4()} className="embla-features__slide">
                <FeaturesBlock text={block.text} title={block.title} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex md:hidden items-center gap-2 justify-center">
          {featuresData.map((_, i) => (
            <div
              key={v4()}
              className={clsx('h-2 w-2 rounded-full bg-lightBlue mt-7', {
                // "bg-[#30B1E8]": i === i,
              })}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
