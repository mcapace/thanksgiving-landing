export interface Recipe {
  id: number;
  winery: string;
  wineName: string;
  dishName: string;
  description: string;
  url: string;
  logoPath: string;
  bottlePath: string;
  recipePath?: string; // Recipe dish image path
  category: 'appetizer' | 'main' | 'side' | 'dessert';
  wineType: 'Pinot Noir' | 'Pinot Gris' | 'Chardonnay' | 'Cabernet' | 'Other';
  pdfPath?: string; // Optional PDF download path
}

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
    recipePath: "/images/recipes-food/King Estate Recipe.jpg",
    category: "appetizer",
    wineType: "Pinot Noir",
    pdfPath: "/recipes/KingEstatev1.pdf"
  },
  {
    id: 2,
    winery: "Calcareous Vineyard",
    wineName: "2023 Tres Violet Pinot Noir",
    dishName: "Mushroom and Leek Stuffing",
    description: "Pinot Noir with Mushroom and Leek Stuffing",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/calcareous-logo.png",
    bottlePath: "/images/wines/Calcareous.png",
    recipePath: "/images/recipes-food/Calcareous Recipe.jpg",
    category: "side",
    wineType: "Pinot Noir",
    pdfPath: "/recipes/Calcareousv2.pdf"
  },
  {
    id: 3,
    winery: "Gloria Ferrer Winery",
    wineName: "2018 Royal Cuvée",
    dishName: "Autumn Harvest Purple Rice Pilaf",
    description: "Sparkling Wine with Autumn Harvest Purple Rice Pilaf",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/gloria-ferrer-logo.png",
    bottlePath: "/images/wines/gloria-ferrer-sparkling.png",
    recipePath: "/images/recipes-food/Gloria Ferrer Recipe.png",
    category: "side",
    wineType: "Other",
    pdfPath: "/recipes/GloriaFerrerv1.pdf"
  },
  {
    id: 4,
    winery: "Hestan Vineyards",
    wineName: "Cabernet Sauvignon",
    dishName: "Roasted Turkey", // Based on Hestan turkey recipe.docx
    description: "Cabernet with Roasted Turkey",
    url: "https://example.com/recipe", // Update from Hestan url + email subject line.docx
    logoPath: "/images/logos/hestan-vineyards-logo.jpg",
    bottlePath: "/images/wines/hestan-cabernet.jpg",
    recipePath: "/images/recipes-food/Hestan Recipe.png",
    category: "main",
    wineType: "Cabernet"
    // No PDF available
  },
  {
    id: 5,
    winery: "Marimar Estate",
    wineName: "Pinot Noir",
    dishName: "Scallops with Caramelized Onions (Petxina de Pelegrí)",
    description: "Pinot Noir with Scallops with Caramelized Onions",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/marimar-estate-logo.jpg",
    bottlePath: "/images/wines/marimar-estate-pinot-noir.png",
    recipePath: "/images/recipes-food/Marimar Estate Recipe.jpg",
    category: "appetizer",
    wineType: "Pinot Noir",
    pdfPath: "/recipes/Marimarv2.pdf"
  },
  {
    id: 6,
    winery: "McIntyre Vineyards",
    wineName: "Pinot Gris",
    dishName: "Herb Marinated Lamb Chops: 'Scott Chops'",
    description: "Pinot Gris with Herb Marinated Lamb Chops",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/mcintyre-logo.jpg",
    bottlePath: "/images/wines/mcintyre-pinot-gris.jpeg",
    recipePath: "/images/recipes-food/McIntyre Recipe.png",
    category: "main",
    wineType: "Pinot Gris",
    pdfPath: "/recipes/McIntyrev3.pdf"
  },
  {
    id: 7,
    winery: "Pine Ridge Vineyards",
    wineName: "Cabernet Sauvignon NV",
    dishName: "Cranberry Fig Chutney",
    description: "Cabernet with Cranberry Fig Chutney",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/pine-ridge-logo.jpeg",
    bottlePath: "/images/wines/pine-ridge-cabernet.png",
    // No recipe image available
    category: "side",
    wineType: "Cabernet",
    pdfPath: "/recipes/PineRidgev2.pdf"
  },
  {
    id: 8,
    winery: "St. Supéry Estate",
    wineName: "2023 Dollarhide Sauvignon Blanc",
    dishName: "Potato Pavé",
    description: "Sauvignon Blanc with Potato Pavé",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx
    logoPath: "/images/logos/st-supery-logo.png",
    bottlePath: "/images/wines/St Supery Bottle.png",
    recipePath: "/images/recipes-food/St Supery Recipe.jpg",
    category: "side",
    wineType: "Other",
    pdfPath: "/recipes/StSuperyv2.pdf"
  },
  {
    id: 9,
    winery: "The Vice Napa Valley",
    wineName: "2022 Carneros Pinot Noir",
    dishName: "Truffle Gemelli with Parmesan & Corn Béchamel",
    description: "Pinot Noir with Truffle Gemelli",
    url: "https://example.com/recipe", // Update from RECIPE CARDS/Thanksgiving URLs.docx or Vicev2.pdf
    logoPath: "/images/logos/the-vice-logo.png",
    bottlePath: "/images/wines/Vice.png",
    recipePath: "/images/recipes-food/The Vice Recipe.jpg",
    category: "side",
    wineType: "Pinot Noir",
    pdfPath: "/recipes/Vicev2.pdf"
  }
];

