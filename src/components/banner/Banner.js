import React from 'react'
import LeftBanner from "./LeftBanner";
import RightBanner from './RightBanner';


const Banner = () => {
 
  return (
    <section
      id="home"
      className="w-full pt-5 pb-10 flex items-center font-titleFont  border-b-[1px]  border-b-black"
    >
       <LeftBanner/>
       <RightBanner/>
   
      
    </section>
  );
}

export default Banner
