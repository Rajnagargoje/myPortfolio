import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne,projectTwo,projectThree } from '../../assets/index';

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
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectOne}
        />
         <ProjectCard title='Bank Application '
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectTwo}
        />
         <ProjectCard title='Catering Service Website'
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectThree}
        />
         <ProjectCard title='Spotify  clone'
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectOne}
        />
         <ProjectCard title='Student Registration form'
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectTwo}
        />
         <ProjectCard title='Water Level Detection and Controlling Syatem App'
            des='To work in healthy, innovative and challenging environment extracting the best out of me,
            which '
            src={projectThree}
        />
        
       
    </div>
    </section>
  )
}

export default Projects
