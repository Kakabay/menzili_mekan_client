import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import { partnersData } from "@/lib/database/Partners.data";
import { useEffect } from "react";

export function PartnersSlider() {
  const autoplayOptions = { delay: 1500 };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: false },
    [Autoplay(autoplayOptions)]
  );

  const str = "sa";

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay: any = emblaApi.plugins().autoplay;

    const handleSelect = () => {
      autoplay.stop();
      setTimeout(() => {
        autoplay.play();
      }, autoplayOptions.delay);
    };

    emblaApi.on("select", handleSelect);

    return () => {
      emblaApi.off("select", handleSelect);
    };
  }, [emblaApi]);

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <SectionTitle type="small" text="WE WORKED WITH" />
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {partnersData.map((item, i) => (
                <div key={i} className="embla__slide p-4">
                  <img
                    className="w-full h-auto"
                    src={item.icon}
                    alt="pixar logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
