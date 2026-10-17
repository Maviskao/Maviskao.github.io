import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

export const metadata = {
  title: "Work — Mavis Kao",
  description: "A curated selection of projects where strategy meets empathy.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f4]">
      <Navbar />
      <main className="flex-1 pt-16">
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

