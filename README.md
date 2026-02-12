# Mackpost Management Group LLC — Website

Veteran-owned property management site built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, service pillars, CTA |
| `/about` | Mission & operational excellence |
| `/services` | Full service breakdown |
| `/listings` | Property image grid with lightbox |
| `/contact` | Contact form + direct contact info |

## Deploying to Vercel

1. Push this repo to GitHub (already done).
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
3. Click **"Add New… → Project"**.
4. Import the **mackpost-site** repository.
5. Vercel auto-detects Next.js — no configuration needed.
6. Click **Deploy**.

That's it. Vercel will:
- Run `npm run build` automatically
- Serve the site on a `.vercel.app` domain
- Redeploy on every push to `main`

### Custom Domain (optional)

1. In the Vercel dashboard, go to **Settings → Domains**.
2. Add your domain (e.g. `mackpostmgt.com`).
3. Update your DNS records as instructed by Vercel.

### Environment Variables

No environment variables are required for the current build. If you add a backend for the contact form, set variables under **Settings → Environment Variables** in Vercel.

## Listing Images

Images live in `public/listings/` following the naming convention:

```
public/listings/listing_01.png
public/listings/listing_02.png
...
public/listings/listing_09.png
```

To add a new listing:
1. Drop a PNG named `listing_XX.png` into `public/listings/`.
2. Update `LISTING_COUNT` in `src/lib/listings.ts`.

## Contact

**Email:** [contact@mackpostmgt.com](mailto:contact@mackpostmgt.com)