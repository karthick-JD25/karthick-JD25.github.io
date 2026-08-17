"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import AnimatedCounter from "./ui/AnimatedCounter";
import { CORE_STATS } from "@/lib/constants";
import { PERSONAL_STRENGTHS } from "@/lib/skills";
import { fadeUpVariant } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="relative py-28 bg-brand-bg px-6 overflow-hidden">
      {/* Decorative off-white grid lines */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="01 // ABOUT ME"
          title="Bridging Data Complexity and Executive Decisions"
          subtitle="Understanding the operational challenge before writing the query."
        />

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Bold Personal Statement & Competencies */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              custom={1}
              className="space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-text leading-tight">
                I turn business challenges into data-driven insights, practical solutions, and measurable outcomes.
              </h3>
              
              <div className="border-l-2 border-brand-primary pl-6 italic py-1">
                <p className="text-brand-muted text-base sm:text-lg font-light leading-relaxed">
                  "Technology becomes valuable only when it helps people make better business decisions."
                </p>
              </div>
            </motion.div>

            {/* Core Competencies (Editorial layout instead of tags) */}
            <div className="pt-4 border-t border-brand-border">
              <span className="text-[10px] font-mono tracking-[0.2em] text-brand-primary uppercase block mb-4">
                Core Competencies
              </span>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {PERSONAL_STRENGTHS.map((strength) => (
                  <div key={strength} className="flex items-center gap-2 text-xs font-mono text-brand-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Professional Description & Visual Statistics Matrix */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              custom={2}
              className="space-y-6 text-brand-muted font-light leading-relaxed text-sm sm:text-base"
            >
              <p>
                I work at the intersection of business and data — understanding business requirements, analyzing information, and turning findings into clear, practical solutions.
              </p>
              <p>
                My experience includes business analysis, SQL, Excel, Power BI, and Tableau, with a focus on requirement gathering, process analysis, data visualization, and decision-support reporting. I enjoy simplifying complex problems and presenting insights in a way that stakeholders can actually use.
              </p>
            </motion.div>

            {/* Statistics Matrix (Editorial columns with thin borders) */}
            <div className="pt-8 border-t border-brand-border">
              <span className="text-[10px] font-mono tracking-[0.2em] text-brand-primary uppercase block mb-6">
                Metric Highlights
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {CORE_STATS.slice(0, 4).map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="pb-4 border-b border-brand-border/60 flex flex-col justify-between"
                  >
                    <div className="text-3xl md:text-4xl font-extrabold text-brand-text tracking-tight mb-1 flex items-baseline">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-mono uppercase tracking-wider text-brand-primary mb-1">
                        {stat.label}
                      </h5>
                      <p className="text-[11px] text-brand-muted leading-relaxed font-light">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
