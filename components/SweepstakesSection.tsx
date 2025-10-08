"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

export default function SweepstakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    // Check if widget loaded after script loads
    if (scriptLoaded) {
      console.log('Viral Sweeps script loaded');
      // Try to reinitialize if needed
      if (typeof window !== 'undefined' && (window as any).vrlswp) {
        (window as any).vrlswp.init();
      }
    }
  }, [scriptLoaded]);

  return (
    <>
      {/* Load Viral Sweeps Script */}
      <Script
        src="https://app.viralsweep.com/vrlswp.js"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
        onError={(e) => console.error('Failed to load Viral Sweeps script:', e)}
      />
      
      <section id="sweepstakes" ref={ref} className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-stone-900 text-center mb-6 tracking-tight">
            Enter to Win
          </h2>

          {/* Subtitle */}
          <p className="text-center text-stone-600 mb-8 text-lg">
            Enter for your chance to win a Hestan Culinary Holiday Prize Package valued at $464.90
          </p>

          {/* Card Container */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-6 sm:p-8">
            {/* Inner White Container */}
            <div className="bg-white rounded-lg p-4 sm:p-6">
              {/* ============================================ */}
              {/* VIRAL SWEEPS EMBED - REPLACE PROMOTION ID    */}
              {/* ============================================ */}
              
              {/* Viral Sweeps Widget - Promotion ID: 216011 */}
              <div 
                className="vrlps-container" 
                data-promotion-id="216011"
                data-background-color="#ffffff"
                data-text-color="#1c1917"
                data-primary-color="#8B2332"
                data-button-color="#8B2332"
                data-button-text-color="#ffffff"
              >
                {/* Fallback content while widget loads */}
                <div className="min-h-[500px] flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="animate-pulse space-y-3">
                      <div className="h-8 bg-stone-200 rounded w-3/4 mx-auto"></div>
                      <div className="h-4 bg-stone-200 rounded w-1/2 mx-auto"></div>
                    </div>
                    <p className="text-stone-500 text-sm mt-6">Loading sweepstakes entry form...</p>
                  </div>
                </div>
              </div>
              
              {/* ============================================ */}
              {/* END OF VIRAL SWEEPS EMBED SECTION           */}
              {/* ============================================ */}
            </div>

            {/* Campaign Info */}
            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-stone-600">
                Campaign runs from <strong>October 14 - December 14, 2025</strong>
              </p>
              <Link
                href="/official-rules"
                className="inline-block text-sm text-wine-red hover:text-red-900 underline transition-colors duration-200 font-medium"
              >
                View Official Rules & Terms
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    </>
  );
}

