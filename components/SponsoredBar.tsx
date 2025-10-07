"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SponsoredBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-stone-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-2">
          <p className="text-xs sm:text-sm text-stone-300">
            <span className="text-amber-50 font-medium">Sponsored by</span>
          </p>
          <a
            href="https://www.hestanculinary.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80 duration-300"
          >
            <Image
              src="/images/logos/hestan-logo-white.png"
              alt="Hestan Culinary"
              width={100}
              height={30}
              className="h-5 sm:h-6 w-auto"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

