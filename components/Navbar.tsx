"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollProgress } from "@/hooks/useScrollProgress";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      // Shrink header when scrolled
      setIsScrolled(window.scrollY > 20);

      // Section Scroll Spy
      const scrollPosition = window.scrollY + 200; // Offset
      for (const item of NAV_ITEMS) {
        const targetId = item.href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(targetId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
      />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent",
          isScrolled
            ? "bg-brand-bg/90 backdrop-blur-md py-4 shadow-sm border-brand-border"
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center gap-2 group font-mono text-sm font-bold text-brand-text tracking-widest"
          >
            <div className="relative w-5 h-5 flex items-center justify-center bg-brand-primary rounded-md shadow-sm transition-transform duration-300 group-hover:rotate-12">
              <span className="text-[10px] text-brand-text">K</span>
            </div>
            <span>
              KARTHICK<span className="text-brand-primary group-hover:text-brand-hover transition-colors duration-300">.RAJ</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const targetId = item.href.substring(1);
              const isActive = activeSection === targetId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider transition-all duration-300 relative py-1.5",
                    isActive ? "text-brand-primary" : "text-brand-muted hover:text-brand-text"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-brand-muted hover:text-brand-text p-2 focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[73px] bottom-0 z-40 bg-brand-bg/95 backdrop-blur-lg lg:hidden flex flex-col items-center justify-center p-6 border-b border-brand-border"
          >
            <nav className="flex flex-col gap-6 text-center">
              {NAV_ITEMS.map((item, index) => {
                const targetId = item.href.substring(1);
                const isActive = activeSection === targetId;

                return (
                  <motion.a
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "text-sm font-semibold uppercase tracking-widest py-2 transition-colors",
                      isActive
                        ? "text-brand-primary font-bold"
                        : "text-brand-muted hover:text-brand-text"
                    )}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
