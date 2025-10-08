"use client";

import { useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { recipes } from "@/data/recipes";

export default function RecipeGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Randomize recipe order on each page load
  const shuffledRecipes = useMemo(() => {
    return [...recipes].sort(() => Math.random() - 0.5);
  }, []);

  return (
    <section id="recipes" ref={ref} className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 mb-3 tracking-tight">
            Wine Country Recipes
          </h2>
          <p className="text-lg sm:text-xl text-stone-600 font-light max-w-3xl mx-auto">
            Nine curated pairings to elevate your Thanksgiving table—each wine perfectly matched with a festive dish
          </p>
        </motion.div>

            {/* Recipe Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {shuffledRecipes.map((recipe, index) => (
                <RecipeCard key={recipe.id} recipe={recipe} index={index} />
              ))}
            </div>
      </div>
    </section>
  );
}

