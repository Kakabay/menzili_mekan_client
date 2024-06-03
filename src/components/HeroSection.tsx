import { useZusHome } from '@/zustand/useZusHome';
import Button from './ui/Button';
import { YoutubeWindow } from './home/YoutubeWindow';
import clsx from 'clsx';
import Container from './Container';
import { AnimatePresence } from 'framer-motion';
import AnimatedChevrons from './AnimatedChevrons';

type IProps = {
  size: 'small' | 'big';
} & (HomeHeroProps | SmallProps | CartoonHeroProps | ServicesHeroProps | ContactHeroProps);

type HomeHeroProps = {
  page: 'home';
  title: string;
  subtitle: string;
  buttonText: string;
};
type CartoonHeroProps = {
  page: 'cartoon';
  buttonText: string;
  logo: string;
};
type ServicesHeroProps = {
  page: 'services';
  title: string;
  subtitle: string;
};
type ContactHeroProps = {
  page: 'contact';
  title: string;
};
type SmallProps = { size: 'small'; title: string };

const HeroSection = (props: IProps) => {
  const activeVideo = useZusHome((state) => state.activeVideo);
  const setActiveVideo = useZusHome((state) => state.setActiveVideo);

  return (
    <>
      <AnimatedChevrons />

      <AnimatePresence>{activeVideo && <YoutubeWindow />}</AnimatePresence>
      <section
        className={clsx('relative overflow-hidden', {
          'h-screen': props.size === 'big',
          'h-[460px]': props.size === 'small',
        })}>
        <img src="/cover.png" alt="" className="w-full h-full object-cover" />
        <div
          className={clsx(
            'overlay z-10 absolute top-0 left-0 w-full h-full bg-black  flex justify-center items-center text-white',
            {
              'bg-opacity-50':
                (props.size === 'big' && props.page === 'home') ||
                (props.size === 'big' && props.page === 'services') ||
                (props.size === 'big' && props.page === 'contact') ||
                props.size === 'small',
            },
            { 'bg-opacity-20': props.size === 'big' && props.page === 'cartoon' },
          )}>
          <Container>
            {props.size === 'big' ? (
              <div className="flex flex-col gap-[40px] items-center">
                {props.page === 'home' ? (
                  <>
                    <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
                      <h1 className=" text-[64px] leading-[80px] tracking-[3%]">{props.title}</h1>
                      <h2 className="text-[32px] leading-[40px] tracking-[3%]">{props.subtitle}</h2>
                    </div>
                    <div onClick={() => setActiveVideo(true)}>
                      <Button text={props.buttonText} type="primary" />
                    </div>
                  </>
                ) : props.page === 'cartoon' ? (
                  <>
                    <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
                      <h1 className=" text-[64px] leading-[80px] tracking-[3%]">menzil mekan</h1>
                      <h2 className="text-[32px] leading-[40px] tracking-[3%]">
                        turkmen animation studio
                      </h2>
                    </div>
                    <div onClick={() => setActiveVideo(true)}>
                      <Button text="Watch trailer" type="secondary" />
                    </div>
                  </>
                ) : props.page === 'services' ? (
                  <div className="flex w-full justify-end">
                    <div className="flex flex-col gap-[16px] max-w-[596px] text-white">
                      <h1 className=" text-[32px] leading-[40px] tracking-[3%]">{props.title}</h1>
                      <div className="h-[1.5px] w-[80px] bg-white"></div>
                      <p className="text-[16px] leading-[24px]">{props.subtitle}</p>
                    </div>
                  </div>
                ) : props.page === 'contact' ? (
                  <div className="flex w-full justify-center">
                    <div className="flex flex-col gap-[16px] text-white">
                      <h1 className="leading-[125%] font-medium tracking-[3%] text-[64px] uppercase">
                        {props.title}
                      </h1>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : props.size === 'small' ? (
              <div className="flex flex-col gap-[40px] items-center justify-center">
                <h1 className=" text-[64px] leading-[80px] tracking-[3%]">menzil mekan</h1>
              </div>
            ) : null}
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
