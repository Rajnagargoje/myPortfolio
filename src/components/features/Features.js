import React from 'react'
import Title from '../layouts/Title';
import Card from '../features/card/Card';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBusinessTime, FaJava } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { RiStockFill, } from "react-icons/ri"
import { AiOutlineStock } from "react-icons/ai"

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-10 border-b-[1px] border-b-black "
    >
      <Title title='Features' des='What I do' />

      <div className='grid grid-cols-1 md:grid-cols-2 mdl:grid-cols-3 xl:grid-cols-3  gap-6 xl:gap-20'>
        <Card title='Web Developer'
          des="Designing and building responsive and mobile-friendly websites optimized for different devices and browsers."
          icon={<FaGlobe />}
        />
        <Card title='Full Stack Java Developer'
          des="Designing,implementing and maintaining java-based software and application."
          icon={<FaJava />} />
        <Card title="Business Stratagy"
          des="Thinking and planing to make a online system to generate a passive income and help to people their daily life. "
          icon={<FaBusinessTime />} />

        <Card title="Option Trading"
          des="Learning a day trading with index option and try to understand psychology behind the market. "
          icon={<RiStockFill />}
        />
        <Card title="Active Lerner"
          des="An intrested a learning a new things which can be help to be improve life professionaly"
          icon={<SiProgress />}
        />
        <Card title="Home Planer"
          des="Work on a daily basis to apply new things to home and try to grow techinically."
          icon={<SiAntdesign />}
        />
      </div>
    </section>
  );
}

export default Features
