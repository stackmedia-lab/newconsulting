# Edify Group — Next.js 14 + Sanity CMS

Production-ready website built with **Next.js 14**, **Tailwind CSS v3**, **TypeScript**, and **Sanity v3 CMS**. Deployable on **Vercel** in minutes.

---

## 🚀 Quick Start (Local Dev)

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in your Sanity credentials
cp .env.example .env.local

# 3. Run the dev server
npm run dev
```

- Website: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

---

## 🔧 Sanity CMS Setup

### Step 1 — Create a Sanity project

```bash
# Install the Sanity CLI globally
npm install -g sanity@latest

# Login to Sanity
sanity login

# Initialize a new project (or link an existing one)
sanity init
```

> When prompted, select **"Use an existing dataset"** and choose **production**.  
> Copy your **Project ID** from the output (or from [sanity.io/manage](https://sanity.io/manage)).

### Step 2 — Get your API Token

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project
3. Go to **API → Tokens**
4. Click **Add API Token**
5. Name it `Vercel Read Token`, set permission to **Editor**
6. Copy the token — you won't see it again

### Step 3 — Fill in `.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your-editor-token-here
NEXT_PUBLIC_SITE_URL=https://edify.pk
```

### Step 4 — Deploy Sanity Studio

```bash
# Deploy the embedded studio to Sanity's CDN (optional, for non-dev access)
npm run sanity:deploy
```

---

## 🌐 Deploy to Vercel via Git

### Step 1 — Push to GitHub

```bash
# In your project directory
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/edify-next.git
git push -u origin main
```

### Step 2 — Import to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Import Git Repository"**
3. Select your GitHub repo
4. Framework preset will auto-detect as **Next.js**

### Step 3 — Add Environment Variables in Vercel

In the Vercel project dashboard → **Settings → Environment Variables**, add:

| Variable | Value |
|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Your Sanity Project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | `2024-01-01` |
| `SANITY_API_TOKEN` | Your Sanity Editor Token |
| `NEXT_PUBLIC_SITE_URL` | `https://edify.pk` (or your domain) |

### Step 4 — Add CORS Origin in Sanity

After deploying, add your Vercel URL to Sanity's allowed origins:

1. Go to [sanity.io/manage](https://sanity.io/manage) → Your Project → **API → CORS Origins**
2. Add `https://your-app.vercel.app` (and your custom domain if you have one)
3. Check **"Allow credentials"**

### Step 5 — Deploy

Click **Deploy** in Vercel. Your site goes live! 🎉

Future pushes to `main` will auto-deploy.

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage with hero, services, destinations, testimonials |
| `/about` | About Edify Group |
| `/courses` | IELTS, PTE, GED, SAT courses |
| `/destinations` | UK, Australia, Canada, USA, Germany, Malaysia |
| `/blogs` | Blog listing |
| `/blogs/[slug]` | Individual blog post |
| `/contact` | Contact form + branch map |
| `/branches` | All branch offices |
| `/team` | Our team |
| `/ged` | GED Program detail |
| `/services` | All services |
| `/partners` | Partner universities |
| `/news` | News & Events |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/studio` | **Sanity CMS Studio** (password-protected via Sanity auth) |

---

## 🛠 Tech Stack

- **Next.js 14** — App Router, SSG + SSR
- **TypeScript** — Full type safety
- **Tailwind CSS v3** — Utility-first styling
- **Sanity v3** — Headless CMS with embedded Studio
- **Lucide React** — Icon library
- **Vercel** — Deployment platform

---

## 📦 Useful Scripts

```bash
npm run dev              # Start development server
npm run build            # Production build
npm run start            # Start production server locally
npm run lint             # Run ESLint
npm run type-check       # Run TypeScript check without building
npm run sanity           # Run any Sanity CLI command
npm run sanity:deploy    # Deploy Sanity Studio to Sanity CDN
npm run sanity:manage    # Open Sanity project management
```

---

## 🔒 Security Notes

- Never commit `.env.local` — it is in `.gitignore`
- The `SANITY_API_TOKEN` is only used server-side (never exposed to the browser)
- The Sanity Studio at `/studio` requires Sanity account login
