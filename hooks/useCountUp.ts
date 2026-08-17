"use client";

import { useEffect, useState } from "react";

/**
 * Counts up to a target number from 0 over a specified duration (in seconds).
 */
export function useCountUp(
  target: number,
  duration: number = 1.5,
  trigger: boolean = true
): number {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Eased output for smoother counting
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    window.requestAnimationFrame(step);
  }, [target, duration, trigger]);

  return count;
}
export default useCountUp;
