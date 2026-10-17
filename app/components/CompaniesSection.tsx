"use client";

import { motion } from "framer-motion";

export default function CompaniesSection() {
  const logos = [
    {
      name: "REBORN",
      node: (
        <span className="font-extrabold tracking-widest text-lg md:text-xl text-[#222]">
          REBORN
        </span>
      ),
    },
    {
      name: "ARIZON",
      node: (
        <div className="flex items-center gap-1.5 font-bold tracking-wider text-base md:text-lg text-[#222]">
          <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-600 inline-block"></span>
          <span>ARIZON</span>
        </div>
      ),
    },
    {
      name: "beBit",
      node: (
        <span className="font-extrabold text-xl md:text-2xl tracking-tight text-[#1a1a18]">
          be<span className="text-black">Bit</span>
        </span>
      ),
    },
    {
      name: "ACpay",
      node: (
        <div className="flex items-center gap-1.5 font-extrabold text-base md:text-lg text-[#0066cc]">
          <div className="w-5 h-5 rounded-sm bg-gradient-to-tr from-[#0066cc] to-[#38bdf8] flex items-center justify-center text-white text-[10px] font-black">
            AC
          </div>
          <span className="tracking-tight">ACpay</span>
        </div>
      ),
    },
    {
      name: "永豐銀行 SinoPac",
      node: (
        <div className="flex items-center gap-1.5 font-bold text-base md:text-lg text-[#333]">
          <div className="w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
          </div>
          <span className="font-medium tracking-tight">永豐金控</span>
        </div>
      ),
    },
    {
      name: "PETANGEL",
      node: (
        <span className="font-bold tracking-widest text-sm md:text-base text-[#444]">
          PETANGEL
        </span>
      ),
    },
  ];

  // Repeat for continuous marquee
  const marqueeItems = [...logos, ...logos, ...logos];

  return (
    <section className="py-16 md:py-24 bg-[#f5f5f4] overflow-hidden border-t border-black/[0.04]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-10 text-center">
        <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-[#8a8a86] uppercase">
          Partnered with companies to deliver user-centered design solutions
        </h3>
      </div>

      {/* Marquee with mask fade */}
      <div className="relative w-full overflow-hidden">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f5f5f4] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f5f5f4] to-transparent" />

        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex items-center gap-16 md:gap-24 w-max"
        >
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="shrink-0 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 flex items-center justify-center"
            >
              {item.node}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
