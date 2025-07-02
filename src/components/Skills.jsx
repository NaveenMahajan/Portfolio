import React from 'react'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'
import { FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';


const Skills = () => {
  const skills = [
  {
    id: 1,
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-purple-400' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: 2,
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-purple-400' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: 3,
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-purple-400' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: 4,
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-purple-400' />,
    text: 'Proficient in Tailwind CSS, crafting modern, responsive UIs rapidly with utility-first styling and streamlined design workflows.',
  },
  {
    id: 5,
    title: 'Git & GitHub',
    icon: <FaGithub className='h-16 w-16 text-purple-400' />,
    text: 'Experienced with Git and GitHub for version control, collaboration, and maintaining clean, trackable codebases in development workflows.',
  },
];

  return (
   <section className=' align-element py-20 ' id='skills'>
    <SectionTitle text='tech stack'/>
    <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
     {skills.map((skill)=>{
 return(
    <SkillsCard key={skill.id} {...skill}/>
 )
     })}
    </div>
   </section>
  )
}

export default Skills