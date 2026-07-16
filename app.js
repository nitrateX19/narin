/* =========================================================
   NARİN — Mağaza Mantığı
   ========================================================= */

const state = {
  categories: NarinStore.getCategories(),
  products: NarinStore.getProducts(),
  brand: NarinStore.getBrand(),
  cart: NarinStore.getCart(),
  activeCategory: "all",
  activeProduct: null,
  selectedSize: null,
  selectedColor: null
};

function money(n) {
  return n.toLocaleString("tr-TR", { minimumFractionDigits: 0 }) + " ₺";
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2400);
}

/* ---------- Marka bilgilerini uygula ---------- */
function applyBrand() {
  document.querySelectorAll("[data-brand-name]").forEach(el => (el.textContent = state.brand.name));
  document.querySelectorAll("[data-brand-tagline]").forEach(el => (el.textContent = state.brand.tagline));
  document.querySelectorAll("[data-brand-about]").forEach(el => (el.textContent = state.brand.about));
  document.querySelectorAll("[data-brand-phone]").forEach(el => (el.textContent = state.brand.phone));
  document.querySelectorAll("[data-brand-email]").forEach(el => (el.textContent = state.brand.email));
  document.querySelectorAll("[data-brand-address]").forEach(el => (el.textContent = state.brand.address));
  document.querySelectorAll("[data-brand-instagram]").forEach(el => (el.textContent = "@" + state.brand.instagram));
  const heroImg = document.getElementById("heroImage");
  if (heroImg) heroImg.src = state.brand.heroImage;
  document.title = state.brand.name + " — " + state.brand.tagline;
}

/* ---------- Kategori "kumaş numunesi" kartları ---------- */
function renderCategories() {
  const grid = document.getElementById("categoryGrid");
  if (!grid) return;
  grid.innerHTML = state.categories.map(cat => {
    const count = state.products.filter(p => p.categoryId === cat.id).length;
    return `
      <a class="swatch-card" href="#urunler" data-cat="${cat.id}" onclick="filterCategory('${cat.id}')">
        <div class="swatch-thumb"><span class="swatch-pin"></span><img src="${cat.swatch}" alt="${cat.name}" loading="lazy"></div>
        <div class="swatch-body">
          <h3>${cat.name}</h3>
          <p>${cat.description}</p>
          <span class="swatch-count">${count} ürün</span>
        </div>
      </a>`;
  }).join("");

  const filterBar = document.getElementById("filterBar");
  if (filterBar) {
    filterBar.innerHTML = `<button class="chip ${state.activeCategory === 'all' ? 'active' : ''}" onclick="filterCategory('all')">Tümü</button>` +
      state.categories.map(c => `<button class="chip ${state.activeCategory === c.id ? 'active' : ''}" onclick="filterCategory('${c.id}')">${c.name}</button>`).join("");
  }
}

function filterCategory(id) {
  state.activeCategory = id;
  renderCategories();
  renderProducts();
}
window.filterCategory = filterCategory;

/* ---------- Ürün ızgarası ---------- */
function renderProducts() {
  const grid = document.getElementById("productGrid");
  if (!grid) return;
  const list = state.activeCategory === "all"
    ? state.products
    : state.products.filter(p => p.categoryId === state.activeCategory);

  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px 0;">Bu kategoride henüz ürün eklenmedi.</p>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const cat = state.categories.find(c => c.id === p.categoryId);
    const stockBadge = p.stock === 0 ? `<span class="badge-stock">Tükendi</span>` : (p.stock <= 5 ? `<span class="badge-stock">Son ${p.stock}</span>` : "");
    return `
      <div class="product-card">
        <div class="product-thumb" onclick="openProduct('${p.id}')" style="cursor:pointer">
          ${p.oldPrice ? `<span class="badge-sale">İndirim</span>` : ""}
          ${stockBadge}
          <img src="${p.image}" alt="${p.name}" loading="lazy">
        </div>
        <div class="product-info">
          <span class="product-cat">${cat ? cat.name : ""}</span>
          <h3>${p.name}</h3>
          <div class="price-row">
            <span class="price">${money(p.price)}</span>
            ${p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : ""}
          </div>
          <div class="product-actions">
            <button class="btn btn-outline btn-sm btn-block" onclick="openProduct('${p.id}')">İncele</button>
          </div>
        </div>
      </div>`;
  }).join("");
}

/* ---------- Ürün detay modalı ---------- */
function openProduct(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  state.activeProduct = p;
  state.selectedSize = p.sizes[0] || null;
  state.selectedColor = p.colors[0] || null;
  renderModal();
  document.getElementById("modalOverlay").classList.add("open");
}
window.openProduct = openProduct;

function renderModal() {
  const p = state.activeProduct;
  if (!p) return;
  const box = document.getElementById("modalBox");
  box.innerHTML = `
    <div class="modal-img"><img src="${p.image}" alt="${p.name}"></div>
    <div class="modal-content">
      <button class="modal-close" onclick="closeProduct()">✕</button>
      <span class="eyebrow">${(state.categories.find(c => c.id === p.categoryId) || {}).name || ""}</span>
      <h2 style="margin-top:8px;">${p.name}</h2>
      <div class="price-row" style="margin-top:10px;">
        <span class="price">${money(p.price)}</span>
        ${p.oldPrice ? `<span class="price-old">${money(p.oldPrice)}</span>` : ""}
      </div>
      <p style="margin-top:14px;">${p.description}</p>

      ${p.sizes && p.sizes.length ? `
      <div class="option-group">
        <span class="option-label">Beden</span>
        <div class="option-pills" id="sizePills">
          ${p.sizes.map(s => `<button class="pill ${s === state.selectedSize ? 'active' : ''}" onclick="selectSize('${s}')">${s}</button>`).join("")}
        </div>
      </div>` : ""}

      ${p.colors && p.colors.length ? `
      <div class="option-group">
        <span class="option-label">Renk</span>
        <div class="option-pills" id="colorPills">
          ${p.colors.map(c => `<button class="pill ${c === state.selectedColor ? 'active' : ''}" onclick="selectColor('${c}')">${c}</button>`).join("")}
        </div>
      </div>` : ""}

      <div class="qty-row">
        <span class="option-label" style="margin:0;">Adet</span>
        <div class="qty-control">
          <button onclick="stepQty(-1)">−</button>
          <span id="qtyVal">1</span>
          <button onclick="stepQty(1)">+</button>
        </div>
      </div>

      <div style="margin-top:24px;">
        <button class="btn btn-primary btn-block" ${p.stock === 0 ? "disabled" : ""} onclick="addToCart()">
          ${p.stock === 0 ? "Stokta Yok" : "Sepete Ekle"}
        </button>
      </div>
    </div>`;
  box.dataset.qty = "1";
}

function selectSize(s) { state.selectedSize = s; renderModal(); }
function selectColor(c) { state.selectedColor = c; renderModal(); }
window.selectSize = selectSize;
window.selectColor = selectColor;

function stepQty(delta) {
  const box = document.getElementById("modalBox");
  let q = parseInt(box.dataset.qty || "1", 10) + delta;
  if (q < 1) q = 1;
  box.dataset.qty = q;
  document.getElementById("qtyVal").textContent = q;
}
window.stepQty = stepQty;

function closeProduct() {
  document.getElementById("modalOverlay").classList.remove("open");
  state.activeProduct = null;
}
window.closeProduct = closeProduct;

/* ---------- Sepet ---------- */
function addToCart() {
  const p = state.activeProduct;
  const box = document.getElementById("modalBox");
  const qty = parseInt(box.dataset.qty || "1", 10);
  const key = p.id + "|" + state.selectedSize + "|" + state.selectedColor;
  const existing = state.cart.find(i => i.key === key);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      key, id: p.id, name: p.name, price: p.price, image: p.image,
      size: state.selectedSize, color: state.selectedColor, qty
    });
  }
  NarinStore.setCart(state.cart);
  renderCartBadge();
  renderCart();
  closeProduct();
  toast(p.name + " sepete eklendi");
  openCart();
}
window.addToCart = addToCart;

function removeFromCart(key) {
  state.cart = state.cart.filter(i => i.key !== key);
  NarinStore.setCart(state.cart);
  renderCartBadge();
  renderCart();
}
window.removeFromCart = removeFromCart;

function changeCartQty(key, delta) {
  const item = state.cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.key !== key);
  }
  NarinStore.setCart(state.cart);
  renderCartBadge();
  renderCart();
}
window.changeCartQty = changeCartQty;

function cartTotal() {
  return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function renderCartBadge() {
  const count = state.cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => (el.textContent = count));
}

function renderCart() {
  const wrap = document.getElementById("cartItems");
  if (!wrap) return;
  if (!state.cart.length) {
    wrap.innerHTML = `<div class="cart-empty">Sepetiniz henüz boş.<br>Ürünleri incelemeye ne dersiniz?</div>`;
  } else {
    wrap.innerHTML = state.cart.map(i => `
      <div class="cart-item">
        <img src="${i.image}" alt="${i.name}">
        <div class="cart-item-info">
          <h4>${i.name}</h4>
          <div class="cart-item-meta">${[i.size, i.color].filter(Boolean).join(" · ")}</div>
          <div class="cart-item-row">
            <div class="qty-control">
              <button onclick="changeCartQty('${i.key}', -1)">−</button>
              <span>${i.qty}</span>
              <button onclick="changeCartQty('${i.key}', 1)">+</button>
            </div>
            <strong>${money(i.price * i.qty)}</strong>
          </div>
          <button class="cart-remove" onclick="removeFromCart('${i.key}')">Kaldır</button>
        </div>
      </div>`).join("");
  }
  document.getElementById("cartTotal").textContent = money(cartTotal());
}

function openCart() {
  document.getElementById("cartDrawer").classList.add("open");
  document.getElementById("overlayDim").classList.add("open");
}
function closeCart() {
  document.getElementById("cartDrawer").classList.remove("open");
  document.getElementById("overlayDim").classList.remove("open");
}
window.openCart = openCart;
window.closeCart = closeCart;

/* ---------- WhatsApp sipariş hattı ---------- */
function sendOrderToWhatsapp() {
  if (!state.cart.length) {
    toast("Sepetiniz boş");
    return;
  }
  const name = document.getElementById("custName").value.trim();
  const phone = document.getElementById("custPhone").value.trim();
  const address = document.getElementById("custAddress").value.trim();
  const note = document.getElementById("custNote").value.trim();

  if (!name || !phone || !address) {
    toast("Lütfen ad, telefon ve adres alanlarını doldurun");
    return;
  }

  let msg = `Merhaba ${state.brand.name}, yeni bir siparişim var:%0A%0A`;
  state.cart.forEach(i => {
    msg += `• ${i.name} ${[i.size, i.color].filter(Boolean).join(" / ")} x${i.qty} — ${money(i.price * i.qty)}%0A`;
  });
  msg += `%0AToplam: ${money(cartTotal())}%0A%0A`;
  msg += `Ad Soyad: ${name}%0ATelefon: ${phone}%0AAdres: ${address}%0A`;
  if (note) msg += `Not: ${note}%0A`;

  const url = `https://wa.me/${state.brand.whatsappNumber}?text=${msg}`;
  window.open(url, "_blank");
}
window.sendOrderToWhatsapp = sendOrderToWhatsapp;

/* ---------- Başlatma ---------- */
document.addEventListener("DOMContentLoaded", () => {
  applyBrand();
  renderCategories();
  renderProducts();
  renderCartBadge();
  renderCart();

  const overlay = document.getElementById("modalOverlay");
  if (overlay) overlay.addEventListener("click", e => { if (e.target === overlay) closeProduct(); });
  const dim = document.getElementById("overlayDim");
  if (dim) dim.addEventListener("click", closeCart);
});
