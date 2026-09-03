# Google Ads setup — VIP Concierge

> **Account IDs (created 2026-08-30)**
> - GTM container: `GTM-N7KZN6ZT` (already set in `src/layouts/BaseLayout.astro`)
> - GA4 Measurement ID: `G-RV87215K8S` (used inside GTM only — not in site code)

The site is fully tracking-ready. This guide is the one-time account setup to
make Google Ads measure real results (bookings and calls), so Google's bidding
optimizes toward customers instead of clicks.

## What the site already does

- `/book` embeds the live Limo Anywhere reservation form
  (`book.mylimobiz.com/v4/vipconcierge`) — visitors book without leaving the site.
- Every **Book Now** / **Request a Consultation** button pushes a `cta_click`
  event (with a `cta` label such as `header-book`, `cta-consult`) into the
  dataLayer.
- Every **phone number** click pushes `phone_click`; every **WhatsApp** link
  pushes `whatsapp_click`.
- The `/book` page pushes `ores_widget_view` when the booking widget loads.
- Google Tag Manager loads automatically once its ID is pasted into
  `src/layouts/BaseLayout.astro` (the `GTM_ID` constant near the top).

## Step 1 — Create the accounts (once, ~30 min)

1. **Google Tag Manager** — [tagmanager.google.com](https://tagmanager.google.com)
   → create account "VIP Concierge" → container for `dcvipconcierge.com`, type
   **Web**. Copy the container ID (`GTM-XXXXXXX`).
2. **Google Analytics 4** — [analytics.google.com](https://analytics.google.com)
   → create a GA4 property for the site. Copy the Measurement ID (`G-XXXXXXX`).
3. **Google Ads** — [ads.google.com](https://ads.google.com) → create the
   account (skip the "first campaign" wizard via "Switch to expert mode" if
   offered). Then **Tools → Data manager → Google Analytics** and link the GA4
   property.

## Step 2 — Activate GTM on the site (one line)

In `src/layouts/BaseLayout.astro`, set:

```js
const GTM_ID = "GTM-XXXXXXX"; // your real container ID
```

Rebuild and deploy. Verify with GTM **Preview** mode: you should see
`cta_click` when clicking Book Now, and `phone_click` when clicking the phone
number.

## Step 3 — Wire the events in GTM (~15 min)

In the GTM container:

1. Add a **Google Tag** (GA4) with your `G-XXXXXXX` ID, firing on All Pages.
2. Create **Custom Event triggers** for each of: `cta_click`, `phone_click`,
   `whatsapp_click`, `ores_widget_view`.
3. For each trigger, add a **GA4 Event tag** forwarding the same event name.
4. Publish the container.

In GA4 (**Admin → Events**), mark `phone_click` and `cta_click` as
**key events**. They'll then be importable into Google Ads as conversions
(**Google Ads → Goals → Conversions → New → Import → GA4**).

Recommended conversion values while learning: phone click ≈ high value
(most limo bookings close by phone), Book Now click ≈ medium.

## Step 4 — The real booking conversion (inside Limo Anywhere)

The completed-reservation "thank you" screen happens **inside the ORES iframe**
on `book.mylimobiz.com`, so the site itself can't see it. Limo Anywhere
supports this natively:

1. In Limo Anywhere: **My Office → Online Reservation Settings (ORES v4)**.
2. Find the **Google Analytics / tracking** settings and enter your GA4
   Measurement ID (and Google Ads conversion ID if the field exists).
3. This makes the *actual completed booking* fire as a conversion with
   cross-domain attribution back to the ad click — the gold-standard signal
   for Google Ads bidding.
4. If the fields aren't visible on your plan, Limo Anywhere support enables
   ORES tracking codes on request — ask for "Google Analytics 4 and Google
   Ads conversion tracking in ORES v4."

## Step 5 — Campaign pointers for optimal results

- **Landing pages**: send booking-intent ads ("black car service dc",
  "airport limo dulles") to `/book`; send high-touch queries ("armored
  transportation", "executive protection transport") to the matching service
  page — those convert by consultation, not by form.
- **Call ads / call extensions**: add +1 703-287-4227 as a call asset with
  Google forwarding numbers so Google counts calls from ads directly — this
  complements the on-site `phone_click` tracking.
- **Bidding**: start with Maximize Clicks for ~2 weeks to gather data, then
  switch to Maximize Conversions once phone + booking conversions are
  recording.
- Also complete the two TODOs in `BaseLayout.astro` head: Google **Search
  Console** verification and an `og:image` — both help Quality Score and ad
  extensions indirectly.
