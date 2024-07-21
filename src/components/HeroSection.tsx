import { useZusHome } from '@/zustand/useZusHome';
import Button from './ui/Button';
// import { YoutubeWindow } from './home/YoutubeWindow';
import clsx from 'clsx';
import Container from './Container';
// import { AnimatePresence } from 'framer-motion';
import AnimatedChevrons from './AnimatedChevrons';
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { useState } from 'react';

type IProps = {
  title?: string;
  size: 'small' | 'big';
  video?: string;
  banner?: string;
  project?: boolean;
  poster?: string;
} & (
  | HomeHeroProps
  | SmallProps
  | CartoonHeroProps
  | ServicesHeroProps
  | ContactHeroProps
  | ProjectHeroProps
);

type HomeHeroProps = {
  page: 'home';
  title: string;
  subtitle?: string;
  buttonText: string;
  poster?: string;
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
type ProjectHeroProps = {
  page: 'project';
  btnText: 'Watch trailer';
  icon: string;
};

type SmallProps = { size: 'small'; title: string };

const HeroSection = (props: IProps) => {
  const { pathname } = useLocation();
  // const activeVideo = useZusHome((state) => state.activeVideo);
  const setActiveVideo = useZusHome((state) => state.setActiveVideo);
  const [videoReady, setIsVideoReady] = useState(false);

  const headerHeight = pathname === '/services' ? 120 : pathname === '/project' ? 125 : 80;

  // const scrollToSection = (id: string) => {
  //   const element = document.getElementById(id);

  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.offsetTop - headerHeight; // Учтите высоту заголовка
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* <AnimatePresence>{activeVideo && <YoutubeWindow />}</AnimatePresence> */}
      <section
        className={clsx('relative overflow-hidden text-center', {
          'md:h-screen sm:h-[456px] h-[380px]': props.size === 'big',
          'h-[360px] sm:h-[400px] lg:h-[600px]': props.size === 'small',
        })}>
        {props.size === 'small' || (props.size === 'big' && props.page === 'services') ? (
          <img
            src={props.banner}
            alt="banner"
            className={clsx('w-full h-full object-cover', {
              'object-bottom': props.size === 'small',
            })}
          />
        ) : props.page.includes('/project') ? null : (
          <div className="relative h-full">
            <img
              src={props.poster}
              alt="video-thumbnail"
              className={clsx(' w-full h-full absolute top-0 left-0', {
                hidden: videoReady,
                block: !videoReady,
              })}
            />
            <ReactPlayer
              muted
              playing={videoReady ? true : false}
              controls={false}
              url={props.banner}
              loop={videoReady ? true : false}
              height={'100%'}
              width={'100%'}
              playsinline={true}
              onReady={() => {
                setIsVideoReady(true);
              }}
              className="react-player"
            />
          </div>
        )}
        {props.size === 'big' && (
          <div
            onClick={() => {
              scrollToSection(
                props.page === 'home'
                  ? 'features'
                  : (props.page === 'services' && 'services') ||
                      (props.page === 'project' && 'project'),
              );
            }}>
            <AnimatedChevrons />
          </div>
        )}
        <div
          className={clsx(
            'overlay z-10 absolute top-0 left-0 w-full h-full bg-black flex justify-center items-center text-white',
            {
              'bg-opacity-50':
                (props.size === 'big' && props.page === 'home') ||
                (props.size === 'big' && props.page === 'services') ||
                (props.size === 'big' && props.page === 'contact') ||
                (props.size === 'big' && props.page === 'project') ||
                props.size === 'small',
            },
            {
              'bg-opacity-20': props.size === 'big' && props.page === 'cartoon',
            },
            {
              'backdrop-blur-[20px]': props.size === 'big' && props.page === 'services',
            },
          )}>
          <Container project={props.project}>
            {props.size === 'big' ? (
              <div className="flex flex-col h-full gap-4 sm:gap-10 items-center pt-[76px] pb-[28px]">
                {props.page === 'home' ? (
                  <>
                    <div className="flex flex-col items-center justify-center gap-0 sm:gap-2 text-center uppercase text-white">
                      <h1 className="text-[36px] sm:text-[64px] font-medium leading-[125%] tracking-[3%]">
                        {props.title}
                      </h1>
                      <h2 className="text-[20px] sm:text-[32px] leading-[125%] tracking-[3%]">
                        {props.subtitle}
                      </h2>
                    </div>
                    <div onClick={() => setActiveVideo(true)}>
                      <Button text={props.buttonText} type="primary" />
                    </div>
                  </>
                ) : props.page === 'cartoon' ? (
                  <>
                    <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
                      <h1 className="text-[64px] leading-[80px] tracking-[3%] text-center">
                        Our works
                      </h1>
                      <h2 className="text-[32px] leading-[40px] tracking-[3%]">
                        turkmen animation studio
                      </h2>
                    </div>
                    <div onClick={() => setActiveVideo(true)}>
                      <Button text="Watch trailer" type="secondary" />
                    </div>
                  </>
                ) : props.page === 'services' ? (
                  <div className="flex w-full justify-end text-start">
                    <div className="flex flex-col gap-4 max-w-[596px] text-white">
                      <div
                        className="text-[20px] md:text-[32px] md:leading-[150%] leading-[150%] max-w-[400px] mr-20 tracking-[3%]"
                        dangerouslySetInnerHTML={{ __html: props.title }}></div>
                      <div className="h-[1.5px] w-[80px] bg-white"></div>
                      {props.subtitle && (
                        <div
                          className="text-[14px] flex flex-col md:text-[16px] md:leading-[150%] leading-[140%]"
                          dangerouslySetInnerHTML={{ __html: props.subtitle }}
                        />
                      )}
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
                ) : props.page === 'project' ? (
                  <div className="flex w-full h-full justify-center">
                    <div className="flex flex-col justify-end pb-20 h-full gap-12 text-white">
                      <img src={props.icon} className="w-[144px] h-[80px]" />
                      <button
                        type="button"
                        className="rounded-full border-[1px] border-white leading-[135%] py-3 px-6">
                        {props.btnText}
                      </button>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : props.size === 'small' ? (
              <div className="flex flex-col gap-[40px] items-center justify-center pt-[48px]">
                <h1 className=" text-[64px] font-semibold leading-[80px] tracking-[3%] uppercase">
                  {props.title}
                </h1>
              </div>
            ) : null}
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
