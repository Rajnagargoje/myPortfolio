import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({ title, des, icon }) => {
  return (
    <div className='w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex
    items-center  bg-gradient-to-r from-[#1e2024] to-[#23272b] group
    hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors
    duration-100 group'>
      <div className='h-72 overflow-y-hidden'>
        <div className=' flex h-full flex-col gap-8 translate-y-14 group-hover:translate-y-0 transition-transform duration-500'>
          <div>
            <span className='text-5xl text-designColor'> {icon}</span>
          </div>
          <div className='flex flex-col gap-6'>
            <h2 className='md:text-2xl text-xl font-titleFont font-bold text-gray-400'>
              {title}
            </h2>
            <p className='text-base text-gray-400'>{des}</p>
            <span className='text-2xl text-designColor'>
              <HiArrowRight />
            </span>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Card
