# Frozenholm

Shopify Online Store 2.0 theme for **Frozenholm**, a minimalist streetwear
label built around limited drops, combos, collabs and an archive of past
seasons. The visual language borrows from Acne Studios and Balenciaga:
black-on-white, bold condensed type for headings, blue link-style product
titles, and edge-to-edge product grids.

## About

Frozenholm ships in small, numbered drops rather than a continuous
catalogue. The site is structured around that: a **New** page for the
current drop, **Combos** for curated outfits, **Collabs** for partner
releases, and an **Archive** documenting past drops and the brand's
story. Everything else (cart, search, help) is built to stay out of the
way of the product.

## Structure

- `layout/theme.liquid` — the whole shell: header, mobile nav drawer,
  search overlay, help flyout, footer. These are hand-built directly in
  the layout rather than as sections.
- `sections/` — one section per page type (`home`, `combos`, `collabs`,
  `archive`, `support`, `new`, `cart`, `main-404`, `product`, `page`,
  `social`) plus the generic `collection`.
- `templates/` — JSON templates. Page-type templates follow Shopify's
  `page.<handle>.json` convention (e.g. `page.archive.json`) so they can
  be assigned to a Page in the admin.
- `snippets/product-card.liquid` — the shared product tile, including
  hover swatches for products with a Color/Colour option.
- `assets/theme.css`, `assets/theme.js` — all styling and behavior lives
  in these two files (no build step).
- `assets/frozenholm-logo.png`, `assets/favicon.png` — the wordmark and
  favicon, cropped from the same source artwork.

## Fonts

- **Big Shoulders Display** (700–900) — hero headline, page banners, 404.
- **Jost** (400–500) — body copy, product descriptions, everything else.

Both are loaded via Google Fonts in `layout/theme.liquid`.

## Setting up pages in Shopify Admin

`New`, `Combos`, `Collabs` and `Archive` are Shopify **Pages**, not
collections — the theme code is ready, but each one only exists live
once it's created in the admin:

1. Online Store → Pages → Add page
2. Set the title (this sets the handle, e.g. `new`)
3. Under **Theme template**, choose the matching template
   (`page.new`, `page.combos`, `page.collabs`, `page.archive`)
4. Save

`Collabs` is currently hidden from navigation (commented out in
`layout/theme.liquid`) until that page is ready to launch.

## Local development

This repo has no build step — it's plain Liquid, CSS and JS. Use the
[Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to preview
against a development store:

```
shopify theme dev
```
