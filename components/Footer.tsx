"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_METADATA } from "@/lib/constants";

// Custom SVG Icons for brand assets
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-brand-bg border-t border-brand-border py-12 md:py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Left Column: Brief summary */}
        <div className="md:col-span-6 space-y-4">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group font-mono text-sm font-bold text-brand-text tracking-widest w-fit"
          >
            <div className="relative w-5 h-5 flex items-center justify-center bg-brand-primary rounded-md shadow-sm transition-transform duration-300 group-hover:rotate-12">
              <span className="text-[10px] text-brand-text">K</span>
            </div>
            <span>
              KARTHICK<span className="text-brand-primary group-hover:text-brand-hover transition-colors duration-300">.RAJ</span>
            </span>
          </a>
          
          <p className="text-xs uppercase tracking-wider text-brand-primary font-mono font-semibold">
            Business Analyst & Data Analyst
          </p>
          
          <p className="text-sm text-brand-muted leading-relaxed max-w-sm font-light">
            "Transforming business questions into meaningful insights through data, analytics, and visualization."
          </p>

          {/* Social Icons row */}
          <div className="flex gap-4 pt-2">
            <a
              href={SITE_METADATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300 group"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            </a>
            <a
              href={SITE_METADATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300 group"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            </a>
            <a
              href={`mailto:${SITE_METADATA.email}`}
              className="w-9 h-9 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-primary hover:border-brand-primary/50 transition-all duration-300 group"
              aria-label="Email Address"
            >
              <Mail className="w-4 h-4 group-hover:rotate-6 transition-transform" />
            </a>
          </div>
        </div>

        {/* Center Column: Quick Navigation Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-[0.25em] text-brand-text">
            Quick Navigation
          </h4>
          <nav className="flex flex-col gap-2.5 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "Projects", href: "#projects" },
              { label: "Certifications", href: "#certifications" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-brand-muted hover:text-brand-text hover:translate-x-1 transition-all duration-300 w-fit"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Column: Minimal Editorial Quote Section */}
        <div className="md:col-span-3 space-y-3">
          <div className="w-8 h-[2px] bg-brand-primary mb-2" />
          <blockquote className="text-sm md:text-base italic text-brand-text leading-snug font-sans font-light">
            "Good analysis doesn't just explain what happened.<br />
            It reveals what should happen next."
          </blockquote>
          <span className="text-xs font-mono font-semibold text-brand-primary block tracking-wider pt-1">
            — Karthick Raj
          </span>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto border-t border-brand-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted">
        <span>© 2026 Karthick Raj. All Rights Reserved.</span>
        <span>Premium Editorial Portfolio</span>
      </div>

      {/* Floating Back To Top Button */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-md border border-brand-primary hover:border-brand-primary/80 transition-all duration-500 hover:-translate-y-1 cursor-pointer focus:outline-none",
          showScrollTop
            ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
            : "translate-y-10 opacity-0 scale-50 pointer-events-none"
        )}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4.5 h-4.5" />
      </button>
    </footer>
  );
}

export default Footer;
