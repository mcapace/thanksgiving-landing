# Vercel Environment Variables Setup

## Quick Setup (via Vercel Dashboard - EASIEST)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: `thanksgiving-landing`
3. Go to **Settings** → **Environment Variables**
4. Add these 4 variables:

### Variable 1: RESEND_API_KEY
- **Name**: `RESEND_API_KEY`
- **Value**: `re_Mf66JJBc_Cie1ZcY57eY6MkkQrjQut7C5`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### Variable 2: EMAIL_FROM
- **Name**: `EMAIL_FROM`
- **Value**: `Wine Spectator <onboarding@resend.dev>`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### Variable 3: EMAIL_REPLY_TO
- **Name**: `EMAIL_REPLY_TO`
- **Value**: `info@winespectator.com`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

### Variable 4: JWT_SECRET
- **Name**: `JWT_SECRET`
- **Value**: `H8Kx9mP2vN5wQ7jR3tY6zL4nS1dF0gB8cV5xM2pW9qT7hJ3kN6yL4mR1sD0fG8`
- **Environments**: ✅ Production, ✅ Preview, ✅ Development

5. Click **Save** on each variable
6. Redeploy your site (Vercel will prompt you or go to Deployments → click "..." → "Redeploy")

---

## Alternative: CLI Method

```bash
# Link project first
vercel link

# Add environment variables
vercel env add RESEND_API_KEY
# Paste: re_Mf66JJBc_Cie1ZcY57eY6MkkQrjQut7C5

vercel env add EMAIL_FROM
# Paste: Wine Spectator <onboarding@resend.dev>

vercel env add EMAIL_REPLY_TO
# Paste: info@winespectator.com

vercel env add JWT_SECRET
# Paste: H8Kx9mP2vN5wQ7jR3tY6zL4nS1dF0gB8cV5xM2pW9qT7hJ3kN6yL4mR1sD0fG8

# Redeploy
vercel --prod
```

---

## Testing Email Functionality

Once environment variables are added and site is redeployed:

### Test 1: Individual Recipe Email
1. Visit your site
2. Scroll to any recipe card
3. Click **"Email Recipe"** button
4. Enter your email address
5. Check your inbox - you should receive the recipe email instantly

### Test 2: Full Recipe Book (Double Opt-in)
1. Visit your site
2. Scroll to the intro section
3. Enter your email in the **"Get the Complete Recipe Book"** form
4. Click "Send Me the Recipe Book"
5. Check your inbox for verification email
6. Click the verification link in the email
7. You'll be redirected to a success page
8. Check your inbox again for the welcome email with all 9 recipes

---

## Important Notes

### Resend Onboarding Domain
Currently using `onboarding@resend.dev` which is Resend's test domain. This is perfect for testing but emails may go to spam.

**For production**, you should:
1. Add your domain to Resend: https://resend.com/domains
2. Add DNS records (SPF, DKIM, DMARC)
3. Wait for verification (~15-30 minutes)
4. Update `EMAIL_FROM` to: `Wine Spectator <noreply@winespectator.com>`

### Rate Limits (Resend Free Tier)
- 100 emails/day
- 3,000 emails/month

### Email Verification Storage
Currently, verified emails are stored in memory (will reset on each deployment). For production, consider integrating:
- Postgres (Vercel Postgres, Supabase)
- MongoDB (MongoDB Atlas)
- Redis (Upstash)

---

## Troubleshooting

### "Failed to send email"
- Check that RESEND_API_KEY is correctly set in Vercel
- Verify the API key is active in Resend dashboard
- Check Resend dashboard for error logs

### Emails going to spam
- Verify your domain in Resend (for production)
- Add SPF, DKIM, DMARC DNS records
- Use a professional sender address

### "Token verification failed"
- JWT_SECRET must be the same across all deployments
- Tokens expire after 24 hours
- Make sure JWT_SECRET is set in Vercel

### Verification link broken
- Check that NEXT_PUBLIC_SITE_URL is set correctly (optional)
- Verification links use the request origin automatically

---

## Next Steps

1. ✅ Add environment variables to Vercel (see above)
2. ✅ Redeploy the site
3. ✅ Test both email flows
4. ⏳ Consider upgrading to custom domain for production
5. ⏳ Add database for verified email storage
6. ⏳ Monitor email deliverability in Resend dashboard

