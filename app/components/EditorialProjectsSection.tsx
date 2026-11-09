"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Travel Companion Matching Platform",
    detail: "AI workflow / product design",
    image: "/images/portfolio/travel-companion.png",
  },
  {
    number: "02",
    title: "LINE Bank Accessibility",
    detail: "Inclusive finance / systems thinking",
    image: "/images/portfolio/line-bank.png",
  },
  {
    number: "03",
    title: "Cathay Wealth Platform",
    detail: "0 to 1 product strategy",
    image: "/images/portfolio/cathay.png",
  },
  {
    number: "04",
    title: "Alibaba Alixiaomi",
    detail: "AI service / conversational UX",
    image: "/images/portfolio/alibaba.png",
  },
  {
    number: "05",
    title: "EF Parents App",
    detail: "Communication / learning experience",
    image: "/images/portfolio/ef-parents.png",
  },
];

export default function EditorialProjectsSection() {
  return (
    <section id="work" className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <div className="grid gap-8 md:grid-cols-[minmax(280px,0.8fr)_1.2fr] md:gap-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">
              Selected work
            </p>
            <h2 className="mt-6 max-w-sm text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">
              Different kinds of clarity.
            </h2>
            <p className="mt-6 max-w-xs text-sm leading-6 text-[#656560]">
              A selection of products, systems, and experiences shaped with
              people in mind.
            </p>
          </div>

          <div className="border-t border-[#151515]">
            {projects.map((project, index) => (
              <motion.a
                href="#contact-me"
                key={project.number}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative flex min-h-24 items-center gap-4 border-b border-[#d8d8d2] py-5 transition-colors hover:bg-[#f5cb4e]/25 md:gap-7"
              >
                <span className="w-8 shrink-0 text-xs text-[#777771]">
                  {project.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-bold text-[#151515] md:text-xl">
                    {project.title}
                  </span>
                  <span className="mt-1 block text-xs text-[#777771]">
                    {project.detail}
                  </span>
                </span>
                <span className="hidden h-16 w-24 shrink-0 overflow-hidden rounded-xl bg-[#eee8d8] md:block">
                  <Image
                    src={project.image}
                    alt=""
                    width={96}
                    height={64}
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-100"
                  />
                </span>
                <span className="text-sm font-bold text-[#e86f59] transition-transform group-hover:translate-x-1">
                  +
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
