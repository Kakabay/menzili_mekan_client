import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Container from './Container';
import SectionTitle from './ui/SectionTitle';
import { partnersData } from '@/lib/database/Partners.data';

export function PartnersSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start', containScroll: false }, [
    Autoplay(),
    // Fade(),
  ]);

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <SectionTitle type="small" text="WE WORKED WITH" />
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {partnersData.map((item, i) => (
                <div key={i} className="embla__slide p-4">
                  <img className="w-full h-auto" src={item.icon} alt="pixar logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
