import useGetMainServices from "@/react-query/useGetMainServices";
import { DotButton, useDotButton } from "../EmblaVarouselDotButton";
import ServicesCard from "./ServicesCard";
import useEmblaCarousel from "embla-carousel-react";

const ServicesBock = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { data } = useGetMainServices();

  return (
    <>
      <div className="hidden md:grid grid-cols-3 gap-8">
        {data
          ? data.map((item, i) => (
              <ServicesCard
                key={i}
                title={item.title}
                text={item.text}
                parts={item.parts}
              />
            ))
          : null}
      </div>

      <div className="md:hidden embla flex flex-col gap-[40px]" ref={emblaRef}>
        <div className="embla-features__container">
          {data
            ? data.map((item, i) => (
                <div className="embla-features__slide">
                  <ServicesCard
                    key={i}
                    title={item.title}
                    text={item.text}
                    parts={item.parts}
                  />
                </div>
              ))
            : null}
        </div>
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesBock;
