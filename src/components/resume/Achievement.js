import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Achievement = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className="w-full flex flex-col lgl:flex-row  gap-10 lgl:gap-20">
      <div>
        <div className="py-6 lgl:py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2012 - 2018
          </p>
          <h2 className=" text-3xl lgl:text-4xl font-bold ">Extra-Curricular Activity </h2>
        </div>
        <div
          className=' mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 w-full'
        >
          <ResumeCard
            title="National Workshop on Article-370 and Act-2019"
            subTitle="Department of political Science"
            result="Completed"
            des="Has attended one day Natonal Workshop 'Jammu and Kashmir Article-370 and  Reorganisation Act-2019'. "
          />
          <ResumeCard
            title="RashtraPita Mahatma Gandhi Quiz"
            subTitle="Rajarshi Shahu Mahavidyalaya (Autonomous) college "
            result="Quiz"
            des="International Non Violence Day occasion arranged a online Technical java Quiz Performed Excellent."
          />
          <ResumeCard
            title="Mastering Interview Questions"
            subTitle="Great Learning online platfoem"
            result="Intrview"
            des="Completed a how to perform well in intrview course certificate"
          />
        </div>
      </div>
      <div>
        <div className=" py-6 lgl:py-20 flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            2018 - 2023
          </p>
          <h2 className=" text-3xl lgl:text-4xl font-bold"> Achievement</h2>
        </div>
        <div
          className='mt-6 lgl:mt-14  h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 w-full'
        >
          <ResumeCard
            title="PIONEER National Event"
            subTitle="KIT's College of Engineering "
            result="Member"
            des="Worked as a technical team member in PIONEER national level event. "
          />
          <ResumeCard
            title="CODIGO coding competiton"
            subTitle="KIT's College of Engineering "
            result="CODIGO"
            des="Participated in 'CODIGO' coding competiton event arranged by CSi committee"
          />
          <ResumeCard
            title="Computer Society of India"
            subTitle="Education Directorate, National Headquarters"
            result="CSI"
            des="Joined  Member of a Computer Society of India. "
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Achievement
