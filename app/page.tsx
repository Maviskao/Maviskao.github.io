import Navbar from "./components/Navbar";
import EditorialHeroSection from "./components/EditorialHeroSection";
import EditorialProjectsSection from "./components/EditorialProjectsSection";
import CompaniesSection from "./components/CompaniesSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
      <Navbar />
      <main className="flex-1">
        <EditorialHeroSection />
        <EditorialProjectsSection />
        <CompaniesSection />
        <ContactSection />
      </main>
    </div>
  );
}
