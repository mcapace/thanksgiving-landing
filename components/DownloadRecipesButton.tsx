"use client";

import { Download, FileText } from "lucide-react";
import { recipes } from "@/data/recipes";

export default function DownloadRecipesButton() {
  const handleDownloadAllPDFs = async () => {
    // Get all recipes that have PDFs
    const recipesWithPDFs = recipes.filter(recipe => recipe.pdfPath);
    
    // Download each PDF
    for (const recipe of recipesWithPDFs) {
      const link = document.createElement('a');
      link.href = recipe.pdfPath!;
      link.download = `${recipe.winery.replace(/\s+/g, '-')}-Recipe.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Small delay between downloads to avoid browser blocking
      await new Promise(resolve => setTimeout(resolve, 200));
    }
  };

  const handleDownloadAll = () => {
    // Create a text file with all recipes
    const recipeText = recipes
      .map(
        (recipe, index) =>
          `${index + 1}. ${recipe.dishName}
Winery: ${recipe.winery}
Wine: ${recipe.wineName}
Category: ${recipe.category.charAt(0).toUpperCase() + recipe.category.slice(1)}
Recipe URL: ${recipe.url}

-----------------------------------
`
      )
      .join("\n");

    const content = `Wine Spectator x Hestan Culinary
Thanksgiving Recipe Collection
=================================

${recipeText}

© ${new Date().getFullYear()} Wine Spectator. All rights reserved.
`;

    // Create blob and download
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "thanksgiving-recipes-wine-spectator.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleEmailRecipes = () => {
    // Create email with recipe links
    const recipeLinks = recipes
      .map((recipe) => `${recipe.dishName} - ${recipe.url}`)
      .join("%0D%0A");

    const subject = encodeURIComponent(
      "Wine Spectator x Hestan Thanksgiving Recipes"
    );
    const body = encodeURIComponent(
      `Check out these amazing wine and recipe pairings for Thanksgiving:\n\n${recipeLinks}\n\nEnjoy!\n\n© Wine Spectator x Hestan Culinary`
    );

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const availablePDFCount = recipes.filter(recipe => recipe.pdfPath).length;

  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
        <button
          onClick={handleDownloadAllPDFs}
          className="inline-flex items-center gap-2 bg-red-900 text-white px-6 py-3 rounded-md hover:bg-red-950 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          <Download className="w-5 h-5" />
          Download All PDFs ({availablePDFCount})
        </button>
        <button
          onClick={handleDownloadAll}
          className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-3 rounded-md hover:bg-stone-800 transition-all duration-300 font-semibold shadow-md hover:shadow-lg"
        >
          <FileText className="w-5 h-5" />
          Download Recipe List
        </button>
      </div>
      <button
        onClick={handleEmailRecipes}
        className="inline-flex items-center gap-2 bg-white text-stone-900 border-2 border-stone-900 px-6 py-3 rounded-md hover:bg-stone-50 transition-all duration-300 font-semibold"
      >
        Email Recipes to Myself
      </button>
    </div>
  );
}

