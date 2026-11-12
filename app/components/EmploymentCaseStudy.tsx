import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import ContactSection from "./ContactSection";

export type StudyImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ListItem = {
  strong?: string;
  text: string;
};

type OrderedItem = {
  title: string;
  points: string[];
};

export type StudyBlock =
  | { type: "p"; text: string; strong?: boolean }
  | { type: "h3"; text: string }
  | { type: "ul"; items: ListItem[] }
  | { type: "ol"; items: OrderedItem[] };

export type StudySegment =
  | { type: "images"; images: StudyImage[] }
  | { type: "section"; heading: string; blocks: StudyBlock[] };

type EmploymentCaseStudyProps = {
  title: string;
  description: string;
  category: string;
  period: string;
  role: string;
  note: string;
  hero: StudyImage;
  segments: StudySegment[];
};

function Blocks({ blocks, tone = "light" }: { blocks: StudyBlock[]; tone?: "light" | "dark" }) {
  const text = tone === "dark" ? "text-[#c8c8c0]" : "text-[#656560]";
  const strong = tone === "dark" ? "text-[#fbfaf7]" : "text-[#151515]";
  const rule = tone === "dark" ? "border-[#3a3a3a]" : "border-[#d8d8d2]";
  return (
    <div className={`max-w-2xl text-base leading-8 ${text}`}>
      {blocks.map((block, index) => {
        if (block.type === "h3") {
          return (
            <h3
              key={index}
              className={`mt-10 text-2xl font-bold tracking-[-0.03em] first:mt-0 ${strong}`}
            >
              {block.text}
            </h3>
          );
        }

        if (block.type === "p") {
          return (
            <p
              key={index}
              className={`mt-6 first:mt-0 ${block.strong ? `font-bold ${strong}` : ""}`}
            >
              {block.text}
            </p>
          );
        }

        if (block.type === "ul") {
          return (
            <ul key={index} className="mt-6 space-y-4 first:mt-0">
              {block.items.map((item) => (
                <li key={item.strong ? `${item.strong}${item.text}` : item.text} className={`border-t ${rule} pt-4`}>
                  {item.strong ? (
                    <span className={`font-bold ${strong}`}>{item.strong}</span>
                  ) : null}
                  {item.strong ? " " : null}
                  {item.text}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <ol key={index} className="mt-6 space-y-8 first:mt-0">
            {block.items.map((item, itemIndex) => (
              <li key={item.title}>
                <p className={`font-bold ${strong}`}>
                  <span className="mr-3 text-[#e86f59]">{itemIndex + 1}.</span>
                  {item.title}
                </p>
                <ul className="mt-3 space-y-2 pl-7">
                  {item.points.map((point) => (
                    <li key={point} className="list-disc">
                      {point}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}

function StudyImageBlock({ image, priority = false }: { image: StudyImage; priority?: boolean }) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      priority={priority}
      className="h-auto w-full rounded-[26px] bg-[#fbfaf7]"
      sizes="(max-width: 768px) 100vw, 1060px"
    />
  );
}

export default function EmploymentCaseStudy({
  title,
  description,
  category,
  period,
  role,
  note,
  hero,
  segments,
}: EmploymentCaseStudyProps) {
  const sectionNumbers = segments.map((segment, index) =>
    segments.slice(0, index + 1).filter((item) => item.type === "section").length,
  );
  const last = segments[segments.length - 1];
  const endsWithReflection = last?.type === "section" && last.heading === "Reflection";

  return (
    <div className="min-h-screen bg-[#fbfaf7]">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-[linear-gradient(120deg,#e5c7ee_0%,#f2d89e_52%,#bce3e1_100%)] px-4 pb-20 pt-4 md:px-12 md:pb-28 md:pt-8">
          <div className="pointer-events-none absolute -left-32 top-8 h-80 w-80 rounded-full bg-[#f3a9c8]/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#f7e86c]/40 blur-3xl" />
          <div className="relative mx-auto max-w-[1300px] rounded-[30px] bg-[#fbfaf7] px-6 pb-10 pt-28 shadow-[0_24px_70px_rgba(32,27,24,0.12)] md:rounded-[42px] md:px-16 md:pb-14 md:pt-36">
            <div className="mx-auto max-w-[1060px]">
              <Link
                href="/projects"
                className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e86f59] hover:text-[#151515]"
              >
                Back to selected work
              </Link>
              <p className="mt-8 max-w-2xl text-sm font-medium leading-6 text-[#e86f59]">{note}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="inline-flex rounded-full bg-[#f5cb4e] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
                  {category}
                </span>
                <span className="inline-flex rounded-full bg-[#f2eee7] px-4 py-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#151515]">
                  {period}
                </span>
              </div>
              <div className="mt-8 grid items-end gap-12 md:grid-cols-[1fr_220px] md:gap-20">
                <div>
                  <h1 className="max-w-4xl text-[clamp(2.4rem,5.4vw,5rem)] font-bold leading-[0.96] tracking-[-0.055em] text-[#151515]">
                    {title}
                  </h1>
                  <p className="mt-7 max-w-2xl text-base leading-7 text-[#656560] md:text-lg">{description}</p>
                </div>
                <dl className="border-t border-[#d8d8d2] pt-5 text-xs text-[#656560] md:border-t-0 md:pt-0">
                  <dt className="uppercase tracking-[0.12em] text-[#777771]">Role</dt>
                  <dd className="mt-2 font-bold text-[#151515]">{role}</dd>
                </dl>
              </div>
              <div className="mt-16">
                <StudyImageBlock image={hero} priority />
              </div>
            </div>
          </div>
        </section>

        {segments.map((segment, index) => {
          if (segment.type === "images") {
            return (
              <section key={index} className="bg-[#fbfaf7] px-6 py-8 md:px-16 md:py-10">
                <div className="mx-auto flex max-w-[1060px] flex-col gap-5">
                  {segment.images.map((image) => (
                    <StudyImageBlock key={image.src} image={image} />
                  ))}
                </div>
              </section>
            );
          }

          const sectionNumber = sectionNumbers[index];
          const number = String(sectionNumber).padStart(2, "0");
          const isReflection = segment.heading === "Reflection";

          if (isReflection) {
            return (
              <section key={index} className="bg-[#151515] px-6 py-24 text-[#fbfaf7] md:px-16 md:py-32">
                <div className="mx-auto grid max-w-[1060px] gap-10 md:grid-cols-[280px_1fr] md:gap-16">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5cb4e]">
                    {number}
                  </p>
                  <div>
                    <h2 className="text-4xl font-bold leading-[0.98] tracking-[-0.045em] md:text-6xl">
                      {segment.heading}
                    </h2>
                    <div className="mt-8">
                      <Blocks blocks={segment.blocks} tone="dark" />
                    </div>
                    <Link
                      href="/projects"
                      className="mt-10 inline-flex rounded-full bg-[#f5cb4e] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#151515] transition-transform hover:-translate-y-0.5"
                    >
                      Back to work
                    </Link>
                  </div>
                </div>
              </section>
            );
          }

          const tone = sectionNumber % 2 === 0 ? "bg-[#f2eee7]" : "bg-[#fbfaf7]";

          return (
            <section key={index} className={`${tone} px-6 py-24 md:px-16 md:py-32`}>
              <div className="mx-auto grid max-w-[1060px] gap-12 md:grid-cols-[280px_1fr] md:gap-16">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86f59]">
                    {number}
                  </p>
                  <h2 className="mt-5 text-4xl font-bold leading-[0.98] tracking-[-0.045em] text-[#151515] md:text-5xl">
                    {segment.heading}
                  </h2>
                </div>
                <Blocks blocks={segment.blocks} />
              </div>
            </section>
          );
        })}

        {endsWithReflection ? null : (
          <section className="bg-[#fbfaf7] px-6 pb-24 md:px-16">
            <div className="mx-auto max-w-[1060px]">
              <Link
                href="/projects"
                className="inline-flex rounded-full bg-[#f5cb4e] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-[#151515] transition-transform hover:-translate-y-0.5"
              >
                Back to work
              </Link>
            </div>
          </section>
        )}

        <ContactSection />
      </main>
    </div>
  );
}
