import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section>
      <div className='grid grid-cols-1 lg:grid-cols-12'>
        <div className='lg:col-span-7 place-self-center text-center sm:text-left'>
          <h1 className='text-white mb-4 text-4xl lg:text-6xl font-extrabold'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'> Hello, I'm{" "}</div>
           
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Full-Stack developer with a university degree in English and broad
            experience in English-Spanish teaching and translation. Intensive
            training in Back-end, Front-end, and Database, using technologies
            such as NodeJS, React-Redux, VITE, and SQL. Vast knowledge of GIT,
            JAVA, Javascript, among others; and a true passion for CSS
            Frameworks. Goal-oriented, proactive, fast-learning, perseverant,
            and well-organized professional with a native-like level of English
            bestowed by the University of Cambridge. Extremely competent
            team-member dedicated to any job given to positively impact bottom
            line results.
          </p>
          <div className='flex flex-col lg:flex-row'>
            <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white '>
              Hire Me
            </button>
            <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border mt-3 lg:mt-0'>
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV</span>
            </button>
          </div>
        </div>

        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
            {/* <Image
              src='/public/Assets/hero-image.png'
              alt='myself'
              className='absolute transform -translate-x-1/2  -translate-y-1/2 '
              width={300}
              height={300}
            /> */} 
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
