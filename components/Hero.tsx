"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hestan-hero.jpg"
          alt="Wine Country Thanksgiving"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Wine Spectator Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Image
            src="/images/logos/wine-spectator-logo.png"
            alt="Wine Spectator"
            width={200}
            height={60}
            className="w-32 sm:w-48 md:w-56 h-auto"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-serif font-light text-amber-50 text-xl sm:text-2xl md:text-3xl text-center"
        >
          presented by <span className="text-amber-600 font-normal">Hestan Culinary</span>
        </motion.p>

        {/* Animated Chevron */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute bottom-12"
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

