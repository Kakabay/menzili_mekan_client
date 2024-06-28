import Container from '../Container';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';
import { shotsData } from '@/lib/database/Project.data';
import { useCallback } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';

export const ShotsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  const screen = useMediaQuery('(min-width: 1300px)');

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section-mt">
      <div className="w-full tab:h-[330px] sm:h-[188px] h-[84px] relative flex justify-center items-center section-mb">
        <img src="/project/shots-bg.png" alt="bg-image" className="w-full h-full" />
        <div className="uppercase text-center text-white sm:text-[48px] text-[28px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          shots
        </div>
      </div>

      <Container>
        <div className="flex relative items-center">
          <button
            type="button"
            onClick={scrollPrev}
            className={clsx(' cursor-pointer hidden md:block', {
              'absolute w-8 h-8 -left-12 z-[100]': screen,
              'translate-x-5 w-20 h-8': !screen,
            })}>
            <img onClick={scrollPrev} src="/project/arrow.svg" alt="" className="w-full h-full" />
          </button>

          <div
            className={clsx('embla', {
              'min-[1300px]:mx-0 md:mx-14 mx-0': !screen,
            })}
            ref={emblaRef}>
            <div className="flex gap-8">
              {shotsData.map((item) => (
                <img key={item.id} src={item.path} alt="" className="flex-[0_0_100%]" />
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={scrollNext}
            className={clsx(' cursor-pointer hidden md:block', {
              'absolute -right-12 w-8 h-8 z-[100]': screen,
              '-translate-x-5 w-20 h-8': !screen,
            })}>
            <img src="/project/arrow.svg" alt="" className="rotate-180 " />
          </button>
        </div>

        <div className="embla__dots mt-8">
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={'embla__dot'.concat(i === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
