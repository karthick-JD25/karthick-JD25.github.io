"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUpVariant } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  number?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  number,
  align = "left",
  className,
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUpVariant}
      custom={0}
      className={cn(
        "mb-12 md:mb-16 max-w-3xl",
        isCenter ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {number && (
        <span className="font-mono text-xs tracking-[0.25em] text-brand-primary uppercase mb-3 block">
          {number}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-brand-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-brand-muted leading-relaxed font-sans font-light">
          {subtitle}
        </p>
      )}
      
      {/* Decorative colored visual underline bar for headers */}
      <div
        className={cn(
          "h-[2px] w-12 bg-gradient-to-r from-brand-primary to-brand-secondary mt-6 rounded-full",
          isCenter ? "mx-auto" : "mr-auto"
        )}
      />
    </motion.div>
  );
}

export default SectionTitle;
