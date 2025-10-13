"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Gift } from "lucide-react";

export default function Hero() {
  const scrollToSweepstakes = () => {
    const sweepsSection = document.getElementById('sweepstakes');
    if (sweepsSection) {
      sweepsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative h-[80vh] min-h-[600px] max-h-[900px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hestan-hero.jpg"
          alt="Wine Country Thanksgiving"
          fill
          priority
          className="object-cover object-[center_70%]"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif font-light text-white text-center mb-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-tight tracking-tight"
        >
          Bring Wine Country
          <br />
          to Thanksgiving
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif font-light text-amber-50 text-xl sm:text-2xl md:text-3xl text-center mb-6"
        >
          presented by <span className="text-amber-600 font-normal">Hestan Culinary</span>
        </motion.p>

        {/* Mobile CTA Button - visible only on mobile */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          onClick={scrollToSweepstakes}
          className="md:hidden bg-amber-500 hover:bg-amber-400 text-stone-900 px-6 py-3 rounded-lg font-bold text-base shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-2 mb-4"
        >
          <Gift className="w-5 h-5" />
          Enter to Win
        </motion.button>

        {/* Animated Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChevronDown className="w-10 h-10 text-amber-50" strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

