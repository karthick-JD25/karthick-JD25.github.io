import React from "react";
import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GlassPanel({ className, children, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn(
        "bg-brand-bg/50 backdrop-blur-md border border-brand-border rounded-2xl p-6 shadow-xl relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default GlassPanel;
