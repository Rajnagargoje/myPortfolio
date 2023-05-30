import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne,projectTwo,projectFour,projectSix,projectThree,projectFive } from '../../assets/index';

const Projects = () => {
  return (
    <section id='projects' 
             className='w-full py-20 border-b-[1px] border-b-black'>
          
          <div className='flex justify-center items-center text-center'>
      <Title title="Visit my portfolio and keep your feedback"
             des="My Projects"
      />
    </div>
    <div className='grid grid-cols-3 gap-14'>
        <ProjectCard title='TextUtills-word editer'
            des='TextUtils is a utility which can be used to manipulate your text in the way you want.'
            src={projectOne}
        />
         <ProjectCard title='Bank Application '
            des='It is used to perform CURD operation. It is developed by using springboot connected with SQL  database.'
            src={projectTwo}
        />
         <ProjectCard title='Catering Service Website'
            des='This website is in under Progress'
            src={projectThree}
        />
         <ProjectCard title='Spotify  clone'
            des='Designed fully responsive Spotify website clone with music.'
            src={projectFive}
        />
         <ProjectCard title='Student Registration form'
            des='This form get all student details about personal information and saved to SQL database.'
            src={projectFour}
        />
         <ProjectCard title='Water Level Detection and Controlling Syatem App'
            des='It is IOT Based project to handle iot devices using mobile application like motor ON/OFF, Water Level and power Supply.'
            src={projectSix}
        />
        
       
    </div>
    </section>
  )
}

export default Projects
