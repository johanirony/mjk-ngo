import React from 'react'
import TeamCard from './TeamCard'

export default function Team() {
  return (
    <div className='w-full h-auto bg-[#e7f3ff] py-5 flex flex-col'>
        <div className='px-8'>
            <h1 className='text-4xl text-[#1C3765] font-semibold text-center'>Together Against Tuberculosis</h1>
        </div>
        <div className='px-8 py-10 flex justify-center'>
            <TeamCard/>

        </div>
        </div>
  )
}
