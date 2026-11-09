import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";

const insights = [
  {
    number: "01",
    title: "The Trust Gap",
    text: "While 70% of users rely on Facebook groups, they report high anxiety regarding scams. Trust and authenticity are primary barriers. Users expressed a willingness to pay if safety can be guaranteed.",
  },
  {
    number: "02",
    title: "Companionship, Not Dating",
    text: "85% are open to a dedicated platform, but with a hard line: no dating app vibes. The UI/UX must strictly differentiate itself. The focus should be on the journey, not just the face.",
  },
  {
    number: "03",
    title: "Logistics Drive Compatibility",
    text: "55% of users ranked itinerary alignment, including destination, dates, and budget, as more critical than personality tests. Concrete travel plans are the core connector.",
  },
];

const featureLayers = [
  "Travel buddy search",
  "Trip creation",
  "Basic messaging",
];

export const metadata = {
  title: "CoSphere Travel - AI Travel Companion | Mavis Kao",
  description:
    "A multi-modal travel platform turning fragmented bookings into synchronized, real-time interactive itineraries with offline access.",
};

export default function CosphereTravelPage() {
  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e5c7ee_0%,#f2d89e_52%,#bce3e1_100%)] px-4 pb-20 pt-4 md:px-12 md:pb-28 md:pt-8">
          <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#f3a9c8]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#f7e86c]/40 blur-3xl" />
          <div className="relative mx-auto max-w-[1300px] rounded-[30px] bg-[#fbfaf7] px-6 pb-10 pt-28 shadow-[0_24px_70px_rgba(32,27,24,0.12)] md:rounded-[42px] md:px-16 md:pb-14 md:pt-36">
            <div className="mx-auto max-w-[1060px]">
              <Link href="/projects" className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e86f59] hover:text-[#151515]">
                Back to selected work
              </Link>
              <div className="mt-8 grid items-end gap-12 md:grid-cols-[1fr_300px] md:gap-20">
                <div>
                  <span className="inline-flex rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
                    Travel platform
                  </span>
                  <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,6vw,5.8rem)] font-bold leading-[0.95] tracking-[-0.055em] text-[#151515]">
                    CoSphere Travel - AI Travel Companion
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-[#656560] md:text-lg">
                    A multi-modal travel platform turning fragmented bookings
                    into synchronized, real-time interactive itineraries with
                    offline access.
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-6 border-t border-[#d8d8d2] pt-5 text-xs text-[#656560] md:block md:border-t-0 md:pt-0">
                  <div className="md:mb-5">
                    <dt className="uppercase tracking-[0.12em] text-[#777771]">Role</dt>
                    <dd className="mt-2 font-bold text-[#151515]">Product designer</dd>
                  </div>
                  <div>
                    <dt className="uppercase tracking-[0.12em] text-[#777771]">Focus</dt>
                    <dd className="mt-2 font-bold text-[#151515]">UX / AI workflow</dd>
                  </div>
                </dl>
              </div>
              <div className="group relative mt-16 aspect-[1.5/1] overflow-hidden rounded-[26px] bg-[#e9d477]">
                <Image
                  src="/images/portfolio/cosphere-travel-detail.png"
                  alt="CoSphere Travel product screens and travel companion experience"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 1060px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1060px] gap-12 md:grid-cols-[280px_1fr] md:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">01 / Context</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-5xl">Problem definition &amp; inspiration</h2>
            </div>
            <div className="max-w-2xl text-base leading-8 text-[#656560]">
              <p>
                Modern travelers often face challenges when looking for travel
                companions. Existing platforms are cluttered, lack trust
                mechanisms, and make it difficult to quickly find partners
                that match travel style, budget, and schedule.
              </p>
              <p className="mt-6">
                Our goal was to create a lightweight, interactive travel
                companion matching platform that leverages AI collaboration to
                rapidly prototype and launch.
              </p>
            </div>
            <div className="md:col-span-2">
              <Image
                src="/images/portfolio/cosphere/problem.webp"
                alt="CoSphere travel companion problem framing"
                width={1600}
                height={1276}
                className="w-full rounded-[26px]"
              />
            </div>
          </div>
        </section>

        <section className="border-y border-[#d8d8d2] bg-[#f2eee7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1060px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">02 / Process</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">AI-assisted workflow</h2>
              <p className="mt-6 text-base leading-7 text-[#656560] md:text-lg">
                In this project, I acted as both product designer and AI
                collaborator. I led the research, design, and feature
                decisions, while AI tools accelerated prototyping and coding.
              </p>
            </div>
            <Image
              src="/images/portfolio/cosphere/research.webp"
              alt="CoSphere user research summary"
              width={1280}
              height={800}
              className="mt-12 w-full rounded-[26px]"
            />
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              <div className="rounded-[22px] bg-[#fbfaf7] p-6"><span className="text-3xl font-bold text-[#e86f59]">01</span><h3 className="mt-12 font-bold text-[#151515]">Research</h3><p className="mt-2 text-sm leading-6 text-[#656560]">AI-assisted research, secondary research, and real interviews.</p></div>
              <div className="rounded-[22px] bg-[#fbfaf7] p-6"><span className="text-3xl font-bold text-[#e86f59]">02</span><h3 className="mt-12 font-bold text-[#151515]">Design</h3><p className="mt-2 text-sm leading-6 text-[#656560]">Feature decisions shaped around trust, companionship, and logistics.</p></div>
              <div className="rounded-[22px] bg-[#fbfaf7] p-6"><span className="text-3xl font-bold text-[#e86f59]">03</span><h3 className="mt-12 font-bold text-[#151515]">Prototype</h3><p className="mt-2 text-sm leading-6 text-[#656560]">AI tools accelerated prototyping and coding for a rapid launch.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1060px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">03 / Research</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">Decoding the solo traveler&apos;s needs</h2>
              <p className="mt-6 text-base leading-7 text-[#656560]">
                We conducted 10 AI-simulated interviews and 10 real user
                interviews with Taiwanese and Canadian participants, alongside
                competitive analysis of Bumble BFF, GAFFL, and Couchsurfing.
              </p>
            </div>
            <div className="mt-16 grid gap-5 md:grid-cols-3">
              {insights.map((insight) => (
                <article key={insight.number} className="border-t-2 border-[#151515] pt-5">
                  <span className="text-sm font-bold text-[#e86f59]">{insight.number}</span>
                  <h3 className="mt-12 text-2xl font-bold tracking-[-0.03em] text-[#151515]">{insight.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#656560]">{insight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-[#d8d8d2] bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1060px]">
            <div className="max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">03 / People</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">Key personas &amp; user journey</h2>
              <p className="mt-6 text-base leading-7 text-[#656560]">This platform is a two-sided marketplace, with both Hosts like Alex, the Efficient Planner, and Members like Bella, the Easy-going Adventurer.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <Image src="/images/portfolio/cosphere/persona1.webp" alt="CoSphere host persona" width={1024} height={1024} className="w-full rounded-[26px]" />
              <Image src="/images/portfolio/cosphere/persona2.webp" alt="CoSphere member persona" width={1024} height={1024} className="w-full rounded-[26px]" />
            </div>
            <Image src="/images/portfolio/cosphere/journey.webp" alt="CoSphere user journey" width={1600} height={1927} className="mt-5 max-h-[720px] w-full rounded-[26px] object-cover object-top" />
          </div>
        </section>

        <section className="border-y border-[#d8d8d2] bg-[#a9e3e7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1060px] gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">04 / Product</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">Features &amp; information architecture</h2>
            </div>
            <div>
              <p className="text-base leading-7 text-[#244343]">We categorized features into three layers based on User Value, Feasibility, and Experience Impact, prioritizing the core functions for the MVP.</p>
              <ul className="mt-10 border-t border-[#6fb5b8]">
                {featureLayers.map((feature, index) => <li key={feature} className="flex items-center justify-between border-b border-[#6fb5b8] py-5 text-sm font-bold text-[#151515]"><span>0{index + 1}</span><span>{feature}</span></li>)}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-14 max-w-[1060px]">
            <Image src="/images/portfolio/cosphere/features.webp" alt="CoSphere prioritized product features" width={1600} height={1378} className="w-full rounded-[26px]" />
          </div>
        </section>

        <section className="bg-[#f2eee7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1060px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">04 / Structure</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">Turning priorities into a clear information architecture.</h2>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <Image src="/images/portfolio/cosphere/ia1.webp" alt="CoSphere information architecture" width={1232} height={674} className="w-full rounded-[26px] bg-[#fbfaf7]" />
              <Image src="/images/portfolio/cosphere/ia2.webp" alt="CoSphere information architecture detail" width={1280} height={800} className="w-full rounded-[26px] bg-[#fbfaf7]" />
            </div>
          </div>
        </section>

        <section className="bg-[#fbfaf7] px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1060px] gap-12 md:grid-cols-[1fr_1fr] md:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">05 / Iteration</p>
              <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-6xl">Design &amp; iteration</h2>
            </div>
            <div className="text-base leading-8 text-[#656560]">
              <p>Based on our research insights, we conducted major design iterations.</p>
              <p className="mt-6">We introduced visual Personality Cards that helped 90% of users identify their travel style within 5 seconds.</p>
              <p className="mt-6">We also replaced abstract percentage metrics with a radar chart visualizing compatibility across Style, Budget, Time, and Pace.</p>
            </div>
            <div className="mt-14 grid gap-5 md:col-span-2 md:grid-cols-2">
              <Image src="/images/portfolio/cosphere/ui1.webp" alt="CoSphere interface iteration one" width={1280} height={800} className="w-full rounded-[26px]" />
              <Image src="/images/portfolio/cosphere/ui2.webp" alt="CoSphere interface iteration two" width={1280} height={800} className="w-full rounded-[26px]" />
            </div>
          </div>
        </section>

        <section className="bg-[#151515] px-6 py-24 text-[#fbfaf7] md:px-16 md:py-32">
          <div className="mx-auto grid max-w-[1060px] gap-10 md:grid-cols-[280px_1fr] md:gap-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5cb4e]">06 / Reflection</p>
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.045em] md:text-6xl">AI is an accelerator, not a silver bullet.</h2>
              <p className="mt-8 text-base leading-8 text-[#c8c8c0]">While it speeds up research and development, human-centered insights and empathy remain critical. This project reinforced that in modern product development, a designer&apos;s value goes beyond creating perfect visuals - it lies in balancing AI efficiency with the human touch.</p>
              <Link href="/projects" className="mt-10 inline-flex rounded-full bg-[#f5cb4e] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#151515] transition-transform hover:-translate-y-0.5">Back to work</Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
    </div>
  );
}
