
import Image from 'next/image';
import React from 'react';
import tb from "../assets/tuberculosis.png";
import { Button } from './ui/button';

export default function Hero() {
  return (
    <div id="home" className="w-full h-auto md:h-[700px] grid grid-cols-1 md:grid-cols-5">
      {/* Left Section (Text Content) */}
      <div className="col-span-1 md:col-span-4 bg-[#0B4B66] px-4 py-16 md:px-10 md:py-40">
        <h1 className="text-4xl md:text-7xl font-semibold py-2 md:py-3 text-white">
          Transforming Lives:
        </h1>
        <h1 className="text-4xl md:text-7xl font-semibold py-2 md:py-3 text-white">
          Maharastra Janavikas Kendra
        </h1>
        <h1 className="text-4xl md:text-7xl font-semibold py-2 md:py-3 text-white">
          Mission of Hope
        </h1>
        <p className="text-base md:text-xl py-3 md:py-5 text-gray-300">
          At our Maharastra Janavikas Kendra, we are committed to providing comprehensive care and support to those affected by tuberculosis.
        </p>
        <Button className=" mt-4 md:mt-0 text-base md:text-xl w-full md:w-60 hover:bg-[#24A3BF]">
          Learn More About TB
        </Button>
      </div>
      {/* Right Section (Image) */}
      <div className="col-span-1 bg-white relative hidden md:block"> 
        <Image
          src={tb}
          alt="tb"
          className="absolute right-[-150px] md:right-0 top-0 w-full md:w-auto h-auto md:h-full object-contain" 
        />
      </div>
    </div>
  );
}