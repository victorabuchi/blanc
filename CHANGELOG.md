# Changelog

## 1.0.0 — Initial release

A Shopify Online Store 2.0 theme for minimalist streetwear and label-style
stores built around limited, numbered drops.

**Storefront**

- Merchant-configurable colors, heading/body fonts (via `font_picker`),
  and favicon under Theme settings.
- Header and footer as section groups (reorderable/extendable from the
  theme editor), with a search overlay (merchant-picked suggested
  products plus quick links), help flyout, and discover overlay.
- Product page built from blocks (title, vendor, price, piece number,
  variant picker, quantity, buy buttons, description, custom Liquid,
  app blocks), with a live-updating multi-option variant picker.
- Faceted collection filtering (type/vendor/variant options, price
  range) plus sorting, an item count, and a clear-filters link.
- Unit pricing on product, collection/search grids, and cart.
- Discount display on cart, per line item and for the whole order.
- Accelerated checkout buttons and the Shop Pay Installments banner on
  product and cart.
- Gift card recipient form (send-to-a-friend, optional message and
  scheduled send date) on gift card products.
- Related and complementary product recommendations on the product
  page.
- A first-visit cookie consent banner wired to Shopify's Customer
  Privacy API, plus an always-available cookie settings panel.
- Search results, collections list, blog/article, contact, password,
  and issued gift card pages/templates.
- Product structured data (schema.org `Product`/`Offer`) for Google
  rich snippets.

**Pages**

- `New`, `Combos`, `Collabs`, `Archive`, `Support`, `FAQ`, and `Social`
  as the brand's own custom page templates.

**Fixes during development**

- A section referenced directly by a JSON template (rather than added
  through the theme editor) rendered with none of its default content
  blocks — affected the product, archive, collabs, and FAQ pages.
- A broken collection pagination tag that silently did nothing.
- Several Liquid syntax errors from filters used inside tag parameters
  where Liquid doesn't support them (`for`/`form` tags).
