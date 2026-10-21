# MR NAGEN / M.REE TECH ENTERPRISE — Landing Page

**ONE CALL, WE DO IT ALL!**

React (Vite) + Tailwind CSS v4 + Framer Motion + Supabase + Vercel.

Premium gold/midnight-navy palette · dark & light mode · 3D card tilt ·
scroll reveals · pulsating CTA · animated form success.

---

## Quick start (do these in order)

```powershell
cd $HOME\Desktop\M.Ree

# 1. Install everything
npm install

# 2. Copy and fill in your Supabase keys
copy .env.example .env.local
notepad .env.local

# 3. Start the dev server
npm run dev
```

Open the address it shows (usually http://localhost:5173).

> You need **Node.js 20 or newer**. Check with `node -v`. If missing:
> install the LTS version from https://nodejs.org and reopen PowerShell.

---

## What's new in this version

| Feature | Where |
|---|---|
| **Dark / Light mode toggle** | Sun/Moon button in the navbar. Remembers your choice (`localStorage`), respects system preference on first visit, no flash on load. |
| **Framer Motion** | Smooth staggered scroll reveals, floating hero card, pulsating "Request a Quote" button, animated navbar entrance, mobile drawer animation, animated success state. |
| **3D card tilt** | Service cards tilt based on where your mouse is, with content lifted on Z for a real-depth feel. |
| **Premium colours** | Rich gold gradients (`gold-300 → gold-600`), deep midnight navy in dark mode. CSS tokens defined in `src/index.css` under `@theme`. |
| **Scroll-progress bar** | Thin gold bar at the very top that tracks page scroll. |

---

## Project files

```
M.Ree/
├── README.md                       ← this file
├── package.json                    ← includes framer-motion
├── vite.config.js
├── vercel.json
├── index.html                      ← has no-flash theme bootstrap
├── .env.example
├── .gitignore
├── public/
│   └── favicon.svg
├── supabase/
│   └── schema.sql                  ← run in Supabase SQL Editor
└── src/
    ├── main.jsx
    ├── App.jsx                     ← scroll progress + layout
    ├── index.css                   ← Tailwind + custom-variant dark + tokens
    ├── hooks/
    │   └── useTheme.js             ← theme hook with localStorage sync
    ├── lib/
    │   └── supabaseClient.js       ← Supabase connection + submitLead()
    └── components/
        ├── Navbar.jsx              ← includes <ThemeToggle />
        ├── ThemeToggle.jsx         ← animated sun/moon button
        ├── Hero.jsx                ← pulsating CTA, floating card
        ├── Services.jsx            ← 3D tilt cards
        ├── WhyChooseUs.jsx         ← staggered scroll reveals
        ├── ContactForm.jsx         ← animated success + loading
        └── Footer.jsx
```

---

## Step 1 — Install

```powershell
cd $HOME\Desktop\M.Ree
npm install
```

Installs React, Vite, Tailwind v4, Supabase, **framer-motion** and lucide-react.

---

## Step 2 — Create the Supabase table

1. Go to https://supabase.com/dashboard → **New project**. Pick a name,
   set a database password, choose **Southeast Asia (Singapore)**.
   Wait ~2 minutes.
2. Left menu → **SQL Editor → New query**.
3. Open `supabase/schema.sql`, copy **all** of it, paste it in, click **Run**.
4. You should see **"Success. No rows returned."**
5. **Table Editor** → you should see a **`leads`** table.

**What the table does:**
- Stores every quote request: name, phone, email, service, message, status.
- Status starts as `new`. You can change it to `contacted`, `quoted`,
  `won` or `lost` from the Table Editor.
- **Locked down**: the website can only *add* leads. Nobody can read,
  edit or delete through the public key — only you, in Supabase.

---

## Step 3 — Add your Supabase keys

1. Supabase → **Project Settings → API** (or **API Keys**). Copy:
   - **Project URL** (`https://xxxxx.supabase.co`)
   - **anon public** key *or* **publishable** key (`sb_publishable_...`)
2. In PowerShell:

   ```powershell
   copy .env.example .env.local
   notepad .env.local
   ```

3. Paste in your values and save:

   ```
   VITE_SUPABASE_URL=https://xxxxx.supabase.co
   VITE_SUPABASE_ANON_KEY=paste-your-key-here
   ```

> 🔒 **Never** use the `service_role` key here. `.env.local` is already in
> `.gitignore` so it won't be uploaded to GitHub.

---

## Step 4 — Run it

```powershell
npm run dev
```

Open http://localhost:5173.

- Try the **sun/moon toggle** in the top-right — the whole site switches theme.
- Hover a **service card** — it tilts in 3D.
- Scroll down — sections fade in with staggered reveals.
- **Submit the form** — you'll see a loading spinner, then an animated
  checkmark on success. Check Supabase **Table Editor → leads**.

Press `Ctrl + C` to stop the server.

---

## Step 5 — Deploy to Vercel

### 5a. Push to GitHub

```powershell
git init
git add .
git commit -m "M.REE TECH landing page: premium theme, framer motion, dark mode"
```

Create an empty repo at https://github.com/new (e.g. `mree-tech-enterprise`).
Then push:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/mree-tech-enterprise.git
git branch -M main
git push -u origin main
```

> **Push rejected with 403?** Your Git is signed in as a different GitHub
> account from the one that owns the repo. Either create the repo under
> **your own** GitHub user, or ask the repo owner to add you as a
> collaborator with Write access, then push again.

### 5b. Deploy on Vercel

1. Go to https://vercel.com, sign in with GitHub.
2. **Add New… → Project**.
3. Pick your repo → **Import**.
4. Vercel detects **Vite** automatically.
5. Open **Environment Variables** and add both:
   - `VITE_SUPABASE_URL` = your Supabase project URL
   - `VITE_SUPABASE_ANON_KEY` = your anon/publishable key

   Tick **Production, Preview and Development** for both.
6. **Deploy**. ~1 minute later your site is live.

### 5c. Updating later

Any `git push origin main` auto-deploys. For env var changes, update
them in **Vercel → Settings → Environment Variables**, then
**Deployments → … → Redeploy**.

### 5d. Custom domain (optional)

**Vercel → Project → Settings → Domains**. HTTPS is automatic.

---

## Design notes

- **Palette (CSS tokens in `src/index.css`):**
  - Dark mode canvas: `midnight-950 #020617` → `midnight-800 #0a1428`
  - Light mode canvas: `cream-50 #fffdf7`
  - Brand navy: `navy-900 #0a1a3a`
  - Accent gold: `gold-400 #fbbf24` → `gold-600 #d97706`
- **Fonts:** Inter for body, Montserrat for display headings (Google Fonts).
- **Icons:** `lucide-react`.
- **Animations:** `framer-motion` — all effects honour
  `prefers-reduced-motion`.

### Tweaking the design

- To change gold → different accent: edit the `--color-gold-*` tokens in
  `src/index.css`.
- To make the 3D tilt stronger: in `src/components/Services.jsx`, change
  `useTransform(my, [-0.5, 0.5], [8, -8])` to `[12, -12]` or higher.
- To make the hero CTA pulse faster: in `src/index.css`, change the
  `gold-glow` animation duration (currently `2.4s`).
- To force dark mode as default: in `src/hooks/useTheme.js`, change
  `getInitialTheme` to always return `'dark'`.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `npm` is not recognized | Install Node.js from https://nodejs.org, reopen PowerShell. |
| PowerShell: "running scripts is disabled" | `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, answer `Y`. |
| Browser console: "Missing Supabase env vars" | Fill `.env.local`, then restart `npm run dev`. |
| Theme toggle doesn't work | Delete `localStorage` for the site in DevTools → Application → Local Storage, then reload. |
| Flash of wrong theme on load | Check `index.html` still has the `<script>` under the `<title>` — that's what prevents it. |
| `Uncaught ReferenceError: React is not defined` | `Remove-Item -Recurse -Force node_modules, package-lock.json, .vite`, then `npm install`, `npm run dev`. |
| Form says "Something went wrong" | Open DevTools → Console. Usually: wrong keys, SQL script not run, or RLS policy missing. |
| Vercel build fails | Check Build Logs. 99% of the time: forgot to add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in Vercel Environment Variables. |
| `git push` → 403 denied | Your Git is signed in as a GitHub user who doesn't own this repo. See Step 5a. |

---

## Company details (used on the site)

- **Phone:** 01111508384
- **Email:** nagenkaran2@gmail.com
- **Services:** Plumbing · CCTV Installing · Painting · Partition Works · Aircond Service · Wiring · Renovation
- **Taglines:** "ONE CALL, WE DO IT ALL!" · "Your One-Stop Solution for All Your Needs!"
- **Trust:** Reliable, Quality, Trusted Service · Your Satisfaction Is Our Priority · Professional Team · Quality Work · On Time, Every Time
