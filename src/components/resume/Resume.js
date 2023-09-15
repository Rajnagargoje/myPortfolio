import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

function Resume() {
  const [educationData, seteducationData] = useState(true);
  const [skillData, setskillData] = useState(false);
  const [experienceData, setexperienceData] = useState(false);
  const [achievementData, setachievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title="Visit my portfolio and keep your feedback"
          des="My Resume"
        />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 mdl:grid-cols-4 xl:grid-cols-4">
          <li
            onClick={() =>
              seteducationData(true) &
              setskillData(false) &
              setexperienceData(false) &
              setachievementData(false)
            }
            className={`${educationData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>

          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(true) &
              setexperienceData(false) &
              setachievementData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(false) &
              setexperienceData(true) &
              setachievementData(false)
            }
            className={`${experienceData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Certifications
          </li>
          <li
            onClick={() =>
              seteducationData(false) &
              setskillData(false) &
              setexperienceData(false) &
              setachievementData(true)
            }
            className={`${achievementData
              ? "border-designColor rounded-lg"
              : "border-transparent"
              } resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  );
}

export default Resume
