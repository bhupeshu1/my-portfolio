import React from 'react';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <div className='bg-[#2a3f5c] sm:py-36 py-20 flex flex-col items-center'>
        <h1 className='text-center text-white font-semibold text-5xl sm:py-12 py-5 '>
          Contact
        </h1>
        <div className='flex flex-col sm:gap-10 gap-5  items-center'>
          <p className='text-center text-[#6AA2DC] text-xl'>
            If you are looking to get ahold of me, you can send me an email at{' '}
            <a
              className='cursor-pointer text-white uppercase'
              href='mailto:m2000arch@gmail.com'
            >
              m2000arch@gmail.com
            </a>
          </p>
          <p className='text-center text-[#6AA2DC] text-xl'>
            You can also reach me on LinkedIn at{' '}
            <a
              className='cursor-pointer text-white uppercase'
              href='https://www.linkedin.com/in/bhupeshu1/'
              target='_blank'
              rel='noreferrer'
            >
              Bhupesh Upadhyay@LinkedIn
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
