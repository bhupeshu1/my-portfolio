import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import ProfileImage from '../assets/images/profileImg.jpeg';
import MyPic from '../assets/images/myPic.jpeg';
import AboutImage from '../assets/images/aboutmeImage.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faUser } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

// import '@fortawesome/fontawesome-free/css/all.min.css';

const Homepage = () => {
  // const ref =useRef();
  let navigate = useNavigate();
  console.log(navigate, 'dfjkasjkdjkasdjasjdkajdasjdjk navigate the URL');
  const listData = ['first', 'second', 'third', 'fourth', 'five','first', 'second', 'third', 'fourth', 'five'];
  const paragraphs = document.querySelectorAll("p");
const r15 = document.getElementById('do');

// Check if the element with ID 'do' exists and is a <p> tag
if (r15 && r15.tagName === 'P') {
    alert(r15.nodeName);  // Will display "P" if the element is a <p> tag
} else {
    console.log("No <p> element with ID 'do' found in the document.");
}


  return (
    <div className='w-full h-lvh'>
      {/* home page top first section */}
      <div className='w-full flex h-[600px] max-lg:h-auto max-lg:min-h-[300px] bg-[#2a3f5c]'>
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
      <div className='w-full  bg-[#40464c] max-lg:h-auto max-lg:min-h-[300px] h-[550px] flex justify-center items-center gap-10 p-16 max-lg:p-2 max-lg:flex-col'>
        <div className='w-[25%] h-full overflow-hidden max-lg:w-full'>
          <div className='w-[100%]'>
            <img
              src={MyPic}
              alt='aboutMeImage'
              className='w-[100%] h-[100%] rounded-md'
            />
          </div>
        </div>
        <div className='w-[75%] px-6 max-lg:px-0'>
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
          <div>
            <button
              onClick={() => navigate('about')}
              className='uppercase py-2 px-4 border-none rounded-md bg-[#23272ff2] text-white text-center mt-5 '
            >
              about me
            </button>
            <div id='r15'>

            <p>hello</p>
            <p>guys</p>
            </div>
          </div>
        </div>
      </div>

      {/* services section */}
      <div className='w-full max-lg:h-auto max-lg:min-h-[300px] h-[600px] bg-[#23272ff2] px-36 py-24 max-lg:px-3 max-lg:py-3'>
        <div className='mb-8 '>
          <h1 className='text-white font-bold text-4xl text-center '>
            Services
          </h1>
        </div>
        <div className='w-full flex flex-wrap justify-center gap-8 max-lg:flex-col'>
          <div className='max-w-[350px] w-full h-[400px] bg-white rounded-md py-8 px-5 flex items-center justify-center flex-col text-center hover:bg-transparent gap-4 hover:text-white text-[#5278a1] max-lg:py-6 max-lg:px-4 max-lg:w-full'>
            <FontAwesomeIcon icon={faDesktop} fontSize={'large'} />

            <FontAwesomeIcon icon='fa-solid fa-computer' />
            <p className='mt-4 text-center text-lg font-bold'>
              Web Development
            </p>
            <div className='bg-white w-20 h-1'></div>
            <p className=''>
              I am proficient in HTML, CSS and Javascript. I know to make modern
              responsive designs and create animations, layouts etc. with CSS. I
              can make dynamic frontend of websites.
            </p>
          </div>
          <div className='max-w-[350px] w-full h-[400px] bg-white rounded-md py-8 px-5 flex items-center justify-center flex-col text-center hover:bg-transparent gap-4 hover:text-white text-[#5278a1] max-lg:py-6 max-lg:px-4 max-lg:w-full'>
            <FontAwesomeIcon icon={faDesktop} fontSize={'large'} />{' '}
            {/* Home icon */}
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <FontAwesomeIcon icon='fa-solid fa-computer' />
            <p className='mt-4 text-center text-lg font-bold'>
              Web Development
            </p>
            <div className='bg-white w-20 h-1'></div>
            <p className=''>
              I am proficient in HTML, CSS and Javascript. I know to make modern
              responsive designs and create animations, layouts etc. with CSS. I
              can make dynamic frontend of websites.
            </p>
          </div>
          <div className='max-w-[350px] w-full h-[400px] bg-white rounded-md py-8 px-5 flex items-center justify-center flex-col text-center hover:bg-transparent gap-4 hover:text-white text-[#5278a1] max-lg:py-6 max-lg:px-4 max-lg:w-full'>
            <FontAwesomeIcon icon={faDesktop} fontSize={'large'} />{' '}
            {/* Home icon */}
            {/* <FontAwesomeIcon icon={faUser} /> */}
            <FontAwesomeIcon icon='fa-solid fa-computer' />
            <p className='mt-4 text-center text-lg font-bold'>
              Web Development
            </p>
            <div className='bg-white w-20 h-1'></div>
            <p className=''>
              I am proficient in HTML, CSS and Javascript. I know to make modern
              responsive designs and create animations, layouts etc. with CSS. I
              can make dynamic frontend of websites.
            </p>
          </div>
        </div>
      </div>
      {/* latest work */}
      <div className='h-[820px] max-lg:h-auto w-full bg-[#23272ff2]'>
        <div className='flex justify-center items-center flex-col gap-4 mb-8  '>
          <h1 className='text-center text-white font-bold text-4xl'>
            Latest Works
          </h1>
          <div className='bg-black w-16 h-1'></div>
          <div>
            <p className='text-center max-w-[500px] text-[#6e869f]'>
              In this section, you may find my latest works which I have done in
              my personal or professional career. Hope you all will like it and
              suggest me with better ideas to code or collaborate.
              single-project Chai Wallah Project Personal Project
            </p>
          </div>
        </div>
        {/* image section */}
        <div className='w-full flex gap-5 px-10  overflow-hidden box-border'>
          <div className='w-full sm:w-1/2 md:w-1/3 max-w-lg min-h-[300px]  rounded-lg overflow-hidden  max-lg:h-[50%]'>
            <img
              className='w-full h-full object-cover'
              src='https://ajay-pathak-portfolio.netlify.app/images/chai-main-bcg.jpeg'
              alt='imageHere'
            />
          </div>

          <div className='w-[70%] min-h-[600px]  flex flex-col gap-5 max-lg:w-full max-lg:bg-red-50  '>
            <div className='h-[50%] bg-teal-200  rounded-lg'></div>
            <div className='h-[50%]  flex gap-4  '>
              <div className='bg-yellow-200 w-1/2 rounded-lg'></div>
              <div className='bg-green-400 w-1/2  rounded-lg '></div>
            </div>
          </div>
        </div>

        {/* <div className='grid grid-cols-1 lg:grid-cols-3 gap-0 bg-red-400 h-auto lg:h-screen'>
  <div className='bg-red-200 w-full h-full lg:row-span-2'></div>

  <div className='bg-green-300 w-full h-[200px] lg:col-span-2'></div>

  <div className='bg-blue-300 w-full h-[200px]'></div>
  <div className='bg-yellow-300 w-full h-[200px]'></div>
</div>  */}
        {/* <ul className='mt-8 bg-green-100'>
          {listData.map((item, index) => (
            <div key={index}>
            <li>{item}</li>

            </div>
          ))}
        </ul> */}
        <Footer/>
      </div>
    </div>
  );
};

export default Homepage;
