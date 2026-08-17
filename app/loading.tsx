"use client";

import React from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#F7F3EC] z-[9999] flex flex-col items-center justify-center select-none">
      {/* Decorative ambient grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6">
        
        {/* Center Glowing Logo Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1], 
            rotate: [0, 5, -5, 0],
            boxShadow: [
              "0 0 10px 0px rgba(196,106,60,0.1)",
              "0 0 20px 4px rgba(196,106,60,0.2)",
              "0 0 10px 0px rgba(196,106,60,0.1)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-16 h-16 flex items-center justify-center bg-brand-primary rounded-2xl border border-brand-border shadow-sm"
        >
          <span className="text-2xl font-bold text-white font-mono">K</span>
        </motion.div>
        
        {/* Animated Loading Text */}
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-xs uppercase font-mono tracking-[0.3em] text-brand-text font-bold">
            KARTHICK RAJ
          </span>
          <span className="text-[10px] font-mono text-brand-muted flex items-center gap-2 mt-1">
            <Loader2 className="w-3.5 h-3.5 animate-spin text-brand-primary" />
            Analyzing Data Systems...
          </span>
        </div>
      </div>
    </div>
  );
}
