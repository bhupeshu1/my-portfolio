import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileImage from '../assets/images/profileImg.jpeg';
import MyPic from '../assets/images/myPic.jpeg';
import AboutImage from '../assets/images/aboutmeImage.jpeg';

const Homepage = () => {
  let navigate = useNavigate();
  console.log(navigate, 'dfjkasjkdjkasdjasjdkajdasjdjk navigate the URL');

  return (
    <div className='w-full h-lvh'>
      {/* home page top first section */}
      <div className='w-full flex h-[600px] max-lg:h-auto max-lg:min-h-[300px]  bg-[#2a3f5c]'>
        {/* Left content with teal background */}
        <div className='w-[50%] flex items-center justify-center relative max-lg:w-full'>
          <img
            className='max-h-[450px] max-lg:w-[100%]'
            src='https://ajay-pathak-portfolio.netlify.app/assets/logo.svg'
            alt=''
          />
          {/* Text wrapper */}
          <div className='absolute text-center'>
            <h1 className='font-bold text-5xl text-white'>I'm Bhupesh</h1>
            <p className='font-semibold text-[#617c98] text-2xl'>
              Frontend Developer
            </p>
            <div className='mt-6'>
              <a
                href='/'
                download={''}
                className='font-bold text-[#fff] cursor-pointer p-4 uppercase bg-[#23272ff2] rounded-lg shadow-custom-white'
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right content with red background, hidden on small screens */}
        <div className='w-[50%] flex items-center justify-center max-lg:hidden'>
          {/* Centered Image Container */}
          <div className='max-w-[400px] w-full h-[400px] rounded-lg flex items-center justify-center overflow-hidden'>
            <img
              src={AboutImage}
              className='object-cover h-full w-full'
              alt=''
            />
          </div>
        </div>
      </div>
      {/* about me section */}
      <div className='w-full  bg-[#40464c] max-lg:h-auto max-lg:min-h-[300px] h-[550px] flex justify-center items-center gap-10 p-16 max-lg:flex-col'>
        <div className='w-[25%] h-full overflow-hidden max-lg:w-full'>
          <div className='w-[100%]'>
            <img
              src={MyPic}
              alt='aboutMeImage'
              className='w-[100%] h-[100%] rounded-md'
            />
          </div>
        </div>
        <div className='w-[75%] px-6'>
          <div className='mb-5'>
            <h1 className='font-extrabold text-white text-2xl mb-2'>About</h1>
            <div className='h-1 w-14 bg-black'></div>
          </div>
          <div className=''>
            <p className='mb-5 text-[#5278a1] box-border text-lg font-normal'>
              I am Bhupesh Upadhyay, an aspiring Frontend Developer with 2 years
              of experience and knowledge of the latest web technologies. I am
              proficient in building full-fledged web applications, especially
              the frontend part. I have made static as well as dynamic web pages
              using HTML, CSS, and JavaScript. I am learning to deal with
              complex algorithms and improving my problem-solving skills. As an
              immediate joiner, I am ready to collaborate on projects, and I
              look forward to connecting with you soon.
            </p>
            <p className='text-[#5278a1] box-border text-lg font-normal'>
              Alongside my creative pursuits, I have a strong focus on the world
              of software testing. I am skilled in manual testing and passionate
              about ensuring the quality of applications through rigorous test
              cases. In addition to manual testing, I also have experience in
              automation testing using Playwright, where I write and execute
              automated test scripts to ensure the functionality and reliability
              of web applications. I enjoy chilling out on weekends and making
              new and interesting friends.
            </p>
          </div>
          <button
            onClick={() => navigate('about')}
            className='uppercase py-2 px-4 border-none rounded-md bg-[#23272ff2] text-white text-center mt-5 '
          >
            about me
          </button>
        </div>
      </div>
      {/* services section */}
      <div className='w-full max-lg:h-auto max-lg:min-h-[300px] h-[600px] bg-[#23272ff2] px-36 py-24'>
        <div className='mb-8 '>
          <h1 className='text-white font-bold text-4xl text-center '>
            Services
          </h1>
        </div>
        <div className='flex gap-8'>
          <div className='w-[400px] h-[400px] bg-white rounded-md py-8 px-5'></div>
          <div className='w-[400px] h-[400px] bg-white rounded-md py-8 px-5'></div>

          <div className='w-[400px] h-[400px] bg-white rounded-md py-8 px-5'></div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
