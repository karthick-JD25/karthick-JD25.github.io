import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/ui/CursorGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col w-full overflow-hidden bg-brand-bg select-none">
      {/* Desktop Spotlight Tracker */}
      <CursorGlow />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Core Viewports */}
      <main className="flex-1 w-full relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Services />
        <Contact />
      </main>

      {/* Footer System */}
      <Footer />
    </div>
  );
}

