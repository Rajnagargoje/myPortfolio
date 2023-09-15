import React from 'react'
import Title from '../layouts/Title'
import ProjectCard from './ProjectCard'
import { projectOne, projectTwo, projectFour, projectSix, projectThree, projectFive } from '../../assets/index';

const Projects = () => {
  return (
    <section id='projects'
      className='w-full py-20 border-b-[1px] border-b-black'>

      <div className='flex justify-center items-center text-center'>
        <Title title="Visit my portfolio and keep your feedback"
          des="My Projects"

        />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2  mdl:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-14'>
        <ProjectCard title='TextUtills-word editer'
          des='TextUtils is a utility which can be used to manipulate your text in the way you want.'
          src={projectOne}
          githublink='https://github.com/Rajnagargoje/TextUtils'
          websitelink='https://text-utils-brown.vercel.app/'
        />
        <ProjectCard title='Bank Application '
          des='It is used to perform CURD operation. It is developed by using springboot connected with SQL  database.'
          src={projectTwo}
          githublink='#'
          websitelink='#'
        />
        <ProjectCard title='Catering Service Website'
          des='This website is in under Progress'
          src={projectThree}
          githublink='#'
          websitelink='#'
        />
        <ProjectCard title='Spotify  clone'
          des='Designed fully responsive Spotify website clone with music.'
          src={projectFive}
          githublink='https://github.com/Rajnagargoje/SpotifyClone'
          websitelink='https://spotify-clone-ochre-zeta.vercel.app/'
        />
        <ProjectCard title='User authentication with OTP validatioin '
          des='This form get all student details about personal information and saved to SQL database.'
          src={projectFour}
          githublink='https://github.com/Rajnagargoje/FamilyTour'
          websitelink='#'
        />
        <ProjectCard title='Water Level Detection and Controlling Syatem App'
          des='It is IOT Based project to handle iot devices using mobile application like motor ON/OFF, Water Level and power Supply.'
          src={projectSix}
          githublink='#'
          websitelink='#'
        />


      </div>
    </section>
  )
}

export default Projects
