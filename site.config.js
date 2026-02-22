/**
 * site.config.js
 * ─────────────────────────────────────────────────
 * All site content lives here. Edit this file to
 * add tabs, change links, update text, etc.
 * ─────────────────────────────────────────────────
 */

var SITE = {

  /* ── Tabs ───────────────────────────────────────
     type: "pdf" | "web" | "html"
     ─────────────────────────────────────────────── */
  tabs: [
    {
      id:    "newsletter",
      label: "Newsletter Article — What Makes an ETF Bad?",
      type:  "pdf",
      file:  "assets/pdfs/what-makes-an-etf-bad.pdf",
      title: "Newsletter Article — What Makes an ETF Bad?",
      meta:  "Morningstar ETFInvestor · June 2025"
    },
    {
      id:    "watchlist",
      label: "ETF Investor Newsletter Watchlist",
      type:  "pdf",
      file:  "assets/pdfs/etf-investor-newsletter-watchlist.pdf",
      title: "ETF Investor Newsletter Watchlist",
      meta:  "Morningstar ETFInvestor · Data through Nov. 30, 2025"
    },
    {
      id:    "web-article",
      label: "Web Article",
      type:  "web",
      url:   "https://www.morningstar.com/author/brendan-mccann/articles",
      title: "Web Article"
    },
    {
      id:    "media",
      label: "Media Citations",
      type:  "html",
      title: "Media Citations",
      page:  null,           // or "pages/media.html" to load from file
      html:  null            // filled at runtime if page is null
    },
    {
      id:    "tools",
      label: "Tools",
      type:  "html",
      title: "Tools",
      page:  "pages/tools.html"
    },
    {
      id:    "notes",
      label: "Notes",
      type:  "html",
      title: "Notes",
      page:  "pages/notes.html"
    }
  ],

  defaultTab: 0
};
