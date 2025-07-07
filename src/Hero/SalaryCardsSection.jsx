import React from "react";

import card1 from "../assets/card1.png";
import card2 from "../assets/card.png";
import card3 from "../assets/card3.png";
import heroMuse from "../assets/HeroMuse.png";

const SalaryCardsSection = () => {
  return (
    <section
      className="w-full py-32 bg-white text-center relative"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          YOUR SALARY, REIMAGINED
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          Spend smartly, send quickly, sort your salary automatically, and
          watch your savings grow — all with Revolut.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full mb-12 hover:bg-gray-800 transition">
          Move your salary
        </button>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={card1} alt="Card 1" className="w-full h-auto" />
          </div>

          {/* Card 2 with Muse background and transition */}
          <div
            className="relative rounded-2xl overflow-hidden shadow-lg bg-[#54b0f6]"
          >
            <img
              src={heroMuse}
              alt="Muse Background"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />
            <img
              src={card2}
              alt="Card 2"
              className="relative z-10 w-full h-auto object-cover"
            />
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={card3} alt="Card 3" className="w-full h-auto" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default SalaryCardsSection
