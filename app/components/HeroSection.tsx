"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const carouselCards = [
  { id: 1, src: "/images/hero-carousel/1-yellow.png", alt: "Mobile UI Design" },
  { id: 2, src: "/images/hero-carousel/2-travel.png", alt: "Travel Platform" },
  { id: 3, src: "/images/hero-carousel/3-linebank.png", alt: "LINE Bank Accessibility" },
  { id: 4, src: "/images/hero-carousel/4-cathay.png", alt: "Cathay Financial Holdings" },
  { id: 5, src: "/images/hero-carousel/5-alibaba.png", alt: "Alibaba Chatbot" },
];

export default function HeroSection() {
  return (
    <section className="bg-[#f5f5f4] pt-0">
      {/* White Hero Card */}
      <div className="bg-white rounded-b-[40px] md:rounded-b-[56px] shadow-sm pt-28 md:pt-36 pb-16 px-6 md:px-12 border-b border-black/[0.03]">
        <div className="max-w-6xl mx-auto">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-6 relative border border-gray-100 shadow-xs"
          >
            <Image
              src="/images/hero-avatar.png"
              alt="Mavis Kao"
              fill
              className="object-cover"
              sizes="96px"
              priority
            />
          </motion.div>

          {/* Heading with purple highlights */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-[#1a1a18] leading-[1.22] tracking-tight max-w-4xl"
          >
            Hi, I&apos;m Mavis Kao,
            <br />
            I design{" "}
            <span className="text-[#7e2eff]">
              crafting intuitive digital products
            </span>
            ,
            <br className="hidden sm:inline" />
            {" "}shaping{" "}
            <span className="text-[#7e2eff]">experience strategy</span> and solving
            complex problems
            <br />
            - Collaborating worldwide from{" "}
            <span className="text-[#7e2eff]">Canada</span>.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-[#737370] text-sm md:text-base max-w-2xl leading-relaxed font-normal"
          >
            Leveraging insights in user psychology and aesthetics, my approach
            enhances functionality with visual elegance, further enriching the
            sleek, user-friendly mobile apps I specialize in.
          </motion.p>

          {/* Badges / Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 mt-6 mb-12"
          >
            <a
              href="https://www.linkedin.com/in/maviskao"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full border border-gray-200/80 bg-white flex items-center justify-center text-[#1a1a18] hover:border-black transition-colors shadow-2xs"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="mailto:lattechi@gmail.com"
              aria-label="Email"
              className="w-8 h-8 rounded-full border border-gray-200/80 bg-white flex items-center justify-center text-[#1a1a18] hover:border-black transition-colors shadow-2xs"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
            </a>
          </motion.div>

          {/* Horizontal Showcase Carousel */}
          <div className="relative mt-8 -mx-6 md:-mx-12 px-6 md:px-12 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            <div className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar py-2">
              {carouselCards.map((card) => (
                <div
                  key={card.id}
                  className="shrink-0 w-[240px] sm:w-[280px] md:w-[320px] aspect-[4/3] rounded-2xl overflow-hidden border border-gray-100 shadow-xs relative bg-[#f7f7f7] hover:scale-[1.02] transition-transform duration-300"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover"
                    sizes="320px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
