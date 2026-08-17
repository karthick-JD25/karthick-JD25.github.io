"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  BarChart3, 
  BarChart, 
  FileSpreadsheet, 
  LineChart, 
  Cpu 
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { SERVICES_LIST } from "@/lib/services";
import { fadeUpVariant, staggerContainer } from "@/lib/animations";

// Helper to return the correct icon component based on name string
const getIcon = (iconName: string, active: boolean) => {
  const colorClass = active ? "text-brand-primary" : "text-brand-muted";
  switch (iconName) {
    case "Briefcase":
      return <Briefcase className={`w-5 h-5 ${colorClass}`} />;
    case "BarChart3":
      return <BarChart3 className={`w-5 h-5 ${colorClass}`} />;
    case "BarChart":
      return <BarChart className={`w-5 h-5 ${colorClass}`} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet className={`w-5 h-5 ${colorClass}`} />;
    case "LineChart":
      return <LineChart className={`w-5 h-5 ${colorClass}`} />;
    case "Cpu":
      return <Cpu className={`w-5 h-5 ${colorClass}`} />;
    default:
      return <Briefcase className={`w-5 h-5 ${colorClass}`} />;
  }
};

export function Services() {
  // Split services to apply asymmetric layouts
  const featuredServices = SERVICES_LIST.slice(0, 2); // BA & DA
  const regularServices = SERVICES_LIST.slice(2);      // Power BI, Excel, BI, AI

  return (
    <section id="services" className="relative py-28 bg-brand-bg px-6 overflow-hidden">
      {/* Background visual detail */}
      <div className="absolute top-[30%] left-0 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="06 // SERVICES"
          title="Analytical Offerings"
          subtitle="Turning business challenges into data-driven solutions with distinct operational deliverables."
        />

        {/* Asymmetrical Grid Wrapper */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8 mt-8"
        >
          
          {/* Top Row: 2 Large Featured Columns (BA & DA) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUpVariant}
                custom={index}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Service Header */}
                  <div className="flex items-center gap-4 pb-5 border-b border-brand-border mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-bg border border-brand-border flex items-center justify-center">
                      {getIcon(service.icon, true)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-text">
                        {service.title}
                      </h3>
                      <span className="text-[9px] font-mono text-brand-primary uppercase tracking-widest block mt-0.5">
                        Core Offering
                      </span>
                    </div>
                  </div>

                  {/* Pitch Subtitle */}
                  <p className="text-sm font-medium text-brand-primary/95 italic mb-6">
                    {service.subtitle}
                  </p>

                  {/* Bullet deliverable items */}
                  <ul className="space-y-4">
                    {service.bullets.map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="text-xs sm:text-sm text-brand-muted flex items-start gap-3 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                        <span className="font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-brand-border/60 mt-8 text-[10px] font-mono text-brand-muted">
                  OPERATIONAL STRATEGY DELIVERED
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row: 4 Compact Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {regularServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeUpVariant}
                custom={index + 2}
                className="bg-brand-card border border-brand-border rounded-xl p-5 flex flex-col justify-between hover:border-brand-primary/30 transition-all duration-300 shadow-sm"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-brand-border/60 mb-4">
                    <div className="w-9 h-9 rounded bg-brand-bg border border-brand-border flex items-center justify-center">
                      {getIcon(service.icon, false)}
                    </div>
                    <h3 className="text-sm font-bold text-brand-text tracking-tight line-clamp-1">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bullet deliverables */}
                  <ul className="space-y-2.5">
                    {service.bullets.slice(0, 3).map((bullet, idx) => (
                      <li 
                        key={idx} 
                        className="text-[11px] sm:text-xs text-brand-muted flex items-start gap-2 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-brand-secondary mt-1.5 shrink-0" />
                        <span className="font-light line-clamp-2">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-brand-border/40 mt-4 text-[9px] font-mono text-brand-muted">
                  SYSTEM VALUE
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;
