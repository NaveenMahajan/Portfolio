import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Hello. i am Naveen. i am a hard-working engineering
            graduated specialised in computer science Engineering
            with an over all CGPA:-7.8
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
