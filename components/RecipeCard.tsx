"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Download, Mail, Share2 } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleEmailRecipe = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const subject = encodeURIComponent(`${recipe.dishName} paired with ${recipe.wineName}`);
    const body = encodeURIComponent(
      `Check out this amazing wine pairing for Thanksgiving!\n\n` +
      `🍷 Wine: ${recipe.wineName}\n` +
      `🏛️ Winery: ${recipe.winery}\n` +
      `🍽️ Dish: ${recipe.dishName}\n\n` +
      `View the full recipe: ${recipe.url}\n\n` +
      ${recipe.pdfPath ? `Download recipe card: ${window.location.origin}${recipe.pdfPath}\n\n` : ''} +
      `Discover more wine pairings: ${window.location.origin}\n\n` +
      `Wine Spectator x Hestan Culinary`
    );
    
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Header with Logo */}
      <div className="bg-gradient-to-br from-stone-50 to-white p-4 border-b border-stone-100">
        <div className="relative w-full max-w-[140px] h-14 mx-auto">
          <Image
            src={recipe.logoPath}
            alt={`${recipe.winery} logo`}
            fill
            className={`object-contain ${
              recipe.logoPath.endsWith('.jpg') || recipe.logoPath.endsWith('.jpeg')
                ? 'logo-blend'
                : ''
            }`}
            sizes="140px"
          />
        </div>
      </div>

      {/* Wine Bottle Hero Section */}
      <div className="relative h-96 bg-gradient-to-br from-stone-50 via-white to-amber-50/30 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,35,50,0.05),transparent_50%)]" />
        
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative w-full h-full transition-all duration-500 group-hover:scale-105">
            <Image
              src={recipe.bottlePath}
              alt={`${recipe.wineName} bottle`}
              fill
              className={`object-contain drop-shadow-2xl ${
                recipe.bottlePath.endsWith('.jpg') || recipe.bottlePath.endsWith('.jpeg')
                  ? 'wine-bottle-blend'
                  : ''
              }`}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        </div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="inline-block bg-wine-red/90 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-white to-stone-50/30">
        {/* Wine Info */}
        <div className="mb-4">
          <h3 className="font-serif text-2xl font-semibold text-stone-900 mb-1 leading-tight">
            {recipe.dishName}
          </h3>
          <p className="text-sm text-stone-600 font-medium">
            {recipe.wineName}
          </p>
        </div>
        
        {/* Pairing Tag */}
        <div className="mb-6 flex items-center gap-2 text-sm text-stone-700">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-600"></div>
            <span className="font-medium">{recipe.wineType}</span>
          </div>
          <span className="text-stone-400">•</span>
          <span>Perfect Pairing</span>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-auto grid grid-cols-2 gap-2">
          <a
            href={recipe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-3 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-sm hover:gap-3 shadow-md hover:shadow-lg"
          >
            View Recipe
            <ExternalLink className="w-4 h-4" />
          </a>
          
          <button
            onClick={handleEmailRecipe}
            className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Email
          </button>
        </div>
        
        {/* PDF Download Link */}
        {recipe.pdfPath && (
          <a
            href={recipe.pdfPath}
            download
            className="mt-2 inline-flex items-center justify-center gap-2 text-stone-700 hover:text-red-900 transition-colors text-sm font-medium py-2"
          >
            <Download className="w-4 h-4" />
            Download Recipe Card
          </a>
        )}
      </div>
    </motion.div>
  );
}

