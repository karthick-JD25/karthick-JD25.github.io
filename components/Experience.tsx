"use client";

import React from "react";
import SectionTitle from "./ui/SectionTitle";
import Timeline from "./ui/Timeline";
import { EXPERIENCE_HISTORY } from "@/lib/experience";

export function Experience() {
  return (
    <section id="experience" className="relative py-24 bg-brand-bg px-6 overflow-hidden">
      {/* Decorative radial blur mesh glow background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="03 // EXPERIENCE"
          title="Professional Journey & Internships"
          subtitle="Delivering measurable process improvements and data solutions across automotive and AI consultancies."
        />

        {/* Vertical Connected Timeline */}
        <div className="mt-8">
          <Timeline items={EXPERIENCE_HISTORY} />
        </div>

      </div>
    </section>
  );
}

export default Experience;
