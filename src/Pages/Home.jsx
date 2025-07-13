import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroImg from '../assets/Hero_bg.png';

import Hero from '../Hero/Hero';
import SalaryCardsSection from '../Hero/SalaryCardsSection';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);

  const sections = [
    { id: 0, component: <Hero /> },
    { id: 1, component: <SalaryCardsSection /> },
  ];

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating.current) return;

      if (e.deltaY > 0 && activeIndex < sections.length - 1) {
        setActiveIndex((prev) => prev + 1);
        isAnimating.current = true;
      } else if (e.deltaY < 0 && activeIndex > 0) {
        setActiveIndex((prev) => prev - 1);
        isAnimating.current = true;
      }

      setTimeout(() => {
        isAnimating.current = false;
      }, 1000); // lock scroll briefly
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  return (
    
    <div className="w-full h-screen overflow-hidden relative">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: activeIndex > 0 ? 100 : -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: activeIndex > 0 ? -100 : 100 }}
          transition={{
            duration: 0.8,
            ease: [0.35, 0, 0, 1],
          }}
          className="absolute top-0 left-0 w-full h-full"
        >
          {sections[activeIndex].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Home;
