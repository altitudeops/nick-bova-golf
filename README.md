# Nick Bova Golf

Marketing site for **Nick Bova** — Class A PGA Professional and Director of Instruction at Hamilton Farm Golf Club, Gladstone, NJ. A rebuild of [nickbovagolf.com](https://nickbovagolf.com) with original branding preserved and a modern, animated, SEO-first front end.

## Stack

- **Next.js 15** (App Router, static export-ready) + **React 19**
- **Tailwind CSS** — navy + champagne-gold brand system
- **Framer Motion** — scroll reveals, parallax hero, animated stat counters, magnetic buttons, scroll-progress bar
- Fonts: **Fraunces** (display) + **Inter** (body) via `next/font`

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Hero, animated résumé stats, intro, coaching preview, certifications, featured review |
| `/about` | Full bio, playing-résumé timeline, honors & credentials |
| `/coaching` | All programs + pricing, method/process, tools |
| `/reviews` | Student testimonials |
| `/contact` | Phone, email, address, embedded map, booking (no forms) |

## SEO

- Per-page `metadata` (title/description/canonical/OG/Twitter)
- `ProfessionalService` + `Person` JSON-LD in the root layout
- `app/sitemap.ts` and `app/robots.ts`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Content

All copy and facts live in `lib/content.ts` (single source of truth). Brand assets are in `public/brand`, photography in `public/images`. Original source assets are kept locally in `scrape/` (gitignored).

## Deploy

Push to GitHub and import into Vercel — no environment variables or server required (fully static).
