/* =========================================================
   NARİN — Veri Katmanı
   Bu dosya sitenin "kalıcı" varsayılan verisidir (kategoriler,
   ürünler, marka ayarları). Admin panelinden yapılan değişiklikler
   tarayıcının localStorage'ına yazılır ve SADECE o tarayıcıda görünür.
   Değişiklikleri tüm ziyaretçiler için KALICI yapmak için:
   Admin Paneli → "Kodu Dışa Aktar" → çıkan kodu bu dosyadaki
   NARIN_SEED nesnesiyle değiştirip GitHub'a push edin.
   ========================================================= */

const NARIN_SEED = {
  brand: {
    name: "Narin",
    tagline: "Her bedene nazik bir dokunuş",
    about:
      "Narin, 2026'da kuruldu; ipek, pamuk ve dantelin buluştuğu, kadın ve erkek iç giyiminde konforu öne çıkaran bir butik markadır. Her parça, günlük hayatın içinde fark edilmeden hissedilecek şekilde seçilir.",
    whatsappNumber: "905551234567",
    instagram: "narinicgiyim",
    address: "Manavgat, Antalya",
    phone: "0555 123 45 67",
    email: "info@narinicgiyim.com",
    heroImage: "https://picsum.photos/seed/narin-hero/1600/1000"
  },

  categories: [
    {
      id: "sutyen-takim",
      name: "Sütyen & Takım",
      description: "Günlük konfordan özel anlara, destekli ve dantelli takımlar.",
      swatch: "https://picsum.photos/seed/narin-cat-1/500/500"
    },
    {
      id: "kulot",
      name: "Külot",
      description: "Pamuklu, dantelli ve dikişsiz modeller; tüm bedenlerde.",
      swatch: "https://picsum.photos/seed/narin-cat-2/500/500"
    },
    {
      id: "gecelik-pijama",
      name: "Gecelik & Pijama",
      description: "Saten ve pamuklu kumaşlarla yumuşacık bir uyku hissi.",
      swatch: "https://picsum.photos/seed/narin-cat-3/500/500"
    },
    {
      id: "body-korse",
      name: "Body & Korse",
      description: "Şekillendirici ve sarmalayıcı, özel gün parçaları.",
      swatch: "https://picsum.photos/seed/narin-cat-4/500/500"
    },
    {
      id: "corap",
      name: "Çorap & Külotlu Çorap",
      description: "İnce dokulu, dayanıklı ve her kombine uyan renkler.",
      swatch: "https://picsum.photos/seed/narin-cat-5/500/500"
    },
    {
      id: "erkek",
      name: "Erkek İç Giyim",
      description: "Boxer, atlet ve slip; nefes alan kumaşlarla gün boyu konfor.",
      swatch: "https://picsum.photos/seed/narin-cat-6/500/500"
    }
  ],

  products: [
    // Sütyen & Takım
    { id: "p001", categoryId: "sutyen-takim", name: "Dantel Balenli Takım", price: 649, oldPrice: 799, sizes: ["75B","80B","80C","85C"], colors: ["Siyah","Bordo"], stock: 18, description: "İnce dantel dokulu, hafif destekli balen sütyen ve uyumlu külot takımı.", image: "https://picsum.photos/seed/narin-p1/700/900", featured: true },
    { id: "p002", categoryId: "sutyen-takim", name: "Pamuklu Günlük Sütyen", price: 399, oldPrice: null, sizes: ["75B","80B","85B","90C"], colors: ["Ten","Beyaz","Siyah"], stock: 32, description: "Dikişsiz kalıp, yumuşak pamuklu kumaş, tüm gün rahat kullanım.", image: "https://picsum.photos/seed/narin-p2/700/900", featured: false },
    { id: "p003", categoryId: "sutyen-takim", name: "Straplez Takım", price: 549, oldPrice: null, sizes: ["80B","85B","90C"], colors: ["Ten"], stock: 12, description: "Kayık yaka ve askısız kıyafetlerle uyumlu, kaymaz silikonlu.", image: "https://picsum.photos/seed/narin-p3/700/900", featured: false },

    // Külot
    { id: "p004", categoryId: "kulot", name: "Dikişsiz Bikini Külot (3'lü)", price: 349, oldPrice: 429, sizes: ["S","M","L","XL"], colors: ["Karışık"], stock: 40, description: "Lazer kesim, iz yapmayan, nefes alan mikrofiber kumaş.", image: "https://picsum.photos/seed/narin-p4/700/900", featured: true },
    { id: "p005", categoryId: "kulot", name: "Dantel Brazilian Külot", price: 179, oldPrice: null, sizes: ["S","M","L"], colors: ["Siyah","Ekru"], stock: 25, description: "Yanları dantel detaylı, yumuşak pamuklu iç yüzey.", image: "https://picsum.photos/seed/narin-p5/700/900", featured: false },
    { id: "p006", categoryId: "kulot", name: "Yüksek Bel Toparlayıcı Külot", price: 289, oldPrice: null, sizes: ["M","L","XL","XXL"], colors: ["Ten","Siyah"], stock: 20, description: "Hafif toparlayıcı doku, göbek üzerinden yüksek kesim.", image: "https://picsum.photos/seed/narin-p6/700/900", featured: false },

    // Gecelik & Pijama
    { id: "p007", categoryId: "gecelik-pijama", name: "Saten Askılı Gecelik", price: 459, oldPrice: 549, sizes: ["S","M","L"], colors: ["Bordo","Zümrüt","Siyah"], stock: 15, description: "Kayan dökümlü saten kumaş, ince askı detayı.", image: "https://picsum.photos/seed/narin-p7/700/900", featured: true },
    { id: "p008", categoryId: "gecelik-pijama", name: "Pamuklu Pijama Takımı", price: 519, oldPrice: null, sizes: ["S","M","L","XL"], colors: ["Lila","Gri"], stock: 22, description: "Uzun kollu üst ve pantolon, %100 pamuklu.", image: "https://picsum.photos/seed/narin-p8/700/900", featured: false },
    { id: "p009", categoryId: "gecelik-pijama", name: "Dantel Yakalı Sabahlık", price: 389, oldPrice: null, sizes: ["S/M","L/XL"], colors: ["Krem"], stock: 10, description: "Kuşaklı, dantel yaka detaylı, hafif kumaş.", image: "https://picsum.photos/seed/narin-p9/700/900", featured: false },

    // Body & Korse
    { id: "p010", categoryId: "body-korse", name: "Fitilli Body", price: 429, oldPrice: null, sizes: ["S","M","L"], colors: ["Siyah","Beyaz"], stock: 14, description: "Vücut hatlarını saran, çıtçıtlı alt kapama.", image: "https://picsum.photos/seed/narin-p10/700/900", featured: false },
    { id: "p011", categoryId: "body-korse", name: "Şekillendirici Korse", price: 599, oldPrice: 699, sizes: ["M","L","XL"], colors: ["Ten"], stock: 9, description: "Kanca kapamalı, orta seviye sıkılık, özel gün altı için ideal.", image: "https://picsum.photos/seed/narin-p11/700/900", featured: true },

    // Çorap
    { id: "p012", categoryId: "corap", name: "İnce Külotlu Çorap 15 Den", price: 89, oldPrice: null, sizes: ["S/M","L/XL"], colors: ["Ten","Siyah"], stock: 60, description: "Şeffaf doku, günlük ve şık kombinler için.", image: "https://picsum.photos/seed/narin-p12/700/900", featured: false },
    { id: "p013", categoryId: "corap", name: "Pamuklu Patik Çorap (5'li)", price: 149, oldPrice: null, sizes: ["36-40","40-44"], colors: ["Karışık"], stock: 45, description: "Görünmez model, terletmeyen pamuklu karışım.", image: "https://picsum.photos/seed/narin-p13/700/900", featured: false },

    // Erkek
    { id: "p014", categoryId: "erkek", name: "Pamuklu Boxer (3'lü Paket)", price: 399, oldPrice: 459, sizes: ["M","L","XL","XXL"], colors: ["Karışık"], stock: 30, description: "Likralı pamuk, rahat kesim, nefes alan kumaş.", image: "https://picsum.photos/seed/narin-p14/700/900", featured: true },
    { id: "p015", categoryId: "erkek", name: "Ribana Atlet (2'li)", price: 259, oldPrice: null, sizes: ["M","L","XL"], colors: ["Beyaz","Siyah"], stock: 28, description: "Esnek ribana kumaş, günlük kullanım için ideal.", image: "https://picsum.photos/seed/narin-p15/700/900", featured: false },
    { id: "p016", categoryId: "erkek", name: "Modal Slip (2'li)", price: 279, oldPrice: null, sizes: ["S","M","L"], colors: ["Lacivert","Gri"], stock: 20, description: "Yumuşak modal kumaş, dikişsiz bacak ucu.", image: "https://picsum.photos/seed/narin-p16/700/900", featured: false }
  ]
};

/* ---------- Depolama yardımcıları ---------- */
const NarinStore = {
  KEYS: { products: "narin_products", categories: "narin_categories", brand: "narin_brand", cart: "narin_cart" },

  _read(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      console.error("Narin depolama okuma hatası:", e);
      return fallback;
    }
  },
  _write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      console.error("Narin depolama yazma hatası:", e);
      return false;
    }
  },

  getBrand() { return this._read(this.KEYS.brand, NARIN_SEED.brand); },
  setBrand(b) { return this._write(this.KEYS.brand, b); },

  getCategories() { return this._read(this.KEYS.categories, NARIN_SEED.categories); },
  setCategories(c) { return this._write(this.KEYS.categories, c); },

  getProducts() { return this._read(this.KEYS.products, NARIN_SEED.products); },
  setProducts(p) { return this._write(this.KEYS.products, p); },

  getCart() { return this._read(this.KEYS.cart, []); },
  setCart(c) { return this._write(this.KEYS.cart, c); },

  resetToDefaults() {
    localStorage.removeItem(this.KEYS.products);
    localStorage.removeItem(this.KEYS.categories);
    localStorage.removeItem(this.KEYS.brand);
  },

  newId(prefix) {
    return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  }
};
