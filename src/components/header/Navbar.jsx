import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="sobre" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-10 py-10 rounded-md text-sm font-medium">
                  Sobre mi
                </Link>
                <Link to="proyectos" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-10 py-10 rounded-md text-sm font-medium">
                  Proyectos
                </Link>
                <Link to="habilidades" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-10 py-10 rounded-md text-sm font-medium">
                  Habilidades
                </Link>
                <Link to="contacto" smooth={true} duration={500} className="text-gray-300 hover:bg-gray-700 hover:text-white px-10 py-10 rounded-md text-sm font-medium">
                  Contacto
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#sobre"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Sobre mi
          </a>
          <a
            href="#proyectos"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Proyectos
          </a>
          <a
            href="#habilidades"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Habilidades
          </a>
          <a
            href="#contacto"
            className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium"
          >
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
