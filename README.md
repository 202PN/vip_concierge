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
- `src/components/` — shared UI (Header, Footer, Seal, GridGlobe, CTABlock, PageIntro, ServiceCard, FleetCard, ContactForm, Loader)
- `src/data/services.ts` — the canonical two-group service architecture (Transportation / Concierge Services); feeds nav, footer, home, /services, and the contact form
- `src/data/fleet.ts` — one record per vehicle (tier, capacity, description, photos); feeds /fleet, the service pages, the home page, and the photo viewer
- `src/styles/global.css` — the "Chancery" design system (dark ground, oxblood asset color, Libre Franklin)
- `public/` — logo, favicon, hero footage and poster stills, robots.txt

## Status

Live at https://dcvipconcierge.com since 2026-09-03 (Vercel, static build; DNS and email stay on HostGator).

Verified 2026-09-12:

- **Google Search Console** — domain property verified through a DNS TXT record; no meta tag needed
- **Google Tag Manager** — container `GTM-N7KZN6ZT` is published with the GA4 tag, the four custom event triggers (`cta_click`, `phone_click`, `whatsapp_click`, `ores_widget_view`), and the Google Ads conversion tag
- **Booking conversion** — the Limo Anywhere reservation page (`book.mylimobiz.com/v4/vipconcierge`) loads the GA4 measurement ID, so completed bookings are attributed cross-domain
- **Sitemap and robots.txt** — served at `/sitemap-index.xml` and `/robots.txt`

## Waiting on client assets

- **Social sharing image (og:image)** — a 1200×630 card; commented-out tag in `src/layouts/BaseLayout.astro`
- **Group vehicle photography** — Party Bus and Coach Bus have no photos yet (`src/data/fleet.ts`); they show "Photos available on request"
- **Furnished apartment photography** — placeholder frame in `src/pages/furnished-apartments.astro`
- **Credential and certification documents** — the About and Armored pages say "available on request" until documents are supplied
