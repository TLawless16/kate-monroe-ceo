# KateMonroeCEO.com → Vercel DNS Migration Guide

## What This Does
Points KateMonroeCEO.com to your Vercel-hosted site (kate-monroe-ceo.vercel.app) so visitors see the real site instead of a parked page.

---

## Step 1: Log into GoDaddy
1. Go to **https://dcc.godaddy.com/control/dns** in your browser
2. Select **KateMonroeCEO.com** from your domain list

---

## Step 2: Update DNS Records

### Record 1 — The main domain (katemonroeceo.com)
- **Type:** A
- **Name:** @ (or leave blank)
- **Value:** `76.76.21.21`
- **TTL:** 600 (or "Custom" → 10 minutes)

> If an A record for @ already exists, **edit** it. Don't create a duplicate.

### Record 2 — The www subdomain (www.katemonroeceo.com)  
- **Type:** CNAME
- **Name:** www
- **Value:** `cname.vercel-dns.com`
- **TTL:** 600 (or "Custom" → 10 minutes)

> If a CNAME for www already exists, **edit** it. Don't create a duplicate.

---

## Step 3: Add Domain in Vercel
After the DNS records are saved, Tim or Jarvis will add the domain in Vercel's project settings. (Jarvis can handle this via CLI.)

---

## Step 4: Wait for Propagation
- Usually takes **5–30 minutes**
- Can take up to 48 hours in rare cases
- You can check status at: https://dnschecker.org/#A/katemonroeceo.com

---

## Step 5: Verify
- Visit **https://katemonroeceo.com** — should show Kate's site
- Visit **https://www.katemonroeceo.com** — should also work
- Vercel auto-provisions SSL (https) — no action needed

---

## Also Needed: Resend Domain Verification (for contact form emails)
After the DNS is updated, we also need to add Resend's email verification records so the contact form can send emails to Kryzta. Jarvis will provide those records separately once you're ready.

---

**Questions?** Message Jarvis on Telegram.
