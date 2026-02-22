# Research Portfolio — Brendan McCann, CFA

A single-file research portfolio site. Everything lives in `index.html` — no build tools, no frameworks, no external JS files that can break.

---

## File Structure

```
career_page/
├── index.html              ← The entire site (edit tabs here)
├── assets/
│   ├── img/
│   │   ├── headshot.jpeg   ← Your headshot photo
│   │   ├── favicon.ico     ← Browser tab icon
│   │   ├── favicon-16.png
│   │   ├── favicon-32.png
│   │   ├── favicon-180.png ← Apple touch icon
│   │   ├── favicon-192.png
│   │   ├── favicon-512.png
│   │   └── favicon.png
│   └── pdfs/
│       ├── resume.pdf          ← Your resume
│       ├── cover-letter.pdf    ← Your cover letter
│       ├── what-makes-an-etf-bad.pdf
│       └── etf-investor-newsletter-watchlist.pdf
└── README.md
```

---

## Setup

### 1. Add your images

Put these files in `assets/img/`:
- `headshot.jpeg` — your professional headshot (square crop works best)
- All favicon files (favicon.ico, favicon-16.png, etc.)

### 2. Add your PDFs

Put these files in `assets/pdfs/`:
- `resume.pdf` — your resume
- `cover-letter.pdf` — your cover letter
- Any research PDFs you want to display

### 3. Run locally

From the repo folder, run one of these:

```bash
# Python (built into Mac)
python3 -m http.server 8080

# Then open: http://localhost:8080
```

Or use VS Code with the **Live Server** extension (right-click `index.html` → Open with Live Server).

### 4. Deploy to GitHub Pages

1. Push to GitHub
2. Go to repo Settings → Pages
3. Set source to `main` branch, root folder
4. Your site will be at `https://yourusername.github.io/repo-name/`

**Important:** If your repo is NOT named `career_page`, you don't need to change anything — there's no base path to worry about.

---

## How to Edit Tabs

Open `index.html` and find the `TABS` array (around line 175). It looks like this:

```js
var TABS = [
  {
    label: "Newsletter Article — What Makes an ETF Bad?",
    type:  "pdf",
    file:  "assets/pdfs/what-makes-an-etf-bad.pdf",
    meta:  "Morningstar ETFInvestor · June 2025"
  },
  // ... more tabs
];
```

### Add a PDF tab

1. Put your PDF in `assets/pdfs/`
2. Add an entry:

```js
{
  label: "My New Paper",
  type:  "pdf",
  file:  "assets/pdfs/my-new-paper.pdf",
  meta:  "Publication Name · Date"
},
```

### Add a website tab

```js
{
  label: "My Article on Morningstar",
  type:  "web",
  url:   "https://www.morningstar.com/your-article-url"
},
```

Note: Some websites block embedding. The "Open in New Tab" button will always work.

### Add an HTML content tab

```js
{
  label: "My Notes",
  type:  "html",
  html:  "<h2>Research Notes</h2><p>Write anything here using HTML.</p><ul><li>Point one</li><li>Point two</li></ul>"
},
```

### Remove a tab

Delete the entire `{ ... },` block for that tab.

### Reorder tabs

Just move the blocks up or down in the array. First item = first tab.

---

## How to Change Personal Info

All in `index.html`:

| What                | Where to find it                          |
|---------------------|-------------------------------------------|
| Name                | Search for `Brendan McCann, CFA`          |
| Subtitle            | Search for `Manager Research`             |
| Headshot            | Replace `assets/img/headshot.jpeg`        |
| Resume              | Replace `assets/pdfs/resume.pdf`          |
| Cover letter        | Replace `assets/pdfs/cover-letter.pdf`    |
| Morningstar link    | Search for `morningstar.com/people`       |
| Page title          | Search for `<title>`                      |

---

## Troubleshooting

**Tabs don't show up:**
- Open browser DevTools (Cmd+Option+I on Mac) → Console tab
- Look for red error messages

**PDF doesn't load:**
- Check the filename matches exactly (case-sensitive)
- Make sure you're running a local server (not opening the file directly)

**Old version showing:**
- Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
- Or open in an incognito/private window

**Website tab shows blank:**
- Many sites block iframe embedding — use the "Open in New Tab" button instead

---

## License

Content © Brendan McCann. Code: MIT.
