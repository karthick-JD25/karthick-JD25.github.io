"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  isMagnetic?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", isMagnetic = true, children, ...props }, ref) => {
    // Call the magnetic hook
    const magneticRef = useMagnetic(0.2);

    const baseStyles =
      "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 overflow-hidden cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2 focus:ring-offset-brand-bg";

    const variants = {
      primary:
        "bg-brand-primary text-white border border-brand-primary hover:bg-brand-hover hover:border-brand-hover shadow-sm hover:shadow-[0_4px_14px_rgba(196,106,60,0.15)]",
      secondary:
        "bg-brand-text text-brand-bg border border-brand-text hover:bg-brand-primary hover:border-brand-primary hover:text-white shadow-sm",
      ghost:
        "bg-transparent text-brand-muted hover:text-brand-text hover:bg-brand-border/15 border border-transparent hover:border-brand-border",
    };

    const buttonContent = (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );

    if (isMagnetic) {
      return (
        <div ref={magneticRef as React.RefObject<HTMLDivElement>} className="inline-block">
          {buttonContent}
        </div>
      );
    }

    return buttonContent;
  }
);

Button.displayName = "Button";
export default Button;
