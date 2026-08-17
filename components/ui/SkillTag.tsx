"use client";

import React from "react";
import { useMagnetic } from "@/hooks/useMagnetic";
import { cn } from "@/lib/utils";

interface SkillTagProps {
  name: string;
  className?: string;
}

export function SkillTag({ name, className }: SkillTagProps) {
  // Apply a light magnetic pull for interactive feedback
  const ref = useMagnetic(0.2);

  return (
    <div
      ref={ref as any}
      className={cn(
        "inline-flex items-center px-4 py-2.5 rounded-xl text-sm font-medium text-brand-text bg-white/5 border border-brand-border hover:border-brand-primary/45 hover:bg-brand-primary/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 cursor-pointer select-none relative group",
        className
      )}
    >
      {/* Background glow sweep */}
      <span className="relative z-10">{name}</span>
    </div>
  );
}

export default SkillTag;
