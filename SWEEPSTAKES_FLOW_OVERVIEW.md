# Wine Spectator x Hestan Sweepstakes System
## Complete Flow Overview

---

## 🎯 **User Journey**

### **Step 1: Landing Page**
Users arrive at `thanksgiving.winespectator.com` and see:
- Hero section with Thanksgiving imagery
- 9 featured wine pairings with recipe cards
- Individual recipe PDFs (can email themselves any single recipe)
- Call-to-action to enter sweepstakes

---

### **Step 2: Sweepstakes Entry Form**
Users scroll to the sweepstakes section and fill out:
- **Personal Info:** First name, last name, email, phone
- **Verification:** Date of birth (must be 21+)
- **Address:** Street, city, state, ZIP
- **Consent:** Checkbox to agree to official rules (required)
- **Marketing & Data Sharing:** Required checkbox agreeing to:
  - Receive Wine Spectator newsletters and marketing emails
  - Share their information with Hestan Culinary (sweepstakes sponsor)
  - Be contacted by both Wine Spectator and Hestan Culinary

**What happens when they submit:**
1. Form validates all fields (age 21+, valid email, required fields)
2. System checks if email already entered (one entry per person)
3. Entry is saved to **Vercel KV (Upstash Redis)** - persistent database
4. System generates a unique **Entry ID** (e.g., `1a2b3c4d5e`)
5. **Verification email is sent** to the user
6. User sees success message: *"Check your email to verify your address"*

---

### **Step 3: Email Verification (Double Opt-In)**
User receives email with subject: **"Confirm Your Email - Wine Spectator x Hestan Sweepstakes"**

**Email contains:**
- Wine Spectator branding
- Explanation that clicking confirms sweepstakes entry
- Verification button: *"Confirm Email & Enter Sweepstakes"*
- Notice that link expires in 24 hours

**Security:**
- Verification link contains a **JWT token** (JSON Web Token)
- Token is cryptographically signed and tamper-proof
- Token expires after 24 hours
- One-time use only

---

### **Step 4: Confirmation & Recipe Book**
When user clicks verification link, they are redirected to a confirmation page showing:

✅ **Sweepstakes Confirmation**
- "You're Entered!" header
- Entry ID displayed
- Confirmed email address

🎁 **Prize Package Details**
- Hestan Culinary Small Polished Roaster
- Hedley & Bennett Chef Apron
- 3-Piece Mixing Bowl Set
- Total Value: $464.90
- Winner announcement date: ~December 19, 2025

🍷 **Download Recipe Book**
- Prominent download button
- **One-time use download link** (secure token)
- Expires in 7 days
- PDF contains all 9 recipes with wine pairings

📧 **Confirmation Email**
- Simultaneously sent to user's inbox
- Contains entry confirmation
- Includes same download link
- Full prize details

---

## 🔒 **Security Features**

### **Email Verification**
- **JWT tokens** prevent URL tampering
- 24-hour expiration prevents old links from working
- Double opt-in ensures valid email addresses
- Prevents spam entries

### **Recipe Book Download**
- **Unique download tokens** generated per user
- Each token can only be used **once**
- Tokens expire after **7 days**
- Prevents sharing/redistribution of download links
- Each verification generates a fresh token

### **Data Storage**
- **Vercel KV (Upstash Redis)** - enterprise-grade cloud database
- Entries persist across deployments and restarts
- Automatic backups and redundancy
- GDPR-compliant data handling

### **Sweepstakes Integrity**
- One entry per email address
- Age verification (21+ required)
- Entry timestamps recorded
- IP address logging (optional)
- Duplicate prevention

---

## 🛠️ **Technical Components**

### **Frontend (User-Facing)**
- **Next.js 15** - React framework with App Router
- **Tailwind CSS** - Modern, responsive design
- **Framer Motion** - Smooth animations
- **Form Validation** - Real-time client-side validation

### **Backend (API Routes)**
- **`/api/sweepstakes-entry`** - Handles form submission
- **`/api/verify-email`** - Processes verification links
- **`/api/download-recipes`** - Serves secure PDF downloads
- **`/api/send-recipe`** - Emails individual recipe cards
- **`/api/admin/entries`** - Admin dashboard data

### **Email System**
- **Resend API** - Professional email delivery
- **React Email** - HTML email templates
- **Custom templates:**
  - Verification Email
  - Confirmation Email with download link
  - Individual Recipe Emails

### **Data Storage**
- **Upstash Redis (Vercel KV)** - Primary database
- Stores all sweepstakes entries
- Real-time data access
- Automatic scaling

### **Security**
- **JWT (jose library)** - Token generation and verification
- **Zod** - Server-side data validation
- **Environment variables** - Secure API keys
- **HTTPS** - All traffic encrypted

---

## 👨‍💼 **Admin Dashboard**

Access: `thanksgiving.winespectator.com/admin`

**Features:**
- 🔐 Password-protected (set via environment variable)
- 📊 View all entries in real-time
- 📥 Export to CSV (opens in Excel)
- 🎲 Random winner selection
- 📈 Total entry count
- 🔍 Search and filter capabilities

**Admin Actions:**
1. **View Entries** - See all submissions with full details
2. **Export CSV** - Download all entries for record-keeping
3. **Select Winner** - Random selection tool for fair drawing
4. **Entry Verification** - Check if specific email has entered

---

## 📧 **Email Flow Summary**

### **1. Verification Email** (Immediate)
**Trigger:** User submits sweepstakes form  
**Subject:** "Confirm Your Email - Wine Spectator x Hestan Sweepstakes"  
**Purpose:** Verify email address is valid  
**Contains:** Verification link (24-hour expiration)

### **2. Confirmation Email** (After Verification)
**Trigger:** User clicks verification link  
**Subject:** "🎉 Sweepstakes Entry Confirmed + Your Recipe Book!"  
**Purpose:** Confirm entry and provide recipe book  
**Contains:**
- Entry confirmation
- Entry ID
- Prize details
- Download link for recipe book (7-day expiration)
- Official rules link

### **3. Individual Recipe Emails** (On Demand)
**Trigger:** User clicks "Email Recipe" on any wine pairing card  
**Subject:** "Your [Wine Name] Recipe from Wine Spectator"  
**Purpose:** Share individual recipes  
**Contains:**
- Recipe details
- Wine pairing notes
- Link to winery website
- PDF attachment (if available)

---

## 📊 **Data Collected**

Each sweepstakes entry includes:
- First and Last Name
- Email Address (verified via double opt-in)
- Phone Number
- Date of Birth (age verified - must be 21+)
- Full Address (Street, City, State, ZIP)
- Agreement to Official Rules (required - boolean)
- Marketing Consent (required - boolean)
  - User agrees to receive Wine Spectator marketing emails
  - User acknowledges data sharing with Hestan Culinary
- Entry Timestamp
- Unique Entry ID
- IP Address (optional)

**Important:** By entering, users explicitly consent to:
1. Receive newsletters and marketing from Wine Spectator
2. Have their information shared with Hestan Culinary
3. Be contacted by both organizations for promotional purposes

---

## ✅ **Testing Features**

### **Test Email Bypass**
- Email `mcapace@mshanken.com` bypasses duplicate check
- Allows unlimited testing without "already entered" errors
- Only affects duplicate validation, not age/field validation
- Configurable via `TEST_EMAIL` environment variable

### **Gmail Testing Tricks**
Use these variations (all go to same inbox):
- `mcapace+test1@mshanken.com`
- `mcapace+test2@mshanken.com`
- `m.capace@mshanken.com`

---

## 🚀 **Deployment**

**Platform:** Vercel  
**Domain:** `thanksgiving.winespectator.com`  
**Repository:** GitHub (auto-deploy on push to main)  
**Environment:** Production

**Environment Variables Required:**
- `RESEND_API_KEY` - Email sending
- `EMAIL_FROM` - Sender address
- `EMAIL_REPLY_TO` - Reply-to address
- `JWT_SECRET` - Token encryption
- `ADMIN_PASSWORD` - Admin dashboard access
- `UPSTASH_REDIS_REST_URL` - Database URL
- `UPSTASH_REDIS_REST_TOKEN` - Database auth
- `TEST_EMAIL` - Testing bypass email (optional)

---

## 📱 **User Experience Highlights**

### **Mobile-First Design**
- Fully responsive on all devices
- Touch-optimized buttons and forms
- Readable typography at all sizes

### **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader compatible

### **Performance**
- Optimized images (Next.js Image component)
- Lazy loading below fold
- Fast page loads (<2s)
- Smooth animations (GPU-accelerated)

### **User Feedback**
- Real-time form validation
- Clear error messages
- Success confirmations
- Loading states

---

## 📋 **Official Rules & Compliance**

**Page:** `/official-rules`

**Includes:**
- Complete terms and conditions
- Eligibility requirements (21+, US residents)
- Entry period (Oct 10 - Dec 14, 2025)
- Prize details and value
- Winner selection process
- Notification procedures
- Privacy policy
- Sponsor information

**Legal compliance:**
- No purchase necessary
- One entry per person
- Void where prohibited
- Standard sweepstakes disclaimers

---

## 🎨 **Design & Branding**

**Color Palette:**
- Wine Red: `#8B2332` (primary brand color)
- Stone tones: Neutral backgrounds
- Amber accents: Call-to-action highlights

**Typography:**
- **Headings:** Cormorant Garamond (serif, elegant)
- **Body:** Inter (sans-serif, modern)

**Imagery:**
- Professional wine bottle photography
- Food styling for recipe dishes
- Hestan cookware product shots
- Wine Spectator branding throughout

---

## 📞 **Support & Maintenance**

**Common Issues:**
- **"Already entered" error** - One entry per email (by design)
- **Verification link expired** - 24-hour limit, must re-enter
- **Download link not working** - One-time use or 7-day expiration
- **Email not received** - Check spam folder

**Admin Access:**
- Dashboard: `thanksgiving.winespectator.com/admin`
- Password: Set in Vercel environment variables
- Export entries anytime
- No entry deletion (audit trail)

---

## 🔮 **Future Enhancements (Optional)**

Potential additions if needed:
- Social sharing functionality (already built in footer)
- Additional entry methods (social follows, referrals)
- Email reminder campaigns
- Winner announcement page
- Entry statistics dashboard
- Automated winner notification emails

---

## 📝 **Quick Reference**

| Component | Technology | Purpose |
|-----------|-----------|---------|
| Frontend | Next.js 15 | User interface |
| Styling | Tailwind CSS | Responsive design |
| Database | Upstash Redis | Entry storage |
| Email | Resend API | Email delivery |
| Auth | JWT (jose) | Token security |
| Validation | Zod | Data validation |
| Hosting | Vercel | Deployment |
| Domain | thanksgiving.winespectator.com | Public URL |

---

## ✨ **Key Differentiators**

What makes this implementation special:

1. **Double Opt-In** - Email verification ensures valid entries
2. **Secure Downloads** - One-time use tokens prevent sharing
3. **Persistent Storage** - Entries saved in cloud database
4. **Professional Emails** - Branded, beautiful email templates
5. **Admin Dashboard** - Easy entry management and export
6. **Mobile-Optimized** - Perfect experience on all devices
7. **Fast & Secure** - Enterprise-grade infrastructure
8. **Compliance-Ready** - Official rules and legal protection

---

**Built with ❤️ for Wine Spectator x Hestan Culinary**

For questions or support, contact: **mcapace@mshanken.com**

