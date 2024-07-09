

"use client";
import React from 'react';
import CountUp from 'react-countup';

export default function Certifications() {
  return (
    <div className="w-full h-auto bg-white pt-5">
     
      <div className="px-4 md:px-8 lg:px-20">
        <h1 className="text-[#1C3765] text-3xl md:text-4xl lg:text-5xl pt-12 md:pt-20 text-center font-semibold">
          Empowering Individuals, Transforming Lives: Our <br />
          MJK's Holistic Approach
        </h1>
        <h2 className="text-gray-400 text-base md:text-lg lg:text-xl pt-2 md:pt-4 text-center">
          Uniting for a Tuberculosis Free Future
        </h2>
      </div>
    
    <div className="py-12 md:py-20 px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8">
       
        <div className="text-base md:text-xl lg:text-2xl text-black font-bold text-center hover:text-[#24A3BF]">
          Sponsor
        </div>
        <div className="text-base md:text-xl lg:text-2xl text-black font-bold text-center hover:text-[#24A3BF]">
          Sponsor
        </div>
        <div className="text-base md:text-xl lg:text-2xl text-black font-bold text-center hover:text-[#24A3BF]">
          Sponsor
        </div>
        <div className="text-base md:text-xl lg:text-2xl text-black font-bold text-center hover:text-[#24A3BF]">
          Sponsor
        </div>
      </div>
    </div>
  
    <div className="py-8 md:py-10 px-4 md:px-8 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      
        <div className="w-full bg-[#24A3BF] text-white text-4xl md:text-5xl lg:text-7xl text-center p-8 md:p-12 rounded-lg shadow-md hover:bg-[#1C3765] font-extrabold transition-colors duration-300 flex flex-col items-center">
          <CountUp start={0} end={100000} duration={3} separator="," />
          <h1 className="text-lg md:text-xl lg:text-3xl text-center font-normal mt-2">
            lives saved <br /> from Tuberculosis.
          </h1>
        </div>
        <div className="w-full bg-[#24A3BF] text-white text-4xl md:text-5xl lg:text-7xl text-center p-8 md:p-12 rounded-lg shadow-md hover:bg-[#1C3765] font-extrabold transition-colors duration-300 flex flex-col items-center">
          <CountUp start={0} end={100000} duration={3} separator="," />
          <h1 className="text-lg md:text-xl lg:text-3xl text-center font-normal mt-2">
            lives saved <br /> from Tuberculosis.
          </h1>
        </div>
        <div className="w-full bg-[#24A3BF] text-white text-4xl md:text-5xl lg:text-7xl text-center p-8 md:p-12 rounded-lg shadow-md hover:bg-[#1C3765] font-extrabold transition-colors duration-300 flex flex-col items-center">
          <CountUp start={0} end={100000} duration={3} separator="," />
          <h1 className="text-lg md:text-xl lg:text-3xl text-center font-normal mt-2">
            lives saved <br /> from Tuberculosis.
          </h1>
        </div>
      </div>
    </div>
  </div>
  );
}