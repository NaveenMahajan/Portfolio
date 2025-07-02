import { useState } from 'react';
import about2 from '../../public/about2.png';
import SectionTitle from './SectionTitle';
import { FiMail, FiX } from 'react-icons/fi';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-16">
        {/* Image */}
        <img
          src={about2}
          alt="About illustration"
          className="w-full  object-contain"
        />

        {/* Text Content */}
        <article>
          <SectionTitle text="About" />
          <p className="text-slate-600 mt-8 leading-loose text-lg">
            Hello, I’m <span className="font-semibold text-purple-700">Naveen</span>, a dedicated and
            hard-working engineering graduate specialized in Computer Science Engineering. I have
            completed my degree with an overall CGPA of <span className="font-semibold">7.8</span>. I'm passionate about building modern,
            responsive web applications and continuously learning new technologies to improve my skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow hover:bg-purple-800 transition duration-300"
            >
              Download Resume
            </a>

            <button
              onClick={() => setShowPopup(true)}
              className="px-6 py-3 border border-purple-700 text-purple-700 font-semibold rounded-lg hover:bg-purple-100 transition duration-300"
            >
              Contact Me
            </button>
          </div>
        </article>
      </div>

      {/* Contact Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 relative shadow-lg text-center">
            {/* Close Button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              aria-label="Close"
            >
              <FiX size={24} />
            </button>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-4 text-purple-700">Connect with Me</h3>

            {/* Social Icons */}
            <div className="flex justify-center gap-6 text-purple-700 text-3xl">
              <a
                href="mailto:naveenmahajan1235678@example.com"
                aria-label="Email"
                className="hover:text-purple-500 transition"
              >
                <FiMail />
              </a>
              <a
                href="https://www.linkedin.com/in/naveen-mahajan-853567217"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-purple-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/Naveenm05360426"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="hover:text-purple-500 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
