# Kamps Montage Techniek MVP Website

Static MVP website for Kamps Montage Techniek, focused on platte bitumen daken, dak overlagen, dakisolatie and spoed bij lekkage.

## Preview

Run a local static server from this folder:

```powershell
py -m http.server 5173
```

Then open `http://127.0.0.1:5173/`.

## Replace Before Launch

- Designer logo if Luca supplies one (current mark: `assets/logo.png`).
- Real project photos to replace the documentary service images in `assets/`.
- Approved reviews in `REVIEWS` and real project cases in `PROJECTS` (arrays are empty on purpose).
- Confirm `BUSINESS` contact facts with Luca if anything changes.
- Contact and offerte forms send through Web3Forms to the business inbox. Photos still go via WhatsApp.
- Have the privacyverklaring reviewed before publishing.

## Content Model

- Project cases include plaats, dienst, beginsituatie, uitgevoerde werkzaamheden, resultaat and CTA.
- Service pages include SEO terms, werkwijze, offerte-op-maat factors and nearby reviews/projects.
- FAQ schema is only emitted where the FAQ content is visible.
