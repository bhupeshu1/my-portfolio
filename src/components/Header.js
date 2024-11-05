import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

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
          : 'bg-gray-800 py-4 mb-4'
      }`}
    >
      <div className='text-2xl font-bold'>
        <span>Bhupesh</span> <span className='text-[#e9b949]'>Upadhyay</span>
      </div>
      <nav className='hidden md:flex space-x-4'>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className='hover:text-gray-400 transition duration-[600ms]'
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
