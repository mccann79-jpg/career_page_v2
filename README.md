# Research Portfolio — Brendan McCann, CFA

A minimal, config-driven static site for showcasing selected research.

## File Structure

```
career_page/
├── index.html              ← Main page (rarely needs editing)
├── css/styles.css           ← All styles
├── js/
│   ├── site.config.js       ← ⭐ EDIT THIS to change tabs & content
│   └── main.js              ← App logic (tabs, viewers, zoom)
├── pages/
│   ├── tools.html           ← Content for Tools tab
│   └── notes.html           ← Content for Notes tab
├── assets/
│   ├── img/                 ← Headshot + favicons
│   ├── docs/                ← Resume, cover letter
│   └── pdfs/                ← Research PDFs
└── README.md
```

## Quick Start

1. Drop your `resume.pdf` and `cover-letter.pdf` into `assets/docs/`
2. Run locally:
   ```bash
   # VS Code Live Server, or:
   npx serve .
   # or:
   python3 -m http.server
   ```
3. Edit `js/site.config.js` to add/remove/reorder tabs

## Adding a Tab

Open `js/site.config.js` and add an entry to the `tabs` array:

```js
{
  id:    "my-paper",       // URL hash (#my-paper)
  label: "My Paper",       // Tab button text
  type:  "pdf",            // "pdf" | "web" | "html"
  file:  "assets/pdfs/my-paper.pdf",
  title: "My Paper Title",
  meta:  "Publication · Date"
}
```

### Tab types

| Type   | Key fields      | Description                    |
|--------|-----------------|--------------------------------|
| `pdf`  | `file`, `meta`  | Opens PDF in embedded viewer   |
| `web`  | `url`           | Embeds a URL in an iframe      |
| `html` | `page` or `html`| Loads an HTML file or inline   |

## GitHub Pages

The `<base>` tag auto-detects localhost vs. GitHub Pages (`/career_page/`).
If your repo name differs, update the base path in `index.html`.

## License

Content © Brendan McCann. Code: MIT.
