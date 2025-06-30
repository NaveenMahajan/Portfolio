import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
export const links = [
  { id: nanoid(), href: '#home', text: 'Home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },

];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-purple-400' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className='h-16 w-16 text-purple-400' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-purple-400' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Tailwind CSS',
    icon: <SiTailwindcss className='h-16 w-16 text-purple-400' />,
    text: 'Proficient in Tailwind CSS, crafting modern, responsive UIs rapidly with utility-first styling and streamlined design workflows.',
  },
];


export const projects = [
  {
    id: nanoid(),
    img: 'comfy.png ',
    url: 'https://comfy-store0.netlify.app/',
    github: 'https://github.com/NaveenMahajan/Comfy-store/tree/main/comfy-store',
    title: 'Comfy-Store',
    text: 'E-commerce furniture store with an order processing workflow and Content Management System.',
  },
  {
    id: nanoid(),
    img: 'img-2.png',
    url: 'https://tours11.netlify.app/',
    github:'https://github.com/NaveenMahajan/React-Fundamentals_Projects/tree/main/Tours',
    title: 'Our Tours',
    text: 'A single page application where users can find different tours and plans provided by company for spending their holidays. ',
  },
  {
    id: nanoid(),
    img: 'img-1.png',
    url: 'https://unsplash-images01.netlify.app/',
    github: 'https://github.com/NaveenMahajan/React-Query/tree/main/07-unsplash-images',
    title: 'Unsplash Images',
    text: 'An app where users can search images from unsplash api which provides copyright free images that can be used anywhere. ',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '#',
    github: '/',
    title: 'Casino Number Guessing Game',
    text: 'In this Number Guessing Game the program asks for a betting amount and then asks user to guess a number on rolling.',
  },
 
];
