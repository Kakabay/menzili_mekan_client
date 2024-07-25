import Container from '../Container';
import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from '../EmblaVarouselDotButton';
import { useCallback } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import useGetProject from '@/react-query/useGetProject';

export const ShotsSection = () => {
  const { id } = useParams();

  const { data } = useGetProject(id ? id : '');

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
      <div className="w-full tab:h-[220px] sm:h-[188px] h-[84px] relative flex justify-center items-center section-mb">
        <img src={data ? data[0].shots_image : ''} alt="bg-image" className="w-full h-full" />
        <div className="uppercase text-center text-white sm:text-[48px] text-[28px] leading-[125%] absolute top-[50%] translate-y-[-50%] justify-center w-full">
          {/* {data ? data[0].shots_text : ''} */}
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
              {data
                ? data[0].list_shots.map((item, i) => (
                    <img key={i} src={item.shot_image} alt="" className="flex-[0_0_100%]" />
                  ))
                : null}
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
