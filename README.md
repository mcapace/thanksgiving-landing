# Wine Spectator x Hestan Thanksgiving Landing Page

A beautiful, responsive landing page showcasing curated wine pairings and recipes for Thanksgiving, featuring a sweepstakes to win Hestan Culinary cookware.

## 🎨 Project Overview

This Next.js 15 application features:
- Full-screen hero section with elegant typography
- Nine curated wine and recipe pairings
- Interactive recipe filtering by wine type
- Giveaway promotion section
- Sweepstakes entry form integration
- Responsive design optimized for all devices
- Smooth animations using Framer Motion

## 🚀 Setup Instructions

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd thanksgiving-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4000` (or the port specified in your terminal)

## 📁 Project Structure

```
thanksgiving-landing/
├── app/
│   ├── layout.tsx       # Root layout with fonts and metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and theme configuration
├── components/
│   ├── Hero.tsx                 # Full-screen hero section
│   ├── IntroSection.tsx         # Introduction with giveaway preview
│   ├── RecipeCard.tsx           # Individual recipe card component
│   ├── RecipeGrid.tsx           # Recipe grid with filtering
│   ├── GiveawaySection.tsx      # Detailed giveaway promotion
│   ├── SweepstakesSection.tsx   # Sweepstakes form container
│   └── Footer.tsx               # Footer with logos and links
├── data/
│   └── recipes.ts       # Recipe data and TypeScript interfaces
└── public/
    └── images/
        ├── hero/
        │   └── hestan-hero.jpg
        ├── wines/
        │   └── [wine bottle images]
        ├── logos/
        │   ├── wine-spectator-logo.png
        │   ├── wine-spectator-logo-white.png
        │   ├── hestan-logo-white.png
        │   └── [winery logos]
        ├── giveaway/
        │   └── prize-package.jpg
        └── hestan-product.jpg
```

## 🖼️ Asset Requirements

### Required Images

**Hero Section:**
- `/images/hero/hestan-hero.jpg` (1920x1080px or larger, landscape)

**Logos:**
- `/images/logos/wine-spectator-logo.png` (white/light version for dark bg)
- `/images/logos/wine-spectator-logo-white.png` (for footer)
- `/images/logos/hestan-logo-white.png` (for footer)
- Winery logos: 9 logos at approximately 256x128px (transparent PNG)

**Wine Bottles:**
- 9 wine bottle images at approximately 400x1200px (transparent PNG)
- Naming: `[winery-name]-[wine-type].png`

**Giveaway:**
- `/images/giveaway/prize-package.jpg` (square, 1000x1000px minimum)
- `/images/hestan-product.jpg` (4:3 aspect ratio, 1200x900px)

## 🎯 Features

### 1. Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Optimized typography scaling

### 2. Animations
- Framer Motion for smooth scroll-triggered animations
- Hover effects on cards and buttons
- Staggered entrance animations

### 3. Wine Filtering
- Filter recipes by wine type (All, Pinot Noir, Pinot Gris, Chardonnay, Cabernet)
- Smooth transitions between filter states

### 4. SEO Optimization
- Semantic HTML structure
- Meta tags and Open Graph tags
- Descriptive alt text for images

### 5. Performance
- Next.js Image optimization
- Priority loading for above-fold images
- Lazy loading for below-fold content

## 🔧 Customization

### Adding/Editing Recipes

Edit `data/recipes.ts` to add or modify recipe data:

```typescript
{
  id: 1,
  winery: "Your Winery",
  wineName: "2023 Pinot Noir",
  dishName: "Your Dish Name",
  description: "Wine Type with Dish Name",
  url: "https://yourrecipe.com",
  logoPath: "/images/logos/your-winery-logo.png",
  bottlePath: "/images/wines/your-wine-bottle.png",
  category: "appetizer" | "main" | "side" | "dessert",
  wineType: "Pinot Noir" | "Pinot Gris" | "Chardonnay" | "Cabernet" | "Other"
}
```

### Integrating Viral Sweeps

1. Open `components/SweepstakesSection.tsx`
2. Locate the placeholder div (clearly marked with comments)
3. Replace the placeholder with your Viral Sweeps embed code
4. Test the form submission

### Updating Colors

Modify colors in `app/globals.css` under the `:root` and `@theme inline` sections:

```css
:root {
  --wine-red: #8B2332;
  --warm-stone: #fafaf9;
  /* Add your custom colors */
}
```

## 📦 Dependencies

- **Next.js 15** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **TypeScript** - Type safety

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Add environment variables if needed

### Build for Production

```bash
npm run build
npm start
```

## 📝 Notes

- All external recipe links open in new tabs
- Smooth scroll behavior enabled globally
- Images use Next.js Image component for optimization
- Animations trigger once on scroll into view

## 🐛 Troubleshooting

**Images not loading:**
- Verify all image paths match exactly (case-sensitive)
- Check that images are in the correct `/public/images/` subdirectories
- Ensure image file extensions are correct (.jpg, .png)

**Animations not working:**
- Check that Framer Motion is properly installed
- Verify browser supports CSS transforms

**Filter not working:**
- Ensure recipe `wineType` values match filter options exactly
- Check for typos in wine type names

## 📧 Support

For issues or questions, please contact the development team.

## 📄 License

© 2025 Wine Spectator. All rights reserved.
