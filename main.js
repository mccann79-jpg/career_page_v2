/**
 * main.js
 * ─────────────────────────────────────────────────
 * Reads SITE config → builds tabs → shows panels.
 * No frameworks, no dependencies.
 * ─────────────────────────────────────────────────
 */
(function () {
  "use strict";

  /* ── Safety checks ─────────────────────────────── */
  if (typeof SITE === "undefined") {
    console.error("main.js: SITE is not defined. Check that site.config.js loaded before main.js.");
    return;
  }

  var container = document.getElementById("tabsContainer");
  if (!container) {
    console.error("main.js: #tabsContainer not found in the DOM.");
    return;
  }

  var tabs      = SITE.tabs;
  var activeIdx = SITE.defaultTab || 0;

  // Panels
  var panelPdf  = document.getElementById("panelPdf");
  var panelWeb  = document.getElementById("panelWeb");
  var panelHtml = document.getElementById("panelHtml");

  // PDF elements
  var pdfFrame    = document.getElementById("pdfFrame");
  var pdfTitle    = document.getElementById("pdfTitle");
  var pdfMeta     = document.getElementById("pdfMeta");
  var pdfOpen     = document.getElementById("pdfOpen");
  var pdfDownload = document.getElementById("pdfDownload");

  // Web elements
  var webFrame   = document.getElementById("webFrame");
  var webTitle   = document.getElementById("webTitle");
  var webOpen    = document.getElementById("webOpen");
  var webBlocked = document.getElementById("webBlocked");

  // HTML elements
  var htmlContent = document.getElementById("htmlContent");

  /* ── Build tab buttons ─────────────────────────── */
  tabs.forEach(function (tab, i) {
    var btn = document.createElement("button");
    btn.className = "tab" + (i === activeIdx ? " tab--active" : "");
    btn.type = "button";
    btn.textContent = tab.label;
    btn.dataset.idx = i;
    btn.addEventListener("click", function () { activate(i); });
    container.appendChild(btn);
  });

  /* ── Zoom controls ─────────────────────────────── */
  var zoom = 1;
  var STEP = 0.15;

  document.getElementById("zoomIn").addEventListener("click", function () {
    zoom = Math.min(3, zoom + STEP);
    applyZoom();
  });
  document.getElementById("zoomOut").addEventListener("click", function () {
    zoom = Math.max(0.5, zoom - STEP);
    applyZoom();
  });
  document.getElementById("zoomFit").addEventListener("click", function () {
    zoom = 1;
    applyZoom();
  });

  function applyZoom() {
    pdfFrame.style.transform       = "scale(" + zoom + ")";
    pdfFrame.style.transformOrigin  = "top left";
    pdfFrame.style.width            = (100 / zoom) + "%";
    pdfFrame.style.height           = (100 / zoom) + "%";
  }

  /* ── Activate a tab ────────────────────────────── */
  function activate(idx) {
    activeIdx = idx;
    var tab = tabs[idx];

    // Update buttons
    var btns = container.querySelectorAll(".tab");
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle("tab--active", i === idx);
    }

    // Hide all panels
    panelPdf.hidden  = true;
    panelWeb.hidden  = true;
    panelHtml.hidden = true;

    // Reset zoom
    zoom = 1;
    applyZoom();

    // Show the right panel
    if (tab.type === "pdf")  showPdf(tab);
    if (tab.type === "web")  showWeb(tab);
    if (tab.type === "html") showHtml(tab);

    // Update hash
    history.replaceState(null, "", "#" + tab.id);
  }

  /* ── PDF panel ─────────────────────────────────── */
  function showPdf(tab) {
    panelPdf.hidden      = false;
    pdfTitle.textContent = tab.title || tab.label;
    pdfMeta.textContent  = tab.meta  || "";
    pdfOpen.href         = tab.file;
    pdfDownload.href     = tab.file;
    pdfFrame.src         = tab.file;
  }

  /* ── Web panel ─────────────────────────────────── */
  function showWeb(tab) {
    panelWeb.hidden      = false;
    webTitle.textContent = tab.title || tab.label;
    webOpen.href         = tab.url;
    webBlocked.hidden    = true;
    webFrame.hidden      = false;
    webFrame.src         = tab.url;
  }

  /* ── HTML panel ────────────────────────────────── */
  function showHtml(tab) {
    panelHtml.hidden = false;

    // Load from external file
    if (tab.page) {
      htmlContent.innerHTML = '<p class="loading">Loading…</p>';
      fetch(tab.page)
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          return r.text();
        })
        .then(function (html) { htmlContent.innerHTML = html; })
        .catch(function ()    { htmlContent.innerHTML = '<p>Failed to load. <a href="' + tab.page + '">Open directly</a>.</p>'; });
      return;
    }

    // Inline HTML or default placeholder
    htmlContent.innerHTML = tab.html || defaultHtml(tab);
  }

  function defaultHtml(tab) {
    return '<div class="placeholder">' +
      '<h2>' + (tab.title || tab.label) + '</h2>' +
      '<p>Content coming soon. Edit <code>site.config.js</code> to add content here, or create an HTML file in <code>pages/</code>.</p>' +
      '</div>';
  }

  /* ── Init from URL hash ────────────────────────── */
  function initFromHash() {
    var hash = location.hash.slice(1);
    if (hash) {
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].id === hash) { activeIdx = i; break; }
      }
    }
    activate(activeIdx);
  }

  initFromHash();
  window.addEventListener("hashchange", initFromHash);

  console.log("main.js: Loaded successfully. " + tabs.length + " tabs rendered.");

})();
