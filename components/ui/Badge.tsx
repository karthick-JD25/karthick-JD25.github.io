import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
}

export function Badge({ className, children, variant = "outline", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 select-none whitespace-nowrap";
    
  const variants = {
    primary: "bg-brand-primary/10 text-brand-primary border border-brand-primary/25 shadow-[0_0_12px_rgba(59,130,246,0.1)]",
    secondary: "bg-brand-secondary/10 text-brand-secondary border border-brand-secondary/25 shadow-[0_0_12px_rgba(99,102,241,0.1)]",
    accent: "bg-brand-accent/10 text-brand-accent border border-brand-accent/25 shadow-[0_0_12px_rgba(6,182,212,0.1)]",
    outline: "bg-white/5 text-brand-muted border border-brand-border hover:border-brand-primary/30 hover:text-white",
  };

  return (
    <span className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </span>
  );
}

export default Badge;
