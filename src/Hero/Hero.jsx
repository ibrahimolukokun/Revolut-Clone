import React from 'react';
import personImg from '../assets/HeroMuse.png'; // transparent PNG of person
import cardImg from '../assets/card.png';    // optional: screenshot or component

const Hero = () => {

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white">

      {/* Hero Content */}
      <div className="z-10 fixed top-44">
        <h1 className="text-4xl sm:text-8xl font-bold mb-4">
          CHANGE THE WAY YOU <br /> <span className="text-white">MONEY</span>
        </h1>
        <p className="text-lg sm:text-xl max-w-lg mb-6 text-white/90">
          Home or away, local or global — move freely <br /> between countries and currencies. Sign up for <br /> free, in a tap.
        </p>
        <button className="bg-dark text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          Download the app
        </button>
      </div>

      <div className='flex items-center justify-center'>
      {/* Person PNG Image */}
      <img
        src={personImg}
        alt="Person"
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        style={{
          transitionTimingFunction: 'cubic-bezier(0.35, 0, 0, 1)',
          transitionProperty: 'transform',
          transitionDuration: '0ms',
          transitionDelay: '100ms',
        }}
      />

      {/* Floating Card */}
      <img
        src={cardImg}
        alt="Card"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 origin-bottom border-3 rounded-2xl"
        style={{
          width: '44vh',
          height: '60vh',
          transitionTimingFunction: 'cubic-bezier(0.35, 0, 0, 1)',
          transitionProperty: 'transform',
          transitionDuration: '0ms',
          transitionDelay: '100ms',
          transform: ' scale(1)',
        }}
      />
      </div>
    </section>
  );
};

export default Hero;