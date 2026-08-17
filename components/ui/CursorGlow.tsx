"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorGlow() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for lag-behind follow effect
  const springConfig = { stiffness: 120, damping: 25, mass: 0.6 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half size (250px) to center it on the cursor
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  // Prevent server-side rendering mismatch
  if (!mounted) return null;

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      className="hidden lg:block pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(196,106,60,0.04)_0%,rgba(167,107,79,0.01)_50%,transparent_70%)] z-30 filter blur-xl"
    />
  );
}

export default CursorGlow;
