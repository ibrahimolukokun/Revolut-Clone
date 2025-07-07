import React from 'react';
import HeroImg from '../assets/Hero_bg.png';

import Hero from '../Hero/Hero';
import SalaryCardsSection from '../Hero/SalaryCardsSection';

const Home = () => {
  return (
    <>
      {/* Hero Background with Content */}
      <section className=" top-0 w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className='absolute inset-0 sm:px-2'>
        {/* Background Image */}
        <img
          src={HeroImg}
          alt="Cloud Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        {/* Hero Content */}
        <Hero />
        </div>
      </section>

      {/* Salary Cards Section */}
      <div className="relative z-20 w-full">
        <SalaryCardsSection />
      </div>
    </>
  );
};

export default Home;
