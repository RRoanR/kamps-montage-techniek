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

New page = new HTML shell + renderer in `site.js` + `sitemap.xml` entry. If CSS or JS changes, bump the `?v=` query on every shell that loads them (currently `?v=21`).

## Content model

Edit objects in `assets/site.js`. Do not scatter customer copy into HTML.

- `BUSINESS` — name, owner, phone, WhatsApp, email, KvK, city, URL
- `SERVICES` — one object per slug: title, navTitle, eyebrow, description, meta, points, process, keywords, optional `urgent`
- `PRIMARY_SERVICE_SLUGS` — `dakdekken` only
- `ADDITIONAL_SERVICE_SLUGS` — bitumen-dakbedekking, dak-overlagen, dakisolatie, lekkageherstel-spoedservice, trespa-plaatsen, montagewerk
- `PROJECTS` — plaats, dienst, beginsituatie (`before`), werkzaamheden (`work`), resultaat, CTA, alt
- `WORK_PHOTOS` — real job photos with honest alts, no invented places
- `REVIEWS`, `FAQS`, `PRICE_FACTORS`, `PAGE_META`

Primary services get the full SEO layout (`servicePage`). Additional services get the simpler layout (`additionalServicePage`) and `noindex,follow`. Keep them under "Andere diensten". Do not move a slug between the two lists without being asked.

Escape any interpolated string that could include user or CMS-like input with `escapeHtml`.

## Business rules

- Specialism: alle dakwerken, including pitched tile roofs and other dakrenovatie. SEO/focus stays bitumen dakdekken (torch-applied). Not EPDM.
- Workgebied: heel Nederland.
- No public prices. Use `PRICE_FACTORS` and offerte op maat.
- Conversion path: call + WhatsApp. Sticky mobile CTA stays.
- Contact and offerte forms post to Web3Forms (`BUSINESS.web3formsAccessKey`). Photos stay on WhatsApp.

## Honesty and launch

Contact facts live in `BUSINESS` in `assets/site.js` (phone, WhatsApp, e-mail, KvK, vestigingsnummer, adres). Treat those as the current public values. Do not invent replacements.

`REVIEWS` and `PROJECTS` stay empty until Luca supplies approved real quotes and cases with permission. Empty states replace fake cards.

Never present placeholders as live facts. Don't invent phone numbers, KvK, reviews, or project places.

FAQ JSON-LD is only emitted on home and contact — pages where the FAQ is visible. Don't add schema for hidden FAQ copy.

Before launch, still to replace: approved reviews, approved written project cases, privacy review. Logo is the current KAMPS / flat-roof mark in `assets/logo.png`.

## Copy and SEO

Customer-facing copy: Dutch, `u`-form, short, practical. Primary SEO stays on bitumen dakdekken. The company does all roof works, including schuine pannendaken; do not revert copy to “only flat bitumen / no pitched roofs”. Additional services are available, not the ranking play.

Schema: `RoofingContractor` on every page; `Service` on service pages; `FAQPage` only where the FAQ markup is shown.

## Verify

After UI, copy, layout, or routing changes:

1. Serve locally on port 5173.
2. Open the changed route the way a customer would.
3. Check shared chrome: header, footer, sticky mobile CTA.
4. Check empty/error-ish states that the change could hit (additional-service noindex, form note, urgent lekkage CTAs).

No browser tools? Use the static server and say what you could not click through.
