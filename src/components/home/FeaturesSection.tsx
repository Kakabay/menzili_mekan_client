import Container from '../Container';
import FeaturesBlock from '../FeaturesBlock';
import { v4 } from 'uuid';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';

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
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="pt-[40px]">
      <Container>
        <div className="hidden md:flex lg:gap-[32px] md:gap-4 text-center">
          {featuresData.map((block) => (
            <FeaturesBlock key={v4()} text={block.text} title={block.title} />
          ))}
        </div>

        <div
          className="md:hidden embla-features text-center flex flex-col gap-[40px]"
          ref={emblaRef}>
          <div className="embla-features__container">
            {featuresData.map((block) => (
              <div className="embla-features__slide overflow-hidden" key={v4()}>
                <FeaturesBlock key={v4()} text={block.text} title={block.title} />
              </div>
            ))}
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
      </Container>
    </section>
  );
};

export default FeaturesSection;
