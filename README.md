# 🚀 Automated Headless Storefront Template

Welcome to your new Automated Headless Storefront! This system gives you 100% data ownership, ultra-fast loading speeds, and zero monthly subscription fees. Manage your entire digital storefront in real-time directly from a free spreadsheet on your phone or laptop.

---

## 📁 What's Included in Your Package
* `index.html` - Your high-converting, interactive storefront & virtual tour landing page.
* `style.css` - Clean, responsive design component framework with CSS variable customization.
* `app.js` - The real-time logic engine that syncs your webpage directly to Airtable.
* `README.md` - Setup guide and deployment documentation.

---

## ⚡ Quick Start Checklist (15 Minutes to Launch)

### Step 1: Clone the Database Blueprint
1. Log into your free [Airtable](https://airtable.com) account.
2. Click your unique blueprint share link: **https://airtable.com/appFX1HjZjP9wnbHu/shr2vyDhVgsZTy8vn**.
3. Click **"Duplicate Base"** in the top-right corner to copy the database into your account.
4. Add a test row to your `Resources` table:
   * **Resource Name:** `My First Digital Product`
   * **Category:** `Freebie`
   * **Description:** `This is a quick test guide.`
   * **Access Link:** `https://your-payment-or-checkout-link.com`
   * **Status:** `Published`

### Step 2: Set Up Your Secure Keys
1. Open `app.js` inside your repository.
2. Replace `'YOUR_ACTUAL_BASE_ID_HERE'` with your Airtable Base ID (found in your browser's URL bar after `airtable.com/` starting with `app...`).
3. Go to the [Airtable Developer Hub](https://airtable.com/create/tokens) and click **"Create Token"**.
4. Name it `Storefront Read Key`, grant the **`data.records:read`** scope, and authorize it to access your newly copied base.
5. Copy the key starting with `pat...` and paste it inside `app.js` replacing `'PASTE_YOUR_SECRET_TOKEN_HERE'`. Save and commit `app.js`.

### Step 3: Deploy to the Web (100% Free)
* **GitHub Pages (Recommended):** Click **Settings > Pages**, set the Branch to **`main`**, and click **Save**. Your site will be live globally in 60 seconds!
* **Drag & Drop:** Alternatively, deploy your repo to a free account on [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
* ---

## 🌐 Connecting a Custom Domain (e.g., www.yourbrand.com)

If you registered a domain on Squarespace Domains, Namecheap, or GoDaddy, you can point it to your free GitHub Pages site in under 3 minutes:

### 1️⃣ Add Domain to GitHub
1. In your cloned GitHub repository, go to **Settings > Pages**.
2. Scroll down to the **Custom domain** section.
3. Type your custom domain name (e.g., `www.yourbrand.com`) and click **Save**.
4. Check the box for **Enforce HTTPS** (this gives your site the secure lock icon 🔒 for free).

### 2️⃣ Update Your Domain DNS Settings
Log into your domain provider (e.g., Squarespace Domains) and navigate to your **DNS Management** dashboard. Add these 2 records:

* **CNAME Record:**
  * **Host / Name:** `www`
  * **Value / Target:** `YOUR_GITHUB_USERNAME.github.io`
* **A Records (Apex Domain Routing):**
  * Point your root `@` domain to these 4 official GitHub IP addresses:
    * `185.199.108.153`
    * `185.199.109.153`
    * `185.199.110.153`
    * `185.199.111.153`

*Give your domain provider 15–30 minutes to propagate, and your storefront will be live at your custom branded domain!*

---

## 🎨 Changing Your Brand Colors
To customize your brand colors globally, open `style.css` (or the `<style>` tag in `index.html`) and edit the root CSS variables at the top:

```css
:root {
    --primary: #FF007A;        /* Main interactive action & brand accents */
    --primary-hover: #D00063;  /* Hover action color match */
    --bg: #FAFAFA;             /* Global document canvas backdrop */
    --card-bg: #FFFFFF;        /* Inventory asset card backdrop */
    --text: #2D2D2D;           /* Clear body copy typography focus */
}
