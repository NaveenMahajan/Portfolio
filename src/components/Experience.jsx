import { Briefcase } from 'lucide-react';
import { FaLink } from "react-icons/fa";
const Experience = () => {
  const experienceData = [
    {
      title: 'React JS Intern',
      company: 'Talentrise Technokrate Pvt. Ltd.',
      date: 'March 2025 – June 2025',
      description: 'UI Development using React & Tailwind CSS',
      projects: [
        'Real Estate Platform – UI for listings & agent profiles.',
        'Techo-Hire Job Portal – Job forms & recruiter dashboards.',
        'Neargud Website – Shop listings with filters & responsive UI.',
        'Bagherwal Samaj Portal – Member directory & admin dashboard.',
        'Leader Management – Dashboards for volunteers & leaders.',
      ],
    },

  ];

  return (
    <section className="bg-gray-100 py-20" id="experience">
      <div className="align-element">
        <h2 className="text-4xl font-bold mb-12 flex items-center gap-3">
          <Briefcase className="text-purple-600" size={36} />
          Experience
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-700">{exp.title}</h3>
               <div className='flex gap-5'>
                 <p className="text-gray-800 font-medium">{exp.company} </p>
             <a href='https://www.linkedin.com/company/telentrisetechnokrate/posts/?feedView=all'>
                <FaLink  size={20} className='text-purple-500'/>
             </a>
               </div>
                <p className="text-sm text-gray-500">{exp.date}</p>
                <p className="mt-1 text-gray-600">{exp.description}</p>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                {exp.projects.map((project, i) => (
                  <li key={i}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
