import type { Metadata } from "next";
import EmploymentCaseStudy, { type StudySegment } from "../../components/EmploymentCaseStudy";

export const metadata: Metadata = {
  title: "Enabling Accessibility in LINE Bank | Mavis Kao",
  description:
    "Drove LINE Bank’s first Accessibility Certification by aligning compliance, design, and development.",
};

const note = "Work completed as an in-house employee. Shown with respect to confidentiality.";

const segments: StudySegment[] = [
  {
    type: "section",
    heading: "Project Overview",
    blocks: [
      {
        type: "p",
        text: "In 2022, Taiwan’s National Communications Commission (NCC) mandated all digital financial services to comply with Accessible Finance Regulations, requiring institutions to pass accessibility testing and obtain certification before year-end.",
      },
      {
        type: "p",
        text: "Prior to this initiative, the LINE Bank mobile app had not undergone accessibility certification. To ensure compliance and maintain brand trust, I led a cross-functional project to plan, coordinate, and execute the entire accessibility testing process, resulting in LINE Bank obtaining its official accessibility certification.",
      },
    ],
  },
  {
    type: "section",
    heading: "My Role",
    blocks: [
      {
        type: "p",
        strong: true,
        text: "Planner (Cross-functional Coordinator & UX-Engineering Bridge)",
      },
      {
        type: "ul",
        items: [
          {
            strong: "Regulatory Translation:",
            text: "Interpreted Taiwan’s Accessible Finance regulations & WCAG 2.1 AA standards, turning them into actionable requirements.",
          },
          {
            strong: "Vendor Management:",
            text: "Contacted vendors for quotation, arranged testing schedules, and coordinated on-site testing.",
          },
          {
            strong: "Cross-country Collaboration:",
            text: "Worked with Korean UI/UX designers to align regulatory needs with LINE’s design system.",
          },
          {
            strong: "Engineering Alignment:",
            text: "Converted vendor test reports into actionable engineering task lists, tracked progress, and ensured timely fixes.",
          },
          {
            strong: "Process Design:",
            text: "Created test accounts and scenarios (Face ID, Touch ID, password entry, transfer types) to validate accessibility across multiple financial flows.",
          },
        ],
      },
    ],
  },
  {
    type: "section",
    heading: "Collaboration Network",
    blocks: [
      {
        type: "p",
        text: "This was my first time taking on a Planner role, a bridge position between regulations, vendors, designers, and engineers. To clarify my responsibilities and how I collaborated across functions, I’ve broken down the relationships with each stakeholder as follows:",
      },
      {
        type: "ol",
        items: [
          {
            title: "Regulatory Research (NCC)",
            points: [
              "Researched the National Communications Commission (NCC) requirements for the Accessible Finance Certification.",
              "Studied the process, eligibility, and accessibility compliance standards necessary to obtain the official certificate.",
            ],
          },
          {
            title: "Vendor Management (Accessibility Testing Vendor – PAVI)",
            points: [
              "Collected and compared 3 vendor quotations.",
              "Discussed options with internal leadership and selected PAVI (Parents’ Association for the Visually Impaired, Taipei) as the testing partner.",
              "Negotiated pricing, defined the testing schedule, and confirmed the reporting process.",
            ],
          },
          {
            title: "Collaboration with Korean UI/UX Designers",
            points: [
              "Worked closely with Korean designers to ensure testing flows aligned with both LINE’s design system and NCC’s accessibility regulations.",
              "Validated that design workflows met UX best practices and accessibility standards.",
            ],
          },
          {
            title: "Collaboration with Taiwan Engineering Teams",
            points: [
              "Translated design flows into mobile iOS and Android versions with Taiwanese engineers.",
              "Defined and created test accounts covering different scenarios (Face ID, Touch ID, password login, designated and non-designated transfers).",
            ],
          },
          {
            title: "Vendor Testing & Iterations",
            points: [
              "Arranged vendor on-site testing sessions.",
              "Converted vendor reports into actionable engineering task lists, tracked progress, and ensured fixes were delivered on time.",
              "Coordinated with the vendor for re-testing after modifications.",
            ],
          },
          {
            title: "Final Certification",
            points: [
              "Validated successful fixes across both iOS and Android.",
              "Secured the official Accessible Finance Certification for both app versions.",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/line-bank/image-2.webp",
        alt: "Project Timeline slide with nine steps, from regulatory research to an official accessibility certificate. The first testing round is marked failed and the second testing round is marked passed.",
        width: 1600,
        height: 901,
      },
    ],
  },
  {
    type: "section",
    heading: "Challenges",
    blocks: [
      {
        type: "ul",
        items: [
          { text: "First accessibility project within the company, with no internal precedent." },
          { text: "Required to meet both Taiwan Accessible Finance regulations and WCAG 2.1 AA." },
          { text: "Cross-country coordination: Taiwan (PM, engineers, customer service) vs Korea (UI/UX designers)." },
          { text: "Tight deadline: Must be completed within 3 months." },
        ],
      },
    ],
  },
  {
    type: "images",
    images: [
      {
        src: "/images/portfolio/line-bank/image-3.webp",
        alt: "Slide titled Designing Accessible Finance Flows for LINE Bank, showing a grid of twelve flow diagrams.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/line-bank/image-4.webp",
        alt: "Slide titled Accessibility Test Report (Chinese Version), with two side-by-side LINE Bank accessible-finance reports for an Android phone and an iPhone.",
        width: 1600,
        height: 901,
      },
      {
        src: "/images/portfolio/line-bank/image-5.webp",
        alt: "Slide titled Snapshots from the Accessible Finance Process: two people testing phones at a table, and two phone screens showing the LINE Bank accessible finance menu and Taiwan dollar deposit rates.",
        width: 1600,
        height: 901,
      },
    ],
  },
  {
    type: "section",
    heading: "Outcome",
    blocks: [
      {
        type: "ul",
        items: [
          { text: "Obtained official Accessibility Certification from vendor" },
          {
            text: "Key banking features (login/logout, transfers, Account History, TWD Interest rates, biometrics, accessible mode switch) fully accessible",
          },
          { text: "Established a repeatable accessibility project workflow for the organization" },
          { text: "Strengthened regulatory compliance and brand trust" },
        ],
      },
      {
        type: "p",
        text: "Users who rely on screen readers can now smoothly perform transfers without missing key information.",
      },
    ],
  },
  {
    type: "section",
    heading: "Reflection",
    blocks: [
      {
        type: "ul",
        items: [
          {
            text: "My role was not only progress tracking but also translating regulatory and vendor requirements into executable design and engineering tasks.",
          },
          { text: "Learned to balance Korean design system consistency with Taiwan’s legal compliance." },
          {
            text: "Accessibility testing requires iteration and translation between disciplines; developing this skill became crucial.",
          },
        ],
      },
    ],
  },
];

export default function LineBankAccessibilityPage() {
  return (
    <EmploymentCaseStudy
      title="Enabling Accessibility in LINE Bank"
      description="Drove LINE Bank’s first Accessibility Certification by aligning compliance, design, and development."
      category="Fintech"
      period="3 months"
      role="Planner"
      note={note}
      hero={{
        src: "/images/portfolio/line-bank/image-1.webp",
        alt: "Collaboration Network diagram with Planner (ME) in the center, connected to Vendor, NCC, Korea UI/UX Designer, and Taiwan Engineers.",
        width: 1600,
        height: 901,
      }}
      segments={segments}
    />
  );
}
