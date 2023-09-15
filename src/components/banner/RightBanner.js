import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img className='w-[300px] h-[400px] md:w-[450px] md:h-[550px] lgl:w-[500px] lgl:h-[700px] z-10'
        src={bannerImg}
        alt='bannerimg' />

      <div className='absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] md:w-[500px] md:h-[300px] bg-gradient-to-r 
        from-[#1e2024] to-[#202327] shadowOne flex justify-center items-center'>
      </div>
    </div>
  )
}

export default RightBanner
