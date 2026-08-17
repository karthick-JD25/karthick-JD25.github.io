import React from "react";

export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 bg-brand-bg select-none">
      {/* Noise pattern overlay for texture */}
      <div className="absolute inset-0 noise-bg" />

      {/* Grid line layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.35] pointer-events-none" />

      {/* Dotted overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.25] pointer-events-none" />

      {/* Aurora color mesh glow blobs */}
      <div className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-brand-primary/15 filter blur-[120px] animate-pulse-slow" />
      <div className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-brand-secondary/10 filter blur-[140px] animate-float-delayed" />
      <div className="absolute -bottom-[10%] left-[20%] w-[55vw] h-[55vw] max-w-[750px] rounded-full bg-brand-accent/12 filter blur-[130px] animate-pulse-slow" />
      
      {/* Grid scroll backdrop */}
      <div className="absolute inset-0 bg-grid-pattern animate-grid-scroll opacity-[0.06]" />

      {/* Gradient vignette mask to fade out grid lines on top/bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/60 via-transparent to-brand-bg" />
    </div>
  );
}

export default AuroraBackground;
