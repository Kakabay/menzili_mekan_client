import useEmblaCarousel from 'embla-carousel-react';
import Container from '../Container';
import SectionTitle from '../ui/SectionTitle';

const GallerySection = () => {
  const [emblaRef] = useEmblaCarousel();

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

          <div className="embla flex lg:hidden" ref={emblaRef}>
            <div className="embla-gallery__container">
              <div className="embla-gallery__slide">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="embla-gallery__slide">
                <img
                  src="/placeholder.png"
                  alt="random image"
                  className="hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
