# 🚀 KNOWX WEBSITE — VERCEL DEPLOYMENT GUIDE
## Step-by-step for someone who doesn't know Git

---

## WHAT'S IN THIS PROJECT

```
knowx-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (SEO, schema, fonts)
│   │   ├── ClientShell.tsx     ← Shared wrapper (Navbar+Footer+Popup)
│   │   ├── page.tsx            ← Homepage
│   │   ├── HomeClient.tsx      ← Homepage sections
│   │   ├── about/
│   │   │   ├── page.tsx        ← About page entry
│   │   │   └── AboutClient.tsx ← About page sections
│   │   └── contact/
│   │       ├── page.tsx        ← Contact page entry
│   │       └── ContactClient.tsx ← Contact page sections
│   ├── components/
│   │   ├── Navbar.tsx          ← Shared navigation (active states)
│   │   ├── Footer.tsx          ← Shared footer
│   │   ├── Popup.tsx           ← Lead capture popup
│   │   ├── FloatingButtons.tsx ← WhatsApp FAB + Back-to-top
│   │   ├── ScrollReveal.tsx    ← Intersection observer animations
│   │   └── AnimatedCounter.tsx ← Number counter animations
│   └── styles/
│       └── globals.css         ← ALL styles (700+ lines, Safari fixes)
├── package.json
├── next.config.js
├── tsconfig.json
├── vercel.json
└── .gitignore
```

### Safari/iPhone Fixes Applied:
- ✅ No nested `<svg>` elements (replaced with `<g>` groups or text symbols)
- ✅ Explicit `width`/`height` on SVGs (prevents Safari collapse)
- ✅ `-webkit-mask-image` on overflow containers (Safari border-radius fix)
- ✅ `font-size: 16px` on inputs (prevents iOS auto-zoom)
- ✅ `-webkit-appearance: none` on buttons
- ✅ `-webkit-tap-highlight-color: transparent` on touch targets
- ✅ `-webkit-backdrop-filter` for blur effects
- ✅ `-webkit-text-size-adjust: 100%` on body
- ✅ `-webkit-overflow-scrolling: touch` on popup scroll

---

## DEPLOYMENT METHOD 1: VERCEL DRAG & DROP (Easiest — No Git Required)

### Step 1: Install Node.js on your computer
1. Go to https://nodejs.org
2. Download the **LTS** version (green button)
3. Install it (click Next → Next → Finish)
4. To verify: Open Terminal (Mac) or Command Prompt (Windows) and type:
   ```
   node --version
   ```
   You should see something like `v20.x.x`

### Step 2: Build the project
1. Unzip the `knowx-website.zip` file on your Desktop
2. Open Terminal (Mac) or Command Prompt (Windows)
3. Navigate to the folder:
   ```
   cd ~/Desktop/knowx-website
   ```
   (On Windows: `cd C:\Users\YourName\Desktop\knowx-website`)

4. Install dependencies:
   ```
   npm install
   ```
   Wait 1–2 minutes for it to finish.

5. Build the site:
   ```
   npm run build
   ```
   This creates an `out/` folder with your complete website.

### Step 3: Deploy to Vercel
1. Go to https://vercel.com and sign up (use your Google account — it's free)
2. Once logged in, click **"Add New..."** → **"Project"**
3. Scroll down to **"Import Third-Party Git Repository"** — IGNORE this
4. Instead, look for **"Or, deploy with a template or upload"** at the bottom
5. Click **"Upload"** or drag your entire `out/` folder into the upload area
6. Vercel will deploy it in ~30 seconds
7. You'll get a URL like `knowx-website.vercel.app` — your site is live!

### Step 4: Add your custom domain (knowxindia.com)
1. In your Vercel project, go to **Settings** → **Domains**
2. Type `www.knowxindia.com` and click **Add**
3. Vercel will show you DNS records to add:
   - Usually: **CNAME** record pointing `www` to `cname.vercel-dns.com`
   - And an **A** record for the root domain
4. Go to your domain registrar (GoDaddy, Namecheap, etc.) and add these DNS records
5. Wait 5–30 minutes for DNS to propagate
6. Vercel will automatically provision an SSL certificate (https)

---

## DEPLOYMENT METHOD 2: GITHUB + VERCEL (Recommended for ongoing updates)

### Step 1: Create a GitHub account
1. Go to https://github.com and sign up (free)

### Step 2: Upload code to GitHub
1. Go to https://github.com/new
2. Name the repository: `knowx-website`
3. Keep it **Private**
4. Click **"Create repository"**
5. On the next page, click **"uploading an existing file"**
6. Drag ALL the files from the unzipped `knowx-website` folder into the upload area
   (Make sure you upload the contents OF the folder, not the folder itself)
7. Click **"Commit changes"**

### Step 3: Connect GitHub to Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New..."** → **"Project"**
3. You'll see your `knowx-website` repo listed — click **"Import"**
4. Framework: **Next.js** (auto-detected)
5. Click **"Deploy"**
6. Wait 1–2 minutes. Done! Your site is live.

### Future updates:
- Upload new files to GitHub → Vercel automatically rebuilds and deploys

---

## TESTING LOCALLY (Optional)

Before deploying, you can preview the site on your computer:

```
cd knowx-website
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

- Homepage: http://localhost:3000
- About: http://localhost:3000/about
- Contact: http://localhost:3000/contact

---

## CONNECTING A REAL FORM BACKEND

Right now, the forms show an alert message. To connect a real backend:

### Option A: Formspree (Easiest, free tier available)
1. Go to https://formspree.io and create an account
2. Create a new form → copy the form endpoint URL
3. In the form components (Popup.tsx, ContactClient.tsx), change `handleSubmit` to:
   ```js
   const handleSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData(e.target);
     await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: formData,
       headers: { Accept: 'application/json' },
     });
     alert('Thank you! We will contact you within 24 hours.');
     e.target.reset();
   };
   ```

### Option B: Email via WhatsApp redirect
The WhatsApp button already works — it opens WhatsApp with a pre-filled message.

---

## NEED HELP?

If you get stuck at any step, share the error message and I'll help you fix it.
