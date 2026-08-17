"use client";

import React from "react";
import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";
import Button from "@/components/ui/Button";
import AuroraBackground from "@/components/ui/AuroraBackground";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F3EC] relative overflow-hidden px-6 text-center select-none">
      {/* Visual background layers */}
      <AuroraBackground />
      
      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 border border-brand-primary/30 text-brand-primary flex items-center justify-center mx-auto mb-4 shadow-sm">
          <AlertCircle className="w-8 h-8 animate-pulse" />
        </div>
        
        <h1 className="text-7xl font-extrabold text-brand-text font-mono tracking-wider">
          404
        </h1>
        <h2 className="text-xl font-bold text-brand-text tracking-wide uppercase font-mono text-brand-primary">
          Data Segment Not Found
        </h2>
        <p className="text-sm text-brand-muted leading-relaxed font-light">
          The analytics page or parameter query you requested does not exist or has been archived. Check spelling coordinates.
        </p>
        
        <div className="pt-4">
          <Link href="/" passHref legacyBehavior>
            <a>
              <Button variant="primary" isMagnetic={true}>
                <Home className="w-4 h-4 mr-2" />
                Return to main portfolio
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
