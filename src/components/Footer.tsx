import { Link } from 'react-router-dom';
import Container from './Container';
import { navData } from '@/lib/database/Navigation.data';
import { iconsData } from '@/lib/database/Footer.data';
import { v4 } from 'uuid';

const Footer = () => {
  return (
    <footer className="bg-summerSky py-4 sm:py-10 section-mt text-white">
      <Container>
        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col sm:flex-row w-full ">
            <div className="flex flex-col items-center sm:items-start sm:justify-between tab:mr-8 mr-0 sm:mr-16">
              <div className="flex flex-col sm:flex-row text-center justify-center sm:text-left gap-[16px] w-[340px]">
                <img
                  src="/footer/footer-logo.svg"
                  alt=""
                  className="w-[58px] mx-auto sm:mx-0 h-[88px]"
                />
                <div className="">
                  <h3 className="mb-3 text-[20px] leading-[140%]">We do animation!</h3>
                  <h4 className="">The site of the animation studio «Menzil Mekan»</h4>
                </div>
              </div>
              <p className="text-lightBlue hidden sm:block text-[14px] leading-[115%]">
                © 2024. All rights reserved.
              </p>
            </div>

            <div className="sm:flex justify-between w-full hidden ">
              <div className="flex flex-col gap-[24px]">
                <h4 className="text-[14px] leading-[16px] tracking-[9%] font-[500] uppercase">
                  Navigation
                </h4>

                <div className="flex flex-col gap-[10px]">
                  {navData.map((item) => (
                    <Link
                      key={v4()}
                      to={item.link}
                      className="text-[14px] leading-[16px] tracking-[6%] uppercase">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between items-end gap-[8px] tab:-ml-6 -ml-0">
                <div className="">
                  <h4 className="text-[20px] mb-2 leading-[23px] tracking-[6%] uppercase w-full">
                    6,286,645,610
                  </h4>
                  <h4 className="text-[14px] leading-[16px] tracking-[6%] uppercase w-full">
                    views on youtube
                  </h4>
                </div>

                <img
                  onClick={() => window.scroll(0, 0)}
                  src="/footer/to-top.svg"
                  alt=""
                  className="cursor-pointer w-[108px] h-6 tab:hidden"
                />
              </div>

              <div className="tab:flex hidden flex-col justify-between items-end">
                <div className="grid grid-cols-4 gap-2 tab:gap-4 h-fit items-end">
                  {iconsData.map((item) => (
                    <Link
                      key={v4()}
                      to="/"
                      className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
                      <img src={'/footer/' + item.name + '.svg'} alt="youtube" />
                    </Link>
                  ))}
                </div>

                <img
                  onClick={() => window.scroll(0, 0)}
                  src="/footer/to-top.svg"
                  alt=""
                  className="hidden tab:block cursor-pointer w-[108px] h-6"
                />
              </div>
            </div>
          </div>

          <div className="tab:hidden flex flex-col items-center gap-12 sm:gap-8 justify-center">
            <div className="flex gap-2">
              {iconsData.map((item) => (
                <Link
                  key={v4()}
                  to="/"
                  className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
                  <img src={'/footer/' + item.name + '.svg'} alt="youtube" />
                </Link>
              ))}
            </div>
            <p className="text-lightBlue block tab:hidden text-[14px] leading-[115%]">
              © 2024. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
