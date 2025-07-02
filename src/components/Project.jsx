import ProjectsCard from './ProjectsCard';
import SectionTitle from './SectionTitle'
const Projects = () => {
   const projects = [
  {
    id: 1,
    img: 'comfy.png ',
    url: 'https://comfy-store0.netlify.app/',
    github: 'https://github.com/NaveenMahajan/Comfy-store/tree/main/comfy-store',
    title: 'Comfy-Store',
    text: 'E-commerce furniture store with an order processing workflow and Content Management System.',
  },
  {
    id: 2,
    img: 'img-2.png',
    url: 'https://tours11.netlify.app/',
    github:'https://github.com/NaveenMahajan/React-Fundamentals_Projects/tree/main/Tours',
    title: 'Our Tours',
    text: 'A single page application where users can find different tours and plans provided by company for spending their holidays. ',
  },
  {
    id: 3,
    img: 'img-1.png',
    url: 'https://unsplash-images01.netlify.app/',
    github: 'https://github.com/NaveenMahajan/React-Query/tree/main/07-unsplash-images',
    title: 'Unsplash Images',
    text: 'An app where users can search images from unsplash api which provides copyright free images that can be used anywhere. ',
  },
  {
    id: 4,
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '#',
    github: '/',
    title: 'Casino Number Guessing Game',
    text: 'In this Number Guessing Game the program asks for a betting amount and then asks user to guess a number on rolling.',
  },
 
];
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;