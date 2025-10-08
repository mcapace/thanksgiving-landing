"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function GiveawaySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEnterNowClick = () => {
    const sweepstakesSection = document.getElementById("sweepstakes");
    if (sweepstakesSection) {
      sweepstakesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="giveaway" ref={ref} className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:order-1"
          >
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 leading-tight tracking-tight">
              Enter to Win a Hestan Holiday Prize Package
            </h2>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Elevate your holiday cooking with professional-grade tools from Hestan. 
              Enter for a chance to win a Polished Roaster, a Hedley & Bennett Chef Apron, 
              and a 3-Piece Mixing Bowl Set—a prize package valued at over $460.
            </p>
            <button
              onClick={handleEnterNowClick}
              className="inline-block bg-red-900 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-red-950 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Enter Now
            </button>
          </motion.div>

          {/* Right Column - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2"
          >
            <div className="relative h-[400px] sm:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl bg-stone-50">
              <Image
                src="/images/giveaway/prize-package.jpg"
                alt="Hestan Holiday Prize Package"
                fill
                className="object-contain object-center p-3"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

