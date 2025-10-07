"use client";

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
        <div className="flex items-center justify-center py-2">
          <p className="text-xs sm:text-sm text-stone-300">
            <span className="text-amber-50 font-medium">Sponsored by</span>{" "}
            <a
              href="https://www.hestanculinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-500 font-semibold transition-colors underline decoration-amber-600/30 hover:decoration-amber-500"
            >
              Hestan Culinary
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

