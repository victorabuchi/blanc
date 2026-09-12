# Blanc

A Shopify Online Store 2.0 theme built for minimalist streetwear and
label-style stores: limited drops, combos, collabs and an archive of past
seasons. The visual language borrows from Acne Studios and Balenciaga:
black-on-white, small uppercase type, blue link-style product titles, and
edge-to-edge product grids.

## About

Blanc is built around small, numbered drops rather than a continuous
catalogue. The site is structured around that: a **New** page for the
current drop, **Combos** for curated outfits, **Collabs** for partner
releases, and an **Archive** documenting past drops and the brand's
story. Everything else (cart, search, help) is built to stay out of the
way of the product.

## Structure

- `layout/theme.liquid` — the document shell for the main storefront:
  `<head>` (SEO/OG meta, color and font custom properties),
  `{% sections 'header-group' %}`, `{{ content_for_layout }}`,
  `{% sections 'footer-group' %}`.
- `layout/password.liquid` — a minimal shell (no header/footer nav) for
  the storefront password page.
- `sections/header.liquid`, `sections/footer.liquid` — the header (nav,
  mobile drawer, search overlay with suggested products, help flyout,
  discover overlay) and footer (newsletter, links, first-visit cookie
  consent banner, cookie/location overlays, contact widget), rendered
  through `sections/header-group.json` / `sections/footer-group.json`
  so merchants can reorder/add sections there from the theme editor.
- `sections/` — one section per page type: the brand's own pages
  (`home`, `combos`, `collabs`, `archive`, `support`, `new`, `social`,
  generic `page`), commerce pages (`product`, `collection`, `cart`,
  `list-collections`, `search`), content pages (`blog`, `article`,
  `page-contact`), system pages (`main-404`, `password`), and
  `custom-liquid` as an app/merchant insertion point. `related-products`
  and `complementary-products` are nested inside `product.liquid` via
  `{% section %}` and populated client-side through Shopify's Product
  Recommendations API.
- `templates/` — JSON templates, plus the standalone
  `templates/gift_card.liquid` (issued gift card page; uses
  `{% layout none %}` since it's intentionally outside the normal site
  chrome). Page-type templates follow Shopify's `page.<handle>.json`
  convention (e.g. `page.archive.json`, `page.contact.json`) so they
  can be assigned to a Page in the admin.
- `snippets/product-card.liquid` — the shared product tile: image,
  color swatches, sold-out state, price and unit price.
- `assets/theme.css`, `assets/theme.js` — all styling and behavior
  lives in these two files (no build step). `assets/qrcode.min.js` is a
  vendored MIT QR code generator used only on the gift card page.
- `assets/blanc-logo.png`, `assets/favicon.png` — the wordmark and
  favicon, cropped from the same source artwork.
- `locales/en.default.json` — all UI copy, grouped by namespace
  (`general`, `products`, `collections`, `search`, `blogs`, `contact`,
  `gift_cards`, `404`).

## Theme settings

Colors, heading/body fonts, the favicon, and the search overlay's
suggested-products collection are merchant-configurable under Theme
settings in the editor (`config/settings_schema.json`) — not
hardcoded. CSS custom properties (`--color-*`, `--font-*`) are emitted
from those settings in `layout/theme.liquid` and consumed throughout
`assets/theme.css`.

## Commerce features

Built to meet the Shopify Theme Store's functional requirements:

- **Faceted filtering** on collection pages (`collection.filters`, list/
  boolean pills and a price range form), with an item count and clear
  filters link.
- **Unit pricing** on product, collection/search grids, and cart, shown
  only when a variant actually has `unit_price_measurement` set.
- **Discounts** shown per line item and for the whole order in the cart
  (checkout and order-status pages are Shopify-hosted and already show
  discounts natively).
- **Accelerated checkout** (`payment_button`) and the **Shop Pay
  Installments** banner (`payment_terms`) on product and cart — both
  only render when the corresponding payment method is enabled in the
  store's own settings.
- **Gift card recipient form** on the product page for gift card
  products (send-to-a-friend with an optional message and scheduled
  send date), disabled automatically alongside accelerated checkout per
  Shopify's own compatibility note.
- **Related and complementary product recommendations** on the product
  page.
- A **first-visit cookie consent banner** wired into Shopify's Customer
  Privacy API, in addition to the always-available cookie settings
  panel in the footer.

## Setting up pages in Shopify Admin

`New`, `Combos`, `Collabs`, `Archive` and `Contact` are Shopify
**Pages**, not collections — the theme code is ready, but each one only
exists live once it's created in the admin:

1. Online Store → Pages → Add page
2. Set the title (this sets the handle, e.g. `new`)
3. Under **Theme template**, choose the matching template
   (`page.new`, `page.combos`, `page.collabs`, `page.archive`,
   `page.contact`)
4. Save

`Collabs` is currently hidden from navigation (commented out in
`sections/header.liquid`) until that page is ready to launch.

## Local development

This repo has no build step — it's plain Liquid, CSS and JS. Use the
[Shopify CLI](https://shopify.dev/docs/api/shopify-cli) to preview
against a development store:

```
shopify theme dev
```

## Support

Questions about the theme code: contact@victorabuchi.com
