// app/PortfolioPage.tsx
"use client";
import HeroSection from "./_components/HeroSection";
import FeaturedProjects from "./_components/FeaturedProjects";
import SkillsSection from "./_components/SkillSection";
import ContactSection from "./_components/ContactSection";

const PortfolioPage = () => (
  <div>
    <HeroSection />
    <FeaturedProjects />
    <SkillsSection />
    <ContactSection />
  </div>
);

export default PortfolioPage;
