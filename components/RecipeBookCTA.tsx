"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Gift, ArrowDown } from "lucide-react";

export default function RecipeBookCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToSweepstakes = () => {
    const sweepsSection = document.getElementById('sweepstakes');
    if (sweepsSection) {
      sweepsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={ref} className="bg-gradient-to-br from-wine-red via-red-900 to-red-950 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <BookOpen className="w-16 h-16 text-amber-50 mx-auto" strokeWidth={1.5} />
              <Gift className="w-8 h-8 text-amber-400 absolute -top-2 -right-2" strokeWidth={2} />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-4 tracking-tight"
          >
            Get the Complete Recipe & Pairing Collection
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-amber-50/90 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Enter the sweepstakes and you'll receive <strong className="text-amber-100 font-semibold">all 9 curated recipes with expert wine pairings</strong> from renowned wineries—plus your chance to win a Hestan Culinary Prize Package valued at $464.90!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              onClick={scrollToSweepstakes}
              className="group bg-amber-500 hover:bg-amber-400 text-stone-900 px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3"
            >
              <Gift className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Enter to Win & Get Recipe Book
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>

          {/* Legal Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs text-amber-50/60 mt-6"
          >
            NO PURCHASE NECESSARY • 21+ • U.S. Residents Only
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

