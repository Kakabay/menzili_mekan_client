import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from 'react';
import Container from '../Container';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';
import { charactersData } from '@/lib/database/Project.data';
import clsx from 'clsx';
import { useMediaQuery } from 'usehooks-ts';

export const CharactersSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const screen = useMediaQuery('(min-width: 1300px)');

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-mt">
      <div className="w-full h-[84px] sm:h-[188px] tab:h-[220px] relative flex justify-center items-center section-mb">
        <img src="/project/characters.png" alt="bg-image" className="w-full h-full" />
        <div className="uppercase text-center text-white sm:text-[48px] text-[28px] sm:leading-[125%] leading-[130%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          main characters
        </div>
      </div>

      <Container>
        <div className="flex flex-col relative">
          <div className="flex items-center">
            <button
              type="button"
              onClick={scrollPrev}
              className={clsx('md:inline-block hidden cursor-pointer', {
                'absolute w-8 h-8 -left-12 z-[100]': screen,
                'translate-x-5 w-[300px] h-8': !screen,
              })}>
              <img src="/project/arrow.svg" alt="" className="" />
            </button>

            {/* <button
              type="button"
              onClick={scrollPrev}
              className="min-[1300px]:hidden block w-8 h-8 translate-x-5">
              <img src="/project/arrow.svg" alt="" className="" />
            </button> */}

            <div className="embla mx-0 md:mx-10 min-[1300px]:mx-0" ref={emblaRef}>
              <div className="flex items-center sm:gap-14 gap-6">
                {charactersData.map((item) => (
                  <div key={item.id} className="flex-[0_0_100%] justify-center items-center">
                    <div className="hidden md:flex gap-8 justify-center">
                      {item.images.map((path, i) => (
                        <div key={i} className="h-[376px] w-full">
                          <img src={path} alt="" className="h-full w-full" />
                        </div>
                      ))}
                    </div>

                    <div className="block md:hidden min-w-0 justify-center items-center">
                      <img src={item.images[0]} alt="photo" />
                    </div>

                    <h4 className="uppercase font-bold sm:text-[32px] text-[24px] leading-[125%] sm:my-8 my-6 text-bauhaus">
                      {item.title}
                    </h4>

                    <p className="text-[16px] sm:text-[28px] font-light leading-[140%]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={scrollNext}
              className={clsx('md:block hidden cursor-pointer', {
                'absolute w-8 h-8 -right-12 z-[100]': screen,
                'block -translate-x-5 w-[300px] h-8': !screen,
              })}>
              <img src="/project/arrow.svg" alt="" className="rotate-180 " />
            </button>
          </div>
        </div>
        <div className="embla__dots mt-8">
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
      </Container>
    </section>
  );
};
