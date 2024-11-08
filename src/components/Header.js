import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Projects from '../pages/Projects';
// import Homepage from "./pages/Homepage"

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-20 flex justify-between h-20 items-center p-4 transition duration-[600ms] box-border ${
        isSticky
          ? 'bg-[#23272ff2] bg-opacity-90 shadow-lg py-3'
          : 'bg-[#2a3f5c] py-4 mb-4'
      }`}
    >
      <div className='text-2xl font-bold'>
        <span>Bhupesh</span> <span className='text-[#e9b949]'>Upadhyay</span>
      </div>
      <nav className='hidden md:flex space-x-4'>
        <Link to="/" className='hover:text-gray-400 text-white transition duration-[600ms]'>
          Homepage
        </Link>
        <Link to="about" className='hover:text-gray-400 text-white transition duration-[600ms]'>
          About
        </Link>
        <Link to="projects" className='hover:text-gray-400 text-white transition duration-[600ms]'>
          Projects
        </Link>
        <Link to="contact" className='hover:text-gray-400 text-white transition duration-[600ms]'>
          Contact
        </Link>
        <Link to="product" className='hover:text-gray-400 text-white transition duration-[600ms]'>
          Products
        </Link>
      </nav>
    </header>
  );
};

export default Header;
