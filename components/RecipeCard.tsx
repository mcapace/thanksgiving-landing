"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Download, Mail } from "lucide-react";
import type { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
  index: number;
}

export default function RecipeCard({ recipe, index }: RecipeCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showRecipe, setShowRecipe] = useState(false);

  // Auto-rotate between wine bottle and recipe image every 4 seconds
  useEffect(() => {
    if (!recipe.recipePath) return; // Only rotate if recipe image exists
    
    const interval = setInterval(() => {
      setShowRecipe(prev => !prev);
    }, 4000); // Flip every 4 seconds

    return () => clearInterval(interval);
  }, [recipe.recipePath]);

  const handleEmailRecipe = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Prompt user for their email
    const userEmail = prompt('Enter your email address to receive this recipe:');
    
    if (!userEmail) return; // User cancelled
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    try {
      // Show loading state (you could use a toast notification here)
      const button = e.currentTarget as HTMLButtonElement;
      const originalText = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending...';
      
      // Call API to send recipe email
      const response = await fetch('/api/send-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          winery: recipe.winery,
          wineName: recipe.wineName,
          dishName: recipe.dishName,
          recipeUrl: recipe.url,
          pdfUrl: recipe.pdfPath,
        }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert(`Recipe sent to ${userEmail}! Check your inbox.`);
      } else {
        throw new Error(data.error || 'Failed to send email');
      }
      
      // Reset button
      button.disabled = false;
      button.textContent = originalText;
      
    } catch (error) {
      console.error('Failed to send recipe email:', error);
      alert('Failed to send email. Please try again.');
      
      // Reset button
      const button = e.currentTarget as HTMLButtonElement;
      button.disabled = false;
      button.textContent = 'Email Recipe';
    }
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

      {/* Wine Bottle / Recipe Flip Section */}
      <div className="relative h-96 overflow-hidden bg-gradient-to-br from-amber-50/50 via-stone-50 to-red-50/30">
        {/* Artistic Background Elements */}
        <div className="absolute inset-0">
          {/* Soft radial glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-300/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-900/10 rounded-full blur-3xl" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.15) 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>

        {/* Rotating Images Container */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {/* Glow effect behind images */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent blur-xl" />
          </div>
          
          <AnimatePresence mode="wait">
            {!showRecipe || !recipe.recipePath ? (
              // Wine Bottle
              <motion.div
                key="bottle"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={recipe.bottlePath}
                  alt={`${recipe.wineName} bottle`}
                  fill
                  className={`object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] ${
                    recipe.bottlePath.endsWith('.jpg') || recipe.bottlePath.endsWith('.jpeg')
                      ? 'wine-bottle-blend'
                      : ''
                  }`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ) : (
              // Recipe Dish
              <motion.div
                key="recipe"
                initial={{ rotateY: -90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: 90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={recipe.recipePath!}
                  alt={`${recipe.dishName} dish`}
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Elegant Category Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-wine-red/20 blur-sm rounded-full" />
            <span className="relative inline-block bg-wine-red/95 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
              {recipe.category}
            </span>
          </div>
        </div>

        {/* View Indicator */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-stone-200 shadow-lg">
            <div className={`w-2 h-2 rounded-full ${showRecipe && recipe.recipePath ? 'bg-green-600' : 'bg-amber-600'} animate-pulse`} />
            <span className="text-xs font-semibold text-stone-800">
              {showRecipe && recipe.recipePath ? 'Dish' : recipe.wineType}
            </span>
          </div>
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
          {recipe.pdfPath ? (
            <a
              href={recipe.pdfPath}
              download
              className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-3 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-sm hover:gap-3 shadow-md hover:shadow-lg"
            >
              <Download className="w-4 h-4" />
              Download Recipe
            </a>
          ) : (
            <a
              href={recipe.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-red-900 text-white px-4 py-3 rounded-lg hover:bg-red-950 transition-all duration-300 font-semibold text-sm hover:gap-3 shadow-md hover:shadow-lg"
            >
              View Recipe
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          
          <button
            onClick={handleEmailRecipe}
            className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-4 py-3 rounded-lg hover:bg-amber-700 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg"
          >
            <Mail className="w-4 h-4" />
            Email Recipe
          </button>
        </div>
      </div>
    </motion.div>
  );
}

