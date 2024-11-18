import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <>
      <div className='w-full  bg-[#222] sm:py-12 py-7 flex flex-col gap-11'>
        <p className='text-center text-[#617c98] text-lg'>
          © 2024 Bhupesh Upadhyay. All rights reserved.
        </p>
        <div className='flex items-center justify-center gap-8'>
          <a
            href='https://www.instagram.com/upadhyay_bhupesh01/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='cursor-pointer'
              icon={faInstagram}
              style={{ color: '#FFFFFF', fontSize: '26px' }}
            />
          </a>
          <a
            href='https://github.com/bhupeshu1'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='cursor-pointer'
              icon={faGithub}
              style={{ color: '#FFFFFF', fontSize: '26px' }}
            />
          </a>
          <a
            href='https://www.facebook.com/bhupesh.bablu.9/'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon
              className='cursor-pointer'
              icon={faFacebook}
              style={{ color: '#FFFFFF', fontSize: '26px' }}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/bhupeshu1/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <FontAwesomeIcon
              className='cursor-pointer'
              icon={faLinkedin}
              style={{ color: '#FFFFFF', fontSize: '26px' }}
            />
          </a>
          <FontAwesomeIcon
            className='cursor-pointer'
            icon={faTwitter}
            style={{ color: '#FFFFFF', fontSize: '26px' }}
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
