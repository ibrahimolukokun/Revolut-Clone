import React, { useEffect, useRef } from 'react';
import HeroImg from '../assets/Hero_bg.png';
import Hero from '../Hero/Hero';
import SalaryCardsSection from '../Hero/SalaryCardsSection';

const SCROLL_THRESHOLD = 10; 

const Home = () => {
  const heroRef = useRef(null);
  const salaryRef = useRef(null);
  const isSnapping = useRef(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    prevScrollY.current = window.pageYOffset;

    const handleScroll = () => {
      if (isSnapping.current) return;

      const scrollY = window.pageYOffset;
      const viewportH = window.innerHeight;
      const heroEl = heroRef.current;
      const salaryEl = salaryRef.current;

      const heroBottom = heroEl.offsetTop + heroEl.clientHeight;
      const salaryTop = salaryEl.offsetTop;

      const isScrollingUp = scrollY < prevScrollY.current;
      prevScrollY.current = scrollY;

      // Snap down (scroll ↓)
      if (!isScrollingUp && scrollY + viewportH >= heroBottom - SCROLL_THRESHOLD) {
        isSnapping.current = true;
        salaryEl.scrollIntoView({ behavior: 'smooth' });
      }
      // Snap up (scroll ↑)
      else if (isScrollingUp && scrollY <= salaryTop + SCROLL_THRESHOLD) {
        isSnapping.current = true;
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }

      if (isSnapping.current) {
        setTimeout(() => {
          isSnapping.current = false;
        }, 600);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="w-full h-screen top-0 flex items-center justify-center overflow-hidden"
      >
          <div className='absolute inset-0 sm:px-2'>
        <img
          src={HeroImg}
          alt="Cloud Background"
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
        />
        <Hero />
        </div>
      </section>

      <section
        ref={salaryRef}
        className="w-full h-screen relative z-10"
      >
        <SalaryCardsSection />
      </section>
    </>
  );
};

export default Home;
