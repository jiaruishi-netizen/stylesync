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
- **Demo data** — separate one-click imports for ZARA, Urban Outfitters, and a
  12-item openly licensed wardrobe from Wikimedia Commons.
  The snapshots contain 100 ZARA and 40 Urban Outfitters records; only products with
  a raster image are added. Nine approved ZARA items use local AI-generated flat lays,
  clearly marked as prototype assets, ahead of their official reference photos.
- **No line-art garments** — the old 19-item illustrated closet is removed on load,
  and missing or failed images show a neutral “Photo unavailable” state.

## Stack

Static single-page app, no build step. Netlify Functions provide the vision endpoint
(`/api/classify-garment`) so the Anthropic API key stays server-side. Supabase handles
optional accounts and cross-device sync; without logging in everything works locally
in the browser. Weather comes from Open-Meteo.

## Local development

Serve the directory over HTTP — opening `index.html` as a `file://` page blocks the
JSON fetch that the ZARA import needs.

```
npm install
npm run serve
```

The vision endpoint only runs on Netlify; locally the app falls back to on-device
colour and pattern detection and says so in the tagging panel.

Run `npm run verify` to validate all datasets and all local image paths.

For a deterministic live presentation, simply open **Wardrobe**. A 28-item personal
wardrobe with project-local photos is present on first load; no import or reset step is
required. On **Get Dressed**, manually choose the occasion, temperature, weather,
and any preferences before clicking **Style me**.

## Database

`supabase-schema.sql` creates the wardrobe and profile tables with row-level security.
`supabase-migration.sql` adds the season and product-source columns used by the import.
Cloud sync degrades gracefully if the migration has not been applied.
