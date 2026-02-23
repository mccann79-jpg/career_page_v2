# Selected Work — Brendan McCann, CFA

A single-file portfolio site. Everything lives in `index.html` — no build tools, no frameworks, no external JS files.

---

## File Structure

```
career_page_v2/
├── index.html                ← The entire site (edit tabs here)
├── assets/
│   ├── img/
│   │   ├── headshot.jpeg     ← Your headshot photo
│   │   ├── logos/            ← Media company logos (for citations tab)
│   │   │   └── example.png
│   │   ├── favicon.ico
│   │   ├── favicon-16.png
│   │   ├── favicon-32.png
│   │   ├── favicon-180.png
│   │   ├── favicon-192.png
│   │   ├── favicon-512.png
│   │   └── favicon.png
│   └── pdfs/
│       ├── resume.pdf
│       ├── what-makes-an-etf-bad.pdf
│       └── fund-rating.pdf
├── README.md
└── .gitignore
```

---

## Setup

### 1. Add your files

- **Headshot:** Replace `assets/img/headshot.jpeg`
- **Resume:** Put `resume.pdf` in `assets/pdfs/`
- **Research PDFs:** Put any PDFs in `assets/pdfs/`
- **Media logos:** Create `assets/img/logos/` and add logo images (PNG or SVG)

### 2. Run locally

```bash
cd career_page_v2
python3 -m http.server 8080
# Open: http://localhost:8080
```

### 3. Deploy to GitHub Pages

1. Push to GitHub
2. Settings → Pages → Source: `main` branch, `/ (root)`
3. Site will be at `https://yourusername.github.io/repo-name/`

---

## How to Edit Tabs

Open `index.html` and find the `var TABS = [` section (around line 175). Each tab is an object in the array.

### Add a PDF tab

1. Put your PDF in `assets/pdfs/`
2. Add this to the TABS array:

```js
{
  label: "My New Paper",
  type:  "pdf",
  file:  "assets/pdfs/my-new-paper.pdf",
  meta:  "Publication Name · Date"
},
```

### Add a link list tab (like Web Article)

```js
{
  label: "My Articles",
  type:  "html",
  html:  "<h2>Articles</h2>" +
         "<ul class='link-list'>" +
         "  <li>" +
         "    <a href='https://example.com/my-article' target='_blank'>Article Title</a>" +
         "    <span class='link-desc'>Brief description · Jan 2025</span>" +
         "  </li>" +
         "  <li>" +
         "    <a href='https://example.com/another' target='_blank'>Another Article</a>" +
         "    <span class='link-desc'>Another description · Dec 2024</span>" +
         "  </li>" +
         "</ul>"
},
```

**To add more links:** Copy the `<li>...</li>` block and change the URL, title, and description.

### Add a media citation tab (with logos)

1. Put logo images in `assets/img/logos/` (e.g. `bloomberg.png`, `wsj.png`)
2. Add or edit the Media Citations tab:

```js
{
  label: "Media Citations",
  type:  "html",
  html:  "<h2>Media Citations</h2>" +
         "<ul class='media-list'>" +
         "  <li>" +
         "    <img class='media-logo' src='assets/img/logos/bloomberg.png' alt='Bloomberg'>" +
         "    <div class='media-info'>" +
         "      <a href='https://bloomberg.com/article-url' target='_blank'>Article Title Here</a>" +
         "      <span class='link-desc'>Bloomberg · Jan 2025</span>" +
         "    </div>" +
         "  </li>" +
         "  <li>" +
         "    <img class='media-logo' src='assets/img/logos/wsj.png' alt='WSJ'>" +
         "    <div class='media-info'>" +
         "      <a href='https://wsj.com/article-url' target='_blank'>Another Citation</a>" +
         "      <span class='link-desc'>Wall Street Journal · Dec 2024</span>" +
         "    </div>" +
         "  </li>" +
         "</ul>"
},
```

**Logo tips:**
- Square images work best (the site displays them at 40×40px)
- PNG with transparent background looks cleanest
- Name them simply: `bloomberg.png`, `wsj.png`, `cnbc.png`

### Add an embedded website tab

```js
{
  label: "Live Dashboard",
  type:  "web",
  url:   "https://example.com/my-dashboard"
},
```

Note: Many sites block iframe embedding. If it shows blank, viewers can use the "Open in New Tab" button.

### Remove a tab

Delete the entire `{ ... },` block for that tab.

### Reorder tabs

Move the blocks up or down in the array. First item = default tab shown on load.

---

## How to Change Personal Info

Everything is in `index.html`:

| What              | How to find it                            |
|-------------------|-------------------------------------------|
| Name              | Search for `Brendan McCann, CFA`          |
| Subtitle          | Search for `Manager Research`             |
| Headshot          | Replace `assets/img/headshot.jpeg`        |
| Resume            | Replace `assets/pdfs/resume.pdf`          |
| Morningstar link  | Search for `morningstar.com/people`       |
| Page title        | Search for `<title>`                      |
| Section heading   | Search for `Selected Work`                |

---

## Troubleshooting

**Tabs don't show up:**
Open DevTools (Cmd+Option+I) → Console tab → look for red errors.

**PDF doesn't load:**
Check the filename matches exactly (case-sensitive). Make sure you're running a local server, not opening the file directly.

**Old version showing:**
Hard refresh: Cmd+Shift+R. Or open in an incognito window.

**Media logo not appearing:**
Check the path matches exactly. The `logos/` folder must be inside `assets/img/`.

---

## License

Content © Brendan McCann. Code: MIT.
