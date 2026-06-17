# Nick Bova Golf

Marketing site for **Nick Bova** — Class A PGA Professional and Director of Instruction at Hamilton Farm Golf Club, Gladstone, NJ. A modern rebuild of [nickbovagolf.com](https://nickbovagolf.com) with his branding preserved.

## Stack

- **Next.js 15** (App Router) · **React 19** — fully static, no backend, no env vars
- **Tailwind CSS** — navy + champagne-gold brand system, square edges
- **Framer Motion** — full-bleed photo heroes, scroll reveals, animated chat-bubble reviews, video lightbox, magnetic buttons
- Fonts: **Teko** (bold condensed display — matches his NB logo) + **Inter** (readable body) via `next/font`

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero (Watch Video popup), photo service cards, portrait + bio, stats band, certifications, testimonial, CAMPUS partner, CTA |
| `/about` | Full bio with large photo, playing-résumé timeline, credential logos |
| `/coaching` | Pricing (lessons + intensives, single CTA), The Method, tools |
| `/juniors` → `/campus-academy` | CAMPUS Academy junior development + Northeast college recruiting |
| `/reviews` | Testimonials as animated chat bubbles |
| `/contact` | Premium contact card + map (footer-linked; not in main nav) |

## Design notes

- **Dark full-bleed photo heroes + white/cream content** — matches the live site; not a dark theme.
- **Teko is display-only** (big headlines + numbers); everything you read is Inter.
- Primary action = gold; secondary on dark = white outline; on light = dark outline.

## SEO

- Per-page `metadata` (title/description/canonical/OG/Twitter)
- `ProfessionalService` + `Person` JSON-LD in the root layout
- `app/sitemap.ts` and `app/robots.ts`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
```

## Content & assets

All copy/facts live in `lib/content.ts`. Brand marks in `public/brand`, photography in `public/images`. Original source assets are kept locally in `scrape/` (gitignored).

## Deploy

Import the repo into Vercel / v0 — no environment variables or server required (fully static).

### Known asset gaps (swap when available)
- Higher-res headshot (the server original is 200×200)
- A dedicated online-lesson / video-analysis image
- A junior-golfer image for the Juniors card
- Booking buttons currently point to the existing ThrivSports URL (`lib/content.ts` → `bookingUrl`)
