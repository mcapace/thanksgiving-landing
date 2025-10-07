# Recipe Data Extraction Guide

Based on the assets folder structure, here are the 9 wineries and their materials:

## Wineries Found:

1. **King Estate** - Pinot Noir
2. **Calcareous Vineyard** - Pinot Noir
3. **Gloria Ferrer Winery** - Sparkling Wine (Royal Cuvée)
4. **Hestan Vineyards** - Cabernet Sauvignon
5. **Marimar Estate** - Pinot Noir (Albariño possibly)
6. **McIntyre Vineyards** - Pinot Gris
7. **Pine Ridge Vineyards** - Cabernet Sauvignon
8. **St. Supéry Estate** - Sauvignon Blanc
9. **The Vice Napa Valley** - Pinot Noir (Carneros)

## Recipe Cards Available:

PDF files in `/RECIPE CARDS/` folder:
- Calcareousv2.pdf
- GloriaFerrerv1.pdf
- KingEstatev1.pdf
- McIntyrev3.pdf
- PineRidgev2.pdf
- StSuperyv2.pdf
- Vicev2.pdf
- **Thanksgiving URLs.docx** ← Contains all recipe URLs!

## How to Extract Recipe Information:

### Method 1: From PDFs (Manual)

1. Open each PDF in `/RECIPE CARDS/` folder
2. Extract for each:
   - Dish name (title of recipe)
   - Wine pairing details
   - Recipe URL (if listed in PDF)

### Method 2: From URLs Document (Recommended)

1. Open: `RECIPE CARDS/Thanksgiving URLs.docx`
2. This should contain all recipe URLs in one place
3. Copy URLs to update `data/recipes.ts`

### Method 3: From Individual Winery Folders

Each winery folder contains a `.docx` file with recipe information:
- King Estate: `King Estate Thanksgiving recipe copy.docx`
- Other wineries: Look for similar `.docx` files

## Recipe Data Template

Once you extract the information, update `data/recipes.ts` like this:

```typescript
export const recipes: Recipe[] = [
  {
    id: 1,
    winery: "King Estate",
    wineName: "2023 Pinot Noir",
    dishName: "Roasted Squash & Apple Soup",
    description: "Pinot Noir with Roasted Squash & Apple Soup",
    url: "https://kingestate.com/recipe-for-roasted-estate-squash-and-apple-soup/",
    logoPath: "/images/logos/king-estate-logo.png",
    bottlePath: "/images/wines/king-estate-pinot-noir.png",
    category: "appetizer",
    wineType: "Pinot Noir"
  },
  {
    id: 2,
    winery: "Calcareous Vineyard",
    wineName: "2023 Tres Violet Pinot Noir",
    dishName: "[Extract from PDF]",
    description: "Pinot Noir with [dish name]",
    url: "[Extract from URLs.docx or PDF]",
    logoPath: "/images/logos/calcareous-logo.png",
    bottlePath: "/images/wines/calcareous-pinot-noir.png",
    category: "main", // or "appetizer", "side", "dessert"
    wineType: "Pinot Noir"
  },
  {
    id: 3,
    winery: "Gloria Ferrer Winery",
    wineName: "2018 Royal Cuvée",
    dishName: "[Extract from PDF]",
    description: "Sparkling Wine with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/gloria-ferrer-logo.png",
    bottlePath: "/images/wines/gloria-ferrer-sparkling.jpg",
    category: "appetizer", // Sparkling usually pairs with appetizers
    wineType: "Other"
  },
  {
    id: 4,
    winery: "Hestan Vineyards",
    wineName: "Cabernet Sauvignon",
    dishName: "[Extract - likely the Hestan Turkey Recipe]",
    description: "Cabernet with [dish name]",
    url: "[Extract from Hestan url document]",
    logoPath: "/images/logos/hestan-logo-white.png", // or create specific Hestan Vineyards logo
    bottlePath: "/images/wines/hestan-cabernet.jpg",
    category: "main",
    wineType: "Cabernet"
  },
  {
    id: 5,
    winery: "Marimar Estate",
    wineName: "[Extract year and type]",
    dishName: "[Scallops - based on image files]",
    description: "Pinot Noir with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/marimar-estate-logo.png",
    bottlePath: "/images/wines/marimar-estate-pinot-noir.png",
    category: "appetizer", // Scallops are typically an appetizer
    wineType: "Pinot Noir"
  },
  {
    id: 6,
    winery: "McIntyre Vineyards",
    wineName: "Pinot Gris",
    dishName: "[Extract from McIntyrev3.pdf]",
    description: "Pinot Gris with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/mcintyre-logo.jpg",
    bottlePath: "/images/wines/mcintyre-pinot-gris.png",
    category: "side",
    wineType: "Pinot Gris"
  },
  {
    id: 7,
    winery: "Pine Ridge Vineyards",
    wineName: "Cabernet Sauvignon NV",
    dishName: "[Extract from PineRidgev2.pdf]",
    description: "Cabernet with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/pine-ridge-logo.jpeg",
    bottlePath: "/images/wines/pine-ridge-cabernet.png",
    category: "main",
    wineType: "Cabernet"
  },
  {
    id: 8,
    winery: "St. Supéry Estate",
    wineName: "2023 Dollarhide Sauvignon Blanc",
    dishName: "[Extract from StSuperyv2.pdf]",
    description: "Sauvignon Blanc with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/st-supery-logo.png",
    bottlePath: "/images/wines/st-supery-sauvignon-blanc.png",
    category: "side",
    wineType: "Other"
  },
  {
    id: 9,
    winery: "The Vice Napa Valley",
    wineName: "2022 Carneros Pinot Noir",
    dishName: "[Extract from Vicev2.pdf]",
    description: "Pinot Noir with [dish name]",
    url: "[Extract from URLs.docx]",
    logoPath: "/images/logos/the-vice-logo.png",
    bottlePath: "/images/wines/the-vice-pinot-noir.jpg",
    category: "dessert", // or determine from recipe
    wineType: "Pinot Noir"
  }
];
```

## Quick Commands to Extract Data

```bash
# Navigate to the downloads folder
cd "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets"

# Open the URLs document (contains all recipe links)
open "RECIPE CARDS/Thanksgiving URLs.docx"

# Open each recipe PDF to see dish names
open "RECIPE CARDS/KingEstatev1.pdf"
open "RECIPE CARDS/Calcareousv2.pdf"
open "RECIPE CARDS/GloriaFerrerv1.pdf"
# ... etc

# Or open all PDFs at once
open RECIPE\ CARDS/*.pdf
```

## Missing Logos to Find:

Look in winery folders for logo files:
- King Estate: EPS file needs conversion to PNG
- Marimar Estate: Check folder for logo file
- St. Supéry: Check folder for logo file
- The Vice: Check folder for logo file
- Hestan Vineyards: May need to use Hestan Culinary logo or find specific vineyard logo

## Wine Spectator Logo:

Extract from: `Hestan Culinary (program sponsor + tips + sweepstakes)/Sweepstakes/Wine Spectator Assets.docx`

You'll need both:
- Light version (for dark hero background)
- White version (for footer)

