import React from 'react';
import Header from './components/Header';
import AboutSection from './components/pages/AboutSection';
// import ColorFillBox from '../src/ColorFillBox';

const App = () => {
  return (
   <div className=''>
    <Header/>
    <div className='mt-24'>
    {/* <ColorFillBox/> */}

    </div>
    <AboutSection/>
   </div>
  );
};

export default App;

// import React, { useRef } from 'react';
// // import Header from './components/Header';
// import Profile_image from '../src/assets/images/profile_img.jpeg';
// import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
// import WavingHandIcon from '@mui/icons-material/WavingHand';
// // import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// // import { Button } from '@mui/material';
// // import DarkModeIcon from '@mui/icons-material/DarkMode';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import CloseIcon from '@mui/icons-material/Close';
// // import ProfileSection from "./pages/pages/ProfileSection";
// import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
// // import { Button } from '@mui/material';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';

// function App() {
//   const NavLink = ({ href, children }) => (
//     <li>
//       <a href={href} className='cursor-pointer'>
//         {children}
//       </a>
//     </li>
//   );

//   const sideMenuRef = useRef(null);

//   const openMenu = () => {
//     if (sideMenuRef.current) {
//       sideMenuRef.current.style.transform = 'translateX(-16rem)';
//     }
//   };

//   const closeMenu = () => {
//     if (sideMenuRef.current) {
//       sideMenuRef.current.style.transform = 'translateX(16rem)';
//     }
//   };

//   const createEle = React.createElement('h1', {}, 'hello world');
//   console.log(createEle);
//   const jsxHeading = <h1>dkhfkhasdasd</h1>;
//   console.log(jsxHeading);
//   return (
//     <div className='w-full h-lvh'>
//       <nav className='relative w-full flex justify-between items-center bg-yellow-50 px-5 lg:px-8 xl-px-[8%] py-4 z-50'>

//         <h1 className='mr-14 cursor-pointer'>Bhupesh.</h1>
//         <ul className='hidden md:flex gap-6 lg:gap-8 items-center rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50'>
//           <NavLink href='cur'>Home</NavLink>
//           <NavLink href='cursd'>About me</NavLink>
//           <NavLink href='cuasr'>Services</NavLink>
//           <NavLink href='cgsdur'>My Work</NavLink>
//           <NavLink href='cuasdr'>Contact me</NavLink>
//         </ul>
//         <div className='flex items-center'>
//           <button>
//             <DarkModeIcon fontSize='large' />
//           </button>
//           <a
//             href='contact'
//             className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4'
//           >
//             Contact
//             <ArrowOutwardIcon fontSize='large' />
//           </a>
//           <button className='flex md:hidden ml-4'>
//             <MenuIcon fontSize='large' onClick={openMenu} />
//           </button>
//         </div>

//         {/* Mobile menu */}
//         <ul
//           // eslint-disable-next-line no-undef
//           ref={sideMenuRef}
//           id='sidemenu'
//           className=' h-screen flex gap-6 md:hidden flex-col py-20 px-10 fixed top-0 bottom-0 -right-64 z-50 bg-rose-50 transition duration-500'
//         >
//           <div className=' w-full relative cursor-pointer'>
//             <CloseIcon
//               fontSize='large'
//               className='absolute bottom-3 right-6'
//               onClick={closeMenu}
//             />
//           </div>
//           <NavLink href='cur'>Home</NavLink>
//           <NavLink href='cusrsd'>About me</NavLink>
//           <NavLink href='cuwasr'>Services</NavLink>
//           <NavLink href='cgwsdur'>My Work</NavLink>
//           <NavLink href='cuwasdr'>Contact me</NavLink>
//         </ul>
//       </nav>
//       <div className='flex items-center justify-center flex-col gap-4 mb-5 mt-4'>
//         <img
//           src={Profile_image}
//           alt="profilehere"
//           className='w-32 h-32 rounded-full'></img>
//         {/* </img>a */}
//         <h4 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
//           Hi! I'm Bhupesh Upadhyay <WavingHandIcon />
//         </h4>
//         <h1 className='font-semibold text-3xl text-center max-md:font-medium sm:text-6xl lg:text-[66px]'>
//           frontend web developer based in Noida.
//         </h1>
//         <p className='max-w-2xl mx-auto text-center font-serif'>
//           I am a frontend developer from California, USA with 10 years of
//           experience in multiple companies like Microsoft, Tesla and Apple.
//         </p>
//         <div className='flex flex-col sm:flex-row gap-7 items-center mt-4'>
//           <a
//             href='#contact'
//             className='h-14 w-64 flex items-center justify-center gap-5  text-white bg-gradient-to-r from-[#b820e6] to-[#da7d20] rounded-full'
//           >
//             contact me <ArrowRightAltIcon />
//           </a>
//           <a
//             href={Profile_image}
//             download
//             className='border border-gray-500 flex rounded-full h-14 w-64 items-center justify-center gap-4'
//           >
//             my resume <CloudDownloadIcon />
//           </a>
//         </div>
//       </div>

//       <div className='w-full py-10 px-[12%]'>
//         <h4 className='text-center mb-2 text-lg'>Introduction</h4>
//         <h2 className='text-center text-5xl'>About me</h2>

//         <div className='flex  w-full  gap-20 my-20'>
//         <div className='max-w-max  mx-auto relative'>
//           <img className='w-64 sm:w-80 rounded-3xl max-w-none' src={Profile_image} alt='sdasdasd'></img>
//         </div>
//         <div className='flex-1'>
//           <p>I am an experienced Frontend Developer with over a decade of professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.</p>
//         </div>
//         </div>
//         </div>
//     </div>
//   );
// }

// export default App;
