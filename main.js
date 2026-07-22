/* ==========================================================================
   Nakış & Nine — Vitrin Stilleri
   Palet: ekru zemin, çam yeşili (Manavgat/Köprülü kanyon), toz gülü (iç giyim),
          hardal/pirinç (iplik-iğne), mürekkep lacivert (metin)
   ========================================================================== */

:root {
  --ecru: #f6efe4;
  --ecru-deep: #ece1cf;
  --pine: #26463f;
  --pine-deep: #1a332e;
  --rose: #b8697d;
  --rose-soft: #e9c9d1;
  --brass: #b8892f;
  --ink: #2a2420;
  --ink-soft: #5c5248;
  --white: #fffdf9;

  --font-display: "Fraunces", "Iowan Old Style", serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "Space Mono", ui-monospace, monospace;

  --radius: 4px;
  --stitch: repeating-linear-gradient(
    90deg,
    var(--brass) 0px,
    var(--brass) 8px,
    transparent 8px,
    transparent 16px
  );
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--ecru);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img { max-width: 100%; display: block; }

a { color: inherit; }

h1, h2, h3, h4 {
  font-family: var(--font-display);
  font-weight: 600;
  margin: 0;
  color: var(--pine-deep);
}

.eyebrow {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brass);
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
}

.eyebrow::before {
  content: "";
  width: 18px;
  height: 1px;
  background: var(--brass);
  display: inline-block;
}

.stitch-divider {
  height: 2px;
  background: var(--stitch);
  border: none;
  margin: 0;
  opacity: 0.55;
}

.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 24px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.92rem;
  padding: 12px 22px;
  border-radius: var(--radius);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn:focus-visible { outline: 2px solid var(--brass); outline-offset: 2px; }

.btn-primary { background: var(--pine); color: var(--white); }
.btn-primary:hover { background: var(--pine-deep); box-shadow: 0 6px 16px rgba(26,51,46,0.25); }

.btn-ghost {
  background: transparent;
  color: var(--pine-deep);
  border-color: var(--pine-deep);
}
.btn-ghost:hover { background: var(--pine-deep); color: var(--white); }

.btn-whatsapp { background: #2f6b4f; color: var(--white); }
.btn-whatsapp:hover { background: #234f3a; }

.btn-sm { padding: 8px 14px; font-size: 0.82rem; }

/* ---------- Header ---------- */
.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(246, 239, 228, 0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(42, 36, 32, 0.08);
}

.site-header .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--pine);
  color: var(--white);
  font-family: var(--font-display);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1.25rem;
  color: var(--pine-deep);
  line-height: 1.1;
}

.brand-tagline {
  font-size: 0.72rem;
  color: var(--ink-soft);
  font-family: var(--font-mono);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
  font-size: 0.9rem;
  font-weight: 500;
}

.nav-links a { text-decoration: none; color: var(--ink); }
.nav-links a:hover { color: var(--rose); }

.header-actions { display: flex; align-items: center; gap: 12px; }

.nav-toggle {
  display: none;
  background: none;
  border: 1px solid var(--pine-deep);
  border-radius: var(--radius);
  padding: 8px 10px;
  cursor: pointer;
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  padding: 88px 0 72px;
  overflow: hidden;
  background:
    radial-gradient(circle at 82% 20%, rgba(184,105,125,0.18), transparent 55%),
    radial-gradient(circle at 10% 85%, rgba(38,70,63,0.14), transparent 50%);
}

.hero .wrap {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 56px;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.1rem, 4.2vw, 3.4rem);
  line-height: 1.08;
  white-space: pre-line;
  margin: 18px 0 20px;
}

.hero-title .accent { color: var(--rose); font-style: italic; }

.hero-sub {
  color: var(--ink-soft);
  font-size: 1.05rem;
  max-width: 46ch;
  margin-bottom: 30px;
}

.hero-actions { display: flex; gap: 14px; flex-wrap: wrap; }

.hero-visual {
  position: relative;
  aspect-ratio: 4/5;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 24px 60px -18px rgba(26,51,46,0.35);
  border: 6px solid var(--white);
}

.hero-visual img { width: 100%; height: 100%; object-fit: cover; }

.hero-badge {
  position: absolute;
  bottom: -18px;
  left: -18px;
  background: var(--white);
  border-radius: 12px;
  padding: 14px 18px;
  box-shadow: 0 14px 30px -10px rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.hero-badge strong {
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--pine);
  display: block;
}

/* ---------- Section shell ---------- */
.section { padding: 64px 0; }
.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 34px;
  flex-wrap: wrap;
}
.section-title { font-size: clamp(1.6rem, 2.6vw, 2.1rem); margin-top: 10px; }

/* ---------- Categories ---------- */
.cat-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 18px;
}

.cat-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3/3.6;
  cursor: pointer;
  border: none;
  padding: 0;
  background: var(--pine-deep);
  text-align: left;
  font-family: inherit;
}

.cat-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.78;
  transition: transform 0.4s ease, opacity 0.3s ease;
}
.cat-card:hover img { transform: scale(1.06); opacity: 0.62; }

.cat-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(26,51,46,0.88) 100%);
}

.cat-card-label {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 2;
  color: var(--white);
}

.cat-card-label .name {
  font-family: var(--font-display);
  font-size: 1.05rem;
  display: block;
}
.cat-card-label .desc {
  font-size: 0.74rem;
  opacity: 0.85;
  font-family: var(--font-mono);
}

.cat-card.is-active {
  outline: 3px solid var(--brass);
  outline-offset: 3px;
}

/* ---------- Products ---------- */
.filter-bar {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.chip {
  border: 1px solid rgba(42,36,32,0.18);
  background: var(--white);
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 0.84rem;
  cursor: pointer;
  font-weight: 500;
}
.chip.is-active { background: var(--pine); color: var(--white); border-color: var(--pine); }

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}

.product-card {
  background: var(--white);
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid rgba(42,36,32,0.08);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.product-card:hover { box-shadow: 0 16px 32px -14px rgba(26,51,46,0.25); transform: translateY(-3px); }

.product-thumb { position: relative; aspect-ratio: 1/1; overflow: hidden; background: var(--ecru-deep); }
.product-thumb img { width: 100%; height: 100%; object-fit: cover; }

.product-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: var(--rose);
  color: var(--white);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 9px;
  border-radius: 100px;
}
.product-badge.out { background: var(--ink-soft); }

.product-body { padding: 16px; display: flex; flex-direction: column; gap: 6px; flex: 1; }
.product-cat { font-family: var(--font-mono); font-size: 0.68rem; color: var(--brass); text-transform: uppercase; letter-spacing: 0.06em; }
.product-name { font-family: var(--font-display); font-size: 1.05rem; color: var(--pine-deep); }
.product-price-row { margin-top: auto; display: flex; align-items: baseline; gap: 8px; padding-top: 8px; }
.price-now { font-weight: 700; font-size: 1.05rem; color: var(--pine-deep); }
.price-old { font-size: 0.82rem; color: var(--ink-soft); text-decoration: line-through; }

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--ink-soft);
  font-family: var(--font-mono);
  font-size: 0.9rem;
}

/* ---------- About strip ---------- */
.about-strip {
  background: var(--pine);
  color: var(--ecru);
  padding: 56px 0;
}
.about-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
.about-item .num { font-family: var(--font-mono); color: var(--rose-soft); font-size: 0.78rem; margin-bottom: 8px; display: block; }
.about-item h3 { color: var(--white); font-size: 1.15rem; margin-bottom: 8px; }
.about-item p { color: rgba(246,239,228,0.75); font-size: 0.9rem; margin: 0; }

/* ---------- Footer ---------- */
.site-footer { background: var(--pine-deep); color: rgba(246,239,228,0.8); padding: 56px 0 26px; }
.footer-grid { display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 40px; margin-bottom: 40px; }
.footer-brand .brand-name { color: var(--white); }
.footer-brand p { max-width: 34ch; font-size: 0.88rem; margin-top: 12px; color: rgba(246,239,228,0.65); }
.footer-col h4 { color: var(--white); font-size: 0.92rem; margin-bottom: 14px; }
.footer-col p, .footer-col a { display: block; font-size: 0.86rem; color: rgba(246,239,228,0.7); text-decoration: none; margin-bottom: 8px; }
.footer-col a:hover { color: var(--rose-soft); }
.footer-bottom {
  border-top: 1px solid rgba(246,239,228,0.14);
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  font-size: 0.78rem;
  color: rgba(246,239,228,0.5);
  flex-wrap: wrap;
  gap: 10px;
}
.footer-bottom a { color: rgba(246,239,228,0.5); text-decoration: none; }
.footer-bottom a:hover { color: var(--rose-soft); }

/* ---------- Modal ---------- */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26,20,16,0.55);
  display: none;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 100;
}
.modal-overlay.is-open { display: flex; }

.modal {
  background: var(--white);
  border-radius: 12px;
  max-width: 780px;
  width: 100%;
  max-height: 88vh;
  overflow: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 14px;
  right: 14px;
  background: var(--white);
  border: none;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  z-index: 2;
}
.modal-img { background: var(--ecru-deep); }
.modal-img img { width: 100%; height: 100%; object-fit: cover; min-height: 280px; }
.modal-info { padding: 30px; display: flex; flex-direction: column; }
.modal-info .product-cat { margin-bottom: 8px; }
.modal-info h3 { font-size: 1.5rem; margin-bottom: 12px; }
.modal-info .desc { color: var(--ink-soft); font-size: 0.92rem; margin-bottom: 20px; }
.modal-price { display: flex; align-items: baseline; gap: 10px; margin-bottom: 22px; }
.modal-price .price-now { font-size: 1.6rem; }
.modal-stock { font-family: var(--font-mono); font-size: 0.78rem; margin-bottom: 20px; }
.modal-stock.in { color: #2f6b4f; }
.modal-stock.out { color: #a13d3d; }
.modal-actions { display: flex; gap: 12px; margin-top: auto; flex-wrap: wrap; }

/* ---------- Responsive ---------- */
@media (max-width: 980px) {
  .cat-row { grid-template-columns: repeat(3, 1fr); }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .about-grid { grid-template-columns: 1fr; gap: 22px; }
  .footer-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 720px) {
  .nav-links { display: none; }
  .nav-toggle { display: inline-flex; }
  .hero .wrap { grid-template-columns: 1fr; }
  .hero-visual { order: -1; max-width: 320px; margin: 0 auto; }
  .cat-row { grid-template-columns: repeat(2, 1fr); }
  .grid { grid-template-columns: repeat(2, 1fr); }
  .modal { grid-template-columns: 1fr; }
  .modal-img img { min-height: 200px; }
  .footer-grid { grid-template-columns: 1fr; gap: 28px; }
}

@media (max-width: 460px) {
  .grid { grid-template-columns: 1fr 1fr; gap: 12px; }
  .product-body { padding: 12px; }
}

@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}
