import { Component as KineticNav } from "@/components/ui/sterling-gate-kinetic-navigation";
import { HeroSection } from "@/components/ui/3d-hero-section-boxes";
import AboutSection from "@/components/ui/about-section";
import SkillsSection from "@/components/ui/skills-section";

export default function Home() {
  return (
    <>
      <KineticNav />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </>
  );
}
