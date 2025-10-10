# Admin Dashboard Guide

## 🔐 Accessing the Admin Panel

**URL:** `https://thanksgiving.winespectator.com/admin`

**Default Password:** `winespec2025`

---

## 📊 What You Can Do

### 1. View All Entries
- See a complete list of all sweepstakes entries
- Real-time entry count
- Detailed information for each entry:
  - Entry ID (unique identifier)
  - Full name and date of birth
  - Email and phone number
  - Complete mailing address
  - Email marketing opt-in status
  - Entry date/time
  - IP address (for fraud prevention)

### 2. Export to CSV
- Click the **"Export CSV"** button in the top right
- Downloads a CSV file with all entry data
- Filename includes date: `sweepstakes-entries-2025-10-10.csv`
- Use this for:
  - Record keeping
  - Compliance documentation
  - Winner verification
  - Importing into other systems

### 3. Select Random Winner
- Click **"Select Random Winner"** button
- Randomly selects one entry from all valid entries
- Shows winner's:
  - Name
  - Email
  - Phone number
  - Entry ID
- Use this after the contest ends (December 14, 2025)

---

## 🎯 Winner Selection Process

### After Contest Ends (December 14, 2025):

1. **Access Admin Panel**
   - Go to `/admin`
   - Enter password

2. **Export Entries**
   - Click "Export CSV" button
   - Save file for records

3. **Select Winner**
   - Click "Select Random Winner" button
   - Note down winner's information

4. **Contact Winner**
   - Email and/or call within 5 business days
   - Winner must respond within 5 business days
   - Use contact info from the admin panel

5. **Verify Winner**
   - Confirm they're 21+ years old
   - Confirm US residency
   - Send legal documents:
     - Affidavit of Eligibility
     - Liability/Publicity Release
     - Proof of age verification

6. **Ship Prize**
   - After documents returned
   - Use address from entry form
   - Keep tracking number for records

7. **If Winner Doesn't Respond**
   - Click "Select Random Winner" again
   - Choose alternate winner
   - Repeat contact process

---

## 🔒 Security Notes

### Change Admin Password (Recommended):

1. **In Vercel Dashboard:**
   - Go to Project Settings
   - Navigate to Environment Variables
   - Add new variable:
     - **Name:** `ADMIN_PASSWORD`
     - **Value:** Your secure password
   - Redeploy

2. **In Local Development:**
   - Edit `.env.local`
   - Add: `ADMIN_PASSWORD=your-secure-password`
   - Restart dev server

### Best Practices:
- Use a strong, unique password
- Don't share the admin URL publicly
- Only access from secure networks
- Log out after each session
- Change password after the contest ends

---

## 📋 Entry Data Fields

Each entry contains:

| Field | Description |
|-------|-------------|
| **Entry ID** | Unique identifier (e.g., `entry_lz8x4_abc123`) |
| **First Name** | Entrant's first name |
| **Last Name** | Entrant's last name |
| **Email** | Contact email address |
| **Phone** | Contact phone number |
| **Date of Birth** | Validates 21+ requirement |
| **Address** | Street address |
| **City** | City |
| **State** | US state (2-letter code) |
| **Zip Code** | 5-digit zip code |
| **Agree to Rules** | Always true (required to enter) |
| **Agree to Emails** | Email marketing opt-in (true/false) |
| **Entry Date** | Timestamp of submission |
| **IP Address** | For fraud prevention |

---

## 💾 Data Storage

### Current Setup (In-Memory):
- Entries stored temporarily in server memory
- **Important:** Entries reset when server restarts
- **Recommendation:** Export CSV regularly as backup

### For Production (Recommended Upgrade):
See `CUSTOM_SWEEPSTAKES_README.md` for database upgrade options:
- Vercel Postgres
- Supabase
- MongoDB

---

## 🆘 Troubleshooting

### Can't Access Admin Panel
- Clear browser cache and cookies
- Try incognito/private mode
- Verify password is correct
- Check if ADMIN_PASSWORD env var is set in Vercel

### No Entries Showing
- Entries may have been lost if server restarted
- Make sure sweepstakes form is working
- Test by submitting a test entry
- Check browser console for errors

### CSV Export Not Working
- Check popup blocker settings
- Try different browser
- Make sure you're authenticated

### Random Winner Button Disabled
- Button only works if there are entries
- Submit a test entry to enable

---

## 📞 Support

For technical issues:
- Check Vercel deployment logs
- Review browser console errors
- Test entry form functionality

For legal questions:
- Consult legal counsel
- Review official rules at `/official-rules`

---

## ✅ Regular Tasks

### During Contest (Oct 14 - Dec 14):
- [ ] Check entry count daily
- [ ] Export CSV weekly as backup
- [ ] Monitor for suspicious activity (duplicate IPs, etc.)
- [ ] Respond to any entrant questions

### After Contest Ends (Dec 14):
- [ ] Export final CSV immediately
- [ ] Select random winner
- [ ] Contact winner within 5 business days
- [ ] Send legal documents
- [ ] Ship prize after documents received
- [ ] Announce winner publicly (per official rules)

---

## 🎊 Quick Start

1. Visit: `https://thanksgiving.winespectator.com/admin`
2. Enter password: `winespec2025`
3. View entries in the table
4. Export CSV for backup
5. After Dec 14: Click "Select Random Winner"

**That's it!** The admin panel is designed to be simple and straightforward.

Good luck with your sweepstakes! 🍷✨

