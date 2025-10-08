# 🎯 Viral Sweeps Integration - Setup Guide

## ✅ What's Already Done

1. **SweepstakesSection Component** - Updated with Viral Sweeps integration
2. **Official Rules Page** - Created at `/official-rules`
3. **SEO Metadata** - Updated for sweepstakes
4. **Brand Styling** - Ready for custom CSS

---

## 🚀 Next Steps to Complete Setup

### Step 1: Get Your Viral Sweeps Promotion ID

1. Log into your **Viral Sweeps dashboard**
2. Create a new promotion or select existing one
3. Copy your **Promotion ID** (looks like: `abc123def456`)

### Step 2: Update the Component

Open `components/SweepstakesSection.tsx` and replace:

```tsx
data-promotion-id="YOUR_PROMOTION_ID"
```

With your actual Promotion ID:

```tsx
data-promotion-id="abc123def456"
```

### Step 3: Add Custom CSS to Viral Sweeps

Go to **Viral Sweeps Dashboard → Design Tab → Custom CSS** and paste:

```css
/* Match Wine Spectator Brand */
:root {
  --vs-primary: #8B2332;
  --vs-primary-hover: #7A1F2B;
  --vs-secondary: #D97706;
  --vs-bg: #FAFAF9;
  --vs-text: #1C1917;
}

/* Form Container */
.vs-form-container {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
  background: white !important;
}

/* Headings */
h1, h2, h3, .vs-headline {
  font-family: 'Cormorant Garamond', Georgia, serif !important;
  color: var(--vs-text) !important;
}

/* Input Fields */
input[type="text"],
input[type="email"],
input[type="date"],
input[type="tel"],
select {
  border: 2px solid #D6D3D1 !important;
  border-radius: 0.5rem !important;
  padding: 0.75rem 1rem !important;
  font-size: 1rem !important;
  transition: all 0.2s !important;
}

input:focus,
select:focus {
  border-color: var(--vs-primary) !important;
  outline: none !important;
  box-shadow: 0 0 0 3px rgba(139, 35, 50, 0.1) !important;
}

/* Submit Button */
button[type="submit"],
.vs-submit-btn {
  background: var(--vs-primary) !important;
  color: white !important;
  border: none !important;
  border-radius: 0.5rem !important;
  padding: 1rem 2rem !important;
  font-size: 1.125rem !important;
  font-weight: 600 !important;
  cursor: pointer !important;
  transition: all 0.3s !important;
}

button[type="submit"]:hover,
.vs-submit-btn:hover {
  background: var(--vs-primary-hover) !important;
  transform: translateY(-2px) !important;
  box-shadow: 0 10px 25px rgba(139, 35, 50, 0.3) !important;
}

/* Checkboxes */
input[type="checkbox"] {
  accent-color: var(--vs-primary) !important;
  width: 1.25rem !important;
  height: 1.25rem !important;
}

/* Labels */
label {
  color: var(--vs-text) !important;
  font-weight: 500 !important;
}

/* Bonus Actions */
.vs-bonus-action {
  background: white !important;
  border: 2px solid #E7E5E4 !important;
  border-radius: 0.75rem !important;
  padding: 1rem !important;
  transition: all 0.3s !important;
}

.vs-bonus-action:hover {
  border-color: var(--vs-primary) !important;
  background: #FEF2F2 !important;
}

/* Success Message */
.vs-success {
  background: #DCFCE7 !important;
  border: 2px solid #86EFAC !important;
  border-radius: 0.75rem !important;
  padding: 1.5rem !important;
}

/* Hide Viral Sweeps Branding (if on paid plan) */
.vs-powered-by {
  display: none !important;
}
```

### Step 4: Configure Viral Sweeps Settings

In your Viral Sweeps dashboard:

#### General Settings
- **Campaign Name:** Wine Spectator x Hestan Thanksgiving 2025
- **Start Date:** October 14, 2025, 12:00 AM ET
- **End Date:** December 14, 2025, 11:59 PM ET
- **Timezone:** Eastern Time (ET)

#### Entry Form Fields
- ✅ First Name (Required)
- ✅ Last Name (Required)
- ✅ Email Address (Required)
- ✅ Age Verification: "I am 21 years or older" (Required)
- ✅ Official Rules: "I agree to the Official Rules" (Required, link to `/official-rules`)

#### Bonus Entry Actions (Optional)
- 📱 Share on Facebook (+5 entries)
- 🐦 Share on Twitter (+5 entries)
- 📧 Refer a Friend (+10 entries per referral)
- 📷 Follow on Instagram (+5 entries)

#### Winner Selection
- **Number of Winners:** 1
- **Selection Method:** Random
- **Winner Announcement:** ~December 19, 2025

---

## 🧪 Testing Checklist

After setup, test:

- [ ] Viral Sweeps widget loads correctly
- [ ] Form submission works
- [ ] Prize details display: "Hestan Culinary Holiday Prize Package - $464.90"
- [ ] Campaign dates show: Oct 14 - Dec 14, 2025
- [ ] Official Rules link works
- [ ] Mobile responsive
- [ ] All colors match Wine Spectator brand (#8B2332)
- [ ] Bonus actions track correctly
- [ ] Referral links generate properly
- [ ] Thank you page displays after entry

---

## 📊 Campaign Timeline

| Date | Event |
|------|-------|
| **Oct 14, 2025** | Campaign Launch (12:00 AM ET) |
| **Dec 14, 2025** | Campaign End (11:59 PM ET) |
| **~Dec 19, 2025** | Winner Selected |
| **Within 5 days** | Winner Notified by Email |
| **7 days** | Winner Must Respond & Return Forms |
| **6-8 weeks** | Prize Ships After Verification |

---

## 🚀 Deploy Commands

```bash
# Test locally first
npm run dev

# When ready, deploy
git add .
git commit -m "Add Viral Sweeps integration for Thanksgiving campaign"
git push origin main

# Vercel will auto-deploy if connected
# Or manually:
vercel --prod
```

---

## 📞 Support

- **Viral Sweeps Documentation:** https://help.viralsweep.com
- **Wine Spectator Contact:** mcapace@mshanken.com

---

## 🎁 Prize Package Details

**Hestan Culinary Holiday Prize Package**
- Small Polished Roaster
- Hedley & Bennett Chef Apron
- 3-Piece Mixing Bowl Set

**Total Value:** $464.90

---

## 📝 Important Notes

1. **Legal:** Ensure all Official Rules comply with your state/federal laws
2. **Age Gate:** Must be 21+ (wine/alcohol related)
3. **Privacy:** All entries subject to Wine Spectator Privacy Policy
4. **No Purchase:** Must be clearly stated throughout
5. **Taxes:** Winner responsible for all taxes

---

## ✨ Ready to Launch?

Once you've completed Steps 1-3 above:

1. Test on localhost: `npm run dev`
2. Verify everything works
3. Push to production: `git push && vercel --prod`
4. Monitor entries in Viral Sweeps dashboard
5. Announce campaign on social media!

**Good luck with your campaign! 🍷**
