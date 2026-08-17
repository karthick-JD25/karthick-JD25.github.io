"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
}

export function Card({ className, children, glow = true, ...props }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glow) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "glass-card glow-card rounded-2xl overflow-hidden p-6 relative group transition-all duration-300",
        className
      )}
      {...props}
    >
      {/* Visual border glow overlay */}
      <div className="glow-card-border" />
      
      {/* Background radial spotlight glow */}
      {glow && (
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(196,106,60,0.03),transparent_50%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}

export default Card;
