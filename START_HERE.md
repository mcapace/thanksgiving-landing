# 🍷 Wine Spectator x Hestan Thanksgiving Landing Page

## 🚀 Quick Start (3 Steps)

### 1. Install & Run
```bash
cd /Users/mcapace/Desktop/thanksgiving-landing
npm install
npm run dev -- -p 4000
```
Then open: **http://localhost:4000**

### 2. Complete Missing Assets (Before Launch)

#### A. King Estate Logo (Required)
The logo is in EPS format and needs conversion:
```bash
# Location: 
# /Users/mcapace/Downloads/Thanksgiving 2025 digital assets/King Estate/KEWV Logo - blk-gld.eps

# Convert using:
# - Adobe Illustrator/Photoshop (export as PNG)
# - Online converter: convertio.co or cloudconvert.com

# Save to: public/images/logos/king-estate-logo.png
```

#### B. Wine Spectator Logos (Required)
```bash
# Open document and extract logos:
open "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets/Hestan Culinary (program sponsor + tips + sweepstakes)/Sweepstakes/Wine Spectator Assets.docx"

# Save as:
# - public/images/logos/wine-spectator-logo.png (light version)
# - public/images/logos/wine-spectator-logo-white.png (white version)
```

### 3. Update Recipe Data

#### Open the URLs document:
```bash
open "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets/RECIPE CARDS/Thanksgiving URLs.docx"
```

#### Then update `data/recipes.ts` with:
- Real recipe URLs
- Dish names from PDFs
- Any other details from recipe cards

---

## 📋 What's Already Done

### ✅ All Components Created
- Hero (full-screen with parallax)
- IntroSection (two-column layout)
- RecipeCard (hover effects)
- RecipeGrid (with filtering)
- GiveawaySection (scroll functionality)
- SweepstakesSection (ready for Viral Sweeps)
- Footer (premium branding)

### ✅ All Assets Copied
- ✓ Hero image
- ✓ All 9 wine bottles
- ✓ 8 of 9 winery logos (King Estate pending)
- ✓ Hestan logos
- ✓ Giveaway images

### ✅ Everything Else
- ✓ Responsive design (mobile/tablet/desktop)
- ✓ Smooth animations (Framer Motion)
- ✓ Wine type filtering
- ✓ SEO optimization
- ✓ Custom color theme

---

## 🎯 Features

### Interactive Elements
- **Wine Filters**: Filter recipes by Pinot Noir, Pinot Gris, Chardonnay, Cabernet
- **Hover Effects**: Cards lift and scale on hover
- **Scroll Animations**: Smooth fade-in effects as you scroll
- **"Enter Now" Button**: Smoothly scrolls to sweepstakes form

### Design
- **Elegant Typography**: Cormorant Garamond + Inter fonts
- **Wine Country Colors**: Deep red (#8B2332), stone tones, amber accents
- **Professional Polish**: Shadows, gradients, rounded corners
- **Fully Responsive**: Looks great on all devices

---

## 📝 Before Launch Checklist

- [ ] Convert King Estate logo from EPS to PNG
- [ ] Extract Wine Spectator logos from Word doc
- [ ] Update recipe URLs in `data/recipes.ts`
- [ ] Add dish names from PDF recipe cards
- [ ] Add Viral Sweeps embed code to `components/SweepstakesSection.tsx`
- [ ] Test on mobile devices
- [ ] Test all recipe links work
- [ ] Verify all images load correctly

---

## 📁 Key Files

### To Edit:
- `data/recipes.ts` - Update with real recipe data
- `components/SweepstakesSection.tsx` - Add Viral Sweeps code
- `public/images/logos/` - Add missing logos

### Documentation:
- `README.md` - Full project documentation
- `SETUP_COMPLETE.md` - Detailed setup guide
- `ASSET_INTEGRATION_GUIDE.md` - Asset copying instructions
- `RECIPE_DATA_EXTRACTION.md` - Recipe data guide

---

## 🎨 The 9 Wineries

1. **King Estate** - 2023 Pinot Noir (Roasted Squash & Apple Soup)
2. **Calcareous Vineyard** - 2023 Tres Violet Pinot Noir
3. **Gloria Ferrer Winery** - 2018 Royal Cuvée (Purple Rice Pilaf)
4. **Hestan Vineyards** - Cabernet Sauvignon (Roasted Turkey)
5. **Marimar Estate** - Pinot Noir (Seared Scallops)
6. **McIntyre Vineyards** - Pinot Gris
7. **Pine Ridge Vineyards** - Cabernet Sauvignon NV
8. **St. Supéry Estate** - 2023 Dollarhide Sauvignon Blanc
9. **The Vice Napa Valley** - 2022 Carneros Pinot Noir (Truffle Gemelli)

---

## 🐛 Troubleshooting

**Images not showing?**
```bash
# Clear Next.js cache and restart
rm -rf .next
npm run dev -- -p 4000
```

**Need to optimize large images?**
```bash
# Some wine bottles are 15-20MB
cd public/images/wines
# Use an image optimizer like ImageOptim or TinyPNG
```

**Port 4000 already in use?**
```bash
# Use a different port
npm run dev -- -p 3000
```

---

## 🚀 Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Complete Wine Spectator landing page"
git push

# Then in Vercel dashboard:
# 1. Import repository
# 2. Deploy (auto-detects Next.js)
# 3. Done!
```

---

## 📞 Quick Commands

```bash
# Start dev server
npm run dev -- -p 4000

# Open recipe URLs document
open "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets/RECIPE CARDS/Thanksgiving URLs.docx"

# View all recipe PDFs
open "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets/RECIPE CARDS"/*.pdf

# Open Wine Spectator assets
open "/Users/mcapace/Downloads/Thanksgiving 2025 digital assets/Hestan Culinary (program sponsor + tips + sweepstakes)/Sweepstakes/Wine Spectator Assets.docx"
```

---

## 🎉 That's It!

Your landing page is **95% complete**. Just add the missing logos, update the recipe data, and you're ready to launch!

**Need more details?** Check `SETUP_COMPLETE.md` for the full guide.

**Happy Thanksgiving! 🦃🍷**

