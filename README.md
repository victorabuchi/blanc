# Blanc

A Shopify Online Store 2.0 theme built for minimalist streetwear and
label-style stores: limited drops, combos, collabs and an archive of past
seasons. The visual language borrows from Acne Studios and Balenciaga:
black-on-white, bold condensed type for headings, blue link-style product
titles, and edge-to-edge product grids.

## About

Blanc is built around small, numbered drops rather than a continuous
catalogue. The site is structured around that: a **New** page for the
current drop, **Combos** for curated outfits, **Collabs** for partner
releases, and an **Archive** documenting past drops and the brand's
story. Everything else (cart, search, help) is built to stay out of the
way of the product.

## Structure

- `layout/theme.liquid` — the document shell: `<head>` (SEO/OG meta,
  color and font custom properties), `{% sections 'header-group' %}`,
  `{{ content_for_layout }}`, `{% sections 'footer-group' %}`.
- `sections/header.liquid`, `sections/footer.liquid` — the header (nav,
  mobile drawer, search overlay, help flyout, discover overlay) and
  footer (newsletter, links, cookie/location overlays, contact widget),
  rendered through `sections/header-group.json` /
  `sections/footer-group.json` so merchants can reorder/add sections
  there from the theme editor.
- `sections/` — one section per page type (`home`, `combos`, `collabs`,
  `archive`, `support`, `new`, `cart`, `main-404`, `product`, `page`,
  `social`) plus the generic `collection` and `custom-liquid`.
- `templates/` — JSON templates. Page-type templates follow Shopify's
  `page.<handle>.json` convention (e.g. `page.archive.json`) so they can
  be assigned to a Page in the admin.
- `snippets/product-card.liquid` — the shared product tile, including
  hover swatches for products with a Color/Colour option.
- `assets/theme.css`, `assets/theme.js` — all styling and behavior lives
  in these two files (no build step).
- `assets/blanc-logo.png`, `assets/favicon.png` — the wordmark and
  favicon, cropped from the same source artwork.

## Theme settings

Colors, heading/body fonts and the favicon are merchant-configurable
under Theme settings in the editor (`config/settings_schema.json`) —
not hardcoded. CSS custom properties (`--color-*`, `--font-*`) are
emitted from those settings in `layout/theme.liquid` and consumed
throughout `assets/theme.css`.

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

## Support

Questions about the theme code: contact@victorabuchi.com
