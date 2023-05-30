import React from 'react'
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex gap-20">
      <div>
        <div className="py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2012 - 2022
          </p>
          <h2 className="text-4xl font-bold"> Education </h2>
        </div>
        <div
          className='className="mt-14  h-[1000px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10 w-full'
        >
          <ResumeCard
            title="B.Tech (computer science)"
            subTitle="Kolhapur Institute of Technology's College of Engineering (Autonomous) Kolhapur."
            result="72.38%"
            des="B Tech CS course completed four-year undergraduate course that includes 8 semesters. "
          />
          <ResumeCard
            title=" Higher Secondary education (HSC)"
            subTitle="Vaidynath college parali-vaijnath"
            result="61.38%"
            des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
          />
          <ResumeCard
            title="Secondray School education (SSC)"
            subTitle="Vaidynath college parali-vaijnath"
            result="77.60%"
            des="Primary education covers two phases on the International standard classification of education scale"
          />
        </div>
      </div>
      <div>
        <div className="py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2021 - 2023
          </p>
          <h2 className="text-4xl font-bold"> Experience</h2>
        </div>
        <div
          className='className="mt-14  h-[1000px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10 w-full'
        >
          <ResumeCard
            title="Java FullStack Developer"
            subTitle="Sathya Technology"
            result="Hydrabad"
            des="Work with developement teams and product managers to design client-side and server-side applications."
          />
          <ResumeCard
            title="Web Developer"
            subTitle="Revolution It Solution"
            result="Kolhapur"
            des="To work on a project to develope a UI design of a website and make it intractive. "
          />
          <ResumeCard
            title="AI-ML Virtual Internship"
            subTitle="EduSkills - AWS Academy"
            result="Virtual"
            des="The basic understaing of artificial intelligence and machine learning in the virtual intership. "
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education
