import Container from "../Container";
import FeaturesBlock from "../FeaturesBlock";
import { v4 } from "uuid";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "../EmblaVarouselDotButton";

const featuresData = [
  {
    title: "CARTOON",
    text: "We have created over fifty 2D and 3D short animations. Follow the AppKorpeler YouTube channel to view our work.",
  },
  {
    title: "MOCAP",
    text: "We provide highly precise motion capture for games, commercials, and animations using the Xsens MVN Link motion capture system.",
  },
  {
    title: "COMMERCIAL",
    text: "We have developed numerous characters, including Robo, Ynamly, and Bulutjyk, who effectively represent their companies in various commercials.",
  },
];

const FeaturesSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section id="features" className="pt-[40px]">
      <Container>
        <div className="hidden lg:flex gap-[32px] md:gap-4 text-center">
          {featuresData.map((block) => (
            <div key={v4()} className="w-full">
              <FeaturesBlock text={block.text} title={block.title} />
            </div>
          ))}
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
            {featuresData.map((item) => (
              <div key={item.title} className="embla-features__slide ">
                <FeaturesBlock text={item.text} title={item.title} />
              </div>
            ))}
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <div key={v4()}>
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  className={"embla__dot".concat(
                    index === selectedIndex ? " embla__dot--selected" : ""
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
