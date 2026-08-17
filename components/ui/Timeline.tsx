"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExperienceItem } from "@/lib/experience";
import { Briefcase, Calendar, MapPin, Clock } from "lucide-react";

interface TimelineProps {
  items: ExperienceItem[];
}

export function Timeline({ items }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 75%"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative max-w-4xl mx-auto pl-8 md:pl-16 py-8">
      {/* Editorial thin vertical divider track line */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-brand-border rounded-full" />
      
      {/* Animated scroll-growing line in Clay accent */}
      <motion.div
        style={{ scaleY, originY: 0 }}
        className="absolute left-0 top-0 bottom-0 w-[1px] bg-brand-primary rounded-full"
      />

      <div className="space-y-14">
        {items.map((item, index) => {
          const isHovered = hoveredIdx === index;
          
          return (
            <div 
              key={item.id} 
              className="relative group"
              onMouseEnter={() => setHoveredIdx(index)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Timeline dot node (Minimal terracotta dot) */}
              <div className="absolute -left-[8px] md:-left-[16px] top-2.5 translate-x-[-50%] z-20">
                <div className={`w-3.5 h-3.5 rounded-full border border-brand-primary bg-brand-bg flex items-center justify-center transition-all duration-300 ${isHovered ? "scale-125" : "scale-100"}`}>
                  <div className={`w-1.5 h-1.5 rounded-full bg-brand-primary transition-all duration-300 ${isHovered ? "scale-100" : "scale-75"}`} />
                </div>
              </div>

              {/* Timeline Editorial Body */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="pb-10 border-b border-brand-border/60 last:border-b-0"
              >
                {/* Header Grid */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className={`text-xl font-bold text-brand-text flex items-center gap-2.5 transition-colors duration-300 ${isHovered ? "text-brand-primary" : ""}`}>
                      <Briefcase className={`w-4 h-4 transition-colors ${isHovered ? "text-brand-primary" : "text-brand-muted"}`} />
                      {item.role}
                    </h3>
                    <p className="text-md font-semibold text-brand-secondary mt-1">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col items-start md:items-end gap-x-4 gap-y-1.5 font-mono text-[11px] text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-secondary" />
                      {item.duration}
                    </span>
                  </div>
                </div>

                {/* Location and Mode tags (Editorial line metadata) */}
                <div className="flex items-center gap-4 text-[10px] text-brand-muted mb-4 font-mono">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-primary" />
                    {item.location}
                  </span>
                  <span className="text-brand-border">|</span>
                  <span className="font-semibold text-brand-secondary">
                    {item.locationType}
                  </span>
                </div>

                {/* Short Summary Description */}
                <p className="text-sm sm:text-base text-brand-muted mb-6 leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Key Achievements/Responsibilities */}
                <div className="mb-6 space-y-3">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-text">
                    Key Deliverables & Analysis
                  </h4>
                  <ul className="space-y-3">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-brand-muted flex items-start gap-3 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-2 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-[10px] font-mono bg-brand-card border border-brand-border text-brand-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
