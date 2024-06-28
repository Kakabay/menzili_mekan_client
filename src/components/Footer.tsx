import Container from './Container';
import { iconsData } from '@/lib/database/Footer.data';

const Footer = () => {
  return (
    <footer className="bg-summerSky py-16 section-mt text-white">
      <Container>
        <div className="flex flex-col gap-6 ">
          <div className="flex flex-col sm:flex-row items-start w-full ">
            <div className="cont mx-auto flex flex-col items-center sm:items-start sm:justify-between">
              <div className="flex flex-col items-center  sm:flex-row text-center justify-center sm:text-left gap-[16px] w-[340px]">
                <img
                  src="/footer/footer-logo.svg"
                  alt=""
                  className="w-[58px] mx-auto sm:mx-0 h-[88px]"
                />
                <div className="">
                  <h3 className="mb-3 text-[24px] font-medium leading-[110%]">
                    MenzilMekan <br /> Animation
                  </h3>
                  <h4 className="text-[16px]">TPS Advertising Agency ©2024</h4>
                </div>
              </div>
              {/* <p className="text-lightBlue hidden sm:block text-[14px] leading-[115%]">
                © 2024. All rights reserved.
              </p> */}
            </div>

            <div className="sm:flex flex-row-reverse items-center gap-6 w-full hidden ">
              {/* <div className="flex flex-col gap-[24px]">
                <h4 className="text-[14px] leading-[16px] tracking-[9%] font-[500] uppercase">
                  Navigation
                </h4>

                <div className="flex flex-col gap-[10px]">
                  {navData.map((item) => (
                    <Link
                      key={v4()}
                      to={item.link}
                      className="footer-link text-[14px] leading-[16px] tracking-[6%] uppercase">
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div> */}
              <div className="flex flex-col justify-between items-end gap-[8px]">
                <div className="">
                  <h4 className="text-[28px] font-medium mb-2 leading-[23px] tracking-[6%] uppercase w-full">
                    2 000 000
                  </h4>
                  <h4 className="text-[18px] leading-[16px] tracking-[6%] uppercase w-full">
                    Views on all Platform
                  </h4>
                </div>

                {/* <img
                  onClick={() => window.scroll(0, 0)}
                  src="/footer/to-top.svg"
                  alt=""
                  className="cursor-pointer w-[108px] h-6 tab:hidden"
                /> */}
              </div>

              <div className="tab:flex hidden flex-col justify-between items-end">
                <div className="flex gap-3 h-fit items-end">
                  {iconsData.map((item, i) => (
                    <a
                      key={i}
                      target="_blank"
                      href={item.path}
                      className="block size-10 hover:scale-110 transition duration-200">
                      <img src={'/footer/' + item.name + '.svg'} alt="youtube" />
                    </a>
                  ))}
                </div>

                {/* <div
                  className="flex items-center cursor-pointer group "
                  onClick={() => scrollTo(0, 0)}>
                  <span className="uppercase text-lightBlue group-hover:text-white -tracking-[-2%] text-[14px] leading-[115%] transition-all duration-300 ease-out">
                    back to top
                  </span>
                  <svg
                    className="stroke-lightBlue group-hover:stroke-white transition-all duration-300 ease-out"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.9998 20V4M11.9998 4L8 9M11.9998 4L16 9"
                      stroke="current"
                      stroke-width="1.5"
                    />
                  </svg>
                </div> */}
              </div>
            </div>
          </div>

          <div className="tab:hidden flex flex-col items-center gap-6 sm:gap-8 justify-center">
            <div className="flex gap-2">
              {iconsData.map((item, i) => (
                <a
                  key={i}
                  target="_blank"
                  href={item.path}
                  className="block size-8 hover:scale-110 transition duration-200">
                  <img src={'/footer/' + item.name + '.svg'} alt="youtube" />
                </a>
              ))}
            </div>
            <h4 className="text-[16px]">TPS Advertising Agency ©2024</h4>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
