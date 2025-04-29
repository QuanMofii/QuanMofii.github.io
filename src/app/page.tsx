"use client";

import WelcomeSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectSection from "@/components/sections/ProjectSection";

export default function Home() {
  return (
    <main className="relative bg-white overflow-hidden text-black">
      <WelcomeSection />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
