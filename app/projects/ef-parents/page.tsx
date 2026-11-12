import type { Metadata } from "next";
import EmploymentCaseStudy, { type StudySegment } from "../../components/EmploymentCaseStudy";

export const metadata: Metadata = {
  title: "EF Parents App: Unified Communication & Learning | Mavis Kao",
  description:
    "Connecting parents and Progress Advisors through messaging, learning, and activity tracking",
};

const segments: StudySegment[] = [
  {
    type: "section",
    heading: "Executive Summary",
    blocks: [
      {
        type: "p",
        text: "I led the UX/UI design for EF Parents App V2, upgrading the platform from a one-way notification tool to a dual-sided ecosystem supporting both parents and Progress Advisors (PAs).",
      },
      {
        type: "p",
        text: "By integrating in-app messaging, course progress tracking, media sharing, and activity scheduling, the app successfully centralized parent-PA communication, reduced reliance on third-party tools like WeChat, and strengthened client retention within EF’s ecosystem.",
      },
    ],
  },
  {
    type: "section",
    heading: "The Challenge",
    blocks: [
      {
        type: "p",
        text: "Before V2, the V1 app was heavily focused on providing information to parents but lacked effective two-way communication channels. This led parents and PAs to rely on external platforms (like WeChat) to discuss children’s learning progress.",
      },
      { type: "p", text: "The reliance on external platforms created several challenges:" },
      {
        type: "ul",
        items: [
          {
            strong: "Fragmented Data:",
            text: "Communication history and learning records were scattered, making it hard to track engagement or assess the quality of service.",
          },
          {
            strong: "Risk of Client Churn:",
            text: "Storing parent relationships on personal WeChat accounts increased the risk of losing clients if a PA left the company.",
          },
          {
            strong: "Inefficient Workflows:",
            text: "PAs had to juggle multiple systems (EF internal tools and WeChat) to communicate, grade homework, and manage schedules.",
          },
        ],
      },
      {
        type: "p",
        text: "The goal of V2 was to bring both parents and PAs into a unified platform, replacing external workarounds with a secure, centralized experience that supported children’s learning journey.",
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/ef-parents/image-2.webp",
        alt: "Chart titled User Need Comparison (Parents vs. Progress Advisors), with columns for functionality, pain points, and needs.",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    type: "section",
    heading: "Design Strategy & Requirements",
    blocks: [
      {
        type: "p",
        text: "Before planning the V2 upgrade, it was essential to clarify the needs of both user groups — parents and Progress Advisors (PAs). In V1, the app only served parents, while PAs relied on EF’s internal system and WeChat for communication. This created fragmented workflows and posed risks for client retention.",
      },
      {
        type: "p",
        text: "Based on stakeholder alignment, the V2 app was structured around five core modules — Messaging, Study, Scheduling, Media, and Profile — to address both parent and PA needs.",
      },
      {
        type: "ul",
        items: [
          {
            strong: "In-app messaging:",
            text: "Replace external communication channels like WeChat to centralize parent and PA interactions.",
          },
          {
            strong: "Homework and course progress:",
            text: "Enable children to access courses, complete homework, and take tests, with grading and progress visibility, giving parents a clear and real-time view of their children’s learning progress.",
          },
          {
            strong: "Activity bookings & news updates:",
            text: "Allow parents to self-register for school activities and receive the latest EF updates.",
          },
          {
            strong: "Multimedia management:",
            text: "Organize and share photos and videos from classes, making learning activities more transparent.",
          },
          {
            strong: "Profile & financial management:",
            text: "Provide parents with the ability to update personal information, receive notifications, and view transaction details.",
          },
          {
            strong: "PA workspace & tools:",
            text: "Provide Progress Advisors with a secure, centralized workspace to manage conversations, grade assignments, and coordinate activities.",
          },
        ],
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/ef-parents/image-3.webp",
        alt: "Diagram titled Core Modules & Key Features, with cards for Study, Scheduling, Profile, Media, and Message.",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    type: "section",
    heading: "Research Methods",
    blocks: [
      {
        type: "ul",
        items: [
          {
            strong: "Secondary Research:",
            text: "Reviewed EF’s previous research reports to build a foundational understanding of both parent and PA behaviors, and to identify existing pain points.",
          },
          {
            strong: "Stakeholder Discussions:",
            text: "Collaborated with PMs and internal stakeholders to clarify business goals, define priorities, and align app features with organizational objectives.",
          },
          {
            strong: "Wireframing & Prototyping:",
            text: "Designed modular interfaces for messaging, homework, multimedia, activity registration, and profile management.",
          },
          {
            strong: "User Interviews:",
            text: "Conducted in-person sessions with both parents and PAs simultaneously in China, Russia, and Jakarta to capture perspectives from both sides of the interaction.",
          },
          {
            strong: "Usability Testing:",
            text: "Iteratively tested wireframes and prototypes with parents and PAs together, ensuring communication and workflow needs were addressed for both roles.",
          },
          {
            strong: "Iterative Feedback Loop:",
            text: "Incorporated feedback from both parent and PA participants into UI refinements, ensuring the upgraded app served the needs of both roles.",
          },
        ],
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/ef-parents/image-4.webp",
        alt: "Four steps labeled Research, Define & Ideate, Test & Refine, and Deliver, describing work on the EF Parents app.",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    type: "section",
    heading: "Design Process Steps",
    blocks: [
      { type: "h3", text: "Wireframing" },
      {
        type: "p",
        text: "Developed low-fidelity wireframes to transform requirements into clear user flows and layouts. These wireframes acted as a communication bridge with stakeholders, ensuring alignment on core modules—messaging, study, scheduling, media, and profile—before investing in higher-fidelity design. This stage allowed us to quickly explore alternatives and validate priorities for both parents and PAs.",
      },
      { type: "h3", text: "Prototyping" },
      {
        type: "p",
        text: "Developed interactive prototypes in Axure for both the parent and PA sides of the application. The prototypes incorporated dynamic variables to simulate realistic interactions.",
      },
      {
        type: "p",
        text: "For example, booking events for two children updated counters in real time, similar to a shopping cart experience. These details allowed us to test not only navigation but also functional logic across different user scenarios. In addition, usability test scripts were written around the five core modules (messaging, study, scheduling, media, and profile), ensuring consistency and completeness during evaluation sessions.",
      },
      { type: "h3", text: "User Research" },
      {
        type: "p",
        text: "Conducted in-person user interviews and usability testing sessions with both parents and PAs in China, Russia, and Jakarta. By involving both roles simultaneously, we captured perspectives from each side of the interaction and observed how workflows connected across the two. Testing early prototypes provided actionable insights to refine communication flows, activity booking, and content organization.",
      },
      { type: "h3", text: "UI Design" },
      {
        type: "p",
        text: "Built on validated insights to design high-fidelity interfaces consistent with EF’s brand guidelines. The UI emphasized clarity, accessibility, and trustworthiness, while unifying the experience for both parents and PAs. Iterative design refinements focused on reducing friction in daily tasks, improving visibility into course progress, and creating a cohesive system that supported both communication and learning engagement.",
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/ef-parents/image-5.webp",
        alt: "Hand-drawn wireframe sketches beside task flows for a parent schedule homepage and booking an event.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/portfolio/ef-parents/image-6.webp",
        alt: "Media screens of a parent app, showing photo albums, a video player, and class photos of children.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/portfolio/ef-parents/image-7.webp",
        alt: "Scheduling screens listing events such as Sing & Dance, Course Orientation, and DIY Waffles, with attending states and a Book an event button.",
        width: 1600,
        height: 900,
      },
      {
        src: "/images/portfolio/ef-parents/image-8.webp",
        alt: "Study screens for High Flyers lessons, homework, unit reports, and attendance statistics.",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    type: "section",
    heading: "Outcome",
    blocks: [
      {
        type: "p",
        text: "The upgraded EF Parents platform integrated communication and learning features into one ecosystem, reducing reliance on external tools like WeChat and strengthening client retention. By introducing in-app messaging, improved homework and course progress tracking, multimedia organization, and activity registration, the app enhanced the overall user experience for both parents and Progress Advisors while supporting children’s learning journey more effectively.",
      },
      { type: "p", text: "Success was measured by:" },
      {
        type: "ul",
        items: [
          {
            strong: "In-app engagement:",
            text: "Growth in parent–PA interactions shifting from WeChat to the app.",
          },
          {
            strong: "Feature adoption:",
            text: "High uptake of new functionalities such as messaging, activity booking, and multimedia sharing.",
          },
          {
            strong: "Retention impact:",
            text: "Stronger client loyalty by keeping parent–PA communication within EF’s ecosystem.",
          },
          {
            strong: "Satisfaction:",
            text: "Positive feedback from usability testing and improved perception of EF’s digital experience.",
          },
        ],
      },
    ],
  },
];

export default function EfParentsPage() {
  return (
    <EmploymentCaseStudy
      title="EF Parents App: Unified Communication & Learning"
      description="Connecting parents and Progress Advisors through messaging, learning, and activity tracking"
      category="EdTech"
      period="2017–2018"
      role="Lead Designer"
      note="Work completed as an in-house employee. Shown with respect to confidentiality."
      hero={{
        src: "/images/portfolio/ef-parents/image-1.webp",
        alt: "EF Parents phone mockups: a High Flyers lesson screen with current and previous lessons, and a Media screen of class photos and videos.",
        width: 1400,
        height: 1400,
      }}
      segments={segments}
    />
  );
}
