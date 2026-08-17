"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Send, 
  CheckCircle, 
  Loader2, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";
import Button from "./ui/Button";
import { SITE_METADATA } from "@/lib/constants";
import { fadeUpVariant } from "@/lib/animations";

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

export function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = (fieldName: string) => {
    if (focusedField === fieldName) setFocusedField(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) newErrors.name = "Name is required.";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formState.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formState.message.trim()) newErrors.message = "Message is required.";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1800));
      setSuccess(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-brand-bg px-6 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Large Editorial Headline */}
        <div className="mb-12">
          <span className="text-[10px] font-mono tracking-[0.25em] text-brand-primary uppercase block mb-3">
            07 // GET IN TOUCH
          </span>
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-brand-text leading-none uppercase">
            LET'S WORK<br />
            <span className="text-gradient-blue font-mono font-black">TOGETHER</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          
          {/* Left Column: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 sm:p-8 shadow-sm">
              <AnimatePresence mode="wait">
                {!success ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-lg font-bold text-brand-text mb-2 tracking-tight">Send a Proposal</h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus("name")}
                          onBlur={() => handleBlur("name")}
                          className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 text-sm text-brand-text placeholder-transparent focus:outline-none transition-all duration-300 ${
                            errors.name 
                              ? "border-brand-danger focus:border-brand-danger" 
                              : "border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10"
                          }`}
                          placeholder="Name"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 text-xs font-mono tracking-wider transition-all duration-300 pointer-events-none ${
                            focusedField === "name" || formState.name
                              ? "-top-2.5 bg-brand-card px-2 text-brand-primary"
                              : "top-4 text-brand-muted"
                          }`}
                        >
                          Name
                        </label>
                        {errors.name && (
                          <span className="text-[10px] text-brand-danger font-mono mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleInputChange}
                          onFocus={() => handleFocus("email")}
                          onBlur={() => handleBlur("email")}
                          className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 text-sm text-brand-text placeholder-transparent focus:outline-none transition-all duration-300 ${
                            errors.email 
                              ? "border-brand-danger focus:border-brand-danger" 
                              : "border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10"
                          }`}
                          placeholder="Email"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 text-xs font-mono tracking-wider transition-all duration-300 pointer-events-none ${
                            focusedField === "email" || formState.email
                              ? "-top-2.5 bg-brand-card px-2 text-brand-primary"
                              : "top-4 text-brand-muted"
                          }`}
                        >
                          Email
                        </label>
                        {errors.email && (
                          <span className="text-[10px] text-brand-danger font-mono mt-1 block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject input */}
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("subject")}
                        onBlur={() => handleBlur("subject")}
                        className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 text-sm text-brand-text placeholder-transparent focus:outline-none transition-all duration-300 ${
                          errors.subject 
                            ? "border-brand-danger focus:border-brand-danger" 
                            : "border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10"
                        }`}
                        placeholder="Subject"
                      />
                      <label
                        htmlFor="subject"
                        className={`absolute left-4 text-xs font-mono tracking-wider transition-all duration-300 pointer-events-none ${
                          focusedField === "subject" || formState.subject
                            ? "-top-2.5 bg-brand-card px-2 text-brand-primary"
                            : "top-4 text-brand-muted"
                        }`}
                      >
                        Subject
                      </label>
                      {errors.subject && (
                        <span className="text-[10px] text-brand-danger font-mono mt-1 block">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message input */}
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formState.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFocus("message")}
                        onBlur={() => handleBlur("message")}
                        className={`w-full bg-brand-bg border rounded-xl px-4 py-3.5 text-sm text-brand-text placeholder-transparent focus:outline-none transition-all duration-300 resize-none ${
                          errors.message 
                            ? "border-brand-danger focus:border-brand-danger" 
                            : "border-brand-border focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/10"
                        }`}
                        placeholder="Message"
                      />
                      <label
                        htmlFor="message"
                        className={`absolute left-4 text-xs font-mono tracking-wider transition-all duration-300 pointer-events-none ${
                          focusedField === "message" || formState.message
                            ? "-top-2.5 bg-brand-card px-2 text-brand-primary"
                            : "top-4 text-brand-muted"
                        }`}
                      >
                        Message
                      </label>
                      {errors.message && (
                        <span className="text-[10px] text-brand-danger font-mono mt-1 block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:w-auto"
                        variant="primary"
                        isMagnetic={true}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Transmitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-10 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle className="w-14 h-14 text-brand-success mb-5 animate-bounce" />
                    <h3 className="text-xl font-bold text-brand-text mb-2">
                      Message Dispatched
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted max-w-sm leading-relaxed mb-6 font-light">
                      Karthick Raj has received your message and will review your analytical inquiry shortly.
                    </p>
                    <Button
                      variant="secondary"
                      onClick={() => setSuccess(false)}
                      isMagnetic={true}
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column: Professional Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-card border border-brand-border rounded-2xl p-5 flex flex-col gap-5 shadow-sm">
              
              {/* Profile Image row with small glass-like card */}
              <div className="flex gap-4 items-center pb-4 border-b border-brand-border/60">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-brand-border/60 bg-brand-bg shrink-0 shadow-sm">
                  <Image
                    src="/images/profile.jpg"
                    alt="Karthick Raj profile portrait"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text">Karthick Raj</h4>
                  <p className="text-[10px] text-brand-primary uppercase font-mono tracking-wider mt-0.5">
                    {SITE_METADATA.currentRole}
                  </p>
                </div>
              </div>

              {/* Status Row */}
              <div className="bg-brand-bg border border-brand-border rounded-xl p-3.5 flex flex-col gap-0.5">
                <span className="text-[9px] font-mono text-brand-muted uppercase tracking-wider block">
                  Engagement Availability
                </span>
                <span className="text-xs font-semibold text-brand-success flex items-center gap-1.5 mt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                  {SITE_METADATA.status}
                </span>
              </div>

              {/* Details stack */}
              <div className="space-y-3.5 text-xs text-brand-muted">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                  <span className="font-mono">{SITE_METADATA.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span className="font-mono">{SITE_METADATA.phone}</span>
                </div>
              </div>

              {/* Direct Links */}
              <div className="space-y-2 border-t border-brand-border pt-4 mt-2">
                <span className="text-[9px] font-mono text-brand-muted uppercase tracking-wider block mb-2">
                  Direct Node Connections
                </span>
                
                <a
                  href={SITE_METADATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-bg hover:bg-brand-primary/5 border border-brand-border hover:border-brand-primary/30 transition-all duration-300 group"
                >
                  <span className="text-[11px] font-mono text-brand-muted group-hover:text-brand-text transition-colors duration-300">
                    linkedin.com/in/karthick-raj-analyst
                  </span>
                  <LinkedinIcon className="w-4 h-4 text-brand-muted group-hover:text-brand-primary transition-colors duration-300" />
                </a>

                <a
                  href={SITE_METADATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-bg hover:bg-brand-primary/5 border border-brand-border hover:border-brand-primary/30 transition-all duration-300 group"
                >
                  <span className="text-[11px] font-mono text-brand-muted group-hover:text-brand-text transition-colors duration-300">
                    github.com/karthick-JD25
                  </span>
                  <GithubIcon className="w-4 h-4 text-brand-muted group-hover:text-brand-text transition-colors duration-300" />
                </a>

                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-bg hover:bg-brand-primary/5 border border-brand-border hover:border-brand-primary/30 transition-all duration-300 group"
                >
                  <span className="text-[11px] font-mono text-brand-muted group-hover:text-brand-text transition-colors duration-300">
                    karthickrajts25@gmail.com
                  </span>
                  <Mail className="w-4 h-4 text-brand-muted group-hover:text-brand-primary transition-colors duration-300" />
                </a>
              </div>
            </div>

            {/* Premium Quote Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              custom={1}
              className="border-l border-brand-primary pl-4 py-1.5 italic"
            >
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed font-light">
                "Great decisions begin with meaningful conversations. Whether it's solving a business challenge or exploring new opportunities, I'd be happy to connect."
              </p>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
