import useEmblaCarousel from 'embla-carousel-react';
import Container from '../Container';
import SectionTitle from '../ui/SectionTitle';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col gap-[40px] items-center">
          <SectionTitle text="our projects" type="big" />
          <div className="hidden lg:grid grid-cols-3 gap-[32px]">
            <div className="h-[376px] overflow-hidden">
              <img
                src="/placeholder.png"
                alt="random image"
                className="hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
            <div className="h-[376px] grid grid-cols-2 gap-[32px]">
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
            </div>
            <div className="h-[376px] overflow-hidden">
              <img
                src="/placeholder.png"
                alt="random image"
                className="hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          </div>

          <div className="embla flex flex-col gap-[40px] lg:hidden" ref={emblaRef}>
            <div className="embla-gallery__container">
              <div className="embla-gallery__slide overflow-hidden relative">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide overflow-hidden">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
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
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
