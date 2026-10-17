import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import CompaniesSection from "./components/CompaniesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f4]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <CompaniesSection />
        <ContactSection />
      </main>
    </div>
  );
}
