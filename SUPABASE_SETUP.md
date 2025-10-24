# Supabase Setup Guide for Analytics

## 🚀 Quick Setup (5 minutes)

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click **"Start your project"**
3. Sign up/Login with GitHub
4. Click **"New Project"**
5. **Organization**: Choose your organization
6. **Name**: `thanksgiving-analytics` (or any name)
7. **Database Password**: Generate a strong password (save it!)
8. **Region**: Choose closest to your users
9. Click **"Create new project"**

### 2. Get Your Credentials

Once your project is created:

1. Go to **Settings** → **API**
2. Copy these values:
   - **Project URL** (looks like: `https://your-project.supabase.co`)
   - **Service Role Key** (starts with `eyJ...`)

### 3. Set Up Database Schema

1. Go to **SQL Editor** in your Supabase dashboard
2. Click **"New Query"**
3. Copy and paste the contents of `supabase-schema.sql`
4. Click **"Run"**

### 4. Add Environment Variables to Vercel

1. Go to your Vercel dashboard
2. Select your project: `thanksgiving-landing`
3. Go to **Settings** → **Environment Variables**
4. Add these 2 variables:

**Variable 1: NEXT_PUBLIC_SUPABASE_URL**
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://your-project.supabase.co` (your Project URL)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

**Variable 2: SUPABASE_SERVICE_ROLE_KEY**
- **Name**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `eyJ...` (your Service Role Key)
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### 5. Redeploy

1. **Vercel will ask if you want to redeploy** - Click "Redeploy"
2. **Or manually**: Go to Deployments → Click "..." → "Redeploy"

---

## ✅ That's It!

After deployment, your analytics will:
- ✅ **Persist permanently** - No more daily resets!
- ✅ **Store in PostgreSQL** - Reliable, scalable database
- ✅ **Work with existing code** - No changes needed to your site
- ✅ **Free tier** - 500MB database, 2GB bandwidth/month

---

## 🎯 What Supabase Gives You

### **Free Tier Includes:**
- ✅ 500MB database storage
- ✅ 2GB bandwidth/month
- ✅ 50,000 monthly active users
- ✅ Real-time subscriptions
- ✅ Built-in authentication
- ✅ Auto-scaling

### **Perfect for Analytics:**
- ✅ **PostgreSQL** - Industry standard database
- ✅ **JSONB support** - Store complex metadata
- ✅ **Real-time** - Live analytics updates
- ✅ **SQL queries** - Advanced analytics queries
- ✅ **Backups** - Automatic daily backups

---

## 🔍 Verify It's Working

### Check Database:
1. Go to **Table Editor** in Supabase
2. Click on **`analytics_events`** table
3. After some activity, you should see events appearing

### Check Environment Variables:
1. Go to **Settings** → **Environment Variables** in Vercel
2. You should see:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`

### Test Analytics:
1. Visit your site
2. Download a recipe or enter sweepstakes
3. Go to `/admin/analytics`
4. Data should persist and not reset!

---

## 🆘 Troubleshooting

### "Failed to connect to Supabase"
- Check that environment variables are set correctly
- Verify your Supabase project is active
- Check Vercel logs for specific error messages

### "Table doesn't exist"
- Make sure you ran the SQL schema in Supabase SQL Editor
- Check that the table name is exactly `analytics_events`

### "Permission denied"
- Make sure you're using the **Service Role Key** (not the anon key)
- Check that RLS policies are set up correctly

---

## 📊 Advanced Features (Optional)

### Real-time Analytics:
```typescript
// Subscribe to new analytics events
const subscription = supabase
  .channel('analytics_events')
  .on('postgres_changes', 
    { event: 'INSERT', schema: 'public', table: 'analytics_events' },
    (payload) => console.log('New event:', payload.new)
  )
  .subscribe();
```

### Custom Queries:
```sql
-- Get top recipes by downloads
SELECT 
  metadata->>'recipeName' as recipe,
  metadata->>'winery' as winery,
  COUNT(*) as downloads
FROM analytics_events 
WHERE type = 'pdf_download' 
  AND metadata->>'pdfType' = 'individual_recipe'
GROUP BY recipe, winery
ORDER BY downloads DESC;
```

---

## 💰 Pricing

**Free Tier** (Perfect for your project):
- 500MB database
- 2GB bandwidth/month
- 50,000 monthly active users
- 2GB file storage

**Pro Plan** (if you need more):
- $25/month
- 8GB database
- 250GB bandwidth/month
- 100,000 monthly active users
- 100GB file storage

For a Thanksgiving landing page, **free tier is more than enough**!

---

## 🎊 After Setup

Your analytics will:
- ✅ **Never reset** - Data persists forever
- ✅ **Scale automatically** - Handles any traffic
- ✅ **Query with SQL** - Advanced analytics
- ✅ **Real-time updates** - Live dashboard
- ✅ **Automatic backups** - Never lose data

**You're all set!** 🍷✨
