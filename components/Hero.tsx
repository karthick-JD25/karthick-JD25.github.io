"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";
import { SITE_METADATA } from "@/lib/constants";


const TITLES = [
  "Business Analyst",
  "Data Analyst",
  "Power BI Developer",
  "BI Consultant",
  "Decision Intelligence",
  "Analytics Specialist",
];

// Typing Animation Helper
function TypingText() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === TITLES[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2200);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % TITLES.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
      setText(TITLES[index].substring(0, subIndex));
    }, reverse ? 25 : 60);

    return () => clearTimeout(timeout);
  }, [subIndex, reverse, index]);

  return (
    <span className="text-brand-primary font-mono tracking-tight min-h-[36px] block text-lg md:text-xl uppercase font-semibold">
      {text}
      <span className="text-brand-primary animate-pulse ml-0.5 font-light">|</span>
    </span>
  );
}

export function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const x = (clientX - window.innerWidth / 2) * 0.01;
    const y = (clientY - window.innerHeight / 2) * 0.01;
    setParallaxOffset({ x, y });
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-brand-bg px-6 select-none"
    >
      

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Presentation Narrative (Editorial Layout) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-brand-muted uppercase tracking-widest block mb-1">
              Hello, I'm
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-brand-text mb-1 leading-none uppercase">
              KARTHICK<br />
              <span className="text-brand-primary font-mono font-black">RAJ</span>
            </h1>
          </motion.div>

          {/* Typing Roles Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 h-8"
          >
            <TypingText />
          </motion.div>

          {/* Narrative Core Quote Statement */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="border-l-2 border-brand-primary pl-4 mb-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-brand-text/90 leading-relaxed font-sans font-light italic">
              "Every dataset hides a business story. I uncover the patterns, question the assumptions, and transform complexity into decisions leaders can trust."
            </p>
          </motion.div>

          {/* Description Block */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-brand-muted leading-relaxed mb-8 max-w-xl font-light"
          >
            Transforming business questions into actionable insights through data, analytics and visualization. I combine structured thinking and technical tools (SQL, Power BI, Advanced Excel) to deliver solutions that drive growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center mb-10"
          >
            <Button
              variant="primary"
              onClick={() => handleScrollToSection("projects")}
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <a href="/resume.pdf" download="Karthick_Raj_Resume.pdf" className="inline-block">
              <Button variant="secondary">
                Download Resume
                <Download className="w-4 h-4 ml-1" />
              </Button>
            </a>

            <Button
              variant="ghost"
              onClick={() => handleScrollToSection("contact")}
            >
              Contact Me
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

        </div>

        {/* Right Side: Portrait inside circular frame + Floating KPI badges (Editorial) */}
        <div 
          className="lg:col-span-5 relative flex items-center justify-center"
          style={{
            transform: `translate3d(${parallaxOffset.x}px, ${parallaxOffset.y}px, 0)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          
          {/* Circular Portrait Frame with soft animated golden glow */}
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full p-1.5 border border-brand-border/80 bg-brand-bg shadow-sm">
            {/* Golden animated glow wrapper */}
            <div className="absolute inset-0 rounded-full border border-brand-primary/10 bg-radial-gradient(circle,rgba(196,106,60,0.04)_0%,transparent_70%) animate-pulse" style={{ animationDuration: "4s" }} />
            
            {/* Profile Image Ring Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-brand-border/40">
              <Image
                src="/images/profile.jpg"
                alt="Karthick Raj Profile Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
                priority
                loading="eager"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
