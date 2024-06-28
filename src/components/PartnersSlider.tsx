import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Container from './Container';
import SectionTitle from './ui/SectionTitle';

export function PartnersSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: false }, [
    Autoplay(),
    // Fade(),
  ]);

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col items-center gap-[40px]">
          <SectionTitle type="small" text="WE WORKED WITH" />
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              <div className="embla__slide p-[20px] ">
                <img className="w-full h-auto" src="/partner1.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner2.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner3.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner4.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner5.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner6.png" alt="pixar logo" />
              </div>
              <div className="embla__slide ">
                <img className="w-full h-auto" src="/partner7.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner8.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner9.png" alt="pixar logo" />
              </div>
              <div className="embla__slide p-[20px]">
                <img className="w-full h-auto" src="/partner10.png" alt="pixar logo" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
