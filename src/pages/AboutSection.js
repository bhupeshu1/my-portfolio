import React, { useState, useRef, useEffect } from 'react';
import Footer from '../components/Footer';

const AboutSection = () => {
  const [counter, setCounter] = useState(0);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const slides = Array.from(
      slideContainerRef.current?.getElementsByTagName('img') || []
    );
    slides.forEach((img, index) => {
      img.style.left = `${index * 100}%`;
    });
  }, []);

  const slideImages = () => {
    const slides = Array.from(
      slideContainerRef.current?.getElementsByTagName('img') || []
    );
    slides.forEach((img) => {
      img.style.transform = `translateX(${-counter * 100}%)`;
    });
  };

  const goPrev = () => {
    setCounter((prev) => {
      const newCounter =
        prev > 0
          ? prev - 1
          : Array.from(slideContainerRef.current.getElementsByTagName('img'))
              .length - 1;
      return newCounter;
    });
  };

  const goNext = () => {
    setCounter((prev) => {
      const slides = Array.from(
        slideContainerRef.current.getElementsByTagName('img')
      );
      const newCounter = prev < slides.length - 1 ? prev + 1 : 0;
      return newCounter;
    });
  };

  useEffect(() => {
    slideImages();
  }, [counter]);

  return (
    <>
      <div className='w-full h-lvh mt-20 p-4 flex items-center justify-center flex-col'>
        <div
          ref={slideContainerRef}
          className='w-[60%] h-[40%] border border-gray-700 relative overflow-hidden'
        >
          <img
            className='w-[100%] h-[100%] absolute'
            src='https://picsum.photos/id/237/1000/500'
            alt='first'
          />
          <img
            className='w-[100%] h-[100%] absolute'
            src='https://picsum.photos/id/236/1000/500'
            alt='second'
          />
          <img
            className='w-[100%] h-[100%] absolute'
            src='https://picsum.photos/id/235/1000/500'
            alt='third'
          />
          <img
            className='w-[100%] h-[100%] absolute'
            src='https://picsum.photos/id/234/1000/500'
            alt='fourth'
          />
        </div>
        <div className='flex gap-5'>
          <button onClick={goPrev}>Prev</button>
          <button onClick={goNext}>Next</button>
        </div>

        <div>
          <div className='w-[200px] h-[200px] bg-teal-300 flex items-center justify-center'>
            <h1>Mobile Solution</h1>
            <p className='text-black hidden'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, dolor accusantium. </p>
          </div>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default AboutSection;
