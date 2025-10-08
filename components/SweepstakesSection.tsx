"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export default function SweepstakesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    // Cleanup function to remove old script if it exists
    return () => {
      const oldScript = document.querySelector('script[src*="vsa-widget-a1781e-216011"]');
      if (oldScript) {
        oldScript.remove();
      }
    };
  }, []);

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
              {/* VIRAL SWEEPS WIDGET EMBED                    */}
              {/* ============================================ */}
              
              {/* Viral Sweeps Widget Container */}
              <div id="vsscript_216011_961681" className="w-full min-h-[600px] viral-sweeps-custom"></div>
              
              {/* Load Viral Sweeps Script */}
              <Script
                id="viral-sweeps-widget"
                src="https://app.viralsweep.com/vsa-widget-a1781e-216011.js?sid=216011_961681"
                strategy="afterInteractive"
                async
              />
              
              {/* Custom CSS to streamline widget */}
              <style jsx global>{`
                /* Hide unnecessary Viral Sweeps elements */
                #vsscript_216011_961681 .vs-header-image,
                #vsscript_216011_961681 .vs-promo-image,
                #vsscript_216011_961681 .vs-banner-image,
                #vsscript_216011_961681 .vs-hero-image {
                  display: none !important;
                }
                
                /* Hide social proof/counters if not needed */
                #vsscript_216011_961681 .vs-social-proof,
                #vsscript_216011_961681 .vs-entry-count {
                  display: none !important;
                }
                
                /* Simplify header */
                #vsscript_216011_961681 .vs-header {
                  padding: 1rem 0 !important;
                  text-align: center !important;
                }
                
                /* Style form inputs to match site */
                #vsscript_216011_961681 input[type="text"],
                #vsscript_216011_961681 input[type="email"],
                #vsscript_216011_961681 select {
                  border: 2px solid #D6D3D1 !important;
                  border-radius: 0.5rem !important;
                  padding: 0.75rem 1rem !important;
                  font-family: 'Inter', sans-serif !important;
                }
                
                #vsscript_216011_961681 input:focus,
                #vsscript_216011_961681 select:focus {
                  border-color: #8B2332 !important;
                  outline: none !important;
                  box-shadow: 0 0 0 3px rgba(139, 35, 50, 0.1) !important;
                }
                
                /* Style submit button */
                #vsscript_216011_961681 button[type="submit"],
                #vsscript_216011_961681 .vs-submit-button {
                  background: #8B2332 !important;
                  color: white !important;
                  border: none !important;
                  border-radius: 0.5rem !important;
                  padding: 1rem 2rem !important;
                  font-size: 1.125rem !important;
                  font-weight: 600 !important;
                  cursor: pointer !important;
                  transition: all 0.3s !important;
                  font-family: 'Inter', sans-serif !important;
                }
                
                #vsscript_216011_961681 button[type="submit"]:hover,
                #vsscript_216011_961681 .vs-submit-button:hover {
                  background: #7A1F2B !important;
                  transform: translateY(-2px) !important;
                  box-shadow: 0 10px 25px rgba(139, 35, 50, 0.3) !important;
                }
                
                /* Clean up spacing */
                #vsscript_216011_961681 {
                  padding: 0 !important;
                }
                
                #vsscript_216011_961681 .vs-form-container {
                  background: white !important;
                  padding: 1.5rem !important;
                }
                
                /* Style headings */
                #vsscript_216011_961681 h1,
                #vsscript_216011_961681 h2,
                #vsscript_216011_961681 h3 {
                  font-family: 'Cormorant Garamond', Georgia, serif !important;
                  color: #1C1917 !important;
                }
                
                /* Hide powered by (if applicable) */
                #vsscript_216011_961681 .vs-powered-by,
                #vsscript_216011_961681 .vs-branding {
                  display: none !important;
                }
              `}</style>
              
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

