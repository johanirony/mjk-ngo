"use client";
import React from 'react';
import Image from 'next/image';
import tb from '../assets/tuberculosis.png';
import { Button } from './ui/button';

export default function About() {
  return (
    <div className='w-full h-auto bg-[#e7f3ff] pb-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0'> {/* Responsive Grid */}
        {/* Left Section (Text Content) */}
        <div className='bg-[#e7f3ff] px-4 md:px-8 py-5 md:py-10'>
          <h1 className='text-2xl md:text-4xl text-[#1C3765] font-semibold'>About Us</h1>
          <p className='text-base md:text-xl pt-2 md:pt-5 text-[#1C3765]'>
            Maharashtra Janavikas Kendra (MJK) started to work in the community in 1996. 
            MJK works on Education (Balwadis, Remedial Classes), Health (TB Control), 
            Family Development & Vocational Training (Tailoring, Basic Computer, Beautician, Painting Classes).
            <br /><br />
            Currently, MJK is working in Health (TB Control Programme) in Mumbai, Mira Bhayandar, Vasai-Virar & Thane Rural Area in collaboration with local TB District Societies under the Revised National TB Control Programme (RNTCP). 
            MJK is also an implementing partner of the Private Practitioners Interface Agency (PPIA).
          </p>
          <div className='mt-4 md:mt-8'>
            <Button className='text-base md:text-xl w-full md:w-[200px] hover:bg-[#24A3BF]'>
              Follow us
            </Button>
          </div>
        </div>
        {/* Right Section (Image and Mission/Vision) */}
        <div className='relative bg-[#24A3BF] w-full h-auto px-4 md:px-8 py-5 md:py-10 flex flex-col items-end'> {/* Flex for Alignment */}
          <h1 className='text-2xl md:text-4xl text-white font-semibold text-right'>
            Our Mission & Vision
          </h1>
          <p className='text-base md:text-xl text-white text-right mt-2 md:mt-5'>
            The primary aim of MJK is to promote the holistic development of individuals and communities, 
            especially the economically weaker section of society, and to encourage sustainable community initiatives. 
            MJK is committed to the participation and strengthening of educational and integrated community health care initiatives.
          </p>
          
        </div>
      </div>
    </div>
  );
}