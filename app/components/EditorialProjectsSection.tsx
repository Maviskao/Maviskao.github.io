"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "CoSphere - Travel Companion Matching Platform",
    detail: "UX / Product Design & AI Workflow",
    image: "/images/portfolio/cosphere-cover.avif",
  },
  {
    number: "02",
    title: "LINE Bank Accessibility",
    detail: "Inclusive finance / systems thinking",
    image: "/images/portfolio/line-bank-cover.png",
  },
  {
    number: "03",
    title: "Cathay Wealth Platform",
    detail: "0 to 1 product strategy",
    image: "/images/portfolio/cathay-cover.png",
  },
  {
    number: "04",
    title: "Alibaba Alixiaomi",
    detail: "AI service / conversational UX",
    image: "/images/portfolio/alibaba-cover.png",
  },
  {
    number: "05",
    title: "EF Parents App",
    detail: "Communication / learning experience",
    image: "/images/portfolio/ef-parents-cover.png",
  },
];

type EditorialProjectsSectionProps = {
  eyebrow?: string;
  heading?: string;
  description?: string;
  layout?: "list" | "grid";
};

export default function EditorialProjectsSection({
  eyebrow = "Selected work",
  heading = "Different kinds of clarity.",
  description = "A selection of products, systems, and experiences shaped with people in mind.",
  layout = "list",
}: EditorialProjectsSectionProps) {
  return (
    <section id="work" className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
      <div className="mx-auto max-w-[1300px]">
        <div className={layout === "grid" ? "space-y-12" : "grid gap-8 md:grid-cols-[minmax(280px,0.8fr)_1.2fr] md:gap-16"}>
          <div className={layout === "grid" ? "flex flex-col gap-6 border-b border-[#d8d8d2] pb-8 md:flex-row md:items-end md:justify-between" : ""}>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">{eyebrow}</p>
            <h2 className="mt-6 max-w-sm text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">
              {heading}
            </h2>
            <p className={layout === "grid" ? "max-w-md text-sm leading-6 text-[#656560] md:pb-1" : "mt-6 max-w-xs text-sm leading-6 text-[#656560]"}>{description}</p>
          </div>

          {layout === "grid" ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <motion.a
                  href="#contact-me"
                  key={project.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className={`group relative overflow-hidden rounded-[22px] bg-[#eee8d8] ${index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}`}
                >
                  <div className={`relative overflow-hidden ${index === 0 ? "aspect-[2.1/1]" : "aspect-[1.2/1]"}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes={index === 0 ? "(max-width: 640px) 100vw, 820px" : "(max-width: 640px) 100vw, 410px"}
                    />
                    <div className="absolute inset-0 bg-[#151515]/0 transition-colors duration-500 group-hover:bg-[#151515]/25" />
                    <span className="absolute left-5 top-5 rounded-full bg-[#fbfaf7]/90 px-3 py-1.5 text-[11px] font-bold text-[#151515] backdrop-blur-sm">
                      {project.number}
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-12 w-12 translate-y-2 items-center justify-center rounded-full bg-[#f5cb4e] text-xl text-[#151515] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                  <div className="bg-[#fbfaf7] px-5 py-5">
                    <h3 className="text-base font-bold text-[#151515] md:text-lg">{project.title}</h3>
                    <p className="mt-1 text-xs text-[#777771]">{project.detail}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          ) : (
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
                  <span className="w-8 shrink-0 text-xs text-[#777771]">{project.number}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-base font-bold text-[#151515] md:text-xl">{project.title}</span>
                    <span className="mt-1 block text-xs text-[#777771]">{project.detail}</span>
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
                  <span className="text-sm font-bold text-[#e86f59] transition-transform group-hover:translate-x-1">+</span>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
