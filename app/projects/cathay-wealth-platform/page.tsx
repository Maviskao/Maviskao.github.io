import type { Metadata } from "next";
import EmploymentCaseStudy, { type StudyImage, type StudySegment } from "../../components/EmploymentCaseStudy";

export const metadata: Metadata = {
  title: "Cathay Financial Holdings: 0→1 Client Wealth Platform | Mavis Kao",
  description: "From concept to launch — delivering an intuitive, high-impact platform.",
};

const gallery: StudyImage[] = [
  {
    src: "/images/portfolio/cathay-wealth/image-2.webp",
    alt: "Annotated fund detail screens and a single-purchase flow, including a performance chart, an order confirmation, and a success state.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-3.webp",
    alt: "Orange fund app screens for search, filters, fund lists, and ranking, arranged on an orange background.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-4.webp",
    alt: "Orange fund app flow from the home page and fund detail through a single purchase, confirmation, success, and a calendar for changing a systematic investment date.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-5.webp",
    alt: "Diagram linking Understand Investor Behavior, Map the Investor Journey, and Competitor Analysis to a Wealth management Platform.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-6.webp",
    alt: "Securities & Futures Institute page featuring a report titled Report on Fund Investor Behavior and Preferences, next to ESG report covers.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-7.webp",
    alt: "A scenario about starting wealth management, a whiteboard covered with sticky notes, and five questions about how people research and allocate investments.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-8.webp",
    alt: "Investor journey map with stages for research, fund screens and strategies, and portfolio review, including actions, touch points, thoughts, and opportunities.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-9.webp",
    alt: "Competitive analysis board comparing Fund Rich, Ant Fortune, and Lu Fax on platform architecture and fund details, with a research analysis flow underneath.",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-10.webp",
    alt: "Functional Importance Classification chart sorting fund features into Basic, Advanced, and Unique columns, marked with competitor logos.",
    width: 1600,
    height: 901,
  },
  {
    src: "/images/portfolio/cathay-wealth/image-11.webp",
    alt: "Main navigation mind map for a fund product, branching through Market, Fund Screener, Fund Info, Watch List, My, and Investment.",
    width: 1600,
    height: 900,
  },
];

const segments: StudySegment[] = [
  {
    type: "section",
    heading: "Overview",
    blocks: [
      {
        type: "p",
        text: "Unified the design system across 8 apps and 1 web platform; redesigned the account-opening flow as user accounts grew from 200,000 to 1 million in a year; cut development time by 40% with scrum; mentored junior designers. Projects: wealth management, SIP, customer-service chatbot, stock loan.",
      },
    ],
  },
  { type: "images", images: gallery },
];

export default function CathayWealthPlatformPage() {
  return (
    <EmploymentCaseStudy
      title="Cathay Financial Holdings: 0→1 Client Wealth Platform"
      description="From concept to launch — delivering an intuitive, high-impact platform."
      category="Fintech"
      period="2018–2021"
      role="UX Designer"
      note="Work completed as an in-house employee. Shown with respect to confidentiality."
      hero={{
        src: "/images/portfolio/cathay-wealth/image-1.webp",
        alt: "Two phones showing an orange fund app: a home page with fund spotlight and trending funds, and an overview of account balance, fund holdings, and reference return rate.",
        width: 1400,
        height: 1400,
      }}
      segments={segments}
    />
  );
}
