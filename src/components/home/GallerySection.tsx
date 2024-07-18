import useEmblaCarousel from "embla-carousel-react";
import Container from "../Container";
import SectionTitle from "../ui/SectionTitle";
import { DotButton, useDotButton } from "../EmblaVarouselDotButton";
import { Link } from "react-router-dom";
import useGetHomeProjects from "@/react-query/useGetHomeProjects";
const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { data } = useGetHomeProjects();

  return (
    <section className="section-mt">
      <Container>
        <div className="flex flex-col gap-[40px] items-center">
          <SectionTitle text="portfolio" type="big" />
          <div className="hidden lg:grid grid-cols-3 gap-[32px]">
            <div className="group h-[376px] overflow-hidden">
              <Link to={"/"} className="cursor-default">
                <img
                  src={data ? data[0].image : ""}
                  alt="project"
                  className="group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </Link>
            </div>
            <div className="h-[376px] grid grid-cols-2 gap-[32px]">
              {data
                ? data
                    .filter((_, i) => i >= 1 && i <= 4)
                    .map((item) => (
                      <div className="group overflow-hidden">
                        <Link to={"/"} className="cursor-default">
                          <img
                            src={item.image}
                            alt="project"
                            className="group-hover:scale-110 transition duration-300 ease-in-out"
                          />
                        </Link>
                      </div>
                    ))
                : null}
              {/* <div className="group overflow-hidden">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home1.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group overflow-hidden">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home3.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group overflow-hidden">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home4.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div> */}
            </div>
            <div className="group h-[376px] overflow-hidden">
              <Link to={"/"} className="cursor-default">
                <img
                  src={data ? data[5].image : ""}
                  alt="project"
                  className="group-hover:scale-110 transition duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>

          <div
            className="embla flex flex-col gap-[40px] lg:hidden"
            ref={emblaRef}
          >
            <div className="embla-gallery__container">
              {data
                ? data.map((item, i) => (
                    <div
                      key={i}
                      className="group pointer-events-auto embla-gallery__slide overflow-hidden relative"
                    >
                      <Link to={"/"} className="cursor-default">
                        <img
                          src={item.image}
                          alt="project"
                          className="group-hover:scale-110 transition duration-300 ease-in-out"
                        />
                      </Link>
                    </div>
                  ))
                : null}
              {/* <div className="group pointer-events-auto embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home5.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home6.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home1.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home3.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home4.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div>
              <div className="group embla-gallery__slide overflow-hidden relative">
                <Link to={"/"} className="cursor-default">
                  <img
                    src="/home2.png"
                    alt="project"
                    className="group-hover:scale-110 transition duration-300 ease-in-out"
                  />
                </Link>
              </div> */}
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
        </div>
      </Container>
    </section>
  );
};

export default GallerySection;
