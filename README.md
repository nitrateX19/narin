# Nakış & Nine — Manavgat İç Giyim & Tuhafiye Sitesi

Antalya / Manavgat'ta bir iç giyim ve tuhafiye mağazası için hazırlanmış,
tamamen statik (sunucu gerektirmeyen) bir web sitesi. Kendi yönetim
panelinden kategori ve ürün ekleyip görsel yükleyebilirsiniz.

## İçerik

```
manavgat-tuhafiye/
├── index.html            → Müşterilerin gördüğü vitrin sayfası
├── admin.html             → Yönetim paneli (giriş korumalı)
├── assets/
│   ├── css/style.css      → Vitrin tasarımı
│   ├── css/admin.css      → Yönetim paneli tasarımı
│   └── js/
│       ├── store-data.js  → Ortak veri katmanı (localStorage)
│       ├── main.js        → Vitrin mantığı
│       └── admin.js       → Yönetim paneli mantığı
└── README.md
```

## Nasıl çalışır?

Site **tamamen istemci taraflıdır** — yani bir veritabanı ya da sunucu
kodu yoktur. Admin panelinden eklediğiniz kategori, ürün ve ayarlar,
tarayıcınızın `localStorage` alanında saklanır ve aynı tarayıcıda
`index.html` açıldığında otomatik görünür.

**Önemli:** localStorage tarayıcıya özeldir. Yani:
- Admin panelinde yaptığınız değişiklikler, **sadece o cihaz/tarayıcıda**
  görünür. Telefonunuzdan eklediğiniz bir ürün, bilgisayarınızdaki
  ziyaretçiye otomatik yansımaz.
- Bu, kişisel/tek yönetici kullanımı için (veya demo/prototip olarak)
  uygundur. **Gerçek, çok ziyaretçili bir mağaza için** verilerin herkese
  aynı şekilde görünmesi gerekiyorsa bir backend'e ihtiyacınız olur
  (örnek: Firebase, Supabase, veya kendi yazacağınız basit bir API).
  Bu noktaya geldiğinizde bana haber verin, aynı arayüzü koruyarak
  gerçek bir veritabanına bağlayabilirim.
- Bu yüzden **Yönetim Paneli → Yedekle/Geri Yükle** bölümünden düzenli
  olarak JSON yedek indirmenizi öneririz.

## Yönetim paneline giriş

- Adres: `admin.html`
- Varsayılan kullanıcı adı: `admin`
- Varsayılan şifre: `manavgat2026`
- Şifreyi **Ayarlar → Şifre Değiştir** bölümünden hemen değiştirin.

⚠️ Bu koruma, tarayıcı tarafında basit bir kontrolden ibarettir; sayfa
kaynak kodunu inceleyen biri şifreyi görebilir. Hassas/finansal veri
saklamayın. Gerçek güvenlik için backend + sunucu taraflı kimlik
doğrulama gerekir.

## Yerel önizleme

Dosyaları çift tıklayarak da açabilirsiniz, ama tarayıcı güvenlik
kısıtlamaları yüzünden en sağlıklısı basit bir yerel sunucu ile
çalıştırmaktır:

```bash
# Proje klasöründeyken:
python3 -m http.server 8000
# sonra tarayıcıda: http://localhost:8000
```

## GitHub'a yükleme

1. [github.com/new](https://github.com/new) adresinden yeni bir repo oluşturun
   (ör. `manavgat-tuhafiye`).
2. Bu klasörün içeriğini repoya yükleyin:

   ```bash
   cd manavgat-tuhafiye
   git init
   git add .
   git commit -m "İlk yükleme: Nakış & Nine sitesi"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/manavgat-tuhafiye.git
   git push -u origin main
   ```

   (Terminal kullanmak istemiyorsanız, GitHub'ın web arayüzünden
   "Add file → Upload files" ile klasördeki tüm dosyaları sürükleyip
   bırakabilirsiniz.)

## GitHub Pages ile canlıya alma (ücretsiz barındırma)

1. Repo sayfasında **Settings → Pages** menüsüne gidin.
2. "Branch" altında `main` dalını ve `/ (root)` klasörünü seçip **Save**
   deyin.
3. Birkaç dakika içinde siteniz
   `https://KULLANICI_ADINIZ.github.io/manavgat-tuhafiye/` adresinde
   yayında olur.
4. Yönetim paneline `https://.../admin.html` yolundan ulaşabilirsiniz.

## Özelleştirme ipuçları

- **Mağaza adı, logo, telefon, WhatsApp, adres:** Admin panel →
  Mağaza Ayarları.
- **Kategoriler ve ürünler:** Admin panel → ilgili sekmeden ekleyin,
  düzenleyin veya silin. Görseller cihazınızdan seçilip otomatik
  optimize edilmeden (orijinal boyutta) kaydedilir — çok büyük
  fotoğraflar sitenin yavaş açılmasına sebep olabilir; yüklemeden önce
  görselleri 1000px genişliğe küçültmeniz önerilir.
- **Renkler / yazı tipleri:** `assets/css/style.css` dosyasının en
  üstündeki `:root` bloğunda tüm renkler tek yerden değiştirilebilir.
- **WhatsApp sipariş mesajı:** `assets/js/main.js` içinde
  `mtsWhatsAppLink` çağrılarındaki metni değiştirebilirsiniz.

## Sorun mu yaşıyorsunuz?

- Ürün/kategori görünmüyor mu? Admin panelde doğru tarayıcıda
  olduğunuzdan emin olun (localStorage tarayıcıya özeldir).
- Yanlışlıkla veri mi sildiniz? Yedekleme panelinden en son indirdiğiniz
  JSON dosyasını "Yedekten Geri Yükle" ile geri yükleyebilirsiniz.
