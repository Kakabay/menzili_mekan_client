import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import Container from '../Container';

export const CharactersSection = () => {
  const [emblaRef] = useEmblaCarousel();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <section className="section-mt">
      <div className="w-full h-[220px] relative flex justify-center items-center mb-20">
        <img src="/project/characters.png" alt="bg-image" className="w-full h-full" />
        <div className="uppercase text-center text-white text-[48px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          main characters
        </div>
      </div>

      <Container>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            <div className="">
              <div className="flex gap-8">
                <img src="" alt="" className="/project/slider-1.png" />
                <img src="" alt="" className="/project/slider-1.png" />
                <img src="" alt="" className="/project/slider-1.png" />
              </div>

              {/* <img
                  src="/project/pagination-arrow.svg"
                  alt="arrow"
                  className="w-8 h-8 -translate-x-3 z-[100] cursor-pointer"
                /> */}

              <h4 className="uppercase font-bold text-[32px] leading-[125%] my-8 text-bauhaus">
                Littlefox
              </h4>

              {/* <img
                  src="/project/pagination-arrow.svg"
                  alt="arrow"
                  className="w-8 h-8 rotate-180 absolute top-0 bottom-0 right-0 z-[100] cursor-pointer"
                /> */}

              <p className="text-[28px] font-light leading-[140%]">
                Littlefox is a kind, calm, careful girl. She loves to bake pies, cook compote and
                treat friends. She wants to take part in the games and adventures of the Bears.
                Littlefox is younger than bears, but she is much wiser than them. She always finds
                the right decision instinctively, but expresses her opinion very tactfully. She
                always speaks delicately.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
