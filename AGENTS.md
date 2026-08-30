# AGENTS.md

Operating instructions for this repo. Voice lives in `SOUL.md`. Identity in `IDENTITY.md`. Operator directives in `USER.md`.

## Stack

Static MVP. No bundler, no React, no Next.js, no CMS.

- HTML shells per route
- One renderer: `assets/site.js`
- One stylesheet: `assets/styles.css`
- Preview: `py -m http.server 5173` then `http://127.0.0.1:5173/`
- Deploy: Vercel project `kamps-montage-techniek`
- Shell: Windows PowerShell

Do not introduce a build step or framework unless the operator explicitly asks.

## File map

| Path | Role |
|---|---|
| `*/index.html` | Thin shell: `lang="nl"`, stylesheet, module script, `data-page`, optional `data-service` |
| `assets/site.js` | All copy, nav, schema, forms, page renderers |
| `assets/styles.css` | Design tokens and layout |
| `sitemap.xml` | Public routes |
| `robots.txt` | Allow + sitemap URL |

New page = new HTML shell + renderer in `site.js` + `sitemap.xml` entry. If CSS or JS changes, bump the `?v=` query on every shell that loads them (currently `?v=7`).

## Content model

Edit objects in `assets/site.js`. Do not scatter customer copy into HTML.

- `BUSINESS` — name, owner, phone, WhatsApp, email, KvK, city, URL
- `SERVICES` — one object per slug: title, navTitle, eyebrow, description, meta, points, process, keywords, optional `urgent`
- `PRIMARY_SERVICE_SLUGS` — `dakdekken` only
- `ADDITIONAL_SERVICE_SLUGS` — bitumen-dakbedekking, dak-overlagen, dakisolatie, lekkageherstel-spoedservice, trespa-plaatsen, rolluiken-plaatsen, garagedeuren-plaatsen, montagewerk
- `PROJECTS` — plaats, dienst, beginsituatie (`before`), werkzaamheden (`work`), resultaat, CTA, alt
- `REVIEWS`, `FAQS`, `PRICE_FACTORS`, `PAGE_META`

Primary services get the full SEO layout (`servicePage`). Additional services get the simpler layout (`additionalServicePage`) and `noindex,follow`. Keep them under "Andere diensten". Do not move a slug between the two lists without being asked.

Escape any interpolated string that could include user or CMS-like input with `escapeHtml`.

## Business rules

- Specialism: platte bitumen daken. Not EPDM. Not pitched-roof dakdekken.
- Workgebied: heel Nederland.
- No public prices. Use `PRICE_FACTORS` and offerte op maat.
- Conversion path: call + WhatsApp. Sticky mobile CTA stays.
- Contact form is client-side: it prepares mailto / WhatsApp text. There is no form backend.

## Honesty and launch

`BUSINESS.phone` / WhatsApp are placeholders (`06 00 00 00 00`). KvK is `"KvK-nummer volgt"`. Reviews and projects are examples until replaced with approved real ones.

Never present placeholders as live facts. Don't invent phone numbers, KvK, reviews, or project places.

FAQ JSON-LD is only emitted on home and contact — pages where the FAQ is visible. Don't add schema for hidden FAQ copy.

Before launch, still to replace: real logo SVG, real project photos, real contact details, real reviews, real project cases, privacy review, optional form backend.

## Copy and SEO

Customer-facing copy: Dutch, `u`-form, short, practical. Primary SEO stays on bitumen dakdekken. Additional services are available, not the ranking play.

Schema: `RoofingContractor` on every page; `Service` on service pages; `FAQPage` only where the FAQ markup is shown.

## Verify

After UI, copy, layout, or routing changes:

1. Serve locally on port 5173.
2. Open the changed route the way a customer would.
3. Check shared chrome: header, service nav, footer, sticky mobile CTA.
4. Check empty/error-ish states that the change could hit (additional-service noindex, form note, urgent lekkage CTAs).

No browser tools? Use the static server and say what you could not click through.
