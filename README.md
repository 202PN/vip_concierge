# VIP Concierge — Marketing Website

Static marketing site for **VIP Concierge** (VIP Concierge, LLC), a premium
transportation and concierge company serving government, corporate, and
delegation clients in the DC/VA/MD region and nationwide.

Built with [Astro](https://astro.build) — fully static output, no CMS,
self-hosted fonts, optimized for Core Web Vitals.

## Commands

| Command | Action |
| :-- | :-- |
| `npm install` | Install dependencies |
| `npx astro dev --background` | Start the dev server at `localhost:4321` (managed via `astro dev stop` / `status` / `logs`) |
| `npm run build` | Build the production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

- `src/pages/` — the 12 routes (home, 5 service pages, services hub, fleet, about, service areas, contact, book) plus a custom 404
- `src/components/` — shared UI (Header, Footer, Seal, GridGlobe, CTABlock, PageIntro, ServiceCard, FleetCard, ContactForm)
- `src/data/services.ts` — the canonical two-group service architecture (Transportation / Concierge Services); feeds nav, footer, home, /services, and the contact form
- `src/styles/global.css` — the "Chancery" design system (dark ground, oxblood asset color, Libre Franklin)
- `public/` — logo, favicon, and hero footage

## Before launch (open items)

- **Formspree form ID** — `src/components/ContactForm.astro` (form degrades gracefully to phone/WhatsApp until set)
- **Limo Anywhere ORES alias** — `ORES_ALIAS` in `src/pages/book.astro` (see the setup comment there, incl. Google Ads notes)
- **GTM container ID** — commented snippet in `src/layouts/BaseLayout.astro` (dataLayer + `cta_click` events already wired)
- **Google Search Console token & og:image** — TODO comment in `BaseLayout.astro`
- Fleet photography and passenger capacities (marked `[TBD]` in the UI)
- Founding year / credential details on About and Armored pages (`[TBD]`)
