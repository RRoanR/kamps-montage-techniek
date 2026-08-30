# Kamps Montage Techniek MVP Website

Static MVP website for Kamps Montage Techniek, focused on platte bitumen daken, dak overlagen, dakisolatie and spoed bij lekkage.

## Preview

Run a local static server from this folder:

```powershell
py -m http.server 5173
```

Then open `http://127.0.0.1:5173/`.

## Replace Before Launch

- `assets/logo.svg`: replace with the real SVG logo.
- `assets/bitumen-dak-hero.png`: replace or supplement with real project photos.
- `assets/site.js`: update phone, WhatsApp, e-mail, KvK, vestigingsplaats, owner details and domain.
- Replace example reviews with approved real reviews.
- Replace example projects with real projectcases and alt text with actual place names.
- The contact form currently prepares an e-mail or WhatsApp message client-side. Connect it to e-mail, CRM or a form endpoint when a backend is available.
- Have the privacyverklaring reviewed before publishing.

## Content Model

- Project cases include plaats, dienst, beginsituatie, uitgevoerde werkzaamheden, resultaat and CTA.
- Service pages include SEO terms, werkwijze, offerte-op-maat factors and nearby reviews/projects.
- FAQ schema is only emitted where the FAQ content is visible.
