#!/bin/bash

# Wine Spectator x Hestan Thanksgiving Landing Page
# Asset Copy Script

set -e  # Exit on error

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  Wine Spectator Asset Integration${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Define paths
SOURCE_DIR="/Users/mcapace/Downloads/Thanksgiving 2025 digital assets"
PROJECT_DIR="/Users/mcapace/Desktop/thanksgiving-landing"
DEST_DIR="$PROJECT_DIR/public/images"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${YELLOW}Error: Source directory not found!${NC}"
    echo "Expected: $SOURCE_DIR"
    exit 1
fi

# Create destination directories
echo -e "${GREEN}📁 Creating destination directories...${NC}"
mkdir -p "$DEST_DIR"/{hero,wines,logos,giveaway}
echo "   ✓ Directories created"
echo ""

# Copy Hero Image (from Hestan Vineyards folder - has hero image)
echo -e "${GREEN}🖼️  Copying hero image...${NC}"
if [ -f "$SOURCE_DIR/Hestan Vineyards/HES_HN8_Roasters-&-Au-Gratins_HOSP_Marble_Turkey_Glam.png" ]; then
    cp "$SOURCE_DIR/Hestan Vineyards/HES_HN8_Roasters-&-Au-Gratins_HOSP_Marble_Turkey_Glam.png" \
       "$DEST_DIR/hero/hestan-hero.jpg"
    echo "   ✓ Hero image copied"
else
    echo "   ⚠ Hero image not found - you may need to select another image"
fi
echo ""

# Copy Wine Spectator Logos
echo -e "${GREEN}📋 Copying Wine Spectator logos...${NC}"
# Note: Wine Spectator logos need to be obtained separately or from sweepstakes folder
if [ -f "$SOURCE_DIR/Hestan Culinary (program sponsor + tips + sweepstakes)/Sweepstakes/Wine Spectator Assets.docx" ]; then
    echo "   ℹ Wine Spectator logos are in: Wine Spectator Assets.docx"
    echo "   → Please extract logos from the Word document manually"
else
    echo "   ⚠ Wine Spectator logo document not found"
fi
echo ""

# Copy Hestan Logos
echo -e "${GREEN}🏷️  Copying Hestan logos...${NC}"
cp "$SOURCE_DIR/Hestan Culinary (program sponsor + tips + sweepstakes)/Hestan Culinary Logos/Hestan_PrimaryLogo_RGB_White100.png" \
   "$DEST_DIR/logos/hestan-logo-white.png"
echo "   ✓ Hestan white logo copied"
echo ""

# Copy Wine Bottles and Winery Logos
echo -e "${GREEN}🍷 Copying wine bottles and winery logos...${NC}"

# King Estate
cp "$SOURCE_DIR/King Estate/2023-KingEstate-PinotNoir-onWhite-Front_RT2.png" \
   "$DEST_DIR/wines/king-estate-pinot-noir.png"
# Logo needs to be converted from EPS or found as PNG
echo "   ✓ King Estate wine bottle copied"
echo "   ⚠ King Estate logo is in EPS format - needs conversion"

# Calcareous
cp "$SOURCE_DIR/Calcareous Vineyard/Calcareous bottl.png" \
   "$DEST_DIR/wines/calcareous-pinot-noir.png"
cp "$SOURCE_DIR/Calcareous Vineyard/Calcareous logo.png" \
   "$DEST_DIR/logos/calcareous-logo.png"
echo "   ✓ Calcareous wine and logo copied"

# Gloria Ferrer
cp "$SOURCE_DIR/Gloria Ferrer Winery/2018-Royal-Cuvée.jpg" \
   "$DEST_DIR/wines/gloria-ferrer-sparkling.jpg"
cp "$SOURCE_DIR/Gloria Ferrer Winery/GF Logo.png" \
   "$DEST_DIR/logos/gloria-ferrer-logo.png"
echo "   ✓ Gloria Ferrer wine and logo copied"

# Hestan Vineyards
cp "$SOURCE_DIR/Hestan Vineyards/Hestan_Cabernet (1).jpg" \
   "$DEST_DIR/wines/hestan-cabernet.jpg"
echo "   ✓ Hestan Vineyards wine copied"
echo "   ⚠ Hestan Vineyards logo - using Hestan Culinary logo"

# Marimar Estate
cp "$SOURCE_DIR/Marimar Estate/ALB-.png" \
   "$DEST_DIR/wines/marimar-estate-pinot-noir.png"
echo "   ✓ Marimar Estate wine copied"
echo "   ⚠ Marimar Estate logo needs to be located"

# McIntyre Vineyards
# Find the wine bottle (look for .png files)
find "$SOURCE_DIR/McIntyre Vineyards" -name "*.png" -type f | head -1 | while read file; do
    cp "$file" "$DEST_DIR/wines/mcintyre-pinot-gris.png"
done
cp "$SOURCE_DIR/McIntyre Vineyards/McIntyre Family Wines New Logo.jpg" \
   "$DEST_DIR/logos/mcintyre-logo.jpg"
echo "   ✓ McIntyre wine and logo copied"

# Pine Ridge
cp "$SOURCE_DIR/Pine Ridge Vineyards/Pine-Ridge-NV-Cabernet_NV.png" \
   "$DEST_DIR/wines/pine-ridge-cabernet.png"
cp "$SOURCE_DIR/Pine Ridge Vineyards/logo-Pine-Ridge-Vineyards.jpeg" \
   "$DEST_DIR/logos/pine-ridge-logo.jpeg"
echo "   ✓ Pine Ridge wine and logo copied"

# St. Supéry
cp "$SOURCE_DIR/St. Supéry Estate Vineyards & Winery/2023-StSupery-Dollarhide-SauvBlanc-onWhite_RT-scaled.png" \
   "$DEST_DIR/wines/st-supery-sauvignon-blanc.png"
echo "   ✓ St. Supéry wine copied"
echo "   ⚠ St. Supéry logo needs to be located"

# The Vice
cp "$SOURCE_DIR/The Vice Napa Valley/22_Carneros_PN_Front.jpg" \
   "$DEST_DIR/wines/the-vice-pinot-noir.jpg"
echo "   ✓ The Vice wine copied"
echo "   ⚠ The Vice logo needs to be located"

echo ""

# Copy Giveaway/Prize Images
echo -e "${GREEN}🎁 Copying giveaway images...${NC}"
# Use one of the roaster images as prize package
cp "$SOURCE_DIR/Hestan Culinary (program sponsor + tips + sweepstakes)/Supporting images/Full res JPG-31788_HES_PolishedRoaster_Small_Marble_Glam_wProps.jpg" \
   "$DEST_DIR/giveaway/prize-package.jpg"

# Copy another Hestan product image for footer
cp "$SOURCE_DIR/Hestan Culinary (program sponsor + tips + sweepstakes)/Supporting images/Full res JPG-HES_Roasters_Food Glam.jpg" \
   "$DEST_DIR/hestan-product.jpg"
echo "   ✓ Giveaway images copied"
echo ""

# Summary
echo -e "${BLUE}========================================${NC}"
echo -e "${GREEN}✅ Asset copying complete!${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""
echo "Next steps:"
echo "1. Convert King Estate logo from EPS to PNG"
echo "2. Extract Wine Spectator logos from Word document"
echo "3. Find missing winery logos (check folders manually)"
echo "4. Update data/recipes.ts with actual recipe data"
echo "5. Run: npm run dev"
echo ""
echo "Files copied to: $DEST_DIR"
echo ""

