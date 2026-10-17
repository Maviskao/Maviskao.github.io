"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Travel Companion Matching Platform",
    subtitle: "UX / Product Design & AI Workflow",
    image: "/images/portfolio/travel-companion.png",
    href: "#",
  },
  {
    id: 2,
    title: "Enabling Accessibility in LINE Bank",
    subtitle:
      "Drove LINE Bank's first Accessibility Certification by aligning compliance, design, and development.",
    image: "/images/portfolio/line-bank.png",
    href: "#",
  },
  {
    id: 3,
    title: "Cathay Financial Holdings: 0→1: Client Wealth Platform",
    subtitle:
      "From concept to launch — delivering an intuitive, high-impact platform.",
    image: "/images/portfolio/cathay.png",
    href: "#",
  },
  {
    id: 4,
    title:
      "Alibaba's chatbot Alixiaomi - From Help Center to AI Chatbot",
    subtitle:
      "Enhancing Taobao users' self-service experience with intelligent, automated support.",
    image: "/images/portfolio/alibaba.png",
    href: "#",
  },
  {
    id: 5,
    title: "EF Parents App: Unified Communication & Learning",
    subtitle:
      "Connecting parents and Progress Advisors through messaging, learning, and activity tracking",
    image: "/images/portfolio/ef-parents.png",
    href: "#",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 md:py-28 px-6 md:px-12 bg-[#f5f5f4]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1a1a18] tracking-tight leading-tight">
            Design Stories That Connect
          </h2>
          <p className="mt-4 text-[#737370] text-sm md:text-base leading-relaxed">
            A curated selection of projects where strategy meets empathy — each
            crafted to solve real problems, spark meaningful interactions, and
            leave a lasting impression.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mt-12 md:mt-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={cardVariants}
              className="group block"
            >
              <Link href={project.href} className="block">
                {/* Image Card */}
                <div className="w-full aspect-[16/10.5] rounded-2xl md:rounded-3xl overflow-hidden relative bg-[#ebebeb] shadow-xs group-hover:shadow-md transition-all duration-300">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>

                {/* Metadata below image */}
                <div className="mt-4 px-1">
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1a18] leading-snug group-hover:text-[#7e2eff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-xs md:text-sm text-[#737370] leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
