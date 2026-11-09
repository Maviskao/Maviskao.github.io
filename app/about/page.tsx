import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Image from "next/image";

export const metadata = {
  title: "About me — Mavis Kao",
  description:
    "Designing Starts with Observing the World. UX and product designer passionate about turning complex systems into simple, intuitive experiences.",
};

const workExperience = [
  {
    role: "Independent Product Designer",
    company: "CoSphere",
    period: "Sep 2022 - Present",
    desc: "Assisted visitors in locating animals and shared insights about their behaviours, enhancing their zoo experience. During summer festivals, provided guidance and support so guests could fully enjoy music and movie events.",
    icon: "/images/about/exp-2.png",
  },
  {
    role: "Manager, UX Designer",
    company: "LINE Bank",
    period: "Nov 2021 - Sep 2022",
    desc: "Led cross-functional projects to create intuitive financial experiences, including deposit features and accessibility initiatives. Bridged design, engineering, and compliance to make digital banking more inclusive and user-friendly.",
    icon: "/images/about/exp-3.png",
  },
  {
    role: "Assistant Manager – UX Designer",
    company: "Cathay Financial Holdings",
    period: "May 2018 - Nov 2021",
    desc: "Redesigned the financial design system across 8 apps and 1 web platform, ensuring visual consistency and intuitive user flows. Led cross-functional teams to optimize the account opening process, growing users from 200K to 1M in a year. Conducted user research, usability tests, and mentoring for junior designers, turning insights into actionable product improvements.",
    icon: "/images/about/exp-4.png",
  },
  {
    role: "Lead Designer",
    company: "EF Education First",
    period: "Jul 2017 - May 2018",
    desc: "Designed educational products with a focus on cross-cultural user experiences. Applied user research insights to create intuitive learning platforms that engage global audiences.",
    icon: "/images/about/exp-5.png",
  },
  {
    role: "User Experience Designer",
    company: "Publicis.Sapient",
    period: "Dec 2016 - Nov 2017",
    desc: "Developed interactive learning tools, integrating user research findings to enhance usability and engagement across diverse learner groups.",
    icon: "/images/about/exp-6.png",
  },
  {
    role: "User Experience Researcher",
    company: "Alibaba Group Inc",
    period: "Sep 2014 - Sep 2016",
    desc: "Conducted over 120 usability tests and interviews to inform AI service and membership feature designs. Translated complex e-commerce workflows into seamless, user-centered experiences.",
    icon: "/images/about/vol-1.png",
  },
];

const licenses = [
  "2024 Figma to Lottie Course",
  "2024 AI Designer - Product Manager Accelerator",
  "2023 The UX book club Taiwan Exceptional Mentor",
  "2021 Proficiency Test For Trust Operation Personnel - certificate",
  "2021 Wealth Management - certificate",
  "2020 Financial Markets and Professional Ethics - certificate",
  "2018 Certified Securities Process Specialist - certificate",
];

const volunteering = [
  {
    title: "Ambassador – Assiniboine Park Conservancy",
    period: "Jun 2025 - Present",
    desc: "Assisted visitors in locating animals and shared insights about their behaviors, enhancing their zoo experience. During summer festivals, provided guidance and support so guests could fully enjoy music and movie events.",
    icon: "/images/about/vol-2.png",
  },
  {
    title: "Ambassador – Manitoba Museum",
    period: "Jun 2025 - Present",
    desc: "Guided visitors through engaging presentations on Arctic wildlife, human lifestyles, and food chains, helping them understand Manitoba’s geography and the broader Arctic and Sub-Arctic regions.",
    icon: "/images/about/vol-3.png",
  },
  {
    title: "Exceptional Mentor – UX Book Club",
    period: "Oct 2022 - Jul 2023",
    desc: "Provided constructive feedback and shared real-world UX experience after each participant’s presentation, helping junior designers refine their skills and gain confidence.",
    icon: "/images/about/vol-4.png",
  },
  {
    title: "Design Lecturer – China University of Technology",
    period: "Oct 2021 - Dec 2022",
    desc: "Mastering UX Design Fundamentals to build strong foundations in user-centered design. Driving the UX Process from Empathize and Define to Ideate, creating meaningful solutions. Crafting High-Fidelity Designs and Interactive Prototypes in Figma to bring ideas to life.",
    icon: "/images/about/vol-5.png",
  },
  {
    title: "Mentor – UX East Meets West Mentor",
    period: "May 2019 - Nov 2021",
    desc: "Guiding junior designers with actionable advice and thoughtful feedback, helping them grow their skills and confidently advance in their careers. Sharing cross-industry insights and hands-on expertise to inspire stronger, more innovative design strategies.",
    icon: "/images/about/vol-6.png",
  },
  {
    title: "What if We Could – Cathay New Gen 012: Wan-Chi Kao",
    period: "Oct 2019",
    desc: "Wan-Chi Kao, formerly a UX researcher in e-commerce and now a digital finance designer at Cathay Securities, shares her vision for making investing approachable and engaging. She explores creative ways to turn challenges into opportunities, including a gamified social investment platform where users can discuss stocks, place virtual trades, and track rankings.",
    icon: "/images/about/exp-4.png",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
      <Navbar />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e5c7ee_0%,#f2d89e_52%,#bce3e1_100%)] px-4 pb-20 pt-4 md:px-12 md:pb-28 md:pt-8">
          <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#f3a9c8]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#f7e86c]/40 blur-3xl" />

          <div className="relative mx-auto max-w-[1300px] rounded-[30px] bg-[#fbfaf7] px-6 pb-12 pt-28 shadow-[0_24px_70px_rgba(32,27,24,0.12)] md:rounded-[42px] md:px-16 md:pb-16 md:pt-36">
            <div className="mx-auto max-w-[1060px]">
              <div className="grid items-start gap-12 md:grid-cols-[1fr_330px] md:gap-20">
                <div>
                  <span className="inline-flex rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
                    About Mavis
                  </span>
                  <h1 className="mt-8 max-w-3xl text-[clamp(2.8rem,6vw,5.4rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[#151515]">
                    Designing starts with observing the world.
                  </h1>
                  <p className="mt-8 max-w-xl text-base leading-7 text-[#656560] md:text-lg">
                    I&apos;m a UX and product designer passionate about turning
                    complex systems into simple, intuitive experiences.
                  </p>
                  <p className="mt-5 max-w-xl text-sm leading-6 text-[#777771]">
                    I&apos;ve led projects at Alibaba, LINE Bank, and Cathay
                    Financial Holdings, taking products from strategy to
                    execution with research, interface design, and
                    accessibility at the center.
                  </p>
                </div>

                <div className="relative mx-auto w-full max-w-[330px]">
                  <div className="aspect-[4/5] overflow-hidden rounded-[34px] bg-[#e7d3b9]">
                    <Image
                      src="/images/about/exp-1.png"
                      alt="Mavis Kao in nature"
                      fill
                      className="object-cover"
                      sizes="330px"
                      priority
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#f07b61] text-center text-[11px] font-bold uppercase leading-4 text-white">
                    Design
                    <br />
                    with care
                  </div>
                </div>
              </div>

              <div className="mt-20 grid grid-cols-2 gap-6 border-t border-[#d8d8d2] pt-6 md:grid-cols-4 md:gap-8">
                <div>
                  <p className="text-3xl font-bold tracking-[-0.04em] text-[#151515]">120+</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[#777771]">Usability tests</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-[-0.04em] text-[#151515]">8</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[#777771]">Apps redesigned</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-[-0.04em] text-[#151515]">10+</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[#777771]">Years designing</p>
                </div>
                <div>
                  <p className="text-3xl font-bold tracking-[-0.04em] text-[#151515]">CA</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[#777771]">Working worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1060px]">
            <div className="grid gap-10 md:grid-cols-[280px_1fr] md:gap-16">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">Experience</p>
                <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-5xl">A practice built across industries.</h2>
              </div>
              <div className="border-t border-[#151515]">
                {workExperience.map((exp, index) => (
                  <article key={index} className="border-b border-[#d8d8d2] py-6">
                    <div className="flex items-start gap-4 md:gap-7">
                      <span className="w-7 shrink-0 pt-1 text-xs text-[#777771]">0{index + 1}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                          <h3 className="text-base font-bold text-[#151515] md:text-xl">{exp.role}</h3>
                          <span className="text-xs text-[#777771]">{exp.period}</span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-[#e86f59]">{exp.company}</p>
                        <p className="mt-3 max-w-2xl text-sm leading-6 text-[#656560]">{exp.desc}</p>
                      </div>
                      <div className="relative hidden h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[#d8d8d2] bg-white p-1 md:block">
                        <Image src={exp.icon} alt="" fill className="object-contain p-1" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#d8d8d2] bg-[#f2eee7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1060px] gap-16 md:grid-cols-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">Credentials</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-5xl">Always learning, always sharing.</h2>
              <ul className="mt-10 border-t border-[#d8d8d2]">
                {licenses.map((lic, index) => (
                  <li key={index} className="border-b border-[#d8d8d2] py-4 text-sm text-[#656560]">{lic}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">Outside the studio</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-5xl">Making room for community.</h2>
              <div className="mt-10 border-t border-[#d8d8d2]">
                {volunteering.map((vol, index) => (
                  <div key={index} className="border-b border-[#d8d8d2] py-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-sm font-bold text-[#151515]">{vol.title}</h3>
                      <span className="shrink-0 text-[11px] text-[#777771]">{vol.period}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-[#656560]">{vol.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}

