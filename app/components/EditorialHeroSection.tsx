"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function EditorialHeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e5c7ee_0%,#f2d89e_52%,#bce3e1_100%)] px-4 pb-20 pt-4 md:px-12 md:pb-28 md:pt-8">
      <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#f3a9c8]/35 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#f7e86c]/40 blur-3xl" />

      <div className="relative mx-auto max-w-[1300px] rounded-[30px] bg-[#fbfaf7] px-6 pb-8 pt-28 shadow-[0_24px_70px_rgba(32,27,24,0.12)] md:rounded-[42px] md:px-16 md:pb-14 md:pt-36">
        <div className="mx-auto max-w-[940px]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
              About my work
            </span>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.8rem,7vw,5.9rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[#151515]">
              I design digital products with care.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#656560] md:text-lg">
              UX and product design for complex systems, thoughtful teams, and
              the people who use them every day.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#151515] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5"
              >
                Explore work
              </a>
              <a
                href="#work"
                aria-label="Scroll to featured work"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#a9e3e7] text-xl text-[#151515] transition-transform hover:-translate-y-0.5"
              >
                ↓
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-20"
          >
            <div className="mb-5 flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-[#777771]">
              <span>Featured case study</span>
              <span>01 / 05</span>
            </div>
            <div className="group relative aspect-[2/1] overflow-hidden rounded-[26px] bg-[#e9d477]">
              <Image
                src="/images/portfolio/cosphere-cover.avif"
                alt="Travel Companion Matching Platform"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                sizes="(max-width: 768px) 100vw, 940px"
              />
              <div className="absolute left-5 top-5 rounded-full bg-[#fbfaf7]/95 px-5 py-3 backdrop-blur-sm md:left-7 md:top-7">
                  <p className="max-w-[240px] text-xs font-bold uppercase tracking-[0.1em] text-[#151515]">
                    CoSphere - Travel Companion Matching Platform
                </p>
                <p className="mt-1 text-[11px] text-[#656560]">
                  UX / Product Design &amp; AI Workflow
                </p>
              </div>
              <span className="absolute bottom-5 right-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#f07b61] text-2xl text-white transition-transform group-hover:rotate-12 md:bottom-7 md:right-7">
                ↗
              </span>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.12em] text-[#777771]">
          <span>Canada / Worldwide</span>
          <span>Product / UX / Strategy</span>
        </div>
      </div>
    </section>
  );
}
