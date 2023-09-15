import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="w-full flex flex-col lgl:flex-row gap-10  lgl:gap-20">
      <div>
        <div className=" py-6 lgl:py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2018 - 2023
          </p>
          <h2 className="text-3xl md:text-4xl font-bold"> Certifications</h2>
        </div>
        <div
          className=" mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
        border-opacity-30 flex flex-col gap-10 w-full"
        >
          <ResumeCard
            title="Computer Network"
            subTitle="KIT's College of Engineering"
            result="KITCOEK"
            des="The Workshop conducted by college on networking understand the basic protocols. "
          />
          <ResumeCard
            title="Google Cloud Certifications"
            subTitle="Google Cloud Platform Gurus, Udemy"
            result="Udemy"
            des="Complited the google cloud course which certified by udemy under the college activity."
          />
          <ResumeCard
            title="Completion of C Training"
            subTitle=" Spoken Tutorial Project, IIT Bombay"
            result="IIT Bombay"
            des="Under the guidence of HOD, The C language Course complited which is offered by IIT Bombay."
          />
        </div>
      </div>
      <div>
        <div className=" py-6 lgl:py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2021 - 2023
          </p>
          <h2 className="text-3xl lgl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div
          className=' mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
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
  )
}

export default Experience
