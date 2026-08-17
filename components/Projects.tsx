"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import ProjectCard from "./ui/ProjectCard";
import { PROJECTS_LIST, ProjectItem } from "@/lib/projects";
import { scaleInVariant } from "@/lib/animations";

const FILTERS = [
  "All",
  "Excel",
  "Power BI",
  "Tableau",
  "SQL",
  "Business Analysis",
  "Data Analysis",
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Determine if a project matches the active filter
  const matchesFilter = (project: ProjectItem) => {
    if (activeFilter === "All") return true;

    // Direct Category match
    if (project.category === activeFilter) return true;

    // SQL tech match
    if (activeFilter === "SQL") {
      return (
        project.category === "SQL" ||
        project.technologies.some((tech) => tech.toLowerCase() === "sql")
      );
    }

    // Business Analysis logical groupings
    if (activeFilter === "Business Analysis") {
      return (
        project.id.includes("zomato-excel") ||
        project.id.includes("crowdfunding") ||
        project.id.includes("zomato-tableau") ||
        project.title.toLowerCase().includes("business")
      );
    }

    // Data Analysis logical groupings
    if (activeFilter === "Data Analysis") {
      return (
        project.id.includes("customer-insights") ||
        project.id.includes("financial-excel") ||
        project.id.includes("zomato-powerbi") ||
        project.title.toLowerCase().includes("performance") ||
        project.title.toLowerCase().includes("analysis")
      );
    }

    return false;
  };

  const filteredProjects = PROJECTS_LIST.filter(matchesFilter);

  return (
    <section id="projects" className="relative py-24 bg-brand-bg px-6 overflow-hidden">
      {/* Decorative radial glows */}
      <div className="absolute top-[30%] right-0 w-[450px] h-[450px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-[450px] h-[450px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="04 // FEATURED WORK"
          title="Featured Analytics Projects"
          subtitle="Every project begins with a business question and ends with actionable insights."
        />

        {/* Dynamic Filter Buttons */}
        <div className="flex flex-wrap gap-2.5 justify-start mb-12">
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 text-xs uppercase font-mono tracking-wider rounded-xl border transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/20"
                    : "bg-brand-bg/5 text-brand-muted border-brand-border/40 hover:border-brand-primary/40 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Grid with Framer Motion layout animations */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={scaleInVariant}
                className="h-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/[0.01] border border-brand-border/30 rounded-2xl p-8 backdrop-blur-md">
            <p className="text-brand-muted text-sm font-mono uppercase tracking-wider">
              No matching analytics dashboards found.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;
