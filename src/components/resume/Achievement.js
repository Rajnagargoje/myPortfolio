import React from 'react';
import ResumeCard from './ResumeCard';
import { motion } from 'framer-motion';

const Achievement = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{duration:.5}}} className="w-full flex gap-20">
    <div>
      <div className="py-20 flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          1998 - 2010
        </p>
        <h2 className="text-4xl font-bold ">Achievement </h2>
      </div>
      <div
        className='className="mt-14  h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 w-full'
      >
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
      </div>
    </div>
    <div>
      <div className="py-20 flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] uppercase">
          2022 - 2023{" "}
        </p>
        <h2 className="text-4xl font-bold"> Job Experience</h2>
      </div>
      <div
        className='className="mt-14  h-[1000px] border-l-[6px] border-l-black
      border-opacity-30 flex flex-col gap-10 w-full'
      >
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
        <ResumeCard
          title="Secondray School education"
          subTitle="Vaidynath college parali-vaijnath"
          result="61.38%"
          des="Secondray education or post primary education covers two phases on the International standard classification of education scale"
        />
      </div>
    </div>
  </motion.div>
  )
}

export default Achievement
