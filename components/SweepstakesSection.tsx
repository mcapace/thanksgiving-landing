"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SweepstakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sweepstakes" ref={ref} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <h2 className="font-serif text-4xl sm:text-5xl font-light text-stone-900 text-center mb-8">
            Enter the Sweepstakes
          </h2>

          {/* Card Container */}
          <div className="bg-stone-50 rounded-xl shadow-lg p-6 sm:p-8">
            {/* Inner White Container */}
            <div className="bg-white rounded-lg p-8">
              {/* Placeholder for Viral Sweeps Embed */}
              {/* ============================================ */}
              {/* PASTE YOUR VIRAL SWEEPS EMBED CODE BELOW    */}
              {/* ============================================ */}
              
              <div className="min-h-[500px] border-2 border-dashed border-stone-300 rounded-lg flex flex-col items-center justify-center text-center p-8">
                <div className="space-y-4">
                  <p className="text-xl font-semibold text-stone-700">
                    Viral Sweeps Embed Code Goes Here
                  </p>
                  <p className="text-sm text-stone-500 max-w-md">
                    Replace this div with your actual Viral Sweeps embed code. 
                    Remove the placeholder div and paste your embed script directly in this location.
                  </p>
                </div>
              </div>
              
              {/* ============================================ */}
              {/* END OF VIRAL SWEEPS EMBED SECTION           */}
              {/* ============================================ */}
            </div>

            {/* Footer Link */}
            <div className="mt-6 text-center">
              <a
                href="#"
                className="text-sm text-stone-600 hover:text-stone-900 underline transition-colors duration-200"
              >
                Official Rules & Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

