"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Download } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.a
      ref={ref}
      href={recipe.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Winery Logo Section */}
      <div className="bg-stone-100 h-20 flex items-center justify-center p-4">
        <div className="relative w-full max-w-[128px] h-12">
          <Image
            src={recipe.logoPath}
            alt={`${recipe.winery} logo`}
            fill
            className="object-contain"
            sizes="128px"
          />
        </div>
      </div>

      {/* Wine Bottle Section */}
      <div className="relative h-80 bg-gradient-to-b from-stone-100 to-amber-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105">
            <Image
              src={recipe.bottlePath}
              alt={`${recipe.wineName} bottle`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="font-serif text-xl text-stone-800 mb-4 min-h-[56px] flex items-center">
          {recipe.description}
        </p>
        
        <div className="mt-auto space-y-2">
          <button className="w-full inline-flex items-center justify-center gap-2 bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-950 transition-all duration-300 group-hover:gap-3">
            View Recipe
            <ExternalLink className="w-4 h-4" />
          </button>
          
          {recipe.pdfPath && (
            <a
              href={recipe.pdfPath}
              download
              onClick={(e) => e.stopPropagation()}
              className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-md hover:bg-stone-800 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          )}
        </div>
      </div>
    </motion.a>
  );
}

