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
    <div className="flex flex-col min-h-screen bg-[#f5f5f4]">
      <Navbar />

      <main className="flex-1">
        {/* Top Hero Card (White rounded card matching Screenshot 1) */}
        <div className="bg-white rounded-b-[40px] md:rounded-b-[56px] pt-32 pb-20 px-6 md:px-12 border-b border-black/[0.04]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-[44px] font-extrabold text-[#1a1a18] tracking-tight leading-tight mb-12">
              Designing Starts with Observing the World
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 items-start">
              {/* Photo */}
              <div className="w-full max-w-[280px] aspect-[4/4.8] rounded-2xl overflow-hidden relative shadow-sm border border-gray-100 bg-[#f0f0ee]">
                <Image
                  src="/images/about/exp-1.png"
                  alt="Mavis Kao in nature"
                  fill
                  className="object-cover"
                  sizes="280px"
                  priority
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-5 text-sm md:text-base text-[#4a4a46] leading-relaxed">
                <p>
                  I&apos;m a UX and product designer passionate about turning
                  complex systems into simple, intuitive experiences. I&apos;ve
                  led projects at Alibaba, LINE Bank, and Cathay Financial
                  Holdings, focusing on user research, interface design, and
                  accessibility. I enjoy taking designs from strategy to
                  execution, ensuring they are both usable and loved by users.
                </p>
                <p className="text-[#737370]">
                  Outside of work, you&apos;ll find me exploring nature,
                  capturing moments through photography, and searching for the
                  best coffee in town. Let&apos;s connect and create something
                  impactful together.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="py-16 md:py-20 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a18] tracking-tight mb-8">
            Work Experience
          </h2>

          <div className="flex flex-col gap-8">
            {workExperience.map((exp, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden relative shrink-0 border border-gray-200/60 bg-white shadow-2xs p-1">
                  <Image
                    src={exp.icon}
                    alt={exp.company}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm md:text-base text-[#1a1a18]">
                      {exp.role} – <span className="font-semibold text-[#4a4a46]">{exp.company}</span>
                    </h3>
                    <span className="text-xs text-[#8a8a86] font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-[#737370] leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Licenses & Certifications */}
        <section className="py-12 px-6 md:px-12 max-w-4xl mx-auto border-t border-black/[0.05]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a18] tracking-tight mb-6">
            Licenses &amp; Certifications
          </h2>
          <ul className="space-y-2.5">
            {licenses.map((lic, index) => (
              <li
                key={index}
                className="text-xs md:text-sm text-[#4a4a46] flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a18]/40 inline-block"></span>
                <span>{lic}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Volunteering & Others */}
        <section className="py-16 md:py-20 px-6 md:px-12 max-w-4xl mx-auto border-t border-black/[0.05]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1a1a18] tracking-tight mb-8">
            Volunteering &amp; Others
          </h2>

          <div className="flex flex-col gap-8">
            {volunteering.map((vol, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl overflow-hidden relative shrink-0 border border-gray-200/60 bg-white shadow-2xs p-1">
                  <Image
                    src={vol.icon}
                    alt={vol.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm md:text-base text-[#1a1a18]">
                      {vol.title}
                    </h3>
                    <span className="text-xs text-[#8a8a86] font-medium">
                      {vol.period}
                    </span>
                  </div>
                  <p className="mt-2 text-xs md:text-sm text-[#737370] leading-relaxed">
                    {vol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}

