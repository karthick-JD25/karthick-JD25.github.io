"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/lib/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState({
    transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = -((y - centerY) / centerY) * 4; // Gentle tilt
    const rotateY = ((x - centerX) / centerX) * 4;

    el.style.setProperty("--mouse-x", `${x}px`);
    el.style.setProperty("--mouse-y", `${y}px`);

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={tiltStyle}
      className="glow-card bg-brand-card border border-brand-border rounded-2xl overflow-hidden transition-all duration-300 ease-out cursor-pointer h-full flex flex-col group shadow-sm hover:border-brand-primary/30"
    >
      {/* Decorative inner borders */}
      <div className="glow-card-border" />

      {/* Dashboard Preview Thumbnail */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-bg border-b border-brand-border">
        <Image
          src={project.imagePath}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        
        {/* Soft edge shading (editorial style) */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text/5 via-transparent to-transparent pointer-events-none" />

        {/* Category Pill Tag (Minimal editorial label) */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-brand-bg/95 border border-brand-border/80 backdrop-blur-sm text-[9px] uppercase font-mono px-2.5 py-0.5 rounded text-brand-primary font-bold tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Info Content Section */}
      <div className="p-6 flex flex-col flex-grow justify-between relative z-10 bg-transparent">
        <div>
          {/* Header & Link arrows */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-primary transition-colors duration-300 leading-snug">
              {project.title}
            </h3>
            <span className="text-brand-muted group-hover:text-brand-primary transition-colors duration-300 shrink-0">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          {/* Business Problem */}
          <div className="mb-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-primary font-mono block mb-1">
              Business Challenge
            </span>
            <p className="text-xs text-brand-muted leading-relaxed line-clamp-2 font-light">
              {project.businessProblem}
            </p>
          </div>

          {/* Core Features */}
          <div className="mb-4">
            <span className="text-[9px] uppercase tracking-[0.2em] text-brand-secondary font-mono block mb-1.5">
              Core Metrics & Reporting
            </span>
            <ul className="text-xs text-brand-muted space-y-1 pl-4 list-disc font-light">
              {project.features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="line-clamp-1">
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business Impact Footer */}
        <div className="mt-4 pt-4 border-t border-brand-border/60">
          <span className="text-[9px] uppercase tracking-[0.2em] text-brand-primary font-mono block mb-1">
            Business Impact
          </span>
          <p className="text-xs text-brand-muted leading-relaxed font-light italic line-clamp-2">
            "{project.businessImpact}"
          </p>
          
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <span 
                key={tech} 
                className="text-[9px] font-mono bg-brand-bg border border-brand-border text-brand-muted px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
