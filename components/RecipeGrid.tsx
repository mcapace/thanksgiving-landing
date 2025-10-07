"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import RecipeCard from "./RecipeCard";
import { recipes } from "@/data/recipes";
import type { Recipe } from "@/data/recipes";

type WineFilter = "All Recipes" | "Pinot Noir" | "Pinot Gris" | "Chardonnay" | "Cabernet";

export default function RecipeGrid() {
  const [activeFilter, setActiveFilter] = useState<WineFilter>("All Recipes");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filters: WineFilter[] = [
    "All Recipes",
    "Pinot Noir",
    "Pinot Gris",
    "Chardonnay",
    "Cabernet"
  ];

  const filteredRecipes = recipes.filter((recipe: Recipe) => {
    if (activeFilter === "All Recipes") return true;
    return recipe.wineType === activeFilter;
  });

  return (
    <section id="recipes" ref={ref} className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 mb-4">
            Wine Country Recipes
          </h2>
          <p className="text-xl sm:text-2xl text-stone-600 font-light">
            Nine curated pairings to elevate your Thanksgiving table
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-red-900 text-white shadow-md"
                  : "bg-stone-100 text-stone-700 hover:bg-stone-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredRecipes.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>

        {/* No results message */}
        {filteredRecipes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-xl text-stone-600">
              No recipes found for this filter. Try another wine type.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

