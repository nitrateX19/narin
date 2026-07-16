# Narin — İç Giyim Mağaza Sitesi

Statik, GitHub Pages üzerinde çalışacak şekilde hazırlanmış bir iç giyim mağaza sitesi.
Kategoriler, ürün kataloğu, sepet ve **WhatsApp üzerinden sipariş hattı** içerir.
Yönetim panelinden ürün/kategori ekleme-düzenleme-silme yapılabilir.

## Klasör yapısı

```
narin/
├── index.html    → mağaza (ana site) — CSS ve JS dosya içine gömülüdür
├── admin.html    → yönetim paneli — CSS ve JS dosya içine gömülüdür
└── README.md
```

**Sadece 2 dosya var** (`index.html` ve `admin.html`). Önceki sürümde ayrı `assets/css` ve
`assets/js` klasörleri vardı; GitHub'a dosya yüklerken bu alt klasörlerin bozulup site
stilinin/işlevinin çalışmaması riskine karşı tüm CSS ve JavaScript artık her iki HTML
dosyasının içine gömülüdür. Yükleme sırasında hiçbir klasör yapısı kaybolamaz.

## GitHub Pages'e yayınlama

1. `index.html` ve `admin.html` dosyalarını bir GitHub deposunun **kök dizinine** yükleyin
   (alt klasör oluşturmayın — ikisi de repo'nun ana sayfasında görünmeli).
2. Depo **Settings → Pages** bölümünden yayın kaynağını seçin (`main` dalı / kök `/`).
3. Birkaç dakika içinde siteniz `https://kullaniciadi.github.io/depo-adi/` adresinde yayında olacaktır.
4. Sayfa yine bozuk görünüyorsa: tarayıcıda **Ctrl+Shift+R** (sert yenileme) yapıp önbelleği
   temizleyin, ve adres çubuğunda tam URL'nin sonunda `/` olduğundan emin olun.

## Yönetim paneli — ÖNEMLİ çalışma mantığı

Bu site **tamamen statik**tir, yani bir sunucu veritabanı yoktur. Yönetim panelinden
yaptığınız her değişiklik (ürün ekleme, fiyat güncelleme vb.) tarayıcınızın
`localStorage`'ına yazılır ve **sadece o tarayıcıda görünür.** Başka bir cihazdan
veya gizli sekmeden siteye giren biri bu değişiklikleri görmez.

Değişiklikleri **herkes için kalıcı** yapmak için:

1. Yönetim panelinde **"Yayınla / Dışa Aktar"** sekmesine gidin.
2. **"Kodu Kopyala"** butonuna basın.
3. Hem `index.html` hem `admin.html` dosyalarını açıp, içlerindeki
   `const NARIN_SEED = {...}` bloğunu (dosyanın en üstünde, ilk `<script>` etiketinin
   içinde) kopyaladığınız kodla değiştirin — **iki dosyada da aynı değişikliği yapın**.
4. Değişikliği GitHub'a `git commit` + `git push` ile gönderin (ya da GitHub web
   arayüzünden dosyayı düzenleyip doğrudan commit edin).
5. GitHub Pages birkaç dakika içinde güncel siteyi yayınlar.

Varsayılan admin parolası: **narin2026** (Yönetim Paneli → Parola sekmesinden değiştirin).
Not: Statik sitelerde parola koruması yalnızca kazara erişimi engeller, gerçek bir
güvenlik katmanı değildir — kaynak kodu herkese açıktır.

## WhatsApp sipariş hattı

Müşteri sepeti doldurup ad/telefon/adres bilgilerini girdikten sonra
**"WhatsApp'tan Sipariş Ver"** butonuna bastığında, sipariş detaylarını içeren
hazır bir mesajla WhatsApp açılır. Numarayı Yönetim Paneli → Marka Ayarları →
**WhatsApp Numarası** alanından güncelleyebilirsiniz (ülke kodu ile, boşluksuz,
örn. `905551234567`).

## Görselleri değiştirme

Varsayılan ürün/kategori görselleri yer tutucu (placeholder) görsellerdir.
Kendi ürün fotoğraflarınızı eklemek için:
- Yönetim Paneli → Ürünler → ürün formunda **"Görsel URL"** alanına bir görsel
  linki yapıştırın, **veya**
- **"Bilgisayardan Yükle"** ile doğrudan fotoğraf seçin (görsel tarayıcıda
  otomatik olarak koda gömülür).

## Özelleştirme fikirleri

- `assets/css/style.css` içindeki `:root` bloğundan renk paletini değiştirebilirsiniz.
- Yeni kategori eklemek için Yönetim Paneli → Kategoriler sekmesini kullanın.
- Google Fonts bağlantısını değiştirerek tipografiyi güncelleyebilirsiniz.
