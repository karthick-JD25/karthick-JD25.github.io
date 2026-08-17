"use client";

import { useEffect, useState } from "react";

export function useScrollProgress(): number {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentScroll = window.scrollY;
        setScrollProgress((currentScroll / totalScroll) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initialize
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollProgress;
}
