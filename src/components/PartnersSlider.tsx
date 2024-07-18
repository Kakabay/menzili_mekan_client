import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Container from "./Container";
import SectionTitle from "./ui/SectionTitle";
import { useEffect } from "react";
import useGetPartners from "@/react-query/useGetPartners";

export function PartnersSlider() {
  const autoplayOptions = { delay: 1500 };
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: false },
    [Autoplay(autoplayOptions)]
  );

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

  const { data } = useGetPartners();

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <SectionTitle type="small" text="WE WORKED WITH" />
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {data
                ? data?.map((item, i) => (
                    <div key={i} className="embla__slide p-4">
                      <img
                        className="w-full h-auto"
                        src={item.image}
                        alt="pixar logo"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
