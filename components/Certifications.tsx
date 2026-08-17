"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, ShieldCheck, X, ZoomIn, ExternalLink } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import { CERTIFICATIONS_LIST, CertificationItem } from "@/lib/certifications";

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const featuredCerts = CERTIFICATIONS_LIST.filter((cert) => cert.featured);
  const regularCerts = CERTIFICATIONS_LIST.filter((cert) => !cert.featured);

  return (
    <section id="certifications" className="relative py-28 bg-brand-bg px-6 overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <SectionTitle
          number="05 // CERTIFICATIONS"
          title="Professional Credentials"
          subtitle="Verified certifications and training across business analysis, data analytics, and business intelligence."
        />

        {/* ━━━━━━━━━━━━━━━━━━━━ FEATURED CERTIFICATES ━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary uppercase">
              FEATURED CERTIFICATES
            </h3>
            <div className="flex-1 h-[1px] bg-brand-border/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredCerts.map((cert) => {
              const isMicrosoft = cert.id === "cert-pl300";

              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col justify-between group cursor-pointer hover:border-brand-primary/40 transition-all duration-300 shadow-sm"
                >
                  <div className="space-y-4">
                    {/* Certificate Thumbnail Preview */}
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-brand-bg border border-brand-border/60">
                      {cert.imagePath ? (
                        <Image
                          src={cert.imagePath}
                          alt={cert.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                          sizes="(max-width: 768px) 100vw, 600px"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-brand-card text-brand-muted p-6 text-center">
                          <Award className="w-12 h-12 text-brand-primary mb-2 opacity-60" />
                          <span className="text-xs font-mono font-medium">{cert.provider}</span>
                        </div>
                      )}
                      
                      {/* Hover Overlay Magnify Indicator */}
                      <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-brand-card/90 border border-brand-border flex items-center justify-center text-brand-text shadow">
                          <ZoomIn className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Featured Tag Badge */}
                      {isMicrosoft ? (
                        <div className="absolute top-3 left-3 bg-brand-primary text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow">
                          Microsoft Certified: Power BI Data Analyst Associate (PL-300)
                        </div>
                      ) : (
                        <div className="absolute top-3 left-3 bg-brand-text text-white text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow opacity-90">
                          Featured Credential
                        </div>
                      )}
                    </div>

                    {/* Meta info */}
                    <div>
                      <span className="text-[10px] font-mono text-brand-primary uppercase tracking-widest block mb-1">
                        {cert.category}
                      </span>
                      <h3 className="text-lg font-bold text-brand-text leading-snug group-hover:text-brand-primary transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-brand-muted leading-relaxed font-light mt-1">
                        {cert.provider}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Details */}
                  <div className="flex items-center justify-between border-t border-brand-border/60 pt-4 mt-6 text-[11px] font-mono text-brand-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                      {cert.date.includes("–") ? "Period:" : "Issued:"} {cert.date}
                    </span>
                    <span className="text-brand-primary group-hover:translate-x-0.5 transition-transform font-bold flex items-center gap-1">
                      View Credential <ZoomIn className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━ CERTIFICATES ━━━━━━━━━━━━━━━━━━━━ */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <h3 className="text-xs font-mono font-bold tracking-[0.25em] text-brand-primary uppercase">
              CERTIFICATES
            </h3>
            <div className="flex-1 h-[1px] bg-brand-border/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularCerts.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="bg-brand-card border border-brand-border rounded-xl p-5 flex flex-col justify-between group cursor-pointer hover:border-brand-primary/30 transition-all duration-300 shadow-sm"
              >
                <div className="space-y-3">
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-brand-bg border border-brand-border/60">
                    {cert.imagePath ? (
                      <Image
                        src={cert.imagePath}
                        alt={cert.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-brand-bg text-brand-muted p-4 text-center">
                        <Award className="w-8 h-8 text-brand-primary mb-1.5 opacity-60" />
                        <span className="text-[10px] font-mono">{cert.provider}</span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-brand-text/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                      <div className="w-8 h-8 rounded-full bg-brand-card/90 border border-brand-border flex items-center justify-center text-brand-text shadow">
                        <ZoomIn className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <span className="text-[9px] font-mono text-brand-primary uppercase tracking-widest block mb-1">
                      {cert.category}
                    </span>
                    <h4 className="text-sm font-bold text-brand-text leading-snug group-hover:text-brand-primary transition-colors duration-300">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-brand-muted font-light mt-1">
                      {cert.provider}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-brand-border/60 pt-3 mt-4 text-[10px] font-mono text-brand-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-brand-primary" />
                    {cert.date}
                  </span>
                  <span className="text-brand-primary font-semibold flex items-center gap-1">
                    View <ZoomIn className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox / Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-brand-text/30 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => {
              setSelectedCert(null);
              setIsZoomed(false);
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="bg-brand-card border border-brand-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Image Frame Column */}
              <div className="md:w-7/10 aspect-[16/11] md:aspect-auto relative bg-brand-bg flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-brand-border select-none p-2">
                {selectedCert.imagePath ? (
                  <div 
                    className={`relative w-full h-full transition-transform duration-300 ${
                      isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
                    }`}
                    onClick={() => setIsZoomed(!isZoomed)}
                  >
                    <Image
                      src={selectedCert.imagePath}
                      alt={selectedCert.title}
                      fill
                      className="object-contain p-2"
                      sizes="800px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-8">
                    <Award className="w-16 h-16 text-brand-primary opacity-60 mb-3" />
                    <h4 className="text-base font-bold text-brand-text mb-1">{selectedCert.title}</h4>
                    <p className="text-xs text-brand-muted">{selectedCert.provider}</p>
                  </div>
                )}
                
                {selectedCert.imagePath && (
                  <div className="absolute bottom-3 left-3 bg-brand-text/70 text-white text-[9px] font-mono px-2 py-0.5 rounded pointer-events-none select-none">
                    {isZoomed ? "Click to Zoom Out" : "Click to Zoom In"}
                  </div>
                )}
              </div>

              {/* Certificate Details Sidebar */}
              <div className="md:w-3/10 p-6 flex flex-col justify-between h-auto md:h-full bg-brand-card">
                <div className="space-y-6">
                  {/* Category */}
                  <div>
                    <span className="text-[9px] font-mono text-brand-primary uppercase tracking-[0.2em] block mb-1">
                      {selectedCert.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-brand-text tracking-tight leading-snug">
                      {selectedCert.title}
                    </h3>
                  </div>

                  <div className="h-[1px] bg-brand-border" />

                  {/* Issuance detail block */}
                  <div className="space-y-3.5 text-xs">
                    <div>
                      <span className="text-[10px] font-mono text-brand-muted block uppercase tracking-wider mb-0.5">
                        Issuing Organization
                      </span>
                      <span className="font-semibold text-brand-text block">
                        {selectedCert.provider}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono text-brand-muted block uppercase tracking-wider mb-0.5">
                        {selectedCert.date.includes("–") ? "Completion Period" : "Issue Date"}
                      </span>
                      <span className="font-semibold text-brand-text block flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brand-primary" />
                        {selectedCert.date}
                      </span>
                    </div>

                    {selectedCert.id === "cert-pl300" && (
                      <>
                        <div>
                          <span className="text-[10px] font-mono text-brand-muted block uppercase tracking-wider mb-0.5">
                            Credential ID
                          </span>
                          <span className="font-mono text-brand-text text-[11px] block">
                            A2CFE5FDB4B98D33
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-brand-muted block uppercase tracking-wider mb-0.5">
                            Status
                          </span>
                          <span className="text-brand-success font-semibold text-[11px] flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-success animate-pulse" />
                            Active (Online Verifiable)
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Bottom Verification CTAs */}
                <div className="pt-6 mt-6 border-t border-brand-border space-y-3">
                  {selectedCert.credentialUrl && (
                    <a
                      href={selectedCert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-brand-primary hover:bg-brand-hover text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      Verify Online
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  
                  <button
                    onClick={() => {
                      setSelectedCert(null);
                      setIsZoomed(false);
                    }}
                    className="w-full py-2.5 px-4 bg-brand-bg hover:bg-brand-border/40 border border-brand-border text-brand-text text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    Close Preview
                  </button>
                </div>

              </div>

              {/* Floating Top Close cross button */}
              <button
                onClick={() => {
                  setSelectedCert(null);
                  setIsZoomed(false);
                }}
                className="absolute top-4 right-4 z-55 w-8 h-8 rounded-full bg-brand-card hover:bg-brand-bg border border-brand-border flex items-center justify-center text-brand-muted hover:text-brand-text shadow transition-colors cursor-pointer focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certifications;
