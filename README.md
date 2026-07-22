# 🚀 Automated Headless Storefront Template

Welcome to your new **Automated Headless Storefront**! This system gives you 100% data ownership, ultra-fast loading speeds, and **$0/month in platform subscription fees**. Manage your entire digital storefront in real-time directly from a free Airtable database on your phone or desktop.

---

## 📁 What's Included in Your Package

* `index.html` — High-converting interactive storefront & virtual tour landing page.
* `style.css` — Clean, responsive component design framework with customizable CSS variables.
* `app.js` — Secure, lightweight real-time engine that syncs your webpage directly to Airtable.
* `README.md` — Complete setup, deployment, and custom domain documentation.

---

## ⚡ Quick Start Checklist (15 Minutes to Launch)

### Step 1: Duplicate Your Database Blueprint
1. Log into your free [Airtable](https://airtable.com) account.
2. Open your Master Core Blueprint link: **[Airtable Base Blueprint](https://airtable.com/appFX1HjZjP9wnbHu/shr2vyDhVgsZTy8vn)**.
3. Click **"Duplicate Base"** in the top-right corner to save the database structure into your personal workspace.
4. Add a test row inside the `Resources` table:
   * **Resource Name:** `My First Digital Asset`
   * **Category:** `Freebie` *(Options: `Freebie`, `Notion Template`, `Premium Guide`, `Resource List`)*
   * **Description:** `This is a quick test product description.`
   * **Access Link:** `https://your-payment-or-checkout-link.com`
   * **Cover Image:** *(Optional) Upload a cover image thumbnail*
   * **Status:** `Published`

---

### Step 2: Configure Your Secure Database Keys
1. Open `app.js` in your code/text editor.
2. Locate the `CONFIG` object at the top of the file:
   * Replace `'YOUR_ACTUAL_BASE_ID_HERE'` with your **Airtable Base ID** (found in your browser address bar when viewing your base, starting with `app...`).
3. Go to the [Airtable Token Developer Hub](https://airtable.com/create/tokens) and click **"Create New Token"**.
   * **Token Name:** `Storefront Read Token`
   * **Scopes:** Click *Add a scope* and select strictly **`data.records:read`**.
   * **Access:** Add your duplicated base under workspace access.
4. Click **Create Token**, copy the token string starting with `pat...`, and paste it into `app.js` replacing `'PASTE_YOUR_SECRET_TOKEN_HERE'`.

> 🔒 **Security Best Practice:** Always restrict your token to `data.records:read` (Read-Only permissions). This ensures visitors cannot modify or erase records inside your database.

---

### Step 3: Deploy to GitHub Pages (100% Free Hosting)
1. Go to [GitHub.com](https://github.com) and log into your account.
2. Create a new repository named after your brand or project (set visibility to **Public**).
3. Upload `index.html`, `style.css`, and `app.js` into the root directory.
4. Click **Settings > Pages** on your repository navbar.
5. Under **Build and deployment**, set the Branch dropdown to `main` and folder to `/ (root)`, then click **Save**.
6. Your storefront will be live globally at `https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME/` in 60 seconds!

---

## 🌐 Connecting a Custom Domain (e.g., www.yourbrand.com)

You can easily point any domain bought from Squarespace Domains, Namecheap, GoDaddy, or Cloudflare to your free GitHub Pages deployment:

### 1️⃣ Configure GitHub Pages
1. In your GitHub repository, navigate to **Settings > Pages**.
2. Scroll to **Custom domain**, enter your domain name (e.g., `www.yourbrand.com`), and click **Save**.
3. Check the box for **Enforce HTTPS** to enable your free SSL security certificate 🔒.

### 2️⃣ Update Domain DNS Settings
Log into your domain provider's **DNS Management** panel and add the following records:

* **CNAME Record:**
  * **Host / Name:** `www`
  * **Value / Target:** `YOUR_GITHUB_USERNAME.github.io`
* **A Records (Apex Domain Routing):**
  * Point your root domain (`@`) to GitHub's official IP addresses:
    * `185.199.108.153`
    * `185.199.109.153`
    * `185.199.110.153`
    * `185.199.111.153`

*DNS propagation typically takes 5–30 minutes.*

---

## 🎨 Global Brand Color Customization

To change your storefront colors globally, open `style.css` (and the `<style>` block in `index.html`) and tweak the root CSS color tokens:

```css
:root {
    --primary: #FF007A;          /* Main interactive buttons & accent colors */
    --primary-hover: #D00063;    /* Hover action state color */
    --bg: #FAFAFA;               /* Global document canvas backdrop */
    --card-bg: #FFFFFF;          /* Inventory asset card background */
    --text: #2D2D2D;              /* Body typography text color */
}
