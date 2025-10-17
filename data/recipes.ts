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
    wineName: "Estate Pinot Noir",
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
    wineName: "2023 Tres Violets Red Blend",
    dishName: "Mushroom and Leek Stuffing",
    description: "Tres Violets Red Blend with Mushroom and Leek Stuffing",
    url: "https://www.calcareous.com/thanksgiving-wine/?utm_source=winespectator&utm_medium=email&utm_campaign=thanksgiving",
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
    url: "https://www.gloriaferrer.com/fall-recipe-with-the-2018-royal-cuvee/",
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
    wineName: "Thomas Rivers Brown Cabernet Sauvignon",
    dishName: "Thanksgiving Roast Turkey",
    description: "Cabernet with Thanksgiving Roast Turkey",
    url: "https://www.hestanvineyards.com/",
    logoPath: "/images/logos/hestan-vineyards-logo.jpg",
    bottlePath: "/images/wines/hestan-cabernet-transparent.png",
    recipePath: "/images/recipes-food/Hestan Recipe.png",
    category: "main",
    wineType: "Cabernet",
    pdfPath: "/recipes/Hestanv4.pdf"
  },
  {
    id: 5,
    winery: "Marimar Estate",
    wineName: "2024 Don Miguel Vineyard Albariño",
    dishName: "Scallops with Caramelized Onions (Petxina de Pelegrí)",
    description: "Don Miguel Vineyard Albariño with Scallops",
    url: "https://www.marimarestate.com/Wines/Current-Releases",
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
    wineName: "McIntyre Family Pinot Noir",
    dishName: "Herb Marinated Lamb Chops: 'Scott Chops'",
    description: "McIntyre Family Pinot Noir with Herb Marinated Lamb Chops",
    url: "https://www.mcintyrevineyards.com/",
    logoPath: "/images/logos/mcintyre-logo.jpg",
    bottlePath: "/images/wines/McIntyre_bottle-1.png",
    recipePath: "/images/recipes-food/McIntyre Recipe.png",
    category: "main",
    wineType: "Pinot Gris",
    pdfPath: "/recipes/McIntyrev3.pdf"
  },
  {
    id: 7,
    winery: "Pine Ridge Vineyards",
    wineName: "Cabernet Sauvignon",
    dishName: "Cranberry Fig Chutney",
    description: "Cabernet Sauvignon with Cranberry Fig Chutney",
    url: "https://www.pineridgevineyards.com/wine/2023-napa-valley-cabernet-sauvignon/",
    logoPath: "/images/logos/pine-ridge-logo.jpeg",
    bottlePath: "/images/wines/pine-ridge-cabernet.png",
    recipePath: "/images/recipes-food/Pine Ridge Recipe.jpg",
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
    url: "https://www.stsupery.com/thanksgiving-meal-checklist-enjoyment/",
    logoPath: "/images/logos/st-supery-logo.png",
    bottlePath: "/images/wines/St Supery Bottle.png",
    recipePath: "/images/recipes-food/St Supery Recipe.jpg",
    category: "side",
    wineType: "Other",
    pdfPath: "/recipes/StSuperyvNEW1.pdf"
  },
  {
    id: 9,
    winery: "The Vice Napa Valley",
    wineName: "2022 'Torie's Vineyard' Los Carneros Pinot Noir",
    dishName: "Truffle Gemelli with Parmesan & Corn Béchamel",
    description: "Pinot Noir with Truffle Gemelli",
    url: "https://www.thevicewine.com/product#/toriespinot",
    logoPath: "/images/logos/the-vice-logo.png",
    bottlePath: "/images/wines/Vice.png",
    recipePath: "/images/recipes-food/The Vice Recipe.jpg",
    category: "side",
    wineType: "Pinot Noir",
    pdfPath: "/recipes/ViceNEW.pdf"
  }
];

