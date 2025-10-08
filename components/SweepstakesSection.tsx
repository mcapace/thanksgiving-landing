"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function SweepstakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
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
              {/* VIRAL SWEEPS IFRAME EMBED                    */}
              {/* ============================================ */}
              
              {/* Viral Sweeps iframe - Promotion ID: 216011 */}
              <div className="w-full">
                <iframe
                  src="https://app.viralsweep.com/promotions/full/216011"
                  frameBorder="0"
                  scrolling="auto"
                  className="w-full min-h-[800px] border-0 rounded-lg"
                  title="Wine Spectator x Hestan Thanksgiving Sweepstakes"
                  loading="lazy"
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                />
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
  );
}

