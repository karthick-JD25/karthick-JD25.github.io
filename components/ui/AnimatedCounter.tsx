"use client";

import React from "react";
import { useIntersection } from "@/hooks/useIntersection";
import { useCountUp } from "@/hooks/useCountUp";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  end,
  duration = 1.5,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const [containerRef, isIntersecting] = useIntersection({
    threshold: 0.1,
    triggerOnce: true,
  });

  const count = useCountUp(end, duration, isIntersecting);

  return (
    <span ref={containerRef as any} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
