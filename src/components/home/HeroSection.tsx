import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="h-screen relative">
      {/* <video src="" className="w-full h-full"></video> */}
      <img src="/cover.png" alt="" className="w-full h-full object-cover" />
      <div className="overlay z-10 absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white">
        <div className="flex flex-col gap-[40px] items-center">
          <div className="flex flex-col items-center justify-center gap-[8px] text-center uppercase text-white">
            <h1 className=" text-[64px] leading-[80px] tracking-[3%]">menzil mekan</h1>
            <h2 className="text-[32px] leading-[40px] tracking-[3%]">turkmen animation studio</h2>
          </div>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
