import Navbar from "../components/Navbar";
import EditorialProjectsSection from "../components/EditorialProjectsSection";
import ContactSection from "../components/ContactSection";
import Image from "next/image";

export const metadata = {
  title: "Work — Mavis Kao",
  description: "A curated selection of projects where strategy meets empathy.",
};

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
      <Navbar />
      <main className="flex-1 pt-16">
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e5c7ee_0%,#f2d89e_52%,#bce3e1_100%)] px-4 pb-20 pt-8 md:px-12 md:pb-28 md:pt-12">
          <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#f3a9c8]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#f7e86c]/40 blur-3xl" />

          <div className="relative mx-auto max-w-[1300px] rounded-[30px] bg-[#fbfaf7] px-6 pb-10 pt-20 shadow-[0_24px_70px_rgba(32,27,24,0.12)] md:rounded-[42px] md:px-16 md:pb-14 md:pt-28">
            <div className="mx-auto grid max-w-[1060px] items-end gap-12 md:grid-cols-[1fr_390px] md:gap-20">
              <div>
                <span className="inline-flex rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
                  Selected work
                </span>
                <h1 className="mt-8 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[#151515]">
                  Different problems. A shared focus on clarity.
                </h1>
                <p className="mt-7 max-w-xl text-base leading-7 text-[#656560] md:text-lg">
                  A collection of products, systems, and experiences shaped
                  through research, strategy, and thoughtful interaction
                  design.
                </p>
              </div>

              <div className="group relative aspect-[1.25/1] overflow-hidden rounded-[26px] bg-[#e9d477]">
                <Image
                  src="/images/portfolio/line-bank.png"
                  alt="LINE Bank accessibility project"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  sizes="390px"
                />
                <div className="absolute bottom-5 left-5 rounded-full bg-[#fbfaf7]/95 px-5 py-3 backdrop-blur-sm">
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#151515]">
                    LINE Bank
                  </p>
                  <p className="mt-1 text-[11px] text-[#656560]">
                    Accessibility / inclusive finance
                  </p>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-16 flex max-w-[1060px] flex-wrap gap-x-8 gap-y-2 border-t border-[#d8d8d2] pt-5 text-[11px] uppercase tracking-[0.12em] text-[#777771]">
              <span>01 / Product strategy</span>
              <span>02 / UX design</span>
              <span>03 / Systems thinking</span>
            </div>
          </div>
        </section>

        <EditorialProjectsSection
          eyebrow="Project index"
          heading="The work behind the outcomes."
          description="Explore the decisions, systems, and interactions that turned complex problems into useful products."
          layout="grid"
        />
        <ContactSection />
      </main>
    </div>
  );
}

