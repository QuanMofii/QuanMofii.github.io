"use client";

import WelcomeSection from "@/components/sections/WelcomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden text-black">
      <WelcomeSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
