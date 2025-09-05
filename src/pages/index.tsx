import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // bg-background
  return (
    <div className="h-full w-full bg-background text-foreground ">
      <Navigation />
      <div className="w-full md:max-w-5xl md:mx-auto px-2 ">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;