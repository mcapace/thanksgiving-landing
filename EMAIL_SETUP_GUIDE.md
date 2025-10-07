# Email Functionality Setup Guide

This guide will help you set up the email functionality for the Wine Spectator Thanksgiving landing page, including individual recipe emails and double opt-in verification for the full recipe book.

## Overview

The site now has three email features:
1. **Individual Recipe Emails** - Users can email themselves a specific recipe
2. **Full Recipe Book with Double Opt-in** - Users enter their email, receive a verification email, then get all 9 recipes
3. **Welcome Email** - Sent after email verification with links to all recipes

## Prerequisites

1. **Resend Account** - Sign up at [resend.com](https://resend.com/signup)
2. **Domain Verification** (for production) - Verify your domain in Resend
3. **Node.js & npm** - Already installed

## Step 1: Get Your Resend API Key

1. Go to [resend.com/api-keys](https://resend.com/api-keys)
2. Click "Create API Key"
3. Give it a name (e.g., "Thanksgiving Landing Page")
4. Copy the API key

## Step 2: Set Up Environment Variables

1. Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

2. Edit `.env.local` and add your values:

```env
# Your Resend API key
RESEND_API_KEY=re_your_actual_api_key_here

# Email sender (for production, use your verified domain)
EMAIL_FROM="Wine Spectator <noreply@yourdomain.com>"
EMAIL_REPLY_TO="info@winespectator.com"

# JWT secret (generate with: openssl rand -base64 32)
JWT_SECRET=your_generated_secret_here

# Your site URL
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
```

### Generate JWT Secret

Run this command to generate a secure JWT secret:

```bash
openssl rand -base64 32
```

Copy the output and paste it as your `JWT_SECRET`.

## Step 3: Domain Verification (Production Only)

For development, you can use Resend's test domain: `onboarding@resend.dev`

For production:

1. Go to [resend.com/domains](https://resend.com/domains)
2. Click "Add Domain"
3. Enter your domain (e.g., `winespectator.com`)
4. Add the DNS records provided by Resend to your domain's DNS settings
5. Wait for verification (usually 15-30 minutes)
6. Update `EMAIL_FROM` to use your verified domain

## Step 4: Test Locally

1. Start the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000)

3. Test the email features:
   - **Recipe Email**: Click "Email Recipe" on any recipe card
   - **Full Book**: Fill out the email form in the intro section

## Step 5: Deploy to Vercel

1. Add environment variables to Vercel:

```bash
vercel env add RESEND_API_KEY
vercel env add EMAIL_FROM
vercel env add EMAIL_REPLY_TO
vercel env add JWT_SECRET
vercel env add NEXT_PUBLIC_SITE_URL
```

2. Redeploy:

```bash
git push
```

Vercel will automatically redeploy with the new environment variables.

## Email Flow Diagrams

### Individual Recipe Email Flow

```
User clicks "Email Recipe"
  ↓
Enters email in prompt
  ↓
API sends recipe email via Resend
  ↓
User receives recipe in inbox
```

### Full Recipe Book Flow (Double Opt-in)

```
User enters email in form
  ↓
API sends verification email
  ↓
User receives verification email
  ↓
User clicks verification link
  ↓
API verifies token
  ↓
API sends welcome email with all recipes
  ↓
User redirected to success page
```

## Email Templates

All email templates are in `/lib/email-templates.tsx`:

1. **RecipeEmail** - Individual recipe email
2. **VerificationEmail** - Double opt-in confirmation email
3. **WelcomeEmail** - Welcome email after verification

You can customize these templates by editing the file.

## API Routes

Three API routes handle email functionality:

1. **`/api/send-recipe`** - Sends individual recipe emails
2. **`/api/subscribe`** - Sends verification email for full book
3. **`/api/verify-email`** - Verifies email and sends welcome email

## Customization

### Change Email Styles

Edit `/lib/email-templates.tsx` to customize the HTML/CSS of emails.

### Change Verification Token Expiry

Edit `/lib/email-verification.ts`:

```typescript
.setExpirationTime('24h') // Change to '12h', '48h', etc.
```

### Add Database Storage

Currently, verified emails are stored in memory. For production, integrate a database:

1. Replace `email-verification.ts` with database calls
2. Options: Postgres, MongoDB, Supabase, etc.

## Troubleshooting

### "Failed to send email"

- Check that `RESEND_API_KEY` is set correctly
- Verify your domain in Resend (for production)
- Check Resend dashboard for error logs

### "Token verification failed"

- JWT_SECRET must be the same between sending and verifying
- Tokens expire after 24 hours
- Check that the full verification URL is being used

### Emails going to spam

- Verify your domain in Resend
- Add SPF, DKIM, and DMARC records
- Use a professional "from" address
- Avoid spam trigger words

## Development vs Production

### Development (localhost)
- Use `onboarding@resend.dev` as sender
- Emails work but may go to spam
- Perfect for testing

### Production (vercel.app or custom domain)
- Verify your domain in Resend
- Use your verified domain as sender
- Professional email deliverability

## Rate Limits

Resend free tier includes:
- **100 emails/day**
- **3,000 emails/month**

For higher volume, upgrade your Resend plan.

## Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Rotate JWT_SECRET** if exposed
3. **Use strong, random JWT_SECRET** (minimum 32 characters)
4. **Enable rate limiting** for production (consider using Upstash or similar)

## Next Steps

1. ✅ Set up Resend account
2. ✅ Add environment variables
3. ✅ Test locally
4. ✅ Deploy to Vercel
5. ⏳ Monitor email deliverability
6. ⏳ Consider database integration for verified emails
7. ⏳ Add rate limiting for API routes

## Support

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Resend Support**: [resend.com/support](https://resend.com/support)
- **Next.js API Routes**: [nextjs.org/docs/app/building-your-application/routing/route-handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

