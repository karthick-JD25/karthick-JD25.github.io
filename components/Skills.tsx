"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { SKILL_CATEGORIES } from "@/lib/skills";

// Helper to assign a mock percentage based on skill name for realistic visualization
const getSkillProgress = (name: string): number => {
  const lower = name.toLowerCase();
  if (lower.includes("sql") || lower.includes("excel") || lower.includes("power bi") || lower.includes("gathering")) return 95;
  if (lower.includes("brd") || lower.includes("tableau") || lower.includes("modeling") || lower.includes("prompt")) return 90;
  if (lower.includes("python") || lower.includes("agile") || lower.includes("jira") || lower.includes("git")) return 80;
  return 85;
};

// Generates a decorative SVG sparkline path
const generateSparkline = (index: number) => {
  const paths = [
    "M 0 10 Q 15 2, 30 12 T 60 4 T 90 14 T 120 2",
    "M 0 5 Q 20 15, 40 4 T 80 12 T 120 4",
    "M 0 12 Q 10 2, 25 10 T 50 2 T 75 14 T 120 6",
    "M 0 8 Q 15 14, 35 2 T 70 10 T 125 4"
  ];
  return paths[index % paths.length];
};

export function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeIdx];

  // Visual label overrides to match request perfectly
  const getCategoryTitle = (title: string) => {
    if (title.toLowerCase().includes("artificial") || title.toLowerCase().includes("ai")) {
      return "AI & PRODUCTIVITY";
    }
    return title.toUpperCase();
  };

  return (
    <section id="skills" className="relative py-28 bg-brand-bg px-6 overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-[20%] right-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="02 // TECHNICAL SKILLS"
          title="Analytical Toolkit & Expertise"
          subtitle="An interactive skills matrix balancing business strategy with technical tools."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Editorial Category Index Selector */}
          <div className="lg:col-span-5 border-t border-brand-border">
            {SKILL_CATEGORIES.map((category, idx) => {
              const isActive = activeIdx === idx;
              
              return (
                <button
                  key={category.title}
                  onClick={() => setActiveIdx(idx)}
                  className="w-full text-left py-6 border-b border-brand-border flex items-start gap-5 transition-all group cursor-pointer focus:outline-none"
                >
                  <span className={`font-mono text-xs mt-1 transition-colors ${isActive ? "text-brand-primary font-bold" : "text-brand-muted"}`}>
                    0{idx + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className={`text-lg sm:text-xl font-bold tracking-tight transition-colors ${isActive ? "text-brand-primary" : "text-brand-text group-hover:text-brand-primary"}`}>
                      {getCategoryTitle(category.title)}
                    </h4>
                    <p className="text-xs text-brand-muted mt-1 max-w-sm font-light">
                      {category.description}
                    </p>
                  </div>
                  <div className={`w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 transition-transform duration-300 ${isActive ? "scale-100" : "scale-0"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Expandable Analytics Module */}
          <div className="lg:col-span-7 bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 min-h-[460px] shadow-sm flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 flex-1"
              >
                {/* Active Category Header */}
                <div className="pb-4 border-b border-brand-border">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-brand-primary uppercase block mb-1">
                    Selected Segment
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-text tracking-tight uppercase">
                    {getCategoryTitle(activeCategory.title)}
                  </h3>
                </div>

                {/* Skills progress list */}
                <div className="space-y-6">
                  {activeCategory.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-brand-text text-sm font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Matrix visual note */}
            <div className="pt-4 border-t border-brand-border/60 mt-8 flex items-center justify-between text-[10px] font-mono text-brand-muted">
              <span>ACTIVE DATA MODEL</span>
              <span>VERIFIED EXPERTISE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Skills;
