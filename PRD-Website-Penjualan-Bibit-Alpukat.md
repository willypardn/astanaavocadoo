# PRD Website Penjualan Bibit Alpukat

**Nama proyek:** Website Penjualan Bibit Alpukat  
**Versi dokumen:** 1.0  
**Status:** Draft kebutuhan produk  
**Bahasa utama:** Bahasa Indonesia  
**Teknologi utama:** HTML5, CSS3, Bootstrap 5, JavaScript  
**Tujuan:** Menyediakan website yang elegan, responsif, mudah ditemukan melalui mesin pencari, serta membantu calon pembeli memilih dan memesan bibit alpukat.

---

## 1. Ringkasan Produk

Website ini merupakan katalog dan sarana penjualan bibit alpukat secara online. Pengunjung dapat melihat jenis bibit, membaca informasi produk, memahami panduan perawatan, dan menghubungi penjual untuk bertanya atau melakukan pemesanan.

Desain menggunakan kombinasi **hijau muda dan putih** dengan tampilan modern, bersih, elegan, serta fleksibel di berbagai ukuran layar. Website harus mengutamakan kecepatan, aksesibilitas, kejelasan informasi, dan pengalaman pengguna.

> Catatan: SEO, AEO, dan GEO pada dokumen ini berarti optimasi untuk mesin pencari, mesin jawaban/AI, serta visibilitas pada hasil pencarian berbasis lokasi. Praktik yang disarankan mengikuti prinsip teknis dan konten yang berkelanjutan; tidak ada teknik yang menjamin posisi tertentu atau penyebutan oleh AI.

## 2. Tujuan dan Sasaran

### Tujuan bisnis
- Menambah jangkauan calon pembeli bibit alpukat.
- Menampilkan katalog bibit dengan informasi yang mudah dibandingkan.
- Menghasilkan pertanyaan dan pesanan melalui WhatsApp atau formulir.
- Membangun kepercayaan melalui informasi varietas, ukuran bibit, metode pengiriman, dan panduan perawatan.

### Sasaran pengguna
- Petani dan calon pekebun alpukat.
- Pemilik kebun atau lahan.
- Penghobi tanaman dan pekarangan rumah.
- Pembeli pemula yang membutuhkan panduan memilih bibit.

### Indikator keberhasilan (KPI)
- Jumlah klik tombol WhatsApp dan formulir pemesanan.
- Jumlah kunjungan ke halaman produk.
- Rasio pengunjung yang menghubungi penjual.
- Performa Core Web Vitals dan hasil audit aksesibilitas.
- Pertumbuhan tayangan, klik, dan halaman terindeks di Google Search Console.
- Kunjungan dan tindakan dari profil bisnis lokal, jika bisnis memenuhi syarat.

## 3. Ruang Lingkup MVP

### Fitur wajib
1. Beranda dengan proposisi nilai dan CTA pemesanan.
2. Katalog produk bibit alpukat.
3. Halaman detail untuk setiap produk/varietas.
4. Pencarian dan filter katalog sederhana.
5. Tombol pemesanan melalui WhatsApp.
6. Halaman tentang usaha dan informasi kontak.
7. Artikel/panduan budidaya dasar.
8. FAQ yang menjawab pertanyaan pembeli.
9. SEO teknis dan metadata dasar.
10. Tampilan responsif untuk ponsel, tablet, dan desktop.
11. Halaman kebijakan privasi dan informasi pengiriman/pemesanan.

### Di luar ruang lingkup MVP
- Pembayaran online dan keranjang belanja penuh.
- Login pelanggan dan riwayat pesanan.
- Integrasi inventaris otomatis.
- Dashboard admin khusus.
- Perhitungan ongkos kirim otomatis.

Fitur di luar ruang lingkup dapat ditambahkan pada fase berikutnya.

## 4. Identitas Visual dan UI

### Palet warna
- **Hijau utama:** `#76B947` — tombol utama dan elemen penting.
- **Hijau gelap:** `#245C36` — judul, navigasi aktif, dan footer.
- **Hijau muda:** `#EAF6E3` — latar bagian tertentu.
- **Putih:** `#FFFFFF` — latar utama dan kartu.
- **Abu-abu teks:** `#344054` — teks isi.
- **Abu-abu lembut:** `#F5F7F4` — latar alternatif dan border.

Pastikan kontras teks dan tombol memenuhi WCAG 2.2 AA sebisa mungkin. Jangan menggunakan hijau muda untuk teks kecil di atas putih jika kontrasnya rendah.

### Gaya desain
- Minimalis, alami, profesional, dan ramah.
- Ruang kosong yang cukup; kartu produk dengan sudut membulat.
- Foto bibit asli berkualitas tinggi, bukan gambar yang menyesatkan.
- Ikon sederhana dan konsisten.
- Animasi ringan saja; hormati preferensi `prefers-reduced-motion`.
- Hindari efek berlebihan yang memperlambat halaman.

### Tipografi
Gunakan font sistem atau font web yang ringan, misalnya `system-ui`, dengan hierarki heading yang konsisten.

### Responsivitas
- Mobile-first.
- Navigasi mobile mudah digunakan.
- Grid produk 1 kolom di layar kecil, 2 kolom di tablet, dan 3–4 kolom di desktop sesuai lebar.
- Tombol CTA cukup besar untuk disentuh.
- Gambar tidak melampaui lebar layar.

## 5. Struktur Situs

- `/` — Beranda
- `/produk/` — Katalog bibit alpukat
- `/produk/bibit-alpukat-miki/` — Detail produk
- `/produk/bibit-alpukat-hass/` — Detail produk
- `/produk/bibit-alpukat-aligator/` — Detail produk
- `/panduan/` — Daftar panduan
- `/panduan/cara-memilih-bibit-alpukat/` — Artikel panduan
- `/tentang-kami/` — Profil usaha
- `/faq/` — Pertanyaan umum
- `/kontak/` — Kontak dan pemesanan
- `/kebijakan-privasi/` — Kebijakan privasi
- `/kebijakan-pemesanan-pengiriman/` — Ketentuan pemesanan dan pengiriman

URL di atas merupakan contoh struktur. Gunakan hanya varietas dan halaman yang benar-benar tersedia serta isi dengan informasi yang sudah diverifikasi.

## 6. Persyaratan Halaman

### 6.1 Beranda
Bagian yang diperlukan:
1. **Header:** logo/nama usaha, navigasi, CTA “Pesan via WhatsApp”.
2. **Hero:** judul utama, penjelasan singkat, tombol “Lihat Bibit” dan “Konsultasi”.
3. **Produk unggulan:** foto, varietas, informasi utama, harga aktual, tombol detail.
4. **Alasan memilih usaha:** tampilkan hanya keunggulan yang benar-benar dapat dibuktikan.
5. **Cara pemesanan:** pilih bibit → konsultasi → konfirmasi stok dan ongkir → pengiriman.
6. **Panduan singkat:** tautan ke artikel yang membantu pembeli.
7. **Testimoni:** hanya ulasan asli dengan izin; jangan membuat testimoni fiktif.
8. **FAQ:** pertanyaan paling sering ditanyakan.
9. **CTA penutup:** ajakan menghubungi penjual.
10. **Footer:** alamat area layanan, kontak, jam layanan, tautan kebijakan, dan media sosial.

Contoh teks hero:
- H1: **Bibit Alpukat Berkualitas untuk Kebun dan Pekarangan**
- Deskripsi: “Temukan pilihan bibit alpukat, pelajari karakteristik setiap varietas, dan konsultasikan kebutuhan tanam Anda sebelum memesan.”
- CTA utama: **Lihat Katalog Bibit**
- CTA sekunder: **Konsultasi via WhatsApp**

Hindari klaim seperti “pasti berbuah cepat”, “100% berhasil”, atau “paling unggul” tanpa bukti dan konteks yang jelas.

### 6.2 Katalog Produk
Setiap kartu produk memuat:
- Foto aktual dan teks alternatif yang deskriptif.
- Nama varietas.
- Harga dan satuan yang jelas, jika harga sudah ditetapkan.
- Tinggi/umur bibit atau ukuran pot jika datanya tersedia dan terukur.
- Status ketersediaan yang diperbarui.
- Tombol “Detail Bibit” dan/atau “Tanya via WhatsApp”.

Filter yang disarankan:
- Varietas.
- Kisaran harga.
- Ukuran bibit.
- Ketersediaan.

Jangan tampilkan harga, stok, ukuran, atau jaminan yang belum diverifikasi.

### 6.3 Detail Produk
Konten minimum:
- Nama varietas dan ringkasan.
- Galeri foto aktual.
- Harga, ukuran bibit, jenis perbanyakan, dan stok jika diketahui.
- Karakteristik varietas dengan sumber tepercaya.
- Saran lokasi tanam dan perawatan dasar yang sesuai.
- Informasi kemasan, pengiriman, serta estimasi waktu yang realistis.
- FAQ produk.
- CTA pemesanan dan tautan ke produk terkait.

### 6.4 Panduan/Artikel
Kategori artikel:
- Memilih bibit alpukat.
- Perbedaan varietas alpukat.
- Penyiraman dan pemupukan.
- Media tanam dan drainase.
- Penanganan bibit saat tiba.
- Teknik sambung pucuk, bila dikuasai dan informasinya dapat dipertanggungjawabkan.

Setiap artikel memiliki penulis/peninjau yang jelas bila relevan, tanggal terbit dan pembaruan yang jujur, referensi tepercaya, gambar yang relevan, serta tautan ke produk terkait tanpa memaksakan promosi.

### 6.5 FAQ
Contoh pertanyaan:
- Bagaimana memilih bibit alpukat untuk pekarangan?
- Apa perbedaan bibit hasil sambung dan bibit dari biji?
- Bagaimana cara merawat bibit setelah diterima?
- Apakah pengiriman tersedia ke daerah saya?
- Bagaimana mengecek stok dan harga terbaru?
- Apa yang perlu dilakukan jika bibit rusak saat pengiriman?

Jawaban harus spesifik, akurat, dan sesuai kebijakan usaha.

### 6.6 Kontak
- Tombol WhatsApp dengan pesan awal otomatis.
- Nomor telepon dan email usaha jika tersedia.
- Area layanan/alamat usaha yang boleh dipublikasikan.
- Jam operasional yang benar.
- Formulir singkat: nama, kontak, produk yang ditanyakan, pesan.
- Persetujuan privasi sebelum data formulir dikirim.

Jangan publikasikan alamat rumah pribadi tanpa persetujuan.

## 7. Persyaratan Teknis

### Stack
- HTML5 semantik.
- CSS3.
- Bootstrap 5 dari sumber resmi; gunakan versi stabil yang dipelihara saat implementasi.
- JavaScript untuk menu, filter, validasi formulir, dan interaksi ringan.
- Backend atau layanan formulir hanya jika dibutuhkan; MVP dapat memakai tautan WhatsApp.

### Implementasi
- Pisahkan struktur, gaya, dan skrip ke file yang jelas.
- Gunakan komponen Bootstrap secara konsisten.
- Gunakan `header`, `nav`, `main`, `section`, `article`, dan `footer` sesuai fungsi.
- Pastikan semua kontrol bisa digunakan dengan keyboard.
- Beri label formulir yang terlihat; jangan hanya mengandalkan placeholder.
- Gunakan `loading="lazy"` untuk gambar di luar area awal layar.
- Tetapkan `width` dan `height` gambar untuk mengurangi layout shift.
- Gunakan gambar WebP/AVIF bila sesuai, dengan fallback yang memadai.
- Minifikasi CSS/JS untuk produksi jika sesuai.
- Hindari plugin dan pustaka yang tidak diperlukan.
- Simpan nomor WhatsApp, alamat, harga, dan data bisnis sebagai konfigurasi yang mudah diperbarui.
- Jangan menyimpan data pribadi pelanggan di kode front-end atau repositori publik.

### Rekomendasi struktur berkas
```text
avocado-store/
├── index.html
├── produk/
│   ├── index.html
│   └── bibit-alpukat-miki.html
├── panduan/
│   ├── index.html
│   └── cara-memilih-bibit-alpukat.html
├── tentang-kami.html
├── faq.html
├── kontak.html
├── kebijakan-privasi.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
├── robots.txt
├── sitemap.xml
└── README.md
```

## 8. SEO — Search Engine Optimization

SEO berfokus pada konten bermanfaat, akses perayapan, pengalaman halaman, serta informasi produk yang akurat.

### 8.1 Riset kata kunci
Lakukan riset berdasarkan data aktual, lokasi layanan, produk yang tersedia, dan bahasa pelanggan. Contoh awal:
- bibit alpukat
- jual bibit alpukat
- bibit alpukat [nama daerah]
- bibit alpukat Miki
- cara memilih bibit alpukat
- cara merawat bibit alpukat
- perbedaan bibit sambung dan bibit biji

Jangan memasukkan nama daerah yang tidak dilayani atau membuat halaman tipis hanya untuk mengejar variasi kata kunci.

### 8.2 On-page SEO
- Satu H1 utama yang menjelaskan topik halaman.
- Judul halaman unik dan deskriptif; usahakan ringkas, bukan mengejar hitungan karakter secara kaku.
- Meta description unik yang merangkum manfaat dan isi halaman.
- URL singkat, mudah dibaca, dan konsisten.
- Heading H2/H3 terstruktur.
- Konten orisinal yang menjawab kebutuhan pembeli.
- Tautan internal antara panduan, kategori, dan detail produk.
- Breadcrumb yang terlihat bila membantu navigasi.
- Alt text menggambarkan isi foto secara alami; jangan menjejalkan kata kunci.
- Canonical URL untuk halaman yang memiliki versi duplikat.
- Open Graph untuk tampilan berbagi sosial.
- Bahasa halaman ditandai dengan `lang="id"`.

Contoh metadata beranda:
```html
<title>Jual Bibit Alpukat | [Nama Usaha]</title>
<meta name="description" content="Temukan pilihan bibit alpukat, informasi varietas, panduan perawatan, dan konsultasi pemesanan dari [Nama Usaha].">
<link rel="canonical" href="https://www.contoh-domain.id/">
<meta property="og:type" content="website">
<meta property="og:title" content="Jual Bibit Alpukat | [Nama Usaha]">
<meta property="og:description" content="Pilih bibit alpukat dan konsultasikan kebutuhan tanam Anda.">
<meta property="og:url" content="https://www.contoh-domain.id/">
<meta property="og:image" content="https://www.contoh-domain.id/assets/images/og-bibit-alpukat.jpg">
```
Ganti placeholder dengan nama dan domain asli sebelum publikasi.

### 8.3 SEO teknis
- Pastikan HTTPS aktif.
- Sediakan `sitemap.xml` dan `robots.txt` yang benar.
- Daftarkan situs di Google Search Console dan pantau indexing.
- Periksa tautan rusak, redirect, canonical, dan halaman 404.
- Jangan memblokir CSS/JavaScript yang diperlukan untuk rendering.
- Gunakan status HTTP yang sesuai.
- Buat halaman penting dapat dijangkau melalui tautan HTML.
- Hindari konten duplikat dan halaman kosong.
- Pantau performa dengan PageSpeed Insights dan data lapangan jika tersedia.

### 8.4 Data terstruktur (Schema.org)
Gunakan JSON-LD yang sesuai dengan isi halaman. Jenis yang mungkin relevan:
- `Organization` atau `LocalBusiness` jika sesuai dengan jenis dan keberadaan usaha.
- `Product` untuk produk nyata yang ditawarkan.
- `BreadcrumbList` untuk navigasi bertingkat.
- `Article` atau `BlogPosting` untuk artikel.
- `FAQPage` hanya bila FAQ benar-benar tampil pada halaman; tampilan kaya FAQ di Google tidak dijamin.

Contoh dasar `Product` — sesuaikan semua data dengan fakta dan konten yang terlihat:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Bibit Alpukat [Varietas]",
  "description": "Deskripsi akurat mengenai bibit yang dijual.",
  "image": [
    "https://www.contoh-domain.id/assets/images/bibit-alpukat.jpg"
  ],
  "offers": {
    "@type": "Offer",
    "url": "https://www.contoh-domain.id/produk/bibit-alpukat/",
    "priceCurrency": "IDR",
    "price": "75000",
    "availability": "https://schema.org/InStock"
  }
}
</script>
```
Harga `75000` dan status stok di atas hanya contoh format, bukan harga atau stok yang disarankan. Jangan publikasikan contoh sebelum menggantinya dengan data aktual. Jangan membuat rating atau ulasan palsu.

### 8.5 Pemantauan SEO
- Google Search Console: indeks, kueri, tayangan, klik, dan masalah teknis.
- Analytics dengan persetujuan privasi yang sesuai bila digunakan.
- Tinjau konten dan stok secara berkala.
- Perbarui artikel saat informasi berubah; jangan mengubah tanggal hanya untuk terlihat baru.

## 9. AEO — Answer Engine Optimization

AEO membantu mesin pencari dan sistem jawaban memahami informasi serta menemukan jawaban yang jelas. Tidak ada markup atau format yang menjamin kutipan oleh sistem AI.

### Praktik
- Jawab pertanyaan utama secara langsung di awal bagian.
- Gunakan heading yang berupa pertanyaan saat terasa alami.
- Buat definisi singkat sebelum penjelasan lebih mendalam.
- Tambahkan tabel perbandingan varietas hanya jika datanya akurat dan dapat dibandingkan.
- Jelaskan istilah seperti “sambung pucuk”, “bibit okulasi”, dan “bibit dari biji”.
- Cantumkan sumber untuk klaim agronomi dan varietas.
- Tampilkan penulis atau peninjau yang kompeten bila relevan.
- Gunakan tanggal terbit/pembaruan yang nyata.
- Pastikan teks penting tersedia sebagai teks HTML yang dapat diakses, bukan hanya gambar.
- Gunakan FAQ yang benar-benar menjawab pertanyaan calon pembeli.
- Hindari halaman yang hanya mengulang kata kunci atau membuat jawaban tanpa nilai tambah.

### Template jawaban ringkas
**Pertanyaan:** Bagaimana memilih bibit alpukat yang baik?  
**Jawaban:** Pilih bibit yang sehat, batang dan daunnya tidak menunjukkan gejala kerusakan, media tanam tidak tergenang, serta identitas varietas dan metode perbanyakannya jelas. Sesuaikan pilihan dengan kondisi lokasi tanam dan minta informasi ukuran serta asal bibit dari penjual.

Jawaban ini adalah panduan umum; sesuaikan dengan kondisi tanaman dan sumber pertanian yang tepercaya.

## 10. GEO — Generative Engine Optimization dan visibilitas lokal

Istilah GEO dapat digunakan untuk *Generative Engine Optimization*, yakni meningkatkan kemungkinan konten dipahami dan dirujuk oleh sistem pencarian berbasis AI. Jika yang dimaksud adalah *Geographic/Local SEO*, praktik lokal juga diperlukan. Keduanya beririsan, tetapi bukan hal yang sama.

### Untuk mesin jawaban/AI
- Publikasikan informasi yang unik, berguna, terstruktur, dan mudah diverifikasi.
- Jelaskan nama usaha, jenis produk, area layanan, dan cara kontak secara konsisten.
- Sertakan bukti nyata seperti foto produk sendiri, detail ukuran, proses pengemasan, dan kebijakan pengiriman.
- Tautkan ke sumber tepercaya untuk klaim teknis.
- Hindari klaim berlebihan, konten otomatis massal, serta halaman doorway.
- Jaga halaman tetap dapat diakses dan tidak menghalangi perayap yang memang ingin diizinkan.
- Pantau rujukan dan trafik dari sumber yang tersedia; penyebutan oleh AI tidak bisa dijamin.

### Untuk SEO lokal
- Jika usaha memiliki lokasi dan memenuhi persyaratan, buat/kelola Google Business Profile.
- Gunakan nama, telepon, jam layanan, dan alamat/area layanan yang konsisten.
- Publikasikan area pengiriman secara jujur.
- Kumpulkan ulasan pelanggan asli tanpa imbalan yang melanggar kebijakan dan balas secara profesional.
- Buat konten lokal yang benar-benar relevan, bukan halaman kota duplikat.
- Gunakan `LocalBusiness` hanya jika sesuai dan semua data benar.
- Jangan menampilkan alamat yang tidak boleh dipublikasikan atau membuat lokasi palsu.

## 11. Performa, Keamanan, dan Privasi

### Target performa
Usahakan memenuhi ambang Core Web Vitals pada persentil ke-75 pengguna:
- LCP ≤ 2,5 detik.
- INP ≤ 200 milidetik.
- CLS ≤ 0,1.

Hasil nyata bergantung pada perangkat, jaringan, hosting, dan konten. Ukur menggunakan data lapangan dan alat pengujian, jangan menganggap target sudah tercapai tanpa pengukuran.

### Keamanan dan privasi
- Gunakan HTTPS.
- Validasi input di server jika formulir memakai backend.
- Lindungi kunci API dan rahasia; jangan masukkan ke JavaScript publik.
- Ambil data pelanggan seminimal mungkin.
- Jelaskan tujuan pengumpulan data dan cara menghubungi pengelola.
- Terapkan perlindungan spam pada formulir.
- Perbarui dependensi dan Bootstrap sesuai versi stabil yang dipilih.
- Jangan mengumpulkan atau membagikan data pelanggan tanpa dasar yang sesuai.

## 12. Aksesibilitas

- Kontras warna yang memadai.
- Navigasi keyboard dan indikator fokus terlihat.
- Teks alternatif untuk gambar informatif.
- Label input dan pesan kesalahan yang jelas.
- Struktur heading berurutan.
- Tombol memiliki nama yang bermakna.
- Jangan menyampaikan status hanya dengan warna.
- Animasi tidak mengganggu pengguna yang mengurangi gerakan.

## 13. Alur Pengguna Utama

1. Pengunjung datang dari pencarian, media sosial, atau tautan.
2. Membaca informasi utama dan melihat katalog.
3. Membuka detail varietas.
4. Memeriksa harga, ukuran, stok, dan informasi pengiriman.
5. Menekan tombol WhatsApp.
6. Pesan otomatis berisi nama produk dan pertanyaan awal.
7. Penjual mengonfirmasi stok, biaya kirim, dan detail pembayaran secara langsung.

Contoh format tautan WhatsApp:
```html
<a
  class="btn btn-success"
  href="https://wa.me/62XXXXXXXXXX?text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20bibit%20alpukat."
  target="_blank"
  rel="noopener noreferrer"
>
  Tanya via WhatsApp
</a>
```
Ganti `62XXXXXXXXXX` dengan nomor usaha dalam format internasional tanpa tanda `+`, spasi, atau tanda hubung. Pastikan teks pesan sudah di-URL-encode.

## 14. Kriteria Penerimaan

Website MVP dinyatakan siap ditinjau ketika:
- Semua halaman utama dapat dibuka dan navigasi bekerja.
- Tampilan diuji di ponsel, tablet, dan desktop.
- Tombol WhatsApp membuka percakapan dengan pesan yang sesuai.
- Informasi produk, harga, stok, dan pengiriman telah diverifikasi pemilik usaha.
- Tidak ada tautan internal penting yang rusak.
- Setiap halaman utama memiliki title, meta description, H1, dan canonical yang sesuai.
- Gambar memiliki ukuran yang sesuai dan alt text relevan.
- `robots.txt` dan sitemap diperiksa sebelum peluncuran.
- Structured data lolos pengujian sintaks dan sesuai konten yang terlihat.
- Formulir (jika digunakan) tervalidasi dan memiliki pemberitahuan privasi.
- Performa dan aksesibilitas telah diuji menggunakan alat yang relevan.
- Tidak ada testimoni, rating, sertifikasi, klaim hasil panen, atau data usaha fiktif.

## 15. Tahapan Pengerjaan

### Tahap 1 — Persiapan
- Tentukan nama usaha, domain, nomor WhatsApp, area layanan, dan identitas visual.
- Kumpulkan foto asli, harga, stok, ukuran bibit, varietas, dan kebijakan pengiriman.
- Riset kata kunci berdasarkan produk dan wilayah yang benar-benar dilayani.

### Tahap 2 — Desain dan pembangunan
- Buat wireframe beranda, katalog, detail produk, artikel, dan kontak.
- Implementasikan HTML, CSS, Bootstrap, dan JavaScript.
- Tambahkan konten dan CTA pemesanan.

### Tahap 3 — Optimasi dan pengujian
- Terapkan SEO teknis, metadata, schema, sitemap, dan robots.
- Audit aksesibilitas, keamanan, tampilan responsif, dan performa.
- Uji formulir/WhatsApp di perangkat berbeda.

### Tahap 4 — Peluncuran dan evaluasi
- Hubungkan domain dan HTTPS.
- Daftarkan di Search Console.
- Pantau kueri, klik, kontak, dan halaman produk yang paling banyak diminati.
- Perbarui informasi sesuai perubahan stok dan kebutuhan pelanggan.

## 16. Informasi yang Harus Dilengkapi Pemilik Usaha

Sebelum website dipublikasikan, lengkapi:
- Nama merek/usaha.
- Logo dan foto bibit asli.
- Varietas yang benar-benar tersedia.
- Harga, ukuran, metode perbanyakan, dan status stok.
- Nomor WhatsApp bisnis.
- Area pengiriman dan aturan ongkir.
- Alamat atau area layanan yang boleh ditampilkan.
- Jam operasional.
- Kebijakan pengembalian/komplain jika ada.
- Domain website.
- Bukti atau sumber untuk klaim kualitas dan karakteristik varietas.

---

## 17. Referensi Resmi untuk Pemeriksaan Saat Implementasi

Dokumentasi dapat berubah. Periksa kembali versi dan pedoman resmi ketika mulai membangun website.

- Bootstrap: https://getbootstrap.com/docs/
- Google Search Central — SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Google Search Central — Structured Data: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- Google Search Central — Product structured data: https://developers.google.com/search/docs/appearance/structured-data/product
- Google Search Central — Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Schema.org: https://schema.org/
- web.dev — Learn Performance: https://web.dev/learn/performance/
- W3C Web Accessibility Initiative: https://www.w3.org/WAI/standards-guidelines/wcag/

---

**Akhir dokumen PRD.**
