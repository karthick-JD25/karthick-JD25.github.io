"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingCard({
  children,
  className,
  delay = 0,
  duration = 6,
}: FloatingCardProps) {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [-10, 10, -10],
        rotate: [-0.5, 0.5, -0.5]
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("glass-card rounded-2xl p-5 shadow-2xl", className)}
    >
      {children}
    </motion.div>
  );
}

export default FloatingCard;
