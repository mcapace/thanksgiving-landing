# Vercel KV Setup Guide

## 🔧 Quick Fix for "Internal Server Error"

The error happens because Vercel serverless functions can't write to regular file directories. **Vercel KV** (Redis-based storage) is the solution!

---

## 📋 Setup Steps (5 minutes)

### 1. Go to Vercel Dashboard
Visit: https://vercel.com/dashboard

### 2. Select Your Project
Click on: **thanksgiving-landing**

### 3. Go to Storage Tab
- Click **"Storage"** in the top navigation
- You'll see storage options

### 4. Create KV Database
- Click **"Create Database"**
- Select **"KV"** (Key-Value Store)
- Click **"Continue"**

### 5. Name Your Database
- Database Name: `thanksgiving-sweepstakes` (or any name)
- Region: **Choose closest to your users** (e.g., Washington, D.C. - East)
- Click **"Create"**

### 6. Connect to Project
- After creation, you'll see your new KV database
- Click **"Connect to Project"**
- Select: **thanksgiving-landing**
- Environment: **All** (Production, Preview, Development)
- Click **"Connect"**

### 7. Redeploy
**Option A - Automatic:**
- Vercel will ask if you want to redeploy
- Click **"Redeploy"**

**Option B - Manual:**
- Go to **Deployments** tab
- Click the **three dots (...)** on latest deployment
- Click **"Redeploy"**

---

## ✅ That's It!

After the deployment finishes (~1 minute), your sweepstakes form will work perfectly!

**Test it:**
1. Submit a test entry
2. Go to `/admin` (password: `winespec2025`)
3. Your entry will appear! 🎉

---

## 🎯 What Vercel KV Does

- ✅ **Persistent storage** - Data survives deployments
- ✅ **Fast Redis** - Sub-millisecond reads/writes
- ✅ **Serverless-friendly** - Designed for Vercel
- ✅ **Free tier** - Up to 30,000 commands/month
- ✅ **Automatic backups** - Vercel handles it
- ✅ **No maintenance** - Fully managed

---

## 💰 Pricing

**Free Tier** (Hobby plan):
- 256 MB storage
- 30,000 commands/month
- Perfect for your sweepstakes!

**Pro Plan** (if you need more):
- 512 MB storage
- 1,000,000 commands/month
- $10/month

For this sweepstakes, **free tier is more than enough**.

---

## 🔍 Verify It's Working

### Check Environment Variables
After connecting KV, these should auto-populate:
- `KV_URL`
- `KV_REST_API_URL`
- `KV_REST_API_TOKEN`
- `KV_REST_API_READ_ONLY_TOKEN`

**To verify:**
1. Go to **Settings** > **Environment Variables**
2. You should see the KV variables listed
3. They're automatically set by Vercel

### Check Database
1. Go to **Storage** tab
2. Click on your KV database
3. You'll see a data browser
4. After entries are submitted, you can view them here

---

## 🆘 Troubleshooting

### Still getting "Internal Server Error"?
1. Make sure KV database is **connected to project**
2. Make sure you **redeployed** after connecting
3. Check **Vercel logs** for specific error messages
4. Verify environment variables are set

### Can't find Storage tab?
- Make sure you're on a **Hobby** or **Pro** plan
- Free plans might not have Storage access
- Upgrade if needed (still free tier available)

### Need to check logs?
1. Go to **Deployments**
2. Click on latest deployment
3. Click **"Functions"** tab
4. Click on any function to see logs
5. Look for error messages

---

## 📊 Monitor Usage

### View KV Usage:
1. Go to **Storage** tab
2. Click on your KV database
3. See:
   - Storage used
   - Commands per day
   - Request count

You're unlikely to hit limits with a sweepstakes!

---

## 🔒 Security

Vercel KV is secure by default:
- ✅ Encrypted connections
- ✅ Automatic authentication
- ✅ Environment variables protected
- ✅ No public access

Only your Vercel functions can access the data.

---

## 📞 Support

If you run into issues:

1. **Vercel Documentation**: https://vercel.com/docs/storage/vercel-kv
2. **Vercel Support**: support@vercel.com
3. **Check Logs**: Vercel Dashboard > Deployments > Functions

---

## 🎊 After Setup

Your sweepstakes will:
- ✅ Accept entries without errors
- ✅ Store entries permanently
- ✅ Show entries in admin panel
- ✅ Export to CSV
- ✅ Support winner selection

**You're all set!** 🍷✨

