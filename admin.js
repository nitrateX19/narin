/* =========================================================
   NARİN — Yönetim Paneli Mantığı
   NOT: Bu statik bir site olduğu için parola koruması yalnızca
   kazara erişimi engeller; gerçek bir güvenlik katmanı DEĞİLDİR
   (kaynak kod herkese açıktır). Hassas veriler burada saklanmamalı.
   ========================================================= */

const ADMIN_PASS_KEY = "narin_admin_pass";
const ADMIN_SESSION_KEY = "narin_admin_session";
const DEFAULT_PASS = "narin2026";

let A = {
  categories: NarinStore.getCategories(),
  products: NarinStore.getProducts(),
  brand: NarinStore.getBrand(),
  editingProductId: null,
  editingCategoryId: null
};

/* ---------- Giriş ---------- */
function getPass() { return localStorage.getItem(ADMIN_PASS_KEY) || DEFAULT_PASS; }
function isLoggedIn() { return sessionStorage.getItem(ADMIN_SESSION_KEY) === "1"; }

function tryLogin() {
  const val = document.getElementById("loginPass").value;
  const err = document.getElementById("loginError");
  if (val === getPass()) {
    sessionStorage.setItem(ADMIN_SESSION_KEY, "1");
    showAdmin();
  } else {
    err.textContent = "Parola hatalı. Tekrar deneyin.";
  }
}
window.tryLogin = tryLogin;

function logout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  location.reload();
}
window.logout = logout;

function showAdmin() {
  document.getElementById("loginScreen").style.display = "none";
  document.getElementById("adminShell").style.display = "grid";
  renderAll();
}

/* ---------- Sekme değiştirme ---------- */
function showTab(tab) {
  document.querySelectorAll(".admin-tab").forEach(el => (el.style.display = "none"));
  document.querySelectorAll(".admin-nav button").forEach(el => el.classList.remove("active"));
  document.getElementById("tab-" + tab).style.display = "block";
  document.getElementById("nav-" + tab).classList.add("active");
  if (tab === "export") buildExport();
}
window.showTab = showTab;

/* ---------- Dashboard ---------- */
function renderDashboard() {
  document.getElementById("statProducts").textContent = A.products.length;
  document.getElementById("statCategories").textContent = A.categories.length;
  const lowStock = A.products.filter(p => p.stock > 0 && p.stock <= 5).length;
  const outStock = A.products.filter(p => p.stock === 0).length;
  document.getElementById("statLowStock").textContent = lowStock;
  document.getElementById("statOutStock").textContent = outStock;
}

/* ---------- Ürünler tablosu ---------- */
function renderProductsTable() {
  const catSelect = document.getElementById("prodCategory");
  catSelect.innerHTML = A.categories.map(c => `<option value="${c.id}">${c.name}</option>`).join("");

  const body = document.getElementById("productsTableBody");
  body.innerHTML = A.products.map(p => {
    const cat = A.categories.find(c => c.id === p.categoryId);
    let stockPill = `<span class="pill-badge ok">Stokta (${p.stock})</span>`;
    if (p.stock === 0) stockPill = `<span class="pill-badge out">Tükendi</span>`;
    else if (p.stock <= 5) stockPill = `<span class="pill-badge low">Az kaldı (${p.stock})</span>`;
    return `
      <tr>
        <td><img src="${p.image}" alt=""></td>
        <td>${p.name}</td>
        <td>${cat ? cat.name : "—"}</td>
        <td>${p.price.toLocaleString("tr-TR")} ₺</td>
        <td>${stockPill}</td>
        <td class="table-actions">
          <button class="link-btn" onclick="editProduct('${p.id}')">Düzenle</button>
          <button class="link-btn danger" onclick="deleteProduct('${p.id}')">Sil</button>
        </td>
      </tr>`;
  }).join("");
}

function resetProductForm() {
  A.editingProductId = null;
  document.getElementById("productForm").reset();
  document.getElementById("productFormTitle").textContent = "Yeni Ürün Ekle";
  document.getElementById("prodImagePreview").src = "";
  document.getElementById("prodImagePreview").style.display = "none";
}
window.resetProductForm = resetProductForm;

function editProduct(id) {
  const p = A.products.find(x => x.id === id);
  if (!p) return;
  A.editingProductId = id;
  document.getElementById("productFormTitle").textContent = "Ürünü Düzenle";
  document.getElementById("prodName").value = p.name;
  document.getElementById("prodCategory").value = p.categoryId;
  document.getElementById("prodPrice").value = p.price;
  document.getElementById("prodOldPrice").value = p.oldPrice || "";
  document.getElementById("prodStock").value = p.stock;
  document.getElementById("prodSizes").value = (p.sizes || []).join(", ");
  document.getElementById("prodColors").value = (p.colors || []).join(", ");
  document.getElementById("prodDescription").value = p.description || "";
  document.getElementById("prodImageUrl").value = p.image || "";
  document.getElementById("prodImagePreview").src = p.image || "";
  document.getElementById("prodImagePreview").style.display = p.image ? "block" : "none";
  document.getElementById("prodFeatured").checked = !!p.featured;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
window.editProduct = editProduct;

function deleteProduct(id) {
  if (!confirm("Bu ürünü silmek istediğinize emin misiniz?")) return;
  A.products = A.products.filter(p => p.id !== id);
  NarinStore.setProducts(A.products);
  renderAll();
}
window.deleteProduct = deleteProduct;

function saveProduct(e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("prodName").value.trim(),
    categoryId: document.getElementById("prodCategory").value,
    price: parseFloat(document.getElementById("prodPrice").value) || 0,
    oldPrice: document.getElementById("prodOldPrice").value ? parseFloat(document.getElementById("prodOldPrice").value) : null,
    stock: parseInt(document.getElementById("prodStock").value, 10) || 0,
    sizes: document.getElementById("prodSizes").value.split(",").map(s => s.trim()).filter(Boolean),
    colors: document.getElementById("prodColors").value.split(",").map(s => s.trim()).filter(Boolean),
    description: document.getElementById("prodDescription").value.trim(),
    image: document.getElementById("prodImageUrl").value.trim() || "https://picsum.photos/seed/" + Date.now() + "/700/900",
    featured: document.getElementById("prodFeatured").checked
  };

  if (!data.name || !data.categoryId) {
    alert("Lütfen ürün adı ve kategori seçin.");
    return;
  }

  if (A.editingProductId) {
    const idx = A.products.findIndex(p => p.id === A.editingProductId);
    A.products[idx] = { ...A.products[idx], ...data };
  } else {
    A.products.push({ id: NarinStore.newId("p"), ...data });
  }
  NarinStore.setProducts(A.products);
  resetProductForm();
  renderAll();
  showTab("products");
  toastAdmin("Ürün kaydedildi");
}
window.saveProduct = saveProduct;

function handleImageUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    document.getElementById("prodImageUrl").value = e.target.result;
    document.getElementById("prodImagePreview").src = e.target.result;
    document.getElementById("prodImagePreview").style.display = "block";
  };
  reader.readAsDataURL(file);
}
window.handleImageUpload = handleImageUpload;

/* ---------- Kategoriler ---------- */
function renderCategoriesTable() {
  const body = document.getElementById("categoriesTableBody");
  body.innerHTML = A.categories.map(c => {
    const count = A.products.filter(p => p.categoryId === c.id).length;
    return `
      <tr>
        <td><img src="${c.swatch}" alt=""></td>
        <td>${c.name}</td>
        <td>${c.description}</td>
        <td>${count}</td>
        <td class="table-actions">
          <button class="link-btn" onclick="editCategory('${c.id}')">Düzenle</button>
          <button class="link-btn danger" onclick="deleteCategory('${c.id}')">Sil</button>
        </td>
      </tr>`;
  }).join("");
}

function resetCategoryForm() {
  A.editingCategoryId = null;
  document.getElementById("categoryForm").reset();
  document.getElementById("categoryFormTitle").textContent = "Yeni Kategori Ekle";
}
window.resetCategoryForm = resetCategoryForm;

function editCategory(id) {
  const c = A.categories.find(x => x.id === id);
  if (!c) return;
  A.editingCategoryId = id;
  document.getElementById("categoryFormTitle").textContent = "Kategoriyi Düzenle";
  document.getElementById("catName").value = c.name;
  document.getElementById("catDescription").value = c.description;
  document.getElementById("catSwatch").value = c.swatch;
}
window.editCategory = editCategory;

function deleteCategory(id) {
  const inUse = A.products.some(p => p.categoryId === id);
  if (inUse) {
    alert("Bu kategoride ürünler var. Önce ürünleri başka kategoriye taşıyın veya silin.");
    return;
  }
  if (!confirm("Bu kategoriyi silmek istediğinize emin misiniz?")) return;
  A.categories = A.categories.filter(c => c.id !== id);
  NarinStore.setCategories(A.categories);
  renderAll();
}
window.deleteCategory = deleteCategory;

function saveCategory(e) {
  e.preventDefault();
  const name = document.getElementById("catName").value.trim();
  const description = document.getElementById("catDescription").value.trim();
  const swatch = document.getElementById("catSwatch").value.trim() || "https://picsum.photos/seed/" + Date.now() + "/500/500";

  if (!name) { alert("Lütfen kategori adı girin."); return; }

  if (A.editingCategoryId) {
    const idx = A.categories.findIndex(c => c.id === A.editingCategoryId);
    A.categories[idx] = { ...A.categories[idx], name, description, swatch };
  } else {
    const id = name.toLowerCase().replace(/ç/g,"c").replace(/ğ/g,"g").replace(/ı/g,"i").replace(/ö/g,"o").replace(/ş/g,"s").replace(/ü/g,"u").replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");
    A.categories.push({ id: id || NarinStore.newId("cat"), name, description, swatch });
  }
  NarinStore.setCategories(A.categories);
  resetCategoryForm();
  renderAll();
  toastAdmin("Kategori kaydedildi");
}
window.saveCategory = saveCategory;

/* ---------- Marka / Ayarlar ---------- */
function fillSettingsForm() {
  document.getElementById("setName").value = A.brand.name;
  document.getElementById("setTagline").value = A.brand.tagline;
  document.getElementById("setAbout").value = A.brand.about;
  document.getElementById("setWhatsapp").value = A.brand.whatsappNumber;
  document.getElementById("setInstagram").value = A.brand.instagram;
  document.getElementById("setAddress").value = A.brand.address;
  document.getElementById("setPhone").value = A.brand.phone;
  document.getElementById("setEmail").value = A.brand.email;
  document.getElementById("setHeroImage").value = A.brand.heroImage;
}

function saveSettings(e) {
  e.preventDefault();
  A.brand = {
    name: document.getElementById("setName").value.trim(),
    tagline: document.getElementById("setTagline").value.trim(),
    about: document.getElementById("setAbout").value.trim(),
    whatsappNumber: document.getElementById("setWhatsapp").value.trim().replace(/[^0-9]/g, ""),
    instagram: document.getElementById("setInstagram").value.trim(),
    address: document.getElementById("setAddress").value.trim(),
    phone: document.getElementById("setPhone").value.trim(),
    email: document.getElementById("setEmail").value.trim(),
    heroImage: document.getElementById("setHeroImage").value.trim()
  };
  NarinStore.setBrand(A.brand);
  toastAdmin("Ayarlar kaydedildi");
}
window.saveSettings = saveSettings;

function changePassword(e) {
  e.preventDefault();
  const current = document.getElementById("curPass").value;
  const next = document.getElementById("newPass").value;
  if (current !== getPass()) { alert("Mevcut parola yanlış."); return; }
  if (next.length < 4) { alert("Yeni parola en az 4 karakter olmalı."); return; }
  localStorage.setItem(ADMIN_PASS_KEY, next);
  document.getElementById("passwordForm").reset();
  toastAdmin("Parola güncellendi");
}
window.changePassword = changePassword;

/* ---------- Dışa aktarma (kalıcı yayın için) ---------- */
function buildExport() {
  const seed = {
    brand: A.brand,
    categories: A.categories,
    products: A.products
  };
  const code = `const NARIN_SEED = ${JSON.stringify(seed, null, 2)};`;
  document.getElementById("exportBox").value = code;
}

function copyExport() {
  const box = document.getElementById("exportBox");
  box.select();
  document.execCommand("copy");
  toastAdmin("Kod kopyalandı");
}
window.copyExport = copyExport;

function downloadExport() {
  const blob = new Blob([document.getElementById("exportBox").value], { type: "text/javascript" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "data-export.js";
  a.click();
}
window.downloadExport = downloadExport;

function resetAllData() {
  if (!confirm("Tüm ürün, kategori ve ayar değişiklikleriniz silinip site varsayılanlarına dönecek. Emin misiniz?")) return;
  NarinStore.resetToDefaults();
  location.reload();
}
window.resetAllData = resetAllData;

/* ---------- Yardımcılar ---------- */
function toastAdmin(msg) {
  const el = document.getElementById("adminToast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function renderAll() {
  A.categories = NarinStore.getCategories();
  A.products = NarinStore.getProducts();
  A.brand = NarinStore.getBrand();
  renderDashboard();
  renderProductsTable();
  renderCategoriesTable();
  fillSettingsForm();
}

document.addEventListener("DOMContentLoaded", () => {
  if (isLoggedIn()) showAdmin();
  document.getElementById("productForm").addEventListener("submit", saveProduct);
  document.getElementById("categoryForm").addEventListener("submit", saveCategory);
  document.getElementById("settingsForm").addEventListener("submit", saveSettings);
  document.getElementById("passwordForm").addEventListener("submit", changePassword);
});
