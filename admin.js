/* ==========================================================================
   Nakış & Nine — Admin Paneli Stilleri
   ========================================================================== */

:root {
  --ecru: #f6efe4;
  --pine: #26463f;
  --pine-deep: #1a332e;
  --rose: #b8697d;
  --brass: #b8892f;
  --ink: #2a2420;
  --ink-soft: #5c5248;
  --white: #fffdf9;
  --line: rgba(42,36,32,0.12);
  --danger: #a13d3d;
  --ok: #2f6b4f;
  --font-display: "Fraunces", serif;
  --font-body: "Inter", sans-serif;
  --font-mono: "Space Mono", monospace;
  --radius: 8px;
}

* { box-sizing: border-box; }
body {
  margin: 0;
  font-family: var(--font-body);
  background: var(--ecru);
  color: var(--ink);
}
h1, h2, h3 { font-family: var(--font-display); margin: 0; color: var(--pine-deep); }
img { max-width: 100%; display: block; }

/* ---------- Login ---------- */
.login-screen {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(184,105,125,0.18), transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(38,70,63,0.2), transparent 50%),
    var(--pine-deep);
  padding: 20px;
}
.login-card {
  background: var(--white);
  border-radius: 14px;
  padding: 40px;
  max-width: 380px;
  width: 100%;
  box-shadow: 0 30px 60px -20px rgba(0,0,0,0.5);
}
.login-card .mark {
  width: 46px; height: 46px; border-radius: 50%;
  background: var(--pine); color: var(--white);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); margin-bottom: 18px; font-size: 1.1rem;
}
.login-card h1 { font-size: 1.4rem; margin-bottom: 6px; }
.login-card p.sub { color: var(--ink-soft); font-size: 0.88rem; margin: 0 0 24px; }
.login-error {
  background: #fbe9e7; color: var(--danger); font-size: 0.82rem;
  padding: 10px 12px; border-radius: 6px; margin-bottom: 16px; display: none;
}
.login-error.show { display: block; }
.login-hint {
  margin-top: 18px; font-family: var(--font-mono); font-size: 0.72rem;
  color: var(--ink-soft); background: var(--ecru); padding: 10px 12px; border-radius: 6px;
}

/* ---------- Layout ---------- */
.admin-shell { display: flex; min-height: 100vh; }

.sidebar {
  width: 240px;
  flex-shrink: 0;
  background: var(--pine-deep);
  color: var(--ecru);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
}
.sidebar-brand {
  display: flex; align-items: center; gap: 10px;
  padding: 22px 20px; border-bottom: 1px solid rgba(246,239,228,0.12);
}
.sidebar-brand .mark {
  width: 34px; height: 34px; border-radius: 50%;
  background: var(--rose); display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-size: 0.85rem; flex-shrink: 0;
}
.sidebar-brand .label { font-family: var(--font-display); font-size: 1rem; }
.sidebar-brand .label small { display: block; font-family: var(--font-mono); font-size: 0.62rem; opacity: 0.6; }

.sidebar-nav { flex: 1; padding: 14px 12px; display: flex; flex-direction: column; gap: 4px; }
.sidebar-nav button {
  display: flex; align-items: center; gap: 10px;
  background: none; border: none; color: rgba(246,239,228,0.75);
  padding: 11px 14px; border-radius: 7px; font-size: 0.88rem;
  cursor: pointer; text-align: left; font-family: var(--font-body); width: 100%;
}
.sidebar-nav button:hover { background: rgba(246,239,228,0.08); color: var(--white); }
.sidebar-nav button.is-active { background: var(--rose); color: var(--white); }
.sidebar-nav .icon { font-size: 1rem; width: 18px; text-align: center; }

.sidebar-foot { padding: 16px 20px; border-top: 1px solid rgba(246,239,228,0.12); }
.sidebar-foot a { color: rgba(246,239,228,0.6); font-size: 0.8rem; text-decoration: none; display: block; margin-bottom: 8px; }
.sidebar-foot a:hover { color: var(--white); }
.sidebar-foot button {
  width: 100%; background: rgba(246,239,228,0.08); color: var(--ecru);
  border: none; padding: 9px; border-radius: 6px; font-size: 0.82rem; cursor: pointer;
}
.sidebar-foot button:hover { background: rgba(246,239,228,0.16); }

.main {
  flex: 1;
  padding: 32px 40px 80px;
  max-width: 1100px;
}

.main-head {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 28px; gap: 20px; flex-wrap: wrap;
}
.main-head h2 { font-size: 1.6rem; }
.main-head p { color: var(--ink-soft); margin: 6px 0 0; font-size: 0.9rem; }

.toast {
  position: fixed; top: 20px; right: 20px; background: var(--pine);
  color: var(--white); padding: 12px 18px; border-radius: 8px; font-size: 0.86rem;
  box-shadow: 0 12px 30px -8px rgba(0,0,0,0.35); z-index: 200;
  opacity: 0; transform: translateY(-10px); transition: all 0.25s ease; pointer-events: none;
}
.toast.show { opacity: 1; transform: translateY(0); }
.toast.err { background: var(--danger); }

/* ---------- Cards / stats ---------- */
.stat-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
.stat-card {
  background: var(--white); border-radius: 10px; padding: 18px 20px; border: 1px solid var(--line);
}
.stat-card .num { font-family: var(--font-display); font-size: 1.8rem; color: var(--pine-deep); }
.stat-card .label { font-size: 0.78rem; color: var(--ink-soft); font-family: var(--font-mono); }

.panel { background: var(--white); border-radius: 10px; border: 1px solid var(--line); padding: 24px; margin-bottom: 24px; }
.panel h3 { font-size: 1.05rem; margin-bottom: 4px; }
.panel .panel-desc { color: var(--ink-soft); font-size: 0.85rem; margin-bottom: 18px; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-flex; align-items: center; gap: 6px; font-weight: 600; font-size: 0.86rem;
  padding: 10px 18px; border-radius: 7px; border: 1px solid transparent; cursor: pointer;
  font-family: var(--font-body); text-decoration: none;
}
.btn-primary { background: var(--pine); color: var(--white); }
.btn-primary:hover { background: var(--pine-deep); }
.btn-outline { background: var(--white); color: var(--pine-deep); border-color: var(--line); }
.btn-outline:hover { background: var(--ecru); }
.btn-danger { background: #fbe9e7; color: var(--danger); }
.btn-danger:hover { background: #f6d2ce; }
.btn-sm { padding: 6px 12px; font-size: 0.78rem; }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

/* ---------- Forms ---------- */
.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.form-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
.form-field.full { grid-column: 1 / -1; }
.form-field label { font-size: 0.82rem; font-weight: 600; color: var(--pine-deep); }
.form-field .hint { font-size: 0.74rem; color: var(--ink-soft); font-weight: 400; }
input[type=text], input[type=number], input[type=tel], input[type=url], textarea, select {
  font-family: var(--font-body); font-size: 0.92rem; padding: 10px 12px;
  border: 1px solid var(--line); border-radius: 7px; background: var(--white); color: var(--ink);
  width: 100%;
}
input:focus, textarea:focus, select:focus { outline: 2px solid var(--brass); outline-offset: 1px; border-color: var(--brass); }
textarea { resize: vertical; min-height: 80px; font-family: var(--font-body); }
.check-field { display: flex; align-items: center; gap: 8px; font-size: 0.88rem; }

.upload-box {
  border: 1.5px dashed var(--line); border-radius: 8px; padding: 16px;
  display: flex; align-items: center; gap: 14px; background: var(--ecru);
}
.upload-preview {
  width: 68px; height: 68px; border-radius: 6px; overflow: hidden; background: var(--white);
  flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--ink-soft);
  border: 1px solid var(--line);
}
.upload-preview img { width: 100%; height: 100%; object-fit: cover; }
.upload-actions { display: flex; flex-direction: column; gap: 6px; }
.upload-actions input[type=file] { font-size: 0.8rem; }

/* ---------- Table ---------- */
table { width: 100%; border-collapse: collapse; font-size: 0.88rem; }
th { text-align: left; font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--ink-soft); padding: 10px 12px; border-bottom: 1px solid var(--line); font-family: var(--font-mono); }
td { padding: 12px; border-bottom: 1px solid var(--line); vertical-align: middle; }
tr:last-child td { border-bottom: none; }
.row-thumb { width: 44px; height: 44px; border-radius: 6px; object-fit: cover; background: var(--ecru); }
.row-name { font-weight: 600; color: var(--pine-deep); }
.row-actions { display: flex; gap: 8px; }
.badge-pill {
  font-family: var(--font-mono); font-size: 0.68rem; padding: 3px 9px; border-radius: 100px;
  background: var(--ecru); color: var(--ink-soft); display: inline-block;
}
.badge-pill.ok { background: #e4f2e9; color: var(--ok); }
.badge-pill.out { background: #fbe9e7; color: var(--danger); }

.empty-row td { text-align: center; padding: 30px; color: var(--ink-soft); font-family: var(--font-mono); font-size: 0.82rem; }

/* ---------- Backup panel ---------- */
.backup-actions { display: flex; gap: 12px; flex-wrap: wrap; }

/* ---------- View toggle ---------- */
.view { display: none; }
.view.is-active { display: block; }

@media (max-width: 900px) {
  .form-grid { grid-template-columns: 1fr; }
  .stat-row { grid-template-columns: 1fr 1fr; }
  .admin-shell { flex-direction: column; }
  .sidebar { width: 100%; height: auto; position: relative; flex-direction: row; overflow-x: auto; }
  .sidebar-brand { display: none; }
  .sidebar-nav { flex-direction: row; padding: 10px; }
  .sidebar-foot { display: none; }
  .main { padding: 24px 18px 60px; }
}
