import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
const Hero = () => {
  return (
    <section className='bg-purple-700 py-24  '>
      <div className=' align-element   grid  md:grid-cols-2 items-center gap-8'>
        <article>
          <h1 className='text-6xl font-bold tracking-wider'>I'm Naveen Mahajan</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Front-end developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
          This is my official Portfolio website to showcase
           My all related to frontend development
          </p>
          <div className='flex gap-x-4 mt-4'>
            <a href='https://github.com/NaveenMahajan?tab=repositories'>
              <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://www.linkedin.com/in/naveen-mahajan-853567217/'>
              <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
            <a href='https://twitter.com/Naveenm05360426'>
              <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
            </a>
          </div>
        </article>

        <article className='hidden md:block '>
          <img src={heroImg} className='h-90 lg:h-96' />
        </article>
      </div>
    </section>
  );
};
export default Hero;
