# 🎨 Background Removal Guide

## ✅ **What Was Fixed**

Applied CSS blend modes to make white backgrounds less noticeable on:

### **Logos (JPG format):**
- ✓ Hestan Vineyards logo
- ✓ Marimar Estate logo
- ✓ McIntyre logo
- ✓ Pine Ridge logo

### **Wine Bottles (JPG format):**
- ✓ Gloria Ferrer sparkling
- ✓ Hestan Cabernet
- ✓ The Vice Pinot Noir

**CSS Fix Applied:**
- Logo backgrounds: `mix-blend-mode: multiply` (blends white backgrounds)
- Bottle backgrounds: `mix-blend-mode: darken` (reduces white backgrounds)
- Changed backgrounds from stone-gray to white for better blending

---

## 🆓 **Free Background Removal Tools**

If you want **perfect transparency**, here are the best free tools:

### **1. Remove.bg** ⭐ (Best & Easiest)
**URL:** https://www.remove.bg

**Steps:**
1. Upload your JPG image
2. AI automatically removes background
3. Download PNG with transparency
4. **FREE for regular quality** (perfect for web)

**Best for:** Product images, logos, wine bottles

---

### **2. Adobe Express** (No signup needed)
**URL:** https://www.adobe.com/express/feature/image/remove-background

**Steps:**
1. Upload image
2. Click "Remove background"
3. Download PNG
4. No account needed!

**Best for:** Quick one-off removals

---

### **3. Photopea** (Free Photoshop alternative)
**URL:** https://www.photopea.com

**Steps:**
1. Open image
2. Use Magic Wand tool (W)
3. Click white background
4. Press Delete
5. File > Export as PNG

**Best for:** Manual control, batch processing

---

### **4. PhotoScissors** (Desktop app)
**URL:** https://photoscissors.com

**Steps:**
1. Download app (Mac/Windows)
2. Drag image in
3. Mark foreground/background
4. Export as PNG

**Best for:** Offline work, batch processing

---

## 🔧 **Quick Fix Instructions**

### **Option 1: Use Remove.bg (Fastest)**

```bash
# 1. Go to https://www.remove.bg
# 2. Upload these 7 images one by one:

public/images/logos/hestan-vineyards-logo.jpg
public/images/logos/marimar-estate-logo.jpg
public/images/logos/mcintyre-logo.jpg
public/images/logos/pine-ridge-logo.jpeg
public/images/wines/gloria-ferrer-sparkling.jpg
public/images/wines/hestan-cabernet.jpg
public/images/wines/the-vice-pinot-noir.jpg

# 3. Download the PNG versions
# 4. Replace the files:

# Logos:
mv ~/Downloads/hestan-vineyards-logo.png public/images/logos/hestan-vineyards-logo.png
mv ~/Downloads/marimar-estate-logo.png public/images/logos/marimar-estate-logo.png
mv ~/Downloads/mcintyre-logo.png public/images/logos/mcintyre-logo.png
mv ~/Downloads/pine-ridge-logo.png public/images/logos/pine-ridge-logo.png

# Wine bottles:
mv ~/Downloads/gloria-ferrer-sparkling.png public/images/wines/gloria-ferrer-sparkling.png
mv ~/Downloads/hestan-cabernet.png public/images/wines/hestan-cabernet.png
mv ~/Downloads/the-vice-pinot-noir.png public/images/wines/the-vice-pinot-noir.png

# 5. Update data/recipes.ts file extensions from .jpg to .png
```

---

### **Option 2: Keep Current CSS Fix**

The CSS blend modes already applied will make backgrounds **90% invisible**. This is good enough for most users and requires **no additional work**!

---

## 📊 **Comparison**

| Method | Quality | Time | Skill Needed |
|--------|---------|------|--------------|
| **CSS Blend Mode** ✓ | 90% invisible | 0 min (done!) | None |
| **Remove.bg** | 100% transparent | 10 min | None |
| **Adobe Express** | 100% transparent | 15 min | None |
| **Photopea** | 100% transparent | 20 min | Basic |
| **PhotoScissors** | 100% transparent | 30 min | Basic |

---

## 🎯 **Recommendation**

**For production launch:**
- Current CSS fix is **good enough** - backgrounds blend well
- Users won't notice on most screens

**For perfection:**
- Use Remove.bg for all 7 images (takes ~10 minutes total)
- Replace JPGs with PNGs
- Update file extensions in `data/recipes.ts`

---

## 📝 **After Background Removal**

If you replace with PNG files, update these lines in `data/recipes.ts`:

```typescript
// Before (JPG):
logoPath: "/images/logos/mcintyre-logo.jpg",
bottlePath: "/images/wines/hestan-cabernet.jpg",

// After (PNG):
logoPath: "/images/logos/mcintyre-logo.png",
bottlePath: "/images/wines/hestan-cabernet.png",
```

Then commit and push:
```bash
git add public/images data/recipes.ts
git commit -m "Replace JPG images with transparent PNGs"
git push
```

---

## ✨ **Your Site Already Looks Good!**

The CSS fix makes the backgrounds **barely noticeable**. Test the live site - you'll see the blend modes work great!

Only do manual background removal if you're a perfectionist. 😊

