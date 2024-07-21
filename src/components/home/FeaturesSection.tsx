import Container from '../Container';
import FeaturesBlock from '../FeaturesBlock';
import { v4 } from 'uuid';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';
import useGetHomeServices from '@/react-query/useGetHomeServices';

const FeaturesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { data } = useGetHomeServices();

  return (
    <section id="features" className="pt-[40px]">
      <Container>
        <div className="hidden lg:flex gap-[32px] md:gap-4 text-center">
          {data
            ? data.map((block, i) => (
                <div key={i} className="w-full">
                  <FeaturesBlock {...block} />
                </div>
              ))
            : null}
        </div>

        {/* <div
          className="md:hidden embla-features text-center flex flex-col gap-[40px]"
          ref={emblaRef}>
          <div className="embla-features__container">
            {featuresData.map((block) => (
              <div className="embla-features__slide overflow-hidden" key={v4()}>
                <FeaturesBlock text={block.text} title={block.title} />
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
        </div> */}
        <div className="embla lg:hidden flex flex-col gap-10" ref={emblaRef}>
          <div className="embla-features__container">
            {data
              ? data.map((item, i) => (
                  <div key={i} className="embla-features__slide ">
                    <FeaturesBlock {...item} />
                  </div>
                ))
              : null}
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <div key={v4()}>
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={'embla__dot'.concat(
                    index === selectedIndex ? ' embla__dot--selected' : '',
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
