import { useZusHome } from '@/zustand/useZusHome';
import Button from './ui/Button';
import YoutubeWindow from './home/YoutubeWindow';
import clsx from 'clsx';

type IProps = {
  size: 'small' | 'big';
} & (HomeHeroProps | SmallProps | CartoonHeroProps | ServicesHeroProps);

type HomeHeroProps = {
  type: 'home';
  title: string;
  subtitle: string;
  buttonText: string;
};
type CartoonHeroProps = {
  type: 'cartoon';
  buttonText: string;
  logo: string;
};
type ServicesHeroProps = {
  type: 'services';
  title: string;
  subtitle: string;
};
type SmallProps = { size: 'small'; title: string };

const HeroSection = (props: IProps) => {
  const activeVideo = useZusHome((state) => state.activeVideo);
  const setActiveVideo = useZusHome((state) => state.setActiveVideo);

  return (
    <>
      {activeVideo && <YoutubeWindow path="https://www.youtube.com/watch?v=HIAcT5roxWY" />}
      <section
        className={clsx('relative overflow-hidden', {
          'h-screen': props.size === 'big',
          'h-[460px]': props.size === 'small',
        })}>
        {/* <video src="" className="w-full h-full"></video> */}
        <img src="/cover.png" alt="" className="w-full h-full object-cover" />
        <div
          className={clsx(
            'overlay z-10 absolute top-0 left-0 w-full h-full bg-black  flex justify-center items-center text-white',
            {
              'bg-opacity-50':
                (props.size === 'big' && props.type === 'home') ||
                (props.size === 'big' && props.type === 'services') ||
                props.size === 'small',
            },
            { 'bg-opacity-20': props.size === 'big' && props.type === 'cartoon' },
          )}>
          {props.size === 'big' ? (
            <div className="flex flex-col gap-[40px] items-center">
              {props.type === 'home' ? (
                <>
                  <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
                    <h1 className=" text-[64px] leading-[80px] tracking-[3%]">{props.title}</h1>
                    <h2 className="text-[32px] leading-[40px] tracking-[3%]">{props.subtitle}</h2>
                  </div>
                  <div onClick={() => setActiveVideo(true)}>
                    <Button text={props.buttonText} type="primary" />
                  </div>
                </>
              ) : props.type === 'cartoon' ? (
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
              ) : props.type === 'services' ? (
                <>
                  <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
                    <h1 className=" text-[64px] leading-[80px] tracking-[3%]">menzil mekan</h1>
                    <h2 className="text-[32px] leading-[40px] tracking-[3%]">
                      turkmen animation studio
                    </h2>
                  </div>
                </>
              ) : null}
            </div>
          ) : props.size === 'small' ? (
            <div className="flex flex-col gap-[40px] items-center justify-center">
              <h1 className=" text-[64px] leading-[80px] tracking-[3%]">menzil mekan</h1>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
