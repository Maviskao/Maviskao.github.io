import type { Metadata } from "next";
import EmploymentCaseStudy, { type StudySegment } from "../../components/EmploymentCaseStudy";

export const metadata: Metadata = {
  title: "Alibaba's chatbot Alixiaomi - From Help Center to AI Chatbot | Mavis Kao",
  description:
    "Enhancing Taobao users’ self-service experience with intelligent, automated support.",
};

const segments: StudySegment[] = [
  {
    type: "section",
    heading: "Overview",
    blocks: [
      {
        type: "p",
        text: "Ran 120 usability and interview sessions for the AI customer-service robot (AliMe); helped cut customer service call time by 40% (5 to 3 min); +14% after-sales satisfaction in one quarter.",
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/alixiaomi/image-2.webp",
        alt: "Slide titled Issues, with three illustrations: Help Center Ineffectiveness, Insufficient Support Staff, and Unresolved Issues Despite Contact.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/portfolio/alixiaomi/image-3.webp",
        alt: "Customer Journey Map with a teal timeline of icons, a red emotion line, and rows of small symbols underneath.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/alixiaomi/image-4.webp",
        alt: "Board titled User Satisfaction & Usability Testing, showing charts, a card-sorting photo, and Alibaba Group classification tables.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/alixiaomi/image-5.webp",
        alt: "Slide titled User Flow & Service Optimization, with a process row above a phone top-up journey map.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/alixiaomi/image-6.webp",
        alt: "Slide titled AI Service Expansion Research, with an adoption curve, pie charts, bar charts, and comparison tables.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/alixiaomi/image-7.webp",
        alt: "Before and after of a help center: a list of service topics beside three phones showing an Ali Xiaomi chat, a voice button, and a Chinese New Year promotion card.",
        width: 1600,
        height: 901,
      },
    ],
  },
];

export default function AlibabaAlixiaomiPage() {
  return (
    <EmploymentCaseStudy
      title="Alibaba's chatbot Alixiaomi - From Help Center to AI Chatbot"
      description="Enhancing Taobao users’ self-service experience with intelligent, automated support."
      category="E-commerce"
      period="2014–2016"
      role="UX Researcher"
      note="Work completed as an in-house employee. Shown with respect to confidentiality."
      hero={{
        src: "/images/portfolio/alixiaomi/image-1.webp",
        alt: "Phone on a dark background titled AI Chatbot Ali Xiaomi, showing a chat with Ali Xiaomi Robot about flight tickets and a reply from an Ali Advisor.",
        width: 1400,
        height: 1400,
      }}
      segments={segments}
    />
  );
}
