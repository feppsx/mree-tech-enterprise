# MR NAGEN / M.REE TECH ENTERPRISE — Landing Page

**ONE CALL, WE DO IT ALL!**

React (Vite) + Tailwind CSS v4 + Supabase + Vercel.

The project is already written for you — components, Supabase client, SQL,
Vercel config and all. You just need to install it, add your Supabase keys
and run it.

---

## Quick start (do these in order)

```powershell
# 1. Open PowerShell in this folder
cd $HOME\Desktop\M.Ree

# 2. Install everything
npm install

# 3. Copy the environment file (then open it and paste in your Supabase keys)
copy .env.example .env.local
notepad .env.local

# 4. Start the dev server
npm run dev
```

Open the address it shows (usually http://localhost:5173). You should see
the full landing page.

> You need **Node.js 20 or newer**. Check with `node -v`. If missing:
> install the LTS version from https://nodejs.org and reopen PowerShell.

---

## Progress

| Part | Status |
|---|---|
| Project setup (package.json, Vite config, Tailwind, index.html) | ✅ Done |
| Supabase table (`supabase/schema.sql`) | ✅ Done |
| Supabase client (`src/lib/supabaseClient.js`) | ✅ Done |
| Page components (Navbar, Hero, Services, Why Us, Contact, Footer) | ✅ Done |
| Vercel config (`vercel.json`) | ✅ Done |

---

## Step 1 — Install

```powershell
cd $HOME\Desktop\M.Ree
npm install
```

This installs React, Vite, Tailwind v4, Supabase and lucide-react icons.

---

## Step 2 — Create the Supabase table

1. Go to https://supabase.com/dashboard and click **New project**. Pick a
   name (e.g. `mree-website`), set a database password and choose the
   **Southeast Asia (Singapore)** region. Wait ~2 minutes for it to finish.
2. In the left menu open **SQL Editor → New query**.
3. Open `supabase/schema.sql` in this folder, copy **all** of it, paste it
   in and click **Run**.
4. You should see **"Success. No rows returned."**
5. Open **Table Editor** in the left menu. You should see a table called
   **`leads`**.

**What this table does:**
- Stores every quote request: name, phone, email (optional), service,
  message (optional) and status.
- Status starts as `new`. In the Table Editor you can change it to
  `contacted`, `quoted`, `won` or `lost` to track jobs.
- It is **locked down**: the public website can only *add* leads.
  Nobody can read, edit or delete them through the website — only you,
  through the Supabase dashboard.

---

## Step 3 — Add your Supabase keys

1. In Supabase go to **Project Settings → API** (or **API Keys**) and copy:
   - **Project URL** (e.g. `https://abcdefgh.supabase.co`)
   - **anon public** key, or the **publishable** key (`sb_publishable_...`).
     Either one works.
2. In PowerShell (still in this folder):

   ```powershell
   copy .env.example .env.local
   notepad .env.local
   ```

3. Paste in your values and save:

   ```
   VITE_SUPABASE_URL=https://abcdefgh.supabase.co
   VITE_SUPABASE_ANON_KEY=paste-your-key-here
   ```

> 🔒 **Never** use the `service_role` / `secret` key in this project.
> `.env.local` is already in `.gitignore`, so it won't be uploaded to GitHub.

---

## Step 4 — Run it

```powershell
npm run dev
```

Open http://localhost:5173. Try sending a test lead through the form.
Then check Supabase **Table Editor → leads** — your test should appear.

Press `Ctrl + C` in PowerShell to stop the server.

---

## Step 5 — Deploy to Vercel

### 5a. Push to GitHub

```powershell
git init
git add .
git commit -m "Initial commit: M.REE TECH landing page"
```

Create a new empty repo on https://github.com/new (e.g. `mree-tech-landing`),
then run the two commands GitHub shows under **"…or push an existing
repository"**. They look like:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/mree-tech-landing.git
git branch -M main
git push -u origin main
```

### 5b. Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New… → Project**.
3. Pick your `mree-tech-landing` repo and click **Import**.
4. Vercel detects **Vite** automatically. Leave all defaults.
5. Open **Environment Variables** and add both:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon/publishable key

   Make sure both are ticked for **Production, Preview and Development**.
6. Click **Deploy**. ~1 minute later your site is live at a
   `*.vercel.app` URL.

### 5c. Updating later

Any `git push` to `main` auto-deploys. For environment variable changes,
update them in **Vercel → Project → Settings → Environment Variables**,
then **Deployments → … → Redeploy**.

### 5d. Custom domain (optional)

In Vercel: **Project → Settings → Domains**. Add your domain and follow
the DNS instructions Vercel shows. HTTPS is automatic.

---

## Project files

```
M.Ree/
├── README.md                       ← this file
├── package.json
├── vite.config.js
├── vercel.json                     ← for Vercel deployment
├── index.html
├── .env.example                    ← template
├── .env.local                      ← YOUR keys (you create in Step 3)
├── .gitignore
├── public/
│   └── favicon.svg
├── supabase/
│   └── schema.sql                  ← run in Supabase SQL Editor
└── src/
    ├── main.jsx                    ← entry point
    ├── App.jsx                     ← page layout
    ├── index.css                   ← Tailwind + brand colours
    ├── lib/
    │   └── supabaseClient.js       ← Supabase connection + submitLead()
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx            ← 7 services grid
        ├── WhyChooseUs.jsx
        ├── ContactForm.jsx         ← writes to Supabase
        └── Footer.jsx
```

---

## Design notes

- **Colours:** navy `#0a1a3a` with brand yellow/orange `#f9a613`.
  Defined as CSS variables in `src/index.css`, used as Tailwind
  classes like `bg-navy-900` and `text-brand-500`.
- **Fonts:** Inter for body, Montserrat for display headings
  (loaded from Google Fonts in `index.html`).
- **Icons:** `lucide-react`.
- **Responsive:** mobile-first. Mobile has a hamburger menu;
  desktop shows the full nav.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm` is not recognized | Install Node.js from https://nodejs.org, close and reopen PowerShell. |
| PowerShell says "running scripts is disabled" | Run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, answer `Y`. |
| Browser console: "Missing Supabase env vars" | Check `.env.local` exists and both values are filled. Stop and restart `npm run dev`. |
| Form says "Something went wrong" | Open browser DevTools → Console. The real error is logged. Usually: wrong keys, SQL script not run, or RLS policy missing. |
| Form submits but no row in Supabase | You're probably using an old Supabase project where RLS silently blocks. Re-run `supabase/schema.sql`. |
| SQL error "relation already exists" | Safe to ignore. Table already there. |
| `Uncaught ReferenceError: React is not defined` | The React plugin didn't run. Make sure `@vitejs/plugin-react` is installed (it's in `package.json`), delete `node_modules` + `package-lock.json`, run `npm install` again, then restart `npm run dev`. Every `.jsx` file now also has `import React from 'react'` as a safety net. |
| Vercel build fails | Check Build Logs. 99% of the time: forgot to add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel Environment Variables. |

---

## Company details (used on the site)

- **Phone:** 01111508384
- **Email:** nagenkaran2@gmail.com
- **Services:** Plumbing · CCTV Installing · Painting · Partition Works · Aircond Service · Wiring · Renovation
- **Taglines:** "ONE CALL, WE DO IT ALL!" · "Your One-Stop Solution for All Your Needs!"
- **Trust:** Reliable, Quality, Trusted Service · Your Satisfaction Is Our Priority · Professional Team · Quality Work · On Time, Every Time
