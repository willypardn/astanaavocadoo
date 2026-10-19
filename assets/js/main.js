/**
 * Astana Alpukat - Main JavaScript File
 * Mengatur filter produk, pencarian katalog, modal detail bibit,
 * galeri lightbox, kalkulator proyek kebun, dan format pemesanan WhatsApp otomatis.
 */

// Konfigurasi WhatsApp Usaha (Sesuai PRD: format internasional tanpa +)
const WHATSAPP_NUMBER = "6281235305934";
const BRAND_NAME = "Astana Avocado";

// Database Varietas Bibit Alpukat Astana Alpukat
const PRODUCTS_DATA = [
  {
    id: "miki",
    name: "Bibit Alpukat Miki",
    latin: "Persea americana var. Miki",
    category: "rendah",
    categoryBadge: "Juara Dataran Rendah",
    badgeClass: "badge-green",
    image: "assets/images/alpukat-miki.webp",
    price: "Rp 65.000",
    priceNum: 65000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk / Okulasi",
    fruitAge: "2 - 3 Tahun",
    altitude: "0 - 600 mdpl (Dataran Rendah)",
    weight: "350 - 500 gram/buah",
    flavor: "Pulen mentega gurih tanpa serat",
    canopy: "Kompak Rimbun",
    treeChar: "Tajuk kompak melebar (3-4 m), percabangan teratur dan tidak terlalu tinggi, sangat ideal untuk pekarangan rumah & tabulampot pot besar.",
    leafChar: "Daun kaku tebal berwarna hijau tua mengkilap, memiliki enzim alami penangkal hama ulat (ulat grayak/kipat tidak menyukai daunnya).",
    stemChar: "Batang bawah okulasi sehat perakaran aktif, adaptif terhadap terik matahari dan iklim panas dataran rendah.",
    description: "Pohon alpukat Miki memiliki karakter tajuk yang kompak dan rindang melebar ke samping, tidak terlalu menjulang tinggi sehingga sangat ramah pekarangan sempit maupun tabulampot. Keistimewaan utamanya terletak pada daunnya yang kaku dan tebal dengan kandungan enzim alami penangkal ulat daun. Pohon sangat genjah, tahan cuaca panas tropis, serta memiliki sifat non-seasonal yang mampu berbunga dan berbuah terus-menerus sepanjang tahun asalkan ketersediaan air dan nutrisi terjaga.",
    recommendation: "Sangat direkomendasikan untuk pekarangan perkotaan, tabulampot halaman rumah, dan kebun komersial dataran rendah bersuhu hangat.",
    careTips: "Penyiraman 1-2 hari sekali saat kemarau, pemupukan NPK seimbang tiap 3 bulan, dan pastikan mendapat sinar matahari penuh minimal 6 jam sehari."
  },
  {
    id: "aligator",
    name: "Bibit Alpukat Aligator",
    latin: "Persea americana var. Aligator",
    category: "jumbo",
    categoryBadge: "Buah Jumbo 1.2 Kg",
    badgeClass: "badge-gold",
    image: "assets/images/alpukat-aligator.webp",
    price: "Rp 75.000",
    priceNum: 75000,
    height: "70 - 90 cm",
    propagation: "Sambung Pucuk Unggul",
    fruitAge: "2.5 - 3 Tahun",
    altitude: "200 - 900 mdpl (Rendah - Menengah)",
    weight: "800 - 1.300 gram/buah",
    flavor: "Padat gurih lembut bermentega",
    canopy: "Vigor & Cepat Besar",
    treeChar: "Pertumbuhan sangat cepat (vigor agresif), batang silindris kokoh dengan tajuk kerucut melebar yang gagah.",
    leafChar: "Daun lonjong memanjang dengan tepi bergelombang halus, warna hijau muda segar saat trubus dan hijau pekat saat dewasa.",
    stemChar: "Cabang lateral kekar dan lentur ulet, tangkai buah sangat tebal menopang buah memanjang 1.2 kg agar tidak mudah rontok saat angin kencang.",
    description: "Pohon alpukat Aligator memiliki vigor pertumbuhan vegetatif yang luar biasa cepat dan agresif. Batang utamanya tumbuh kokoh dan silindris dengan cabang-cabang lateral yang tebal serta elastis, dirancang alami untuk menopang tandan buah jumbo seberat 1.2 kg. Daunnya khas lonjong memanjang bergelombang halus. Pohon ini sangat adaptif di dataran rendah hingga menengah, cepat membentuk tajuk rindang, dan sangat responsif terhadap pemangkasan pucuk (pruning) untuk memicu percabangan produktif.",
    recommendation: "Pilihan nomor satu untuk perkebunan agrowisata petik buah dan kebun produksi komersial karena tampilan pohon yang gagah dan produktivitas tinggi.",
    careTips: "Pasang ajir bambu penopang saat bibit masih muda, lakukan pemangkasan pucuk secara teratur agar tajuk melebar menyamping dan memudahkan pemetikan."
  },
  {
    id: "hass",
    name: "Bibit Alpukat Hass",
    latin: "Persea americana var. Hass",
    category: "ekspor",
    categoryBadge: "Standar Ekspor Dunia",
    badgeClass: "badge-forest",
    image: "assets/images/alpukat-hass.webp",
    price: "Rp 85.000",
    priceNum: 85000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk Bersertifikat",
    fruitAge: "3 - 3.5 Tahun",
    altitude: "600 - 1.500 mdpl (Dataran Tinggi)",
    weight: "200 - 350 gram/buah",
    flavor: "Nutty gurih kaya minyak nabati",
    canopy: "Tegak Simetris",
    treeChar: "Postur pohon tegak simetris bertajuk membulat rapat, berkayu padat dan kuat menahan hembusan angin perbukitan.",
    leafChar: "Daun berukuran sedang cenderung kaku berurat tegas, mengeluarkan aroma wangi minyak adas/anis khas ras Guatemala saat diremas.",
    stemChar: "Kayu batang keras dan tahan suhu dingin malam pegunungan (15-22°C), bunga tipe-A mekar serentak di pucuk-pucuk terminal.",
    description: "Pohon alpukat Hass merupakan varietas subtropis-tropis dataran tinggi dengan arsitektur tajuk tegak membulat dan rapat. Batangnya berkayu keras dan padat dengan daya tahan tinggi terhadap tiupan angin lereng gunung. Daunnya berurat tegas dan aromatik, mengeluarkan aroma adas khas bila diremas. Pohon membutuhkan ketinggian di atas 600 mdpl dengan udara sejuk malam hari untuk memicu inisiasi pembungaan tipe-A yang melimpah serentak di ujung ranting.",
    recommendation: "Wajib bagi pekebun di dataran tinggi pegunungan yang ingin membidik pasar modern premium dan ekspor buah internasional.",
    careTips: "Tanam pada tanah gembur berventilasi dengan drainase lancar tanpa genangan air, hindari lokasi dataran rendah yang bersuhu panas konstan."
  },
  {
    id: "kendil",
    name: "Bibit Alpukat Kendil",
    latin: "Persea americana var. Kendil",
    category: "jumbo",
    categoryBadge: "Jumbo Bulat Montok",
    badgeClass: "badge-gold",
    image: "assets/images/alpukat-kendil.webp",
    price: "Rp 70.000",
    priceNum: 70000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk Pilihan",
    fruitAge: "2.5 - 3 Tahun",
    altitude: "100 - 800 mdpl",
    weight: "1.000 - 1.800 gram/buah",
    flavor: "Super creamy pulen mentega",
    canopy: "Kubah Payung Rindang",
    treeChar: "Tajuk pohon membulat lebar menyerupai kubah payung rindang, memberikan naungan teduh yang luas dan sejuk.",
    leafChar: "Daun lebar tebal berdaging dengan ujung agak tumpul bergelombang lembut, berwarna hijau tua pekat yang rimbun.",
    stemChar: "Batang utama berdiameter besar dan kokoh, percabangan horizontal kekar menahan bobot buah bulat raksasa hingga 1.8 kg.",
    description: "Pohon alpukat Kendil berpenampilan kokoh dengan batang utama berdiameter besar dan tajuk kanopi menyerupai kubah payung yang sangat rindang. Daunnya lebar, tebal, dan berujung tumpul, mampu menutupi seluruh ranting dengan lebat. Sistem percabangan lateralnya tumbuh kekar menyamping untuk menopang buah bulat super jumbo berbobot hingga 1.8 kg. Perakarannya menembus dalam ke tanah sehingga relatif tahan pada musim kemarau dan sangat adaptif di iklim tropis terbuka.",
    recommendation: "Pilihan ideal untuk kebun keluarga luas, peneduh pekarangan yang produktif, dan kebun komersial buah bobot super.",
    careTips: "Berikan pupuk kandang matang secara melingkar di bawah tajuk luar tiap 6 bulan untuk menjaga kecukupan hara perakaran yang luas."
  },
  {
    id: "cuba",
    name: "Bibit Alpukat Cuba",
    latin: "Persea americana var. Cuba",
    category: "rendah",
    categoryBadge: "Koleksi Eksotis",
    badgeClass: "badge-green",
    image: "assets/images/alpukat-cuba.webp",
    price: "Rp 80.000",
    priceNum: 80000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk Presisi",
    fruitAge: "2 - 3 Tahun",
    altitude: "50 - 700 mdpl",
    weight: "400 - 650 gram/buah",
    flavor: "Lumer di mulut, manis legit pulen",
    canopy: "Piramida Kompak",
    treeChar: "Tajuk piramida kompak simetris, tata letak cabang rapi dan teratur dengan estetika pohon yang sangat indah.",
    leafChar: "Daun berwarna hijau zamrud cerah mengkilap, permukaan daun sangat licin mulus dan lentur sehat.",
    stemChar: "Batang mulus dengan kalus sambung pucuk yang cepat menyatu kuat, toleran terhadap kelembapan tinggi dan perubahan cuaca tropis.",
    description: "Pohon alpukat Cuba memiliki morfologi tajuk berbentuk piramida kompak yang sangat simetris dan rapi. Batangnya mulus dan tingkat keberhasilan okulasi/sambung pucuk sangat tinggi berkat kompatibilitas kambium yang cepat menyatu. Daunnya berwarna hijau zamrud mengkilap dengan permukaan licin mengkilau di bawah sinar matahari. Pohon ini memiliki ketahanan prima terhadap fluktuasi cuaca tropis basah maupun kering, serta rajin mengeluarkan kuntum bunga secara stabil.",
    recommendation: "Sangat diminati penghobi tanaman koleksi eksotis, pekarangan modern bernilai estetika tinggi, dan kebun buah premium.",
    careTips: "Beri pupuk dengan kandungan kalium dan fosfat saat awal musim hujan untuk memaksimalkan pembentukan dompolan pentil buah."
  },
  {
    id: "pluwang",
    name: "Bibit Alpukat Pluwang",
    latin: "Persea americana var. Pluwang",
    category: "jumbo",
    categoryBadge: "Genjah & Produktif",
    badgeClass: "badge-gold",
    image: "assets/images/alpukat-pluwang.webp",
    price: "Rp 75.000",
    priceNum: 75000,
    height: "70 - 90 cm",
    propagation: "Sambung Pucuk Unggul",
    fruitAge: "2 - 2.5 Tahun",
    altitude: "100 - 900 mdpl",
    weight: "700 - 1.200 gram/buah",
    flavor: "Pulen gurih padat gizi tanpa serat",
    canopy: "Semi-Dwarf Terbuka",
    treeChar: "Postur semi-dwarf (pohon tidak terlalu tinggi), tajuk terbuka memudahkan sinar matahari menembus ke seluruh bagian cabang dalam.",
    leafChar: "Daun berukuran sedang berwarna hijau cerah, susunan daun rapat dengan trubus tunas baru yang sangat aktif bertunas.",
    stemChar: "Tangkai bunga dan buah sangat liat dengan daya cengkeram kuat, persentase kerontokan bunga (flower drop) terbukti paling rendah.",
    description: "Pohon alpukat Pluwang (Green Giant Klaten) adalah varietas yang paling terkenal dengan sifatnya yang paling genjah (sangat cepat berbuah dalam tempo 2-2.5 tahun). Sosok pohonnya bertipe semi-dwarf yang relatif pendek dengan tajuk terbuka, sangat menghemat tempat dan memudahkan pemeliharaan maupun pemanenan tanpa tangga tinggi. Tangkai buahnya liat serta bunganya menempel sangat erat, membuat tingkat kerontokan pentil buah sangat minim dibandingkan varietas lainnya.",
    recommendation: "Pilihan nomor satu untuk investasi kebun alpukat intensif jarak tanam rapat (5x5 m) dengan perputaran modal tercepat.",
    careTips: "Lakukan perompesan cabang air (tunas liar di bawah sambungan) secara rutin agar energi pohon fokus membesarkan cabang produktif."
  },
  {
    id: "red-vietnam",
    name: "Bibit Alpukat Red Vietnam",
    latin: "Persea americana var. Red Vietnam",
    category: "ekspor",
    categoryBadge: "Eksotis Kulit Merah",
    badgeClass: "badge-forest",
    image: "assets/images/alpukat-red-vietnam.webp",
    price: "Rp 95.000",
    priceNum: 95000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk Seleksi",
    fruitAge: "2.5 - 3 Tahun",
    altitude: "300 - 1.200 mdpl",
    weight: "400 - 700 gram/buah",
    flavor: "Kuning keemasan gurih berlemak wangi",
    canopy: "Tegak Eksotis",
    treeChar: "Tajuk tegak menyebar dengan nilai estetika tanaman lanskap tinggi, cabang lentur ulet dan daun rimbun berkarakter unik.",
    leafChar: "Pucuk daun muda (trubus) berwarna merah tembaga/keunguan eksotis yang sangat kontras, perlahan berubah hijau tua saat dewasa.",
    stemChar: "Batang kokoh lentur, pertumbuhan tajuk sangat menyukai sinar matahari penuh (full sun) untuk merangsang pigmen merah alami.",
    description: "Pohon alpukat Red Vietnam memiliki daya tarik visual yang unik dan memikat. Pucuk-pucuk daun mudanya (trubus) muncul dengan semburat warna merah tembaga keemasan yang mencolok sebelum menua menjadi hijau tua pekat. Pohon bertajuk tegak menyebar dengan percabangan yang fleksibel dan liat. Selain menghasilkan buah berkulit merah marun yang bernilai jual tinggi, sosok pohonnya sendiri sangat indah dipandang sehingga banyak dijadikan pohon hias produktif di halaman depan rumah, villa, dan resort.",
    recommendation: "Sangat direkomendasikan untuk agrowisata, hiasan pekarangan depan rumah/villa, dan koleksi tabulampot mewah.",
    careTips: "Tempatkan di posisi yang terkena sinar matahari langsung sepanjang hari untuk mempertegas warna merah pada pucuk daun dan buah."
  },
  {
    id: "kelud",
    name: "Bibit Alpukat Kelud",
    latin: "Persea americana var. Kelud",
    category: "rendah",
    categoryBadge: "Daging Super Tebal",
    badgeClass: "badge-green",
    image: "assets/images/alpukat-kelud.webp",
    price: "Rp 75.000",
    priceNum: 75000,
    height: "60 - 80 cm",
    propagation: "Sambung Pucuk Sehat",
    fruitAge: "2 - 3 Tahun",
    altitude: "100 - 800 mdpl",
    weight: "500 - 800 gram/buah",
    flavor: "Daging 85% mentega gurih tanpa serat",
    canopy: "Membulat Lebat",
    treeChar: "Tajuk membulat lebat dengan vigoritas sangat kuat, daun rimbun menutupi batang sehingga tanaman tampak subur kokoh.",
    leafChar: "Daun berwarna hijau tua pekat, kaku dan bertekstur tebal dengan daya tahan tinggi terhadap serangan jamur daun.",
    stemChar: "Kulit batang tebal tahan kanker batang & jamur upas, memiliki tangkai buah pendek-kekar yang aman menopang buah padat.",
    description: "Pohon alpukat Kelud memiliki vigoritas pertumbuhan vegetatif yang luar biasa kuat dan kokoh. Tajuk daunnya membulat lebat dengan kanopi hijau tua pekat yang rimbun. Kulit batangnya tebal serta memiliki ketahanan alami yang sangat baik terhadap penyakit jamur upas maupun kanker batang. Karakter khas pohonnya adalah tangkai buah yang pendek dan berotot kekar, sehingga sangat aman menyangga buah berdaging tebal 85% tanpa resiko ranting terkulai patah.",
    recommendation: "Pilihan unggulan untuk kebun komersial penghasil buah konsumsi daging tebal dan industri kuliner olahan alpukat.",
    careTips: "Jaga kelembapan tanah di sekitar perakaran dengan mulsa organik (jerami/sekam) dan hindari genangan air berlumpur pada pangkal batang."
  }
];

// Helper: Format Rupiah
function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

// Generate Direct WhatsApp URL
function generateWhatsAppLink(productName, quantity = 5, notes = "") {
  let message = `Halo ${BRAND_NAME}, saya tertarik untuk memesan bibit alpukat berikut:\n\n`;
  message += `🌱 Varietas: *${productName}*\n`;
  message += `📦 Jumlah: *${quantity} bibit*\n`;
  if (notes) {
    message += `📝 Catatan/Lokasi Tanam: ${notes}\n`;
  }
  message += `\nMohon informasi ketersediaan stok, ongkir, dan panduan pengirimannya. Terima kasih!`;
  
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Render Products Catalog
function renderProducts(filterCategory = "all", searchTerm = "") {
  const container = document.getElementById("products-catalog-grid");
  if (!container) return;

  let filtered = PRODUCTS_DATA.filter(item => {
    const matchesCategory = (filterCategory === "all") || (item.category === filterCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.canopy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.altitude.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="py-4">
          <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
          <h4 class="mt-3">Varietas Tidak Ditemukan</h4>
          <p class="text-muted">Coba ubah kata kunci pencarian atau pilih kategori lain.</p>
          <button class="btn btn-outline-custom mt-2" onclick="resetFilters()">Reset Filter</button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="product-card">
        <div class="product-img-wrap">
          <span class="badge-tag ${item.badgeClass} product-badge-pos">${item.categoryBadge}</span>
          <span class="product-stock-badge"><i class="bi bi-check2-circle text-success me-1"></i>Stok Bibit Siap Tanam</span>
          <img src="${item.image}" alt="${item.name}" loading="lazy" width="800" height="800">
        </div>
        <div class="product-body">
          <div class="product-latin-name">${item.latin}</div>
          <h3 class="product-name">${item.name}</h3>
          <p class="product-desc">${item.description}</p>
          
          <div class="product-specs-list">
            <div class="spec-item" title="Tinggi Bibit Siap Tanam">
              <i class="bi bi-rulers"></i> ${item.height}
            </div>
            <div class="spec-item" title="Karakter Tajuk Pohon">
              <i class="bi bi-tree"></i> ${item.canopy}
            </div>
            <div class="spec-item" title="Masa Berbuah Sambung Pucuk">
              <i class="bi bi-clock-history"></i> ${item.fruitAge}
            </div>
            <div class="spec-item" title="Rekomendasi Ketinggian Lahan">
              <i class="bi bi-geo-alt"></i> ${item.altitude.split(' ')[0]} mdpl
            </div>
          </div>

          <div class="product-footer">
            <div>
              <span class="product-price-label">Harga Bibit</span>
              <div class="product-price">${item.price}</div>
            </div>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-custom px-3" onclick="openProductModal('${item.id}')" title="Lihat Karakteristik Lengkap Pohon & Bibit">
                <i class="bi bi-eye"></i> Detail
              </button>
              <a href="${generateWhatsAppLink(item.name, 5)}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-whatsapp px-3" title="Pesan Bibit via WhatsApp">
                <i class="bi bi-whatsapp"></i> Pesan
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

// Open Product Modal
function openProductModal(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modalTitle = document.getElementById("productModalTitle");
  const modalBody = document.getElementById("productModalBody");
  const modalWaBtn = document.getElementById("productModalWaBtn");

  if (modalTitle) modalTitle.innerText = product.name;
  if (modalWaBtn) {
    modalWaBtn.href = generateWhatsAppLink(product.name, 5);
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div class="row g-4">
        <div class="col-md-5">
          <div class="rounded-4 overflow-hidden border shadow-sm">
            <img src="${product.image}" alt="${product.name}" class="w-100 h-100 object-fit-cover" style="max-height: 400px;">
          </div>
          <div class="mt-3 text-center">
            <span class="badge-tag ${product.badgeClass} mb-2">${product.categoryBadge}</span>
            <div class="h4 text-forest fw-bold">${product.price} <small class="text-muted fs-6 fw-normal">/ bibit polybag</small></div>
            <div class="small text-muted"><i class="bi bi-shield-check text-success me-1"></i>Garansi bibit hidup & varietas asli sambung pucuk</div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="text-muted fst-italic small mb-1">${product.latin}</div>
          <h4 class="fw-bold mb-2">${product.name}</h4>
          <p class="text-muted mb-3">${product.description}</p>
          
          <h6 class="fw-bold text-forest mb-2"><i class="bi bi-tree me-1"></i>Spesifikasi &amp; Karakteristik Pohon:</h6>
          <table class="table table-sm table-bordered small mb-3">
            <tbody>
              <tr><th class="bg-light" style="width: 40%;">Tinggi Bibit Polybag</th><td>${product.height}</td></tr>
              <tr><th class="bg-light">Metode Perbanyakan</th><td>${product.propagation}</td></tr>
              <tr><th class="bg-light">Karakter Tajuk Pohon</th><td>${product.treeChar}</td></tr>
              <tr><th class="bg-light">Karakter Daun &amp; Hama</th><td>${product.leafChar}</td></tr>
              <tr><th class="bg-light">Percabangan &amp; Batang</th><td>${product.stemChar}</td></tr>
              <tr><th class="bg-light">Mulai Berbuah</th><td>${product.fruitAge}</td></tr>
              <tr><th class="bg-light">Ketinggian Lahan Tanam</th><td>${product.altitude}</td></tr>
              <tr><th class="bg-light">Bobot &amp; Karakter Buah</th><td>${product.weight} (${product.flavor})</td></tr>
            </tbody>
          </table>

          <div class="alert alert-success border-0 bg-light p-3 rounded-3 small mb-0">
            <strong><i class="bi bi-lightbulb text-warning me-1"></i>Rekomendasi Lahan &amp; Tanam:</strong><br>
            ${product.recommendation}
          </div>
        </div>
      </div>
    `;
  }

  const modalEl = document.getElementById("productDetailModal");
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// Reset Catalog Filters
function resetFilters() {
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) searchInput.value = "";
  
  const buttons = document.querySelectorAll(".catalog-filter-btn");
  buttons.forEach(btn => btn.classList.remove("active"));
  const allBtn = document.querySelector('.catalog-filter-btn[data-category="all"]');
  if (allBtn) allBtn.classList.add("active");

  renderProducts("all", "");
}

// Project Estimator in Layanan Page
function updateProjectEstimator() {
  const countInput = document.getElementById("treeCountInput");
  const varietySelect = document.getElementById("treeVarietySelect");
  const distanceSelect = document.getElementById("treeDistanceSelect");
  
  const totalTreesEl = document.getElementById("estTotalTrees");
  const totalCostEl = document.getElementById("estTotalCost");
  const landAreaEl = document.getElementById("estLandArea");
  const bonusTreesEl = document.getElementById("estBonusTrees");
  const waQuoteBtn = document.getElementById("estWaQuoteBtn");

  if (!countInput || !varietySelect) return;

  const count = parseInt(countInput.value) || 50;
  const unitPrice = parseInt(varietySelect.value) || 65000;
  const varietyName = varietySelect.options[varietySelect.selectedIndex].text;
  const spacing = parseFloat(distanceSelect ? distanceSelect.value : 6); // default 6x6m = 36m2

  const totalCost = count * unitPrice;
  const estimatedArea = Math.round(count * (spacing * spacing));
  const bonus = count >= 200 ? Math.floor(count * 0.05) : (count >= 100 ? 5 : 0);

  if (totalTreesEl) totalTreesEl.innerText = `${count} Bibit`;
  if (totalCostEl) totalCostEl.innerText = formatRupiah(totalCost);
  if (landAreaEl) landAreaEl.innerText = `± ${estimatedArea.toLocaleString('id-ID')} m² (${(estimatedArea/10000).toFixed(2)} Ha)`;
  if (bonusTreesEl) bonusTreesEl.innerText = bonus > 0 ? `+${bonus} Bibit Cadangan (Gratis)` : "Tidak Ada";

  if (waQuoteBtn) {
    let msg = `Halo ${BRAND_NAME}, saya ingin konsultasi paket proyek kebun:\n\n`;
    msg += `🌱 Varietas: *${varietyName}*\n`;
    msg += `🌳 Jumlah Bibit: *${count} pohon*\n`;
    msg += `📐 Jarak Tanam: *${spacing} x ${spacing} meter*\n`;
    msg += `📍 Estimasi Luas: *± ${estimatedArea} m²*\n`;
    msg += `\nMohon info ketersediaan stok, diskon partai, dan opsi pengiriman packing kayu. Terima kasih!`;
    waQuoteBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
}

// Lightbox modal for Gallery
function openGalleryLightbox(imgSrc, title, desc) {
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxDesc = document.getElementById("lightboxDesc");

  if (lightboxImg) lightboxImg.src = imgSrc;
  if (lightboxTitle) lightboxTitle.innerText = title;
  if (lightboxDesc) lightboxDesc.innerText = desc || "";

  const modalEl = document.getElementById("galleryLightboxModal");
  if (modalEl && window.bootstrap) {
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }
}

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Sticky Navbar shadow on scroll
  const navbar = document.querySelector(".main-navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  // Initial Product Catalog Render
  renderProducts();

  // Catalog Filter Buttons Event Listeners
  const filterBtns = document.querySelectorAll(".catalog-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category") || "all";
      const searchVal = document.getElementById("catalogSearchInput")?.value || "";
      renderProducts(category, searchVal);
    });
  });

  // Catalog Search Live Input
  const searchInput = document.getElementById("catalogSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".catalog-filter-btn.active");
      const activeCategory = activeBtn ? activeBtn.getAttribute("data-category") : "all";
      renderProducts(activeCategory, e.target.value);
    });
  }

  // Gallery Filter Buttons
  const galleryBtns = document.querySelectorAll(".gallery-btn");
  const galleryItems = document.querySelectorAll(".gallery-item-col");
  galleryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      galleryBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter");

      galleryItems.forEach(item => {
        if (filter === "all" || item.getAttribute("data-category") === filter) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Project Estimator listeners
  const countInput = document.getElementById("treeCountInput");
  const varietySelect = document.getElementById("treeVarietySelect");
  const distanceSelect = document.getElementById("treeDistanceSelect");
  if (countInput) countInput.addEventListener("input", updateProjectEstimator);
  if (varietySelect) varietySelect.addEventListener("change", updateProjectEstimator);
  if (distanceSelect) distanceSelect.addEventListener("change", updateProjectEstimator);
  updateProjectEstimator();

  // Contact Form Submission to WhatsApp
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName")?.value || "";
      const phone = document.getElementById("contactPhone")?.value || "";
      const city = document.getElementById("contactCity")?.value || "";
      const variety = document.getElementById("contactVariety")?.value || "";
      const message = document.getElementById("contactMessage")?.value || "";

      let waMsg = `Halo ${BRAND_NAME}, saya ingin konsultasi / memesan bibit alpukat:\n\n`;
      waMsg += `👤 Nama: *${name}*\n`;
      waMsg += `📱 No. HP: *${phone}*\n`;
      waMsg += `📍 Kota/Daerah: *${city}*\n`;
      if (variety) waMsg += `🌱 Minat Bibit: *${variety}*\n`;
      waMsg += `💬 Pesan: ${message}\n`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank");
    });
  }

  // Dedicated Consultation Form Submission to WhatsApp
  const consultationForm = document.getElementById("consultationForm");
  if (consultationForm) {
    consultationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("consultName")?.value || "";
      const phone = document.getElementById("consultPhone")?.value || "";
      const city = document.getElementById("consultCity")?.value || "";
      const category = document.getElementById("consultCategory")?.value || "";
      const elevation = document.getElementById("consultElevation")?.value || "";
      const area = document.getElementById("consultArea")?.value || "";
      const variety = document.getElementById("consultVariety")?.value || "";
      const message = document.getElementById("consultMessage")?.value || "";

      let waMsg = `Halo ${BRAND_NAME}, saya ingin konsultasi kebun alpukat (Layanan Konsultasi Rp 15.000):\n\n`;
      waMsg += `👤 *Nama Lengkap*: ${name}\n`;
      waMsg += `📱 *No. WhatsApp/HP*: ${phone}\n`;
      waMsg += `📍 *Lokasi/Kota Kebun*: ${city}\n`;
      if (category) waMsg += `📌 *Topik Konsultasi*: ${category}\n`;
      if (elevation) waMsg += `⛰️ *Ketinggian Lahan*: ${elevation}\n`;
      if (area) waMsg += `🌱 *Luas / Jumlah Pohon*: ${area}\n`;
      if (variety) waMsg += `🥑 *Varietas*: ${variety}\n`;
      if (message) waMsg += `💬 *Rencana / Permasalahan Kebun*:\n${message}\n\n`;
      waMsg += `Mohon info arahan & petunjuk pembayarannya. Terima kasih!`;

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`, "_blank");
    });
  }

  // Check URL Hash for modal auto-open
  const urlHash = window.location.hash;
  if (urlHash && urlHash.startsWith('#articleModal')) {
    const targetModalEl = document.querySelector(urlHash);
    if (targetModalEl && window.bootstrap) {
      setTimeout(() => {
        const modalInstance = new bootstrap.Modal(targetModalEl);
        modalInstance.show();
      }, 300);
    }
  }
});
