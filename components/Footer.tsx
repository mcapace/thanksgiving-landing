"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialShare from "./SocialShare";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-stone-900 text-white">
      {/* Logo Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="py-12 border-b border-stone-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
            {/* Wine Spectator Logo */}
            <a
              href="https://www.winespectator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-300"
            >
              <Image
                src="/images/logos/WS logo white.png"
                alt="Wine Spectator"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </a>

            {/* Hestan Logo */}
            <a
              href="https://www.hestanculinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:opacity-80 duration-300"
            >
              <Image
                src="/images/logos/hestan-logo-white.png"
                alt="Hestan Culinary"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Hestan Product Promotion (Optional) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="py-16 border-b border-stone-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Text Content */}
            <div className="space-y-4">
              <h3 className="font-serif text-3xl sm:text-4xl font-light">
                Elevate Your Culinary Experience
              </h3>
              <p className="text-stone-300 text-lg leading-relaxed">
                Discover professional-grade cookware designed for passionate home chefs. 
                From precision roasting pans to versatile mixing bowls, Hestan Culinary 
                brings restaurant-quality performance to your kitchen.
              </p>
              <a
                href="https://www.hestanculinary.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-stone-900 px-8 py-3 rounded-md font-semibold hover:bg-stone-100 transition-all duration-300 hover:scale-105"
              >
                Shop Hestan
              </a>
            </div>

            {/* Right - Product Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hestan-product.jpg"
                alt="Hestan Culinary Products"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Social Share Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="py-12 border-b border-stone-700"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialShare />
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2">
            <p className="text-stone-400 text-sm">
              Sponsored by Hestan Culinary
            </p>
            <p className="text-stone-400 text-sm">
              © {new Date().getFullYear()} Wine Spectator. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

