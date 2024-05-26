import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-blue pt-[56px] pb-[40px] text-white">
      <Container>
        <div className="flex w-full">
          <div className="flex flex-col gap-[16px] w-full">
            <div className="h-[128px]">
              <img src="/logo.svg" alt="" className="w-auto" />
            </div>
            <div className="flex flex-col  w-full">
              <h3 className="text-[16px] leading-[24px]">We do animation!</h3>
              <h3 className="text-[16px] leading-[24px]">
                The site of the animation studio «Menzil Mekan»
              </h3>
            </div>
          </div>
          <div className="flex gap-[166px]">
            <div className="flex flex-col gap-[24px] ml-[49px]">
              <h4 className="text-[14px] leading-[16px] tracking-[9%] font-[500] uppercase">
                Navigation
              </h4>

              <div className="flex flex-col gap-[8px]">
                <h4 className="text-[14px] leading-[16px] tracking-[6%]  uppercase">Home</h4>
                <h4 className="text-[14px] leading-[16px] tracking-[6%]  uppercase">cartoons</h4>
                <h4 className="text-[14px] leading-[16px] tracking-[6%]  uppercase">services</h4>
                <h4 className="text-[14px] leading-[16px] tracking-[6%]  uppercase">services</h4>
              </div>
            </div>
            <div className="flex flex-col gap-[8px] ml-[49px] min-w-[144px] w-full">
              <h4 className="text-[20px] leading-[23px] tracking-[6%] uppercase w-full">
                6,286,645,610
              </h4>
              <h4 className="text-[14px] leading-[16px] tracking-[6%] uppercase w-full">
                views on youtube
              </h4>
            </div>
          </div>
          <div className="flex gap-[16px] ml-[104px]">
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/youtube.svg" alt="youtube" />
            </Link>
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/vk.svg" alt="vk" />
            </Link>
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/tiktok.svg" alt="tiktok" />
            </Link>
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/telegram.svg" alt="telegram" />
            </Link>
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/r.svg" alt="r" />
            </Link>
            <Link
              to="/"
              className="block w-[32px] h-[32px] hover:scale-110 transition duration-200">
              <img src="/inst.svg" alt="inst" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
