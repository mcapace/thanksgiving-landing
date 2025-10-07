# Asset Integration Guide

This guide will help you integrate the actual assets from `/Users/mcapace/Downloads/Thanksgiving 2025 digital assets` into your project.

## 📋 Step-by-Step Integration

### Step 1: Create Image Directories

First, ensure all necessary directories exist:

```bash
cd /Users/mcapace/Desktop/thanksgiving-landing

# Create image subdirectories if they don't exist
mkdir -p public/images/hero
mkdir -p public/images/wines
mkdir -p public/images/logos
mkdir -p public/images/giveaway
```

### Step 2: Copy Assets from Downloads

Navigate to your downloads folder and copy assets:

```bash
# Set the source directory
SOURCE_DIR="/Users/mcapace/Downloads/Thanksgiving 2025 digital assets"

# Copy hero image (adjust filename as needed)
cp "$SOURCE_DIR/hero/"*.jpg public/images/hero/hestan-hero.jpg

# Copy wine bottle images
cp "$SOURCE_DIR/wines/"*.png public/images/wines/

# Copy winery logos
cp "$SOURCE_DIR/logos/"*.png public/images/logos/

# Copy giveaway/prize images
cp "$SOURCE_DIR/giveaway/"*.jpg public/images/giveaway/

# Copy Hestan product image (if separate)
cp "$SOURCE_DIR/"hestan-product*.jpg public/images/
```

### Step 3: Verify Asset Structure

After copying, your structure should look like:

```
public/images/
├── hero/
│   └── hestan-hero.jpg
├── wines/
│   ├── king-estate-pinot-noir.png
│   ├── [other wine bottles...]
│   └── ...
├── logos/
│   ├── wine-spectator-logo.png
│   ├── wine-spectator-logo-white.png
│   ├── hestan-logo-white.png
│   ├── king-estate-logo.png
│   └── [other winery logos...]
├── giveaway/
│   └── prize-package.jpg
└── hestan-product.jpg
```

### Step 4: List All Available Assets

Run this command to see all assets you have:

```bash
# List all images in the downloads folder
find "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets" -type f \( -name "*.jpg" -o -name "*.png" \)
```

### Step 5: Update Recipe Data

Once you've copied the assets, update `data/recipes.ts` with the actual filenames. Here's a template:

```typescript
export const recipes: Recipe[] = [
  {
    id: 1,
    winery: "King Estate",
    wineName: "2023 Pinot Noir",
    dishName: "Roasted Squash & Apple Soup",
    description: "Pinot Noir with Roasted Squash & Apple Soup",
    url: "https://kingestate.com/recipe-for-roasted-estate-squash-and-apple-soup/",
    logoPath: "/images/logos/king-estate-logo.png",  // Match actual filename
    bottlePath: "/images/wines/king-estate-pinot-noir.png",  // Match actual filename
    category: "appetizer",
    wineType: "Pinot Noir"
  },
  // Add remaining 8 recipes with actual data...
];
```

## 🔍 Finding Recipe Information

If you have recipe PDFs in the assets folder, extract information:

1. **Recipe URLs**: Look for URLs in the PDFs
2. **Winery Names**: Check PDF headers or filenames
3. **Wine Details**: Look for vintage year and varietal
4. **Dish Names**: Usually in the recipe title

## 📝 Recipe Data Template

Use this checklist for each recipe:

- [ ] Winery name
- [ ] Wine name (year + varietal)
- [ ] Dish name
- [ ] Recipe URL (from PDF or winery website)
- [ ] Logo file path (verify filename)
- [ ] Bottle image file path (verify filename)
- [ ] Category (appetizer/main/side/dessert)
- [ ] Wine type (Pinot Noir/Pinot Gris/Chardonnay/Cabernet)

## 🖼️ Image Optimization Tips

### Recommended Image Sizes

**Hero Image:**
- Minimum: 1920x1080px
- Format: JPG
- Quality: 80-90%

**Wine Bottles:**
- Recommended: 400x1200px
- Format: PNG with transparency
- Keep file size under 200KB if possible

**Logos:**
- Recommended: 256x128px (or similar proportions)
- Format: PNG with transparency
- White logos for footer (on dark background)

**Giveaway Image:**
- Recommended: 1000x1000px (square)
- Format: JPG
- Quality: 80-90%

### Batch Resize (Optional)

If images are too large, use ImageMagick to batch resize:

```bash
# Install ImageMagick (if not installed)
brew install imagemagick

# Resize wine bottles
cd public/images/wines
mogrify -resize 400x1200 -quality 85 *.png

# Resize logos
cd ../logos
mogrify -resize 256x128 -quality 90 *.png
```

## ✅ Verification Checklist

After integration, verify:

- [ ] Hero image loads on homepage
- [ ] Wine Spectator logo appears in header (light version)
- [ ] All 9 wine bottle images display in recipe cards
- [ ] All 9 winery logos display in recipe cards
- [ ] Prize package image shows in IntroSection
- [ ] Prize package image shows in GiveawaySection
- [ ] White logos show in footer
- [ ] Hestan product image shows in footer
- [ ] All recipe links work (external links)
- [ ] Images are properly optimized (page loads quickly)

## 🐛 Troubleshooting

**Image not displaying:**
1. Check the exact filename (case-sensitive)
2. Verify the file is in the correct directory
3. Check file extension (.jpg vs .jpeg, .png)
4. Look for console errors in browser DevTools

**Image too large/slow loading:**
1. Compress images using online tools (TinyPNG, ImageOptim)
2. Ensure images are appropriately sized for web
3. Use Next.js Image component (already implemented)

**Wrong image showing:**
1. Clear Next.js cache: `rm -rf .next`
2. Restart dev server: `npm run dev`
3. Hard refresh browser (Cmd+Shift+R)

## 📞 Need Help?

If you encounter issues:
1. List all files: `ls -la public/images/*/`
2. Check file permissions: `chmod 644 public/images/**/*`
3. Verify paths in components match actual filenames

## 🎯 Quick Start Command

Here's a single command to help you start the asset integration:

```bash
#!/bin/bash
# Copy this into a file called copy-assets.sh and run: bash copy-assets.sh

SOURCE="/Users/mcapace/Downloads/Thanksgiving 2025 digital assets"
DEST="/Users/mcapace/Desktop/thanksgiving-landing/public/images"

echo "📦 Starting asset copy..."
echo "Source: $SOURCE"
echo "Destination: $DEST"
echo ""

# Create directories
mkdir -p "$DEST"/{hero,wines,logos,giveaway}

# List files to copy
echo "📂 Available files:"
find "$SOURCE" -type f \( -name "*.jpg" -o -name "*.png" \) -exec basename {} \;

echo ""
echo "✅ Directories created. Now manually copy files or adjust the script above."
echo "   Then update data/recipes.ts with actual recipe information."
```

Save and run:
```bash
bash copy-assets.sh
```

