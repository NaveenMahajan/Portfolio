import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { id: 1, href: '#home', text: 'Home' },
  { id: 2, href: '#skills', text: 'Skills' },
 { id: 3, href: '#experience', text: 'Experience' },
  { id: 4, href: '#about', text: 'About' },
  { id: 5, href: '#projects', text: 'Projects' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-700 text-white relative z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center sm:py-6">
        {/* Logo */}
        <h2 className="text-3xl font-bold">
          Port<span className="text-purple-300">Folio</span>
        </h2>

        {/* Toggle Button */}
        <button
          className="text-3xl sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 text-lg font-semibold">
          {links.map(({ id, href, text }) => (
            <a
              key={id}
              href={href}
              className="capitalize tracking-wide hover:text-cyan-400 duration-300"
            >
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown Popup */}
{isOpen && (
  <div className="absolute top-full right-1 w-[180px] text-center bg-purple-800/70 backdrop-blur-0 rounded-2xl shadow-2xl sm:hidden z-50">
    {links.map(({ id, href, text }) => (
      <a
        key={id}
        href={href}
        onClick={() => setIsOpen(false)}
        className="block w-full px-4 py-2 text-white hover:text-black  transition duration-300"
      >
        {text}
      </a>
    ))}
  </div>
)}

    </nav>
  );
};

export default Navbar;
