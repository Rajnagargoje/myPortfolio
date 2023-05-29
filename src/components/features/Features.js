import React from 'react'
import Title from '../layouts/Title';
import Card from '../features/card/Card';
import { AiFillAppstore } from "react-icons/ai";
import {FaMobile, FaGlobe, FaBusinessTime,FaJava} from "react-icons/fa";
import {SiProgress,SiAntdesign} from "react-icons/si";
import {RiStockFill,} from "react-icons/ri"
import {AiOutlineStock} from "react-icons/ai"

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-10 border-b-[1px] border-b-black "
    >
      <Title title='Features' des='What I do'/>
      
      <div className='grid grid-cols-3 gap-20'>
        <Card title='Web Developer'
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which is "
                icon={<FaGlobe/>}
              />
        <Card title='Java Developer'
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which is"
              icon={<FaJava/>} />
        <Card title="Business Stratagy"
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which"
            icon={<FaBusinessTime/>} />
    
        <Card  title="Option Trading"
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which "
              icon={<RiStockFill/>} 
              />
        <Card  title="Active Lerner"
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which "
              icon={<SiProgress/>}
              />
        <Card  title="Home Planer"
              des="To work in healthy, innovative and challenging environment extracting the best out of me,
            which "
              icon={<SiAntdesign/>}
              /> 
      </div>
    </section>
  );
}

export default Features
