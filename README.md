# Automated Headless Storefront Template — Setup Guide

Welcome to your Automated Headless Storefront! This system gives you 100% data ownership, ultra-fast loading speeds, and $0/month in platform subscription fees. Manage your entire catalog in real time from a free Airtable database on your phone or desktop.

## What's Included in Your Package
- `index.html` — your storefront's structure and content sections
- `style.css` — the visual design (colors, layout, fonts)
- `app.js` — site-wide settings (CONFIG) plus the engine that syncs your catalog from Airtable
- `.github/workflows/sync.yml` — the automatic sync job (also downloads and saves your cover images so they never expire or break)
- `SETUP-GUIDE.md` — this file

## Two Ways to Customize This Site

**1. Site-wide details — edit in `app.js`.** Things that rarely change: your business name, headline, trust badges, and closing call-to-action. Open `app.js`, edit the `CONFIG` object at the top, save, and commit. No Airtable needed for any of this.

**2. Your Catalog — edit in Airtable.** This is the thing you'll actually update over time (a new item, a price change, swapping what's live). It lives in one table in your Airtable base and syncs to the site automatically — you never touch code for this.

## Quick Start Checklist (15 Minutes to Launch)

### Step 1: Duplicate Your Database Blueprint
1. Log into your free Airtable account.
2. Open your Master Core Blueprint link and click **Duplicate Base** to save it into your own workspace.
3. Confirm it has one table: **Resources**, with a `Status` field.
4. Add a test row to make sure everything's wired up:
   - **Resource Name**: My First Digital Asset
   - **Category**: Freebie (options: Freebie, Notion Template, Premium Guide, Resource List)
   - **Description**: This is a quick test product description.
   - **Access Link**: https://your-payment-or-checkout-link.com
   - **Cover Image**: (optional) upload a cover image thumbnail
   - **Status**: Published

### Step 2: Add Your Site Details
Open `app.js`. At the top, you'll see a `CONFIG` section. Replace the placeholder text with your own:
- `siteName` — Your business name
- `heroHeadline` / `heroSubtext` — Your main headline and short intro
- `credentials` — Your trust badges
- `closingHeadline` / `closingSubtext` / `closingButtonText` — Your closing call-to-action
- `closingLink` — Your real contact, booking, or checkout link (see Step 3 — don't leave the placeholder link live)

### Step 3: Connect Your Contact / Checkout Link
Still inside `CONFIG`, find `closingLink` and replace the placeholder with your real contact, booking, or checkout link. Do not leave the placeholder link live — it's not a real working page, just text meant to be replaced. This is what your closing "Get In Touch" button points to.

### Step 4: Configure Your Secure Database Keys
This template needs three GitHub repo secrets (Settings → Secrets and variables → Actions → New repository secret):
- `AIRTABLE_TOKEN` — a Personal Access Token scoped to `data.records:read` on your duplicated base only
- `AIRTABLE_BASE_ID` — found in your browser's address bar when viewing your base (starts with `app...`)
- `AIRTABLE_TABLE_NAME` — the exact name of your Resources table (defaults to `Resources` if left blank)

Create your token at the Airtable Token Developer Hub: name it something you'll recognize, add the `data.records:read` scope, and grant access to your duplicated base only.

**Security best practice:** always restrict your token to Read-Only (`data.records:read`) access. This ensures visitors can never modify or erase records in your database. Your token is never written into any file in this repo — it lives only as an encrypted GitHub secret, used inside the sync job.

### Step 5: Go Live (Free Hosting)
1. Click "Use this template" on GitHub to copy this into your own account, keeping the folder structure intact (`.github/workflows/sync.yml` must stay in that exact path).
2. Go to Settings → Pages, and turn on GitHub Pages (Branch: `main`, folder: `/ (root)`).
3. Your site is now live at no cost, and stays free — no monthly bill.

Give it a minute. After you turn on Pages for the first time, GitHub needs a minute or two to build your site. If your link doesn't show your changes right away, wait a minute and refresh before assuming something's wrong.

### Step 6: Trigger the First Sync
The sync runs automatically every 30 minutes and on every push, but you don't have to wait: go to your repo's **Actions** tab → **Sync catalog from Airtable** → **Run workflow**. See the companion **GitHub Actions Quick-Start SOP** for the exact click-by-click.

## Connecting a Custom Domain (e.g., www.yourdomain.com)
Already have your own domain from Squarespace Domains, Namecheap, GoDaddy, or Cloudflare? Here's how to point it at your free GitHub Pages site instead of using the default `github.io` link — **we strongly recommend doing this**, since the default link will show our template account name instead of your own business.

**1. Set it in GitHub:**
In your repository, go to Settings → Pages. Scroll to Custom domain, enter your domain, and click Save. Check the box for Enforce HTTPS — this turns on your free SSL security certificate. (Sometimes it takes a couple minutes to update, so if it doesn't let you click it, know it's updating.)

**2. Update your domain's DNS settings:**
Log into your domain provider's DNS management panel and add:
- CNAME Record: Host/Name: `www` → Value/Target: `YOUR_GITHUB_USERNAME.github.io`
- A Records (for the root domain `@`), pointing to GitHub's IP addresses:
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153

DNS changes typically take 5–30 minutes to go live, sometimes longer.

## Global Brand Color Customization
To change your storefront colors globally, open `style.css` and tweak the root CSS color tokens:

```css
:root {
    --primary: #FF007A;          /* Main interactive buttons & accent colors */
    --primary-hover: #D00063;    /* Hover state for the accent color */
    --bg: #FAFAFA;               /* Global page background */
    --card-bg: #FFFFFF;          /* Catalog card background */
    --text: #2D2D2D;             /* Body typography color */
}
```

## A Note on "Free"
Hosting is completely free to start. If you ever outgrow the free tier (very high traffic), a low-cost paid step may apply — but you'll never be locked into a recurring platform fee just to keep your site online.

## If Something Isn't Showing Up
See the companion **Airtable Quick-Start SOP** and **GitHub Actions Quick-Start SOP** — they walk through, in order, exactly what to check before assuming anything's broken (it's almost always a normal sync delay, not a bug).

## Need Help?
This is a self-guided template.

👉 Join the AE9 Labs Discord: https://discord.gg/b45jmgHK3
👉 Support & Feedback form: https://airtable.com/app2dNCzkf61VdNKa/pagH5JffQIe7npirH/form
