"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import EmailCollectionForm from "./EmailCollectionForm";

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-stone-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
            Recipes & Pairings from Renowned Wineries
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="font-sans text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Your Holiday Feast Begins with a Chance to Win
            </h3>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              From turkey to sides and festive favorites, these <strong className="font-semibold text-stone-900">recipes and wine pairings</strong> are curated to complement one another. Inspire tradition, spark conversation, 
              and make your Thanksgiving unforgettable by bringing the flavors of wine 
              country straight to your table.
            </p>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
              Save and share recipes individually, or drop your email below to receive 
              the complete recipe book and be automatically entered to win a Hestan 
              Culinary Cookware Set including:
            </p>
          </motion.div>

          {/* Right Column - Giveaway Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-[400px] sm:h-[450px] lg:h-[400px] overflow-hidden rounded-t-lg">
              <Image
                src="/images/giveaway/prize-package.jpg"
                alt="Hestan Culinary Prize Package"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-stone-900 mb-4">
                Hestan Culinary Prize Package
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="text-red-900 mr-2 mt-1.5">•</span>
                  <span className="text-stone-700">Small Polished Roaster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2 mt-1.5">•</span>
                  <span className="text-stone-700">Hedley & Bennett Chef Apron</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-900 mr-2 mt-1.5">•</span>
                  <span className="text-stone-700">3-Piece Mixing Bowl Set</span>
                </li>
              </ul>
              <p className="text-stone-900 font-semibold text-lg">
                Valued at $464.90
              </p>
            </div>
          </motion.div>
        </div>

        {/* Email Collection Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <EmailCollectionForm />
        </motion.div>
      </div>
    </section>
  );
}

