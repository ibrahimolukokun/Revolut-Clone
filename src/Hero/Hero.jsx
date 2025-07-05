import React from 'react';
import personImg from '../assets/HeroMuse.png'; // transparent PNG of person
import cardImg from '../assets/card.png';     // optional: screenshot or component

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white">

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-20">
        <h1 className="text-4xl sm:text-8xl font-bold mb-4">
          CHANGE THE WAY YOU <br /> <span className="text-white">MONEY</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-lg mb-6 text-white/90">
          Home or away, local or global — move freely <br /> between countries and currencies. Sign up for <br /> free, in a tap.
        </p>
        <button className="bg-dark text-white px-6 py-3 rounded-full">
          Download the app
        </button>
      </div>

      {/* Person PNG Image */}
      <img
        src={personImg}
        alt="Person"
        className="absolute bottom-0 md:bottom-[-40px] z-[5] w-[280px] sm:w-[500px] md:w-[1600px]"
      />

      {/* Floating Card */}
      <img
        src={cardImg}
        alt="Card"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-[250px] sm:w-[300px] border-4 rounded-2xl border-gray-300"
      />
    </section>
  );
};

export default Hero;
