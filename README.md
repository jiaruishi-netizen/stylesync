# StyleSync

An AI wardrobe stylist that builds outfits from clothes you already own.

Built for **UGBA 117 — Digital Transformation**, Summer 2026.

**Live:** https://stylesync-pitch.netlify.app

## What it does

- **Get Dressed** — describe the occasion, temperature and weather; get 2–3 complete
  outfits assembled only from items in your wardrobe, each explained in plain language.
- **Pack a Trip** — picks the smallest set of clothes that still covers a trip,
  favouring pieces that pack flat, resist creasing and go with everything.
- **Wardrobe** — photograph a garment and an AI vision model fills in category,
  subcategory, colour, pattern, season, style, warmth and formality. Every tag is
  editable; nothing is saved until you confirm it.
- **ZARA test data** — one-click import of 100 public catalogue items for demoing
  the app with a full wardrobe. Images are referenced from their official URLs,
  never re-hosted, and each item links back to its source product page.

## Stack

Static single-page app, no build step. Netlify Functions provide the vision endpoint
(`/api/classify-garment`) so the Anthropic API key stays server-side. Supabase handles
optional accounts and cross-device sync; without logging in everything works locally
in the browser. Weather comes from Open-Meteo.

## Local development

Serve the directory over HTTP — opening `index.html` as a `file://` page blocks the
JSON fetch that the ZARA import needs.

```
npx http-server . -p 4173 -c-1
```

The vision endpoint only runs on Netlify; locally the app falls back to on-device
colour and pattern detection and says so in the tagging panel.

## Database

`supabase-schema.sql` creates the wardrobe and profile tables with row-level security.
`supabase-migration.sql` adds the season and product-source columns used by the import.
Cloud sync degrades gracefully if the migration has not been applied.
