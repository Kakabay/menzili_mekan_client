import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Container from './Container';

export function PartnersSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: false }, [
    Autoplay(),
    // Fade(),
  ]);

  return (
    <section className="py-[140px]">
      <Container>
        <div className="flex flex-col items-center gap-[40px]">
          <h2 className="text-[32px] leading-[40px] tracking-[3%] uppercase">our partners</h2>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
              <div className="embla__slide">
                <img src="/pixar.png" alt="pixar logo" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}