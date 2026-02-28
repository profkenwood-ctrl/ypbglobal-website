// ===== TRANSLATIONS SYSTEM =====
const translations = {
    'id': {
        // Header & Navigation
        'nav.home': 'Beranda',
        'nav.about': 'Tentang',
        'nav.programs': 'Program',
        'nav.news': 'Berita',
        'nav.contact': 'Kontak',
        'lang.select': 'Pilih bahasa',
        'skiplink': 'Lompat ke konten utama',
        
        // Hero Section
        'hero.title': 'Melayani dengan kasih,<br>membangun dengan harapan.',
        'hero.subtitle': 'Yayasan Persada Bakti Global berkomitmen untuk bantuan sosial kemanusiaan berkelanjutan.',
        'hero.btn.about': 'Kenali Yayasan Kami',
        'hero.btn.contact': 'Hubungi Kami',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',
        
        // Home Highlights
        'highlight.about.title': 'Tentang Kami',
        'highlight.about.desc': 'Sejarah & Visi',
        'highlight.programs.title': 'Program',
        'highlight.programs.desc': 'Dampak Nyata',
        'highlight.news.title': 'Publikasi',
        'highlight.news.desc': 'Laporan & Berita',
        
        // About Section
        'about.title': 'Tentang Yayasan',
        'about.vision': 'Visi',
        'about.vision.desc': 'Menjadi organisasi terdepan dalam pemberdayaan masyarakat dan pembangunan berkelanjutan.',
        'about.mission': 'Misi',
        'about.mission.li1': 'Memberdayakan melalui pendidikan dan pelatihan',
        'about.mission.li2': 'Mendorong inovasi sosial',
        'about.mission.li3': 'Membangun kemitraan strategis',
        'about.values': 'Nilai-Nilai Inti',
        'about.values.love': 'Kasih',
        'about.values.integrity': 'Integritas',
        'about.values.hope': 'Harapan',
        'about.values.collaboration': 'Kolaborasi',
        'about.org': 'Struktur Organisasi',
        'about.gallery': 'Galeri Kegiatan',
        'carousel.prev': 'Sebelumnya',
        'carousel.next': 'Berikutnya',
        'back.to.org': '← Kembali ke Struktur Organisasi',
        
        // Organization Positions
        'about.org.chairman': 'Ketua Pembina',
        'about.org.ceo': 'Ketua Yayasan',
        'about.org.secretary': 'Sekretaris',
        'about.org.treasurer': 'Bendahara',
        'about.org.programs': 'Program',
        'about.org.finance': 'Keuangan',
        'about.org.pr': 'Humas',
        
        // Organization Detail Page Titles
        'org.chairman.title': 'Ketua Pembina - YPBG',
        'org.ceo.title': 'Ketua Yayasan - YPBG',
        'org.secretary.title': 'Sekretaris - YPBG',
        'org.treasurer.title': 'Bendahara - YPBG',
        'org.programs.title': 'Program - YPBG',
        'org.finance.title': 'Keuangan - YPBG',
        'org.pr.title': 'Humas - YPBG',
        
        // Organization Detail Sections
        'org.biodata': '📋 Biodata',
        'org.motto': '💡 Moto Hidup',
        'org.hobbies': '🎯 Hobi',
        'org.career': '💼 Karir Profesional',
        
        // Biodata Fields
        'org.fullname': 'Nama Lengkap',
        'org.birthdate': 'Tanggal Lahir',
        'org.birthplace': 'Tempat Lahir',
        'org.education': 'Pendidikan Terakhir',
        
        // Ketua Pembina Data
        'org.chairman.name': 'Dr. H. Muhammad Yusuf, M.Si',
        'org.chairman.birth': '15 Maret 1965',
        'org.chairman.birthplace': 'Jakarta, Indonesia',
        'org.chairman.education': 'S3 Manajemen Publik',
        'org.chairman.motto': '"Berbuat baiklah kepada sesama tanpa mengharap imbalan, karena kebahagiaan sejati terletak pada memberi bukan menerima."',
        'org.chairman.hobby1': '📖 Membaca buku-buku kepemimpinan dan manajemen',
        'org.chairman.hobby2': '🏃 Lari pagi dan olahraga kesehatan',
        'org.chairman.hobby3': '✈️ Traveling dan mengenal budaya baru',
        'org.chairman.hobby4': '🎣 Memancing di waktu luang',
        'org.chairman.career1.year': '2020 - Sekarang',
        'org.chairman.career1.title': 'Ketua Pembina YPBG',
        'org.chairman.career1.desc': 'Memimpin yayasan dalam program pemberdayaan masyarakat',
        'org.chairman.career2.year': '2015 - 2020',
        'org.chairman.career2.title': 'Direktur PT Sejahtera Mandiri',
        'org.chairman.career2.desc': 'Memimpin perusahaan konsultan manajemen',
        'org.chairman.career3.year': '2010 - 2015',
        'org.chairman.career3.title': 'Kepala Dinas Sosial',
        'org.chairman.career3.desc': 'Melayani masyarakat dalam bidang sosial',
        'org.chairman.career4.year': '2005 - 2010',
        'org.chairman.career4.title': 'Wakil Kepala Kecamatan',
        'org.chairman.career4.desc': 'Membantu pembangunan wilayah kecamatan',
        
        // Ketua Yayasan Data
        'org.ceo.name': 'Dr. Siti Aminah, M.M',
        'org.ceo.birth': '22 Juli 1970',
        'org.ceo.birthplace': 'Bandung, Indonesia',
        'org.ceo.education': 'S3 Manajemen Organisasi',
        'org.ceo.motto': '"Kepemimpinan bukan tentang kekuasaan, tetapi tentang melayani dan menginspirasi orang lain untuk mencapai potensi terbaik mereka."',
        'org.ceo.hobby1': '🧘 Yoga dan meditasi',
        'org.ceo.hobby2': '📚 Menulis artikel tentang kepemimpinan',
        'org.ceo.hobby3': '🎵 Mendengarkan musik klasik',
        'org.ceo.hobby4': '🌱 Berkebun tanaman hias',
        'org.ceo.career1.year': '2018 - Sekarang',
        'org.ceo.career1.title': 'Ketua Yayasan YPBG',
        'org.ceo.career1.desc': 'Memimpin operasional yayasan dan pengembangan program',
        'org.ceo.career2.year': '2012 - 2018',
        'org.ceo.career2.title': 'Direktur SDM PT Nusantara Jaya',
        'org.ceo.career2.desc': 'Mengelola pengembangan sumber daya manusia',
        'org.ceo.career3.year': '2008 - 2012',
        'org.ceo.career3.title': 'Manajer Operasional',
        'org.ceo.career3.desc': 'Mengawasi operasional perusahaan',
        'org.ceo.career4.year': '2005 - 2008',
        'org.ceo.career4.title': 'Supervisor',
        'org.ceo.career4.desc': 'Memimpin tim operasional',
        
        // Sekretaris Data
        'org.secretary.name': 'Rina Susanti, S.E',
        'org.secretary.birth': '10 April 1975',
        'org.secretary.birthplace': 'Surabaya, Indonesia',
        'org.secretary.education': 'S1 Ekonomi Manajemen',
        'org.secretary.motto': '"Ketelitian dan keteraturan adalah kunci kesuksesan dalam setiap pekerjaan."',
        'org.secretary.hobby1': '📝 Menulis jurnal dan blog',
        'org.secretary.hobby2': '🎨 Melukis dan crafting',
        'org.secretary.hobby3': '📖 Membaca novel',
        'org.secretary.hobby4': '🍳 Memasak makanan tradisional',
        'org.secretary.career1.year': '2019 - Sekarang',
        'org.secretary.career1.title': 'Sekretaris Yayasan YPBG',
        'org.secretary.career1.desc': 'Mengelola administrasi dan dokumentasi yayasan',
        'org.secretary.career2.year': '2015 - 2019',
        'org.secretary.career2.title': 'Senior Administrative Officer',
        'org.secretary.career2.desc': 'Mengkoordinir kegiatan administrasi perusahaan',
        'org.secretary.career3.year': '2010 - 2015',
        'org.secretary.career3.title': 'Administrative Staff',
        'org.secretary.career3.desc': 'Menangani administrasi harian',
        'org.secretary.career4.year': '2007 - 2010',
        'org.secretary.career4.title': 'Junior Secretary',
        'org.secretary.career4.desc': 'Membantu kegiatan sekretariat',
        
        // Bendahara Data
        'org.treasurer.name': 'Ahmad Fauzi, S.Kom, Ak',
        'org.treasurer.birth': '5 Desember 1972',
        'org.treasurer.birthplace': 'Medan, Indonesia',
        'org.treasurer.education': 'S1 Akuntansi & Komputer',
        'org.treasurer.motto': '"Kejujuran dalam mengelola keuangan adalah amanah yang harus dijaga dengan penuh tanggung jawab."',
        'org.treasurer.hobby1': '💰 Investasi dan trading saham',
        'org.treasurer.hobby2': '📊 Analisis keuangan dan ekonomi',
        'org.treasurer.hobby3': '⚽ Menonton pertandingan sepak bola',
        'org.treasurer.hobby4': '🎸 Bermain gitar akustik',
        'org.treasurer.career1.year': '2018 - Sekarang',
        'org.treasurer.career1.title': 'Bendahara Yayasan YPBG',
        'org.treasurer.career1.desc': 'Mengelola keuangan dan aset yayasan',
        'org.treasurer.career2.year': '2013 - 2018',
        'org.treasurer.career2.title': 'Finance Manager',
        'org.treasurer.career2.desc': 'Memimpin departemen keuangan perusahaan',
        'org.treasurer.career3.year': '2008 - 2013',
        'org.treasurer.career3.title': 'Senior Accountant',
        'org.treasurer.career3.desc': 'Menyusun laporan keuangan',
        'org.treasurer.career4.year': '2005 - 2008',
        'org.treasurer.career4.title': 'Junior Accountant',
        'org.treasurer.career4.desc': 'Membantu pembukuan dan audit',
        
        // Program Data
        'org.programs.name': 'Budi Santoso, S.Sos',
        'org.programs.birth': '18 September 1980',
        'org.programs.birthplace': 'Yogyakarta, Indonesia',
        'org.programs.education': 'S1 Ilmu Sosial & Politik',
        'org.programs.motto': '"Program yang baik adalah yang memberikan dampak nyata bagi masyarakat."',
        'org.programs.hobby1': '🏃 Lari maraton dan triathlon',
        'org.programs.hobby2': '📷 Fotografi dokumenter',
        'org.programs.hobby3': '🎒 Backpacking ke berbagai daerah',
        'org.programs.hobby4': '☕ Ngopi dan diskusi sosial',
        'org.programs.career1.year': '2020 - Sekarang',
        'org.programs.career1.title': 'Kepala Program YPBG',
        'org.programs.career1.desc': 'Merancang dan mengelola program pemberdayaan masyarakat',
        'org.programs.career2.year': '2016 - 2020',
        'org.programs.career2.title': 'Program Coordinator',
        'org.programs.career2.desc': 'Mengkoordinir pelaksanaan program sosial',
        'org.programs.career3.year': '2012 - 2016',
        'org.programs.career3.title': 'Field Officer',
        'org.programs.career3.desc': 'Supervisi program di lapangan',
        'org.programs.career4.year': '2009 - 2012',
        'org.programs.career4.title': 'Social Worker',
        'org.programs.career4.desc': 'Pekerja sosial masyarakat',
        
        // Keuangan Data
        'org.finance.name': 'Dewi Lestari, S.E, Ak',
        'org.finance.birth': '12 Februari 1978',
        'org.finance.birthplace': 'Semarang, Indonesia',
        'org.finance.education': 'S1 Akuntansi',
        'org.finance.motto': '"Setiap rupiah yang dikelola harus memberikan manfaat sebesar-besarnya untuk masyarakat."',
        'org.finance.hobby1': '💵 Perencanaan keuangan pribadi',
        'org.finance.hobby2': '📈 Membaca laporan keuangan perusahaan',
        'org.finance.hobby3': '🎹 Bermain piano',
        'org.finance.hobby4': '🍰 Membuat kue dan dessert',
        'org.finance.career1.year': '2019 - Sekarang',
        'org.finance.career1.title': 'Kepala Keuangan YPBG',
        'org.finance.career1.desc': 'Mengelola perencanaan dan pelaporan keuangan yayasan',
        'org.finance.career2.year': '2014 - 2019',
        'org.finance.career2.title': 'Senior Finance Staff',
        'org.finance.career2.desc': 'Menyusun budget dan cash flow',
        'org.finance.career3.year': '2010 - 2014',
        'org.finance.career3.title': 'Finance Staff',
        'org.finance.career3.desc': 'Mengelola transaksi keuangan',
        'org.finance.career4.year': '2007 - 2010',
        'org.finance.career4.title': 'Accounting Staff',
        'org.finance.career4.desc': 'Membantu pembukuan dan rekonsiliasi',
        
        // Humas Data
        'org.pr.name': 'Andi Pratama, S.I.Kom',
        'org.pr.birth': '25 Juni 1985',
        'org.pr.birthplace': 'Makassar, Indonesia',
        'org.pr.education': 'S1 Ilmu Komunikasi',
        'org.pr.motto': '"Komunikasi yang efektif adalah jembatan antara yayasan dan masyarakat."',
        'org.pr.hobby1': '🎤 Public speaking dan MC',
        'org.pr.hobby2': '📱 Media sosial dan content creation',
        'org.pr.hobby3': '🎬 Membuat video dan editing',
        'org.pr.hobby4': '⚽ Futsal dan olahraga tim',
        'org.pr.career1.year': '2020 - Sekarang',
        'org.pr.career1.title': 'Kepala Humas YPBG',
        'org.pr.career1.desc': 'Mengelola komunikasi dan citra yayasan',
        'org.pr.career2.year': '2016 - 2020',
        'org.pr.career2.title': 'Public Relations Officer',
        'org.pr.career2.desc': 'Menjalin hubungan dengan media dan mitra',
        'org.pr.career3.year': '2012 - 2016',
        'org.pr.career3.title': 'Communication Staff',
        'org.pr.career3.desc': 'Menyusun materi komunikasi dan publikasi',
        'org.pr.career4.year': '2009 - 2012',
        'org.pr.career4.title': 'Junior PR',
        'org.pr.career4.desc': 'Membantu kegiatan public relations',
        'about.program': 'Tentang Program',
        'program.documents': 'Dokumen Program',
        'program.gallery': 'Galeri Kegiatan',
        'back.to.programs': 'Kembali ke Program',
        'document.proposal': 'Proposal Program',
        'document.report': 'Laporan Pekerjaan',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        
        // Programs Section
        'programs.title': 'Program & Kegiatan',
        'programs.filter.all': 'Semua',
        'programs.filter.scholarship': 'Beasiswa',
        'programs.filter.infrastructure': 'Infrastruktur',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'Kesehatan',
        'programs.filter.social': 'Sosial',
        'programs.scholarship': 'Program Beasiswa',
        'programs.scholarship.desc': 'Dukungan pendidikan penuh untuk pelajar berprestasi.',
        'programs.scholarship.narrative.1': 'Program Beasiswa Yayasan Persada Bakti Global adalah komitmen kami untuk meningkatkan kualitas pendidikan generasi muda Indonesia. Program ini dirancang untuk memberikan kesempatan kepada siswa-siswi berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan mereka.',
        'programs.scholarship.narrative.2': 'Setiap penerima beasiswa mendapatkan dukungan penuh meliputi biaya sekolah, buku, seragam, dan tunjangan bulanan. Kami percaya bahwa pendidikan adalah kunci untuk memutus rantai kemiskinan dan membangun masa depan yang lebih baik.',
        'programs.scholarship.narrative.3': 'Hingga saat ini, Program Beasiswa YPBG telah membantu lebih dari 500 siswa untuk menyelesaikan pendidikan mereka, dengan tingkat kelulusan 100% dan banyak alumni yang melanjutkan ke perguruan tinggi ternama.',
        'programs.scholarship.gallery.1': 'Penyerahan bantuan beasiswa kepada siswa berprestasi',
        'programs.scholarship.gallery.2': 'Foto bersama penerima beasiswa dan tim YPBG',
        'programs.scholarship.gallery.3': 'Kegiatan bimbingan belajar untuk penerima beasiswa',
        'programs.infrastructure': 'Pembangunan Infrastruktur',
        'programs.infrastructure.desc': 'Jalan desa dan fasilitas publik untuk komunitas.',
        'programs.infrastructure.narrative.1': 'Program Pembangunan Infrastruktur Yayasan Persada Bakti Global berfokus pada pengembangan fasilitas publik yang mendukung perekonomian dan kesejahteraan masyarakat. Kami membangun jalan desa, jembatan, sistem drainase, dan fasilitas umum lainnya yang sangat dibutuhkan oleh komunitas.',
        'programs.infrastructure.narrative.2': 'Setiap proyek infrastruktur kami dirancang dengan mempertimbangkan kebutuhan jangka panjang masyarakat dan dampak lingkungan. Kami bekerja sama dengan pemerintah daerah dan komunitas lokal untuk memastikan pembangunan yang berkelanjutan dan bermanfaat bagi semua.',
        'programs.infrastructure.narrative.3': 'Hingga saat ini, YPBG telah menyelesaikan pembangunan lebih dari 50 km jalan desa, 10 jembatan, dan berbagai fasilitas publik lainnya yang telah meningkatkan aksesibilitas dan perekonomian masyarakat di berbagai daerah.',
        'programs.infrastructure.gallery.1': 'Pembangunan jalan desa untuk meningkatkan aksesibilitas',
        'programs.infrastructure.gallery.2': 'Foto bersama tim dan masyarakat setelah penyelesaian proyek',
        'programs.infrastructure.gallery.3': 'Pembangunan jembatan untuk menghubungkan dua desa',
        'programs.mbg': 'Makanan Bergizi Gratis (MBG)',
        'programs.mbg.desc': 'Pelestarian ekosistem mangrove dan reboisasi pantai.',
        'programs.mbg.narrative.1': 'Program Makanan Bergizi Gratis (MBG) Yayasan Persada Bakti Global adalah komitmen kami untuk meningkatkan kualitas gizi masyarakat, khususnya anak-anak dan keluarga kurang mampu. Program ini menyediakan makanan bergizi secara gratis kepada mereka yang membutuhkan.',
        'programs.mbg.narrative.2': 'Selain penyediaan makanan, program MBG juga mencakup edukasi gizi, pelestarian ekosistem mangrove, dan reboisasi pantai untuk menciptakan lingkungan yang sehat dan berkelanjutan.',
        'programs.mbg.narrative.3': 'Hingga saat ini, program MBG telah menyalurkan lebih dari 10,000 paket makanan bergizi dan menanam 5,000 pohon mangrove di berbagai wilayah pesisir Indonesia.',
        'programs.mbg.gallery.1': 'Penyaluran makanan bergizi kepada masyarakat',
        'programs.mbg.gallery.2': 'Kegiatan penanaman mangrove untuk pelestarian lingkungan',
        'programs.mbg.gallery.3': 'Edukasi gizi untuk ibu dan anak',
        'programs.irrigation': 'Irigasi',
        'programs.irrigation.desc': 'Pembangunan sistem irigasi untuk pertanian masyarakat.',
        'programs.irrigation.narrative.1': 'Program Irigasi Yayasan Persada Bakti Global berfokus pada pembangunan dan rehabilitasi sistem irigasi untuk mendukung pertanian masyarakat. Sistem irigasi yang baik sangat penting untuk meningkatkan produktivitas pertanian dan kesejahteraan petani.',
        'programs.irrigation.narrative.2': 'Kami membangun saluran irigasi, bendungan kecil, dan sistem pompa air yang membantu petani mengairi sawah dan ladang mereka secara efisien. Program ini juga mencakup pelatihan pengelolaan air berkelanjutan.',
        'programs.irrigation.narrative.3': 'Hingga saat ini, YPBG telah membangun dan merehabilitasi lebih dari 30 km saluran irigasi yang mengairi lebih dari 500 hektar lahan pertanian di berbagai daerah.',
        'programs.irrigation.gallery.1': 'Pembangunan saluran irigasi untuk pertanian masyarakat',
        'programs.irrigation.gallery.2': 'Foto bersama petani setelah penyelesaian proyek irigasi',
        'programs.irrigation.gallery.3': 'Sistem pompa air untuk irigasi lahan kering',
        'programs.healthy_food': 'Makanan Sehat',
        'programs.healthy_food.desc': 'Penyediaan makanan bergizi untuk masyarakat membutuhkan.',
        'programs.healthy_food.narrative.1': 'Program Makanan Sehat Yayasan Persada Bakti Global adalah inisiatif untuk meningkatkan kesadaran dan akses masyarakat terhadap makanan bergizi. Program ini menyediakan edukasi gizi dan penyediaan makanan sehat untuk keluarga kurang mampu.',
        'programs.healthy_food.narrative.2': 'Kami bekerja sama dengan ahli gizi dan tenaga kesehatan untuk menyusun menu makanan yang bergizi seimbang. Program ini juga mencakup penyuluhan tentang pentingnya gizi seimbang dan pola makan sehat.',
        'programs.healthy_food.narrative.3': 'Hingga saat ini, Program Makanan Sehat telah menjangkau lebih dari 2,000 keluarga dan menyelenggarakan 50+ sesi penyuluhan gizi di berbagai komunitas.',
        'programs.healthy_food.gallery.1': 'Penyediaan makanan bergizi untuk masyarakat',
        'programs.healthy_food.gallery.2': 'Penyuluhan gizi dan pola makan sehat',
        'programs.healthy_food.gallery.3': 'Demo masak makanan sehat bergizi',
        'programs.mck': 'Mandi, Cuci, Kakus (MCK)',
        'programs.mck.desc': 'Pembangunan fasilitas MCK untuk kesehatan lingkungan.',
        'programs.mck.narrative.1': 'Program MCK (Mandi, Cuci, Kakus) Yayasan Persada Bakti Global berfokus pada pembangunan fasilitas sanitasi yang layak untuk meningkatkan kesehatan lingkungan dan kualitas hidup masyarakat.',
        'programs.mck.narrative.2': 'Kami membangun MCK umum yang dilengkapi dengan air bersih, tempat cuci tangan, dan toilet yang higienis. Program ini juga mencakup edukasi tentang pentingnya kebersihan dan sanitasi untuk mencegah penyakit.',
        'programs.mck.narrative.3': 'Hingga saat ini, YPBG telah membangun 25 unit MCK yang melayani lebih dari 5,000 warga di berbagai daerah, significantly mengurangi angka penyakit akibat sanitasi buruk.',
        'programs.mck.gallery.1': 'Pembangunan fasilitas MCK untuk masyarakat',
        'programs.mck.gallery.2': 'Edukasi kebersihan dan sanitasi',
        'programs.mck.gallery.3': 'Fasilitas MCK yang sudah selesai dibangun',
        'programs.worship_house': 'Rumah Ibadat',
        'programs.worship_house.desc': 'Pembangunan dan renovasi rumah ibadat.',
        'programs.worship_house.narrative.1': 'Program Rumah Ibadat Yayasan Persada Bakti Global adalah komitmen kami untuk mendukung fasilitas ibadah bagi masyarakat. Kami membangun dan merenovasi masjid, musholla, gereja, pura, dan vihara untuk mendukung kebutuhan spiritual masyarakat.',
        'programs.worship_house.narrative.2': 'Setiap pembangunan rumah ibadat dilakukan dengan memperhatikan kebutuhan komunitas lokal dan standar konstruksi yang baik. Program ini juga mencakup penyediaan fasilitas pendukung seperti tempat wudhu, toilet, dan perpustakaan.',
        'programs.worship_house.narrative.3': 'Hingga saat ini, YPBG telah membangun dan merenovasi 15 rumah ibadat di berbagai daerah, memberikan tempat ibadah yang layak bagi ribuan jamaah.',
        'programs.worship_house.gallery.1': 'Pembangunan rumah ibadat untuk masyarakat',
        'programs.worship_house.gallery.2': 'Foto bersama jamaah setelah peresmian',
        'programs.worship_house.gallery.3': 'Kegiatan keagamaan di rumah ibadat',
        'programs.orphanage': 'Panti Asuhan',
        'programs.orphanage.desc': 'Bantuan dan dukungan untuk panti asuhan.',
        'programs.orphanage.narrative.1': 'Program Panti Asuhan Yayasan Persada Bakti Global adalah wujud kepedulian kami terhadap anak-anak yatim dan kurang mampu. Program ini menyediakan bantuan berupa makanan, pakaian, pendidikan, dan fasilitas untuk panti asuhan.',
        'programs.orphanage.narrative.2': 'Kami bekerja sama dengan berbagai panti asuhan untuk memastikan anak-anak mendapatkan perawatan dan pendidikan yang layak. Program ini juga mencakup kegiatan rekreasi, bimbingan belajar, dan pengembangan bakat untuk anak-anak.',
        'programs.orphanage.narrative.3': 'Hingga saat ini, YPBG telah membantu 20 panti asuhan dengan total lebih dari 500 anak yang menerima manfaat dari program ini, memberikan mereka harapan dan masa depan yang lebih baik.',
        'programs.orphanage.gallery.1': 'Penyaluran bantuan untuk panti asuhan',
        'programs.orphanage.gallery.2': 'Kegiatan rekreasi dan bimbingan belajar',
        'programs.orphanage.gallery.3': 'Foto bersama anak-anak panti asuhan',
        'programs.medical': 'Pengobatan',
        'programs.medical.desc': 'Layanan pengobatan gratis untuk masyarakat kurang mampu.',
        'programs.medical.narrative.1': 'Program Pengobatan Yayasan Persada Bakti Global menyediakan layanan kesehatan gratis untuk masyarakat kurang mampu. Program ini mencakup pemeriksaan kesehatan umum, pengobatan gratis, dan penyuluhan kesehatan.',
        'programs.medical.narrative.2': 'Kami bekerja sama dengan dokter, perawat, dan tenaga kesehatan profesional untuk memberikan pelayanan medis yang berkualitas. Program ini juga mencakup distribusi obat-obatan gratis dan pemeriksaan kesehatan berkala.',
        'programs.medical.narrative.3': 'Hingga saat ini, Program Pengobatan YPBG telah melayani lebih dari 3,000 pasien dan menyelenggarakan 40+ kegiatan bakti sosial kesehatan di berbagai daerah, memberikan akses kesehatan bagi mereka yang membutuhkan.',
        'programs.medical.gallery.1': 'Layanan pengobatan gratis untuk masyarakat',
        'programs.medical.gallery.2': 'Pemeriksaan kesehatan oleh tim medis',
        'programs.medical.gallery.3': 'Penyuluhan kesehatan dan distribusi obat gratis',
        'programs.learn': 'Pelajari lebih lanjut →',
        
        // News Section
        'news.title': 'Berita & Publikasi',
        'news.loadmore': 'Lihat Lebih Banyak',
        'news.readmore': 'Baca Selengkapnya →',
        'news.category.education': 'Pendidikan',
        'news.category.environment': 'Lingkungan',
        'news.category.health': 'Kesehatan',
        'news.video': '🎥 VIDEO',
        'news.article': '📰 ARTIKEL',
        'news.back': 'Kembali ke Berita',
        'news.date': 'Tanggal',
        'news.author': 'YPBG Team',
        'news.views': 'Views',
        'news.gallery': '📸 Dokumentasi Kegiatan',
        'news.about': '📖 Tentang',
        'news.1.title': 'Program Beasiswa 2024 Dibuka',
        'news.1.excerpt': 'YPBG membuka pendaftaran program beasiswa pendidikan...',
        'news.1.video': '🎥 Video Program',
        'news.1.about': '📖 Tentang Program Beasiswa',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) resmi membuka pendaftaran Program Beasiswa 2024 untuk siswa-siswi berprestasi dari keluarga kurang mampu di seluruh Indonesia. Program ini merupakan komitmen YPBG untuk meningkatkan kualitas pendidikan generasi muda Indonesia dan membantu mereka meraih cita-cita tanpa terkendala biaya.',
        'news.1.p2': 'Program Beasiswa YPBG memberikan dukungan pendidikan penuh meliputi biaya sekolah, buku, seragam, dan tunjangan bulanan. Hingga saat ini, program beasiswa YPBG telah membantu lebih dari 500 siswa untuk menyelesaikan pendidikan mereka dengan tingkat kelulusan 100%.',
        'news.1.p3': 'Pendaftaran Program Beasiswa 2024 dibuka hingga 31 Maret 2024. Syarat pendaftaran meliputi: (1) Siswa SMP/SMA berprestasi, (2) Dari keluarga kurang mampu, (3) Memiliki semangat belajar tinggi, dan (4) Rekomendasi dari sekolah.',
        'news.1.gallery.1': '🎓 Penyerahan bantuan beasiswa kepada siswa berprestasi',
        'news.1.gallery.2': '👨‍🎓 Foto bersama penerima beasiswa dan tim YPBG',
        'news.1.gallery.3': '📚 Kegiatan bimbingan belajar untuk penerima beasiswa',
        'news.2.title': 'Kegiatan Pembersihan Pantai',
        'news.2.excerpt': 'Ratusan relawan YPBG berhasil membersihkan 5 km pantai...',
        'news.2.video': '🎥 Video Kegiatan',
        'news.2.about': '📖 Tentang Pembersihan Pantai',
        'news.2.p1': 'Ratusan relawan Yayasan Persada Bakti Global (YPBG) berhasil membersihkan 5 km garis pantai dari sampah plastik dan limbah lainnya dalam kegiatan pembersihan pantai yang diadakan pada Minggu, 10 Februari 2024.',
        'news.2.p2': 'Kegiatan pembersihan pantai ini diikuti oleh lebih dari 300 relawan yang terdiri dari anggota YPBG, mahasiswa, pelajar, dan masyarakat lokal. Dengan semangat gotong royong yang tinggi, para relawan bekerja sejak pagi hari membersihkan berbagai jenis sampah yang terdampar di pantai.',
        'news.2.p3': 'Sampah yang berhasil dikumpulkan mencapai 2 ton, terdiri dari sampah plastik, botol, dan limbah rumah tangga lainnya. Sampah-sampah ini kemudian dipilah dan dikelola sesuai jenisnya untuk didaur ulang atau dibuang dengan cara yang ramah lingkungan.',
        'news.2.p4': 'Selain pembersihan pantai, kegiatan ini juga mencakup penanaman 1,000 bibit mangrove untuk mencegah abrasi pantai dan melestarikan ekosistem laut. YPBG berkomitmen untuk terus mengadakan kegiatan serupa guna menjaga kelestarian lingkungan pesisir Indonesia.',
        'news.2.stat.relawan': 'Relawan',
        'news.2.stat.pantai': 'km Pantai',
        'news.2.stat.sampah': 'ton Sampah',
        'news.2.stat.mangrove': 'Bibit Mangrove',
        'news.2.gallery.1': '🧹 Relawan sedang membersihkan sampah di pantai',
        'news.2.gallery.2': '🌱 Penanaman bibit mangrove untuk mencegah abrasi',
        'news.2.gallery.3': '👥 Foto bersama relawan setelah kegiatan',
        'news.3.title': 'Kampanye Vaksinasi Gratis',
        'news.3.excerpt': 'YPBG menggelar kampanye vaksinasi gratis di 20 desa...',
        'news.3.about': '📖 Tentang Kampanye Vaksinasi',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) menggelar kampanye vaksinasi gratis di 20 desa di berbagai wilayah Indonesia pada Senin, 5 Februari 2024. Program ini merupakan bagian dari komitmen YPBG untuk meningkatkan akses kesehatan bagi masyarakat kurang mampu.',
        'news.3.p2': 'Kampanye vaksinasi ini menyediakan berbagai jenis vaksin gratis meliputi vaksin COVID-19, vaksin influenza, dan vaksin hepatitis B. Semua layanan diberikan secara cuma-cuma kepada masyarakat yang membutuhkan.',
        'news.3.p3': 'Kegiatan ini bekerja sama dengan Dinas Kesehatan setempat dan melibatkan 50 tenaga medis profesional yang terdiri dari dokter, perawat, dan bidan. YPBG menargetkan dapat melayani 5,000 penerima vaksin dalam kampanye ini.',
        'news.3.p4': 'Selain vaksinasi, kegiatan ini juga mencakup penyuluhan kesehatan dan pemeriksaan kesehatan gratis. Masyarakat dapat berkonsultasi langsung dengan dokter mengenai masalah kesehatan yang mereka alami.',
        'news.3.quote': 'Kesehatan adalah hak setiap manusia. Kami berkomitmen untuk memastikan masyarakat kurang mampu juga mendapatkan akses kesehatan yang layak.',
        'news.3.quote.author': 'Direktur YPBG',
        'news.3.vaccines': '📋 Jenis Vaksin yang Tersedia',
        'news.3.vaccine.1': 'Vaksin COVID-19 - Melindungi dari virus corona',
        'news.3.vaccine.2': 'Vaksin Influenza - Mencegah flu musiman',
        'news.3.vaccine.3': 'Vaksin Hepatitis B - Melindungi hati dari infeksi',
        'news.3.gallery.1': '💉 Proses vaksinasi oleh tenaga medis profesional',
        'news.3.gallery.2': '👥 Masyarakat antre untuk mendapatkan vaksinasi gratis',
        'news.3.gallery.3': '🩺 Penyuluhan kesehatan untuk masyarakat desa',

        // Values Section - Kasih
        'values.love.subtitle': 'Melayani dengan kasih, membangun dengan harapan',
        'values.love.p1': 'Kasih adalah fondasi utama dari setiap tindakan kami di Yayasan Persada Bakti Global. Kami percaya bahwa pelayanan yang tulus dimulai dari kasih yang murni terhadap sesama manusia.',
        'values.love.p2': 'Setiap program, setiap kegiatan, dan setiap interaksi kami dilandasi oleh kasih yang tidak membedakan suku, agama, ras, atau latar belakang sosial. Kasih mendorong kami untuk terus memberi tanpa mengharap imbalan.',
        'values.love.principle1': '❤️ <strong>Mengasihi tanpa syarat</strong> - Memberi tanpa mengharapkan kembali',
        'values.love.principle2': '🤝 <strong>Melayani dengan tulus</strong> - Setiap pelayanan dilakukan dengan sepenuh hati',
        'values.love.principle3': '🌟 <strong>Menghargai setiap individu</strong> - Setiap orang berharga di mata kami',
        'values.love.principle4': '🙏 <strong>Berempati terhadap sesama</strong> - Merasakan apa yang dirasakan orang lain',
        'values.love.quote': '"Kasih itu sabar; kasih itu murah hati; kasih itu tidak cemburu. Ia tidak memegahkan diri dan tidak sombong."',
        'values.love.quoteRef': '— 1 Korintus 13:4',
        'values.love.application': 'Dalam setiap kegiatan kami, dari program beasiswa hingga bakti sosial kesehatan, kasih menjadi motivasi utama. Kami tidak hanya memberikan bantuan materi, tetapi juga perhatian dan dukungan moral kepada mereka yang membutuhkan.',

        // Values Section - Integritas
        'values.integrity.subtitle': 'Jujur dalam tindakan, konsisten dalam perkataan',
        'values.integrity.p1': 'Integritas adalah komitmen kami untuk selalu bertindak jujur dan transparan dalam setiap aspek operasional yayasan. Kami percaya bahwa kepercayaan dari masyarakat adalah aset terbesar yang harus dijaga.',
        'values.integrity.p2': 'Setiap keputusan, setiap penggunaan dana, dan setiap program kami jalankan dengan prinsip integritas tinggi. Kami bertanggung jawab kepada para donatur, penerima manfaat, dan seluruh pemangku kepentingan.',
        'values.integrity.principle1': '🛡️ <strong>Kejujuran mutlak</strong> - Selalu berkata dan bertindak jujur',
        'values.integrity.principle2': '📊 <strong>Transparansi keuangan</strong> - Laporan keuangan terbuka dan dapat dipertanggungjawabkan',
        'values.integrity.principle3': '⚖️ <strong>Keadilan</strong> - Memperlakukan semua pihak dengan adil dan tidak diskriminatif',
        'values.integrity.principle4': '✅ <strong>Akuntabilitas</strong> - Bertanggung jawab atas setiap tindakan dan keputusan',
        'values.integrity.quote': '"Integritas adalah melakukan hal yang benar, bahkan ketika tidak ada orang yang melihat."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'Kami menerbitkan laporan tahunan yang transparan, melakukan audit keuangan berkala, dan memastikan setiap donasi disalurkan sesuai dengan tujuan yang ditetapkan. Integritas adalah janji kami kepada Anda.',

        // Values Section - Harapan
        'values.hope.subtitle': 'Setiap sunrise membawa harapan baru',
        'values.hope.p1': 'Harapan adalah cahaya yang menerangi jalan kami dalam melayani masyarakat. Kami percaya bahwa setiap orang, terlepas dari kondisi mereka saat ini, berhak mendapatkan kesempatan untuk masa depan yang lebih baik.',
        'values.hope.p2': 'Melalui setiap program yang kami jalankan, kami berusaha menyalakan harapan baru bagi mereka yang membutuhkan. Harapan untuk pendidikan yang lebih baik, kesehatan yang lebih baik, dan kehidupan yang lebih sejahtera.',
        'values.hope.principle1': '🌅 <strong>Optimisme yang realistis</strong> - Percaya pada kemungkinan perubahan positif',
        'values.hope.principle2': '🎯 <strong>Fokus pada solusi</strong> - Mencari jalan keluar, bukan mengeluh masalah',
        'values.hope.principle3': '🌱 <strong>Pertumbuhan berkelanjutan</strong> - Membangun masa depan yang lebih baik',
        'values.hope.principle4': '✨ <strong>Inspirasi bagi orang lain</strong> - Menjadi cahaya harapan bagi sesama',
        'values.hope.quote': '"Harapan adalah hal yang baik, mungkin yang terbaik dari segala hal, dan hal yang baik tidak pernah mati."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Setiap penerima beasiswa yang berhasil lulus, setiap keluarga yang menerima bantuan pangan, dan setiap pasien yang sembuh adalah bukti nyata bahwa harapan yang kami berikan tidak sia-sia.',

        // Values Section - Kolaborasi
        'values.collaboration.subtitle': 'Bersama kita lebih kuat',
        'values.collaboration.p1': 'Kolaborasi adalah kunci untuk menciptakan dampak yang lebih besar. Kami percaya bahwa dengan bekerja sama bersama berbagai pihak, kita dapat mencapai lebih banyak hal daripada bekerja sendiri.',
        'values.collaboration.p2': 'Kami aktif membangun kemitraan dengan pemerintah, swasta, organisasi masyarakat, dan individu yang memiliki visi yang sama. Bersama-sama, kami menciptakan sinergi untuk kesejahteraan masyarakat.',
        'values.collaboration.principle1': '🤝 <strong>Kemitraan strategis</strong> - Membangun hubungan yang saling menguntungkan',
        'values.collaboration.principle2': '🗣️ <strong>Komunikasi terbuka</strong> - Dialog yang jujur dan konstruktif',
        'values.collaboration.principle3': '🎯 <strong>Tujuan bersama</strong> - Fokus pada dampak yang ingin dicapai bersama',
        'values.collaboration.principle4': '🌟 <strong>Saling menghargai</strong> - Menghargai kontribusi setiap mitra',
        'values.collaboration.quote': '"Jika Anda ingin pergi cepat, pergilah sendiri. Jika Anda ingin pergi jauh, pergilah bersama-sama."',
        'values.collaboration.quoteRef': '— Peribahasa Afrika',
        'values.collaboration.application': 'Kami bermitra dengan Dinas Kesehatan untuk kampanye vaksinasi, dengan sekolah-sekolah untuk program beasiswa, dan dengan berbagai organisasi untuk kegiatan bakti sosial. Kolaborasi memungkinkan kami menjangkau lebih banyak penerima manfaat.',

        // Contact Section
        'contact.title': 'Hubungi Kami',
        'contact.form.title': 'Kirim Pesan',
        'contact.form.name': 'Nama',
        'contact.form.name.placeholder': 'Nama Lengkap',
        'contact.form.email': 'Email',
        'contact.form.email.placeholder': 'email@contoh.com',
        'contact.form.message': 'Pesan',
        'contact.form.message.placeholder': 'Tulis pesan Anda...',
        'contact.form.file': 'Upload Dokumen',
        'contact.form.file.choose': 'Choose File',
        'contact.form.file.noFile': 'No file chosen',
        'contact.form.file.placeholder': 'Pilih file PDF atau JPG (Max 25MB)',
        'contact.form.file.hint': 'Format: PDF, JPG. Maksimal 25 MB',
        'contact.form.submit': 'Kirim Pesan',
        'contact.info.title': 'Informasi Kontak',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Telepon',
        'contact.info.address': 'Alamat',
        'contact.info.address.text': 'Jl. Persada Bakti No.123, Jakarta',
        
        // Footer
        'footer.about': 'Tentang YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global berdedikasi untuk Bantuan Sosial Kemanusiaan.',
        'footer.nav': 'Navigasi',
        'footer.legal': 'Legal',
        'footer.privacy': 'Kebijakan Privasi',
        'footer.terms': 'Syarat & Ketentuan',
        'footer.language': 'Bahasa',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Semua hak dilindungi.',
        
        // Organization Structure
        'about.org.chairman': 'Ketua Pembina',
        'about.org.ceo': 'Ketua Yayasan',
        'about.org.secretary': 'Sekretaris',
        'about.org.treasurer': 'Bendahara',
        'about.org.programs': 'Program',
        'about.org.finance': 'Keuangan',
        'about.org.pr': 'Humas',

        // News
        'news.1.title': 'Program Beasiswa 2024 Dibuka',
        'news.1.excerpt': 'YPBG membuka pendaftaran program beasiswa pendidikan...',
        'news.1.category': 'Pendidikan',
        'news.2.title': 'Kegiatan Pembersihan Pantai',
        'news.2.excerpt': 'Ratusan relawan YPBG berhasil membersihkan 5 km pantai...',
        'news.2.category': 'Lingkungan',
        'news.3.title': 'Kampanye Vaksinasi Gratis',
        'news.3.excerpt': 'YPBG menggelar kampanye vaksinasi gratis di 20 desa...',
        'news.3.category': 'Kesehatan',
        'news.readmore': 'Baca Selengkapnya →',

        // Program Detail Pages - Back Button
        'program.back': 'Kembali ke Program',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Program Beasiswa',
        'program.beasiswa.subtitle': 'Mendukung Pendidikan Generasi Muda Indonesia',
        'program.beasiswa.about': 'Tentang Program Beasiswa',
        'program.beasiswa.p1': 'Program Beasiswa Yayasan Persada Bakti Global adalah komitmen kami untuk meningkatkan kualitas pendidikan generasi muda Indonesia. Program ini dirancang untuk memberikan kesempatan kepada siswa-siswi berprestasi dari keluarga kurang mampu untuk melanjutkan pendidikan mereka.',
        'program.beasiswa.p2': 'Setiap penerima beasiswa mendapatkan dukungan penuh meliputi biaya sekolah, buku, seragam, dan tunjangan bulanan. Kami percaya bahwa pendidikan adalah kunci untuk memutus rantai kemiskinan dan membangun masa depan yang lebih baik.',
        'program.beasiswa.p3': 'Hingga saat ini, Program Beasiswa YPBG telah membantu lebih dari 500 siswa untuk menyelesaikan pendidikan mereka, dengan tingkat kelulusan 100% dan banyak alumni yang melanjutkan ke perguruan tinggi ternama.',
        'program.beasiswa.objectives.1': 'Memberikan akses pendidikan berkualitas bagi siswa berprestasi dari keluarga kurang mampu',
        'program.beasiswa.objectives.2': 'Meningkatkan tingkat kelulusan dan prestasi akademik penerima beasiswa',
        'program.beasiswa.objectives.3': 'Membangun karakter dan kepemimpinan melalui program pendampingan',
        'program.beasiswa.objectives.4': 'Menciptakan generasi muda yang berkontribusi positif bagi masyarakat',
        'program.beasiswa.activities.1.title': 'Penyerahan Beasiswa',
        'program.beasiswa.activities.1.desc': 'Kegiatan penyerahan bantuan beasiswa kepada siswa berprestasi secara simbolis',
        'program.beasiswa.activities.2.title': 'Bimbingan Belajar',
        'program.beasiswa.activities.2.desc': 'Program tutoring dan bimbingan belajar untuk meningkatkan prestasi akademik',
        'program.beasiswa.activities.3.title': 'Pengembangan Karakter',
        'program.beasiswa.activities.3.desc': 'Workshop kepemimpinan dan pengembangan soft skills untuk penerima beasiswa',
        'program.beasiswa.activities.4.title': 'Alumni Gathering',
        'program.beasiswa.activities.4.desc': 'Pertemuan rutin dengan alumni untuk berbagi pengalaman dan membangun jaringan',
        'program.beasiswa.timeline': 'Program berjalan sepanjang tahun ajaran dengan evaluasi setiap semester',
        'program.beasiswa.impact.1.label': 'Siswa Terbantu',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Tingkat Kelulusan',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Lanjut ke PT',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Tahun Berjalan',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Penyerahan bantuan beasiswa kepada siswa berprestasi',
        'program.beasiswa.gallery.2': 'Foto bersama penerima beasiswa dan tim YPBG',
        'program.beasiswa.gallery.3': 'Kegiatan bimbingan belajar untuk penerima beasiswa',
        'program.beasiswa.gallery.4': 'Workshop pengembangan karakter dan kepemimpinan',
        'program.beasiswa.reports.1': 'Laporan Tahunan Program Beasiswa 2024',
        'program.beasiswa.reports.2': 'Evaluasi Semester Genap 2024',
        'program.beasiswa.reports.3': 'Profil Alumni Penerima Beasiswa',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Pembangunan Infrastruktur',
        'program.infrastruktur.subtitle': 'Membangun Fasilitas Publik untuk Kesejahteraan Masyarakat',
        'program.infrastruktur.about': 'Tentang Program Infrastruktur',
        'program.infrastruktur.p1': 'Program Pembangunan Infrastruktur Yayasan Persada Bakti Global berfokus pada pengembangan fasilitas publik yang mendukung perekonomian dan kesejahteraan masyarakat. Kami membangun jalan desa, jembatan, sistem drainase, dan fasilitas umum lainnya yang sangat dibutuhkan oleh komunitas.',
        'program.infrastruktur.p2': 'Setiap proyek infrastruktur kami dirancang dengan mempertimbangkan kebutuhan jangka panjang masyarakat dan dampak lingkungan. Kami bekerja sama dengan pemerintah daerah dan komunitas lokal untuk memastikan pembangunan yang berkelanjutan dan bermanfaat bagi semua.',
        'program.infrastruktur.p3': 'Hingga saat ini, YPBG telah menyelesaikan pembangunan lebih dari 50 km jalan desa, 10 jembatan, dan berbagai fasilitas publik lainnya yang telah meningkatkan aksesibilitas dan perekonomian masyarakat di berbagai daerah.',
        'program.infrastruktur.objectives.1': 'Meningkatkan aksesibilitas masyarakat terhadap fasilitas publik',
        'program.infrastruktur.objectives.2': 'Mendorong pertumbuhan ekonomi lokal melalui infrastruktur yang memadai',
        'program.infrastruktur.objectives.3': 'Membangun infrastruktur yang ramah lingkungan dan berkelanjutan',
        'program.infrastruktur.objectives.4': 'Memperkuat kemitraan dengan pemerintah daerah dan komunitas lokal',
        'program.infrastruktur.activities.1.title': 'Pembangunan Jalan Desa',
        'program.infrastruktur.activities.1.desc': 'Konstruksi dan perbaikan jalan desa untuk meningkatkan aksesibilitas',
        'program.infrastruktur.activities.2.title': 'Pembangunan Jembatan',
        'program.infrastruktur.activities.2.desc': 'Pembangunan jembatan untuk menghubungkan wilayah yang terpisah',
        'program.infrastruktur.activities.3.title': 'Sistem Drainase',
        'program.infrastruktur.activities.3.desc': 'Pembangunan saluran drainase untuk mencegah banjir',
        'program.infrastruktur.activities.4.title': 'Fasilitas Umum',
        'program.infrastruktur.activities.4.desc': 'Pembangunan balai desa dan fasilitas publik lainnya',
        'program.infrastruktur.timeline': 'Proyek infrastruktur dilaksanakan dalam tahap selama 6-12 bulan',
        'program.infrastruktur.impact.1.label': 'Km Jalan Dibangun',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Jembatan',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Desa Terjangkau',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Warga Manfaat',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Pembangunan jalan desa untuk meningkatkan aksesibilitas',
        'program.infrastruktur.gallery.2': 'Foto bersama tim dan masyarakat setelah penyelesaian proyek',
        'program.infrastruktur.gallery.3': 'Pembangunan jembatan untuk menghubungkan dua desa',
        'program.infrastruktur.gallery.4': 'Sistem drainase yang dibangun untuk mencegah banjir',
        'program.infrastruktur.reports.1': 'Laporan Pembangunan Infrastruktur 2024',
        'program.infrastruktur.reports.2': 'Evaluasi Dampak Ekonomi Infrastruktur',
        'program.infrastruktur.reports.3': 'Dokumentasi Proyek Jalan dan Jembatan',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Program Irigasi',
        'program.irigasi.subtitle': 'Mengairi Sawah untuk Ketahanan Pangan',
        'program.irigasi.about': 'Tentang Program Irigasi',
        'program.irigasi.p1': 'Program Irigasi Yayasan Persada Bakti Global berfokus pada pembangunan dan rehabilitasi sistem irigasi untuk mendukung pertanian masyarakat. Sistem irigasi yang baik sangat penting untuk meningkatkan produktivitas pertanian dan kesejahteraan petani.',
        'program.irigasi.p2': 'Kami membangun saluran irigasi, bendungan kecil, dan sistem pompa air yang membantu petani mengairi sawah dan ladang mereka secara efisien. Program ini juga mencakup pelatihan pengelolaan air berkelanjutan.',
        'program.irigasi.p3': 'Hingga saat ini, YPBG telah membangun dan merehabilitasi lebih dari 30 km saluran irigasi yang mengairi lebih dari 500 hektar lahan pertanian di berbagai daerah.',
        'program.irigasi.objectives.1': 'Meningkatkan produktivitas pertanian melalui sistem irigasi yang memadai',
        'program.irigasi.objectives.2': 'Mengoptimalkan penggunaan sumber daya air untuk pertanian',
        'program.irigasi.objectives.3': 'Meningkatkan pendapatan petani melalui peningkatan hasil panen',
        'program.irigasi.objectives.4': 'Membangun sistem irigasi yang berkelanjutan dan ramah lingkungan',
        'program.irigasi.activities.1.title': 'Pembangunan Saluran Irigasi',
        'program.irigasi.activities.1.desc': 'Konstruksi saluran irigasi baru untuk mengairi lahan pertanian',
        'program.irigasi.activities.2.title': 'Rehabilitasi Irigasi',
        'program.irigasi.activities.2.desc': 'Perbaikan dan pemeliharaan sistem irigasi yang sudah ada',
        'program.irigasi.activities.3.title': 'Sistem Pompa Air',
        'program.irigasi.activities.3.desc': 'Instalasi pompa air untuk irigasi lahan kering',
        'program.irigasi.activities.4.title': 'Pelatihan Petani',
        'program.irigasi.activities.4.desc': 'Edukasi pengelolaan air dan sistem irigasi berkelanjutan',
        'program.irigasi.timeline': 'Proyek irigasi dilaksanakan sesuai musim tanam dengan durasi 3-6 bulan',
        'program.irigasi.impact.1.label': 'Km Saluran',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hektar Terairi',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Petani Manfaat',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Peningkatan Hasil',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Pembangunan saluran irigasi untuk pertanian masyarakat',
        'program.irigasi.gallery.2': 'Foto bersama petani setelah penyelesaian proyek irigasi',
        'program.irigasi.gallery.3': 'Sistem pompa air untuk irigasi lahan kering',
        'program.irigasi.gallery.4': 'Pelatihan pengelolaan irigasi untuk kelompok tani',
        'program.irigasi.reports.1': 'Laporan Program Irigasi 2024',
        'program.irigasi.reports.2': 'Studi Dampak Irigasi terhadap Produktivitas',
        'program.irigasi.reports.3': 'Panduan Pengelolaan Irigasi Berkelanjutan',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Program Makanan Sehat',
        'program.makanan_sehat.subtitle': 'Gizi Seimbang untuk Keluarga Indonesia',
        'program.makanan_sehat.about': 'Tentang Program Makanan Sehat',
        'program.makanan_sehat.p1': 'Program Makanan Sehat Yayasan Persada Bakti Global adalah inisiatif untuk meningkatkan kesadaran dan akses masyarakat terhadap makanan bergizi. Program ini menyediakan edukasi gizi dan penyediaan makanan sehat untuk keluarga kurang mampu.',
        'program.makanan_sehat.p2': 'Kami bekerja sama dengan ahli gizi dan tenaga kesehatan untuk menyusun menu makanan yang bergizi seimbang. Program ini juga mencakup penyuluhan tentang pentingnya gizi seimbang dan pola makan sehat.',
        'program.makanan_sehat.p3': 'Hingga saat ini, Program Makanan Sehat telah menjangkau lebih dari 2.000 keluarga dan menyelenggarakan 50+ sesi penyuluhan gizi di berbagai komunitas.',
        'program.makanan_sehat.objectives.1': 'Meningkatkan kesadaran masyarakat tentang pentingnya gizi seimbang',
        'program.makanan_sehat.objectives.2': 'Menyediakan akses makanan bergizi bagi keluarga kurang mampu',
        'program.makanan_sehat.objectives.3': 'Mengurangi angka stunting dan malnutrisi di komunitas sasaran',
        'program.makanan_sehat.objectives.4': 'Memberdayakan ibu-ibu dalam menyiapkan makanan bergizi',
        'program.makanan_sehat.activities.1.title': 'Penyediaan Makanan Bergizi',
        'program.makanan_sehat.activities.1.desc': 'Distribusi paket makanan bergizi untuk keluarga membutuhkan',
        'program.makanan_sehat.activities.2.title': 'Penyuluhan Gizi',
        'program.makanan_sehat.activities.2.desc': 'Edukasi tentang gizi seimbang dan pola makan sehat',
        'program.makanan_sehat.activities.3.title': 'Demo Masak Sehat',
        'program.makanan_sehat.activities.3.desc': 'Demonstrasi memasak makanan sehat dengan bahan lokal',
        'program.makanan_sehat.activities.4.title': 'Pemeriksaan Gizi',
        'program.makanan_sehat.activities.4.desc': 'Screening status gizi untuk anak dan ibu hamil',
        'program.makanan_sehat.timeline': 'Program berjalan sepanjang tahun dengan kegiatan bulanan',
        'program.makanan_sehat.impact.1.label': 'Keluarga Terjangkau',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Sesi Penyuluhan',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Paket Makanan',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu Mitra',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Penyediaan makanan bergizi untuk masyarakat',
        'program.makanan_sehat.gallery.2': 'Penyuluhan gizi dan pola makan sehat',
        'program.makanan_sehat.gallery.3': 'Demo masak makanan sehat bergizi',
        'program.makanan_sehat.gallery.4': 'Pemeriksaan gizi untuk anak dan ibu hamil',
        'program.makanan_sehat.reports.1': 'Laporan Program Gizi 2024',
        'program.makanan_sehat.reports.2': 'Evaluasi Dampak Gizi pada Keluarga',
        'program.makanan_sehat.reports.3': 'Resep Makanan Sehat Bergizi',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Makanan Bergizi Gratis (MBG)',
        'program.mbg.subtitle': 'Gizi untuk Masa Depan Anak Indonesia',
        'program.mbg.about': 'Tentang Program MBG',
        'program.mbg.p1': 'Program Makanan Bergizi Gratis (MBG) Yayasan Persada Bakti Global adalah komitmen kami untuk meningkatkan kualitas gizi masyarakat, khususnya anak-anak dan keluarga kurang mampu. Program ini menyediakan makanan bergizi secara gratis kepada mereka yang membutuhkan.',
        'program.mbg.p2': 'Selain penyediaan makanan, program MBG juga mencakup edukasi gizi, pelestarian ekosistem mangrove, dan reboisasi pantai untuk menciptakan lingkungan yang sehat dan berkelanjutan.',
        'program.mbg.p3': 'Hingga saat ini, program MBG telah menyalurkan lebih dari 10.000 paket makanan bergizi dan menanam 5.000 pohon mangrove di berbagai wilayah pesisir Indonesia.',
        'program.mbg.objectives.1': 'Menyediakan makanan bergizi gratis bagi anak-anak dan keluarga kurang mampu',
        'program.mbg.objectives.2': 'Meningkatkan status gizi dan kesehatan penerima manfaat',
        'program.mbg.objectives.3': 'Melestarikan lingkungan melalui penanaman mangrove',
        'program.mbg.objectives.4': 'Memberdayakan komunitas pesisir melalui program terintegrasi',
        'program.mbg.activities.1.title': 'Distribusi Makanan Bergizi',
        'program.mbg.activities.1.desc': 'Penyaluran paket makanan bergizi kepada anak-anak dan keluarga',
        'program.mbg.activities.2.title': 'Penanaman Mangrove',
        'program.mbg.activities.2.desc': 'Kegiatan konservasi ekosistem mangrove di wilayah pesisir',
        'program.mbg.activities.3.title': 'Edukasi Gizi',
        'program.mbg.activities.3.desc': 'Penyuluhan tentang pentingnya gizi untuk pertumbuhan anak',
        'program.mbg.activities.4.title': 'Reboisasi Pantai',
        'program.mbg.activities.4.desc': 'Penanaman pohon untuk mencegah abrasi pantai',
        'program.mbg.timeline': 'Program MBG berjalan sepanjang tahun dengan distribusi mingguan',
        'program.mbg.impact.1.label': 'Paket Makanan',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Pohon Mangrove',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Anak Manfaat',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Desa Pesisir',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Penyaluran makanan bergizi kepada masyarakat',
        'program.mbg.gallery.2': 'Kegiatan penanaman mangrove untuk pelestarian lingkungan',
        'program.mbg.gallery.3': 'Edukasi gizi untuk ibu dan anak',
        'program.mbg.gallery.4': 'Reboisasi pantai untuk mencegah abrasi',
        'program.mbg.reports.1': 'Laporan Program MBG 2024',
        'program.mbg.reports.2': 'Dampak Gizi pada Anak Penerima MBG',
        'program.mbg.reports.3': 'Dokumentasi Penanaman Mangrove',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Mandi Cuci Kakus (MCK)',
        'program.mck.subtitle': 'Sanitasi Layak untuk Kesehatan Lingkungan',
        'program.mck.about': 'Tentang Program MCK',
        'program.mck.p1': 'Program MCK (Mandi, Cuci, Kakus) Yayasan Persada Bakti Global berfokus pada pembangunan fasilitas sanitasi yang layak untuk meningkatkan kesehatan lingkungan dan kualitas hidup masyarakat.',
        'program.mck.p2': 'Kami membangun MCK umum yang dilengkapi dengan air bersih, tempat cuci tangan, dan toilet yang higienis. Program ini juga mencakup edukasi tentang pentingnya kebersihan dan sanitasi untuk mencegah penyakit.',
        'program.mck.p3': 'Hingga saat ini, YPBG telah membangun 25 unit MCK yang melayani lebih dari 5.000 warga di berbagai daerah, significantly mengurangi angka penyakit akibat sanitasi buruk.',
        'program.mck.objectives.1': 'Menyediakan fasilitas sanitasi yang layak bagi masyarakat',
        'program.mck.objectives.2': 'Meningkatkan kesadaran tentang pentingnya kebersihan dan sanitasi',
        'program.mck.objectives.3': 'Mengurangi angka penyakit akibat sanitasi buruk',
        'program.mck.objectives.4': 'Mendorong perilaku hidup bersih dan sehat',
        'program.mck.activities.1.title': 'Pembangunan MCK',
        'program.mck.activities.1.desc': 'Konstruksi fasilitas MCK umum dengan standar higienis',
        'program.mck.activities.2.title': 'Edukasi Sanitasi',
        'program.mck.activities.2.desc': 'Penyuluhan tentang pentingnya sanitasi dan kebersihan',
        'program.mck.activities.3.title': 'Cuci Tangan',
        'program.mck.activities.3.desc': 'Promosi cuci tangan pakai sabun untuk mencegah penyakit',
        'program.mck.activities.4.title': 'Pemeliharaan MCK',
        'program.mck.activities.4.desc': 'Pelatihan pengelolaan dan pemeliharaan fasilitas MCK',
        'program.mck.timeline': 'Pembangunan MCK selesai dalam 2-3 bulan per unit',
        'program.mck.impact.1.label': 'Unit MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Warga Manfaat',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Penurunan Penyakit',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Desa Terlayani',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Pembangunan fasilitas MCK untuk masyarakat',
        'program.mck.gallery.2': 'Edukasi kebersihan dan sanitasi',
        'program.mck.gallery.3': 'Fasilitas MCK yang sudah selesai dibangun',
        'program.mck.gallery.4': 'Sosialisasi cuci tangan pakai sabun',
        'program.mck.reports.1': 'Laporan Program Sanitasi 2024',
        'program.mck.reports.2': 'Dampak MCK terhadap Kesehatan Masyarakat',
        'program.mck.reports.3': 'Panduan Pengelolaan MCK Komunal',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Program Panti Asuhan',
        'program.panti_asuhan.subtitle': 'Kasih Sayang untuk Anak Yatim',
        'program.panti_asuhan.about': 'Tentang Program Panti Asuhan',
        'program.panti_asuhan.p1': 'Program Panti Asuhan Yayasan Persada Bakti Global adalah wujud kepedulian kami terhadap anak-anak yatim dan kurang mampu. Program ini menyediakan bantuan berupa makanan, pakaian, pendidikan, dan fasilitas untuk panti asuhan.',
        'program.panti_asuhan.p2': 'Kami bekerja sama dengan berbagai panti asuhan untuk memastikan anak-anak mendapatkan perawatan dan pendidikan yang layak. Program ini juga mencakup kegiatan rekreasi, bimbingan belajar, dan pengembangan bakat untuk anak-anak.',
        'program.panti_asuhan.p3': 'Hingga saat ini, YPBG telah membantu 20 panti asuhan dengan total lebih dari 500 anak yang menerima manfaat dari program ini, memberikan mereka harapan dan masa depan yang lebih baik.',
        'program.panti_asuhan.objectives.1': 'Menyediakan kebutuhan dasar bagi anak yatim dan kurang mampu',
        'program.panti_asuhan.objectives.2': 'Mendukung pendidikan dan pengembangan bakat anak',
        'program.panti_asuhan.objectives.3': 'Memberikan kasih sayang dan perhatian kepada anak',
        'program.panti_asuhan.objectives.4': 'Meningkatkan kualitas fasilitas panti asuhan',
        'program.panti_asuhan.activities.1.title': 'Bantuan Berkala',
        'program.panti_asuhan.activities.1.desc': 'Penyaluran bantuan makanan, pakaian, dan kebutuhan pokok',
        'program.panti_asuhan.activities.2.title': 'Bimbingan Belajar',
        'program.panti_asuhan.activities.2.desc': 'Tutoring dan bantuan pelajaran untuk anak panti',
        'program.panti_asuhan.activities.3.title': 'Kegiatan Rekreasi',
        'program.panti_asuhan.activities.3.desc': 'Outbound dan kegiatan menyenangkan untuk anak-anak',
        'program.panti_asuhan.activities.4.title': 'Pengembangan Bakat',
        'program.panti_asuhan.activities.4.desc': 'Pelatihan seni, olahraga, dan keterampilan untuk anak',
        'program.panti_asuhan.timeline': 'Program berjalan sepanjang tahun dengan kunjungan bulanan',
        'program.panti_asuhan.impact.1.label': 'Panti Mitra',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Anak Manfaat',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Bantuan Disalurkan',
        'program.panti_asuhan.impact.3.value': '24x/tahun',
        'program.panti_asuhan.impact.4.label': 'Volunteer',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Penyaluran bantuan untuk panti asuhan',
        'program.panti_asuhan.gallery.2': 'Kegiatan rekreasi dan bimbingan belajar',
        'program.panti_asuhan.gallery.3': 'Foto bersama anak-anak panti asuhan',
        'program.panti_asuhan.gallery.4': 'Kegiatan pengembangan bakat dan seni',
        'program.panti_asuhan.reports.1': 'Laporan Program Panti Asuhan 2024',
        'program.panti_asuhan.reports.2': 'Profil Anak Berprestasi Panti',
        'program.panti_asuhan.reports.3': 'Dokumentasi Kegiatan Panti',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Program Pengobatan',
        'program.pengobatan.subtitle': 'Layanan Kesehatan untuk Masyarakat',
        'program.pengobatan.about': 'Tentang Program Pengobatan',
        'program.pengobatan.p1': 'Program Pengobatan Yayasan Persada Bakti Global menyediakan layanan kesehatan gratis untuk masyarakat kurang mampu. Program ini mencakup pemeriksaan kesehatan umum, pengobatan gratis, dan penyuluhan kesehatan.',
        'program.pengobatan.p2': 'Kami bekerja sama dengan dokter, perawat, dan tenaga kesehatan profesional untuk memberikan pelayanan medis yang berkualitas. Program ini juga mencakup distribusi obat-obatan gratis dan pemeriksaan kesehatan berkala.',
        'program.pengobatan.p3': 'Hingga saat ini, Program Pengobatan YPBG telah melayani lebih dari 3.000 pasien dan menyelenggarakan 40+ kegiatan bakti sosial kesehatan di berbagai daerah, memberikan akses kesehatan bagi mereka yang membutuhkan.',
        'program.pengobatan.objectives.1': 'Menyediakan akses layanan kesehatan bagi masyarakat kurang mampu',
        'program.pengobatan.objectives.2': 'Meningkatkan kesadaran tentang pentingnya kesehatan preventif',
        'program.pengobatan.objectives.3': 'Menyediakan obat-obatan gratis bagi yang membutuhkan',
        'program.pengobatan.objectives.4': 'Membangun kemitraan dengan tenaga kesehatan profesional',
        'program.pengobatan.activities.1.title': 'Bakti Sosial Kesehatan',
        'program.pengobatan.activities.1.desc': 'Layanan pemeriksaan dan pengobatan gratis',
        'program.pengobatan.activities.2.title': 'Pemeriksaan Kesehatan',
        'program.pengobatan.activities.2.desc': 'Screening kesehatan umum dan penyakit tidak menular',
        'program.pengobatan.activities.3.title': 'Distribusi Obat',
        'program.pengobatan.activities.3.desc': 'Penyaluran obat-obatan gratis untuk pasien',
        'program.pengobatan.activities.4.title': 'Penyuluhan Kesehatan',
        'program.pengobatan.activities.4.desc': 'Edukasi tentang pola hidup sehat dan pencegahan penyakit',
        'program.pengobatan.timeline': 'Kegiatan bakti sosial kesehatan dilaksanakan setiap bulan',
        'program.pengobatan.impact.1.label': 'Pasien Terlayani',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Baksos Kesehatan',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Obat Disalurkan',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Nakes Mitra',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Layanan pengobatan gratis untuk masyarakat',
        'program.pengobatan.gallery.2': 'Pemeriksaan kesehatan oleh tim medis',
        'program.pengobatan.gallery.3': 'Penyuluhan kesehatan dan distribusi obat gratis',
        'program.pengobatan.gallery.4': 'Bakti sosial kesehatan di daerah terpencil',
        'program.pengobatan.reports.1': 'Laporan Program Kesehatan 2024',
        'program.pengobatan.reports.2': 'Statistik Pasien dan Penyakit',
        'program.pengobatan.reports.3': 'Dokumentasi Bakti Sosial Kesehatan',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Program Rumah Ibadat',
        'program.rumah_ibadat.subtitle': 'Fasilitas Ibadah untuk Umat Beragama',
        'program.rumah_ibadat.about': 'Tentang Program Rumah Ibadat',
        'program.rumah_ibadat.p1': 'Program Rumah Ibadat Yayasan Persada Bakti Global adalah komitmen kami untuk mendukung fasilitas ibadah bagi masyarakat. Kami membangun dan merenovasi masjid, musholla, gereja, pura, dan vihara untuk mendukung kebutuhan spiritual masyarakat.',
        'program.rumah_ibadat.p2': 'Setiap pembangunan rumah ibadat dilakukan dengan memperhatikan kebutuhan komunitas lokal dan standar konstruksi yang baik. Program ini juga mencakup penyediaan fasilitas pendukung seperti tempat wudhu, toilet, dan perpustakaan.',
        'program.rumah_ibadat.p3': 'Hingga saat ini, YPBG telah membangun dan merenovasi 15 rumah ibadat di berbagai daerah, memberikan tempat ibadah yang layak bagi ribuan jamaah.',
        'program.rumah_ibadat.objectives.1': 'Menyediakan fasilitas ibadah yang layak bagi masyarakat',
        'program.rumah_ibadat.objectives.2': 'Mendukung kebutuhan spiritual umat beragama',
        'program.rumah_ibadat.objectives.3': 'Melestarikan tempat ibadah sebagai pusat komunitas',
        'program.rumah_ibadat.objectives.4': 'Membangun toleransi dan kerukunan antar umat beragama',
        'program.rumah_ibadat.activities.1.title': 'Pembangunan Rumah Ibadat',
        'program.rumah_ibadat.activities.1.desc': 'Konstruksi baru tempat ibadah untuk komunitas',
        'program.rumah_ibadat.activities.2.title': 'Renovasi',
        'program.rumah_ibadat.activities.2.desc': 'Perbaikan dan renovasi rumah ibadat yang rusak',
        'program.rumah_ibadat.activities.3.title': 'Fasilitas Pendukung',
        'program.rumah_ibadat.activities.3.desc': 'Pembangunan tempat wudhu, toilet, dan perpustakaan',
        'program.rumah_ibadat.activities.4.title': 'Kegiatan Keagamaan',
        'program.rumah_ibadat.activities.4.desc': 'Dukungan kegiatan keagamaan dan sosial di rumah ibadat',
        'program.rumah_ibadat.timeline': 'Proyek pembangunan selesai dalam 4-8 bulan',
        'program.rumah_ibadat.impact.1.label': 'Rumah Ibadat',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Jamaah Manfaat',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Desa Terlayani',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Relawan',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Pembangunan rumah ibadat untuk masyarakat',
        'program.rumah_ibadat.gallery.2': 'Foto bersama jamaah setelah peresmian',
        'program.rumah_ibadat.gallery.3': 'Kegiatan keagamaan di rumah ibadat',
        'program.rumah_ibadat.gallery.4': 'Fasilitas pendukung rumah ibadat',
        'program.rumah_ibadat.reports.1': 'Laporan Program Rumah Ibadat 2024',
        'program.rumah_ibadat.reports.2': 'Dokumentasi Pembangunan dan Renovasi',
        'program.rumah_ibadat.reports.3': 'Profil Rumah Ibadat Mitra'
    },

    'en-us': {
        // Header & Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.programs': 'Programs',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'lang.select': 'Select language',
        'skiplink': 'Skip to main content',

        // Hero Section
        'hero.title': 'Serving with love,<br>building with hope.',
        'hero.subtitle': 'Yayasan Persada Bakti Global is committed to sustainable humanitarian social assistance.',
        'hero.btn.about': 'Know Our Foundation',
        'hero.btn.contact': 'Contact Us',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'About Us',
        'highlight.about.desc': 'History & Vision',
        'highlight.programs.title': 'Programs',
        'highlight.programs.desc': 'Real Impact',
        'highlight.news.title': 'Publications',
        'highlight.news.desc': 'Reports & News',

        // About Section
        'about.title': 'About Foundation',
        'about.vision': 'Vision',
        'about.vision.desc': 'To be a leading organization in community empowerment and sustainable development.',
        'about.mission': 'Mission',
        'about.mission.li1': 'Empower through education and training',
        'about.mission.li2': 'Promote social innovation',
        'about.mission.li3': 'Build strategic partnerships',
        'about.values': 'Core Values',
        'about.values.love': 'Love',
        'about.values.integrity': 'Integrity',
        'about.values.hope': 'Hope',
        'about.values.collaboration': 'Collaboration',
        'about.org': 'Organizational Structure',
        'about.gallery': 'Activity Gallery',
        'carousel.prev': 'Previous',
        'carousel.next': 'Next',
        'about.program': 'About Program',
        'program.documents': 'Program Documents',
        'program.gallery': 'Activity Gallery',
        'back.to.programs': 'Back to Programs',
        'document.proposal': 'Program Proposal',
        'document.report': 'Work Report',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',

        // Programs Section
        'programs.title': 'Programs & Activities',
        'programs.filter.all': 'All',
        'programs.filter.scholarship': 'Scholarship',
        'programs.filter.infrastructure': 'Infrastructure',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Scholarship Program',
        'programs.scholarship.desc': 'Full educational support for high-achieving students.',
        'programs.infrastructure': 'Infrastructure Development',
        'programs.infrastructure.desc': 'Village roads and public facilities for communities.',
        'programs.mbg': 'Free Nutritious Meals (MBG)',
        'programs.mbg.desc': 'Mangrove ecosystem conservation and coastal reforestation.',
        'programs.irrigation': 'House Renovation',
        'programs.irrigation.desc': 'Transformation of decent living spaces.',
        'programs.learn': 'Learn more →',

        // News Section
        'news.title': 'News & Publications',
        'news.loadmore': 'Load More',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Contact Us',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.name.placeholder': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.email.placeholder': 'email@example.com',
        'contact.form.message': 'Message',
        'contact.form.message.placeholder': 'Type your message...',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.info.address': 'Address',
        'contact.info.address.text': 'Persada Bakti St. No.123, Jakarta',
        
        // Footer
        'footer.about': 'About YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global is dedicated to Social Humanitarian Assistance.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.language': 'Language',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). All rights reserved.',
        
        // Organization Structure
        'about.org.chairman': 'Board Chair',
        'about.org.ceo': 'Chief Executive Officer',
        'about.org.secretary': 'Secretary',
        'about.org.treasurer': 'Treasurer',
        'about.org.programs': 'Programs',
        'about.org.finance': 'Finance',
        'about.org.pr': 'Public Relations',

        // News
        'news.1.title': 'Scholarship Program 2024 Open',
        'news.1.excerpt': 'YPBG opens registration for educational scholarship program...',
        'news.1.category': 'Education',
        'news.2.title': 'Beach Cleanup Activity',
        'news.2.excerpt': 'Hundreds of YPBG volunteers successfully cleaned 5 km of beach...',
        'news.2.category': 'Environment',
        'news.3.title': 'Free Vaccination Campaign',
        'news.3.excerpt': 'YPBG holds free vaccination campaign in 20 villages...',
        'news.3.category': 'Health',
        'news.readmore': 'Read More →',

        // Program Detail Pages - Back Button
        'program.back': 'Back to Programs',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Scholarship Program',
        'program.beasiswa.subtitle': 'Supporting the Education of Indonesia\'s Young Generation',
        'program.beasiswa.about': 'About Scholarship Program',
        'program.beasiswa.p1': 'The Scholarship Program of Yayasan Persada Bakti Global is our commitment to improving the quality of education for Indonesia\'s younger generation. This program is designed to provide opportunities for high-achieving students from underprivileged families to continue their education.',
        'program.beasiswa.p2': 'Each scholarship recipient receives full support including school fees, books, uniforms, and monthly allowances. We believe that education is the key to breaking the cycle of poverty and building a better future.',
        'program.beasiswa.p3': 'To date, the YPBG Scholarship Program has helped more than 500 students complete their education, with a 100% graduation rate and many alumni continuing to prestigious universities.',
        'program.beasiswa.objectives.1': 'Provide quality education access for high-achieving students from underprivileged families',
        'program.beasiswa.objectives.2': 'Improve graduation rates and academic achievement of scholarship recipients',
        'program.beasiswa.objectives.3': 'Build character and leadership through mentoring programs',
        'program.beasiswa.objectives.4': 'Create young generations who contribute positively to society',
        'program.beasiswa.activities.1.title': 'Scholarship Distribution',
        'program.beasiswa.activities.1.desc': 'Symbolic distribution of scholarship assistance to high-achieving students',
        'program.beasiswa.activities.2.title': 'Tutoring Program',
        'program.beasiswa.activities.2.desc': 'Tutoring and academic guidance to improve academic achievement',
        'program.beasiswa.activities.3.title': 'Character Development',
        'program.beasiswa.activities.3.desc': 'Leadership workshops and soft skills development for scholarship recipients',
        'program.beasiswa.activities.4.title': 'Alumni Gathering',
        'program.beasiswa.activities.4.desc': 'Regular meetings with alumni to share experiences and build networks',
        'program.beasiswa.timeline': 'Program runs throughout the academic year with semester evaluations',
        'program.beasiswa.impact.1.label': 'Students Helped',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Graduation Rate',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Continue to University',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Years Running',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Distribution of scholarship assistance to high-achieving students',
        'program.beasiswa.gallery.2': 'Group photo with scholarship recipients and YPBG team',
        'program.beasiswa.gallery.3': 'Tutoring sessions for scholarship recipients',
        'program.beasiswa.gallery.4': 'Character development and leadership workshop',
        'program.beasiswa.reports.1': 'Annual Scholarship Program Report 2024',
        'program.beasiswa.reports.2': 'Even Semester Evaluation 2024',
        'program.beasiswa.reports.3': 'Scholarship Alumni Profile',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Infrastructure Development',
        'program.infrastruktur.subtitle': 'Building Public Facilities for Community Welfare',
        'program.infrastruktur.about': 'About Infrastructure Program',
        'program.infrastruktur.p1': 'The Infrastructure Development Program of Yayasan Persada Bakti Global focuses on developing public facilities that support the economy and welfare of communities. We build village roads, bridges, drainage systems, and other public facilities that are greatly needed by communities.',
        'program.infrastruktur.p2': 'Each of our infrastructure projects is designed with consideration for long-term community needs and environmental impact. We work with local governments and local communities to ensure sustainable and beneficial development for all.',
        'program.infrastruktur.p3': 'To date, YPBG has completed the construction of more than 50 km of village roads, 10 bridges, and various other public facilities that have improved accessibility and community economies in various regions.',
        'program.infrastruktur.objectives.1': 'Improve community access to public facilities',
        'program.infrastruktur.objectives.2': 'Promote local economic growth through adequate infrastructure',
        'program.infrastruktur.objectives.3': 'Build environmentally friendly and sustainable infrastructure',
        'program.infrastruktur.objectives.4': 'Strengthen partnerships with local governments and communities',
        'program.infrastruktur.activities.1.title': 'Village Road Construction',
        'program.infrastruktur.activities.1.desc': 'Construction and repair of village roads to improve accessibility',
        'program.infrastruktur.activities.2.title': 'Bridge Construction',
        'program.infrastruktur.activities.2.desc': 'Building bridges to connect separated areas',
        'program.infrastruktur.activities.3.title': 'Drainage System',
        'program.infrastruktur.activities.3.desc': 'Construction of drainage channels to prevent flooding',
        'program.infrastruktur.activities.4.title': 'Public Facilities',
        'program.infrastruktur.activities.4.desc': 'Construction of village halls and other public facilities',
        'program.infrastruktur.timeline': 'Infrastructure projects are implemented in phases over 6-12 months',
        'program.infrastruktur.impact.1.label': 'Km Roads Built',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Bridges',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Villages Accessed',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Beneficiaries',
        'program.infrastruktur.impact.4.value': '10,000+',
        'program.infrastruktur.gallery.1': 'Construction of village roads to improve accessibility',
        'program.infrastruktur.gallery.2': 'Group photo with team and community after project completion',
        'program.infrastruktur.gallery.3': 'Bridge construction to connect two villages',
        'program.infrastruktur.gallery.4': 'Drainage system built to prevent flooding',
        'program.infrastruktur.reports.1': 'Infrastructure Development Report 2024',
        'program.infrastruktur.reports.2': 'Economic Impact Evaluation of Infrastructure',
        'program.infrastruktur.reports.3': 'Documentation of Road and Bridge Projects',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Irrigation Program',
        'program.irigasi.subtitle': 'Watering Rice Fields for Food Security',
        'program.irigasi.about': 'About Irrigation Program',
        'program.irigasi.p1': 'The Irrigation Program of Yayasan Persada Bakti Global focuses on the construction and rehabilitation of irrigation systems to support community agriculture. Good irrigation systems are essential for increasing agricultural productivity and farmer welfare.',
        'program.irigasi.p2': 'We build irrigation channels, small dams, and water pump systems that help farmers irrigate their rice fields and land efficiently. This program also includes training on sustainable water management.',
        'program.irigasi.p3': 'To date, YPBG has built and rehabilitated more than 30 km of irrigation channels that irrigate more than 500 hectares of agricultural land in various regions.',
        'program.irigasi.objectives.1': 'Increase agricultural productivity through adequate irrigation systems',
        'program.irigasi.objectives.2': 'Optimize the use of water resources for agriculture',
        'program.irigasi.objectives.3': 'Increase farmer income through improved harvest yields',
        'program.irigasi.objectives.4': 'Build sustainable and environmentally friendly irrigation systems',
        'program.irigasi.activities.1.title': 'Irrigation Channel Construction',
        'program.irigasi.activities.1.desc': 'Construction of new irrigation channels to water agricultural land',
        'program.irigasi.activities.2.title': 'Irrigation Rehabilitation',
        'program.irigasi.activities.2.desc': 'Repair and maintenance of existing irrigation systems',
        'program.irigasi.activities.3.title': 'Water Pump System',
        'program.irigasi.activities.3.desc': 'Installation of water pumps for dry land irrigation',
        'program.irigasi.activities.4.title': 'Farmer Training',
        'program.irigasi.activities.4.desc': 'Education on water management and sustainable irrigation systems',
        'program.irigasi.timeline': 'Irrigation projects are implemented according to planting season with 3-6 month duration',
        'program.irigasi.impact.1.label': 'Km Channels',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hectares Irrigated',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Farmers Benefited',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Yield Increase',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Construction of irrigation channels for community agriculture',
        'program.irigasi.gallery.2': 'Group photo with farmers after irrigation project completion',
        'program.irigasi.gallery.3': 'Water pump system for dry land irrigation',
        'program.irigasi.gallery.4': 'Irrigation management training for farmer groups',
        'program.irigasi.reports.1': 'Irrigation Program Report 2024',
        'program.irigasi.reports.2': 'Impact Study of Irrigation on Productivity',
        'program.irigasi.reports.3': 'Sustainable Irrigation Management Guide',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Healthy Food Program',
        'program.makanan_sehat.subtitle': 'Balanced Nutrition for Indonesian Families',
        'program.makanan_sehat.about': 'About Healthy Food Program',
        'program.makanan_sehat.p1': 'The Healthy Food Program of Yayasan Persada Bakti Global is an initiative to increase community awareness and access to nutritious food. This program provides nutrition education and healthy food provision for underprivileged families.',
        'program.makanan_sehat.p2': 'We work with nutritionists and health workers to prepare balanced nutritious menus. This program also includes counseling on the importance of balanced nutrition and healthy eating patterns.',
        'program.makanan_sehat.p3': 'To date, the Healthy Food Program has reached more than 2,000 families and conducted 50+ nutrition counseling sessions in various communities.',
        'program.makanan_sehat.objectives.1': 'Increase community awareness about the importance of balanced nutrition',
        'program.makanan_sehat.objectives.2': 'Provide access to nutritious food for underprivileged families',
        'program.makanan_sehat.objectives.3': 'Reduce stunting and malnutrition rates in target communities',
        'program.makanan_sehat.objectives.4': 'Empower mothers in preparing nutritious food',
        'program.makanan_sehat.activities.1.title': 'Nutritious Food Provision',
        'program.makanan_sehat.activities.1.desc': 'Distribution of nutritious food packages for needy families',
        'program.makanan_sehat.activities.2.title': 'Nutrition Counseling',
        'program.makanan_sehat.activities.2.desc': 'Education on balanced nutrition and healthy eating patterns',
        'program.makanan_sehat.activities.3.title': 'Healthy Cooking Demo',
        'program.makanan_sehat.activities.3.desc': 'Demonstration of cooking healthy food with local ingredients',
        'program.makanan_sehat.activities.4.title': 'Nutrition Screening',
        'program.makanan_sehat.activities.4.desc': 'Nutrition status screening for children and pregnant women',
        'program.makanan_sehat.timeline': 'Program runs throughout the year with monthly activities',
        'program.makanan_sehat.impact.1.label': 'Families Reached',
        'program.makanan_sehat.impact.1.value': '2,000+',
        'program.makanan_sehat.impact.2.label': 'Counseling Sessions',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Food Packages',
        'program.makanan_sehat.impact.3.value': '10,000+',
        'program.makanan_sehat.impact.4.label': 'Partner Posyandu',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Provision of nutritious food for the community',
        'program.makanan_sehat.gallery.2': 'Nutrition counseling and healthy eating patterns',
        'program.makanan_sehat.gallery.3': 'Healthy nutritious cooking demonstration',
        'program.makanan_sehat.gallery.4': 'Nutrition screening for children and pregnant women',
        'program.makanan_sehat.reports.1': 'Nutrition Program Report 2024',
        'program.makanan_sehat.reports.2': 'Nutrition Impact Evaluation on Families',
        'program.makanan_sehat.reports.3': 'Healthy Nutritious Food Recipes',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Free Nutritious Meals (MBG)',
        'program.mbg.subtitle': 'Nutrition for the Future of Indonesian Children',
        'program.mbg.about': 'About MBG Program',
        'program.mbg.p1': 'The Free Nutritious Meals (MBG) Program of Yayasan Persada Bakti Global is our commitment to improving the nutritional quality of the community, especially children and underprivileged families. This program provides nutritious food free of charge to those in need.',
        'program.mbg.p2': 'In addition to food provision, the MBG program also includes nutrition education, mangrove ecosystem conservation, and coastal reforestation to create a healthy and sustainable environment.',
        'program.mbg.p3': 'To date, the MBG program has distributed more than 10,000 nutritious food packages and planted 5,000 mangrove trees in various coastal regions of Indonesia.',
        'program.mbg.objectives.1': 'Provide free nutritious food for children and underprivileged families',
        'program.mbg.objectives.2': 'Improve nutritional status and health of beneficiaries',
        'program.mbg.objectives.3': 'Preserve the environment through mangrove planting',
        'program.mbg.objectives.4': 'Empower coastal communities through integrated programs',
        'program.mbg.activities.1.title': 'Nutritious Food Distribution',
        'program.mbg.activities.1.desc': 'Distribution of nutritious food packages to children and families',
        'program.mbg.activities.2.title': 'Mangrove Planting',
        'program.mbg.activities.2.desc': 'Mangrove ecosystem conservation activities in coastal areas',
        'program.mbg.activities.3.title': 'Nutrition Education',
        'program.mbg.activities.3.desc': 'Counseling on the importance of nutrition for child growth',
        'program.mbg.activities.4.title': 'Coastal Reforestation',
        'program.mbg.activities.4.desc': 'Tree planting to prevent coastal abrasion',
        'program.mbg.timeline': 'MBG program runs throughout the year with weekly distribution',
        'program.mbg.impact.1.label': 'Food Packages',
        'program.mbg.impact.1.value': '10,000+',
        'program.mbg.impact.2.label': 'Mangrove Trees',
        'program.mbg.impact.2.value': '5,000+',
        'program.mbg.impact.3.label': 'Children Benefited',
        'program.mbg.impact.3.value': '3,000+',
        'program.mbg.impact.4.label': 'Coastal Villages',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribution of nutritious food to the community',
        'program.mbg.gallery.2': 'Mangrove planting activities for environmental conservation',
        'program.mbg.gallery.3': 'Nutrition education for mothers and children',
        'program.mbg.gallery.4': 'Coastal reforestation to prevent abrasion',
        'program.mbg.reports.1': 'MBG Program Report 2024',
        'program.mbg.reports.2': 'Nutritional Impact on MBG Recipient Children',
        'program.mbg.reports.3': 'Mangrove Planting Documentation',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Bath, Wash, Toilet (MCK)',
        'program.mck.subtitle': 'Proper Sanitation for Environmental Health',
        'program.mck.about': 'About MCK Program',
        'program.mck.p1': 'The MCK (Bath, Wash, Toilet) Program of Yayasan Persada Bakti Global focuses on building proper sanitation facilities to improve environmental health and community quality of life.',
        'program.mck.p2': 'We build public MCK facilities equipped with clean water, handwashing stations, and hygienic toilets. This program also includes education on the importance of cleanliness and sanitation to prevent disease.',
        'program.mck.p3': 'To date, YPBG has built 25 MCK units serving more than 5,000 residents in various regions, significantly reducing disease rates due to poor sanitation.',
        'program.mck.objectives.1': 'Provide proper sanitation facilities for the community',
        'program.mck.objectives.2': 'Increase awareness about the importance of cleanliness and sanitation',
        'program.mck.objectives.3': 'Reduce disease rates due to poor sanitation',
        'program.mck.objectives.4': 'Promote clean and healthy behavior',
        'program.mck.activities.1.title': 'MCK Construction',
        'program.mck.activities.1.desc': 'Construction of public MCK facilities with hygienic standards',
        'program.mck.activities.2.title': 'Sanitation Education',
        'program.mck.activities.2.desc': 'Counseling on the importance of sanitation and cleanliness',
        'program.mck.activities.3.title': 'Handwashing',
        'program.mck.activities.3.desc': 'Promotion of handwashing with soap to prevent disease',
        'program.mck.activities.4.title': 'MCK Maintenance',
        'program.mck.activities.4.desc': 'Training on management and maintenance of MCK facilities',
        'program.mck.timeline': 'MCK construction is completed in 2-3 months per unit',
        'program.mck.impact.1.label': 'MCK Units',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Beneficiaries',
        'program.mck.impact.2.value': '5,000+',
        'program.mck.impact.3.label': 'Disease Reduction',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Villages Served',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Construction of MCK facilities for the community',
        'program.mck.gallery.2': 'Cleanliness and sanitation education',
        'program.mck.gallery.3': 'Completed MCK facilities',
        'program.mck.gallery.4': 'Handwashing with soap socialization',
        'program.mck.reports.1': 'Sanitation Program Report 2024',
        'program.mck.reports.2': 'Impact of MCK on Community Health',
        'program.mck.reports.3': 'Communal MCK Management Guide',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Orphanage Program',
        'program.panti_asuhan.subtitle': 'Love for Orphaned Children',
        'program.panti_asuhan.about': 'About Orphanage Program',
        'program.panti_asuhan.p1': 'The Orphanage Program of Yayasan Persada Bakti Global is our concern for orphaned and underprivileged children. This program provides assistance in the form of food, clothing, education, and facilities for orphanages.',
        'program.panti_asuhan.p2': 'We work with various orphanages to ensure children receive proper care and education. This program also includes recreational activities, tutoring, and talent development for children.',
        'program.panti_asuhan.p3': 'To date, YPBG has helped 20 orphanages with a total of more than 500 children benefiting from this program, giving them hope and a better future.',
        'program.panti_asuhan.objectives.1': 'Provide basic needs for orphaned and underprivileged children',
        'program.panti_asuhan.objectives.2': 'Support education and talent development of children',
        'program.panti_asuhan.objectives.3': 'Provide love and attention to children',
        'program.panti_asuhan.objectives.4': 'Improve the quality of orphanage facilities',
        'program.panti_asuhan.activities.1.title': 'Regular Assistance',
        'program.panti_asuhan.activities.1.desc': 'Distribution of food, clothing, and basic necessities',
        'program.panti_asuhan.activities.2.title': 'Tutoring',
        'program.panti_asuhan.activities.2.desc': 'Tutoring and lesson assistance for orphanage children',
        'program.panti_asuhan.activities.3.title': 'Recreational Activities',
        'program.panti_asuhan.activities.3.desc': 'Outbound and fun activities for children',
        'program.panti_asuhan.activities.4.title': 'Talent Development',
        'program.panti_asuhan.activities.4.desc': 'Training in arts, sports, and skills for children',
        'program.panti_asuhan.timeline': 'Program runs throughout the year with monthly visits',
        'program.panti_asuhan.impact.1.label': 'Partner Orphanages',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Children Benefited',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Assistance Distributed',
        'program.panti_asuhan.impact.3.value': '24x/year',
        'program.panti_asuhan.impact.4.label': 'Volunteers',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribution of assistance for orphanages',
        'program.panti_asuhan.gallery.2': 'Recreational activities and tutoring',
        'program.panti_asuhan.gallery.3': 'Group photo with orphanage children',
        'program.panti_asuhan.gallery.4': 'Talent and arts development activities',
        'program.panti_asuhan.reports.1': 'Orphanage Program Report 2024',
        'program.panti_asuhan.reports.2': 'Profile of Outstanding Orphanage Children',
        'program.panti_asuhan.reports.3': 'Orphanage Activity Documentation',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Medical Treatment Program',
        'program.pengobatan.subtitle': 'Health Services for the Community',
        'program.pengobatan.about': 'About Medical Treatment Program',
        'program.pengobatan.p1': 'The Medical Treatment Program of Yayasan Persada Bakti Global provides free health services for underprivileged communities. This program includes general health examinations, free treatment, and health counseling.',
        'program.pengobatan.p2': 'We work with doctors, nurses, and professional health workers to provide quality medical services. This program also includes free drug distribution and regular health examinations.',
        'program.pengobatan.p3': 'To date, the YPBG Medical Treatment Program has served more than 3,000 patients and conducted 40+ health social service activities in various regions, providing health access for those in need.',
        'program.pengobatan.objectives.1': 'Provide access to health services for underprivileged communities',
        'program.pengobatan.objectives.2': 'Increase awareness about the importance of preventive health',
        'program.pengobatan.objectives.3': 'Provide free medicines for those in need',
        'program.pengobatan.objectives.4': 'Build partnerships with professional health workers',
        'program.pengobatan.activities.1.title': 'Health Social Service',
        'program.pengobatan.activities.1.desc': 'Free examination and treatment services',
        'program.pengobatan.activities.2.title': 'Health Examination',
        'program.pengobatan.activities.2.desc': 'General health screening and non-communicable diseases',
        'program.pengobatan.activities.3.title': 'Drug Distribution',
        'program.pengobatan.activities.3.desc': 'Distribution of free medicines for patients',
        'program.pengobatan.activities.4.title': 'Health Counseling',
        'program.pengobatan.activities.4.desc': 'Education on healthy lifestyle and disease prevention',
        'program.pengobatan.timeline': 'Health social service activities are conducted monthly',
        'program.pengobatan.impact.1.label': 'Patients Served',
        'program.pengobatan.impact.1.value': '3,000+',
        'program.pengobatan.impact.2.label': 'Health Services',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Medicines Distributed',
        'program.pengobatan.impact.3.value': '5,000+',
        'program.pengobatan.impact.4.label': 'Partner Health Workers',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Free medical treatment services for the community',
        'program.pengobatan.gallery.2': 'Health examination by medical team',
        'program.pengobatan.gallery.3': 'Health counseling and free drug distribution',
        'program.pengobatan.gallery.4': 'Health social service in remote areas',
        'program.pengobatan.reports.1': 'Health Program Report 2024',
        'program.pengobatan.reports.2': 'Patient and Disease Statistics',
        'program.pengobatan.reports.3': 'Health Social Service Documentation',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'House of Worship Program',
        'program.rumah_ibadat.subtitle': 'Worship Facilities for Religious Communities',
        'program.rumah_ibadat.about': 'About House of Worship Program',
        'program.rumah_ibadat.p1': 'The House of Worship Program of Yayasan Persada Bakti Global is our commitment to supporting worship facilities for the community. We build and renovate mosques, prayer rooms, churches, temples, and viharas to support the spiritual needs of the community.',
        'program.rumah_ibadat.p2': 'Each house of worship construction is carried out with consideration for local community needs and good construction standards. This program also includes the provision of supporting facilities such as ablution areas, toilets, and libraries.',
        'program.rumah_ibadat.p3': 'To date, YPBG has built and renovated 15 houses of worship in various regions, providing proper places of worship for thousands of congregations.',
        'program.rumah_ibadat.objectives.1': 'Provide proper worship facilities for the community',
        'program.rumah_ibadat.objectives.2': 'Support the spiritual needs of religious communities',
        'program.rumah_ibadat.objectives.3': 'Preserve places of worship as community centers',
        'program.rumah_ibadat.objectives.4': 'Build tolerance and harmony among religious communities',
        'program.rumah_ibadat.activities.1.title': 'House of Worship Construction',
        'program.rumah_ibadat.activities.1.desc': 'New construction of places of worship for communities',
        'program.rumah_ibadat.activities.2.title': 'Renovation',
        'program.rumah_ibadat.activities.2.desc': 'Repair and renovation of damaged houses of worship',
        'program.rumah_ibadat.activities.3.title': 'Supporting Facilities',
        'program.rumah_ibadat.activities.3.desc': 'Construction of ablution areas, toilets, and libraries',
        'program.rumah_ibadat.activities.4.title': 'Religious Activities',
        'program.rumah_ibadat.activities.4.desc': 'Support for religious and social activities at houses of worship',
        'program.rumah_ibadat.timeline': 'Construction projects are completed in 4-8 months',
        'program.rumah_ibadat.impact.1.label': 'Houses of Worship',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congregation Benefited',
        'program.rumah_ibadat.impact.2.value': '5,000+',
        'program.rumah_ibadat.impact.3.label': 'Villages Served',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Volunteers',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Construction of houses of worship for the community',
        'program.rumah_ibadat.gallery.2': 'Group photo with congregation after inauguration',
        'program.rumah_ibadat.gallery.3': 'Religious activities at houses of worship',
        'program.rumah_ibadat.gallery.4': 'Supporting facilities for houses of worship',
        'program.rumah_ibadat.reports.1': 'House of Worship Program Report 2024',
        'program.rumah_ibadat.reports.2': 'Construction and Renovation Documentation',
        'program.rumah_ibadat.reports.3': 'Partner House of Worship Profile'
    },

    'es-latam': {
        // Header & Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.programs': 'Programas',
        'nav.news': 'Noticias',
        'nav.contact': 'Contacto',
        'lang.select': 'Seleccionar idioma',
        'skiplink': 'Saltar al contenido principal',
        
        // Hero Section
        'hero.title': 'Sirviendo con amor,<br>construyendo con esperanza.',
        'hero.subtitle': 'Yayasan Persada Bakti Global se compromete con la asistencia social humanitaria sostenible.',
        'hero.btn.about': 'Conocer Nuestra Fundación',
        'hero.btn.contact': 'Contáctenos',
        
        // Home Highlights
        'highlight.about.title': 'Sobre Nosotros',
        'highlight.about.desc': 'Historia y Visión',
        'highlight.programs.title': 'Programas',
        'highlight.programs.desc': 'Impacto Real',
        'highlight.news.title': 'Publicaciones',
        'highlight.news.desc': 'Reportes y Noticias',
        
        // About Section
        'about.title': 'Sobre la Fundación',
        'about.vision': 'Visión',
        'about.vision.desc': 'Ser una organización líder en empoderamiento comunitario y desarrollo sostenible.',
        'about.mission': 'Misión',
        'about.mission.li1': 'Empoderar a través de educación y capacitación',
        'about.mission.li2': 'Promover la innovación social',
        'about.mission.li3': 'Construir asociaciones estratégicas',
        'about.values': 'Valores Fundamentales',
        'about.values.love': 'Amor',
        'about.values.integrity': 'Integridad',
        'about.values.hope': 'Esperanza',
        'about.values.collaboration': 'Colaboración',
        'about.org': 'Estructura Organizacional',
        'about.gallery': 'Galería de Actividades',
        'carousel.prev': 'Anterior',
        'carousel.next': 'Siguiente',
        
        // Programs Section
        'programs.title': 'Programas y Actividades',
        'programs.filter.all': 'Todos',
        'programs.filter.scholarship': 'Beca',
        'programs.filter.infrastructure': 'Infraestructura',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programa de Becas',
        'programs.scholarship.desc': 'Apoyo educativo completo para estudiantes de alto desempeño.',
        'programs.infrastructure': 'Desarrollo de Infraestructura',
        'programs.infrastructure.desc': 'Caminos rurales e instalaciones públicas para comunidades.',
        'programs.mbg': 'Comidas Nutritivas Gratis (MBG)',
        'programs.mbg.desc': 'Conservación del ecosistema de manglares y reforestación costera.',
        'programs.irrigation': 'Renovación de Casas',
        'programs.irrigation.desc': 'Transformación de espacios de vida dignos.',
        'programs.learn': 'Más información →',
        
        // News Section
        'news.title': 'Noticias y Publicaciones',
        'news.loadmore': 'Cargar Más',
        
        // Contact Section
        'contact.title': 'Contáctenos',
        'contact.form.title': 'Enviar Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.name.placeholder': 'Nombre Completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.email.placeholder': 'correo@ejemplo.com',
        'contact.form.message': 'Mensaje',
        'contact.form.message.placeholder': 'Escriba su mensaje...',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.title': 'Información de Contacto',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.phone': 'Teléfono',
        'contact.info.address': 'Dirección',
        'contact.info.address.text': 'Calle Persada Bakti No.123, Jakarta',
        
        // Footer
        'footer.about': 'Sobre YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global se dedica a la Asistencia Humanitaria Social.',
        'footer.nav': 'Navegación',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos y Condiciones',
        'footer.language': 'Idioma',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Todos los derechos reservados.',
        
        // Organization Structure
        'about.org.chairman': 'Presidente del Consejo',
        'about.org.ceo': 'Director Ejecutivo',
        'about.org.secretary': 'Secretario',
        'about.org.treasurer': 'Tesorero',
        'about.org.programs': 'Programas',
        'about.org.finance': 'Finanzas',
        'about.org.pr': 'Relaciones Públicas',

        // News Common Keys
        'news.date': 'Fecha',
        'news.author': 'Equipo YPBG',
        'news.views': 'Vistas',
        'news.gallery': '📸 Documentación Fotográfica',
        'news.about': '📖 Acerca de',
        'news.back': 'Volver a Noticias',
        'news.readmore': 'Leer Más →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Programa de Becas 2024 Abierto',
        'news.1.excerpt': 'YPBG abre inscripciones para programa de becas educativas...',
        'news.1.category': 'Educación',
        'news.1.video': '🎥 Video del Programa',
        'news.1.about': '📖 Acerca del Programa de Becas',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) abre oficialmente las inscripciones para el Programa de Becas 2024 para estudiantes de alto rendimiento de familias desfavorecidas en toda Indonesia. Este programa es el compromiso de YPBG de mejorar la calidad de la educación para la generación más joven de Indonesia.',
        'news.1.p2': 'El Programa de Becas YPBG proporciona apoyo educativo completo que incluye tasas escolares, libros, uniformes y asignaciones mensuales. Hasta la fecha, el programa de becas YPBG ha ayudado a más de 500 estudiantes a completar su educación con una tasa de graduación del 100%.',
        'news.1.p3': 'Las inscripciones para el Programa de Becas 2024 están abiertas hasta el 31 de marzo de 2024. Los requisitos de inscripción incluyen: (1) Estudiantes de secundaria/preparatoria con logros, (2) De familias desfavorecidas, (3) Alto espíritu de aprendizaje, y (4) Recomendación escolar.',
        'news.1.gallery.1': '🎓 Distribución de asistencia de becas a estudiantes de alto rendimiento',
        'news.1.gallery.2': '👨‍🎓 Foto grupal con becarios y equipo YPBG',
        'news.1.gallery.3': '📚 Sesiones de tutoría para becarios',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Actividad de Limpieza de Playa',
        'news.2.excerpt': 'Cientos de voluntarios de YPBG limpiaron con éxito 5 km de playa...',
        'news.2.category': 'Medio Ambiente',
        'news.2.video': '🎥 Video de la Actividad',
        'news.2.about': '📖 Acerca de la Limpieza de Playa',
        'news.2.p1': 'Cientos de voluntarios de Yayasan Persada Bakti Global (YPBG) limpiaron con éxito 5 km de costa de residuos plásticos y otros residuos en una actividad de limpieza de playa realizada el domingo 10 de febrero de 2024.',
        'news.2.p2': 'La actividad de limpieza de playa contó con la participación de más de 300 voluntarios compuestos por miembros de YPBG, estudiantes, alumnos y comunidades locales. Con alto espíritu de cooperación mutua, los voluntarios trabajaron desde la mañana limpiando varios tipos de residuos arrastrados a la playa.',
        'news.2.p3': 'Los residuos recolectados alcanzaron 2 toneladas, compuestos de residuos plásticos, botellas y otros residuos domésticos. Estos residuos fueron luego clasificados y gestionados según su tipo para reciclaje o eliminados de manera ecológica.',
        'news.2.p4': 'Además de la limpieza de la playa, esta actividad también incluyó la plantación de 1,000 plántulas de mangle para prevenir la abrasión costera y preservar los ecosistemas marinos. YPBG se compromete a continuar realizando actividades similares para mantener la sostenibilidad del entorno costero de Indonesia.',
        'news.2.stat.relawan': 'Voluntarios',
        'news.2.stat.pantai': 'km Playa',
        'news.2.stat.sampah': 'toneladas Residuos',
        'news.2.stat.mangrove': 'Plántulas de Mangle',
        'news.2.gallery.1': '🧹 Voluntarios limpiando residuos en la playa',
        'news.2.gallery.2': '🌱 Plantando plántulas de mangle para prevenir la abrasión',
        'news.2.gallery.3': '👥 Foto grupal con voluntarios después de la actividad',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Campaña de Vacunación Gratuita',
        'news.3.excerpt': 'YPBG realiza campaña de vacunación gratuita en 20 aldeas...',
        'news.3.category': 'Salud',
        'news.3.video': '🎥 Video de la Campaña',
        'news.3.about': '📖 Acerca de la Campaña de Vacunación',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) realizó una campaña de vacunación gratuita en 20 aldeas en varias regiones de Indonesia el lunes 5 de febrero de 2024. Este programa es parte del compromiso de YPBG de mejorar el acceso a la salud para comunidades desfavorecidas.',
        'news.3.p2': 'Esta campaña de vacunación proporciona varios tipos de vacunas gratuitas, incluyendo vacuna COVID-19, vacuna contra la influenza y vacuna contra la hepatitis B. Todos los servicios se proporcionan gratuitamente a quienes los necesitan.',
        'news.3.p3': 'Esta actividad se llevó a cabo en colaboración con la Oficina de Salud local y contó con 50 profesionales médicos compuestos por médicos, enfermeras y parteras. YPBG tiene como objetivo atender a 5,000 receptores de vacunas en esta campaña.',
        'news.3.p4': 'Además de la vacunación, esta actividad también incluye asesoramiento sobre salud y exámenes de salud gratuitos. La comunidad puede consultar directamente con los médicos sobre sus problemas de salud.',
        'news.3.quote': 'La salud es derecho de todo ser humano. Estamos comprometidos a asegurar que las comunidades desfavorecidas también tengan acceso decente a la salud.',
        'news.3.quote.author': 'Director YPBG',
        'news.3.vaccines': '📋 Vacunas Disponibles',
        'news.3.vaccine.1': 'Vacuna COVID-19 - Protege del coronavirus',
        'news.3.vaccine.2': 'Vacuna contra la Influenza - Previene la gripe estacional',
        'news.3.vaccine.3': 'Vacuna contra la Hepatitis B - Protege el hígado de infecciones',
        'news.3.gallery.1': '💉 Proceso de vacunación por personal médico profesional',
        'news.3.gallery.2': '👥 Comunidad haciendo fila para obtener vacunación gratuita',
        'news.3.gallery.3': '🩺 Asesoramiento de salud para comunidades aldeanas',

        // Full translations for es-latam
        'highlight.about.title': 'Sobre Nosotros',
        'highlight.about.desc': 'Historia y Visión',
        'highlight.programs.title': 'Programas',
        'highlight.programs.desc': 'Impacto Real',
        'highlight.news.title': 'Publicaciones',
        'highlight.news.desc': 'Reportes y Noticias',
        'about.vision': 'Visión',
        'about.vision.desc': 'Ser una organización líder en empoderamiento comunitario y desarrollo sostenible.',
        'about.mission': 'Misión',
        'about.mission.li1': 'Empoderar a través de educación y capacitación',
        'about.mission.li2': 'Promover la innovación social',
        'about.mission.li3': 'Construir asociaciones estratégicas',
        'about.values': 'Valores Fundamentales',
        'about.values.love': 'Amor',
        'about.values.integrity': 'Integridad',
        'about.values.hope': 'Esperanza',
        'about.values.collaboration': 'Colaboración',
        'about.org': 'Estructura Organizacional',
        'about.gallery': 'Galería de Actividades',
        'carousel.prev': 'Anterior',
        'carousel.next': 'Siguiente',
        'programs.filter.all': 'Todos',
        'programs.filter.scholarship': 'Beca',
        'programs.filter.infrastructure': 'Infraestructura',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programa de Becas',
        'programs.scholarship.desc': 'Apoyo educativo completo para estudiantes de alto desempeño.',
        'programs.infrastructure': 'Desarrollo de Infraestructura',
        'programs.infrastructure.desc': 'Caminos rurales e instalaciones públicas para comunidades.',
        'programs.mbg': 'Comidas Nutritivas Gratis (MBG)',
        'programs.mbg.desc': 'Conservación del ecosistema de manglares y reforestación costera.',
        'programs.irrigation': 'Renovación de Casas',
        'programs.irrigation.desc': 'Transformación de espacios de vida dignos.',
        'programs.learn': 'Más información →',
        'news.loadmore': 'Cargar Más',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'contact.form.title': 'Enviar Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.name.placeholder': 'Nombre Completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.email.placeholder': 'correo@ejemplo.com',
        'contact.form.message': 'Mensaje',
        'contact.form.message.placeholder': 'Escriba su mensaje...',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.title': 'Información de Contacto',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.phone': 'Teléfono',
        'contact.info.address': 'Dirección',
        'contact.info.address.text': 'Calle Persada Bakti No.123, Jakarta',
        'footer.about': 'Sobre YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global se dedica a la Asistencia Humanitaria Social.',
        'footer.nav': 'Navegación',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos y Condiciones',
        'footer.language': 'Idioma',

        // Program Detail Pages - Back Button
        'program.back': 'Volver a Programas',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Programa de Becas',
        'program.beasiswa.subtitle': 'Apoyando la Educación de la Generación Joven de Indonesia',
        'program.beasiswa.about': 'Acerca del Programa de Becas',
        'program.beasiswa.p1': 'El Programa de Becas de Yayasan Persada Bakti Global es nuestro compromiso de mejorar la calidad de la educación para la generación más joven de Indonesia. Este programa está diseñado para brindar oportunidades a estudiantes de alto rendimiento de familias desfavorecidas para continuar su educación.',
        'program.beasiswa.p2': 'Cada becario recibe apoyo completo que incluye tasas escolares, libros, uniformes y asignaciones mensuales. Creemos que la educación es la clave para romper el ciclo de la pobreza y construir un futuro mejor.',
        'program.beasiswa.p3': 'Hasta la fecha, el Programa de Becas YPBG ha ayudado a más de 500 estudiantes a completar su educación, con una tasa de graduación del 100% y muchos alumnos continuando en universidades prestigiosas.',
        'program.beasiswa.objectives.1': 'Brindar acceso a educación de calidad para estudiantes de alto rendimiento de familias desfavorecidas',
        'program.beasiswa.objectives.2': 'Mejorar las tasas de graduación y el rendimiento académico de los becarios',
        'program.beasiswa.objectives.3': 'Construir carácter y liderazgo a través de programas de mentoría',
        'program.beasiswa.objectives.4': 'Crear generaciones jóvenes que contribuyan positivamente a la sociedad',
        'program.beasiswa.activities.1.title': 'Distribución de Becas',
        'program.beasiswa.activities.1.desc': 'Distribución simbólica de asistencia de becas a estudiantes de alto rendimiento',
        'program.beasiswa.activities.2.title': 'Programa de Tutoría',
        'program.beasiswa.activities.2.desc': 'Tutoría y orientación académica para mejorar el rendimiento académico',
        'program.beasiswa.activities.3.title': 'Desarrollo de Carácter',
        'program.beasiswa.activities.3.desc': 'Talleres de liderazgo y desarrollo de habilidades blandas para becarios',
        'program.beasiswa.activities.4.title': 'Reunión de Alumni',
        'program.beasiswa.activities.4.desc': 'Reuniones regulares con antiguos alumnos para compartir experiencias y construir redes',
        'program.beasiswa.timeline': 'El programa se ejecuta durante todo el año académico con evaluaciones semestrales',
        'program.beasiswa.impact.1.label': 'Estudiantes Ayudados',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Tasa de Graduación',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Continúan a Universidad',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Años en Funcionamiento',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Distribución de asistencia de becas a estudiantes de alto rendimiento',
        'program.beasiswa.gallery.2': 'Foto de grupo con becarios y equipo YPBG',
        'program.beasiswa.gallery.3': 'Sesiones de tutoría para becarios',
        'program.beasiswa.gallery.4': 'Taller de desarrollo de carácter y liderazgo',
        'program.beasiswa.reports.1': 'Informe Anual del Programa de Becas 2024',
        'program.beasiswa.reports.2': 'Evaluación del Semestre Par 2024',
        'program.beasiswa.reports.3': 'Perfil de Alumni Becarios',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Desarrollo de Infraestructura',
        'program.infrastruktur.subtitle': 'Construyendo Instalaciones Públicas para el Bienestar Comunitario',
        'program.infrastruktur.about': 'Acerca del Programa de Infraestructura',
        'program.infrastruktur.p1': 'El Programa de Desarrollo de Infraestructura de Yayasan Persada Bakti Global se centra en desarrollar instalaciones públicas que apoyen la economía y el bienestar de las comunidades. Construimos caminos rurales, puentes, sistemas de drenaje y otras instalaciones públicas que las comunidades necesitan.',
        'program.infrastruktur.p2': 'Cada uno de nuestros proyectos de infraestructura está diseñado considerando las necesidades a largo plazo de la comunidad y el impacto ambiental. Trabajamos con gobiernos locales y comunidades para asegurar un desarrollo sostenible y beneficioso para todos.',
        'program.infrastruktur.p3': 'Hasta la fecha, YPBG ha completado la construcción de más de 50 km de caminos rurales, 10 puentes y varias otras instalaciones públicas que han mejorado la accesibilidad y las economías comunitarias en diversas regiones.',
        'program.infrastruktur.objectives.1': 'Mejorar el acceso de la comunidad a instalaciones públicas',
        'program.infrastruktur.objectives.2': 'Promover el crecimiento económico local a través de infraestructura adecuada',
        'program.infrastruktur.objectives.3': 'Construir infraestructura ecológica y sostenible',
        'program.infrastruktur.objectives.4': 'Fortalecer asociaciones con gobiernos locales y comunidades',
        'program.infrastruktur.activities.1.title': 'Construcción de Caminos Rurales',
        'program.infrastruktur.activities.1.desc': 'Construcción y reparación de caminos rurales para mejorar la accesibilidad',
        'program.infrastruktur.activities.2.title': 'Construcción de Puentes',
        'program.infrastruktur.activities.2.desc': 'Construcción de puentes para conectar áreas separadas',
        'program.infrastruktur.activities.3.title': 'Sistema de Drenaje',
        'program.infrastruktur.activities.3.desc': 'Construcción de canales de drenaje para prevenir inundaciones',
        'program.infrastruktur.activities.4.title': 'Instalaciones Públicas',
        'program.infrastruktur.activities.4.desc': 'Construcción de salones comunales y otras instalaciones públicas',
        'program.infrastruktur.timeline': 'Los proyectos de infraestructura se implementan en fases durante 6-12 meses',
        'program.infrastruktur.impact.1.label': 'Km de Caminos',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Puentes',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Villas Accedidas',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Beneficiarios',
        'program.infrastruktur.impact.4.value': '10,000+',
        'program.infrastruktur.gallery.1': 'Construcción de caminos rurales para mejorar la accesibilidad',
        'program.infrastruktur.gallery.2': 'Foto de grupo con equipo y comunidad después de completar el proyecto',
        'program.infrastruktur.gallery.3': 'Construcción de puentes para conectar dos villas',
        'program.infrastruktur.gallery.4': 'Sistema de drenaje construido para prevenir inundaciones',
        'program.infrastruktur.reports.1': 'Informe de Desarrollo de Infraestructura 2024',
        'program.infrastruktur.reports.2': 'Evaluación de Impacto Económico de Infraestructura',
        'program.infrastruktur.reports.3': 'Documentación de Proyectos de Caminos y Puentes',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Programa de Riego',
        'program.irigasi.subtitle': 'Regando Campos de Arroz para la Seguridad Alimentaria',
        'program.irigasi.about': 'Acerca del Programa de Riego',
        'program.irigasi.p1': 'El Programa de Riego de Yayasan Persada Bakti Global se centra en la construcción y rehabilitación de sistemas de riego para apoyar la agricultura comunitaria. Los buenos sistemas de riego son esenciales para aumentar la productividad agrícola y el bienestar de los agricultores.',
        'program.irigasi.p2': 'Construimos canales de riego, pequeñas presas y sistemas de bombas de agua que ayudan a los agricultores a regar sus campos de arroz y tierras de manera eficiente. Este programa también incluye capacitación sobre gestión sostenible del agua.',
        'program.irigasi.p3': 'Hasta la fecha, YPBG ha construido y rehabilitado más de 30 km de canales de riego que riegan más de 500 hectáreas de tierras agrícolas en diversas regiones.',
        'program.irigasi.objectives.1': 'Aumentar la productividad agrícola a través de sistemas de riego adecuados',
        'program.irigasi.objectives.2': 'Optimizar el uso de recursos hídricos para la agricultura',
        'program.irigasi.objectives.3': 'Aumentar los ingresos de los agricultores mediante mejores cosechas',
        'program.irigasi.objectives.4': 'Construir sistemas de riego sostenibles y ecológicos',
        'program.irigasi.activities.1.title': 'Construcción de Canales de Riego',
        'program.irigasi.activities.1.desc': 'Construcción de nuevos canales de riego para regar tierras agrícolas',
        'program.irigasi.activities.2.title': 'Rehabilitación de Riego',
        'program.irigasi.activities.2.desc': 'Reparación y mantenimiento de sistemas de riego existentes',
        'program.irigasi.activities.3.title': 'Sistema de Bombas de Agua',
        'program.irigasi.activities.3.desc': 'Instalación de bombas de agua para riego de tierras secas',
        'program.irigasi.activities.4.title': 'Capacitación de Agricultores',
        'program.irigasi.activities.4.desc': 'Educación sobre gestión del agua y sistemas de riego sostenibles',
        'program.irigasi.timeline': 'Los proyectos de riego se implementan según la temporada de siembra con duración de 3-6 meses',
        'program.irigasi.impact.1.label': 'Km de Canales',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hectáreas Regadas',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Agricultores Beneficiados',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Aumento de Rendimiento',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Construcción de canales de riego para agricultura comunitaria',
        'program.irigasi.gallery.2': 'Foto de grupo con agricultores después de completar el proyecto de riego',
        'program.irigasi.gallery.3': 'Sistema de bombas de agua para riego de tierras secas',
        'program.irigasi.gallery.4': 'Capacitación en gestión de riego para grupos de agricultores',
        'program.irigasi.reports.1': 'Informe del Programa de Riego 2024',
        'program.irigasi.reports.2': 'Estudio de Impacto del Riego en la Productividad',
        'program.irigasi.reports.3': 'Guía de Gestión Sostenible de Riego',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Programa de Alimentación Saludable',
        'program.makanan_sehat.subtitle': 'Nutrición Equilibrada para Familias Indonesias',
        'program.makanan_sehat.about': 'Acerca del Programa de Alimentación Saludable',
        'program.makanan_sehat.p1': 'El Programa de Alimentación Saludable de Yayasan Persada Bakti Global es una iniciativa para aumentar la conciencia y el acceso de la comunidad a alimentos nutritivos. Este programa proporciona educación nutricional y provisión de alimentos saludables para familias desfavorecidas.',
        'program.makanan_sehat.p2': 'Trabajamos con nutricionistas y trabajadores de la salud para preparar menús nutritivos equilibrados. Este programa también incluye asesoramiento sobre la importancia de la nutrición equilibrada y los patrones de alimentación saludables.',
        'program.makanan_sehat.p3': 'Hasta la fecha, el Programa de Alimentación Saludable ha llegado a más de 2,000 familias y realizado más de 50 sesiones de asesoramiento nutricional en diversas comunidades.',
        'program.makanan_sehat.objectives.1': 'Aumentar la conciencia comunitaria sobre la importancia de la nutrición equilibrada',
        'program.makanan_sehat.objectives.2': 'Proporcionar acceso a alimentos nutritivos para familias desfavorecidas',
        'program.makanan_sehat.objectives.3': 'Reducir las tasas de desnutrición y retraso en el crecimiento en comunidades objetivo',
        'program.makanan_sehat.objectives.4': 'Empoderar a las madres en la preparación de alimentos nutritivos',
        'program.makanan_sehat.activities.1.title': 'Provisión de Alimentos Nutritivos',
        'program.makanan_sehat.activities.1.desc': 'Distribución de paquetes de alimentos nutritivos para familias necesitadas',
        'program.makanan_sehat.activities.2.title': 'Asesoramiento Nutricional',
        'program.makanan_sehat.activities.2.desc': 'Educación sobre nutrición equilibrada y patrones de alimentación saludables',
        'program.makanan_sehat.activities.3.title': 'Demostración de Cocina Saludable',
        'program.makanan_sehat.activities.3.desc': 'Demostración de cocina de alimentos saludables con ingredientes locales',
        'program.makanan_sehat.activities.4.title': 'Evaluación Nutricional',
        'program.makanan_sehat.activities.4.desc': 'Evaluación del estado nutricional para niños y mujeres embarazadas',
        'program.makanan_sehat.timeline': 'El programa se ejecuta durante todo el año con actividades mensuales',
        'program.makanan_sehat.impact.1.label': 'Familias Alcanzadas',
        'program.makanan_sehat.impact.1.value': '2,000+',
        'program.makanan_sehat.impact.2.label': 'Sesiones de Asesoramiento',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Paquetes de Alimentos',
        'program.makanan_sehat.impact.3.value': '10,000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu Asociados',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Provisión de alimentos nutritivos para la comunidad',
        'program.makanan_sehat.gallery.2': 'Asesoramiento nutricional y patrones de alimentación saludables',
        'program.makanan_sehat.gallery.3': 'Demostración de cocina saludable nutritiva',
        'program.makanan_sehat.gallery.4': 'Evaluación nutricional para niños y mujeres embarazadas',
        'program.makanan_sehat.reports.1': 'Informe del Programa de Nutrición 2024',
        'program.makanan_sehat.reports.2': 'Evaluación de Impacto Nutricional en Familias',
        'program.makanan_sehat.reports.3': 'Recetas de Alimentos Saludables Nutritivos',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Comidas Nutritivas Gratis (MBG)',
        'program.mbg.subtitle': 'Nutrición para el Futuro de los Niños Indonesios',
        'program.mbg.about': 'Acerca del Programa MBG',
        'program.mbg.p1': 'El Programa de Comidas Nutritivas Gratis (MBG) de Yayasan Persada Bakti Global es nuestro compromiso de mejorar la calidad nutricional de la comunidad, especialmente niños y familias desfavorecidas. Este programa proporciona alimentos nutritivos de forma gratuita a quienes los necesitan.',
        'program.mbg.p2': 'Además de la provisión de alimentos, el programa MBG también incluye educación nutricional, conservación del ecosistema de manglares y reforestación costera para crear un ambiente saludable y sostenible.',
        'program.mbg.p3': 'Hasta la fecha, el programa MBG ha distribuido más de 10,000 paquetes de alimentos nutritivos y plantado 5,000 árboles de mangle en diversas regiones costeras de Indonesia.',
        'program.mbg.objectives.1': 'Proporcionar alimentos nutritivos gratuitos para niños y familias desfavorecidas',
        'program.mbg.objectives.2': 'Mejorar el estado nutricional y la salud de los beneficiarios',
        'program.mbg.objectives.3': 'Preservar el medio ambiente a través de la plantación de manglares',
        'program.mbg.objectives.4': 'Empoderar a las comunidades costeras a través de programas integrados',
        'program.mbg.activities.1.title': 'Distribución de Alimentos Nutritivos',
        'program.mbg.activities.1.desc': 'Distribución de paquetes de alimentos nutritivos a niños y familias',
        'program.mbg.activities.2.title': 'Plantación de Manglares',
        'program.mbg.activities.2.desc': 'Actividades de conservación del ecosistema de manglares en áreas costeras',
        'program.mbg.activities.3.title': 'Educación Nutricional',
        'program.mbg.activities.3.desc': 'Asesoramiento sobre la importancia de la nutrición para el crecimiento infantil',
        'program.mbg.activities.4.title': 'Reforestación Costera',
        'program.mbg.activities.4.desc': 'Plantación de árboles para prevenir la abrasión costera',
        'program.mbg.timeline': 'El programa MBG se ejecuta durante todo el año con distribución semanal',
        'program.mbg.impact.1.label': 'Paquetes de Alimentos',
        'program.mbg.impact.1.value': '10,000+',
        'program.mbg.impact.2.label': 'Árboles de Mangle',
        'program.mbg.impact.2.value': '5,000+',
        'program.mbg.impact.3.label': 'Niños Beneficiados',
        'program.mbg.impact.3.value': '3,000+',
        'program.mbg.impact.4.label': 'Villas Costeras',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribución de alimentos nutritivos a la comunidad',
        'program.mbg.gallery.2': 'Actividades de plantación de manglares para conservación ambiental',
        'program.mbg.gallery.3': 'Educación nutricional para madres y niños',
        'program.mbg.gallery.4': 'Reforestación costera para prevenir la abrasión',
        'program.mbg.reports.1': 'Informe del Programa MBG 2024',
        'program.mbg.reports.2': 'Impacto Nutricional en Niños Beneficiarios de MBG',
        'program.mbg.reports.3': 'Documentación de Plantación de Manglares',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Baño, Lavado, Inodoro (MCK)',
        'program.mck.subtitle': 'Saneamiento Adecuado para la Salud Ambiental',
        'program.mck.about': 'Acerca del Programa MCK',
        'program.mck.p1': 'El Programa MCK (Baño, Lavado, Inodoro) de Yayasan Persada Bakti Global se centra en construir instalaciones de saneamiento adecuadas para mejorar la salud ambiental y la calidad de vida de la comunidad.',
        'program.mck.p2': 'Construimos instalaciones públicas de MCK equipadas con agua limpia, estaciones de lavado de manos e inodoros higiénicos. Este programa también incluye educación sobre la importancia de la limpieza y el saneamiento para prevenir enfermedades.',
        'program.mck.p3': 'Hasta la fecha, YPBG ha construido 25 unidades de MCK que sirven a más de 5,000 residentes en diversas regiones, reduciendo significativamente las tasas de enfermedades debido al saneamiento deficiente.',
        'program.mck.objectives.1': 'Proporcionar instalaciones de saneamiento adecuadas para la comunidad',
        'program.mck.objectives.2': 'Aumentar la conciencia sobre la importancia de la limpieza y el saneamiento',
        'program.mck.objectives.3': 'Reducir las tasas de enfermedades debido al saneamiento deficiente',
        'program.mck.objectives.4': 'Promover comportamientos limpios y saludables',
        'program.mck.activities.1.title': 'Construcción de MCK',
        'program.mck.activities.1.desc': 'Construcción de instalaciones públicas de MCK con estándares higiénicos',
        'program.mck.activities.2.title': 'Educación en Saneamiento',
        'program.mck.activities.2.desc': 'Asesoramiento sobre la importancia del saneamiento y la limpieza',
        'program.mck.activities.3.title': 'Lavado de Manos',
        'program.mck.activities.3.desc': 'Promoción del lavado de manos con jabón para prevenir enfermedades',
        'program.mck.activities.4.title': 'Mantenimiento de MCK',
        'program.mck.activities.4.desc': 'Capacitación en gestión y mantenimiento de instalaciones de MCK',
        'program.mck.timeline': 'La construcción de MCK se completa en 2-3 meses por unidad',
        'program.mck.impact.1.label': 'Unidades MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Beneficiarios',
        'program.mck.impact.2.value': '5,000+',
        'program.mck.impact.3.label': 'Reducción de Enfermedades',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Villas Servidas',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Construcción de instalaciones de MCK para la comunidad',
        'program.mck.gallery.2': 'Educación en limpieza y saneamiento',
        'program.mck.gallery.3': 'Instalaciones de MCK completadas',
        'program.mck.gallery.4': 'Socialización de lavado de manos con jabón',
        'program.mck.reports.1': 'Informe del Programa de Saneamiento 2024',
        'program.mck.reports.2': 'Impacto de MCK en la Salud Comunitaria',
        'program.mck.reports.3': 'Guía de Gestión de MCK Comunal',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Programa de Orfanato',
        'program.panti_asuhan.subtitle': 'Amor para Niños Huérfanos',
        'program.panti_asuhan.about': 'Acerca del Programa de Orfanato',
        'program.panti_asuhan.p1': 'El Programa de Orfanato de Yayasan Persada Bakti Global es nuestra preocupación por los niños huérfanos y desfavorecidos. Este programa proporciona asistencia en forma de alimentos, ropa, educación e instalaciones para orfanatos.',
        'program.panti_asuhan.p2': 'Trabajamos con varios orfanatos para asegurar que los niños reciban cuidado y educación adecuados. Este programa también incluye actividades recreativas, tutoría y desarrollo de talentos para niños.',
        'program.panti_asuhan.p3': 'Hasta la fecha, YPBG ha ayudado a 20 orfanatos con un total de más de 500 niños beneficiándose de este programa, dándoles esperanza y un futuro mejor.',
        'program.panti_asuhan.objectives.1': 'Proporcionar necesidades básicas para niños huérfanos y desfavorecidos',
        'program.panti_asuhan.objectives.2': 'Apoyar la educación y el desarrollo de talentos de los niños',
        'program.panti_asuhan.objectives.3': 'Proporcionar amor y atención a los niños',
        'program.panti_asuhan.objectives.4': 'Mejorar la calidad de las instalaciones del orfanato',
        'program.panti_asuhan.activities.1.title': 'Asistencia Regular',
        'program.panti_asuhan.activities.1.desc': 'Distribución de alimentos, ropa y necesidades básicas',
        'program.panti_asuhan.activities.2.title': 'Tutoría',
        'program.panti_asuhan.activities.2.desc': 'Tutoría y asistencia en lecciones para niños del orfanato',
        'program.panti_asuhan.activities.3.title': 'Actividades Recreativas',
        'program.panti_asuhan.activities.3.desc': 'Actividades al aire libre y divertidas para niños',
        'program.panti_asuhan.activities.4.title': 'Desarrollo de Talentos',
        'program.panti_asuhan.activities.4.desc': 'Capacitación en artes, deportes y habilidades para niños',
        'program.panti_asuhan.timeline': 'El programa se ejecuta durante todo el año con visitas mensuales',
        'program.panti_asuhan.impact.1.label': 'Orfanatos Asociados',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Niños Beneficiados',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Asistencia Distribuida',
        'program.panti_asuhan.impact.3.value': '24x/año',
        'program.panti_asuhan.impact.4.label': 'Voluntarios',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribución de asistencia para orfanatos',
        'program.panti_asuhan.gallery.2': 'Actividades recreativas y tutoría',
        'program.panti_asuhan.gallery.3': 'Foto de grupo con niños del orfanato',
        'program.panti_asuhan.gallery.4': 'Actividades de desarrollo de talentos y artes',
        'program.panti_asuhan.reports.1': 'Informe del Programa de Orfanato 2024',
        'program.panti_asuhan.reports.2': 'Perfil de Niños Destacados del Orfanato',
        'program.panti_asuhan.reports.3': 'Documentación de Actividades del Orfanato',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Programa de Tratamiento Médico',
        'program.pengobatan.subtitle': 'Servicios de Salud para la Comunidad',
        'program.pengobatan.about': 'Acerca del Programa de Tratamiento Médico',
        'program.pengobatan.p1': 'El Programa de Tratamiento Médico de Yayasan Persada Bakti Global proporciona servicios de salud gratuitos para comunidades desfavorecidas. Este programa incluye exámenes de salud generales, tratamiento gratuito y asesoramiento de salud.',
        'program.pengobatan.p2': 'Trabajamos con médicos, enfermeras y trabajadores de la salud profesionales para proporcionar servicios médicos de calidad. Este programa también incluye distribución gratuita de medicamentos y exámenes de salud regulares.',
        'program.pengobatan.p3': 'Hasta la fecha, el Programa de Tratamiento Médico YPBG ha atendido a más de 3,000 pacientes y realizado más de 40 actividades de servicio social de salud en diversas regiones, proporcionando acceso a la salud para quienes lo necesitan.',
        'program.pengobatan.objectives.1': 'Proporcionar acceso a servicios de salud para comunidades desfavorecidas',
        'program.pengobatan.objectives.2': 'Aumentar la conciencia sobre la importancia de la salud preventiva',
        'program.pengobatan.objectives.3': 'Proporcionar medicamentos gratuitos para quienes los necesitan',
        'program.pengobatan.objectives.4': 'Construir asociaciones con trabajadores de la salud profesionales',
        'program.pengobatan.activities.1.title': 'Servicio Social de Salud',
        'program.pengobatan.activities.1.desc': 'Servicios gratuitos de examen y tratamiento',
        'program.pengobatan.activities.2.title': 'Examen de Salud',
        'program.pengobatan.activities.2.desc': 'Evaluación de salud general y enfermedades no transmisibles',
        'program.pengobatan.activities.3.title': 'Distribución de Medicamentos',
        'program.pengobatan.activities.3.desc': 'Distribución de medicamentos gratuitos para pacientes',
        'program.pengobatan.activities.4.title': 'Asesoramiento de Salud',
        'program.pengobatan.activities.4.desc': 'Educación sobre estilo de vida saludable y prevención de enfermedades',
        'program.pengobatan.timeline': 'Las actividades de servicio social de salud se realizan mensualmente',
        'program.pengobatan.impact.1.label': 'Pacientes Atendidos',
        'program.pengobatan.impact.1.value': '3,000+',
        'program.pengobatan.impact.2.label': 'Servicios de Salud',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Medicamentos Distribuidos',
        'program.pengobatan.impact.3.value': '5,000+',
        'program.pengobatan.impact.4.label': 'Trabajadores de Salud Asociados',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Servicios de tratamiento médico gratuito para la comunidad',
        'program.pengobatan.gallery.2': 'Examen de salud por equipo médico',
        'program.pengobatan.gallery.3': 'Asesoramiento de salud y distribución gratuita de medicamentos',
        'program.pengobatan.gallery.4': 'Servicio social de salud en áreas remotas',
        'program.pengobatan.reports.1': 'Informe del Programa de Salud 2024',
        'program.pengobatan.reports.2': 'Estadísticas de Pacientes y Enfermedades',
        'program.pengobatan.reports.3': 'Documentación de Servicio Social de Salud',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Programa de Lugares de Culto',
        'program.rumah_ibadat.subtitle': 'Instalaciones de Culto para Comunidades Religiosas',
        'program.rumah_ibadat.about': 'Acerca del Programa de Lugares de Culto',
        'program.rumah_ibadat.p1': 'El Programa de Lugares de Culto de Yayasan Persada Bakti Global es nuestro compromiso de apoyar las instalaciones de culto para la comunidad. Construimos y renovamos mezquitas, salas de oración, iglesias, templos y viharas para apoyar las necesidades espirituales de la comunidad.',
        'program.rumah_ibadat.p2': 'Cada construcción de lugar de culto se lleva a cabo considerando las necesidades de la comunidad local y los estándares de construcción adecuados. Este programa también incluye la provisión de instalaciones de apoyo como áreas de ablución, inodoros y bibliotecas.',
        'program.rumah_ibadat.p3': 'Hasta la fecha, YPBG ha construido y renovado 15 lugares de culto en diversas regiones, proporcionando lugares de culto adecuados para miles de congregaciones.',
        'program.rumah_ibadat.objectives.1': 'Proporcionar instalaciones de culto adecuadas para la comunidad',
        'program.rumah_ibadat.objectives.2': 'Apoyar las necesidades espirituales de las comunidades religiosas',
        'program.rumah_ibadat.objectives.3': 'Preservar los lugares de culto como centros comunitarios',
        'program.rumah_ibadat.objectives.4': 'Construir tolerancia y armonía entre comunidades religiosas',
        'program.rumah_ibadat.activities.1.title': 'Construcción de Lugar de Culto',
        'program.rumah_ibadat.activities.1.desc': 'Nueva construcción de lugares de culto para comunidades',
        'program.rumah_ibadat.activities.2.title': 'Renovación',
        'program.rumah_ibadat.activities.2.desc': 'Reparación y renovación de lugares de culto dañados',
        'program.rumah_ibadat.activities.3.title': 'Instalaciones de Apoyo',
        'program.rumah_ibadat.activities.3.desc': 'Construcción de áreas de ablución, inodoros y bibliotecas',
        'program.rumah_ibadat.activities.4.title': 'Actividades Religiosas',
        'program.rumah_ibadat.activities.4.desc': 'Apoyo a actividades religiosas y sociales en lugares de culto',
        'program.rumah_ibadat.timeline': 'Los proyectos de construcción se completan en 4-8 meses',
        'program.rumah_ibadat.impact.1.label': 'Lugares de Culto',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congregación Beneficiada',
        'program.rumah_ibadat.impact.2.value': '5,000+',
        'program.rumah_ibadat.impact.3.label': 'Villas Servidas',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Voluntarios',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Construcción de lugares de culto para la comunidad',
        'program.rumah_ibadat.gallery.2': 'Foto de grupo con congregación después de la inauguración',
        'program.rumah_ibadat.gallery.3': 'Actividades religiosas en lugares de culto',
        'program.rumah_ibadat.gallery.4': 'Instalaciones de apoyo para lugares de culto',
        'program.rumah_ibadat.reports.1': 'Informe del Programa de Lugares de Culto 2024',
        'program.rumah_ibadat.reports.2': 'Documentación de Construcción y Renovación',
        'program.rumah_ibadat.reports.3': 'Perfil de Lugar de Culto Asociado'
    },

    'es': {
        // Header & Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Acerca',
        'nav.programs': 'Programas',
        'nav.news': 'Noticias',
        'nav.contact': 'Contacto',
        'lang.select': 'Seleccionar idioma',
        'skiplink': 'Saltar al contenido principal',

        // Hero Section
        'hero.title': 'Sirviendo con amor,<br>construyendo con esperanza.',
        'hero.subtitle': 'Yayasan Persada Bakti Global se compromete con la asistencia social humanitaria sostenible.',
        'hero.btn.about': 'Conocer Nuestra Fundación',
        'hero.btn.contact': 'Contáctenos',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'Sobre Nosotros',
        'highlight.about.desc': 'Historia y Visión',
        'highlight.programs.title': 'Programas',
        'highlight.programs.desc': 'Impacto Real',
        'highlight.news.title': 'Publicaciones',
        'highlight.news.desc': 'Reportes y Noticias',

        // About Section
        'about.title': 'Sobre la Fundación',
        'about.vision': 'Visión',
        'about.vision.desc': 'Ser una organización líder en empoderamiento comunitario y desarrollo sostenible.',
        'about.mission': 'Misión',
        'about.mission.li1': 'Empoderar a través de educación y capacitación',
        'about.mission.li2': 'Promover la innovación social',
        'about.mission.li3': 'Construir asociaciones estratégicas',
        'about.values': 'Valores Fundamentales',
        'about.values.love': 'Amor',
        'about.values.integrity': 'Integridad',
        'about.values.hope': 'Esperanza',
        'about.values.collaboration': 'Colaboración',
        'about.org': 'Estructura Organizacional',
        'about.gallery': 'Galería de Actividades',
        'carousel.prev': 'Anterior',
        'carousel.next': 'Siguiente',

        // Programs Section
        'programs.title': 'Programas y Actividades',
        'programs.filter.all': 'Todos',
        'programs.filter.scholarship': 'Beca',
        'programs.filter.infrastructure': 'Infraestructura',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programa de Becas',
        'programs.scholarship.desc': 'Apoyo educativo completo para estudiantes de alto desempeño.',
        'programs.infrastructure': 'Desarrollo de Infraestructura',
        'programs.infrastructure.desc': 'Caminos rurales e instalaciones públicas para comunidades.',
        'programs.mbg': 'Comidas Nutritivas Gratis (MBG)',
        'programs.mbg.desc': 'Conservación del ecosistema de manglares y reforestación costera.',
        'programs.irrigation': 'Renovación de Casas',
        'programs.irrigation.desc': 'Transformación de espacios de vida dignos.',
        'programs.learn': 'Más información →',

        // News Section
        'news.title': 'Noticias y Publicaciones',
        'news.loadmore': 'Cargar Más',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Contáctenos',
        'contact.form.title': 'Enviar Mensaje',
        'contact.form.name': 'Nombre',
        'contact.form.name.placeholder': 'Nombre Completo',
        'contact.form.email': 'Correo Electrónico',
        'contact.form.email.placeholder': 'correo@ejemplo.com',
        'contact.form.message': 'Mensaje',
        'contact.form.message.placeholder': 'Escriba su mensaje...',
        'contact.form.submit': 'Enviar Mensaje',
        'contact.info.title': 'Información de Contacto',
        'contact.info.email': 'Correo Electrónico',
        'contact.info.phone': 'Teléfono',
        'contact.info.address': 'Dirección',
        'contact.info.address.text': 'Calle Persada Bakti No.123, Jakarta',

        // Footer
        'footer.about': 'Sobre YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global se dedica a la Asistencia Humanitaria Social.',
        'footer.nav': 'Navegación',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidad',
        'footer.terms': 'Términos y Condiciones',
        'footer.language': 'Idioma',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Todos los derechos reservados.',

        // Organization Structure
        'about.org.chairman': 'Presidente del Consejo',
        'about.org.ceo': 'Director Ejecutivo',
        'about.org.secretary': 'Secretario',
        'about.org.treasurer': 'Tesorero',
        'about.org.programs': 'Programas',
        'about.org.finance': 'Finanzas',
        'about.org.pr': 'Relaciones Públicas',

        // News Common Keys
        'news.date': 'Fecha',
        'news.author': 'Equipo YPBG',
        'news.views': 'Vistas',
        'news.gallery': '📸 Documentación Fotográfica',
        'news.about': '📖 Acerca de',
        'news.back': 'Volver a Noticias',
        'news.readmore': 'Leer Más →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Programa de Becas 2024 Abierto',
        'news.1.excerpt': 'YPBG abre inscripciones para programa de becas educativas...',
        'news.1.category': 'Educación',
        'news.1.video': '🎥 Vídeo del Programa',
        'news.1.about': '📖 Acerca del Programa de Becas',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) abre oficialmente las inscripciones para el Programa de Becas 2024 para estudiantes de alto rendimiento de familias desfavorecidas en toda Indonesia. Este programa es el compromiso de YPBG de mejorar la calidad de la educación para la generación más joven de Indonesia.',
        'news.1.p2': 'El Programa de Becas YPBG proporciona apoyo educativo completo que incluye tasas escolares, libros, uniformes y asignaciones mensuales. Hasta la fecha, el programa de becas YPBG ha ayudado a más de 500 estudiantes a completar su educación con una tasa de graduación del 100%.',
        'news.1.p3': 'Las inscripciones para el Programa de Becas 2024 están abiertas hasta el 31 de marzo de 2024. Los requisitos de inscripción incluyen: (1) Estudiantes de ESO/Bachillerato con logros, (2) De familias desfavorecidas, (3) Alto espíritu de aprendizaje, y (4) Recomendación escolar.',
        'news.1.gallery.1': '🎓 Distribución de asistencia de becas a estudiantes de alto rendimiento',
        'news.1.gallery.2': '👨‍🎓 Foto de grupo con becarios y equipo YPBG',
        'news.1.gallery.3': '📚 Sesiones de tutoría para becarios',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Actividad de Limpieza de Playa',
        'news.2.excerpt': 'Cientos de voluntarios de YPBG limpiaron con éxito 5 km de playa...',
        'news.2.category': 'Medio Ambiente',
        'news.2.video': '🎥 Vídeo de la Actividad',
        'news.2.about': '📖 Acerca de la Limpieza de Playa',
        'news.2.p1': 'Cientos de voluntarios de Yayasan Persada Bakti Global (YPBG) limpiaron con éxito 5 km de costa de residuos plásticos y otros residuos en una actividad de limpieza de playa realizada el domingo 10 de febrero de 2024.',
        'news.2.p2': 'La actividad de limpieza de playa contó con la participación de más de 300 voluntarios compuestos por miembros de YPBG, estudiantes, alumnos y comunidades locales. Con alto espíritu de cooperación mutua, los voluntarios trabajaron desde la mañana limpiando varios tipos de residuos arrastrados a la playa.',
        'news.2.p3': 'Los residuos recogidos alcanzaron 2 toneladas, compuestos de residuos plásticos, botellas y otros residuos domésticos. Estos residuos fueron luego clasificados y gestionados según su tipo para reciclaje o eliminados de manera ecológica.',
        'news.2.p4': 'Además de la limpieza de la playa, esta actividad también incluyó la plantación de 1.000 plántulas de mangle para prevenir la abrasión costera y preservar los ecosistemas marinos. YPBG se compromete a continuar realizando actividades similares para mantener la sostenibilidad del entorno costero de Indonesia.',
        'news.2.stat.relawan': 'Voluntarios',
        'news.2.stat.pantai': 'km Playa',
        'news.2.stat.sampah': 'toneladas Residuos',
        'news.2.stat.mangrove': 'Plántulas de Mangle',
        'news.2.gallery.1': '🧹 Voluntarios limpiando residuos en la playa',
        'news.2.gallery.2': '🌱 Plantando plántulas de mangle para prevenir la abrasión',
        'news.2.gallery.3': '👥 Foto de grupo con voluntarios después de la actividad',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Campaña de Vacunación Gratuita',
        'news.3.excerpt': 'YPBG realiza campaña de vacunación gratuita en 20 aldeas...',
        'news.3.category': 'Salud',
        'news.3.video': '🎥 Vídeo de la Campaña',
        'news.3.about': '📖 Acerca de la Campaña de Vacunación',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) realizó una campaña de vacunación gratuita en 20 aldeas en varias regiones de Indonesia el lunes 5 de febrero de 2024. Este programa es parte del compromiso de YPBG de mejorar el acceso a la salud para comunidades desfavorecidas.',
        'news.3.p2': 'Esta campaña de vacunación proporciona varios tipos de vacunas gratuitas, incluyendo vacuna COVID-19, vacuna contra la gripe y vacuna contra la hepatitis B. Todos los servicios se proporcionan gratuitamente a quienes los necesitan.',
        'news.3.p3': 'Esta actividad se llevó a cabo en colaboración con la Oficina de Salud local y contó con 50 profesionales médicos compuestos por médicos, enfermeras y matronas. YPBG tiene como objetivo atender a 5.000 receptores de vacunas en esta campaña.',
        'news.3.p4': 'Además de la vacunación, esta actividad también incluye asesoramiento sobre salud y exámenes de salud gratuitos. La comunidad puede consultar directamente con los médicos sobre sus problemas de salud.',
        'news.3.quote': 'La salud es derecho de todo ser humano. Estamos comprometidos a asegurar que las comunidades desfavorecidas también tengan acceso decente a la salud.',
        'news.3.quote.author': 'Director YPBG',
        'news.3.vaccines': '📋 Vacunas Disponibles',
        'news.3.vaccine.1': 'Vacuna COVID-19 - Protege del coronavirus',
        'news.3.vaccine.2': 'Vacuna contra la Gripe - Previene la gripe estacional',
        'news.3.vaccine.3': 'Vacuna contra la Hepatitis B - Protege el hígado de infecciones',
        'news.3.gallery.1': '💉 Proceso de vacunación por personal médico profesional',
        'news.3.gallery.2': '👥 Comunidad haciendo cola para obtener vacunación gratuita',
        'news.3.gallery.3': '🩺 Asesoramiento de salud para comunidades aldeanas',

        // Program Detail Pages - Back Button
        'program.back': 'Volver a Programas',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Programa de Becas',
        'program.beasiswa.subtitle': 'Apoyando la Educación de la Generación Joven de Indonesia',
        'program.beasiswa.about': 'Acerca del Programa de Becas',
        'program.beasiswa.p1': 'El Programa de Becas de Yayasan Persada Bakti Global es nuestro compromiso para mejorar la calidad de la educación de la generación más joven de Indonesia. Este programa está diseñado para brindar oportunidades a estudiantes de alto rendimiento de familias desfavorecidas para continuar su educación.',
        'program.beasiswa.p2': 'Cada becario recibe apoyo completo que incluye tasas escolares, libros, uniformes y asignaciones mensuales. Creemos que la educación es la clave para romper el ciclo de la pobreza y construir un futuro mejor.',
        'program.beasiswa.p3': 'Hasta la fecha, el Programa de Becas YPBG ha ayudado a más de 500 estudiantes a completar su educación, con una tasa de graduación del 100% y muchos alumnos que continúan en universidades prestigiosas.',
        'program.beasiswa.objectives.1': 'Brindar acceso a educación de calidad para estudiantes de alto rendimiento de familias desfavorecidas',
        'program.beasiswa.objectives.2': 'Mejorar las tasas de graduación y el rendimiento académico de los becarios',
        'program.beasiswa.objectives.3': 'Construir carácter y liderazgo a través de programas de mentoría',
        'program.beasiswa.objectives.4': 'Crear una generación joven que contribuya positivamente a la sociedad',
        'program.beasiswa.activities.1.title': 'Entrega de Becas',
        'program.beasiswa.activities.1.desc': 'Actividad de entrega simbólica de becas a estudiantes de alto rendimiento',
        'program.beasiswa.activities.2.title': 'Tutoría y Bimbingan',
        'program.beasiswa.activities.2.desc': 'Programa de tutoría y orientación académica para mejorar el rendimiento académico',
        'program.beasiswa.activities.3.title': 'Desarrollo de Carácter',
        'program.beasiswa.activities.3.desc': 'Talleres de liderazgo y desarrollo de habilidades blandas para becarios',
        'program.beasiswa.activities.4.title': 'Reunión de Alumni',
        'program.beasiswa.activities.4.desc': 'Reuniones periódicas con antiguos alumnos para compartir experiencias y construir redes',
        'program.beasiswa.timeline': 'El programa se desarrolla durante todo el año académico con evaluación cada semestre',
        'program.beasiswa.impact.1.label': 'Estudiantes Ayudados',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Tasa de Graduación',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Continúan a Universidad',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Años de Operación',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Entrega de asistencia de becas a estudiantes de alto rendimiento',
        'program.beasiswa.gallery.2': 'Foto grupal con becarios y equipo YPBG',
        'program.beasiswa.gallery.3': 'Actividades de tutoría para becarios',
        'program.beasiswa.gallery.4': 'Taller de desarrollo de carácter y liderazgo',
        'program.beasiswa.reports.1': 'Informe Anual del Programa de Becas 2024',
        'program.beasiswa.reports.2': 'Evaluación del Semestre Par 2024',
        'program.beasiswa.reports.3': 'Perfil de Alumni Becarios',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Desarrollo de Infraestructura',
        'program.infrastruktur.subtitle': 'Construyendo Instalaciones Públicas para el Bienestar Comunitario',
        'program.infrastruktur.about': 'Acerca del Programa de Infraestructura',
        'program.infrastruktur.p1': 'El Programa de Desarrollo de Infraestructura de Yayasan Persada Bakti Global se centra en el desarrollo de instalaciones públicas que apoyan la economía y el bienestar de la comunidad. Construimos caminos rurales, puentes, sistemas de drenaje y otras instalaciones públicas que son muy necesarias para las comunidades.',
        'program.infrastruktur.p2': 'Cada uno de nuestros proyectos de infraestructura está diseñado considerando las necesidades a largo plazo de la comunidad y el impacto ambiental. Trabajamos con gobiernos locales y comunidades locales para garantizar un desarrollo sostenible y beneficioso para todos.',
        'program.infrastruktur.p3': 'Hasta la fecha, YPBG ha completado la construcción de más de 50 km de caminos rurales, 10 puentes y diversas otras instalaciones públicas que han mejorado la accesibilidad y la economía comunitaria en varias regiones.',
        'program.infrastruktur.objectives.1': 'Mejorar la accesibilidad de la comunidad a las instalaciones públicas',
        'program.infrastruktur.objectives.2': 'Impulsar el crecimiento económico local a través de infraestructura adecuada',
        'program.infrastruktur.objectives.3': 'Construir infraestructura respetuosa con el medio ambiente y sostenible',
        'program.infrastruktur.objectives.4': 'Fortalecer las asociaciones con gobiernos locales y comunidades locales',
        'program.infrastruktur.activities.1.title': 'Construcción de Caminos Rurales',
        'program.infrastruktur.activities.1.desc': 'Construcción y reparación de caminos rurales para mejorar la accesibilidad',
        'program.infrastruktur.activities.2.title': 'Construcción de Puentes',
        'program.infrastruktur.activities.2.desc': 'Construcción de puentes para conectar regiones separadas',
        'program.infrastruktur.activities.3.title': 'Sistema de Drenaje',
        'program.infrastruktur.activities.3.desc': 'Construcción de canales de drenaje para prevenir inundaciones',
        'program.infrastruktur.activities.4.title': 'Instalaciones Públicas',
        'program.infrastruktur.activities.4.desc': 'Construcción de salones comunales y otras instalaciones públicas',
        'program.infrastruktur.timeline': 'Los proyectos de infraestructura se implementan en etapas durante 6-12 meses',
        'program.infrastruktur.impact.1.label': 'Km de Caminos Construidos',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Puentes',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Aldeas Accesibles',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Beneficiarios',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Construcción de caminos rurales para mejorar la accesibilidad',
        'program.infrastruktur.gallery.2': 'Foto grupal con el equipo y la comunidad después de la finalización del proyecto',
        'program.infrastruktur.gallery.3': 'Construcción de puentes para conectar dos aldeas',
        'program.infrastruktur.gallery.4': 'Sistema de drenaje construido para prevenir inundaciones',
        'program.infrastruktur.reports.1': 'Informe de Desarrollo de Infraestructura 2024',
        'program.infrastruktur.reports.2': 'Evaluación del Impacto Económico de la Infraestructura',
        'program.infrastruktur.reports.3': 'Documentación de Proyectos de Caminos y Puentes',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Programa de Riego',
        'program.irigasi.subtitle': 'Regando Campos para la Seguridad Alimentaria',
        'program.irigasi.about': 'Acerca del Programa de Riego',
        'program.irigasi.p1': 'El Programa de Riego de Yayasan Persada Bakti Global se centra en la construcción y rehabilitación de sistemas de riego para apoyar la agricultura comunitaria. Los buenos sistemas de riego son esenciales para aumentar la productividad agrícola y el bienestar de los agricultores.',
        'program.irigasi.p2': 'Construimos canales de riego, pequeñas presas y sistemas de bombas de agua que ayudan a los agricultores a regar sus arrozales y campos de manera eficiente. Este programa también incluye capacitación sobre gestión sostenible del agua.',
        'program.irigasi.p3': 'Hasta la fecha, YPBG ha construido y rehabilitado más de 30 km de canales de riego que riegan más de 500 hectáreas de tierras agrícolas en varias regiones.',
        'program.irigasi.objectives.1': 'Aumentar la productividad agrícola a través de sistemas de riego adecuados',
        'program.irigasi.objectives.2': 'Optimizar el uso de los recursos hídricos para la agricultura',
        'program.irigasi.objectives.3': 'Aumentar los ingresos de los agricultores mediante el aumento de las cosechas',
        'program.irigasi.objectives.4': 'Construir sistemas de riego sostenibles y respetuosos con el medio ambiente',
        'program.irigasi.activities.1.title': 'Construcción de Canales de Riego',
        'program.irigasi.activities.1.desc': 'Construcción de nuevos canales de riego para regar tierras agrícolas',
        'program.irigasi.activities.2.title': 'Rehabilitación de Riego',
        'program.irigasi.activities.2.desc': 'Reparación y mantenimiento de sistemas de riego existentes',
        'program.irigasi.activities.3.title': 'Sistema de Bombas de Agua',
        'program.irigasi.activities.3.desc': 'Instalación de bombas de agua para riego de tierras secas',
        'program.irigasi.activities.4.title': 'Capacitación de Agricultores',
        'program.irigasi.activities.4.desc': 'Educación sobre gestión del agua y sistemas de riego sostenibles',
        'program.irigasi.timeline': 'Los proyectos de riego se implementan según la temporada de siembra con una duración de 3-6 meses',
        'program.irigasi.impact.1.label': 'Km de Canales',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hectáreas Regadas',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Agricultores Beneficiados',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Aumento de Cosecha',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Construcción de canales de riego para la agricultura comunitaria',
        'program.irigasi.gallery.2': 'Foto grupal con agricultores después de la finalización del proyecto de riego',
        'program.irigasi.gallery.3': 'Sistema de bombas de agua para riego de tierras secas',
        'program.irigasi.gallery.4': 'Capacitación en gestión de riego para grupos de agricultores',
        'program.irigasi.reports.1': 'Informe del Programa de Riego 2024',
        'program.irigasi.reports.2': 'Estudio de Impacto del Riego en la Productividad',
        'program.irigasi.reports.3': 'Guía de Gestión de Riego Sostenible',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Programa de Alimentación Saludable',
        'program.makanan_sehat.subtitle': 'Nutrición Equilibrada para Familias Indonesias',
        'program.makanan_sehat.about': 'Acerca del Programa de Alimentación Saludable',
        'program.makanan_sehat.p1': 'El Programa de Alimentación Saludable de Yayasan Persada Bakti Global es una iniciativa para aumentar la conciencia y el acceso de la comunidad a alimentos nutritivos. Este programa proporciona educación nutricional y provisión de alimentos saludables para familias desfavorecidas.',
        'program.makanan_sehat.p2': 'Trabajamos con nutricionistas y trabajadores de la salud para desarrollar menús de alimentos nutritivos y equilibrados. Este programa también incluye consejería sobre la importancia de la nutrición equilibrada y los patrones de alimentación saludables.',
        'program.makanan_sehat.p3': 'Hasta la fecha, el Programa de Alimentación Saludable ha llegado a más de 2.000 familias y ha realizado más de 50 sesiones de consejería nutricional en varias comunidades.',
        'program.makanan_sehat.objectives.1': 'Aumentar la conciencia de la comunidad sobre la importancia de la nutrición equilibrada',
        'program.makanan_sehat.objectives.2': 'Proporcionar acceso a alimentos nutritivos para familias desfavorecidas',
        'program.makanan_sehat.objectives.3': 'Reducir las tasas de desnutrición y retraso en el crecimiento en las comunidades objetivo',
        'program.makanan_sehat.objectives.4': 'Empoderar a las madres en la preparación de alimentos nutritivos',
        'program.makanan_sehat.activities.1.title': 'Provisión de Alimentos Nutritivos',
        'program.makanan_sehat.activities.1.desc': 'Distribución de paquetes de alimentos nutritivos para familias necesitadas',
        'program.makanan_sehat.activities.2.title': 'Consejería Nutricional',
        'program.makanan_sehat.activities.2.desc': 'Educación sobre nutrición equilibrada y patrones de alimentación saludables',
        'program.makanan_sehat.activities.3.title': 'Demostración de Cocina Saludable',
        'program.makanan_sehat.activities.3.desc': 'Demostración de cocina de alimentos saludables con ingredientes locales',
        'program.makanan_sehat.activities.4.title': 'Examen Nutricional',
        'program.makanan_sehat.activities.4.desc': 'Detección del estado nutricional para niños y mujeres embarazadas',
        'program.makanan_sehat.timeline': 'El programa se desarrolla durante todo el año con actividades mensuales',
        'program.makanan_sehat.impact.1.label': 'Familias Alcanzadas',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Sesiones de Consejería',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Paquetes de Alimentos',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu Asociados',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Provisión de alimentos nutritivos para la comunidad',
        'program.makanan_sehat.gallery.2': 'Consejería nutricional y patrones de alimentación saludables',
        'program.makanan_sehat.gallery.3': 'Demostración de cocina de alimentos saludables nutritivos',
        'program.makanan_sehat.gallery.4': 'Examen nutricional para niños y mujeres embarazadas',
        'program.makanan_sehat.reports.1': 'Informe del Programa de Nutrición 2024',
        'program.makanan_sehat.reports.2': 'Evaluación del Impacto Nutricional en las Familias',
        'program.makanan_sehat.reports.3': 'Recetas de Alimentos Saludables Nutritivos',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Makanan Bergizi Gratis (MBG)',
        'program.mbg.subtitle': 'Nutrición para el Futuro de los Niños Indonesios',
        'program.mbg.about': 'Acerca del Programa MBG',
        'program.mbg.p1': 'El Programa de Makanan Bergizi Gratis (MBG) de Yayasan Persada Bakti Global es nuestro compromiso para mejorar la calidad nutricional de la comunidad, especialmente niños y familias desfavorecidas. Este programa proporciona alimentos nutritivos de forma gratuita a quienes los necesitan.',
        'program.mbg.p2': 'Además de la provisión de alimentos, el programa MBG también incluye educación nutricional, conservación del ecosistema de manglares y reforestación costera para crear un entorno saludable y sostenible.',
        'program.mbg.p3': 'Hasta la fecha, el programa MBG ha distribuido más de 10.000 paquetes de alimentos nutritivos y plantado 5.000 árboles de manglar en varias regiones costeras de Indonesia.',
        'program.mbg.objectives.1': 'Proporcionar alimentos nutritivos gratuitos para niños y familias desfavorecidas',
        'program.mbg.objectives.2': 'Mejorar el estado nutricional y de salud de los beneficiarios',
        'program.mbg.objectives.3': 'Conservar el medio ambiente a través de la plantación de manglares',
        'program.mbg.objectives.4': 'Empoderar a las comunidades costeras a través de programas integrados',
        'program.mbg.activities.1.title': 'Distribución de Alimentos Nutritivos',
        'program.mbg.activities.1.desc': 'Distribución de paquetes de alimentos nutritivos a niños y familias',
        'program.mbg.activities.2.title': 'Plantación de Manglares',
        'program.mbg.activities.2.desc': 'Actividades de conservación del ecosistema de manglares en regiones costeras',
        'program.mbg.activities.3.title': 'Educación Nutricional',
        'program.mbg.activities.3.desc': 'Consejería sobre la importancia de la nutrición para el crecimiento infantil',
        'program.mbg.activities.4.title': 'Reforestación Costera',
        'program.mbg.activities.4.desc': 'Plantación de árboles para prevenir la erosión costera',
        'program.mbg.timeline': 'El programa MBG se desarrolla durante todo el año con distribución semanal',
        'program.mbg.impact.1.label': 'Paquetes de Alimentos',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Árboles de Manglar',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Niños Beneficiados',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Aldeas Costeras',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribución de alimentos nutritivos a la comunidad',
        'program.mbg.gallery.2': 'Actividades de plantación de manglares para la conservación ambiental',
        'program.mbg.gallery.3': 'Educación nutricional para madres y niños',
        'program.mbg.gallery.4': 'Reforestación costera para prevenir la erosión',
        'program.mbg.reports.1': 'Informe del Programa MBG 2024',
        'program.mbg.reports.2': 'Impacto Nutricional en Niños Beneficiarios de MBG',
        'program.mbg.reports.3': 'Documentación de Plantación de Manglares',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Mandi Cuci Kakus (MCK)',
        'program.mck.subtitle': 'Saneamiento Adecuado para la Salud Ambiental',
        'program.mck.about': 'Acerca del Programa MCK',
        'program.mck.p1': 'El Programa MCK (Mandi, Cuci, Kakus) de Yayasan Persada Bakti Global se centra en la construcción de instalaciones de saneamiento adecuadas para mejorar la salud ambiental y la calidad de vida de la comunidad.',
        'program.mck.p2': 'Construimos MCK públicos equipados con agua limpia, estaciones de lavado de manos y baños higiénicos. Este programa también incluye educación sobre la importancia de la limpieza y el saneamiento para prevenir enfermedades.',
        'program.mck.p3': 'Hasta la fecha, YPBG ha construido 25 unidades de MCK que sirven a más de 5.000 residentes en varias regiones, reduciendo significativamente las tasas de enfermedades debido al saneamiento deficiente.',
        'program.mck.objectives.1': 'Proporcionar instalaciones de saneamiento adecuadas para la comunidad',
        'program.mck.objectives.2': 'Aumentar la conciencia sobre la importancia de la limpieza y el saneamiento',
        'program.mck.objectives.3': 'Reducir las tasas de enfermedades debido al saneamiento deficiente',
        'program.mck.objectives.4': 'Promover comportamientos de vida limpios y saludables',
        'program.mck.activities.1.title': 'Construcción de MCK',
        'program.mck.activities.1.desc': 'Construcción de instalaciones públicas de MCK con estándares higiénicos',
        'program.mck.activities.2.title': 'Educación de Saneamiento',
        'program.mck.activities.2.desc': 'Consejería sobre la importancia del saneamiento y la limpieza',
        'program.mck.activities.3.title': 'Lavado de Manos',
        'program.mck.activities.3.desc': 'Promoción del lavado de manos con jabón para prevenir enfermedades',
        'program.mck.activities.4.title': 'Mantenimiento de MCK',
        'program.mck.activities.4.desc': 'Capacitación en gestión y mantenimiento de instalaciones de MCK',
        'program.mck.timeline': 'La construcción de MCK se completa en 2-3 meses por unidad',
        'program.mck.impact.1.label': 'Unidades de MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Residentes Beneficiados',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Reducción de Enfermedades',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Aldeas Servidas',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Construcción de instalaciones de MCK para la comunidad',
        'program.mck.gallery.2': 'Educación de limpieza y saneamiento',
        'program.mck.gallery.3': 'Instalaciones de MCK completadas',
        'program.mck.gallery.4': 'Socialización del lavado de manos con jabón',
        'program.mck.reports.1': 'Informe del Programa de Saneamiento 2024',
        'program.mck.reports.2': 'Impacto de MCK en la Salud Comunitaria',
        'program.mck.reports.3': 'Guía de Gestión de MCK Comunal',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Programa de Panti Asuhan',
        'program.panti_asuhan.subtitle': 'Amor para Niños Huérfanos y Desfavorecidos',
        'program.panti_asuhan.about': 'Acerca del Programa de Orfanato',
        'program.panti_asuhan.p1': 'El Programa de Panti Asuhan de Yayasan Persada Bakti Global es nuestra forma de cuidado para niños huérfanos y desfavorecidos. Este programa proporciona asistencia en forma de alimentos, ropa, educación e instalaciones para orfanatos.',
        'program.panti_asuhan.p2': 'Trabajamos con varios orfanatos para asegurar que los niños reciban cuidado y educación adecuados. Este programa también incluye actividades recreativas, tutoría y desarrollo de talentos para niños.',
        'program.panti_asuhan.p3': 'Hasta la fecha, YPBG ha ayudado a 20 orfanatos con un total de más de 500 niños beneficiándose de este programa, dándoles esperanza y un futuro mejor.',
        'program.panti_asuhan.objectives.1': 'Proporcionar necesidades básicas para niños huérfanos y desfavorecidos',
        'program.panti_asuhan.objectives.2': 'Apoyar la educación y el desarrollo de talentos de los niños',
        'program.panti_asuhan.objectives.3': 'Brindar amor y atención a los niños',
        'program.panti_asuhan.objectives.4': 'Mejorar la calidad de las instalaciones del orfanato',
        'program.panti_asuhan.activities.1.title': 'Asistencia Periódica',
        'program.panti_asuhan.activities.1.desc': 'Distribución de asistencia de alimentos, ropa y necesidades básicas',
        'program.panti_asuhan.activities.2.title': 'Tutoría',
        'program.panti_asuhan.activities.2.desc': 'Tutoría y ayuda con las lecciones para niños del orfanato',
        'program.panti_asuhan.activities.3.title': 'Actividades Recreativas',
        'program.panti_asuhan.activities.3.desc': 'Actividades al aire libre y divertidas para niños',
        'program.panti_asuhan.activities.4.title': 'Desarrollo de Talentos',
        'program.panti_asuhan.activities.4.desc': 'Capacitación en arte, deportes y habilidades para niños',
        'program.panti_asuhan.timeline': 'El programa se desarrolla durante todo el año con visitas mensuales',
        'program.panti_asuhan.impact.1.label': 'Orfanatos Asociados',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Niños Beneficiados',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Distribuciones de Asistencia',
        'program.panti_asuhan.impact.3.value': '24x/año',
        'program.panti_asuhan.impact.4.label': 'Voluntarios',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribución de asistencia para orfanatos',
        'program.panti_asuhan.gallery.2': 'Actividades recreativas y tutoría',
        'program.panti_asuhan.gallery.3': 'Foto grupal con niños del orfanato',
        'program.panti_asuhan.gallery.4': 'Actividades de desarrollo de talentos y arte',
        'program.panti_asuhan.reports.1': 'Informe del Programa de Orfanato 2024',
        'program.panti_asuhan.reports.2': 'Perfil de Niños Destacados del Orfanato',
        'program.panti_asuhan.reports.3': 'Documentación de Actividades del Orfanato',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Programa de Tratamiento Médico',
        'program.pengobatan.subtitle': 'Servicios de Salud para la Comunidad',
        'program.pengobatan.about': 'Acerca del Programa de Tratamiento Médico',
        'program.pengobatan.p1': 'El Programa de Tratamiento Médico de Yayasan Persada Bakti Global proporciona servicios de salud gratuitos para comunidades desfavorecidas. Este programa incluye exámenes de salud generales, tratamiento gratuito y consejería de salud.',
        'program.pengobatan.p2': 'Trabajamos con médicos, enfermeras y profesionales de la salud para proporcionar servicios médicos de calidad. Este programa también incluye distribución gratuita de medicamentos y exámenes de salud periódicos.',
        'program.pengobatan.p3': 'Hasta la fecha, el Programa de Tratamiento Médico YPBG ha atendido a más de 3.000 pacientes y realizado más de 40 actividades de servicio social de salud en varias regiones, proporcionando acceso a la salud para quienes lo necesitan.',
        'program.pengobatan.objectives.1': 'Proporcionar acceso a servicios de salud para comunidades desfavorecidas',
        'program.pengobatan.objectives.2': 'Aumentar la conciencia sobre la importancia de la salud preventiva',
        'program.pengobatan.objectives.3': 'Proporcionar medicamentos gratuitos para quienes los necesitan',
        'program.pengobatan.objectives.4': 'Construir asociaciones con profesionales de la salud',
        'program.pengobatan.activities.1.title': 'Servicio Social de Salud',
        'program.pengobatan.activities.1.desc': 'Servicios de examen y tratamiento gratuitos',
        'program.pengobatan.activities.2.title': 'Examen de Salud',
        'program.pengobatan.activities.2.desc': 'Detección de salud general y enfermedades no transmisibles',
        'program.pengobatan.activities.3.title': 'Distribución de Medicamentos',
        'program.pengobatan.activities.3.desc': 'Distribución de medicamentos gratuitos para pacientes',
        'program.pengobatan.activities.4.title': 'Consejería de Salud',
        'program.pengobatan.activities.4.desc': 'Educación sobre estilos de vida saludables y prevención de enfermedades',
        'program.pengobatan.timeline': 'Las actividades de servicio social de salud se realizan mensualmente',
        'program.pengobatan.impact.1.label': 'Pacientes Atendidos',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Servicios de Salud',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Medicamentos Distribuidos',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Profesionales de la Salud Asociados',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Servicios de tratamiento médico gratuito para la comunidad',
        'program.pengobatan.gallery.2': 'Examen de salud por el equipo médico',
        'program.pengobatan.gallery.3': 'Consejería de salud y distribución gratuita de medicamentos',
        'program.pengobatan.gallery.4': 'Servicio social de salud en áreas remotas',
        'program.pengobatan.reports.1': 'Informe del Programa de Salud 2024',
        'program.pengobatan.reports.2': 'Estadísticas de Pacientes y Enfermedades',
        'program.pengobatan.reports.3': 'Documentación del Servicio Social de Salud',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Programa de Rumah Ibadat',
        'program.rumah_ibadat.subtitle': 'Instalaciones de Culto para Comunidades Religiosas',
        'program.rumah_ibadat.about': 'Acerca del Programa de Casa de Culto',
        'program.rumah_ibadat.p1': 'El Programa de Rumah Ibadat de Yayasan Persada Bakti Global es nuestro compromiso para apoyar las instalaciones de culto para la comunidad. Construimos y renovamos mezquitas, salas de oración, iglesias, templos y viharas para apoyar las necesidades espirituales de la comunidad.',
        'program.rumah_ibadat.p2': 'Cada construcción de casa de culto se realiza considerando las necesidades de la comunidad local y los estándares de construcción adecuados. Este programa también incluye la provisión de instalaciones de apoyo como áreas de ablución, baños y bibliotecas.',
        'program.rumah_ibadat.p3': 'Hasta la fecha, YPBG ha construido y renovado 15 casas de culto en varias regiones, proporcionando lugares de culto adecuados para miles de congregaciones.',
        'program.rumah_ibadat.objectives.1': 'Proporcionar instalaciones de culto adecuadas para la comunidad',
        'program.rumah_ibadat.objectives.2': 'Apoyar las necesidades espirituales de las comunidades religiosas',
        'program.rumah_ibadat.objectives.3': 'Preservar las casas de culto como centros comunitarios',
        'program.rumah_ibadat.objectives.4': 'Construir tolerancia y armonía entre las comunidades religiosas',
        'program.rumah_ibadat.activities.1.title': 'Construcción de Casa de Culto',
        'program.rumah_ibadat.activities.1.desc': 'Nueva construcción de lugares de culto para comunidades',
        'program.rumah_ibadat.activities.2.title': 'Renovación',
        'program.rumah_ibadat.activities.2.desc': 'Reparación y renovación de casas de culto dañadas',
        'program.rumah_ibadat.activities.3.title': 'Instalaciones de Apoyo',
        'program.rumah_ibadat.activities.3.desc': 'Construcción de áreas de ablución, baños y bibliotecas',
        'program.rumah_ibadat.activities.4.title': 'Actividades Religiosas',
        'program.rumah_ibadat.activities.4.desc': 'Apoyo a actividades religiosas y sociales en casas de culto',
        'program.rumah_ibadat.timeline': 'Los proyectos de construcción se completan en 4-8 meses',
        'program.rumah_ibadat.impact.1.label': 'Casas de Culto',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congregación Beneficiaria',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Aldeas Servidas',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Voluntarios',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Construcción de casas de culto para la comunidad',
        'program.rumah_ibadat.gallery.2': 'Foto grupal con la congregación después de la inauguración',
        'program.rumah_ibadat.gallery.3': 'Actividades religiosas en la casa de culto',
        'program.rumah_ibadat.gallery.4': 'Instalaciones de apoyo para casas de culto',
        'program.rumah_ibadat.reports.1': 'Informe del Programa de Casa de Culto 2024',
        'program.rumah_ibadat.reports.2': 'Documentación de Construcción y Renovación',
        'program.rumah_ibadat.reports.3': 'Perfil de Casa de Culto Asociada',
    },

    'pt-br': {
        // Header & Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.programs': 'Programas',
        'nav.news': 'Notícias',
        'nav.contact': 'Contato',
        'lang.select': 'Selecione o idioma',
        'skiplink': 'Pular para conteúdo principal',
        
        // Hero Section
        'hero.title': 'Servindo com amor,<br>construindo com esperança.',
        'hero.subtitle': 'Yayasan Persada Bakti Global se compromete com a assistência social humanitária sustentável.',
        'hero.btn.about': 'Conheça Nossa Fundação',
        'hero.btn.contact': 'Entre em Contato',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'Sobre Nós',
        'highlight.about.desc': 'História e Visão',
        'highlight.programs.title': 'Programas',
        'highlight.programs.desc': 'Impacto Real',
        'highlight.news.title': 'Publicações',
        'highlight.news.desc': 'Relatórios e Notícias',

        // About Section
        'about.title': 'Sobre a Fundação',
        'about.vision': 'Visão',
        'about.vision.desc': 'Ser uma organização líder em empoderamento comunitário e desenvolvimento sustentável.',
        'about.mission': 'Missão',
        'about.mission.li1': 'Empoderar através de educação e treinamento',
        'about.mission.li2': 'Promover inovação social',
        'about.mission.li3': 'Construir parcerias estratégicas',
        'about.values': 'Valores Fundamentais',
        'about.values.love': 'Amor',
        'about.values.integrity': 'Integridade',
        'about.values.hope': 'Esperança',
        'about.values.collaboration': 'Colaboração',
        'about.org': 'Estrutura Organizacional',
        'about.gallery': 'Galeria de Atividades',
        'carousel.prev': 'Anterior',
        'carousel.next': 'Próximo',
        
        // Programs Section
        'programs.title': 'Programas e Atividades',
        'programs.filter.all': 'Todos',
        'programs.filter.scholarship': 'Bolsa',
        'programs.filter.infrastructure': 'Infraestrutura',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programa de Bolsas',
        'programs.scholarship.desc': 'Suporte educacional completo para alunos de alto desempenho.',
        'programs.infrastructure': 'Desenvolvimento de Infraestrutura',
        'programs.infrastructure.desc': 'Estradas rurais e instalações públicas para comunidades.',
        'programs.mbg': 'Refeições Nutritivas Gratuitas (MBG)',
        'programs.mbg.desc': 'Conservação do ecossistema de mangue e reflorestamento costeiro.',
        'programs.irrigation': 'Reforma Residencial',
        'programs.irrigation.desc': 'Transformação de espaços de vida dignos.',
        'programs.learn': 'Saiba mais →',
        
        // News Section
        'news.title': 'Notícias e Publicações',
        'news.loadmore': 'Carregar Mais',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Entre em Contato',
        'contact.form.title': 'Enviar Mensagem',
        'contact.form.name': 'Nome',
        'contact.form.name.placeholder': 'Nome Completo',
        'contact.form.email': 'Email',
        'contact.form.email.placeholder': 'email@exemplo.com',
        'contact.form.message': 'Mensagem',
        'contact.form.message.placeholder': 'Digite sua mensagem...',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.info.title': 'Informações de Contato',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Telefone',
        'contact.info.address': 'Endereço',
        'contact.info.address.text': 'Rua Persada Bakti No.123, Jakarta',
        
        // Footer
        'footer.about': 'Sobre YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global se dedica à Assistência Humanitária Social.',
        'footer.nav': 'Navegação',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos e Condições',
        'footer.language': 'Idioma',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Todos os direitos reservados.',

        // Organization Structure
        'about.org.chairman': 'Presidente do Conselho',
        'about.org.ceo': 'Diretor Executivo',
        'about.org.secretary': 'Secretário',
        'about.org.treasurer': 'Tesoureiro',
        'about.org.programs': 'Programas',
        'about.org.finance': 'Finanças',
        'about.org.pr': 'Relações Públicas',

        // News Common Keys
        'news.date': 'Data',
        'news.author': 'Equipe YPBG',
        'news.views': 'Visualizações',
        'news.gallery': '📸 Documentação Fotográfica',
        'news.about': '📖 Sobre',
        'news.back': 'Voltar às Notícias',
        'news.readmore': 'Leia Mais →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Programa de Bolsas 2024 Aberto',
        'news.1.excerpt': 'YPBG abre inscrições para programa de bolsas educacionais...',
        'news.1.category': 'Educação',
        'news.1.video': '🎥 Vídeo do Programa',
        'news.1.about': '📖 Sobre o Programa de Bolsas',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) abre oficialmente as inscrições para o Programa de Bolsas 2024 para estudantes de alto desempenho de famílias carentes em toda a Indonésia. Este programa é o compromisso da YPBG de melhorar a qualidade da educação para a geração mais jovem da Indonésia.',
        'news.1.p2': 'O Programa de Bolsas YPBG fornece suporte educacional completo incluindo taxas escolares, livros, uniformes e mesadas mensais. Até o momento, o programa de bolsas YPBG ajudou mais de 500 estudantes a completar sua educação com uma taxa de graduação de 100%.',
        'news.1.p3': 'As inscrições para o Programa de Bolsas 2024 estão abertas até 31 de março de 2024. Os requisitos de inscrição incluem: (1) Estudantes do Ensino Fundamental/Médio com conquistas, (2) De famílias carentes, (3) Alto espírito de aprendizado, e (4) Recomendação escolar.',
        'news.1.gallery.1': '🎓 Distribuição de auxílio de bolsas para estudantes de alto desempenho',
        'news.1.gallery.2': '👨‍🎓 Foto em grupo com bolsistas e equipe YPBG',
        'news.1.gallery.3': '📚 Sessões de tutoria para bolsistas',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Atividade de Limpeza de Praia',
        'news.2.excerpt': 'Centenas de voluntários da YPBG limparam com sucesso 5 km de praia...',
        'news.2.category': 'Meio Ambiente',
        'news.2.video': '🎥 Vídeo da Atividade',
        'news.2.about': '📖 Sobre a Limpeza de Praia',
        'news.2.p1': 'Centenas de voluntários da Yayasan Persada Bakti Global (YPBG) limparam com sucesso 5 km de costa de resíduos plásticos e outros resíduos em uma atividade de limpeza de praia realizada no domingo, 10 de fevereiro de 2024.',
        'news.2.p2': 'A atividade de limpeza de praia contou com a participação de mais de 300 voluntários compostos por membros da YPBG, estudantes, alunos e comunidades locais. Com alto espírito de cooperação mútua, os voluntários trabalharam desde a manhã limpando vários tipos de resíduos trazidos para a praia.',
        'news.2.p3': 'Os resíduos coletados chegaram a 2 toneladas, compostos de resíduos plásticos, garrafas e outros resíduos domésticos. Estes resíduos foram então classificados e gerenciados de acordo com o tipo para reciclagem ou descartados de maneira ecológica.',
        'news.2.p4': 'Além da limpeza da praia, esta atividade também incluiu o plantio de 1.000 mudas de mangue para prevenir a abrasão costeira e preservar os ecossistemas marinhos. A YPBG está comprometida em continuar realizando atividades semelhantes para manter a sustentabilidade do ambiente costeiro da Indonésia.',
        'news.2.stat.relawan': 'Voluntários',
        'news.2.stat.pantai': 'km Praia',
        'news.2.stat.sampah': 'toneladas Resíduos',
        'news.2.stat.mangrove': 'Mudas de Mangue',
        'news.2.gallery.1': '🧹 Voluntários limpando resíduos na praia',
        'news.2.gallery.2': '🌱 Plantando mudas de mangue para prevenir abrasão',
        'news.2.gallery.3': '👥 Foto em grupo com voluntários após a atividade',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Campanha de Vacinação Gratuita',
        'news.3.excerpt': 'YPBG realiza campanha de vacinação gratuita em 20 aldeias...',
        'news.3.category': 'Saúde',
        'news.3.video': '🎥 Vídeo da Campanha',
        'news.3.about': '���� Sobre a Campanha de Vacinação',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) realizou uma campanha de vacinação gratuita em 20 aldeias em várias regiões da Indonésia na segunda-feira, 5 de fevereiro de 2024. Este programa é parte do compromisso da YPBG de melhorar o acesso à saúde para comunidades carentes.',
        'news.3.p2': 'Esta campanha de vacinação fornece vários tipos de vacunas gratuitas incluindo vacina COVID-19, vacina contra influenza e vacina contra hepatite B. Todos os serviços são fornecidos gratuitamente para quem precisa.',
        'news.3.p3': 'Esta atividade foi realizada em colaboração com o Departamento de Saúde local e envolveu 50 profissionais médicos compostos por médicos, enfermeiros e parteiras. A YPBG tem como objetivo atender 5.000 receptores de vacinas nesta campanha.',
        'news.3.p4': 'Além da vacinação, esta atividade também inclui aconselhamento de saúde e exames de saúde gratuitos. A comunidade pode consultar diretamente com os médicos sobre seus problemas de saúde.',
        'news.3.quote': 'A saúde é direito de todo ser humano. Estamos comprometidos em garantir que comunidades carentes também tenham acesso decente à saúde.',
        'news.3.quote.author': 'Diretor YPBG',
        'news.3.vaccines': '📋 Vacinas Disponíveis',
        'news.3.vaccine.1': 'Vacina COVID-19 - Protege do coronavírus',
        'news.3.vaccine.2': 'Vacina contra Influenza - Previne gripe sazonal',
        'news.3.vaccine.3': 'Vacina contra Hepatite B - Protege o fígado de infecções',
        'news.3.gallery.1': '💉 Processo de vacinação por profissionais médicos',
        'news.3.gallery.2': '👥 Comunidade fazendo fila para obter vacinação gratuita',
        'news.3.gallery.3': '🩺 Aconselhamento de saúde para comunidades aldeãs'
    },

    'en-uk': {
        // Header & Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.programs': 'Programmes',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'lang.select': 'Select language',
        'skiplink': 'Skip to main content',
        
        // Hero Section
        'hero.title': 'Serving with love,<br>building with hope.',
        'hero.subtitle': 'Yayasan Persada Bakti Global is committed to sustainable humanitarian social assistance.',
        'hero.btn.about': 'Know Our Foundation',
        'hero.btn.contact': 'Contact Us',

        // Home Highlights
        'highlight.about.title': 'About Us',
        'highlight.about.desc': 'History & Vision',
        'highlight.programs.title': 'Programmes',
        'highlight.programs.desc': 'Real Impact',
        'highlight.news.title': 'Publications',
        'highlight.news.desc': 'Reports & News',

        // About Section
        'about.title': 'About Foundation',
        'about.vision': 'Vision',
        'about.vision.desc': 'To be a leading organisation in community empowerment and sustainable development.',
        'about.mission': 'Mission',
        'about.mission.li1': 'Empower through education and training',
        'about.mission.li2': 'Promote social innovation',
        'about.mission.li3': 'Build strategic partnerships',
        'about.values': 'Core Values',
        'about.values.love': 'Love',
        'about.values.integrity': 'Integrity',
        'about.values.hope': 'Hope',
        'about.values.collaboration': 'Collaboration',
        'about.org': 'Organisational Structure',
        'about.gallery': 'Activity Gallery',
        'carousel.prev': 'Previous',
        'carousel.next': 'Next',
        
        // Programs Section
        'programs.title': 'Programmes & Activities',
        'programs.filter.all': 'All',
        'programs.filter.scholarship': 'Scholarship',
        'programs.filter.infrastructure': 'Infrastructure',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Scholarship Programme',
        'programs.scholarship.desc': 'Full educational support for high-achieving students.',
        'programs.infrastructure': 'Infrastructure Development',
        'programs.infrastructure.desc': 'Village roads and public facilities for communities.',
        'programs.mbg': 'Free Nutritious Meals (MBG)',
        'programs.mbg.desc': 'Mangrove ecosystem conservation and coastal reforestation.',
        'programs.irrigation': 'House Renovation',
        'programs.irrigation.desc': 'Transformation of decent living spaces.',
        'programs.learn': 'Learn more →',
        
        // News Section
        'news.title': 'News & Publications',
        'news.loadmore': 'Load More',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Contact Us',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.name.placeholder': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.email.placeholder': 'email@example.com',
        'contact.form.message': 'Message',
        'contact.form.message.placeholder': 'Type your message...',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.info.address': 'Address',
        'contact.info.address.text': 'Persada Bakti St. No.123, Jakarta',
        
        // Footer
        'footer.about': 'About YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global is dedicated to Social Humanitarian Assistance.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.language': 'Language',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). All rights reserved.',
        
        // Organization Structure
        'about.org.chairman': 'Board Chair',
        'about.org.ceo': 'Chief Executive Officer',
        'about.org.secretary': 'Secretary',
        'about.org.treasurer': 'Treasurer',
        'about.org.programs': 'Programmes',
        'about.org.finance': 'Finance',
        'about.org.pr': 'Public Relations'
    },

    'pt-br': {
        // Header & Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.programs': 'Programas',
        'nav.news': 'Notícias',
        'nav.contact': 'Contato',
        'lang.select': 'Selecione o idioma',
        'skiplink': 'Pular para conteúdo principal',
        'hero.title': 'Servindo com amor,<br>construindo com esperança.',
        'hero.subtitle': 'Yayasan Persada Bakti Global se compromete com a assistência social humanitária sustentável.',
        'hero.btn.about': 'Conheça Nossa Fundação',
        'hero.btn.contact': 'Entre em Contato',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'Sobre Nós',
        'highlight.about.desc': 'História e Visão',
        'highlight.programs.title': 'Programas',
        'highlight.programs.desc': 'Impacto Real',
        'highlight.news.title': 'Publicações',
        'highlight.news.desc': 'Relatórios e Notícias',
        'about.title': 'Sobre a Fundação',
        'about.vision': 'Visão',
        'about.vision.desc': 'Ser uma organização líder em empoderamento comunitário e desenvolvimento sustentável.',
        'about.mission': 'Missão',
        'about.mission.li1': 'Empoderar através de educação e treinamento',
        'about.mission.li2': 'Promover inovação social',
        'about.mission.li3': 'Construir parcerias estratégicas',
        'about.values': 'Valores Fundamentais',
        'about.values.love': 'Amor',
        'about.values.integrity': 'Integridade',
        'about.values.hope': 'Esperança',
        'about.values.collaboration': 'Colaboração',
        'about.org': 'Estrutura Organizacional',
        'about.gallery': 'Galeria de Atividades',
        'carousel.prev': 'Anterior',
        'carousel.next': 'Próximo',
        'about.program': 'Sobre Programa',
        'program.documents': 'Documentos do Programa',
        'program.gallery': 'Galeria de Atividades',
        'back.to.programs': 'Voltar aos Programas',
        'document.proposal': 'Proposta do Programa',
        'document.report': 'Relatório de Trabalho',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'Programas e Atividades',
        'programs.filter.all': 'Todos',
        'programs.filter.scholarship': 'Bolsa',
        'programs.filter.infrastructure': 'Infraestrutura',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'Saúde',
        'programs.filter.social': 'Social',
        'programs.scholarship': 'Programa de Bolsa',
        'programs.scholarship.desc': 'Apoio educacional completo para estudantes de alto desempenho.',
        'programs.infrastructure': 'Desenvolvimento de Infraestrutura',
        'programs.infrastructure.desc': 'Estradas rurais e instalações públicas para comunidades.',
        'programs.mbg': 'Refeições Nutritivas Grátis (MBG)',
        'programs.mbg.desc': 'Conservação do ecossistema de manguezais e reflorestamento costeiro.',
        'programs.irrigation': 'Irrigação',
        'programs.irrigation.desc': 'Construção de sistemas de irrigação para agricultura comunitária.',
        'programs.healthy_food': 'Comida Saudável',
        'programs.healthy_food.desc': 'Fornecimento de comida nutritiva para necessitados.',
        'programs.mck': 'Banho, Lavagem, Banheiro (MCK)',
        'programs.mck.desc': 'Construção de instalações MCK para saúde ambiental.',
        'programs.worship_house': 'Casa de Adoração',
        'programs.worship_house.desc': 'Construção e renovação de locais de adoração.',
        'programs.orphanage': 'Orfanato',
        'programs.orphanage.desc': 'Ajuda e apoio para orfanatos.',
        'programs.medical': 'Tratamento Médico',
        'programs.medical.desc': 'Serviços médicos gratuitos para comunidades desfavorecidas.',
        'programs.learn': 'Saiba mais →',
        'news.title': 'Notícias e Publicações',
        'news.loadmore': 'Carregar Mais',
        'news.readmore': 'Leia Mais →',
        'contact.title': 'Contate-Nos',
        'contact.form.title': 'Enviar Mensagem',
        'contact.form.name': 'Nome',
        'contact.form.name.placeholder': 'Nome Completo',
        'contact.form.email': 'E-mail',
        'contact.form.email.placeholder': 'exemplo@dominio.com',
        'contact.form.message': 'Mensagem',
        'contact.form.message.placeholder': 'Digite sua mensagem...',
        'contact.form.submit': 'Enviar Mensagem',
        'contact.info.title': 'Informações de Contato',
        'contact.info.email': 'E-mail',
        'contact.info.phone': 'Telefone',
        'contact.info.address': 'Endereço',
        'contact.info.address.text': 'Rua Persada Bakti No.123, Jakarta',
        'footer.about': 'Sobre YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global é dedicada à Assistência Humanitária Social.',
        'footer.nav': 'Navegação',
        'footer.legal': 'Legal',
        'footer.privacy': 'Política de Privacidade',
        'footer.terms': 'Termos e Condições',
        'footer.language': 'Idioma',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Todos os direitos reservados.',
        'about.org.chairman': 'Presidente do Conselho',
        'about.org.ceo': 'Diretor Executivo',
        'about.org.secretary': 'Secretário',
        'about.org.treasurer': 'Tesoureiro',
        'about.org.programs': 'Programas',
        'about.org.finance': 'Finanças',
        'about.org.pr': 'Relações Públicas',

        // Program Detail Pages - Back Button
        'program.back': 'Voltar aos Programas',

        // Program 1: Beasiswa
        'program.beasiswa.title': 'Programa de Bolsas',
        'program.beasiswa.subtitle': 'Apoiando a Educação da Geração Jovem da Indonésia',
        'program.beasiswa.about': 'Sobre Programa de Bolsas',
        'program.beasiswa.p1': 'O Programa de Bolsas da Yayasan Persada Bakti Global é nosso compromisso de melhorar a qualidade da educação para a geração mais jovem da Indonésia.',
        'program.beasiswa.p2': 'Cada bolsista recebe apoio completo incluindo taxas escolares, livros, uniformes e mesadas mensais.',
        'program.beasiswa.p3': 'Até hoje, o Programa de Bolsas YPBG ajudou mais de 500 estudantes com taxa de graduação de 100%.',
        'program.beasiswa.objectives.1': 'Fornecer acesso à educação de qualidade para estudantes de alto desempenho',
        'program.beasiswa.objectives.2': 'Melhorar taxas de graduação e desempenho acadêmico',
        'program.beasiswa.objectives.3': 'Construir caráter e liderança através de mentoria',
        'program.beasiswa.objectives.4': 'Criar gerações que contribuam positivamente para a sociedade',
        'program.beasiswa.activities.1.title': 'Distribuição de Bolsas',
        'program.beasiswa.activities.1.desc': 'Distribuição simbólica de bolsas para estudantes',
        'program.beasiswa.activities.2.title': 'Tutoria',
        'program.beasiswa.activities.2.desc': 'Orientação acadêmica para melhorar desempenho',
        'program.beasiswa.activities.3.title': 'Desenvolvimento de Caráter',
        'program.beasiswa.activities.3.desc': 'Workshops de liderança para bolsistas',
        'program.beasiswa.activities.4.title': 'Encontro de Alumni',
        'program.beasiswa.activities.4.desc': 'Reuniões com antigos alunos',
        'program.beasiswa.timeline': 'Programa anual com avaliações semestrais',
        'program.beasiswa.impact.1.label': 'Estudantes Ajudados',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Graduação',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Para Universidade',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Anos',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Distribuição de bolsas para estudantes',
        'program.beasiswa.gallery.2': 'Foto com bolsistas e equipe YPBG',
        'program.beasiswa.gallery.3': 'Sessões de tutoria',
        'program.beasiswa.gallery.4': 'Workshop de liderança',
        'program.beasiswa.reports.1': 'Relatório Anual de Bolsas 2024',
        'program.beasiswa.reports.2': 'Avaliação Semestral 2024',
        'program.beasiswa.reports.3': 'Perfil de Alumni',

        // Program 2: Infrastruktur
        'program.infrastruktur.title': 'Desenvolvimento de Infraestrutura',
        'program.infrastruktur.subtitle': 'Construindo Instalações Públicas',
        'program.infrastruktur.about': 'Sobre Infraestrutura',
        'program.infrastruktur.p1': 'O Programa de Infraestrutura foca em desenvolver instalações públicas que apoiem a economia comunitária.',
        'program.infrastruktur.p2': 'Cada projeto considera necessidades de longo prazo e impacto ambiental.',
        'program.infrastruktur.p3': 'YPBG completou mais de 50 km de estradas e 10 pontes.',
        'program.infrastruktur.objectives.1': 'Melhorar acesso a instalações públicas',
        'program.infrastruktur.objectives.2': 'Promover crescimento econômico local',
        'program.infrastruktur.objectives.3': 'Construir infraestrutura sustentável',
        'program.infrastruktur.objectives.4': 'Fortalecer parcerias locais',
        'program.infrastruktur.activities.1.title': 'Estradas Rurais',
        'program.infrastruktur.activities.1.desc': 'Construção de estradas rurais',
        'program.infrastruktur.activities.2.title': 'Pontes',
        'program.infrastruktur.activities.2.desc': 'Construção de pontes',
        'program.infrastruktur.activities.3.title': 'Drenagem',
        'program.infrastruktur.activities.3.desc': 'Sistemas de drenagem',
        'program.infrastruktur.activities.4.title': 'Instalações Públicas',
        'program.infrastruktur.activities.4.desc': 'Salões comunitários',
        'program.infrastruktur.timeline': 'Projetos de 6-12 meses',
        'program.infrastruktur.impact.1.label': 'Km Estradas',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Pontes',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Vilas',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Beneficiários',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Construção de estradas',
        'program.infrastruktur.gallery.2': 'Foto após completar projeto',
        'program.infrastruktur.gallery.3': 'Construção de pontes',
        'program.infrastruktur.gallery.4': 'Sistema de drenagem',
        'program.infrastruktur.reports.1': 'Relatório de Infraestrutura 2024',
        'program.infrastruktur.reports.2': 'Avaliação de Impacto',
        'program.infrastruktur.reports.3': 'Documentação de Projetos',

        // Program 3: Irigasi
        'program.irigasi.title': 'Programa de Irrigação',
        'program.irigasi.subtitle': 'Irrigando Campos para Segurança Alimentar',
        'program.irigasi.about': 'Sobre Irrigação',
        'program.irigasi.p1': 'O Programa de Irrigação foca em construção e reabilitação de sistemas de irrigação.',
        'program.irigasi.p2': 'Construímos canais, pequenas represas e sistemas de bombas.',
        'program.irigasi.p3': 'YPBG construiu mais de 30 km de canais irrigando 500 hectares.',
        'program.irigasi.objectives.1': 'Aumentar produtividade agrícola',
        'program.irigasi.objectives.2': 'Otimizar recursos hídricos',
        'program.irigasi.objectives.3': 'Aumentar renda de agricultores',
        'program.irigasi.objectives.4': 'Sistemas de irrigação sustentáveis',
        'program.irigasi.activities.1.title': 'Canais de Irrigação',
        'program.irigasi.activities.1.desc': 'Construção de canais',
        'program.irigasi.activities.2.title': 'Reabilitação',
        'program.irigasi.activities.2.desc': 'Reparo de sistemas existentes',
        'program.irigasi.activities.3.title': 'Bombas de Água',
        'program.irigasi.activities.3.desc': 'Instalação de bombas',
        'program.irigasi.activities.4.title': 'Treinamento',
        'program.irigasi.activities.4.desc': 'Educação em gestão de água',
        'program.irigasi.timeline': 'Projetos de 3-6 meses',
        'program.irigasi.impact.1.label': 'Km Canais',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hectares',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Agricultores',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Aumento',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Construção de canais',
        'program.irigasi.gallery.2': 'Foto com agricultores',
        'program.irigasi.gallery.3': 'Sistema de bombas',
        'program.irigasi.gallery.4': 'Treinamento de agricultores',
        'program.irigasi.reports.1': 'Relatório de Irrigação 2024',
        'program.irigasi.reports.2': 'Estudo de Impacto',
        'program.irigasi.reports.3': 'Guia de Gestão',

        // Program 4: Makanan Sehat
        'program.makanan_sehat.title': 'Alimentação Saudável',
        'program.makanan_sehat.subtitle': 'Nutrição Equilibrada para Famílias',
        'program.makanan_sehat.about': 'Sobre Alimentação Saudável',
        'program.makanan_sehat.p1': 'Programa para aumentar consciência e acesso a alimentos nutritivos.',
        'program.makanan_sehat.p2': 'Trabalhamos com nutricionistas para menus equilibrados.',
        'program.makanan_sehat.p3': 'Alcançamos mais de 2.000 famílias com 50+ sessões.',
        'program.makanan_sehat.objectives.1': 'Consciência sobre nutrição equilibrada',
        'program.makanan_sehat.objectives.2': 'Acesso a alimentos nutritivos',
        'program.makanan_sehat.objectives.3': 'Reduzir desnutrição',
        'program.makanan_sehat.objectives.4': 'Empoderar mães',
        'program.makanan_sehat.activities.1.title': 'Alimentos Nutritivos',
        'program.makanan_sehat.activities.1.desc': 'Distribuição de pacotes',
        'program.makanan_sehat.activities.2.title': 'Aconselhamento',
        'program.makanan_sehat.activities.2.desc': 'Educação nutricional',
        'program.makanan_sehat.activities.3.title': 'Cozinha Saudável',
        'program.makanan_sehat.activities.3.desc': 'Demonstrações de culinária',
        'program.makanan_sehat.activities.4.title': 'Avaliação',
        'program.makanan_sehat.activities.4.desc': 'Triagem nutricional',
        'program.makanan_sehat.timeline': 'Programa anual com atividades mensais',
        'program.makanan_sehat.impact.1.label': 'Famílias',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Sessões',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Pacotes',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Alimentos nutritivos',
        'program.makanan_sehat.gallery.2': 'Aconselhamento nutricional',
        'program.makanan_sehat.gallery.3': 'Demo de culinária',
        'program.makanan_sehat.gallery.4': 'Avaliação nutricional',
        'program.makanan_sehat.reports.1': 'Relatório de Nutrição 2024',
        'program.makanan_sehat.reports.2': 'Avaliação de Impacto',
        'program.makanan_sehat.reports.3': 'Receitas Saudáveis',

        // Program 5: MBG
        'program.mbg.title': 'Refeições Nutritivas Grátis',
        'program.mbg.subtitle': 'Nutrição para Crianças Indonesias',
        'program.mbg.about': 'Sobre MBG',
        'program.mbg.p1': 'Programa de refeições nutritivas gratuitas para crianças e famílias.',
        'program.mbg.p2': 'Inclui educação nutricional e conservação de manguezais.',
        'program.mbg.p3': 'Distribuímos 10.000+ pacotes e plantamos 5.000 manguezais.',
        'program.mbg.objectives.1': 'Alimentos nutritivos gratuitos',
        'program.mbg.objectives.2': 'Melhorar estado nutricional',
        'program.mbg.objectives.3': 'Preservar meio ambiente',
        'program.mbg.objectives.4': 'Empoderar comunidades costeiras',
        'program.mbg.activities.1.title': 'Distribuição',
        'program.mbg.activities.1.desc': 'Pacotes de alimentos',
        'program.mbg.activities.2.title': 'Manguezais',
        'program.mbg.activities.2.desc': 'Plantio de manguezais',
        'program.mbg.activities.3.title': 'Educação',
        'program.mbg.activities.3.desc': 'Educação nutricional',
        'program.mbg.activities.4.title': 'Reflorestamento',
        'program.mbg.activities.4.desc': 'Reflorestamento costeiro',
        'program.mbg.timeline': 'Distribuição semanal anual',
        'program.mbg.impact.1.label': 'Pacotes',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Manguezais',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Crianças',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Vilas',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribuição de alimentos',
        'program.mbg.gallery.2': 'Plantio de manguezais',
        'program.mbg.gallery.3': 'Educação nutricional',
        'program.mbg.gallery.4': 'Reflorestamento costeiro',
        'program.mbg.reports.1': 'Relatório MBG 2024',
        'program.mbg.reports.2': 'Impacto Nutricional',
        'program.mbg.reports.3': 'Documentação Manguezais',

        // Program 6: MCK
        'program.mck.title': 'Banho, Lavagem, Banheiro',
        'program.mck.subtitle': 'Saneamento para Saúde Ambiental',
        'program.mck.about': 'Sobre MCK',
        'program.mck.p1': 'Programa de instalações de saneamento adequadas.',
        'program.mck.p2': 'Construímos MCK públicos com água limpa e banheiros higiênicos.',
        'program.mck.p3': 'Construímos 25 unidades servindo 5.000+ residentes.',
        'program.mck.objectives.1': 'Instalações de saneamento adequadas',
        'program.mck.objectives.2': 'Consciência sobre limpeza',
        'program.mck.objectives.3': 'Reduzir doenças',
        'program.mck.objectives.4': 'Promover comportamentos saudáveis',
        'program.mck.activities.1.title': 'Construção MCK',
        'program.mck.activities.1.desc': 'Instalações públicas MCK',
        'program.mck.activities.2.title': 'Educação',
        'program.mck.activities.2.desc': 'Educação em saneamento',
        'program.mck.activities.3.title': 'Lavagem de Mãos',
        'program.mck.activities.3.desc': 'Promoção de lavagem com sabão',
        'program.mck.activities.4.title': 'Manutenção',
        'program.mck.activities.4.desc': 'Treinamento em manutenção',
        'program.mck.timeline': 'Construção em 2-3 meses',
        'program.mck.impact.1.label': 'Unidades MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Beneficiários',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Redução',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Vilas',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Construção de MCK',
        'program.mck.gallery.2': 'Educação em saneamento',
        'program.mck.gallery.3': 'MCK completas',
        'program.mck.gallery.4': 'Lavagem de mãos',
        'program.mck.reports.1': 'Relatório de Saneamento 2024',
        'program.mck.reports.2': 'Impacto na Saúde',
        'program.mck.reports.3': 'Guia de Gestão MCK',

        // Program 7: Panti Asuhan
        'program.panti_asuhan.title': 'Programa de Orfanato',
        'program.panti_asuhan.subtitle': 'Amor para Crianças Órfãs',
        'program.panti_asuhan.about': 'Sobre Orfanato',
        'program.panti_asuhan.p1': 'Programa de assistência para crianças órfãs e desfavorecidas.',
        'program.panti_asuhan.p2': 'Trabalhamos com orfanatos para cuidado e educação adequados.',
        'program.panti_asuhan.p3': 'Ajudamos 20 orfanatos com 500+ crianças beneficiadas.',
        'program.panti_asuhan.objectives.1': 'Necessidades básicas para crianças',
        'program.panti_asuhan.objectives.2': 'Apoiar educação e talentos',
        'program.panti_asuhan.objectives.3': 'Amor e atenção',
        'program.panti_asuhan.objectives.4': 'Melhorar instalações',
        'program.panti_asuhan.activities.1.title': 'Assistência Regular',
        'program.panti_asuhan.activities.1.desc': 'Alimentos e roupas',
        'program.panti_asuhan.activities.2.title': 'Tutoria',
        'program.panti_asuhan.activities.2.desc': 'Ajuda em lições',
        'program.panti_asuhan.activities.3.title': 'Recreação',
        'program.panti_asuhan.activities.3.desc': 'Atividades divertidas',
        'program.panti_asuhan.activities.4.title': 'Talentos',
        'program.panti_asuhan.activities.4.desc': 'Artes e esportes',
        'program.panti_asuhan.timeline': 'Visitas mensais anuais',
        'program.panti_asuhan.impact.1.label': 'Orfanatos',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Crianças',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Distribuição',
        'program.panti_asuhan.impact.3.value': '24x/ano',
        'program.panti_asuhan.impact.4.label': 'Voluntários',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribuição de assistência',
        'program.panti_asuhan.gallery.2': 'Atividades recreativas',
        'program.panti_asuhan.gallery.3': 'Foto com crianças',
        'program.panti_asuhan.gallery.4': 'Desenvolvimento de talentos',
        'program.panti_asuhan.reports.1': 'Relatório de Orfanato 2024',
        'program.panti_asuhan.reports.2': 'Crianças Destacadas',
        'program.panti_asuhan.reports.3': 'Documentação de Atividades',

        // Program 8: Pengobatan
        'program.pengobatan.title': 'Tratamento Médico',
        'program.pengobatan.subtitle': 'Serviços de Saúde',
        'program.pengobatan.about': 'Sobre Tratamento Médico',
        'program.pengobatan.p1': 'Serviços de saúde gratuitos para comunidades desfavorecidas.',
        'program.pengobatan.p2': 'Trabalhamos com profissionais de saúde para serviços de qualidade.',
        'program.pengobatan.p3': 'Atendemos 3.000+ pacientes com 40+ atividades.',
        'program.pengobatan.objectives.1': 'Acesso a serviços de saúde',
        'program.pengobatan.objectives.2': 'Consciência em saúde preventiva',
        'program.pengobatan.objectives.3': 'Medicamentos gratuitos',
        'program.pengobatan.objectives.4': 'Parcerias com profissionais',
        'program.pengobatan.activities.1.title': 'Serviço Social',
        'program.pengobatan.activities.1.desc': 'Exame e tratamento grátis',
        'program.pengobatan.activities.2.title': 'Exame de Saúde',
        'program.pengobatan.activities.2.desc': 'Triagem de saúde',
        'program.pengobatan.activities.3.title': 'Medicamentos',
        'program.pengobatan.activities.3.desc': 'Distribuição gratuita',
        'program.pengobatan.activities.4.title': 'Aconselhamento',
        'program.pengobatan.activities.4.desc': 'Educação em saúde',
        'program.pengobatan.timeline': 'Atividades mensais',
        'program.pengobatan.impact.1.label': 'Pacientes',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Serviços',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Medicamentos',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Profissionais',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Tratamento médico gratuito',
        'program.pengobatan.gallery.2': 'Exame de saúde',
        'program.pengobatan.gallery.3': 'Distribuição de medicamentos',
        'program.pengobatan.gallery.4': 'Serviço em áreas remotas',
        'program.pengobatan.reports.1': 'Relatório de Saúde 2024',
        'program.pengobatan.reports.2': 'Estatísticas de Pacientes',
        'program.pengobatan.reports.3': 'Documentação de Serviço Social',

        // Program 9: Rumah Ibadat
        'program.rumah_ibadat.title': 'Casas de Adoração',
        'program.rumah_ibadat.subtitle': 'Instalações de Adoração',
        'program.rumah_ibadat.about': 'Sobre Casas de Adoração',
        'program.rumah_ibadat.p1': 'Programa de apoio a instalações de adoração para a comunidade.',
        'program.rumah_ibadat.p2': 'Construímos e renovamos mesquitas, igrejas, templos e viharas.',
        'program.rumah_ibadat.p3': 'Construímos e renovamos 15 casas de adoração.',
        'program.rumah_ibadat.objectives.1': 'Instalações de adoração adequadas',
        'program.rumah_ibadat.objectives.2': 'Apoiar necessidades espirituais',
        'program.rumah_ibadat.objectives.3': 'Preservar locais de adoração',
        'program.rumah_ibadat.objectives.4': 'Tolerância e harmonia religiosa',
        'program.rumah_ibadat.activities.1.title': 'Construção',
        'program.rumah_ibadat.activities.1.desc': 'Novas casas de adoração',
        'program.rumah_ibadat.activities.2.title': 'Renovação',
        'program.rumah_ibadat.activities.2.desc': 'Reparo de locais danificados',
        'program.rumah_ibadat.activities.3.title': 'Instalações',
        'program.rumah_ibadat.activities.3.desc': 'Áreas de ablução e bibliotecas',
        'program.rumah_ibadat.activities.4.title': 'Atividades Religiosas',
        'program.rumah_ibadat.activities.4.desc': 'Apoio a atividades religiosas',
        'program.rumah_ibadat.timeline': 'Projetos de 4-8 meses',
        'program.rumah_ibadat.impact.1.label': 'Casas de Adoração',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congregação',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Vilas',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Voluntários',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Construção de casas de adoração',
        'program.rumah_ibadat.gallery.2': 'Foto com congregação',
        'program.rumah_ibadat.gallery.3': 'Atividades religiosas',
        'program.rumah_ibadat.gallery.4': 'Instalações de apoio',
        'program.rumah_ibadat.reports.1': 'Relatório de Casas de Adoração 2024',
        'program.rumah_ibadat.reports.2': 'Documentação de Construção',
        'program.rumah_ibadat.reports.3': 'Perfil de Casas de Adoração'
    },

    'de': {
        // Header & Navigation
        'nav.home': 'Startseite',
        'nav.about': 'Über',
        'nav.programs': 'Programme',
        'nav.news': 'Nachrichten',
        'nav.contact': 'Kontakt',
        'lang.select': 'Sprache auswählen',
        'skiplink': 'Zum Hauptinhalt springen',

        // Hero Section
        'hero.title': 'Mit Liebe dienen,<br>mit Hoffnung aufbauen.',
        'hero.subtitle': 'Yayasan Persada Bakti Global engagiert sich für nachhaltige humanitäre Sozialhilfe.',
        'hero.btn.about': 'Unsere Stiftung kennenlernen',
        'hero.btn.contact': 'Kontaktieren Sie uns',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'Über Uns',
        'highlight.about.desc': 'Geschichte & Vision',
        'highlight.programs.title': 'Programme',
        'highlight.programs.desc': 'Reale Auswirkungen',
        'highlight.news.title': 'Veröffentlichungen',
        'highlight.news.desc': 'Berichte & Nachrichten',

        // About Section
        'about.title': 'Über die Stiftung',
        'about.vision': 'Vision',
        'about.vision.desc': 'Eine führende Organisation in der Gemeinschaftsbefähigung und nachhaltigen Entwicklung zu sein.',
        'about.mission': 'Mission',
        'about.mission.li1': 'Durch Bildung und Ausbildung befähigen',
        'about.mission.li2': 'Soziale Innovation fördern',
        'about.mission.li3': 'Strategische Partnerschaften aufbauen',
        'about.values': 'Grundwerte',
        'about.values.love': 'Liebe',
        'about.values.integrity': 'Integrität',
        'about.values.hope': 'Hoffnung',
        'about.values.collaboration': 'Zusammenarbeit',
        'about.org': 'Organisationsstruktur',
        'about.gallery': 'Aktivitätengalerie',
        'carousel.prev': 'Zurück',
        'carousel.next': 'Weiter',

        // Programs Section
        'programs.title': 'Programme & Aktivitäten',
        'programs.filter.all': 'Alle',
        'programs.filter.scholarship': 'Stipendium',
        'programs.filter.infrastructure': 'Infrastruktur',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Stipendienprogramm',
        'programs.scholarship.desc': 'Vollständige Bildungsunterstützung für leistungsstarke Schüler.',
        'programs.infrastructure': 'Infrastrukturentwicklung',
        'programs.infrastructure.desc': 'Dorfstraßen und öffentliche Einrichtungen für Gemeinden.',
        'programs.mbg': 'Kostenlose nahrhafte Mahlzeiten (MBG)',
        'programs.mbg.desc': 'Schutz des Mangroven-Ökosystems und Küstenaufforstung.',
        'programs.irrigation': 'Haussanierung',
        'programs.irrigation.desc': 'Umwandlung in würdige Wohnräume.',
        'programs.learn': 'Mehr erfahren →',

        // News Section
        'news.title': 'Nachrichten & Veröffentlichungen',
        'news.loadmore': 'Mehr laden',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Kontaktieren Sie uns',
        'contact.form.title': 'Nachricht senden',
        'contact.form.name': 'Name',
        'contact.form.name.placeholder': 'Vollständiger Name',
        'contact.form.email': 'E-Mail',
        'contact.form.email.placeholder': 'beispiel@domain.de',
        'contact.form.message': 'Nachricht',
        'contact.form.message.placeholder': 'Schreiben Sie Ihre Nachricht...',
        'contact.form.submit': 'Nachricht senden',
        'contact.info.title': 'Kontaktinformationen',
        'contact.info.email': 'E-Mail',
        'contact.info.phone': 'Telefon',
        'contact.info.address': 'Adresse',
        'contact.info.address.text': 'Persada Bakti Str. Nr.123, Jakarta',

        // Footer
        'footer.about': 'Über YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global widmet sich der sozialen humanitären Hilfe.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Rechtliches',
        'footer.privacy': 'Datenschutzrichtlinie',
        'footer.terms': 'Allgemeine Geschäftsbedingungen',
        'footer.language': 'Sprache',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Alle Rechte vorbehalten.',

        // Organization Structure
        'about.org.chairman': 'Vorstandsvorsitzender',
        'about.org.ceo': 'Geschäftsführer',
        'about.org.secretary': 'Sekretär',
        'about.org.treasurer': 'Schatzmeister',
        'about.org.programs': 'Programme',
        'about.org.finance': 'Finanzen',
        'about.org.pr': 'Öffentlichkeitsarbeit',

        // News Common Keys
        'news.date': 'Datum',
        'news.author': 'YPBG-Team',
        'news.views': 'Aufrufe',
        'news.gallery': '📸 Fotodokumentation',
        'news.about': '📖 Über',
        'news.back': 'Zurück zu Nachrichten',
        'news.readmore': 'Mehr lesen →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Stipendienprogramm 2024 eröffnet',
        'news.1.excerpt': 'YPBG eröffnet Anmeldung für Bildungsstipendienprogramm...',
        'news.1.category': 'Bildung',
        'news.1.video': '🎥 Programmvideo',
        'news.1.about': '📖 Über das Stipendienprogramm',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) eröffnet offiziell die Anmeldung für das Stipendienprogramm 2024 für leistungsstarke Schüler aus benachteiligten Familien in ganz Indonesien. Dieses Programm ist YPBGs Verpflichtung zur Verbesserung der Bildungsqualität für Indonesiens jüngere Generation.',
        'news.1.p2': 'Das YPBG-Stipendienprogramm bietet umfassende Bildungsunterstützung einschließlich Schulgebühren, Bücher, Uniformen und monatliche Zuschüsse. Bis heute hat das YPBG-Stipendienprogramm mehr als 500 Schülern geholfen, ihre Ausbildung mit einer 100%igen Abschlussquote abzuschließen.',
        'news.1.p3': 'Die Anmeldung für das Stipendienprogramm 2024 ist bis zum 31. März 2024 geöffnet. Die Anmeldevoraussetzungen umfassen: (1) Realschüler/Gymnasiasten mit Leistungen, (2) Aus benachteiligten Familien, (3) Hoher Lernwille, und (4) Schulempfehlung.',
        'news.1.gallery.1': '🎓 Verteilung von Stipendienhilfe an leistungsstarke Schüler',
        'news.1.gallery.2': '👨‍🎓 Gruppenfoto mit Stipendiaten und YPBG-Team',
        'news.1.gallery.3': '📚 Nachhilfesitzungen für Stipendiaten',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Strandreinigungsaktion',
        'news.2.excerpt': 'Hunderte YPBG-Freiwillige reinigten erfolgreich 5 km Strand...',
        'news.2.category': 'Umwelt',
        'news.2.video': '🎥 Aktivitätsvideo',
        'news.2.about': '📖 Über die Strandreinigung',
        'news.2.p1': 'Hunderte von Freiwilligen der Yayasan Persada Bakti Global (YPBG) reinigten erfolgreich 5 km Küste von Plastikmüll und anderen Abfällen bei einer Strandreinigungsaktion am Sonntag, 10. Februar 2024.',
        'news.2.p2': 'An der Strandreinigungsaktion nahmen mehr als 300 Freiwillige teil, bestehend aus YPBG-Mitgliedern, Studenten, Schülern und lokalen Gemeinschaften. Mit hohem Geist der gegenseitigen Zusammenarbeit arbeiteten die Freiwilligen seit dem Morgen daran, verschiedene Arten von Abfällen zu entfernen, die an den Strand gespült wurden.',
        'news.2.p3': 'Der gesammelte Abfall erreichte 2 Tonnen, bestehend aus Plastikmüll, Flaschen und anderen Haushaltsabfällen. Dieser Abfall wurde dann nach Typ sortiert und zur Wiederverwertung verwaltet oder umweltfreundlich entsorgt.',
        'news.2.p4': 'Zusätzlich zur Strandreinigung umfasste diese Aktivität auch das Pflanzen von 1.000 Mangrovensetzlingen zur Verhinderung von Küstenabrasion und zur Erhaltung mariner Ökosysteme. YPBG verpflichtet sich, weiterhin ähnliche Aktivitäten durchzuführen, um die Nachhaltigkeit der indonesischen Küstenumwelt zu erhalten.',
        'news.2.stat.relawan': 'Freiwillige',
        'news.2.stat.pantai': 'km Strand',
        'news.2.stat.sampah': 'Tonnen Abfall',
        'news.2.stat.mangrove': 'Mangrovensetzlinge',
        'news.2.gallery.1': '🧹 Freiwillige reinigen Abfall am Strand',
        'news.2.gallery.2': '🌱 Mangrovensetzlinge pflanzen zur Verhinderung von Abrasion',
        'news.2.gallery.3': '👥 Gruppenfoto mit Freiwilligen nach der Aktivität',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Kostenlose Impfkampagne',
        'news.3.excerpt': 'YPBG führt kostenlose Impfkampagne in 20 Dörfern durch...',
        'news.3.category': 'Gesundheit',
        'news.3.video': '🎥 Kampagnenvideo',
        'news.3.about': '📖 Über die Impfkampagne',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) führte am Montag, 5. Februar 2024 eine kostenlose Impfkampagne in 20 Dörfern in verschiedenen Regionen Indonesiens durch. Dieses Programm ist Teil von YPBGs Verpflichtung zur Verbesserung des Gesundheitszugangs für benachteiligte Gemeinschaften.',
        'news.3.p2': 'Diese Impfkampagne bietet verschiedene Arten von kostenlosen Impfstoffen einschließlich COVID-19-Impfstoff, Grippeimpfstoff und Hepatitis-B-Impfstoff. Alle Dienstleistungen werden kostenlos für Bedürftige angeboten.',
        'news.3.p3': 'Diese Aktivität wurde in Zusammenarbeit mit dem lokalen Gesundheitsamt durchgeführt und umfasste 50 medizinische Fachkräfte bestehend aus Ärzten, Krankenschwestern und Hebammen. YPBG plant, in dieser Kampagne 5.000 Impfstoffempfänger zu bedienen.',
        'news.3.p4': 'Zusätzlich zur Impfung umfasst diese Aktivität auch Gesundheitsberatung und kostenlose Gesundheitsuntersuchungen. Die Gemeinschaft kann sich direkt mit Ärzten über ihre Gesundheitsprobleme beraten.',
        'news.3.quote': 'Gesundheit ist das Recht jedes Menschen. Wir sind verpflichtet sicherzustellen, dass benachteiligte Gemeinschaften auch anständigen Zugang zur Gesundheit erhalten.',
        'news.3.quote.author': 'YPBG-Direktor',
        'news.3.vaccines': '📋 Verfügbare Impfstoffe',
        'news.3.vaccine.1': 'COVID-19-Impfstoff - Schützt vor Coronavirus',
        'news.3.vaccine.2': 'Grippeimpfstoff - Verhindert saisonale Grippe',
        'news.3.vaccine.3': 'Hepatitis-B-Impfstoff - Schützt Leber vor Infektion',
        'news.3.gallery.1': '💉 Impfprozess durch medizinisches Fachpersonal',
        'news.3.gallery.2': '👥 Gemeinschaft wartet in Schlange auf kostenlose Impfung',
        'news.3.gallery.3': '🩺 Gesundheitsberatung für Dorfgemeinschaften',

        // Program Detail Pages - Back Button
        'program.back': 'Zurück zu Programmen',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Stipendienprogramm',
        'program.beasiswa.subtitle': 'Unterstützung der Bildung der jungen Generation Indonesiens',
        'program.beasiswa.about': 'Über das Stipendienprogramm',
        'program.beasiswa.p1': 'Das Stipendienprogramm der Yayasan Persada Bakti Global ist unser Engagement zur Verbesserung der Bildungsqualität für Indonesiens jüngere Generation. Dieses Programm wurde entwickelt, um leistungsstarken Schülern aus benachteiligten Familien die Möglichkeit zu geben, ihre Ausbildung fortzusetzen.',
        'program.beasiswa.p2': 'Jeder Stipendiat erhält umfassende Unterstützung einschließlich Schulgebühren, Bücher, Uniformen und monatliche Zuschüsse. Wir glauben, dass Bildung der Schlüssel ist, um den Kreislauf der Armut zu durchbrechen und eine bessere Zukunft aufzubauen.',
        'program.beasiswa.p3': 'Bis heute hat das YPBG-Stipendienprogramm mehr als 500 Schülern geholfen, ihre Ausbildung abzuschließen, mit einer 100%igen Abschlussquote und vielen Alumni, die an renommierten Universitäten weiterstudieren.',
        'program.beasiswa.objectives.1': 'Qualitativ hochwertigen Bildungszugang für leistungsstarke Schüler aus benachteiligten Familien bieten',
        'program.beasiswa.objectives.2': 'Abschlussquoten und akademische Leistungen der Stipendiaten verbessern',
        'program.beasiswa.objectives.3': 'Charakter und Führung durch Mentoring-Programme aufbauen',
        'program.beasiswa.objectives.4': 'Eine junge Generation schaffen, die positiv zur Gesellschaft beiträgt',
        'program.beasiswa.activities.1.title': 'Stipendienvergabe',
        'program.beasiswa.activities.1.desc': 'Symbolische Übergabe der Stipendienhilfe an leistungsstarke Schüler',
        'program.beasiswa.activities.2.title': 'Nachhilfeprogramm',
        'program.beasiswa.activities.2.desc': 'Nachhilfe und akademische Betreuung zur Verbesserung der akademischen Leistungen',
        'program.beasiswa.activities.3.title': 'Charakterentwicklung',
        'program.beasiswa.activities.3.desc': 'Führungsworkshops und Soft-Skills-Entwicklung für Stipendiaten',
        'program.beasiswa.activities.4.title': 'Alumni-Treffen',
        'program.beasiswa.activities.4.desc': 'Regelmäßige Treffen mit Alumni zum Erfahrungsaustausch und Netzwerkaufbau',
        'program.beasiswa.timeline': 'Das Programm läuft das gesamte Schuljahr über mit Semesterbewertungen',
        'program.beasiswa.impact.1.label': 'Unterstützte Schüler',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Abschlussquote',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Weiter an Universität',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Jahre im Betrieb',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Verteilung von Stipendienhilfe an leistungsstarke Schüler',
        'program.beasiswa.gallery.2': 'Gruppenfoto mit Stipendiaten und YPBG-Team',
        'program.beasiswa.gallery.3': 'Nachhilfesitzungen für Stipendiaten',
        'program.beasiswa.gallery.4': 'Charakterentwicklungs- und Führungsworkshop',
        'program.beasiswa.reports.1': 'Jährlicher Stipendienprogrammbericht 2024',
        'program.beasiswa.reports.2': 'Even Semester Evaluation 2024',
        'program.beasiswa.reports.3': 'Stipendiaten-Alumni-Profil',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Infrastrukturentwicklung',
        'program.infrastruktur.subtitle': 'Aufbau öffentlicher Einrichtungen für das Gemeinwohl',
        'program.infrastruktur.about': 'Über das Infrastrukturprogramm',
        'program.infrastruktur.p1': 'Das Infrastrukturentwicklungsprogramm der Yayasan Persada Bakti Global konzentriert sich auf die Entwicklung öffentlicher Einrichtungen, die die Wirtschaft und das Wohlergehen der Gemeinden unterstützen. Wir bauen Dorfstraßen, Brücken, Entwässerungssysteme und andere öffentliche Einrichtungen, die von den Gemeinden dringend benötigt werden.',
        'program.infrastruktur.p2': 'Jedes unserer Infrastrukturprojekte wird unter Berücksichtigung der langfristigen Bedürfnisse der Gemeinde und der Umweltauswirkungen geplant. Wir arbeiten mit lokalen Regierungen und Gemeinden zusammen, um eine nachhaltige und für alle vorteilhafte Entwicklung zu gewährleisten.',
        'program.infrastruktur.p3': 'Bis heute hat YPBG den Bau von mehr als 50 km Dorfstraßen, 10 Brücken und verschiedenen anderen öffentlichen Einrichtungen abgeschlossen, die die Zugänglichkeit und die Wirtschaft der Gemeinden in verschiedenen Regionen verbessert haben.',
        'program.infrastruktur.objectives.1': 'Verbesserung des Zugangs der Gemeinde zu öffentlichen Einrichtungen',
        'program.infrastruktur.objectives.2': 'Förderung des lokalen Wirtschaftswachstums durch angemessene Infrastruktur',
        'program.infrastruktur.objectives.3': 'Umweltfreundliche und nachhaltige Infrastruktur aufbauen',
        'program.infrastruktur.objectives.4': 'Partnerschaften mit lokalen Regierungen und Gemeinden stärken',
        'program.infrastruktur.activities.1.title': 'Dorfstraßenbau',
        'program.infrastruktur.activities.1.desc': 'Bau und Reparatur von Dorfstraßen zur Verbesserung der Zugänglichkeit',
        'program.infrastruktur.activities.2.title': 'Brückenbau',
        'program.infrastruktur.activities.2.desc': 'Bau von Brücken zur Verbindung getrennter Gebiete',
        'program.infrastruktur.activities.3.title': 'Entwässerungssystem',
        'program.infrastruktur.activities.3.desc': 'Bau von Entwässerungskanälen zur Hochwasserprävention',
        'program.infrastruktur.activities.4.title': 'Öffentliche Einrichtungen',
        'program.infrastruktur.activities.4.desc': 'Bau von Dorfhallen und anderen öffentlichen Einrichtungen',
        'program.infrastruktur.timeline': 'Infrastrukturprojekte werden in Phasen über 6-12 Monate umgesetzt',
        'program.infrastruktur.impact.1.label': 'Km Straßen gebaut',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Brücken',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Erschlossene Dörfer',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Begünstigte',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Bau von Dorfstraßen zur Verbesserung der Zugänglichkeit',
        'program.infrastruktur.gallery.2': 'Gruppenfoto mit Team und Gemeinde nach Projektabschluss',
        'program.infrastruktur.gallery.3': 'Brückenbau zur Verbindung zweier Dörfer',
        'program.infrastruktur.gallery.4': 'Entwässerungssystem zur Hochwasserprävention',
        'program.infrastruktur.reports.1': 'Infrastrukturentwicklungsbericht 2024',
        'program.infrastruktur.reports.2': 'Wirtschaftliche Auswirkungen der Infrastruktur',
        'program.infrastruktur.reports.3': 'Dokumentation von Straßen- und Brückenprojekten',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Bewässerungsprogramm',
        'program.irigasi.subtitle': 'Bewässerung von Reisfeldern für Ernährungssicherheit',
        'program.irigasi.about': 'Über das Bewässerungsprogramm',
        'program.irigasi.p1': 'Das Bewässerungsprogramm der Yayasan Persada Bakti Global konzentriert sich auf den Bau und die Rehabilitation von Bewässerungssystemen zur Unterstützung der Landwirtschaft der Gemeinden. Gute Bewässerungssysteme sind entscheidend für die Steigerung der landwirtschaftlichen Produktivität und des Wohlergehens der Landwirte.',
        'program.irigasi.p2': 'Wir bauen Bewässerungskanäle, kleine Dämme und Wasserpumpensysteme, die den Landwirten helfen, ihre Reisfelder und Landflächen effizient zu bewässern. Dieses Programm umfasst auch Schulungen zur nachhaltigen Wasserbewirtschaftung.',
        'program.irigasi.p3': 'Bis heute hat YPBG mehr als 30 km Bewässerungskanäle gebaut und rehabilitiert, die mehr als 500 Hektar landwirtschaftliche Fläche in verschiedenen Regionen bewässern.',
        'program.irigasi.objectives.1': 'Steigerung der landwirtschaftlichen Produktivität durch angemessene Bewässerungssysteme',
        'program.irigasi.objectives.2': 'Optimierung der Nutzung von Wasserressourcen für die Landwirtschaft',
        'program.irigasi.objectives.3': 'Steigerung des Einkommens der Landwirte durch verbesserte Ernteerträge',
        'program.irigasi.objectives.4': 'Nachhaltige und umweltfreundliche Bewässerungssysteme aufbauen',
        'program.irigasi.activities.1.title': 'Bewässerungskanalbau',
        'program.irigasi.activities.1.desc': 'Bau neuer Bewässerungskanäle zur Bewässerung landwirtschaftlicher Flächen',
        'program.irigasi.activities.2.title': 'Bewässerungsrehabilitation',
        'program.irigasi.activities.2.desc': 'Reparatur und Wartung bestehender Bewässerungssysteme',
        'program.irigasi.activities.3.title': 'Wasserpumpensystem',
        'program.irigasi.activities.3.desc': 'Installation von Wasserpumpen für Trockenlandbewässerung',
        'program.irigasi.activities.4.title': 'Landwirtenschulung',
        'program.irigasi.activities.4.desc': 'Schulung zur Wasserbewirtschaftung und nachhaltigen Bewässerungssystemen',
        'program.irigasi.timeline': 'Bewässerungsprojekte werden entsprechend der Pflanzsaison mit einer Dauer von 3-6 Monaten umgesetzt',
        'program.irigasi.impact.1.label': 'Km Kanäle',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hektar bewässert',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Begünstigte Landwirte',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Ertragssteigerung',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Bau von Bewässerungskanälen für die Landwirtschaft der Gemeinden',
        'program.irigasi.gallery.2': 'Gruppenfoto mit Landwirten nach Abschluss des Bewässerungsprojekts',
        'program.irigasi.gallery.3': 'Wasserpumpensystem für Trockenlandbewässerung',
        'program.irigasi.gallery.4': 'Schulung zur Bewässerungsbewirtschaftung für Landwirtegruppen',
        'program.irigasi.reports.1': 'Bewässerungsprogrammbericht 2024',
        'program.irigasi.reports.2': 'Auswirkungsstudie der Bewässerung auf die Produktivität',
        'program.irigasi.reports.3': 'Leitfaden für nachhaltiges Bewässerungsmanagement',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Gesundes Ernährungsprogramm',
        'program.makanan_sehat.subtitle': 'Ausgewogene Ernährung für indonesische Familien',
        'program.makanan_sehat.about': 'Über das Gesunde Ernährungsprogramm',
        'program.makanan_sehat.p1': 'Das Gesunde Ernährungsprogramm der Yayasan Persada Bakti Global ist eine Initiative zur Steigerung des Bewusstseins und Zugangs der Gemeinden zu nahrhaften Lebensmitteln. Dieses Programm bietet Ernährungsbildung und gesunde Lebensmittelversorgung für benachteiligte Familien.',
        'program.makanan_sehat.p2': 'Wir arbeiten mit Ernährungswissenschaftlern und Gesundheitsfachkräften zusammen, um ausgewogene nahrhafte Menüs zu erstellen. Dieses Programm umfasst auch Beratung zur Bedeutung ausgewogener Ernährung und gesunder Essgewohnheiten.',
        'program.makanan_sehat.p3': 'Bis heute hat das Gesunde Ernährungsprogramm mehr als 2.000 Familien erreicht und 50+ Ernährungsberatungen in verschiedenen Gemeinden durchgeführt.',
        'program.makanan_sehat.objectives.1': 'Bewusstsein der Gemeinden für die Bedeutung ausgewogener Ernährung steigern',
        'program.makanan_sehat.objectives.2': 'Zugang zu nahrhaften Lebensmitteln für benachteiligte Familien bieten',
        'program.makanan_sehat.objectives.3': 'Stunting- und Mangelernährungsraten in Zielgemeinden reduzieren',
        'program.makanan_sehat.objectives.4': 'Mütter bei der Zubereitung nahrhafter Lebensmittel stärken',
        'program.makanan_sehat.activities.1.title': 'Nahrhafte Lebensmittelversorgung',
        'program.makanan_sehat.activities.1.desc': 'Verteilung von nahrhaften Lebensmittelpaketen für bedürftige Familien',
        'program.makanan_sehat.activities.2.title': 'Ernährungsberatung',
        'program.makanan_sehat.activities.2.desc': 'Bildung über ausgewogene Ernährung und gesunde Essgewohnheiten',
        'program.makanan_sehat.activities.3.title': 'Gesundes Kochen Demo',
        'program.makanan_sehat.activities.3.desc': 'Demonstration des Kochens gesunder Lebensmittel mit lokalen Zutaten',
        'program.makanan_sehat.activities.4.title': 'Ernährungs-Screening',
        'program.makanan_sehat.activities.4.desc': 'Screening des Ernährungsstatus für Kinder und schwangere Frauen',
        'program.makanan_sehat.timeline': 'Das Programm läuft das ganze Jahr über mit monatlichen Aktivitäten',
        'program.makanan_sehat.impact.1.label': 'Erreichte Familien',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Beratungssitzungen',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Lebensmittelpakete',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Partner-Posyandu',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Bereitstellung von nahrhaften Lebensmitteln für die Gemeinde',
        'program.makanan_sehat.gallery.2': 'Ernährungsberatung und gesunde Essgewohnheiten',
        'program.makanan_sehat.gallery.3': 'Demonstration gesunder nahrhafter Küche',
        'program.makanan_sehat.gallery.4': 'Ernährungs-Screening für Kinder und schwangere Frauen',
        'program.makanan_sehat.reports.1': 'Ernährungsprogrammbericht 2024',
        'program.makanan_sehat.reports.2': 'Ernährungsauswirkungsbewertung für Familien',
        'program.makanan_sehat.reports.3': 'Rezepte für gesunde nahrhafte Lebensmittel',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Kostenlose nahrhafte Mahlzeiten (MBG)',
        'program.mbg.subtitle': 'Ernährung für die Zukunft indonesischer Kinder',
        'program.mbg.about': 'Über das MBG-Programm',
        'program.mbg.p1': 'Das Programm für kostenlose nahrhafte Mahlzeiten (MBG) der Yayasan Persada Bakti Global ist unser Engagement zur Verbesserung der Ernährungsqualität der Gemeinden, insbesondere von Kindern und benachteiligten Familien. Dieses Programm bietet kostenlose nahrhafte Lebensmittel für Bedürftige.',
        'program.mbg.p2': 'Zusätzlich zur Lebensmittelversorgung umfasst das MBG-Programm auch Ernährungsbildung, den Schutz des Mangroven-Ökosystems und die Wiederaufforstung der Küste, um eine gesunde und nachhaltige Umgebung zu schaffen.',
        'program.mbg.p3': 'Bis heute hat das MBG-Programm mehr als 10.000 nahrhafte Lebensmittelpakete verteilt und 5.000 Mangrovenbäume in verschiedenen Küstenregionen Indonesiens gepflanzt.',
        'program.mbg.objectives.1': 'Kostenlose nahrhafte Lebensmittel für Kinder und benachteiligte Familien bieten',
        'program.mbg.objectives.2': 'Ernährungsstatus und Gesundheit der Begünstigten verbessern',
        'program.mbg.objectives.3': 'Umwelt durch Mangrovenpflanzung erhalten',
        'program.mbg.objectives.4': 'Küstengemeinden durch integrierte Programme stärken',
        'program.mbg.activities.1.title': 'Verteilung nahrhafter Lebensmittel',
        'program.mbg.activities.1.desc': 'Verteilung von nahrhaften Lebensmittelpaketen an Kinder und Familien',
        'program.mbg.activities.2.title': 'Mangrovenpflanzung',
        'program.mbg.activities.2.desc': 'Schutz des Mangroven-Ökosystems in Küstengebieten',
        'program.mbg.activities.3.title': 'Ernährungsbildung',
        'program.mbg.activities.3.desc': 'Beratung über die Bedeutung der Ernährung für das Kinderwachstum',
        'program.mbg.activities.4.title': 'Küstenaufforstung',
        'program.mbg.activities.4.desc': 'Baumpflanzung zur Verhinderung von Küstenabrasion',
        'program.mbg.timeline': 'Das MBG-Programm läuft das ganze Jahr über mit wöchentlicher Verteilung',
        'program.mbg.impact.1.label': 'Lebensmittelpakete',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Mangrovenbäume',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Begünstigte Kinder',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Küstendörfer',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Verteilung von nahrhaften Lebensmitteln an die Gemeinde',
        'program.mbg.gallery.2': 'Mangrovenpflanzaktivitäten zum Umweltschutz',
        'program.mbg.gallery.3': 'Ernährungsbildung für Mütter und Kinder',
        'program.mbg.gallery.4': 'Küstenaufforstung zur Verhinderung von Abrasion',
        'program.mbg.reports.1': 'MBG-Programmbericht 2024',
        'program.mbg.reports.2': 'Ernährungsauswirkung auf MBG-Empfängerkinder',
        'program.mbg.reports.3': 'Dokumentation der Mangrovenpflanzung',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Baden, Waschen, Toilette (MCK)',
        'program.mck.subtitle': 'Angemessene Sanitärversorgung für Umweltgesundheit',
        'program.mck.about': 'Über das MCK-Programm',
        'program.mck.p1': 'Das MCK-Programm (Baden, Waschen, Toilette) der Yayasan Persada Bakti Global konzentriert sich auf den Bau angemessener Sanitäranlagen zur Verbesserung der Umweltgesundheit und der Lebensqualität der Gemeinden.',
        'program.mck.p2': 'Wir bauen öffentliche MCK-Einrichtungen mit sauberem Wasser, Händewaschstationen und hygienischen Toiletten. Dieses Programm umfasst auch Bildung über die Bedeutung von Sauberkeit und Sanitärversorgung zur Krankheitsprävention.',
        'program.mck.p3': 'Bis heute hat YPBG 25 MCK-Einheiten gebaut, die mehr als 5.000 Einwohner in verschiedenen Regionen bedienen und die Krankheitsraten aufgrund schlechter Sanitärversorgung erheblich reduziert haben.',
        'program.mck.objectives.1': 'Angemessene Sanitäranlagen für die Gemeinde bereitstellen',
        'program.mck.objectives.2': 'Bewusstsein für die Bedeutung von Sauberkeit und Sanitärversorgung steigern',
        'program.mck.objectives.3': 'Krankheitsraten aufgrund schlechter Sanitärversorgung reduzieren',
        'program.mck.objectives.4': 'Sauberes und gesundes Verhalten fördern',
        'program.mck.activities.1.title': 'MCK-Bau',
        'program.mck.activities.1.desc': 'Bau öffentlicher MCK-Einrichtungen mit hygienischen Standards',
        'program.mck.activities.2.title': 'Sanitärbildung',
        'program.mck.activities.2.desc': 'Beratung über die Bedeutung von Sanitärversorgung und Sauberkeit',
        'program.mck.activities.3.title': 'Händewaschen',
        'program.mck.activities.3.desc': 'Förderung des Händewaschens mit Seife zur Krankheitsprävention',
        'program.mck.activities.4.title': 'MCK-Wartung',
        'program.mck.activities.4.desc': 'Schulung zur Verwaltung und Wartung von MCK-Einrichtungen',
        'program.mck.timeline': 'Der MCK-Bau wird in 2-3 Monaten pro Einheit abgeschlossen',
        'program.mck.impact.1.label': 'MCK-Einheiten',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Begünstigte',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Krankheitsreduzierung',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Bediente Dörfer',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Bau von MCK-Einrichtungen für die Gemeinde',
        'program.mck.gallery.2': 'Sauberkeits- und Sanitärbildung',
        'program.mck.gallery.3': 'Fertiggestellte MCK-Einrichtungen',
        'program.mck.gallery.4': 'Händewaschen mit Seife Sozialisation',
        'program.mck.reports.1': 'Sanitärprogrammbericht 2024',
        'program.mck.reports.2': 'Auswirkung von MCK auf die Gemeindegesundheit',
        'program.mck.reports.3': 'Leitfaden für kommunales MCK-Management',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Waisenhausprogramm',
        'program.panti_asuhan.subtitle': 'Liebe für verwaiste Kinder',
        'program.panti_asuhan.about': 'Über das Waisenhausprogramm',
        'program.panti_asuhan.p1': 'Das Waisenhausprogramm der Yayasan Persada Bakti Global ist unsere Sorge um verwaiste und benachteiligte Kinder. Dieses Programm bietet Hilfe in Form von Lebensmitteln, Kleidung, Bildung und Einrichtungen für Waisenhäuser.',
        'program.panti_asuhan.p2': 'Wir arbeiten mit verschiedenen Waisenhäusern zusammen, um sicherzustellen, dass Kinder angemessene Pflege und Bildung erhalten. Dieses Programm umfasst auch Freizeitaktivitäten, Nachhilfe und Talententwicklung für Kinder.',
        'program.panti_asuhan.p3': 'Bis heute hat YPBG 20 Waisenhäuser mit insgesamt mehr als 500 Kindern geholfen, die von diesem Programm profitieren, und ihnen Hoffnung und eine bessere Zukunft gegeben.',
        'program.panti_asuhan.objectives.1': 'Grundbedürfnisse für verwaiste und benachteiligte Kinder bereitstellen',
        'program.panti_asuhan.objectives.2': 'Bildung und Talententwicklung von Kindern unterstützen',
        'program.panti_asuhan.objectives.3': 'Kindern Liebe und Aufmerksamkeit schenken',
        'program.panti_asuhan.objectives.4': 'Qualität der Waisenhauseinrichtungen verbessern',
        'program.panti_asuhan.activities.1.title': 'Regelmäßige Hilfe',
        'program.panti_asuhan.activities.1.desc': 'Verteilung von Lebensmitteln, Kleidung und Grundbedürfnissen',
        'program.panti_asuhan.activities.2.title': 'Nachhilfe',
        'program.panti_asuhan.activities.2.desc': 'Nachhilfe und Unterrichtshilfe für Waisenhauskinder',
        'program.panti_asuhan.activities.3.title': 'Freizeitaktivitäten',
        'program.panti_asuhan.activities.3.desc': 'Outdoor- und Spaßaktivitäten für Kinder',
        'program.panti_asuhan.activities.4.title': 'Talententwicklung',
        'program.panti_asuhan.activities.4.desc': 'Training in Kunst, Sport und Fähigkeiten für Kinder',
        'program.panti_asuhan.timeline': 'Das Programm läuft das ganze Jahr über mit monatlichen Besuchen',
        'program.panti_asuhan.impact.1.label': 'Partner-Waisenhäuser',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Begünstigte Kinder',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Verteilte Hilfe',
        'program.panti_asuhan.impact.3.value': '24x/Jahr',
        'program.panti_asuhan.impact.4.label': 'Freiwillige',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Verteilung von Hilfe für Waisenhäuser',
        'program.panti_asuhan.gallery.2': 'Freizeitaktivitäten und Nachhilfe',
        'program.panti_asuhan.gallery.3': 'Gruppenfoto mit Waisenhauskindern',
        'program.panti_asuhan.gallery.4': 'Talent- und Kunstentwicklungsaktivitäten',
        'program.panti_asuhan.reports.1': 'Waisenhausprogrammbericht 2024',
        'program.panti_asuhan.reports.2': 'Profil herausragender Waisenhauskinder',
        'program.panti_asuhan.reports.3': 'Waisenhausaktivitätsdokumentation',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Medizinisches Behandlungsprogramm',
        'program.pengobatan.subtitle': 'Gesundheitsdienste für die Gemeinde',
        'program.pengobatan.about': 'Über das medizinische Behandlungsprogramm',
        'program.pengobatan.p1': 'Das Medizinische Behandlungsprogramm der Yayasan Persada Bakti Global bietet kostenlose Gesundheitsdienste für benachteiligte Gemeinden. Dieses Programm umfasst allgemeine Gesundheitsuntersuchungen, kostenlose Behandlung und Gesundheitsberatung.',
        'program.pengobatan.p2': 'Wir arbeiten mit Ärzten, Krankenschwestern und professionellen Gesundheitsfachkräften zusammen, um qualitativ hochwertige medizinische Dienste zu erbringen. Dieses Programm umfasst auch kostenlose Medikamentenverteilung und regelmäßige Gesundheitsuntersuchungen.',
        'program.pengobatan.p3': 'Bis heute hat das YPBG-Medizinische Behandlungsprogramm mehr als 3.000 Patienten bedient und 40+ Gesundheits-Sozialdienstaktivitäten in verschiedenen Regionen durchgeführt und Gesundheitszugang für Bedürftige geschaffen.',
        'program.pengobatan.objectives.1': 'Zugang zu Gesundheitsdiensten für benachteiligte Gemeinden bieten',
        'program.pengobatan.objectives.2': 'Bewusstsein für die Bedeutung präventiver Gesundheit steigern',
        'program.pengobatan.objectives.3': 'Kostenlose Medikamente für Bedürftige bereitstellen',
        'program.pengobatan.objectives.4': 'Partnerschaften mit professionellen Gesundheitsfachkräften aufbauen',
        'program.pengobatan.activities.1.title': 'Gesundheits-Sozialdienst',
        'program.pengobatan.activities.1.desc': 'Kostenlose Untersuchungs- und Behandlungsdienste',
        'program.pengobatan.activities.2.title': 'Gesundheitsuntersuchung',
        'program.pengobatan.activities.2.desc': 'Allgemeines Gesundheits-Screening und nicht übertragbare Krankheiten',
        'program.pengobatan.activities.3.title': 'Medikamentenverteilung',
        'program.pengobatan.activities.3.desc': 'Verteilung kostenloser Medikamente für Patienten',
        'program.pengobatan.activities.4.title': 'Gesundheitsberatung',
        'program.pengobatan.activities.4.desc': 'Bildung über gesunden Lebensstil und Krankheitsprävention',
        'program.pengobatan.timeline': 'Gesundheits-Sozialdienstaktivitäten werden monatlich durchgeführt',
        'program.pengobatan.impact.1.label': 'Bediente Patienten',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Gesundheitsdienste',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Verteilte Medikamente',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Partner-Gesundheitsfachkräfte',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Kostenlose medizinische Behandlungsdienste für die Gemeinde',
        'program.pengobatan.gallery.2': 'Gesundheitsuntersuchung durch medizinisches Team',
        'program.pengobatan.gallery.3': 'Gesundheitsberatung und kostenlose Medikamentenverteilung',
        'program.pengobatan.gallery.4': 'Gesundheits-Sozialdienst in abgelegenen Gebieten',
        'program.pengobatan.reports.1': 'Gesundheitsprogrammbericht 2024',
        'program.pengobatan.reports.2': 'Patienten- und Krankheitsstatistiken',
        'program.pengobatan.reports.3': 'Dokumentation des Gesundheits-Sozialdienstes',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Gotteshausprogramm',
        'program.rumah_ibadat.subtitle': 'Anbetungseinrichtungen für religiöse Gemeinden',
        'program.rumah_ibadat.about': 'Über das Gotteshausprogramm',
        'program.rumah_ibadat.p1': 'Das Gotteshausprogramm der Yayasan Persada Bakti Global ist unser Engagement zur Unterstützung von Anbetungseinrichtungen für die Gemeinde. Wir bauen und renovieren Moscheen, Gebetsräume, Kirchen, Tempel und Viharas, um die spirituellen Bedürfnisse der Gemeinde zu unterstützen.',
        'program.rumah_ibadat.p2': 'Jeder Gotteshausbau wird unter Berücksichtigung der Bedürfnisse der lokalen Gemeinde und guter Baustandards durchgeführt. Dieses Programm umfasst auch die Bereitstellung von Unterstützungseinrichtungen wie Waschräumen, Toiletten und Bibliotheken.',
        'program.rumah_ibadat.p3': 'Bis heute hat YPBG 15 Gotteshäuser in verschiedenen Regionen gebaut und renoviert und Tausenden von Gemeindemitgliedern angemessene Anbetungsstätten provided.',
        'program.rumah_ibadat.objectives.1': 'Angemessene Anbetungseinrichtungen für die Gemeinde bereitstellen',
        'program.rumah_ibadat.objectives.2': 'Spirituelle Bedürfnisse religiöser Gemeinden unterstützen',
        'program.rumah_ibadat.objectives.3': 'Gotteshäuser als Gemeindezentren erhalten',
        'program.rumah_ibadat.objectives.4': 'Toleranz und Harmonie zwischen religiösen Gemeinden aufbauen',
        'program.rumah_ibadat.activities.1.title': 'Gotteshausbau',
        'program.rumah_ibadat.activities.1.desc': 'Neubau von Anbetungsstätten für Gemeinden',
        'program.rumah_ibadat.activities.2.title': 'Renovierung',
        'program.rumah_ibadat.activities.2.desc': 'Reparatur und Renovierung beschädigter Gotteshäuser',
        'program.rumah_ibadat.activities.3.title': 'Unterstützungseinrichtungen',
        'program.rumah_ibadat.activities.3.desc': 'Bau von Waschräumen, Toiletten und Bibliotheken',
        'program.rumah_ibadat.activities.4.title': 'Religiöse Aktivitäten',
        'program.rumah_ibadat.activities.4.desc': 'Unterstützung religiöser und sozialer Aktivitäten in Gotteshäusern',
        'program.rumah_ibadat.timeline': 'Bauprojekte werden in 4-8 Monaten abgeschlossen',
        'program.rumah_ibadat.impact.1.label': 'Gotteshäuser',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Begünstigte Gemeinde',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Bediente Dörfer',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Freiwillige',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Bau von Gotteshäusern für die Gemeinde',
        'program.rumah_ibadat.gallery.2': 'Gruppenfoto mit Gemeinde nach der Einweihung',
        'program.rumah_ibadat.gallery.3': 'Religiöse Aktivitäten in Gotteshäusern',
        'program.rumah_ibadat.gallery.4': 'Unterstützungseinrichtungen für Gotteshäuser',
        'program.rumah_ibadat.reports.1': 'Gotteshausprogrammbericht 2024',
        'program.rumah_ibadat.reports.2': 'Dokumentation von Bau und Renovierung',
        'program.rumah_ibadat.reports.3': 'Partner-Gotteshausprofil'
    },

    'fr': {
        // Header & Navigation
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.programs': 'Programmes',
        'nav.news': 'Actualités',
        'nav.contact': 'Contact',
        'lang.select': 'Sélectionner la langue',
        'skiplink': 'Aller au contenu principal',

        // Hero Section
        'hero.title': 'Servir avec amour,<br>construire avec espoir.',
        'hero.subtitle': 'Yayasan Persada Bakti Global s\'engage dans l\'aide sociale humanitaire durable.',
        'hero.btn.about': 'Connaître Notre Fondation',
        'hero.btn.contact': 'Nous Contacter',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'À Propos',
        'highlight.about.desc': 'Histoire & Vision',
        'highlight.programs.title': 'Programmes',
        'highlight.programs.desc': 'Impact Réel',
        'highlight.news.title': 'Publications',
        'highlight.news.desc': 'Rapports & Actualités',

        // About Section
        'about.title': 'À propos de la Fondation',
        'about.vision': 'Vision',
        'about.vision.desc': 'Être une organisation leader dans l\'autonomisation communautaire et le développement durable.',
        'about.mission': 'Mission',
        'about.mission.li1': 'Autonomiser par l\'éducation et la formation',
        'about.mission.li2': 'Promouvoir l\'innovation sociale',
        'about.mission.li3': 'Établir des partenariats stratégiques',
        'about.values': 'Valeurs Fondamentales',
        'about.values.love': 'Amour',
        'about.values.integrity': 'Intégrité',
        'about.values.hope': 'Espoir',
        'about.values.collaboration': 'Collaboration',
        'about.org': 'Structure Organisationnelle',
        'about.gallery': 'Galerie d\'Activités',
        'carousel.prev': 'Précédent',
        'carousel.next': 'Suivant',

        // Programs Section
        'programs.title': 'Programmes & Activités',
        'programs.filter.all': 'Tous',
        'programs.filter.scholarship': 'Bourse',
        'programs.filter.infrastructure': 'Infrastructure',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programme de Bourses',
        'programs.scholarship.desc': 'Soutien éducatif complet pour les étudiants brillants.',
        'programs.infrastructure': 'Développement d\'Infrastructure',
        'programs.infrastructure.desc': 'Routes villageoises et équipements publics pour les communautés.',
        'programs.mbg': 'Repas Nutritifs Gratuits (MBG)',
        'programs.mbg.desc': 'Conservation de l\'écosystème de mangrove et reboisement côtier.',
        'programs.irrigation': 'Rénovation de Maisons',
        'programs.irrigation.desc': 'Transformation d\'espaces de vie décents.',
        'programs.learn': 'En savoir plus →',

        // News Section
        'news.title': 'Actualités & Publications',
        'news.loadmore': 'Charger Plus',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Nous Contacter',
        'contact.form.title': 'Envoyer un Message',
        'contact.form.name': 'Nom',
        'contact.form.name.placeholder': 'Nom Complet',
        'contact.form.email': 'E-mail',
        'contact.form.email.placeholder': 'exemple@domaine.fr',
        'contact.form.message': 'Message',
        'contact.form.message.placeholder': 'Tapez votre message...',
        'contact.form.submit': 'Envoyer le message',
        'contact.info.title': 'Coordonnées',
        'contact.info.email': 'E-mail',
        'contact.info.phone': 'Téléphone',
        'contact.info.address': 'Adresse',
        'contact.info.address.text': 'Rue Persada Bakti No.123, Jakarta',

        // Footer
        'footer.about': 'À propos de YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global est dédiée à l\'aide humanitaire sociale.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Mentions Légales',
        'footer.privacy': 'Politique de Confidentialité',
        'footer.terms': 'Conditions Générales',
        'footer.language': 'Langue',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Tous droits réservés.',

        // Organization Structure
        'about.org.chairman': 'Président du Conseil',
        'about.org.ceo': 'Directeur Général',
        'about.org.secretary': 'Secrétaire',
        'about.org.treasurer': 'Trésorier',
        'about.org.programs': 'Programmes',
        'about.org.finance': 'Finances',
        'about.org.pr': 'Relations Publiques',

        // News Common Keys
        'news.date': 'Date',
        'news.author': 'Équipe YPBG',
        'news.views': 'Vues',
        'news.gallery': '📸 Documentation Photographique',
        'news.about': '📖 À propos',
        'news.back': 'Retour aux Actualités',
        'news.readmore': 'Lire la suite →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Programme de Bourses 2024 Ouvert',
        'news.1.excerpt': 'YPBG ouvre les inscriptions pour le programme de bourses éducatives...',
        'news.1.category': 'Éducation',
        'news.1.video': '🎥 Vidéo du Programme',
        'news.1.about': '📖 À propos du Programme de Bourses',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) ouvre officiellement les inscriptions pour le Programme de Bourses 2024 pour les étudiants performants de familles défavorisées à travers l\'Indonésie. Ce programme est l\'engagement de YPBG à améliorer la qualité de l\'éducation pour la génération plus jeune d\'Indonésie.',
        'news.1.p2': 'Le Programme de Bourses YPBG fournit un soutien éducatif complet incluant les frais de scolarité, les livres, les uniformes et les allocations mensuelles. À ce jour, le programme de bourses YPBG a aidé plus de 500 étudiants à terminer leurs études avec un taux de réussite de 100%.',
        'news.1.p3': 'Les inscriptions pour le Programme de Bourses 2024 sont ouvertes jusqu\'au 31 mars 2024. Les exigences d\'inscription incluent : (1) Étudiants du collège/lycée avec des réalisations, (2) De familles défavorisées, (3) Haut esprit d\'apprentissage, et (4) Recommandation scolaire.',
        'news.1.gallery.1': '🎓 Distribution d\'aide aux bourses aux étudiants performants',
        'news.1.gallery.2': '👨‍🎓 Photo de groupe avec les boursiers et l\'équipe YPBG',
        'news.1.gallery.3': '📚 Sessions de tutorat pour les boursiers',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Activité de Nettoyage de Plage',
        'news.2.excerpt': 'Des centaines de bénévoles YPBG ont nettoyé avec succès 5 km de plage...',
        'news.2.category': 'Environnement',
        'news.2.video': '🎥 Vidéo de l\'Activité',
        'news.2.about': '📖 À propos du Nettoyage de Plage',
        'news.2.p1': 'Des centaines de bénévoles de Yayasan Persada Bakti Global (YPBG) ont nettoyé avec succès 5 km de côte des déchets plastiques et autres déchets lors d\'une activité de nettoyage de plage organisée le dimanche 10 février 2024.',
        'news.2.p2': 'L\'activité de nettoyage de plage a réuni plus de 300 bénévoles composés de membres YPBG, d\'étudiants, d\'élèves et de communautés locales. Avec un haut esprit d\'entraide, les bénévoles ont travaillé depuis le matin pour nettoyer divers types de déchets échoués sur la plage.',
        'news.2.p3': 'Les déchets collectés ont atteint 2 tonnes, composés de déchets plastiques, de bouteilles et autres déchets ménagers. Ces déchets ont ensuite été triés et gérés selon leur type pour le recyclage ou éliminés de manière écologique.',
        'news.2.p4': 'En plus du nettoyage de la plage, cette activité comprenait également la plantation de 1 000 plants de mangrove pour prévenir l\'abrasion côtière et préserver les écosystèmes marins. YPBG s\'engage à continuer d\'organiser des activités similaires pour maintenir la durabilité de l\'environnement côtier indonésien.',
        'news.2.stat.relawan': 'Bénévoles',
        'news.2.stat.pantai': 'km Plage',
        'news.2.stat.sampah': 'tonnes Déchets',
        'news.2.stat.mangrove': 'Plants de Mangrove',
        'news.2.gallery.1': '🧹 Bénévoles nettoyant les déchets sur la plage',
        'news.2.gallery.2': '🌱 Plantation de plants de mangrove pour prévenir l\'abrasion',
        'news.2.gallery.3': '👥 Photo de groupe avec les bénévoles après l\'activité',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Campagne de Vaccination Gratuite',
        'news.3.excerpt': 'YPBG organise une campagne de vaccination gratuite dans 20 villages...',
        'news.3.category': 'Santé',
        'news.3.video': '🎥 Vidéo de la Campagne',
        'news.3.about': '📖 À propos de la Campagne de Vaccination',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) a organisé une campagne de vaccination gratuite dans 20 villages dans diverses régions d\'Indonésie le lundi 5 février 2024. Ce programme fait partie de l\'engagement de YPBG à améliorer l\'accès à la santé pour les communautés défavorisées.',
        'news.3.p2': 'Cette campagne de vaccination fournit divers types de vaccins gratuits incluant le vaccin COVID-19, le vaccin contre la grippe et le vaccin contre l\'hépatite B. Tous les services sont fournis gratuitement à ceux qui en ont besoin.',
        'news.3.p3': 'Cette activité a été réalisée en collaboration avec le Bureau de Santé local et a impliqué 50 professionnels de santé composés de médecins, d\'infirmières et de sages-femmes. YPBG vise à servir 5 000 bénéficiaires de vaccins dans cette campagne.',
        'news.3.p4': 'En plus de la vaccination, cette activité comprend également des conseils de santé et des examens de santé gratuits. La communauté peut consulter directement les médecins concernant leurs problèmes de santé.',
        'news.3.quote': 'La santé est le droit de tout être humain. Nous nous engageons à garantir que les communautés défavorisées obtiennent également un accès décent à la santé.',
        'news.3.quote.author': 'Directeur YPBG',
        'news.3.vaccines': '📋 Vaccins Disponibles',
        'news.3.vaccine.1': 'Vaccin COVID-19 - Protège du coronavirus',
        'news.3.vaccine.2': 'Vaccin contre la Grippe - Prévient la grippe saisonnière',
        'news.3.vaccine.3': 'Vaccin contre l\'Hépatite B - Protège le foie des infections',
        'news.3.gallery.1': '💉 Processus de vaccination par du personnel médical professionnel',
        'news.3.gallery.2': '👥 Communauté faisant la queue pour obtenir une vaccination gratuite',
        'news.3.gallery.3': '🩺 Conseils de santé pour les communautés villageoises',

        // Program Detail Pages - Back Button
        'program.back': 'Retour aux Programmes',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Programme de Bourses',
        'program.beasiswa.subtitle': 'Soutenir l\'éducation de la jeune génération indonésienne',
        'program.beasiswa.about': 'À propos du Programme de Bourses',
        'program.beasiswa.p1': 'Le Programme de Bourses de la Yayasan Persada Bakti Global est notre engagement à améliorer la qualité de l\'éducation pour la jeune génération indonésienne. Ce programme est conçu pour offrir des opportunités aux élèves performants de familles défavorisées pour poursuivre leurs études.',
        'program.beasiswa.p2': 'Chaque boursier reçoit un soutien complet incluant les frais de scolarité, les livres, les uniformes et les allocations mensuelles. Nous croyons que l\'éducation est la clé pour briser le cycle de la pauvreté et construire un avenir meilleur.',
        'program.beasiswa.p3': 'À ce jour, le Programme de Bourses YPBG a aidé plus de 500 élèves à terminer leurs études, avec un taux de réussite de 100% et de nombreux anciens élèves poursuivant dans des universités prestigieuses.',
        'program.beasiswa.objectives.1': 'Offrir un accès à une éducation de qualité aux élèves performants de familles défavorisées',
        'program.beasiswa.objectives.2': 'Améliorer les taux de réussite et les performances académiques des boursiers',
        'program.beasiswa.objectives.3': 'Développer le caractère et le leadership grâce à des programmes de mentorat',
        'program.beasiswa.objectives.4': 'Créer une jeune génération qui contribue positivement à la société',
        'program.beasiswa.activities.1.title': 'Distribution de Bourses',
        'program.beasiswa.activities.1.desc': 'Distribution symbolique de l\'aide aux bourses aux élèves performants',
        'program.beasiswa.activities.2.title': 'Programme de Tutorat',
        'program.beasiswa.activities.2.desc': 'Tutorat et accompagnement académique pour améliorer les performances',
        'program.beasiswa.activities.3.title': 'Développement du Caractère',
        'program.beasiswa.activities.3.desc': 'Ateliers de leadership et développement des compétences pour les boursiers',
        'program.beasiswa.activities.4.title': 'Rassemblement des Anciens',
        'program.beasiswa.activities.4.desc': 'Réunions régulières avec les anciens pour partager expériences et réseauter',
        'program.beasiswa.timeline': 'Le programme fonctionne toute l\'année scolaire avec des évaluations semestrielles',
        'program.beasiswa.impact.1.label': 'Élèves Aidés',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Taux de Réussite',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Poursuite à l\'Université',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Années d\'Activité',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Distribution d\'aide aux bourses aux élèves performants',
        'program.beasiswa.gallery.2': 'Photo de groupe avec les boursiers et l\'équipe YPBG',
        'program.beasiswa.gallery.3': 'Sessions de tutorat pour les boursiers',
        'program.beasiswa.gallery.4': 'Atelier de développement du caractère et du leadership',
        'program.beasiswa.reports.1': 'Rapport Annuel du Programme de Bourses 2024',
        'program.beasiswa.reports.2': 'Évaluation du Semestre Pair 2024',
        'program.beasiswa.reports.3': 'Profil des Anciens Boursiers',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Développement des Infrastructures',
        'program.infrastruktur.subtitle': 'Construire des installations publiques pour le bien-être communautaire',
        'program.infrastruktur.about': 'À propos du Programme d\'Infrastructure',
        'program.infrastruktur.p1': 'Le Programme de Développement des Infrastructures de la Yayasan Persada Bakti Global se concentre sur le développement d\'installations publiques qui soutiennent l\'économie et le bien-être des communautés. Nous construisons des routes villageoises, des ponts, des systèmes de drainage et d\'autres installations publiques dont les communautés ont grandement besoin.',
        'program.infrastruktur.p2': 'Chacun de nos projets d\'infrastructure est conçu en tenant compte des besoins à long terme de la communauté et de l\'impact environnemental. Nous travaillons avec les gouvernements locaux et les communautés locales pour assurer un développement durable et bénéfique pour tous.',
        'program.infrastruktur.p3': 'À ce jour, YPBG a achevé la construction de plus de 50 km de routes villageoises, 10 ponts et diverses autres installations publiques qui ont amélioré l\'accessibilité et les économies communautaires dans diverses régions.',
        'program.infrastruktur.objectives.1': 'Améliorer l\'accès de la communauté aux installations publiques',
        'program.infrastruktur.objectives.2': 'Promouvoir la croissance économique locale grâce à des infrastructures adéquates',
        'program.infrastruktur.objectives.3': 'Construire des infrastructures respectueuses de l\'environnement et durables',
        'program.infrastruktur.objectives.4': 'Renforcer les partenariats avec les gouvernements locaux et les communautés',
        'program.infrastruktur.activities.1.title': 'Construction de Routes Villageoises',
        'program.infrastruktur.activities.1.desc': 'Construction et réparation de routes villageoises pour améliorer l\'accessibilité',
        'program.infrastruktur.activities.2.title': 'Construction de Ponts',
        'program.infrastruktur.activities.2.desc': 'Construction de ponts pour connecter des zones séparées',
        'program.infrastruktur.activities.3.title': 'Système de Drainage',
        'program.infrastruktur.activities.3.desc': 'Construction de canaux de drainage pour prévenir les inondations',
        'program.infrastruktur.activities.4.title': 'Installations Publiques',
        'program.infrastruktur.activities.4.desc': 'Construction de salles communautaires et autres installations publiques',
        'program.infrastruktur.timeline': 'Les projets d\'infrastructure sont mis en œuvre en phases sur 6-12 mois',
        'program.infrastruktur.impact.1.label': 'Km de Routes Construites',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Ponts',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Villages Accessibles',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Bénéficiaires',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Construction de routes villageoises pour améliorer l\'accessibilité',
        'program.infrastruktur.gallery.2': 'Photo de groupe avec l\'équipe et la communauté après achèvement',
        'program.infrastruktur.gallery.3': 'Construction de ponts pour connecter deux villages',
        'program.infrastruktur.gallery.4': 'Système de drainage construit pour prévenir les inondations',
        'program.infrastruktur.reports.1': 'Rapport de Développement des Infrastructures 2024',
        'program.infrastruktur.reports.2': 'Évaluation de l\'Impact Économique des Infrastructures',
        'program.infrastruktur.reports.3': 'Documentation des Projets de Routes et Ponts',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Programme d\'Irrigation',
        'program.irigasi.subtitle': 'Arroser les rizières pour la sécurité alimentaire',
        'program.irigasi.about': 'À propos du Programme d\'Irrigation',
        'program.irigasi.p1': 'Le Programme d\'Irrigation de la Yayasan Persada Bakti Global se concentre sur la construction et la réhabilitation de systèmes d\'irrigation pour soutenir l\'agriculture communautaire. De bons systèmes d\'irrigation sont essentiels pour augmenter la productivité agricole et le bien-être des agriculteurs.',
        'program.irigasi.p2': 'Nous construisons des canaux d\'irrigation, de petits barrages et des systèmes de pompes à eau qui aident les agriculteurs à irriguer leurs rizières et terres efficacement. Ce programme comprend également une formation à la gestion durable de l\'eau.',
        'program.irigasi.p3': 'À ce jour, YPBG a construit et réhabilité plus de 30 km de canaux d\'irrigation qui irriguent plus de 500 hectares de terres agricoles dans diverses régions.',
        'program.irigasi.objectives.1': 'Augmenter la productivité agricole grâce à des systèmes d\'irrigation adéquats',
        'program.irigasi.objectives.2': 'Optimiser l\'utilisation des ressources en eau pour l\'agriculture',
        'program.irigasi.objectives.3': 'Augmenter les revenus des agriculteurs grâce à l\'amélioration des rendements',
        'program.irigasi.objectives.4': 'Construire des systèmes d\'irrigation durables et respectueux de l\'environnement',
        'program.irigasi.activities.1.title': 'Construction de Canaux d\'Irrigation',
        'program.irigasi.activities.1.desc': 'Construction de nouveaux canaux d\'irrigation pour arroser les terres agricoles',
        'program.irigasi.activities.2.title': 'Réhabilitation de l\'Irrigation',
        'program.irigasi.activities.2.desc': 'Réparation et entretien des systèmes d\'irrigation existants',
        'program.irigasi.activities.3.title': 'Système de Pompe à Eau',
        'program.irigasi.activities.3.desc': 'Installation de pompes à eau pour l\'irrigation des terres sèches',
        'program.irigasi.activities.4.title': 'Formation des Agriculteurs',
        'program.irigasi.activities.4.desc': 'Éducation à la gestion de l\'eau et aux systèmes d\'irrigation durables',
        'program.irigasi.timeline': 'Les projets d\'irrigation sont mis en œuvre selon la saison de plantation avec une durée de 3-6 mois',
        'program.irigasi.impact.1.label': 'Km de Canaux',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Hectares Irrigués',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Agriculteurs Bénéficiaires',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Augmentation du Rendement',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Construction de canaux d\'irrigation pour l\'agriculture communautaire',
        'program.irigasi.gallery.2': 'Photo de groupe avec les agriculteurs après achèvement du projet',
        'program.irigasi.gallery.3': 'Système de pompe à eau pour l\'irrigation des terres sèches',
        'program.irigasi.gallery.4': 'Formation à la gestion de l\'irrigation pour les groupes d\'agriculteurs',
        'program.irigasi.reports.1': 'Rapport du Programme d\'Irrigation 2024',
        'program.irigasi.reports.2': 'Étude d\'Impact de l\'Irrigation sur la Productivité',
        'program.irigasi.reports.3': 'Guide de Gestion Durable de l\'Irrigation',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Programme d\'Alimentation Saine',
        'program.makanan_sehat.subtitle': 'Nutrition équilibrée pour les familles indonésiennes',
        'program.makanan_sehat.about': 'À propos du Programme d\'Alimentation Saine',
        'program.makanan_sehat.p1': 'Le Programme d\'Alimentation Saine de la Yayasan Persada Bakti Global est une initiative pour accroître la sensibilisation et l\'accès de la communauté aux aliments nutritifs. Ce programme fournit une éducation nutritionnelle et une alimentation saine pour les familles défavorisées.',
        'program.makanan_sehat.p2': 'Nous travaillons avec des nutritionnistes et des professionnels de la santé pour préparer des menus nutritifs équilibrés. Ce programme comprend également des conseils sur l\'importance d\'une nutrition équilibrée et de saines habitudes alimentaires.',
        'program.makanan_sehat.p3': 'À ce jour, le Programme d\'Alimentation Saine a atteint plus de 2 000 familles et organisé 50+ séances de conseil nutritionnel dans diverses communautés.',
        'program.makanan_sehat.objectives.1': 'Accroître la sensibilisation de la communauté à l\'importance d\'une nutrition équilibrée',
        'program.makanan_sehat.objectives.2': 'Fournir un accès à des aliments nutritifs pour les familles défavorisées',
        'program.makanan_sehat.objectives.3': 'Réduire les taux de retard de croissance et de malnutrition dans les communautés cibles',
        'program.makanan_sehat.objectives.4': 'Autonomiser les mères dans la préparation d\'aliments nutritifs',
        'program.makanan_sehat.activities.1.title': 'Fourniture d\'Aliments Nutritifs',
        'program.makanan_sehat.activities.1.desc': 'Distribution de colis alimentaires nutritifs pour les familles nécessiteuses',
        'program.makanan_sehat.activities.2.title': 'Conseil Nutritionnel',
        'program.makanan_sehat.activities.2.desc': 'Éducation sur la nutrition équilibrée et les saines habitudes alimentaires',
        'program.makanan_sehat.activities.3.title': 'Démonstration de Cuisine Saine',
        'program.makanan_sehat.activities.3.desc': 'Démonstration de cuisine d\'aliments sains avec des ingrédients locaux',
        'program.makanan_sehat.activities.4.title': 'Dépistage Nutritionnel',
        'program.makanan_sehat.activities.4.desc': 'Dépistage du statut nutritionnel pour les enfants et les femmes enceintes',
        'program.makanan_sehat.timeline': 'Le programme fonctionne toute l\'année avec des activités mensuelles',
        'program.makanan_sehat.impact.1.label': 'Familles Atteintes',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Séances de Conseil',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Colis Alimentaires',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu Partenaires',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Fourniture d\'aliments nutritifs pour la communauté',
        'program.makanan_sehat.gallery.2': 'Conseil nutritionnel et saines habitudes alimentaires',
        'program.makanan_sehat.gallery.3': 'Démonstration de cuisine saine et nutritive',
        'program.makanan_sehat.gallery.4': 'Dépistage nutritionnel pour les enfants et les femmes enceintes',
        'program.makanan_sehat.reports.1': 'Rapport du Programme de Nutrition 2024',
        'program.makanan_sehat.reports.2': 'Évaluation de l\'Impact Nutritionnel sur les Familles',
        'program.makanan_sehat.reports.3': 'Recettes d\'Aliments Sains et Nutritifs',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Repas Nutritifs Gratuits (MBG)',
        'program.mbg.subtitle': 'Nutrition pour l\'avenir des enfants indonésiens',
        'program.mbg.about': 'À propos du Programme MBG',
        'program.mbg.p1': 'Le Programme de Repas Nutritifs Gratuits (MBG) de la Yayasan Persada Bakti Global est notre engagement à améliorer la qualité nutritionnelle de la communauté, en particulier des enfants et des familles défavorisées. Ce programme fournit des aliments nutritifs gratuitement à ceux qui en ont besoin.',
        'program.mbg.p2': 'En plus de la fourniture d\'aliments, le programme MBG comprend également l\'éducation nutritionnelle, la conservation de l\'écosystème des mangroves et le reboisement côtier pour créer un environnement sain et durable.',
        'program.mbg.p3': 'À ce jour, le programme MBG a distribué plus de 10 000 colis alimentaires nutritifs et planté 5 000 arbres de mangrove dans diverses régions côtières d\'Indonésie.',
        'program.mbg.objectives.1': 'Fournir des aliments nutritifs gratuits aux enfants et aux familles défavorisées',
        'program.mbg.objectives.2': 'Améliorer l\'état nutritionnel et la santé des bénéficiaires',
        'program.mbg.objectives.3': 'Préserver l\'environnement grâce à la plantation de mangroves',
        'program.mbg.objectives.4': 'Autonomiser les communautés côtières grâce à des programmes intégrés',
        'program.mbg.activities.1.title': 'Distribution d\'Aliments Nutritifs',
        'program.mbg.activities.1.desc': 'Distribution de colis alimentaires nutritifs aux enfants et aux familles',
        'program.mbg.activities.2.title': 'Plantation de Mangroves',
        'program.mbg.activities.2.desc': 'Activités de conservation de l\'écosystème des mangroves dans les zones côtières',
        'program.mbg.activities.3.title': 'Éducation Nutritionnelle',
        'program.mbg.activities.3.desc': 'Conseils sur l\'importance de la nutrition pour la croissance des enfants',
        'program.mbg.activities.4.title': 'Reboisement Côtier',
        'program.mbg.activities.4.desc': 'Plantation d\'arbres pour prévenir l\'abrasion côtière',
        'program.mbg.timeline': 'Le programme MBG fonctionne toute l\'année avec une distribution hebdomadaire',
        'program.mbg.impact.1.label': 'Colis Alimentaires',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Arbres de Mangrove',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Enfants Bénéficiaires',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Villages Côtiers',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribution d\'aliments nutritifs à la communauté',
        'program.mbg.gallery.2': 'Activités de plantation de mangroves pour la conservation',
        'program.mbg.gallery.3': 'Éducation nutritionnelle pour les mères et les enfants',
        'program.mbg.gallery.4': 'Reboisement côtier pour prévenir l\'abrasion',
        'program.mbg.reports.1': 'Rapport du Programme MBG 2024',
        'program.mbg.reports.2': 'Impact Nutritionnel sur les Enfants Bénéficiaires du MBG',
        'program.mbg.reports.3': 'Documentation de la Plantation de Mangroves',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Bain, Lavage, Toilettes (MCK)',
        'program.mck.subtitle': 'Assainissement approprié pour la santé environnementale',
        'program.mck.about': 'À propos du Programme MCK',
        'program.mck.p1': 'Le Programme MCK (Bain, Lavage, Toilettes) de la Yayasan Persada Bakti Global se concentre sur la construction d\'installations d\'assainissement appropriées pour améliorer la santé environnementale et la qualité de vie de la communauté.',
        'program.mck.p2': 'Nous construisons des installations MCK publiques équipées d\'eau propre, de stations de lavage des mains et de toilettes hygiéniques. Ce programme comprend également une éducation sur l\'importance de la propreté et de l\'assainissement pour prévenir les maladies.',
        'program.mck.p3': 'À ce jour, YPBG a construit 25 unités MCK desservant plus de 5 000 résidents dans diverses régions, réduisant considérablement les taux de maladies dues à un mauvais assainissement.',
        'program.mck.objectives.1': 'Fournir des installations d\'assainissement appropriées pour la communauté',
        'program.mck.objectives.2': 'Accroître la sensibilisation à l\'importance de la propreté et de l\'assainissement',
        'program.mck.objectives.3': 'Réduire les taux de maladies dues à un mauvais assainissement',
        'program.mck.objectives.4': 'Promouvoir des comportements propres et sains',
        'program.mck.activities.1.title': 'Construction MCK',
        'program.mck.activities.1.desc': 'Construction d\'installations MCK publiques avec des normes hygiéniques',
        'program.mck.activities.2.title': 'Éducation à l\'Assainissement',
        'program.mck.activities.2.desc': 'Conseils sur l\'importance de l\'assainissement et de la propreté',
        'program.mck.activities.3.title': 'Lavage des Mains',
        'program.mck.activities.3.desc': 'Promotion du lavage des mains avec du savon pour prévenir les maladies',
        'program.mck.activities.4.title': 'Entretien MCK',
        'program.mck.activities.4.desc': 'Formation à la gestion et à l\'entretien des installations MCK',
        'program.mck.timeline': 'La construction MCK est achevée en 2-3 mois par unité',
        'program.mck.impact.1.label': 'Unités MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Bénéficiaires',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Réduction des Maladies',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Villages Desservis',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Construction d\'installations MCK pour la communauté',
        'program.mck.gallery.2': 'Éducation à la propreté et à l\'assainissement',
        'program.mck.gallery.3': 'Installations MCK achevées',
        'program.mck.gallery.4': 'Sensibilisation au lavage des mains avec du savon',
        'program.mck.reports.1': 'Rapport du Programme d\'Assainissement 2024',
        'program.mck.reports.2': 'Impact du MCK sur la Santé Communautaire',
        'program.mck.reports.3': 'Guide de Gestion Communale du MCK',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Programme d\'Orphelinat',
        'program.panti_asuhan.subtitle': 'Amour pour les enfants orphelins',
        'program.panti_asuhan.about': 'À propos du Programme d\'Orphelinat',
        'program.panti_asuhan.p1': 'Le Programme d\'Orphelinat de la Yayasan Persada Bakti Global est notre souci des enfants orphelins et défavorisés. Ce programme fournit une aide sous forme de nourriture, de vêtements, d\'éducation et d\'installations pour les orphelinats.',
        'program.panti_asuhan.p2': 'Nous travaillons avec divers orphelinats pour garantir que les enfants reçoivent des soins et une éducation appropriés. Ce programme comprend également des activités récréatives, du tutorat et du développement des talents pour les enfants.',
        'program.panti_asuhan.p3': 'À ce jour, YPBG a aidé 20 orphelinats avec un total de plus de 500 enfants bénéficiant de ce programme, leur donnant espoir et un avenir meilleur.',
        'program.panti_asuhan.objectives.1': 'Fournir les besoins de base aux enfants orphelins et défavorisés',
        'program.panti_asuhan.objectives.2': 'Soutenir l\'éducation et le développement des talents des enfants',
        'program.panti_asuhan.objectives.3': 'Offrir amour et attention aux enfants',
        'program.panti_asuhan.objectives.4': 'Améliorer la qualité des installations des orphelinats',
        'program.panti_asuhan.activities.1.title': 'Aide Régulière',
        'program.panti_asuhan.activities.1.desc': 'Distribution de nourriture, de vêtements et de premières nécessités',
        'program.panti_asuhan.activities.2.title': 'Tutorat',
        'program.panti_asuhan.activities.2.desc': 'Tutorat et aide aux leçons pour les enfants d\'orphelinat',
        'program.panti_asuhan.activities.3.title': 'Activités Récréatives',
        'program.panti_asuhan.activities.3.desc': 'Activités de plein air et amusantes pour les enfants',
        'program.panti_asuhan.activities.4.title': 'Développement des Talents',
        'program.panti_asuhan.activities.4.desc': 'Formation en arts, sports et compétences pour les enfants',
        'program.panti_asuhan.timeline': 'Le programme fonctionne toute l\'année avec des visites mensuelles',
        'program.panti_asuhan.impact.1.label': 'Orphelinats Partenaires',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Enfants Bénéficiaires',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Aide Distribuée',
        'program.panti_asuhan.impact.3.value': '24x/an',
        'program.panti_asuhan.impact.4.label': 'Bénévoles',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribution d\'aide pour les orphelinats',
        'program.panti_asuhan.gallery.2': 'Activités récréatives et tutorat',
        'program.panti_asuhan.gallery.3': 'Photo de groupe avec les enfants d\'orphelinat',
        'program.panti_asuhan.gallery.4': 'Activités de développement des talents et des arts',
        'program.panti_asuhan.reports.1': 'Rapport du Programme d\'Orphelinat 2024',
        'program.panti_asuhan.reports.2': 'Profil des Enfants Remarquables des Orphelinats',
        'program.panti_asuhan.reports.3': 'Documentation des Activités d\'Orphelinat',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Programme de Traitement Médical',
        'program.pengobatan.subtitle': 'Services de santé pour la communauté',
        'program.pengobatan.about': 'À propos du Programme de Traitement Médical',
        'program.pengobatan.p1': 'Le Programme de Traitement Médical de la Yayasan Persada Bakti Global fournit des services de santé gratuits pour les communautés défavorisées. Ce programme comprend des examens de santé généraux, des traitements gratuits et des conseils de santé.',
        'program.pengobatan.p2': 'Nous travaillons avec des médecins, des infirmières et des professionnels de la santé pour fournir des services médicaux de qualité. Ce programme comprend également la distribution gratuite de médicaments et des examens de santé réguliers.',
        'program.pengobatan.p3': 'À ce jour, le Programme de Traitement Médical YPBG a servi plus de 3 000 patients et organisé 40+ activités de service social de santé dans diverses régions, offrant un accès à la santé à ceux qui en ont besoin.',
        'program.pengobatan.objectives.1': 'Fournir un accès aux services de santé pour les communautés défavorisées',
        'program.pengobatan.objectives.2': 'Accroître la sensibilisation à l\'importance de la santé préventive',
        'program.pengobatan.objectives.3': 'Fournir des médicaments gratuits à ceux qui en ont besoin',
        'program.pengobatan.objectives.4': 'Établir des partenariats avec des professionnels de la santé',
        'program.pengobatan.activities.1.title': 'Service Social de Santé',
        'program.pengobatan.activities.1.desc': 'Services d\'examen et de traitement gratuits',
        'program.pengobatan.activities.2.title': 'Examen de Santé',
        'program.pengobatan.activities.2.desc': 'Dépistage de santé général et maladies non transmissibles',
        'program.pengobatan.activities.3.title': 'Distribution de Médicaments',
        'program.pengobatan.activities.3.desc': 'Distribution de médicaments gratuits pour les patients',
        'program.pengobatan.activities.4.title': 'Conseil de Santé',
        'program.pengobatan.activities.4.desc': 'Éducation sur le mode de vie sain et la prévention des maladies',
        'program.pengobatan.timeline': 'Les activités de service social de santé sont menées mensuellement',
        'program.pengobatan.impact.1.label': 'Patients Servis',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Services de Santé',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Médicaments Distribués',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Professionnels de Santé Partenaires',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Services de traitement médical gratuits pour la communauté',
        'program.pengobatan.gallery.2': 'Examen de santé par l\'équipe médicale',
        'program.pengobatan.gallery.3': 'Conseil de santé et distribution gratuite de médicaments',
        'program.pengobatan.gallery.4': 'Service social de santé dans les zones reculées',
        'program.pengobatan.reports.1': 'Rapport du Programme de Santé 2024',
        'program.pengobatan.reports.2': 'Statistiques des Patients et des Maladies',
        'program.pengobatan.reports.3': 'Documentation du Service Social de Santé',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Programme de Lieux de Culte',
        'program.rumah_ibadat.subtitle': 'Installations de culte pour les communautés religieuses',
        'program.rumah_ibadat.about': 'À propos du Programme de Lieux de Culte',
        'program.rumah_ibadat.p1': 'Le Programme de Lieux de Culte de la Yayasan Persada Bakti Global est notre engagement à soutenir les installations de culte pour la communauté. Nous construisons et rénovons des mosquées, des salles de prière, des églises, des temples et des viharas pour soutenir les besoins spirituels de la communauté.',
        'program.rumah_ibadat.p2': 'Chaque construction de lieu de culte est réalisée en tenant compte des besoins de la communauté locale et des normes de construction appropriées. Ce programme comprend également la fourniture d\'installations de soutien telles que des zones d\'ablution, des toilettes et des bibliothèques.',
        'program.rumah_ibadat.p3': 'À ce jour, YPBG a construit et rénové 15 lieux de culte dans diverses régions, offrant des lieux de culte appropriés à des milliers de congrégations.',
        'program.rumah_ibadat.objectives.1': 'Fournir des installations de culte appropriées pour la communauté',
        'program.rumah_ibadat.objectives.2': 'Soutenir les besoins spirituels des communautés religieuses',
        'program.rumah_ibadat.objectives.3': 'Préserver les lieux de culte comme centres communautaires',
        'program.rumah_ibadat.objectives.4': 'Construire la tolérance et l\'harmonie entre les communautés religieuses',
        'program.rumah_ibadat.activities.1.title': 'Construction de Lieu de Culte',
        'program.rumah_ibadat.activities.1.desc': 'Nouvelle construction de lieux de culte pour les communautés',
        'program.rumah_ibadat.activities.2.title': 'Rénovation',
        'program.rumah_ibadat.activities.2.desc': 'Réparation et rénovation de lieux de culte endommagés',
        'program.rumah_ibadat.activities.3.title': 'Installations de Soutien',
        'program.rumah_ibadat.activities.3.desc': 'Construction de zones d\'ablution, de toilettes et de bibliothèques',
        'program.rumah_ibadat.activities.4.title': 'Activités Religieuses',
        'program.rumah_ibadat.activities.4.desc': 'Soutien aux activités religieuses et sociales dans les lieux de culte',
        'program.rumah_ibadat.timeline': 'Les projets de construction sont achevés en 4-8 mois',
        'program.rumah_ibadat.impact.1.label': 'Lieux de Culte',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congrégation Bénéficiaire',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Villages Desservis',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Bénévoles',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Construction de lieux de culte pour la communauté',
        'program.rumah_ibadat.gallery.2': 'Photo de groupe avec la congrégation après l\'inauguration',
        'program.rumah_ibadat.gallery.3': 'Activités religieuses dans les lieux de culte',
        'program.rumah_ibadat.gallery.4': 'Installations de soutien pour les lieux de culte',
        'program.rumah_ibadat.reports.1': 'Rapport du Programme de Lieux de Culte 2024',
        'program.rumah_ibadat.reports.2': 'Documentation de Construction et Rénovation',
        'program.rumah_ibadat.reports.3': 'Profil du Lieu de Culte Partenaire'
    },

    'it': {
        // Header & Navigation
        'nav.home': 'Home',
        'nav.about': 'Chi Siamo',
        'nav.programs': 'Programmi',
        'nav.news': 'Notizie',
        'nav.contact': 'Contatti',
        'lang.select': 'Seleziona lingua',
        'skiplink': 'Salta al contenuto principale',

        // Hero Section
        'hero.title': 'Servendo con amore,<br>costruendo con speranza.',
        'hero.subtitle': 'Yayasan Persada Bakti Global si impegna nell\'assistenza sociale umanitaria sostenibile.',
        'hero.btn.about': 'Conosci la Nostra Fondazione',
        'hero.btn.contact': 'Contattaci',

        // Brand
        'brand.name': 'Yayasan Persada Bakti Global',

        // Home Highlights
        'highlight.about.title': 'Su di Noi',
        'highlight.about.desc': 'Storia & Visione',
        'highlight.programs.title': 'Programmi',
        'highlight.programs.desc': 'Impatto Reale',
        'highlight.news.title': 'Pubblicazioni',
        'highlight.news.desc': 'Rapporti & Notizie',

        // About Section
        'about.title': 'Sulla Fondazione',
        'about.vision': 'Visione',
        'about.vision.desc': 'Essere un\'organizzazione leader nell\'empowerment comunitario e nello sviluppo sostenibile.',
        'about.mission': 'Missione',
        'about.mission.li1': 'Potenziare attraverso l\'istruzione e la formazione',
        'about.mission.li2': 'Promuovere l\'innovazione sociale',
        'about.mission.li3': 'Costruire partnership strategiche',
        'about.values': 'Valori Fondamentali',
        'about.values.love': 'Amore',
        'about.values.integrity': 'Integrità',
        'about.values.hope': 'Speranza',
        'about.values.collaboration': 'Collaborazione',
        'about.org': 'Struttura Organizzativa',
        'about.gallery': 'Galleria Attività',
        'carousel.prev': 'Precedente',
        'carousel.next': 'Successivo',

        // Programs Section
        'programs.title': 'Programmi & Attività',
        'programs.filter.all': 'Tutti',
        'programs.filter.scholarship': 'Borsa di Studio',
        'programs.filter.infrastructure': 'Infrastruttura',
        'programs.filter.mbg': 'MBG',
        'programs.scholarship': 'Programma di Borse di Studio',
        'programs.scholarship.desc': 'Supporto educativo completo per studenti meritevoli.',
        'programs.infrastructure': 'Sviluppo Infrastrutturale',
        'programs.infrastructure.desc': 'Strade villaggiane e strutture pubbliche per le comunità.',
        'programs.mbg': 'Pasti Nutrienti Gratuiti (MBG)',
        'programs.mbg.desc': 'Conservazione dell\'ecosistema di mangrovie e riforestazione costiera.',
        'programs.irrigation': 'Ristrutturazione Case',
        'programs.irrigation.desc': 'Trasformazione di spazi abitativi dignitosi.',
        'programs.learn': 'Scopri di più →',

        // News Section
        'news.title': 'Notizie & Pubblicazioni',
        'news.loadmore': 'Carica Altri',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // Contact Section
        'contact.title': 'Contattaci',
        'contact.form.title': 'Invia Messaggio',
        'contact.form.name': 'Nome',
        'contact.form.name.placeholder': 'Nome Completo',
        'contact.form.email': 'E-mail',
        'contact.form.email.placeholder': 'esempio@dominio.it',
        'contact.form.message': 'Messaggio',
        'contact.form.message.placeholder': 'Scrivi il tuo messaggio...',
        'contact.form.submit': 'Invia messaggio',
        'contact.info.title': 'Informazioni di Contatto',
        'contact.info.email': 'E-mail',
        'contact.info.phone': 'Telefono',
        'contact.info.address': 'Indirizzo',
        'contact.info.address.text': 'Via Persada Bakti N.123, Jakarta',

        // Footer
        'footer.about': 'Su YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global è dedicata all\'assistenza umanitaria sociale.',
        'footer.nav': 'Navigazione',
        'footer.legal': 'Legale',
        'footer.privacy': 'Informativa sulla Privacy',
        'footer.terms': 'Termini e Condizioni',
        'footer.language': 'Lingua',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Tutti i diritti riservati.',

        // Organization Structure
        'about.org.chairman': 'Presidente del Consiglio',
        'about.org.ceo': 'Amministratore Delegato',
        'about.org.secretary': 'Segretario',
        'about.org.treasurer': 'Tesoriere',
        'about.org.programs': 'Programmi',
        'about.org.finance': 'Finanza',
        'about.org.pr': 'Relazioni Pubbliche',

        // News Common Keys
        'news.date': 'Data',
        'news.author': 'Team YPBG',
        'news.views': 'Visualizzazioni',
        'news.gallery': '📸 Documentazione Fotografica',
        'news.about': '📖 Informazioni',
        'news.back': 'Torna alle Notizie',
        'news.readmore': 'Leggi di più →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Programma di Borse di Studio 2024 Aperto',
        'news.1.excerpt': 'YPBG apre le iscrizioni per il programma di borse di studio educative...',
        'news.1.category': 'Educazione',
        'news.1.video': '🎥 Video del Programma',
        'news.1.about': '📖 Informazioni sul Programma di Borse di Studio',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) apre ufficialmente le iscrizioni per il Programma di Borse di Studio 2024 per studenti ad alto rendimento di famiglie svantaggiate in tutta l\'Indonesia. Questo programma è l\'impegno di YPBG per migliorare la qualità dell\'educazione per la generazione più giovane dell\'Indonesia.',
        'news.1.p2': 'Il Programma di Borse di Studio YPBG fornisce supporto educativo completo incluse tasse scolastiche, libri, uniformi e assegni mensili. Ad oggi, il programma di borse di studio YPBG ha aiutato più di 500 studenti a completare la loro educazione con un tasso di laurea del 100%.',
        'news.1.p3': 'Le iscrizioni per il Programma di Borse di Studio 2024 sono aperte fino al 31 marzo 2024. I requisiti di iscrizione includono: (1) Studenti delle scuole medie/superiori con risultati, (2) Provenienti da famiglie svantaggiate, (3) Alto spirito di apprendimento, e (4) Raccomandazione scolastica.',
        'news.1.gallery.1': '🎓 Distribuzione di aiuto per borse di studio a studenti ad alto rendimento',
        'news.1.gallery.2': '👨‍🎓 Foto di gruppo con borsisti e team YPBG',
        'news.1.gallery.3': '📚 Sessioni di tutoraggio per borsisti',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Attività di Pulizia della Spiaggia',
        'news.2.excerpt': 'Centinaia di volontari YPBG hanno pulito con successo 5 km di spiaggia...',
        'news.2.category': 'Ambiente',
        'news.2.video': '🎥 Video dell\'Attività',
        'news.2.about': '📖 Informazioni sulla Pulizia della Spiaggia',
        'news.2.p1': 'Centinaia di volontari di Yayasan Persada Bakti Global (YPBG) hanno pulito con successo 5 km di costa da rifiuti di plastica e altri rifiuti in un\'attività di pulizia della spiaggia tenuta domenica 10 febbraio 2024.',
        'news.2.p2': 'L\'attività di pulizia della spiaggia ha visto la partecipazione di più di 300 volontari composti da membri YPBG, studenti, alunni e comunità locali. Con alto spirito di mutua cooperazione, i volontari hanno lavorato dalla mattina pulendo vari tipi di rifiuti trasportati sulla spiaggia.',
        'news.2.p3': 'I rifiuti raccolti hanno raggiunto 2 tonnellate, composti da rifiuti di plastica, bottiglie e altri rifiuti domestici. Questi rifiuti sono stati poi smistati e gestiti secondo il tipo per il riciclaggio o smaltiti in modo ecologico.',
        'news.2.p4': 'Oltre alla pulizia della spiaggia, questa attività ha incluso anche la piantumazione di 1.000 piantine di mangrovie per prevenire l\'abrasione costiera e preservare gli ecosistemi marini. YPBG si impegna a continuare a tenere attività simili per mantenere la sostenibilità dell\'ambiente costiero indonesiano.',
        'news.2.stat.relawan': 'Volontari',
        'news.2.stat.pantai': 'km Spiaggia',
        'news.2.stat.sampah': 'tonnellate Rifiuti',
        'news.2.stat.mangrove': 'Piantine di Mangrovie',
        'news.2.gallery.1': '🧹 Volontari che puliscono i rifiuti sulla spiaggia',
        'news.2.gallery.2': '🌱 Piantumazione di piantine di mangrovie per prevenire l\'abrasione',
        'news.2.gallery.3': '👥 Foto di gruppo con i volontari dopo l\'attività',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Campagna di Vaccinazione Gratuita',
        'news.3.excerpt': 'YPBG tiene campagna di vaccinazione gratuita in 20 villaggi...',
        'news.3.category': 'Salute',
        'news.3.video': '🎥 Video della Campagna',
        'news.3.about': '📖 Informazioni sulla Campagna di Vaccinazione',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) ha tenuto una campagna di vaccinazione gratuita in 20 villaggi in varie regioni dell\'Indonesia lunedì 5 febbraio 2024. Questo programma è parte dell\'impegno di YPBG per migliorare l\'accesso alla salute per le comunità svantaggiate.',
        'news.3.p2': 'Questa campagna di vaccinazione fornisce vari tipi di vaccini gratuiti incluso vaccino COVID-19, vaccino antinfluenzale e vaccino contro l\'epatite B. Tutti i servizi sono forniti gratuitamente a chi ne ha bisogno.',
        'news.3.p3': 'Questa attività è stata realizzata in collaborazione con l\'Ufficio Sanitario locale e ha coinvolto 50 professionisti medici composti da medici, infermieri e ostetriche. YPBG mira a servire 5.000 destinatari di vaccini in questa campagna.',
        'news.3.p4': 'Oltre alla vaccinazione, questa attività include anche consulenza sanitaria ed esami sanitari gratuiti. La comunità può consultare direttamente i medici riguardo i loro problemi di salute.',
        'news.3.quote': 'La salute è diritto di ogni essere umano. Siamo impegnati a garantire che le comunità svantaggiate ottengano anche accesso decente alla salute.',
        'news.3.quote.author': 'Direttore YPBG',
        'news.3.vaccines': '📋 Vaccini Disponibili',
        'news.3.vaccine.1': 'Vaccino COVID-19 - Protegge dal coronavirus',
        'news.3.vaccine.2': 'Vaccino Antinfluenzale - Previene l\'influenza stagionale',
        'news.3.vaccine.3': 'Vaccino contro l\'Epatite B - Protegge il fegato dalle infezioni',
        'news.3.gallery.1': '💉 Processo di vaccinazione da personale medico professionale',
        'news.3.gallery.2': '👥 Comunità in fila per ottenere vaccinazione gratuita',
        'news.3.gallery.3': '🩺 Consulenza sanitaria per comunità di villaggio',

        // Program Detail Pages - Back Button
        'program.back': 'Torna ai Programmi',

        // Program 1: Beasiswa (Scholarship)
        'program.beasiswa.title': 'Programma di Borse di Studio',
        'program.beasiswa.subtitle': 'Sostenere l\'educazione della giovane generazione indonesiana',
        'program.beasiswa.about': 'Informazioni sul Programma di Borse di Studio',
        'program.beasiswa.p1': 'Il Programma di Borse di Studio della Yayasan Persada Bakti Global è il nostro impegno a migliorare la qualità dell\'educazione per la giovane generazione indonesiana. Questo programma è progettato per offrire opportunità a studenti meritevoli di famiglie svantaggiate di continuare la loro istruzione.',
        'program.beasiswa.p2': 'Ogni borsista riceve supporto completo incluse tasse scolastiche, libri, uniformi e indennità mensili. Crediamo che l\'educazione sia la chiave per rompere il ciclo della povertà e costruire un futuro migliore.',
        'program.beasiswa.p3': 'Ad oggi, il Programma di Borse di Studio YPBG ha aiutato più di 500 studenti a completare la loro istruzione, con un tasso di laurea del 100% e molti alumni che continuano in università prestigiose.',
        'program.beasiswa.objectives.1': 'Fornire accesso a educazione di qualità per studenti meritevoli di famiglie svantaggiate',
        'program.beasiswa.objectives.2': 'Migliorare i tassi di laurea e i risultati accademici dei borsisti',
        'program.beasiswa.objectives.3': 'Costruire carattere e leadership attraverso programmi di mentoring',
        'program.beasiswa.objectives.4': 'Creare una giovane generazione che contribuisca positivamente alla società',
        'program.beasiswa.activities.1.title': 'Distribuzione di Borse di Studio',
        'program.beasiswa.activities.1.desc': 'Distribuzione simbolica di aiuto per borse di studio a studenti meritevoli',
        'program.beasiswa.activities.2.title': 'Programma di Tutoraggio',
        'program.beasiswa.activities.2.desc': 'Tutoraggio e guida accademica per migliorare i risultati accademici',
        'program.beasiswa.activities.3.title': 'Sviluppo del Carattere',
        'program.beasiswa.activities.3.desc': 'Workshop di leadership e sviluppo di competenze per borsisti',
        'program.beasiswa.activities.4.title': 'Incontro degli Alumni',
        'program.beasiswa.activities.4.desc': 'Incontri regolari con alumni per condividere esperienze e costruire reti',
        'program.beasiswa.timeline': 'Il programma funziona durante tutto l\'anno scolastico con valutazioni semestrali',
        'program.beasiswa.impact.1.label': 'Studenti Aiutati',
        'program.beasiswa.impact.1.value': '500+',
        'program.beasiswa.impact.2.label': 'Tasso di Laurea',
        'program.beasiswa.impact.2.value': '100%',
        'program.beasiswa.impact.3.label': 'Continua all\'Università',
        'program.beasiswa.impact.3.value': '85%',
        'program.beasiswa.impact.4.label': 'Anni di Attività',
        'program.beasiswa.impact.4.value': '10+',
        'program.beasiswa.gallery.1': 'Distribuzione di aiuto per borse di studio a studenti meritevoli',
        'program.beasiswa.gallery.2': 'Foto di gruppo con borsisti e team YPBG',
        'program.beasiswa.gallery.3': 'Sessioni di tutoraggio per borsisti',
        'program.beasiswa.gallery.4': 'Workshop di sviluppo del carattere e leadership',
        'program.beasiswa.reports.1': 'Rapporto Annuale del Programma di Borse di Studio 2024',
        'program.beasiswa.reports.2': 'Valutazione Semestre Pari 2024',
        'program.beasiswa.reports.3': 'Profilo Alumni Borsisti',

        // Program 2: Infrastruktur (Infrastructure)
        'program.infrastruktur.title': 'Sviluppo delle Infrastrutture',
        'program.infrastruktur.subtitle': 'Costruire strutture pubbliche per il benessere della comunità',
        'program.infrastruktur.about': 'Informazioni sul Programma Infrastrutture',
        'program.infrastruktur.p1': 'Il Programma di Sviluppo delle Infrastrutture della Yayasan Persada Bakti Global si concentra sullo sviluppo di strutture pubbliche che supportano l\'economia e il benessere delle comunità. Costruiamo strade di villaggio, ponti, sistemi di drenaggio e altre strutture pubbliche di cui le comunità hanno grande bisogno.',
        'program.infrastruktur.p2': 'Ogni nostro progetto infrastrutturale è progettato considerando le esigenze a lungo termine della comunità e l\'impatto ambientale. Lavoriamo con i governi locali e le comunità locali per garantire uno sviluppo sostenibile e vantaggioso per tutti.',
        'program.infrastruktur.p3': 'Ad oggi, YPBG ha completato la costruzione di più di 50 km di strade di villaggio, 10 ponti e varie altre strutture pubbliche che hanno migliorato l\'accessibilità e le economie delle comunità in diverse regioni.',
        'program.infrastruktur.objectives.1': 'Migliorare l\'accesso della comunità alle strutture pubbliche',
        'program.infrastruktur.objectives.2': 'Promuovere la crescita economica locale attraverso infrastrutture adeguate',
        'program.infrastruktur.objectives.3': 'Costruire infrastrutture rispettose dell\'ambiente e sostenibili',
        'program.infrastruktur.objectives.4': 'Rafforzare le partnership con governi locali e comunità',
        'program.infrastruktur.activities.1.title': 'Costruzione di Strade di Villaggio',
        'program.infrastruktur.activities.1.desc': 'Costruzione e riparazione di strade di villaggio per migliorare l\'accessibilità',
        'program.infrastruktur.activities.2.title': 'Costruzione di Ponti',
        'program.infrastruktur.activities.2.desc': 'Costruzione di ponti per collegare aree separate',
        'program.infrastruktur.activities.3.title': 'Sistema di Drenaggio',
        'program.infrastruktur.activities.3.desc': 'Costruzione di canali di drenaggio per prevenire inondazioni',
        'program.infrastruktur.activities.4.title': 'Strutture Pubbliche',
        'program.infrastruktur.activities.4.desc': 'Costruzione di sale comunali e altre strutture pubbliche',
        'program.infrastruktur.timeline': 'I progetti infrastrutturali sono implementati in fasi nell\'arco di 6-12 mesi',
        'program.infrastruktur.impact.1.label': 'Km di Strade Costruite',
        'program.infrastruktur.impact.1.value': '50+',
        'program.infrastruktur.impact.2.label': 'Ponti',
        'program.infrastruktur.impact.2.value': '10',
        'program.infrastruktur.impact.3.label': 'Villaggi Accessibili',
        'program.infrastruktur.impact.3.value': '25',
        'program.infrastruktur.impact.4.label': 'Beneficiari',
        'program.infrastruktur.impact.4.value': '10.000+',
        'program.infrastruktur.gallery.1': 'Costruzione di strade di villaggio per migliorare l\'accessibilità',
        'program.infrastruktur.gallery.2': 'Foto di gruppo con team e comunità dopo il completamento',
        'program.infrastruktur.gallery.3': 'Costruzione di ponti per collegare due villaggi',
        'program.infrastruktur.gallery.4': 'Sistema di drenaggio costruito per prevenire inondazioni',
        'program.infrastruktur.reports.1': 'Rapporto di Sviluppo Infrastrutturale 2024',
        'program.infrastruktur.reports.2': 'Valutazione dell\'Impatto Economico delle Infrastrutture',
        'program.infrastruktur.reports.3': 'Documentazione di Progetti Stradali e Pontistici',

        // Program 3: Irigasi (Irrigation)
        'program.irigasi.title': 'Programma di Irrigazione',
        'program.irigasi.subtitle': 'Irrigare le risaie per la sicurezza alimentare',
        'program.irigasi.about': 'Informazioni sul Programma di Irrigazione',
        'program.irigasi.p1': 'Il Programma di Irrigazione della Yayasan Persada Bakti Global si concentra sulla costruzione e riabilitazione di sistemi di irrigazione per supportare l\'agricoltura comunitaria. Buoni sistemi di irrigazione sono essenziali per aumentare la produttività agricola e il benessere degli agricoltori.',
        'program.irigasi.p2': 'Costruiamo canali di irrigazione, piccole dighe e sistemi di pompaggio dell\'acqua che aiutano gli agricoltori a irrigare le loro risaie e terreni in modo efficiente. Questo programma include anche formazione sulla gestione sostenibile dell\'acqua.',
        'program.irigasi.p3': 'Ad oggi, YPBG ha costruito e riabilitato più di 30 km di canali di irrigazione che irrigano più di 500 ettari di terreno agricolo in diverse regioni.',
        'program.irigasi.objectives.1': 'Aumentare la produttività agricola attraverso sistemi di irrigazione adeguati',
        'program.irigasi.objectives.2': 'Ottimizzare l\'uso delle risorse idriche per l\'agricoltura',
        'program.irigasi.objectives.3': 'Aumentare il reddito degli agricoltori attraverso il miglioramento dei raccolti',
        'program.irigasi.objectives.4': 'Costruire sistemi di irrigazione sostenibili e rispettosi dell\'ambiente',
        'program.irigasi.activities.1.title': 'Costruzione di Canali di Irrigazione',
        'program.irigasi.activities.1.desc': 'Costruzione di nuovi canali di irrigazione per irrigare terreni agricoli',
        'program.irigasi.activities.2.title': 'Riabilitazione dell\'Irrigazione',
        'program.irigasi.activities.2.desc': 'Riparazione e manutenzione dei sistemi di irrigazione esistenti',
        'program.irigasi.activities.3.title': 'Sistema di Pompaggio dell\'Acqua',
        'program.irigasi.activities.3.desc': 'Installazione di pompe dell\'acqua per l\'irrigazione di terreni aridi',
        'program.irigasi.activities.4.title': 'Formazione degli Agricoltori',
        'program.irigasi.activities.4.desc': 'Educazione alla gestione dell\'acqua e sistemi di irrigazione sostenibili',
        'program.irigasi.timeline': 'I progetti di irrigazione sono implementati secondo la stagione di semina con durata di 3-6 mesi',
        'program.irigasi.impact.1.label': 'Km di Canali',
        'program.irigasi.impact.1.value': '30+',
        'program.irigasi.impact.2.label': 'Ettari Irrigati',
        'program.irigasi.impact.2.value': '500+',
        'program.irigasi.impact.3.label': 'Agricoltori Beneficiari',
        'program.irigasi.impact.3.value': '300+',
        'program.irigasi.impact.4.label': 'Aumento del Rendimento',
        'program.irigasi.impact.4.value': '40%',
        'program.irigasi.gallery.1': 'Costruzione di canali di irrigazione per l\'agricoltura comunitaria',
        'program.irigasi.gallery.2': 'Foto di gruppo con agricoltori dopo il completamento del progetto',
        'program.irigasi.gallery.3': 'Sistema di pompaggio dell\'acqua per l\'irrigazione di terreni aridi',
        'program.irigasi.gallery.4': 'Formazione alla gestione dell\'irrigazione per gruppi di agricoltori',
        'program.irigasi.reports.1': 'Rapporto del Programma di Irrigazione 2024',
        'program.irigasi.reports.2': 'Studio dell\'Impatto dell\'Irrigazione sulla Produttività',
        'program.irigasi.reports.3': 'Guida alla Gestione Sostenibile dell\'Irrigazione',

        // Program 4: Makanan Sehat (Healthy Food)
        'program.makanan_sehat.title': 'Programma di Alimentazione Sana',
        'program.makanan_sehat.subtitle': 'Nutrizione equilibrata per le famiglie indonesiane',
        'program.makanan_sehat.about': 'Informazioni sul Programma di Alimentazione Sana',
        'program.makanan_sehat.p1': 'Il Programma di Alimentazione Sana della Yayasan Persada Bakti Global è un\'iniziativa per aumentare la consapevolezza e l\'accesso della comunità al cibo nutriente. Questo programma fornisce educazione nutrizionale e fornitura di cibo sano per famiglie svantaggiate.',
        'program.makanan_sehat.p2': 'Lavoriamo con nutrizionisti e professionisti della salute per preparare menù nutrienti equilibrati. Questo programma include anche consulenza sull\'importanza di una nutrizione equilibrata e di sane abitudini alimentari.',
        'program.makanan_sehat.p3': 'Ad oggi, il Programma di Alimentazione Sana ha raggiunto più di 2.000 famiglie e condotto 50+ sessioni di consulenza nutrizionale in diverse comunità.',
        'program.makanan_sehat.objectives.1': 'Aumentare la consapevolezza della comunità sull\'importanza di una nutrizione equilibrata',
        'program.makanan_sehat.objectives.2': 'Fornire accesso a cibo nutriente per famiglie svantaggiate',
        'program.makanan_sehat.objectives.3': 'Ridurre i tassi di arresto della crescita e malnutrizione nelle comunità target',
        'program.makanan_sehat.objectives.4': 'Responsabilizzare le madri nella preparazione di cibo nutriente',
        'program.makanan_sehat.activities.1.title': 'Fornitura di Cibo Nutriente',
        'program.makanan_sehat.activities.1.desc': 'Distribuzione di pacchi alimentari nutrienti per famiglie bisognose',
        'program.makanan_sehat.activities.2.title': 'Consulenza Nutrizionale',
        'program.makanan_sehat.activities.2.desc': 'Educazione sulla nutrizione equilibrata e sane abitudini alimentari',
        'program.makanan_sehat.activities.3.title': 'Dimostrazione di Cucina Sana',
        'program.makanan_sehat.activities.3.desc': 'Dimostrazione di cucina di cibo sano con ingredienti locali',
        'program.makanan_sehat.activities.4.title': 'Screening Nutrizionale',
        'program.makanan_sehat.activities.4.desc': 'Screening dello stato nutrizionale per bambini e donne incinte',
        'program.makanan_sehat.timeline': 'Il programma funziona tutto l\'anno con attività mensili',
        'program.makanan_sehat.impact.1.label': 'Famiglie Raggiunte',
        'program.makanan_sehat.impact.1.value': '2.000+',
        'program.makanan_sehat.impact.2.label': 'Sessioni di Consulenza',
        'program.makanan_sehat.impact.2.value': '50+',
        'program.makanan_sehat.impact.3.label': 'Pacchi Alimentari',
        'program.makanan_sehat.impact.3.value': '10.000+',
        'program.makanan_sehat.impact.4.label': 'Posyandu Partner',
        'program.makanan_sehat.impact.4.value': '30',
        'program.makanan_sehat.gallery.1': 'Fornitura di cibo nutriente per la comunità',
        'program.makanan_sehat.gallery.2': 'Consulenza nutrizionale e sane abitudini alimentari',
        'program.makanan_sehat.gallery.3': 'Dimostrazione di cucina sana e nutriente',
        'program.makanan_sehat.gallery.4': 'Screening nutrizionale per bambini e donne incinte',
        'program.makanan_sehat.reports.1': 'Rapporto del Programma Nutrizionale 2024',
        'program.makanan_sehat.reports.2': 'Valutazione dell\'Impatto Nutrizionale sulle Famiglie',
        'program.makanan_sehat.reports.3': 'Ricette di Cibo Sano e Nutriente',

        // Program 5: MBG (Free Nutritious Meals)
        'program.mbg.title': 'Pasti Nutrienti Gratuiti (MBG)',
        'program.mbg.subtitle': 'Nutrizione per il futuro dei bambini indonesiani',
        'program.mbg.about': 'Informazioni sul Programma MBG',
        'program.mbg.p1': 'Il Programma di Pasti Nutrienti Gratuiti (MBG) della Yayasan Persada Bakti Global è il nostro impegno a migliorare la qualità nutrizionale della comunità, in particolare bambini e famiglie svantaggiate. Questo programma fornisce cibo nutriente gratuitamente a chi ne ha bisogno.',
        'program.mbg.p2': 'Oltre alla fornitura di cibo, il programma MBG include anche educazione nutrizionale, conservazione dell\'ecosistema delle mangrovie e riforestazione costiera per creare un ambiente sano e sostenibile.',
        'program.mbg.p3': 'Ad oggi, il programma MBG ha distribuito più di 10.000 pacchi alimentari nutrienti e piantato 5.000 alberi di mangrovia in diverse regioni costiere dell\'Indonesia.',
        'program.mbg.objectives.1': 'Fornire cibo nutriente gratuito per bambini e famiglie svantaggiate',
        'program.mbg.objectives.2': 'Migliorare lo stato nutrizionale e la salute dei beneficiari',
        'program.mbg.objectives.3': 'Preservare l\'ambiente attraverso la piantumazione di mangrovie',
        'program.mbg.objectives.4': 'Responsabilizzare le comunità costiere attraverso programmi integrati',
        'program.mbg.activities.1.title': 'Distribuzione di Cibo Nutriente',
        'program.mbg.activities.1.desc': 'Distribuzione di pacchi alimentari nutrienti a bambini e famiglie',
        'program.mbg.activities.2.title': 'Piantumazione di Mangrovie',
        'program.mbg.activities.2.desc': 'Attività di conservazione dell\'ecosistema delle mangrovie nelle zone costiere',
        'program.mbg.activities.3.title': 'Educazione Nutrizionale',
        'program.mbg.activities.3.desc': 'Consulenza sull\'importanza della nutrizione per la crescita dei bambini',
        'program.mbg.activities.4.title': 'Riforestazione Costiera',
        'program.mbg.activities.4.desc': 'Piantumazione di alberi per prevenire l\'abrasione costiera',
        'program.mbg.timeline': 'Il programma MBG funziona tutto l\'anno con distribuzione settimanale',
        'program.mbg.impact.1.label': 'Pacchi Alimentari',
        'program.mbg.impact.1.value': '10.000+',
        'program.mbg.impact.2.label': 'Alberi di Mangrovia',
        'program.mbg.impact.2.value': '5.000+',
        'program.mbg.impact.3.label': 'Bambini Beneficiari',
        'program.mbg.impact.3.value': '3.000+',
        'program.mbg.impact.4.label': 'Villaggi Costieri',
        'program.mbg.impact.4.value': '15',
        'program.mbg.gallery.1': 'Distribuzione di cibo nutriente alla comunità',
        'program.mbg.gallery.2': 'Attività di piantumazione di mangrovie per la conservazione',
        'program.mbg.gallery.3': 'Educazione nutrizionale per madri e bambini',
        'program.mbg.gallery.4': 'Riforestazione costiera per prevenire l\'abrasione',
        'program.mbg.reports.1': 'Rapporto del Programma MBG 2024',
        'program.mbg.reports.2': 'Impatto Nutrizionale sui Bambini Beneficiari del MBG',
        'program.mbg.reports.3': 'Documentazione della Piantumazione di Mangrovie',

        // Program 6: MCK (Sanitation)
        'program.mck.title': 'Bagno, Lavaggio, Toilette (MCK)',
        'program.mck.subtitle': 'Servizi igienici adeguati per la salute ambientale',
        'program.mck.about': 'Informazioni sul Programma MCK',
        'program.mck.p1': 'Il Programma MCK (Bagno, Lavaggio, Toilette) della Yayasan Persada Bakti Global si concentra sulla costruzione di servizi igienici adeguati per migliorare la salute ambientale e la qualità della vita della comunità.',
        'program.mck.p2': 'Costruiamo strutture MCK pubbliche dotate di acqua pulita, stazioni per il lavaggio delle mani e servizi igienici igienici. Questo programma include anche educazione sull\'importanza della pulizia e dei servizi igienici per prevenire le malattie.',
        'program.mck.p3': 'Ad oggi, YPBG ha costruito 25 unità MCK che servono più di 5.000 residenti in diverse regioni, riducendo significativamente i tassi di malattie dovute a servizi igienici scadenti.',
        'program.mck.objectives.1': 'Fornire servizi igienici adeguati per la comunità',
        'program.mck.objectives.2': 'Aumentare la consapevolezza sull\'importanza della pulizia e dei servizi igienici',
        'program.mck.objectives.3': 'Ridurre i tassi di malattie dovute a servizi igienici scadenti',
        'program.mck.objectives.4': 'Promuovere comportamenti puliti e sani',
        'program.mck.activities.1.title': 'Costruzione MCK',
        'program.mck.activities.1.desc': 'Costruzione di strutture MCK pubbliche con standard igienici',
        'program.mck.activities.2.title': 'Educazione ai Servizi Igienici',
        'program.mck.activities.2.desc': 'Consulenza sull\'importanza dei servizi igienici e della pulizia',
        'program.mck.activities.3.title': 'Lavaggio delle Mani',
        'program.mck.activities.3.desc': 'Promozione del lavaggio delle mani con sapone per prevenire le malattie',
        'program.mck.activities.4.title': 'Manutenzione MCK',
        'program.mck.activities.4.desc': 'Formazione sulla gestione e manutenzione delle strutture MCK',
        'program.mck.timeline': 'La costruzione MCK è completata in 2-3 mesi per unità',
        'program.mck.impact.1.label': 'Unità MCK',
        'program.mck.impact.1.value': '25',
        'program.mck.impact.2.label': 'Beneficiari',
        'program.mck.impact.2.value': '5.000+',
        'program.mck.impact.3.label': 'Riduzione delle Malattie',
        'program.mck.impact.3.value': '60%',
        'program.mck.impact.4.label': 'Villaggi Serviti',
        'program.mck.impact.4.value': '20',
        'program.mck.gallery.1': 'Costruzione di strutture MCK per la comunità',
        'program.mck.gallery.2': 'Educazione alla pulizia e ai servizi igienici',
        'program.mck.gallery.3': 'Strutture MCK completate',
        'program.mck.gallery.4': 'Sensibilizzazione al lavaggio delle mani con sapone',
        'program.mck.reports.1': 'Rapporto del Programma di Servizi Igienici 2024',
        'program.mck.reports.2': 'Impatto del MCK sulla Salute della Comunità',
        'program.mck.reports.3': 'Guida alla Gestione Comunale del MCK',

        // Program 7: Panti Asuhan (Orphanage)
        'program.panti_asuhan.title': 'Programma Orfanotrofio',
        'program.panti_asuhan.subtitle': 'Amore per i bambini orfani',
        'program.panti_asuhan.about': 'Informazioni sul Programma Orfanotrofio',
        'program.panti_asuhan.p1': 'Il Programma Orfanotrofio della Yayasan Persada Bakti Global è la nostra preoccupazione per i bambini orfani e svantaggiati. Questo programma fornisce aiuto sotto forma di cibo, vestiti, educazione e strutture per orfanotrofi.',
        'program.panti_asuhan.p2': 'Lavoriamo con vari orfanotrofi per garantire che i bambini ricevano cure ed educazione adeguate. Questo programma include anche attività ricreative, tutoraggio e sviluppo dei talenti per i bambini.',
        'program.panti_asuhan.p3': 'Ad oggi, YPBG ha aiutato 20 orfanotrofi con un totale di più di 500 bambini che beneficiano di questo programma, dando loro speranza e un futuro migliore.',
        'program.panti_asuhan.objectives.1': 'Fornire bisogni di base per bambini orfani e svantaggiati',
        'program.panti_asuhan.objectives.2': 'Supportare l\'educazione e lo sviluppo dei talenti dei bambini',
        'program.panti_asuhan.objectives.3': 'Fornire amore e attenzione ai bambini',
        'program.panti_asuhan.objectives.4': 'Migliorare la qualità delle strutture degli orfanotrofi',
        'program.panti_asuhan.activities.1.title': 'Aiuto Regolare',
        'program.panti_asuhan.activities.1.desc': 'Distribuzione di cibo, vestiti e necessità di base',
        'program.panti_asuhan.activities.2.title': 'Tutoraggio',
        'program.panti_asuhan.activities.2.desc': 'Tutoraggio e aiuto nei compiti per bambini dell\'orfanotrofio',
        'program.panti_asuhan.activities.3.title': 'Attività Ricreative',
        'program.panti_asuhan.activities.3.desc': 'Attività all\'aperto e divertenti per bambini',
        'program.panti_asuhan.activities.4.title': 'Sviluppo dei Talenti',
        'program.panti_asuhan.activities.4.desc': 'Formazione in arti, sport e competenze per bambini',
        'program.panti_asuhan.timeline': 'Il programma funziona tutto l\'anno con visite mensili',
        'program.panti_asuhan.impact.1.label': 'Orfanotrofi Partner',
        'program.panti_asuhan.impact.1.value': '20',
        'program.panti_asuhan.impact.2.label': 'Bambini Beneficiari',
        'program.panti_asuhan.impact.2.value': '500+',
        'program.panti_asuhan.impact.3.label': 'Aiuto Distribuito',
        'program.panti_asuhan.impact.3.value': '24x/anno',
        'program.panti_asuhan.impact.4.label': 'Volontari',
        'program.panti_asuhan.impact.4.value': '100+',
        'program.panti_asuhan.gallery.1': 'Distribuzione di aiuto per orfanotrofi',
        'program.panti_asuhan.gallery.2': 'Attività ricreative e tutoraggio',
        'program.panti_asuhan.gallery.3': 'Foto di gruppo con bambini dell\'orfanotrofio',
        'program.panti_asuhan.gallery.4': 'Attività di sviluppo dei talenti e delle arti',
        'program.panti_asuhan.reports.1': 'Rapporto del Programma Orfanotrofio 2024',
        'program.panti_asuhan.reports.2': 'Profilo dei Bambini Eccezionali dell\'Orfanotrofio',
        'program.panti_asuhan.reports.3': 'Documentazione delle Attività dell\'Orfanotrofio',

        // Program 8: Pengobatan (Medical Treatment)
        'program.pengobatan.title': 'Programma di Trattamento Medico',
        'program.pengobatan.subtitle': 'Servizi sanitari per la comunità',
        'program.pengobatan.about': 'Informazioni sul Programma di Trattamento Medico',
        'program.pengobatan.p1': 'Il Programma di Trattamento Medico della Yayasan Persada Bakti Global fornisce servizi sanitari gratuiti per le comunità svantaggiate. Questo programma include esami sanitari generali, trattamenti gratuiti e consulenza sanitaria.',
        'program.pengobatan.p2': 'Lavoriamo con medici, infermieri e professionisti della salute per fornire servizi medici di qualità. Questo programma include anche distribuzione gratuita di farmaci ed esami sanitari regolari.',
        'program.pengobatan.p3': 'Ad oggi, il Programma di Trattamento Medico YPBG ha servito più di 3.000 pazienti e condotto 40+ attività di servizio sociale sanitario in diverse regioni, fornendo accesso alla salute a chi ne ha bisogno.',
        'program.pengobatan.objectives.1': 'Fornire accesso ai servizi sanitari per le comunità svantaggiate',
        'program.pengobatan.objectives.2': 'Aumentare la consapevolezza sull\'importanza della salute preventiva',
        'program.pengobatan.objectives.3': 'Fornire farmaci gratuiti a chi ne ha bisogno',
        'program.pengobatan.objectives.4': 'Costruire partnership con professionisti della salute',
        'program.pengobatan.activities.1.title': 'Servizio Sociale Sanitario',
        'program.pengobatan.activities.1.desc': 'Servizi di esame e trattamento gratuiti',
        'program.pengobatan.activities.2.title': 'Esame Sanitario',
        'program.pengobatan.activities.2.desc': 'Screening sanitario generale e malattie non trasmissibili',
        'program.pengobatan.activities.3.title': 'Distribuzione di Farmaci',
        'program.pengobatan.activities.3.desc': 'Distribuzione di farmaci gratuiti per i pazienti',
        'program.pengobatan.activities.4.title': 'Consulenza Sanitaria',
        'program.pengobatan.activities.4.desc': 'Educazione su stile di vita sano e prevenzione delle malattie',
        'program.pengobatan.timeline': 'Le attività di servizio sociale sanitario sono condotte mensilmente',
        'program.pengobatan.impact.1.label': 'Pazienti Serviti',
        'program.pengobatan.impact.1.value': '3.000+',
        'program.pengobatan.impact.2.label': 'Servizi Sanitari',
        'program.pengobatan.impact.2.value': '40+',
        'program.pengobatan.impact.3.label': 'Farmaci Distribuiti',
        'program.pengobatan.impact.3.value': '5.000+',
        'program.pengobatan.impact.4.label': 'Professionisti della Salute Partner',
        'program.pengobatan.impact.4.value': '100+',
        'program.pengobatan.gallery.1': 'Servizi di trattamento medico gratuiti per la comunità',
        'program.pengobatan.gallery.2': 'Esame sanitario da parte del team medico',
        'program.pengobatan.gallery.3': 'Consulenza sanitaria e distribuzione gratuita di farmaci',
        'program.pengobatan.gallery.4': 'Servizio sociale sanitario in aree remote',
        'program.pengobatan.reports.1': 'Rapporto del Programma Sanitario 2024',
        'program.pengobatan.reports.2': 'Statistiche dei Pazienti e delle Malattie',
        'program.pengobatan.reports.3': 'Documentazione del Servizio Sociale Sanitario',

        // Program 9: Rumah Ibadat (House of Worship)
        'program.rumah_ibadat.title': 'Programma Luoghi di Culto',
        'program.rumah_ibadat.subtitle': 'Strutture di culto per le comunità religiose',
        'program.rumah_ibadat.about': 'Informazioni sul Programma Luoghi di Culto',
        'program.rumah_ibadat.p1': 'Il Programma Luoghi di Culto della Yayasan Persada Bakti Global è il nostro impegno a sostenere le strutture di culto per la comunità. Costruiamo e rinnoviamo moschee, sale di preghiera, chiese, templi e vihara per sostenere le esigenze spirituali della comunità.',
        'program.rumah_ibadat.p2': 'Ogni costruzione di luogo di culto è realizzata considerando le esigenze della comunità locale e gli standard costruttivi adeguati. Questo programma include anche la fornitura di strutture di supporto come aree per le abluzioni, servizi igienici e biblioteche.',
        'program.rumah_ibadat.p3': 'Ad oggi, YPBG ha costruito e rinnovato 15 luoghi di culto in diverse regioni, fornendo luoghi di culto adeguati a migliaia di congregazioni.',
        'program.rumah_ibadat.objectives.1': 'Fornire strutture di culto adeguate per la comunità',
        'program.rumah_ibadat.objectives.2': 'Supportare le esigenze spirituali delle comunità religiose',
        'program.rumah_ibadat.objectives.3': 'Preservare i luoghi di culto come centri comunitari',
        'program.rumah_ibadat.objectives.4': 'Costruire tolleranza e armonia tra le comunità religiose',
        'program.rumah_ibadat.activities.1.title': 'Costruzione di Luogo di Culto',
        'program.rumah_ibadat.activities.1.desc': 'Nuova costruzione di luoghi di culto per le comunità',
        'program.rumah_ibadat.activities.2.title': 'Rinnovamento',
        'program.rumah_ibadat.activities.2.desc': 'Riparazione e rinnovamento di luoghi di culto danneggiati',
        'program.rumah_ibadat.activities.3.title': 'Strutture di Supporto',
        'program.rumah_ibadat.activities.3.desc': 'Costruzione di aree per le abluzioni, servizi igienici e biblioteche',
        'program.rumah_ibadat.activities.4.title': 'Attività Religiose',
        'program.rumah_ibadat.activities.4.desc': 'Supporto alle attività religiose e sociali nei luoghi di culto',
        'program.rumah_ibadat.timeline': 'I progetti di costruzione sono completati in 4-8 mesi',
        'program.rumah_ibadat.impact.1.label': 'Luoghi di Culto',
        'program.rumah_ibadat.impact.1.value': '15',
        'program.rumah_ibadat.impact.2.label': 'Congregazione Beneficiaria',
        'program.rumah_ibadat.impact.2.value': '5.000+',
        'program.rumah_ibadat.impact.3.label': 'Villaggi Serviti',
        'program.rumah_ibadat.impact.3.value': '12',
        'program.rumah_ibadat.impact.4.label': 'Volontari',
        'program.rumah_ibadat.impact.4.value': '200+',
        'program.rumah_ibadat.gallery.1': 'Costruzione di luoghi di culto per la comunità',
        'program.rumah_ibadat.gallery.2': 'Foto di gruppo con la congregazione dopo l\'inaugurazione',
        'program.rumah_ibadat.gallery.3': 'Attività religiose nei luoghi di culto',
        'program.rumah_ibadat.gallery.4': 'Strutture di supporto per i luoghi di culto',
        'program.rumah_ibadat.reports.1': 'Rapporto del Programma Luoghi di Culto 2024',
        'program.rumah_ibadat.reports.2': 'Documentazione di Costruzione e Rinnovamento',
        'program.rumah_ibadat.reports.3': 'Profilo del Luogo di Culto Partner'
    },

    'zh': {
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.programs': '计划',
        'nav.news': '新闻',
        'nav.contact': '联系',
        'hero.title': '以爱服务，<br>以希望建设。',
        'hero.subtitle': 'Yayasan Persada Bakti Global致力于可持续社区赋权。',
        'hero.btn.about': '了解我们的基金会',
        'hero.btn.contact': '与我们联系',
        'about.title': '关于基金会',
        'contact.title': '与我们联系',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)。版权所有。',
        
        // Organization Structure
        'about.org.chairman': '主席',
        'about.org.ceo': '执行董事',
        'about.org.secretary': '秘书',
        'about.org.treasurer': '财务主任',
        'about.org.programs': '项目部',
        'about.org.finance': '财务部',
        'about.org.pr': '公共关系部',

        // News Common Keys
        'news.date': '日期',
        'news.author': 'YPBG 团队',
        'news.views': '浏览',
        'news.gallery': '📸 照片记录',
        'news.about': '📖 关于',
        'news.back': '返回新闻',
        'news.readmore': '阅读更多 →',

        // News Article 1 - Scholarship Programme
        'news.1.title': '2024 年奖学金项目开放',
        'news.1.excerpt': 'YPBG 开放教育奖学金项目注册...',
        'news.1.category': '教育',
        'news.1.video': '🎥 项目视频',
        'news.1.about': '📖 关于奖学金项目',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) 正式开放 2024 年奖学金项目注册，面向印度尼西亚各地来自贫困家庭的高成就学生。该项目是 YPBG 致力于提高印度尼西亚年轻一代教育质量的承诺。',
        'news.1.p2': 'YPBG 奖学金项目提供全面的教育支持，包括学费、书籍、制服和每月津贴。迄今为止，YPBG 奖学金项目已帮助 500 多名学生完成学业，毕业率达 100%。',
        'news.1.p3': '2024 年奖学金项目注册开放至 2024 年 3 月 31 日。注册要求包括：(1) 有成就的初/高中学生，(2) 来自贫困家庭，(3) 学习热情高，(4) 学校推荐。',
        'news.1.gallery.1': '🎓 向高成就学生发放奖学金援助',
        'news.1.gallery.2': '👨‍🎓 与奖学金获得者和 YPBG 团队合影',
        'news.1.gallery.3': '📚 为奖学金获得者提供的辅导课程',

        // News Article 2 - Beach Cleanup
        'news.2.title': '海滩清洁活动',
        'news.2.excerpt': '数百名 YPBG 志愿者成功清理了 5 公里海滩...',
        'news.2.category': '环境',
        'news.2.video': '🎥 活动视频',
        'news.2.about': '📖 关于海滩清洁',
        'news.2.p1': '2024 年 2 月 10 日星期日，数百名 Yayasan Persada Bakti Global (YPBG) 志愿者在一次海滩清洁活动中成功清理了 5 公里海岸线的塑料垃圾和其他废物。',
        'news.2.p2': '海滩清洁活动有 300 多名志愿者参加，包括 YPBG 成员、学生、学员和当地社区。志愿者们本着高度的互助精神，从早上开始清理被冲到海滩上的各种垃圾。',
        'news.2.p3': '收集的垃圾达 2 吨，包括塑料垃圾、瓶子和其他生活垃圾。这些垃圾随后按类型分类和管理，用于回收或以环保方式处理。',
        'news.2.p4': '除了海滩清洁外，该活动还包括种植 1000 株红树林幼苗���以防止海岸侵蚀和保护海洋生态系统。YPBG 致力于继续举办类似活动，以维护印度尼西亚沿海环境的可持续性。',
        'news.2.stat.relawan': '志愿者',
        'news.2.stat.pantai': '公里海滩',
        'news.2.stat.sampah': '吨垃圾',
        'news.2.stat.mangrove': '红树林幼苗',
        'news.2.gallery.1': '🧹 志愿者在海滩上清理垃圾',
        'news.2.gallery.2': '🌱 种植红树林幼苗以防止侵蚀',
        'news.2.gallery.3': '👥 活动后与志愿者合影',

        // News Article 3 - Vaccination Campaign
        'news.3.title': '免费疫苗接种活动',
        'news.3.excerpt': 'YPBG 在 20 个村庄举行免费疫苗接种活动...',
        'news.3.category': '健康',
        'news.3.video': '🎥 活动视频',
        'news.3.about': '📖 关于疫苗接种活动',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) 于 2024 年 2 月 5 日星期一在印度尼西亚各地区的 20 个村庄举行了免费疫苗接种活动。该项目是 YPBG 致力于改善贫困社区医疗保健机会的一部分。',
        'news.3.p2': '该疫苗接种活动提供各种免费疫苗，包括 COVID-19 疫苗、流感疫苗和乙型肝炎疫苗。所有服务均免费提供给有需要的人。',
        'news.3.p3': '该活动与当地卫生局合作进行，涉及 50 名专业医务人员，包括医生、护士和助产士。YPBG 的目标是在此次活动中为 5000 名疫苗接种者提供服务。',
        'news.3.p4': '除了疫苗接种外，该活动还包括健康咨询和免费健康检查。社区可以直接向医生咨询他们的健康问题。',
        'news.3.quote': '健康是每个人的权利。我们致力于确保贫困社区也能获得体面的医疗保健。',
        'news.3.quote.author': 'YPBG 总监',
        'news.3.vaccines': '📋 可用疫苗',
        'news.3.vaccine.1': 'COVID-19 疫苗 - 预防冠状病毒',
        'news.3.vaccine.2': '流感疫苗 - 预防季节性流感',
        'news.3.vaccine.3': '乙型肝炎疫苗 - 保护肝脏免受感染',
        'news.3.gallery.1': '💉 专业医务人员进行的疫苗接种过程',
        'news.3.gallery.2': '👥 社区排队接受免费疫苗接种',
        'news.3.gallery.3': '🩺 为村庄社区提供健康咨询'
    },

    'ja': {
        'nav.home': 'ホーム',
        'nav.about': '概要',
        'nav.programs': 'プログラム',
        'nav.news': 'ニュース',
        'nav.contact': 'お問い合わせ',
        'hero.title': '愛をもって奉仕し、<br>希望をもって構築します。',
        'hero.subtitle': 'Yayasan Persada Bakti Globalは持続可能なコミュニティエンパワーメントに取り組んでいます。',
        'hero.btn.about': '私たちの財団を知る',
        'hero.btn.contact': 'お問い合わせ',
        'about.title': '財団について',
        'contact.title': 'お問い合わせ',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)。著作権所有。',
        
        // Organization Structure
        'about.org.chairman': '会長',
        'about.org.ceo': '最高経営責任者',
        'about.org.secretary': '書記',
        'about.org.treasurer': '財務担当',
        'about.org.programs': 'プログラム部',
        'about.org.finance': '財務部',
        'about.org.pr': '広報部',

        // News Common Keys
        'news.date': '日付',
        'news.author': 'YPBG チーム',
        'news.views': '閲覧数',
        'news.gallery': '📸 写真ドキュメント',
        'news.about': '📖 概要',
        'news.back': 'ニュースに戻る',
        'news.readmore': '続きを読む →',

        // News Article 1 - Scholarship Programme
        'news.1.title': '2024 年奨学金プログラム受付開始',
        'news.1.excerpt': 'YPBG が教育奨学金プログラムの登録を開始...',
        'news.1.category': '教育',
        'news.1.video': '🎥 プログラム動画',
        'news.1.about': '📖 奨学金プログラムについて',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) は、インドネシア全国の経済的に恵まれない家庭の優秀な学生向けに、2024 年奨学金プログラムの登録を正式に開始しました。このプログラムは、インドネシアの次世代の教育の質を向上させるという YPBG ��コミットメントです。',
        'news.1.p2': 'YPBG 奨学金プログラムは、授業料、教科書、制服、月々の手当を含む包括的な教育支援を提供します。これまでのところ、YPBG 奨学金プログラムは 500 人以上の学生の学業修了を支援し、100% の卒業率を達成しています。',
        'news.1.p3': '2024 年奨学金プログラムの登録は 2024 年 3 月 31 日まで開かれています。登録要件には以下が含まれます：(1) 実績のある中学生/高校生、(2) 経済的に恵まれない家庭出身、(3) 学習意欲が高い、(4) 学校の推薦。',
        'news.1.gallery.1': '🎓 優秀な学生への奨学金支援の配布',
        'news.1.gallery.2': '👨‍🎓 奨学生と YPBG チームとの集合写真',
        'news.1.gallery.3': '📚 奨学生のためのチュートリアルセッション',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'ビーチクリーンアップ活動',
        'news.2.excerpt': '数百人の YPBG ボランティアが 5km のビーチをsuccessfully に清掃...',
        'news.2.category': '環境',
        'news.2.video': '🎥 活動動画',
        'news.2.about': '📖 ビーチクリーンアップについて',
        'news.2.p1': '数百人の Yayasan Persada Bakti Global (YPBG) ボランティアが、2024 年 2 月 10 日日曜日に開催されたビーチクリーンアップ活動で、5km の海岸線からプラスチックゴミやその他のゴミをsuccessfully に清掃しました。',
        'news.2.p2': 'ビーチクリーンアップ活動には、YPBG メンバー、学生、生徒、地域コミュニティからなる 300 人以上のボランティアが参加しました。ボランティアたちは高い相互協力精神を持って、朝からビーチに打ち上げられた様々な種類のゴミを清掃しました。',
        'news.2.p3': '収集されたゴミは 2 トンに達し、プラスチックゴミ、ボトル、その他の家庭ゴミで構成されていました。これらのゴミはその後、リサイクルのために種類別に分別・管理されるか、環境に優しい方法で処分されました。',
        'news.2.p4': 'ビーチ清掃に加えて、この活動には海岸の侵食を防ぎ、海洋生態系を保護するための 1,000 本のマングローブの苗木の植樹も含まれていました。YPBG は、インドネシアの海岸環境の持続可能性を維持するために、同様の活動を継続して開催することを約束しています。',
        'news.2.stat.relawan': 'ボランティア',
        'news.2.stat.pantai': 'km ビーチ',
        'news.2.stat.sampah': 'トン ゴミ',
        'news.2.stat.mangrove': 'マングローブの苗木',
        'news.2.gallery.1': '🧹 ビーチでゴミを清掃するボランティア',
        'news.2.gallery.2': '🌱 侵食を防ぐためのマングローブの苗木の植樹',
        'news.2.gallery.3': '👥 活動後のボランティアとの集合写真',

        // News Article 3 - Vaccination Campaign
        'news.3.title': '無料ワクチン接種キャンペーン',
        'news.3.excerpt': 'YPBG が 20 の村で無料ワクチン接種キャンペーンを開催...',
        'news.3.category': '健康',
        'news.3.video': '🎥 キャンペーン動画',
        'news.3.about': '📖 ワクチン接種キャンペーンについて',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) は、2024 年 2 月 5 日月曜日にインドネシアの各地域の 20 の村で無料ワクチン接種キャンペーンを開催しました。このプログラムは、恵まれないコミュニティへの医療アクセスを改善するという YPBG のコミットメントの一部です。',
        'news.3.p2': 'このワクチン接種キャンペーンは、COVID-19 ワクチン、インフルエンザワクチン、B 型肝炎ワクチンを含む様々な種類の無料ワクチンを提供します。すべてのサービスは、必要な方に無料で提供されます。',
        'news.3.p3': 'この活動は地域の保健局と協力して実施され、医師、看護師、助産師からなる 50 人の専門医療従事者が関与しました。YPBG は、このキャンペーンで 5,000 人のワクチン接種者へのサービスを目指しています。',
        'news.3.p4': 'ワクチン接種に加えて、この活動には健康相談と無料健康診断も含まれています。コミュニティは健康問題について医師に直接相談できます。',
        'news.3.quote': '健康はすべての人間の権利です。私たちは、恵まれないコミュニティも適切な医療アクセスを得られることを保証することにコミットしています。',
        'news.3.quote.author': 'YPBG ディレクター',
        'news.3.vaccines': '📋 利用可能なワクチン',
        'news.3.vaccine.1': 'COVID-19 ワクチン - コロナウイルスから保護',
        'news.3.vaccine.2': 'インフルエンザワクチン - 季節性インフルエンザを予防',
        'news.3.vaccine.3': 'B 型肝炎ワクチン - 肝臓を感染から保護',
        'news.3.gallery.1': '💉 専門医療従事者によるワクチン接種プロセス',
        'news.3.gallery.2': '👥 無料ワクチン接種を受けるために並ぶコミュニティ',
        'news.3.gallery.3': '🩺 村のコミュニティのための健康相談'
    },

    'ko': {
        'nav.home': '홈',
        'nav.about': '소개',
        'nav.programs': '��로그램',
        'nav.news': '뉴스',
        'nav.contact': '연락처',
        'hero.title': '사랑으로 섬기고,<br>희망으로 구축합니다.',
        'hero.subtitle': 'Yayasan Persada Bakti Global은 지속 가능한 커뮤니티 권한 부여에 중점을 두고 있습니다.',
        'hero.btn.about': '우리의 재단 알아보기',
        'hero.btn.contact': '문의하기',
        'about.title': '재단 소개',
        'contact.title': '문의하기',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). 저작권 소유.',
        
        // Organization Structure
        'about.org.chairman': '회장',
        'about.org.ceo': '최고경영자',
        'about.org.secretary': '서기',
        'about.org.treasurer': '재무담당',
        'about.org.programs': '프로그램 부서',
        'about.org.finance': '재정 부서',
        'about.org.pr': '홍보 부서',

        // News Common Keys
        'news.date': '날짜',
        'news.author': 'YPBG 팀',
        'news.views': '조회수',
        'news.gallery': '📸 사진 문서',
        'news.about': '📖 정보',
        'news.back': '뉴스로 돌아가기',
        'news.readmore': '더 읽기 →',

        // News Article 1 - Scholarship Programme
        'news.1.title': '2024 년 장학금 프로그램 오픈',
        'news.1.excerpt': 'YPBG 가 교육 장학금 프로그램 등록 시작...',
        'news.1.category': '교육',
        'news.1.video': '🎥 프로그램 동영상',
        'news.1.about': '📖 장학금 프로그램 정보',
        'news.1.p1': 'Yayasan Persada Bakti Global(YPBG) 은 인도네시아 전역의 경제적 어려움을 겪는 가정의 우수 학생들을 위한 2024 년 장학금 프로그램 등록을 공식적으로 시작했습니다. 이 프로그램은 인도네시아 차세대의 교육 질 향상을 위한 YPBG 의 약속입니다.',
        'news.1.p2': 'YPBG 장학금 프로그램은 수업료, 교재, 교복 및 월 수당在内的인 교육 지원을 제공합니다. 지금까지 YPBG 장학금 프로그램은 500 명 이상의 학생이 학업을 완료할 수 있도록 도왔으며 100% 졸업률을 달성했습니다.',
        'news.1.p3': '2024 년 장학금 프로그램 등록은 2024 년 3 월 31 일까지 열려 있습니다. 등록 요건에는 다음이 포함됩니다: (1) 실적이 있는 중/고등학생, (2) 경제적 어려움을 겪는 가정 출신, (3) 높은 학습 의지, (4) 학교 추천.',
        'news.1.gallery.1': '🎓 우수 학생들에게 장학금 지원 배분',
        'news.1.gallery.2': '👨‍🎓 장학생과 YPBG 팀과 함께한 단체 사진',
        'news.1.gallery.3': '📚 장학생을 위한 튜토리얼 세션',

        // News Article 2 - Beach Cleanup
        'news.2.title': '해변 정화 활동',
        'news.2.excerpt': '수백 명의 YPBG 자원봉사자가 5km 해변을 성공적으로 정화...',
        'news.2.category': '환경',
        'news.2.video': '🎥 활동 동영상',
        'news.2.about': '📖 해변 정화 정보',
        'news.2.p1': '수백 명의 Yayasan Persada Bakti Global(YPBG) 자원봉사자가 2024 년 2 월 10 일 일요일에 개최된 해변 정화 활동에서 5km 해안선의 플라스틱 쓰레기 및 기타 쓰레기를 성공적으로 제거했습니다.',
        'news.2.p2': '해변 정화 활동에는 YPBG 회원, 학생, pupil 및 지역 사회로 구성된 300 명 이상의 자원봉사자가 참석했습니다. 높은 상부상조 정신으로 자원봉사자들은 아침부터 해변으로 밀려온 다양한 종류의 쓰레기를 청소했습니다.',
        'news.2.p3': '수거된 쓰레기는 2 톤에 달했으며 플라스틱 쓰레기, 병 및 기타 가정용 쓰레기로 구성되었습니다. 이 쓰레기는 이후 재활용을 위해 유형별로 분류 및 관리되거나 환경 친화적인 방식으로 처리되었습니다.',
        'news.2.p4': '해변 청소 외에도 이 활동에는 연안 침식을 방지하고 해양 생태계를 보존하기 위한 1,000 그루의 맹그로브 묘목 심기도 포함되었습니다. YPBG 는 인도네시아 연안 환경의 지속 가능성을 유지하기 위해 유사한 활동을 계속 개최할 것을 약속합니다.',
        'news.2.stat.relawan': '자원봉사자',
        'news.2.stat.pantai': 'km 해변',
        'news.2.stat.sampah': '톤 쓰레기',
        'news.2.stat.mangrove': '맹그로브 묘목',
        'news.2.gallery.1': '🧹 해변에서 쓰레기를 청소하는 자원봉사자',
        'news.2.gallery.2': '🌱 침식을 방지하기 위한 맹그로브 묘목 심기',
        'news.2.gallery.3': '👥 활동 후 자원봉사자들과 함께한 단체 사진',

        // News Article 3 - Vaccination Campaign
        'news.3.title': '무료 예방접종 캠페인',
        'news.3.excerpt': 'YPBG 가 20 개 마을에서 무료 예방접종 캠페인 개최...',
        'news.3.category': '건강',
        'news.3.video': '🎥 캠페인 동영상',
        'news.3.about': '📖 예방접종 캠페인 정보',
        'news.3.p1': 'Yayasan Persada Bakti Global(YPBG) 은 2024 년 2 월 5 일 월요일 인도네시아 여러 지역의 20 개 마을에서 무료 예방접종 캠페인을 개최했습니다. 이 프로그램은 소외 계층의 의료 접근성 개선을 위한 YPBG 의 약속의 일부입니다.',
        'news.3.p2': '이 예방접종 캠페인은 COVID-19 백신, 인플루엔자 백신 및 B 형 간염 백신을 포함한 다양한 유형의 무료 백신을 제공합니다. 모든 서비스는 필요한 분들에게 무료로 제공됩니다.',
        'news.3.p3': '이 활동은 지역 보건소와 협력하여 실시되었으며 의사, 간호사 및 조산사로 구성된 50 명의 전문 의료진이 참여했습니다. YPBG 는 이 캠페인에서 5,000 명의 백신 접종자에게 서비스를 제공하는 것을 목표로 합니다.',
        'news.3.p4': '예방접종 외에도 이 활동에는 건강 상담 및 무료 건강 검진도 포함됩니다. 지역 사�����������는 건강 문제에 대해 의사와 직접 상담할 수 있습니다.',
        'news.3.quote': '건강은 모든 인간의 권리입니다. 우리는 소외 계층도 적절한 의료 접근성을 얻을 수 있도록 보장하는 데 전념합니다.',
        'news.3.quote.author': 'YPBG 이사',
        'news.3.vaccines': '📋 사용 가능한 백신',
        'news.3.vaccine.1': 'COVID-19 백신 - 코로나바이러스로부터 보호',
        'news.3.vaccine.2': '인플루엔자 백신 - 계절성 독감 예방',
        'news.3.vaccine.3': 'B 형 간염 백신 - 간을 감염으로부터 보호',
        'news.3.gallery.1': '💉 전문 의료진에 의한 예방접종 과정',
        'news.3.gallery.2': '👥 무료 예방접종을 받기 위해 줄을 서는 지역 사회',
        'news.3.gallery.3': '🩺 마을 지역 사회를 위한 건강 상담'
    },

    'hi': {
        'nav.home': 'होम',
        'nav.about': 'परिचय',
        'nav.programs': 'कार्यक्रम',
        'nav.news': 'समाचार',
        'nav.contact': 'संपर्क',
        'hero.title': 'प्रेम के साथ सेवा करते हुए,<br>आशा के साथ निर्माण करते हुए।',
        'hero.subtitle': 'Yayasan Persada Bakti Global टिकाऊ सामुदायिक सशक्��िकरण के लिए प्रतिबद्ध है।',
        'hero.btn.about': 'हमारी नींव को जानें',
        'hero.btn.contact': 'हमसे संपर्क करें',
        'about.title': 'नींव के बारे में',
        'contact.title': 'हमसे संपर्क करें',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)। सर्वाधिकार सुरक्षित।',
        
        // Organization Structure
        'about.org.chairman': 'अध्यक्ष',
        'about.org.ceo': 'मुख्य कार्यकारी अधिकारी',
        'about.org.secretary': 'सचिव',
        'about.org.treasurer': 'कोषाध्यक्ष',
        'about.org.programs': 'कार्यक्रम',
        'about.org.finance': 'वित्त',
        'about.org.pr': 'जनसंपर्क',

        // News Common Keys
        'news.date': 'दिनांक',
        'news.author': 'YPBG टीम',
        'news.views': 'दृश्य',
        'news.gallery': '📸 फोटो दस्तावेज़ीकरण',
        'news.about': '📖 के बारे में',
        'news.back': 'समाचार पर वापस जाएं',
        'news.readmore': 'और पढ़ें →',

        // News Article 1 - Scholarship Programme
        'news.1.title': '2024 छात्रवृत्ति कार्यक्रम खुला',
        'news.1.excerpt': 'YPBG शैक्षिक छात्रवृत्ति कार्यक्रम के लिए पंजीकरण खोलता है...',
        'news.1.category': 'शिक्षा',
        'news.1.video': '🎥 कार्यक्रम वीडियो',
        'news.1.about': '📖 छात्रवृत्ति कार्यक्रम के बारे में',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) आधिकारिक तौर पर पूरे इंडोनेशिया में वंचित परिवारों के उच्च उपलब्धि वाले छात्रों के लिए 2024 छात्रवृत्ति कार्यक्रम के लिए पंजीकरण खोलता है। यह कार्यक्रम इंडोनेशिया की युवा पीढ़ी की शिक्षा की गुणवत्ता में सुधार के लिए YPBG की प्रतिबद्धता है।',
        'news.1.p2': 'YPBG छात्रवृत्ति कार्यक्रम में स्कूल शुल्क, किताबें, वर्दी और मासिक भत्ते सहित पूर्ण शैक्षिक सहायता प्रदान की जाती है। अब तक, YPBG छात्रवृत्ति कार्यक्रम ने 100% स्नातक दर के साथ 500 से अधिक छात्रों को अपनी शिक्षा पूरी करने में मदद की है।',
        'news.1.p3': '2024 छात्रवृत्ति कार्यक्रम के लिए पंजीकरण 31 मार्च 2024 तक खुला है। पंजीकरण आवश्यकताओं में शामिल हैं: (1) उपलब्धियों वाले जूनियर/सीनियर हाई स्कूल के छात्र, (2) वंचित परिवारों से, (3) उच्च सीखने की भावना, और (4) स्कूल की सिफारिश।',
        'news.1.gallery.1': '🎓 उच्च उपलब्धि वाले छात्रों को छात्रवृत्ति सहायता का वितरण',
        'news.1.gallery.2': '👨‍🎓 छात्रवृत्ति प्राप्तकर्ताओं और YPBG टीम के साथ समूह फोटो',
        'news.1.gallery.3': '📚 छात्रवृत्ति प्राप्तकर्ताओं के लिए ट्यूटोरियल सत्र',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'बीच सफाई गतिविधि',
        'news.2.excerpt': 'सैकड़ों YPBG स्वयंसेवकों ने सफलतापूर्वक 5 किमी बीच साफ किया...',
        'news.2.category': 'पर्यावरण',
        'news.2.video': '🎥 गतिविधि वीडियो',
        'news.2.about': '📖 बीच सफाई के बारे में',
        'news.2.p1': 'Yayasan Persada Bakti Global (YPBG) के सैकड़ों स्वयंसेवकों ने रविवार, 10 फरवरी 2024 को आयोजित एक बीच सफाई गतिविधि में प्लास्टिक कचरे और अन्य कचरे से 5 किमी तटरेखा को सफलतापूर्वक साफ किया।',
        'news.2.p2': 'बीच सफाई गतिविधि में YPBG सदस्यों, छात्रों, विद्यार्थियों और स्थानीय समुदायों से मिलकर 300 से अधिक स्वयंसेवकों ने भाग लिया। पारस्परिक सहयोग की उच्च भावना के साथ, स्वयंसेवकों ने सुबह से ही बीच पर बहकर आए विभिन्न प्रकार के कचरे को साफ करने का काम किया।',
        'news.2.p3': 'एकत्रित कचरा 2 टन तक पहुंच गया, जिसमें प्लास्टिक कचरा, बोतलें और अन्य घरेलू कचरा शामिल था। इस कचरे को फिर रीसाइक्लिंग के लिए प्रकार के अनुसार छांटा और प्रबंधित किया गया या पर्यावरण के अनुकूल तरीके से निपटाया गया।',
        'news.2.p4': 'बीच सफाई के अलावा, इस गतिविधि में तटीय घर्षण को रोकने और समुद्री पारिस्थितिकी तंत्र को संरक्षित करने के लिए 1,000 मैंग्रोव पौधों को लगाना भी शामिल था। YPBG इंडोनेशिया के तटीय पर्यावरण की स्थिरता बनाए रखने के लिए इसी तरह की गतिविधियां आयोजित करना जारी रखने के लिए प्रतिबद्ध है।',
        'news.2.stat.relawan': 'स्वयंसेवक',
        'news.2.stat.pantai': 'किमी बीच',
        'news.2.stat.sampah': 'टन कचरा',
        'news.2.stat.mangrove': 'मैंग्रोव पौधे',
        'news.2.gallery.1': '🧹 बीच पर कचरा साफ करते स्वयंसेवक',
        'news.2.gallery.2': '🌱 घर्षण को रोकने के लिए मैंग्रोव पौधे लगाना',
        'news.2.gallery.3': '👥 गतिविधि के बाद स्वयंसेवकों के साथ समूह फोटो',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'मुफ्त टीकाकरण अभियान',
        'news.3.excerpt': 'YPBG 20 गांवों में मुफ्त टीकाकरण अभियान आयोजित करता है...',
        'news.3.category': 'स्वास्थ्य',
        'news.3.video': '🎥 अभियान वीडियो',
        'news.3.about': '📖 टीकाकरण अभियान के बारे में',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) ने सोमवार, 5 फरवरी 2024 को इंडोनेशिया के विभिन्न क्षेत्रों के 20 गांवों में मुफ्त टीकाकरण अभियान आयोजित किया। यह कार्यक्रम वंचित समुदायों के लिए स्वास्थ्य तक पहुंच में सुधार के लिए YPBG की प्रतिबद्धता का हिस्सा है।',
        'news.3.p2': 'यह टीकाकरण अभियान COVID-19 टीका, इन्फ्लूएंजा टीका और हेपेटाइटिस बी टीका सहित विभिन्न प्रकार के मुफ्त टीके प्रदान करता है। सभी सेवाएं जरूरतमंदों को मुफ्त में प्रदान की जाती हैं।',
        'news.3.p3': 'यह गतिविधि स्थानीय स्वास्थ्य कार्यालय के सहयोग से की गई और इसमें डॉक्टरों, नर्सों और मिडवाइव्स से मिलकर 50 पेशेवर चिकित्सा कर्मियों को शामिल किया गया। YPBG इस अभियान में 5,000 टीका प्राप्तकर्ताओं की सेवा करने का लक्ष्य रखता है।',
        'news.3.p4': 'टीकाकरण के अलावा, इस गतिविधि में स्वास्थ्य परामर्श और मुफ्त स्वास्थ्य जांच भी शामिल है। समुदाय अपने स्वास्थ्य समस्याओं के संबंध में डॉक्टरों से सीधे परामर्श कर सकता है।',
        'news.3.quote': 'स्वास्थ्य प्रत्येक मानव का अधिकार है। हम यह सुनिश्चित करने के लिए प्रतिबद्ध हैं कि वंचित समुदायों को भी स्वास्थ्य का उचित मिले।',
        'news.3.quote.author': 'YPBG निदेशक',
        'news.3.vaccines': '📋 उपलब्ध टीके',
        'news.3.vaccine.1': 'COVID-19 टीका - कोरोनवायरस से सुरक्षा',
        'news.3.vaccine.2': 'इन्फ्लूएंजा टीका - मौसमी फ्लू को रोकता है',
        'news.3.vaccine.3': 'हेपेटाइटिस बी टीका - संक्रमण से लीवर की रक्षा करता है',
        'news.3.gallery.1': '💉 पेशेवर चिकित्सा कर्मियों द्वारा टीकाकरण प्रक्रिया',
        'news.3.gallery.2': '👥 मुफ्त टीकाकरण प्राप्त करने के लिए कतार में खड़ा समुदाय',
        'news.3.gallery.3': '🩺 गांव के समुदायों के लिए स्वास्थ्य परामर्श'
    },

    'ar': {
        'nav.home': 'الصفحة الرئيسية',
        'nav.about': 'حول',
        'nav.programs': 'البرامج',
        'nav.news': 'الأخبار',
        'nav.contact': 'اتصل بنا',
        'hero.title': 'الخدمة بالحب،<br>البناء بالأمل.',
        'hero.subtitle': 'Yayasan Persada Bakti Global ملتزمة بتمكين المجتمع المستدام.',
        'hero.btn.about': 'تعرف على مؤسستنا',
        'hero.btn.contact': 'اتصل بنا',
        'about.title': 'حول المؤسسة',
        'contact.title': 'اتصل بنا',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). جميع الحقوق محفوظة.',
        
        // Organization Structure
        'about.org.chairman': 'رئيس الجمعية',
        'about.org.ceo': 'الرئيس التنفيذي',
        'about.org.secretary': 'الأمين',
        'about.org.treasurer': 'أمين الصندوق',
        'about.org.programs': 'البرامج',
        'about.org.finance': 'المالية',
        'about.org.pr': 'العلاقات العامة',

        // News Common Keys
        'news.date': 'التاريخ',
        'news.author': 'فريق YPBG',
        'news.views': 'المشاهدات',
        'news.gallery': '📸 توثيق الصور',
        'news.about': '📖 حول',
        'news.back': 'العودة إلى الأخبار',
        'news.readmore': 'اقرأ المزيد →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'برنامج المنح الدراسية 2024 مفتوح',
        'news.1.excerpt': 'YPBG يفتح التسجيل لبرنامج المنح الدراسية التعليمية...',
        'news.1.category': 'التعليم',
        'news.1.video': '🎥 فيديو البرنامج',
        'news.1.about': '📖 حول برنامج المنح الدراسية',
        'news.1.p1': 'تفتح Yayasan Persada Bakti Global (YPBG) رسمياً التسجيل لبرنامج المنح الدراسية 2024 للطلاب المتفوقين من العائلات المحرومة في جميع أنحاء إندونيسيا. هذا البرنامج هو التزام YPBG بتحسين جودة التعليم للجيل الأصغر من إندونيسيا.',
        'news.1.p2': 'يوفر برنامج المنح الدراسية YPBG دعماً تعليمياً كاملاً يشمل الرسوم المدرسية والكتب والزي المدرسي والبدلات الشهرية. حتى الآن، ساعد برنامج المنح الدراسية YPBG أكثر من 500 طالب على إكمال تعليمهم بمعدل تخرج 100%.',
        'news.1.p3': 'التسجيل لبرنامج المنح الدراسية 2024 مفتوح حتى 31 مارس 2024. تشمل متطلبات التسجيل: (1) طلاب المدارس المتوسطة/الثانوية مع إنجازات، (2) من عائلات محرومة، (3) روح تعلم عالية، و (4) توصية مدرسية.',
        'news.1.gallery.1': '🎓 توزيع مساعدة المنح الدراسية للطلاب المتفوقين',
        'news.1.gallery.2': '👨‍🎓 صورة جماعية مع مستلمي المنح وفريق YPBG',
        'news.1.gallery.3': '📚 جلسات تعليمية لمستلمي المنح',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'نشاط تنظيف الشاطئ',
        'news.2.excerpt': 'مئات المتطوعين YPBG نجحوا في تنظيف 5 كم من الشاطئ...',
        'news.2.category': 'البيئة',
        'news.2.video': '🎥 فيديو النشاط',
        'news.2.about': '📖 حول تنظيف الشاطئ',
        'news.2.p1': 'نجح مئات المتطوعين من Yayasan Persada Bakti Global (YPBG) في تنظيف 5 كم من الساحل من النفايات البلاستيكية والنفايات الأخرى في نشاط تنظيف الشاطئ الذي أقيم يوم الأحد 10 فبراير 2024.',
        'news.2.p2': 'حضر نشاط تنظيف الشاطئ أكثر من 300 متطوع يتألفون من أعضاء YPBG والطلاب والتلاميذ والمجتمعات المحلية. بروح عالية من التعاون المتبادل، عمل المتطوعون منذ الصباح لتنظيف أنواع مختلفة من النفايات التي جرفتها الأمواج إلى الشاطئ.',
        'news.2.p3': 'وصلت النفايات المجمعة إلى 2 طن، تتألف من النفايات البلاستيكية والزجاجات والنفايات المنزلية الأخرى. تم فرز هذه النفايات بعد ذلك وإدارتها حسب النوع لإعادة التدوير أو التخلص منها بطريقة صديقة للبيئة.',
        'news.2.p4': 'بالإضافة إلى تنظيف الشاطئ، شمل هذا النشاط أيضاً زراعة 1000 شتلة من أشجار المانغروف لمنع تآكل السواحل والحفاظ على النظم البيئية البحرية. تلتزم YPBG بمواصلة عقد أنشطة مماثلة للحفاظ على استدامة البيئة الساحلية الإندونيسية.',
        'news.2.stat.relawan': 'المتطوعون',
        'news.2.stat.pantai': 'كم شاطئ',
        'news.2.stat.sampah': 'طن نفايات',
        'news.2.stat.mangrove': 'شتلات المانغروف',
        'news.2.gallery.1': '🧹 متطوعون ينظفون النفايات على الشاطئ',
        'news.2.gallery.2': '🌱 زراعة شتلات المانغروف لمنع التآكل',
        'news.2.gallery.3': '👥 صورة جماعية مع المتطوعين بعد النشاط',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'حملة التطعيم المجانية',
        'news.3.excerpt': 'YPBG تقيم حملة تطعيم مجانية في 20 قرية...',
        'news.3.category': 'الصحة',
        'news.3.video': '🎥 فيديو الحملة',
        'news.3.about': '📖 حول حملة التطعيم',
        'news.3.p1': 'أقامت Yayasan Persada Bakti Global (YPBG) حملة تطعيم مجانية في 20 قرية في مناطق مختلفة من إندونيسيا يوم الاثنين 5 فبراير 2024. هذا البرنامج هو جزء من التزام YPBG بتحسين الوصول إلى الصحة للمجتمعات المحرومة.',
        'news.3.p2': 'توفر حملة التطعيم هذه أنواعاً مختلفة من اللقاحات المجانية بما في ذلك لقاح COVID-19 ولقاح الإنفلونزا ولقاح التهاب الكبد B. جميع الخدمات تقدم مجاناً لمن يحتاجها.',
        'news.3.p3': 'تم تنفيذ هذا النشاط بالتعاون مع مكتب الصحة المحلي وشارك فيه 50 من الكوادر الطبية المهنية تتألف من أطباء وممرضات وقابلات. تستهدف YPBG خدمة 5000 متلقٍ للقاح في هذه الحملة.',
        'news.3.p4': 'بالإضافة إلى التطعيم، يشمل هذا النشاط أيضاً الاستشارات الصحية والفحوصات الصحية المجانية. يمكن للمجتمع استشارة الأطباء مباشرة بشأن مشاكلهم الصحية.',
        'news.3.quote': 'الصحة حق لكل إنسان. نحن ملتزمون بضمان حصول المجتمعات المحرومة أيضاً على وصول لائق إلى الصحة.',
        'news.3.quote.author': 'مدير YPBG',
        'news.3.vaccines': '📋 اللقاحات المتاحة',
        'news.3.vaccine.1': 'لقاح COVID-19 - يحمي من فيروس كورونا',
        'news.3.vaccine.2': 'لقاح الإنفلونزا - يقي من الإنفلونزا الموسمية',
        'news.3.vaccine.3': 'لقاح التهاب الكبد B - يحمي الكبد من العدوى',
        'news.3.gallery.1': '💉 عملية التطعيم من قبل كوادر طبية مهنية',
        'news.3.gallery.2': '👥 المجتمع يصطف للحصول على التطعيم المجاني',
        'news.3.gallery.3': '🩺 استشارات صحية لمجتمعات القرى'
    },

    'tr': {
        'nav.home': 'Anasayfa',
        'nav.about': 'Hakkında',
        'nav.programs': 'Programlar',
        'nav.news': 'Haberler',
        'nav.contact': 'İletişim',
        'hero.title': 'Sevgiyle hizmet edin,<br>umutla inşa edin.',
        'hero.subtitle': 'Yayasan Persada Bakti Global, sürdürülebilir toplum güçlendirmesi için kararlıdır.',
        'hero.btn.about': 'Vakfımızı Tanıyın',
        'hero.btn.contact': 'Bize Ulaşın',
        'about.title': 'Vakıf Hakkında',
        'contact.title': 'Bize Ulaşın',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Tüm hakları saklıdır.',
        
        // Organization Structure
        'about.org.chairman': 'Başkan',
        'about.org.ceo': 'İcra Kurulu Başkanı',
        'about.org.secretary': 'Sekreter',
        'about.org.treasurer': 'Hazinedar',
        'about.org.programs': 'Programlar',
        'about.org.finance': 'Maliye',
        'about.org.pr': 'Halkla İlişkiler',

        // News Common Keys
        'news.date': 'Tarih',
        'news.author': 'YPBG Ekibi',
        'news.views': 'Görüntülenme',
        'news.gallery': '📸 Fotoğraf Belgeleri',
        'news.about': '📖 Hakkında',
        'news.back': 'Haberlere Dön',
        'news.readmore': 'Daha Fazla Oku →',

        // News Article 1 - Scholarship Programme
        'news.1.title': '2024 Burs Programı Açıldı',
        'news.1.excerpt': 'YPBG eğitim burs programı için kayıt açıyor...',
        'news.1.category': 'Eğitim',
        'news.1.video': '🎥 Program Videosu',
        'news.1.about': '📖 Burs Programı Hakkında',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG), Endonezya genelindeki dezavantajlı ailelerin başarılı öğrencileri için 2024 Burs Programı kayıtlarını resmen açtı. Bu program, YPBG\'nin Endonezya\'nın genç neslinin eğitim kalitesini iyileştirme taahhüdüdür.',
        'news.1.p2': 'YPBG Burs Programı, okul ücretleri, kitaplar, üniformalar ve aylık ödenekler dahil tam eğitim desteği sağlar. Bugüne kadar, YPBG burs programı %100 mezuniyet oranıyla 500\'den fazla öğrencinin eğitimini tamamlamasına yardımcı oldu.',
        'news.1.p3': '2024 Burs Programı için kayıtlar 31 Mart 2024\'e kadar açıktır. Kayıt gereksinimleri şunları içerir: (1) Başarılı Orta/Lise öğrencileri, (2) Dezavantajlı ailelerden, (3) Yüksek öğrenme ruhu, ve (4) Okul tavsiyesi.',
        'news.1.gallery.1': '🎓 Başarılı öğrencilere burs yardımı dağıtımı',
        'news.1.gallery.2': '👨‍🎓 Bursiyerler ve YPBG ekibi ile grup fotoğrafı',
        'news.1.gallery.3': '📚 Bursiyerler için ders çalışma seansları',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Plaj Temizliği Etkinliği',
        'news.2.excerpt': 'Yüzlerce YPBG gönüllüsü 5 km plajı başarıyla temizledi...',
        'news.2.category': 'Çevre',
        'news.2.video': '🎥 Etkinlik Videosu',
        'news.2.about': '📖 Plaj Temizliği Hakkında',
        'news.2.p1': 'Yüzlerce Yayasan Persada Bakti Global (YPBG) gönüllüsü, Pazar 10 Şubat 2024\'te düzenlenen plaj temizliği etkinliğinde 5 km sahil şeridini plastik atıklardan ve diğer atıklardan başarıyla temizledi.',
        'news.2.p2': 'Plaj temizliği etkinliğine YPBG üyeleri, öğrenciler, pupils ve yerel topluluklardan oluşan 300\'den fazla gönüllü katıldı. Yüksek karşılıklı işbirliği ruhuyla, gönüllüler sabahdan beri plaja vuran çeşitli atıkları temizlemek için çalıştı.',
        'news.2.p3': 'Toplanan atıklar 2 tona ulaştı, plastik atıklar, şişeler ve diğer evsel atıklardan oluşuyordu. Bu atıklar daha sonra geri dönüşüm için türe göre ayrıştırıldı ve yönetildi veya çevre dostu bir şekilde bertaraf edildi.',
        'news.2.p4': 'Plaj temizliğine ek olarak, bu etkinlik kıyı aşınmasını önlemek ve deniz ekosistemlerini korumak için 1.000 mangrov fidesi dikmeyi de içeriyordu. YPBG, Endonezya\'nın kıyı çevresinin sürdürülebilirliğini korumak için benzer etkinlikler düzenlemeye devam etmeyi taahhüt eder.',
        'news.2.stat.relawan': 'Gönüllüler',
        'news.2.stat.pantai': 'km Plaj',
        'news.2.stat.sampah': 'ton Atık',
        'news.2.stat.mangrove': 'Mangrov Fideleri',
        'news.2.gallery.1': '🧹 Plajda atık temizleyen gönüllüler',
        'news.2.gallery.2': '🌱 Aşınmayı önlemek için mangrov fideleri dikme',
        'news.2.gallery.3': '👥 Etkinlikten sonra gönüllülerle grup fotoğrafı',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Ücretsiz Aşılama Kampanyası',
        'news.3.excerpt': 'YPBG 20 köyde ücretsiz aşılama kampanyası düzenliyor...',
        'news.3.category': 'Sağlık',
        'news.3.video': '🎥 Kampanya Videosu',
        'news.3.about': '📖 Aşılama Kampanyası Hakkında',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG), Pazartesi 5 Şubat 2024\'te Endonezya\'nın çeşitli bölgelerindeki 20 köyde ücretsiz aşılama kampanyası düzenledi. Bu program, YPBG\'nin dezavantajlı topluluklar için sağlık erişimini iyileştirme taahhüdünün bir parçasıdır.',
        'news.3.p2': 'Bu aşılama kampanyası, COVID-19 aşısı, grip aşısı ve hepatit B aşısı dahil çeşitli türde ücretsiz aşılar sağlar. Tüm hizmetler ihtiyaç sahiplerine ücretsiz olarak sunulur.',
        'news.3.p3': 'Bu etkinlik yerel Sağlık Ofisi ile işbirliği içinde gerçekleştirildi ve doktorlar, hemşireler ve ebelerden oluşan 50 profesyonel sağlık personeli yer aldı. YPBG, bu kampanyada 5.000 aşı alıcısına hizmet etmeyi hedefliyor.',
        'news.3.p4': 'Aşılamanın yanı sıra, bu etkinlik sağlık danışmanlığı ve ücretsiz sağlık muayenelerini de içerir. Topluluk, sağlık sorunları hakkında doğrudan doktorlara danışabilir.',
        'news.3.quote': 'Sağlık her insanın hakkıdır. Dezavantajlı toplulukların da sağlık hizmetlerine uygun erişim elde etmesini sağlamaya kararlıyız.',
        'news.3.quote.author': 'YPBG Direktörü',
        'news.3.vaccines': '📋 Mevcut Aşılar',
        'news.3.vaccine.1': 'COVID-19 Aşısı - Koronavirüsten korur',
        'news.3.vaccine.2': 'Grip Aşısı - Mevsimsel gripi önler',
        'news.3.vaccine.3': 'Hepatit B Aşısı - Karaciğeri enfeksiyondan korur',
        'news.3.gallery.1': '💉 Profesyonel sağlık personeli tarafından aşılama süreci',
        'news.3.gallery.2': '👥 Ücretsiz aşılama almak için sıraya giren topluluk',
        'news.3.gallery.3': '🩺 Köy toplulukları için sağlık danışmanlığı'
    },

    'af': {
        'nav.home': 'Tuis',
        'nav.about': 'Oor',
        'nav.programs': 'Programme',
        'nav.news': 'Nuus',
        'nav.contact': 'Kontak',
        'hero.title': 'Dien met liefde,<br>bou met hoop.',
        'hero.subtitle': 'Yayasan Persada Bakti Global is toegewyd aan volhoubare gemeenskapsbevoegdiging.',
        'hero.btn.about': 'Ken Ons Stigting',
        'hero.btn.contact': 'Kontak Ons',
        'about.title': 'Oor die Stigting',
        'contact.title': 'Kontak Ons',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Alle regte voorbehou.',
        
        // Organization Structure
        'about.org.chairman': 'Voorsitter',
        'about.org.ceo': 'Uitvoerende Direkteur',
        'about.org.secretary': 'Sekretaris',
        'about.org.treasurer': 'Tesourier',
        'about.org.programs': 'Programme',
        'about.org.finance': 'Finansies',
        'about.org.pr': 'Openbare Betrekkinge',

        // News Common Keys
        'news.date': 'Datum',
        'news.author': 'YPBG Span',
        'news.views': 'Besigtigings',
        'news.gallery': '📸 Foto Dokumentasie',
        'news.about': '📖 Oor',
        'news.back': 'Terug na Nuus',
        'news.readmore': 'Lees Meer →',

        // News Article 1 - Scholarship Programme
        'news.1.title': 'Beursprogram 2024 Oop',
        'news.1.excerpt': 'YPBG open registrasie vir opvoedkundige beursprogram...',
        'news.1.category': 'Onderwys',
        'news.1.video': '🎥 Program Video',
        'news.1.about': '📖 Oor Beursprogram',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) open amptelik registrasie vir die 2024 Beursprogram vir hoë-presteerende studente uit benadeelde families regoor Indonesië. Hierdie program is YPBG se verbintenis tot die verbetering van die kwaliteit van onderwys vir Indonesië se jonger generasie.',
        'news.1.p2': 'Die YPBG Beursprogram verskaf volledige onderwyssteun insluitend skoolgelde, boeke, uniforms en maandelikse toelaes. Tot dusver het die YPBG-beursprogram meer as 500 studente gehelp om hul onderwys te voltooi met \'n 100% slaagsyfer.',
        'news.1.p3': 'Registrasie vir die 2024 Beursprogram is oop tot 31 Maart 2024. Registrasievereistes sluit in: (1) Junior/Senior Hoërskool studente met prestasies, (2) Uit benadeelde families, (3) Hoë leergees, en (4) Skool aanbeveling.',
        'news.1.gallery.1': '🎓 Verspreiding van beursbystand aan hoë-presteerende studente',
        'news.1.gallery.2': '👨‍🎓 Groepfoto met beursontvangers en YPBG-span',
        'news.1.gallery.3': '📚 Tutoriaal sessies vir beursontvangers',

        // News Article 2 - Beach Cleanup
        'news.2.title': 'Strand Skoonmaak Aktiwiteit',
        'news.2.excerpt': 'Honderde YPBG vrywilligers het suksesvol 5 km strand skoongemaak...',
        'news.2.category': 'Omgewing',
        'news.2.video': '🎥 Aktiwiteit Video',
        'news.2.about': '📖 Oor Strand Skoonmaak',
        'news.2.p1': 'Honderde Yayasan Persada Bakti Global (YPBG) vrywilligers het suksesvol 5 km kuslyn van plastiekafval en ander afval skoongemaak in \'n strand skoonmaak aktiwiteit gehou op Sondag, 10 Februarie 2024.',
        'news.2.p2': 'Die strand skoonmaak aktiwiteit is bygewoon deur meer as 300 vrywilligers bestaande uit YPBG lede, studente, leerlinge en plaaslike gemeenskappe. Met hoë gees van wedersydse samewerking, het die vrywilligers sedert die oggend gewerk om verskeie tipes afval wat op die strand gespoel het skoon te maak.',
        'news.2.p3': 'Die afval wat ingesamel is het 2 ton bereik, bestaande uit plastiekafval, bottels en ander huishoudelike afval. Hierdie afval is dan gesorteer en bestuur volgens tipe vir hergebruik of op \'n omgewingsvriendelike manier weggedoen.',
        'news.2.p4': 'Benewens strand skoonmaak, het hierdie aktiwiteit ook die planting van 1,000 mangrovesaailinge ingesluit om kus-abrasie te voorkom en mariene ekosisteme te bewaar. YPBG is daartoe verbind om soortgelyke aktiwiteite voort te sit om die volhoubaarheid van Indonesië se kusomgewing te handhaaf.',
        'news.2.stat.relawan': 'Vrywilligers',
        'news.2.stat.pantai': 'km Strand',
        'news.2.stat.sampah': 'ton Afval',
        'news.2.stat.mangrove': 'Mangrovesaailinge',
        'news.2.gallery.1': '🧹 Vrywilligers wat afval op die strand skoonmaak',
        'news.2.gallery.2': '🌱 Plant van mangrovesaailinge om abrasie te voorkom',
        'news.2.gallery.3': '👥 Groepfoto met vrywilligers na die aktiwiteit',

        // News Article 3 - Vaccination Campaign
        'news.3.title': 'Gratis Inenting Veldtog',
        'news.3.excerpt': 'YPBG hou gratis inenting veldtog in 20 dorpe...',
        'news.3.category': 'Gesondheid',
        'news.3.video': '🎥 Veldtog Video',
        'news.3.about': '📖 Oor Inenting Veldtog',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) het \'n gratis inenting veldtog in 20 dorpe in verskeie streke van Indonesië gehou op Maandag, 5 Februarie 2024. Hierdie program is deel van YPBG se verbintenis tot die verbetering van toegang tot gesondheid vir benadeelde gemeenskappe.',
        'news.3.p2': 'Hierdie inenting veldtog verskaf verskeie tipes gratis entstowwe insluitend COVID-19 entstof, griep entstof en hepatietis B entstof. Alle dienste word gratis verskaf aan diegene wat dit nodig het.',
        'news.3.p3': 'Hierdie aktiwiteit is in samewerking met die plaaslike Gesondheidskantoor uitgevoer en het 50 professionele mediese personeel bestaande uit dokters, verpleegsters en vroedvroue betrek. YPBG mik om 5,000 entstofontvangers in hierdie veldtog te bedien.',
        'news.3.p4': 'Benewens inenting, sluit hierdie aktiwiteit ook gesondheidsberading en gratis gesondheidsondersoeke in. Die gemeenskap kan direk met dokters konsulteer rakende hul gesondheidsprobleme.',
        'news.3.quote': 'Gesondheid is elke mens se reg. Ons is daartoe verbind om te verseker dat benadeelde gemeenskappe ook behoorlike toegang tot gesondheid kry.',
        'news.3.quote.author': 'YPBG Direkteur',
        'news.3.vaccines': '📋 Beskikbare Entstowwe',
        'news.3.vaccine.1': 'COVID-19 Entstof - Beskerm teen koronavirus',
        'news.3.vaccine.2': 'Griep Entstof - Voorkom seisoenale griep',
        'news.3.vaccine.3': 'Hepatietis B Entstof - Beskerm lewer teen infeksie',
        'news.3.gallery.1': '💉 Inentingsproses deur professionele mediese personeel',
        'news.3.gallery.2': '👥 Gemeenskap wat in die ry staan vir gratis inenting',
        'news.3.gallery.3': '🩺 Gesondheidsberading vir dorpsgemeenskappe'
    }
};

// Function to get translation
function t(key, lang = 'id') {
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Fallback to Indonesian if translation not found
    if (translations['id'] && translations['id'][key]) {
        return translations['id'][key];
    }
    return key; // Return key if no translation found
}
// ===== TRANSLATIONS PATCH - Complete translations for all languages =====
// This file patches incomplete translations

const translationsPatch = {
    'zh': {
        'nav.home': '首页',
        'nav.about': '关于',
        'nav.programs': '项目',
        'nav.news': '新闻',
        'nav.contact': '联系',
        'lang.select': '选择语言',
        'skiplink': '跳转到主要内容',
        'hero.title': '以爱服务，<br>以希望建设。',
        'hero.subtitle': 'Yayasan Persada Bakti Global 致力于可持续人道主义社会援助。',
        'hero.btn.about': '了解我们的基金会',
        'hero.btn.contact': '与我们联系',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': '关于我们',
        'highlight.about.desc': '历史与愿景',
        'highlight.programs.title': '项目',
        'highlight.programs.desc': '实际影响',
        'highlight.news.title': '出版物',
        'highlight.news.desc': '报告与新闻',
        'about.title': '关于基金会',
        'about.vision': '愿景',
        'about.vision.desc': '成为社区赋权和可持续发展领域的领先组织。',
        'about.mission': '使命',
        'about.mission.li1': '通过教育和培训赋能',
        'about.mission.li2': '促进社会创新',
        'about.mission.li3': '建立战略合作伙伴关系',
        'about.values': '核心价值观',
        'about.values.love': '爱',
        'about.values.integrity': '诚信',
        'about.values.hope': '希望',
        'about.values.collaboration': '合作',
        'about.org': '组织结构',
        'about.gallery': '活动画廊',
        'carousel.prev': '上一页',
        'carousel.next': '下一页',
        'about.program': '关于项目',
        'program.documents': '项目文件',
        'program.gallery': '活动画廊',
        'back.to.programs': '返回项目',
        'document.proposal': '项目提案',
        'document.report': '工作报告',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': '项目与活动',
        'programs.filter.all': '全部',
        'programs.filter.scholarship': '奖学金',
        'programs.filter.infrastructure': '基础设施',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': '健康',
        'programs.filter.social': '社会',
        'programs.scholarship': '奖学金项目',
        'programs.scholarship.desc': '为优秀学生提供全面教育支持。',
        'programs.infrastructure': '基础设施建设',
        'programs.infrastructure.desc': '为社区建设乡村道路和公共设施。',
        'programs.mbg': '免费营养餐 (MBG)',
        'programs.mbg.desc': '保护红树林生态系统和沿海造林。',
        'programs.irrigation': '灌溉',
        'programs.irrigation.desc': '为农业社区建设灌溉系统。',
        'programs.healthy_food': '健康食品',
        'programs.healthy_food.desc': '为有需要的人提供营养食品。',
        'programs.mck': '浴室、洗衣、厕所 (MCK)',
        'programs.mck.desc': '建设 MCK 设施以改善环境卫生。',
        'programs.worship_house': '宗教场所',
        'programs.worship_house.desc': '建设和修缮宗教场所。',
        'programs.orphanage': '孤儿院',
        'programs.orphanage.desc': '为孤儿院提供援助和支持。',
        'programs.medical': '医疗服务',
        'programs.medical.desc': '为贫困社区提供免费医疗服务。',
        'programs.learn': '了解更多 →',
        'news.title': '新闻与出版物',
        'news.loadmore': '加载更多',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': '了解更多 →',
        'contact.title': '联系我们',
        'contact.form.title': '发送消息',
        'contact.form.name': '姓名',
        'contact.form.name.placeholder': '全名',
        'contact.form.email': '电子邮件',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': '消息',
        'contact.form.message.placeholder': '输入您的消息...',
        'contact.form.file': '上传文档',
        'contact.form.file.choose': '选择文件',
        'contact.form.file.noFile': '未选择文件',
        'contact.form.file.placeholder': '选择 PDF 或 JPG 文件（最大 25MB）',
        'contact.form.file.hint': '格式：PDF、JPG。最大 25 MB',
        'contact.form.submit': '发送消息',
        'contact.info.title': '联系信息',
        'contact.info.email': '电子邮件',
        'contact.info.phone': '电话',
        'contact.info.address': '地址',
        'contact.info.address.text': 'Persada Bakti 街 123 号，雅加达',
        'footer.about': '关于 YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global 致力于社会人道主义援助。',
        'footer.nav': '导航',
        'footer.legal': '法律',
        'footer.privacy': '隐私政策',
        'footer.terms': '条款和条件',
        'footer.language': '语言',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)。版权所有。',
        'about.org.chairman': '主席',
        'about.org.ceo': '执行董事',
        'about.org.secretary': '秘书',
        'about.org.treasurer': '财务主任',
        'about.org.programs': '项目',
        'about.org.finance': '财务',
        'about.org.pr': '公共关系'
    },
    'ja': {
        'nav.home': 'ホーム',
        'nav.about': '概要',
        'nav.programs': 'プログラム',
        'nav.news': 'ニュース',
        'nav.contact': 'お問い合わせ',
        'lang.select': '言語を選択',
        'skiplink': 'メインコンテンツにスキッ��',
        'hero.title': '愛をもって奉仕し、<br>希望をもって構築します。',
        'hero.subtitle': 'Yayasan Persada Bakti Global は持続可能な人道主義社会援助に取り組んでいます。',
        'hero.btn.about': '私たちの財団を知る',
        'hero.btn.contact': 'お問い合わせ',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': '私たちについて',
        'highlight.about.desc': '歴史とビジョン',
        'highlight.programs.title': 'プログラム',
        'highlight.programs.desc': '実際の影響',
        'highlight.news.title': '出版物',
        'highlight.news.desc': 'レポートとニュース',
        'about.title': '財団について',
        'about.vision': 'ビジョン',
        'about.vision.desc': 'コミュニティのエンパワーメントと持続可能な開発において主導的な組織となること。',
        'about.mission': 'ミッシ���ン',
        'about.mission.li1': '教育と訓練を通じてエンパワーする',
        'about.mission.li2': '社会イノベーションを促進する',
        'about.mission.li3': '戦略的パートナーシップを構築する',
        'about.values': '中核的価値',
        'about.values.love': '愛',
        'about.values.integrity': '誠実',
        'about.values.hope': '希望',
        'about.values.collaboration': '協力',
        'about.org': '組織構造',
        'about.gallery': 'アクティビティギャラリー',
        'carousel.prev': '前へ',
        'carousel.next': '次へ',
        'about.program': 'プログラムについて',
        'program.documents': 'プログラムドキュメント',
        'program.gallery': 'アクティビティギャラリー',
        'back.to.programs': 'プログラムに戻る',
        'document.proposal': 'プログラム提案書',
        'document.report': '活動報告書',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'プログラムと活動',
        'programs.filter.all': 'すべて',
        'programs.filter.scholarship': '奨学金',
        'programs.filter.infrastructure': 'インフラ',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': '健康',
        'programs.filter.social': '社会',
        'programs.scholarship': '奨学金プログラム',
        'programs.scholarship.desc': '優秀な学生に包括的な教育支援を提供。',
        'programs.infrastructure': 'インフラ開発',
        'programs.infrastructure.desc': 'コミュニティのための村道と公共施設。',
        'programs.mbg': '無料栄養食 (MBG)',
        'programs.mbg.desc': 'マングローブ生態系の保護と海岸線の再植林。',
        'programs.irrigation': '灌漑',
        'programs.irrigation.desc': '地域農業のための灌漑システムを構築。',
        'programs.healthy_food': '健康食品',
        'programs.healthy_food.desc': '必要な人に栄養のある食料を提供。',
        'programs.mck': '浴場、洗濯、トイレ (MCK)',
        'programs.mck.desc': '環境衛生のための MCK 施設を建設。',
        'programs.worship_house': '礼拝所',
        'programs.worship_house.desc': '礼拝所の建設と改修。',
        'programs.orphanage': '孤児院',
        'programs.orphanage.desc': '孤児院への支援とサポート。',
        'programs.medical': '医療治療',
        'programs.medical.desc': '恵まれないコミュニティのための無料医療サービス。',
        'programs.learn': '詳しく見る →',
        'news.title': 'ニュースと出版物',
        'news.loadmore': 'もっと見る',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': '続きを読む →',
        'contact.title': 'お問い合わせ',
        'contact.form.title': 'メッセージを送信',
        'contact.form.name': '名前',
        'contact.form.name.placeholder': 'フルネーム',
        'contact.form.email': 'メール',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'メッセージ',
        'contact.form.message.placeholder': 'メッセージを入力してください...',
        'contact.form.file': 'ドキュメントをアップロード',
        'contact.form.file.choose': 'ファイルを選択',
        'contact.form.file.noFile': 'ファイルが選択されていません',
        'contact.form.submit': 'メッセージを送信',
        'contact.info.title': '連絡先情報',
        'contact.info.email': 'メール',
        'contact.info.phone': '電話',
        'contact.info.address': '住所',
        'contact.info.address.text': 'ジャカルタ、Persada Bakti 通り 123 番地',
        'footer.about': 'YPBG について',
        'footer.about.text': 'Yayasan Persada Bakti Global は社会人道主義援助に取り組んでいます。',
        'footer.nav': 'ナビゲーション',
        'footer.legal': '法的情報',
        'footer.privacy': 'プライバシーポリシー',
        'footer.terms': '利用規約',
        'footer.language': '言語',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)。全著作権所有。',
        'about.org.chairman': '会長',
        'about.org.ceo': '最高経営責任者',
        'about.org.secretary': '書記',
        'about.org.treasurer': '財務担当',
        'about.org.programs': 'プログラム',
        'about.org.finance': '財務',
        'about.org.pr': '広報'
    },
    'ko': {
        'nav.home': '홈',
        'nav.about': '소개',
        'nav.programs': '프로그램',
        'nav.news': '뉴스',
        'nav.contact': '연락처',
        'lang.select': '언어 선택',
        'skiplink': '메인 콘텐츠로 이동',
        'hero.title': '사랑으로 섬기고,<br>희망으로 구축합니다.',
        'hero.subtitle': 'Yayasan Persada Bakti Global 은 지속 가능한 인도주의 사회 복지에 전념합니다.',
        'hero.btn.about': '우리 재단 알아보기',
        'hero.btn.contact': '문의하기',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': '우리 소개',
        'highlight.about.desc': '역사 및 비전',
        'highlight.programs.title': '프로그램',
        'highlight.programs.desc': '실제 영향',
        'highlight.news.title': '간행물',
        'highlight.news.desc': '보고서 및 뉴스',
        'about.title': '재단 소개',
        'about.vision': '비전',
        'about.vision.desc': '지역사회 역량 강화 및 지속 가능한 개발의 선도적 조직이 되는 것.',
        'about.mission': '미션',
        'about.mission.li1': '교육과 훈련을 통한 역량 강화',
        'about.mission.li2': '사회 혁신 촉진',
        'about.mission.li3': '전략적 파트너십 구축',
        'about.values': '핵심 가치',
        'about.values.love': '사랑',
        'about.values.integrity': '정직',
        'about.values.hope': '희망',
        'about.values.collaboration': '협력',
        'about.org': '조직 구조',
        'about.gallery': '활동 갤러리',
        'carousel.prev': '이전',
        'carousel.next': '다음',
        'about.program': '프로그램 소개',
        'program.documents': '프로그램 문서',
        'program.gallery': '활동 갤러리',
        'back.to.programs': '프로그램으로 돌아가기',
        'document.proposal': '프로그램 제안서',
        'document.report': '작업 보고서',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': '프로그램 및 활동',
        'programs.filter.all': '전체',
        'programs.filter.scholarship': '장학금',
        'programs.filter.infrastructure': '인프라',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': '건강',
        'programs.filter.social': '사회',
        'programs.scholarship': '장학금 프로그램',
        'programs.scholarship.desc': '우수한 학생들에게 포괄적인 교육 지원.',
        'programs.infrastructure': '인프라 개발',
        'programs.infrastructure.desc': '지역사회를 위한 마을 도로 및 공공 시설.',
        'programs.mbg': '무료 영양식 (MBG)',
        'programs.mbg.desc': '맹그로브 생태계 보전 및 연안 조림.',
        'programs.irrigation': '관개 시설',
        'programs.irrigation.desc': '지역사회 농업을 위한 관개 시스템 구축.',
        'programs.healthy_food': '건강 식품',
        'programs.healthy_food.desc': '필요한 사람들에게 영양가 있는 식품 제공.',
        'programs.mck': '목욕, 세탁, 화장실 (MCK)',
        'programs.mck.desc': '환경 위생을 위한 MCK 시설 구축.',
        'programs.worship_house': '예배 장소',
        'programs.worship_house.desc': '예배 장소의 건설 및 개조.',
        'programs.orphanage': '고아원',
        'programs.orphanage.desc': '고아원에 대한 지원 및 도움.',
        'programs.medical': '의료 치료',
        'programs.medical.desc': '소외 계층을 위한 무료 의료 서비스.',
        'programs.learn': '자세히 보기 →',
        'news.title': '뉴스 및 간행물',
        'news.loadmore': '더 보기',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': '더 읽기 →',
        'contact.title': '문의하기',
        'contact.form.title': '메시지 보내기',
        'contact.form.name': '이름',
        'contact.form.name.placeholder': '성명',
        'contact.form.email': '이메일',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': '메시지',
        'contact.form.message.placeholder': '메시지를 입력하세요...',
        'contact.form.file': '문서 업로드',
        'contact.form.file.choose': '파일 선택',
        'contact.form.file.noFile': '파일이 선택되지 않았습니다',
        'contact.form.submit': '메시지 보내기',
        'contact.info.title': '연락처 정보',
        'contact.info.email': '이메일',
        'contact.info.phone': '전화',
        'contact.info.address': '주소',
        'contact.info.address.text': '자카르타, Persada Bakti 거리 123 번지',
        'footer.about': 'YPBG 소개',
        'footer.about.text': 'Yayasan Persada Bakti Global 은 사회 인도주의 지원에 전념합니다.',
        'footer.nav': '탐색',
        'footer.legal': '법률',
        'footer.privacy': '개인정보 처리방침',
        'footer.terms': '이용약관',
        'footer.language': '언어',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). 모든 권리 보유.',
        'about.org.chairman': '회장',
        'about.org.ceo': '최고경영자',
        'about.org.secretary': '서기',
        'about.org.treasurer': '재무담당',
        'about.org.programs': '프로그램',
        'about.org.finance': '재무',
        'about.org.pr': '홍보'
    },
    'hi': {
        'nav.home': 'होम',
        'nav.about': 'परिचय',
        'nav.programs': 'कार्यक्रम',
        'nav.news': 'समाचार',
        'nav.contact': '��ंपर्क',
        'lang.select': 'भाषा चुनें',
        'skiplink': 'मुख्य सामग्री पर जाएं',
        'hero.title': 'प्रेम के साथ सेवा,<br>आशा के साथ निर्माण।',
        'hero.subtitle': 'Yayasan Persada Bakti Global टिकाऊ मानवतावादी सामाजिक सहायता के लिए प्रतिबद्ध है।',
        'hero.btn.about': 'हमारी नींव को जानें',
        'hero.btn.contact': 'हमसे संपर्क करें',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'हमारे बारे में',
        'highlight.about.desc': 'इतिहास और दृष्टि',
        'highlight.programs.title': 'कार्यक्रम',
        'highlight.programs.desc': 'वास्तविक प्रभाव',
        'highlight.news.title': 'प्रकाशन',
        'highlight.news.desc': 'रिपोर्ट और समाचार',
        'about.title': 'नींव के बारे में',
        'about.vision': 'दृष्टि',
        'about.vision.desc': 'सामुदायिक सशक्तिकरण और सतत विकास में अग्रणी संगठन बनना।',
        'about.mission': 'मिशन',
        'about.mission.li1': 'शिक्षा और प्रशिक्षण के माध्यम से सशक्त बनाना',
        'about.mission.li2': 'सामाजिक नवाचार को बढ़ावा देना',
        'about.mission.li3': 'रणनीतिक साझेदारी का निर्माण',
        'about.values': 'मूल मूल्य',
        'about.values.love': 'प्रेम',
        'about.values.integrity': 'ईमानदारी',
        'about.values.hope': 'आशा',
        'about.values.collaboration': 'सहयोग',
        'about.org': 'संगठनात्मक संरचना',
        'about.gallery': 'गतिविधि दीर्घा',
        'carousel.prev': 'पिछला',
        'carousel.next': 'अगला',
        'about.program': 'कार्यक्रम के बारे में',
        'program.documents': 'कार्यक्रम दस्तावेज़',
        'program.gallery': 'गतिविधि दीर्घा',
        'back.to.programs': 'कार्यक्रमों पर वापस जाएं',
        'document.proposal': 'कार्यक्रम प्रस्ताव',
        'document.report': 'कार्य रिपोर्ट',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'कार्यक्रम और गतिविधियां',
        'programs.filter.all': 'सभी',
        'programs.filter.scholarship': 'छात्रवृत्ति',
        'programs.filter.infrastructure': 'बुनियादी ढांचा',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'स्वास्थ्य',
        'programs.filter.social': 'सामाजिक',
        'programs.scholarship': 'छात्रवृत्ति कार्यक्रम',
        'programs.scholarship.desc': 'उच्च उपलब्धि वाले छात्रों के लिए पूर्ण शैक्षिक सहायता।',
        'programs.infrastructure': 'बुनियादी ढांचा विकास',
        'programs.infrastructure.desc': 'समुदायों के लिए गांव की सड़कें और सार्वजनिक सुविधाएं।',
        'programs.mbg': 'मुफ्त पौष्टिक भोजन (MBG)',
        'programs.mbg.desc': 'मैंग्रोव पारिस्थितिकी तंत्र संरक्षण और तटीय वनीकरण।',
        'programs.irrigation': 'सिंचाई',
        'programs.irrigation.desc': 'कृषि समुदायों के लिए सिंचाई प्रणाली का निर्माण।',
        'programs.healthy_food': 'स्वस्थ भोजन',
        'programs.healthy_food.desc': 'जरूरतमंदों के लिए पौष्टिक भोजन प्रदान करना।',
        'programs.mck': 'स्नान, धुलाई, शौचालय (MCK)',
        'programs.mck.desc': 'पर्यावरण स्वास्थ्य के लिए MCK सुविधाओं का निर्माण।',
        'programs.worship_house': 'पूजा स्थल',
        'programs.worship_house.desc': 'पूजा स्थलों का निर्माण और नवीनीकरण।',
        'programs.orphanage': 'अनाथालय',
        'programs.orphanage.desc': 'अनाथालयों के लिए सहायता और समर्थन।',
        'programs.medical': 'चिकित्सा उपचार',
        'programs.medical.desc': 'वंचित समुदायों के लिए निःशुल्क चिकित्सा सेवाएं।',
        'programs.learn': 'और जानें →',
        'news.title': 'समाचार और प्रकाशन',
        'news.loadmore': '��र लोड करें',
        'news.readmore': 'और पढ़ें →',
        'contact.title': 'हमसे संपर्क करें',
        'contact.form.title': 'संदेश भेजें',
        'contact.form.name': 'नाम',
        'contact.form.name.placeholder': 'पूर्ण नाम',
        'contact.form.email': 'ईमेल',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'संदेश',
        'contact.form.message.placeholder': 'अपना संदेश लिखें...',
        'contact.form.file': 'दस्तावेज़ अपलोड करें',
        'contact.form.file.choose': 'फ़ाइल चुनें',
        'contact.form.file.noFile': 'कोई फ़ाइल नहीं चुनी गई',
        'contact.form.submit': 'संदेश भेजें',
        'contact.info.title': 'संपर्क जानकारी',
        'contact.info.email': 'ईमेल',
        'contact.info.phone': 'फोन',
        'contact.info.address': 'पता',
        'contact.info.address.text': 'जकार्ता, Persada Bakti स्ट्���ीट नंबर 123',
        'footer.about': 'YPBG के बारे में',
        'footer.about.text': 'Yayasan Persada Bakti Global सामाजिक मानवतावादी सहायता के लिए समर्पित है।',
        'footer.nav': 'नेविगेशन',
        'footer.legal': 'कानूनी',
        'footer.privacy': 'गोपनीयता नीति',
        'footer.terms': 'नियम और शर्तें',
        'footer.language': 'भाषा',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)। सर्वाधिकार सुरक्षित।',
        'about.org.chairman': 'अध्यक�������������ष',
        'about.org.ceo': 'मुख्य कार्यकारी अधिकारी',
        'about.org.secretary': 'सचिव',
        'about.org.treasurer': 'कोषाध्यक्ष',
        'about.org.programs': 'कार्यक्रम',
        'about.org.finance': 'वित्त',
        'about.org.pr': 'जनसंपर्क'
    },
    'ar': {
        'nav.home': 'الرئيسية',
        'nav.about': 'حول',
        'nav.programs': 'البرامج',
        'nav.news': 'الأخبار',
        'nav.contact': 'اتصل بنا',
        'lang.select': 'اختر اللغة',
        'skiplink': 'انتقل إلى المحتوى الرئيسي',
        'hero.title': 'الخدمة بالحب،<br>البناء بالأمل.',
        'hero.subtitle': 'Yayasan Persada Bakti Global ملتزمة بالمساعدة الاجتماعية الإنسانية المستدامة.',
        'hero.btn.about': 'تعرف على مؤسستنا',
        'hero.btn.contact': 'اتصل بنا',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'من نحن',
        'highlight.about.desc': 'التاريخ والرؤية',
        'highlight.programs.title': 'البرامج',
        'highlight.programs.desc': 'تأثير حقيقي',
        'highlight.news.title': 'المنشورات',
        'highlight.news.desc': 'التقارير والأخبار',
        'about.title': 'حول المؤسسة',
        'about.vision': 'الرؤية',
        'about.vision.desc': 'أن نكون منظمة رائدة في تمكين المجتمع والتنمية المستدامة.',
        'about.mission': 'الرسالة',
        'about.mission.li1': 'التمكين من خلال التعليم والتدريب',
        'about.mission.li2': 'تعزيز الابتكار الاجتماعي',
        'about.mission.li3': 'بناء شراكات استراتيجية',
        'about.values': 'القيم الأساسية',
        'about.values.love': 'الحب',
        'about.values.integrity': 'النزاهة',
        'about.values.hope': 'الأمل',
        'about.values.collaboration': 'التعاون',
        'about.org': 'الهيكل التنظيمي',
        'about.gallery': 'معرض الأنشطة',
        'carousel.prev': 'السابق',
        'carousel.next': 'التالي',
        'about.program': 'عن البرنامج',
        'program.documents': 'وثائق البرنامج',
        'program.gallery': 'معرض الأنشطة',
        'back.to.programs': 'العودة إلى البرامج',
        'document.proposal': 'مقترح البرنامج',
        'document.report': 'تقرير العمل',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'البرامج والأنشطة',
        'programs.filter.all': 'الكل',
        'programs.filter.scholarship': 'المنح الدراسية',
        'programs.filter.infrastructure': 'البنية التحتية',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'الصحة',
        'programs.filter.social': 'الاجتماعية',
        'programs.scholarship': 'برنامج المنح الدراسية',
        'programs.scholarship.desc': 'دعم تعليمي كامل للطلاب المتفوقين.',
        'programs.infrastructure': 'تطوير البنية التحتية',
        'programs.infrastructure.desc': 'طرق القرية والمرافق العامة للمجتمعات.',
        'programs.mbg': 'وجبات مغذية مجانية (MBG)',
        'programs.mbg.desc': 'الحفاظ على نظام أشجار المانغروف البيئي وإعادة تشجير السواحل.',
        'programs.irrigation': 'الري',
        'programs.irrigation.desc': 'بناء أنظمة الري للزراعة المجتمعية.',
        'programs.healthy_food': 'الغذاء الصحي',
        'programs.healthy_food.desc': 'توفير الغذاء المغذي للمحتاجين.',
        'programs.mck': 'الاستحمام والغسل والمرحاض (MCK)',
        'programs.mck.desc': 'بناء مرافق MCK للصحة البيئية.',
        'programs.worship_house': 'دار العبادة',
        'programs.worship_house.desc': 'بناء وتجديد دور العبادة.',
        'programs.orphanage': 'دار الأيتام',
        'programs.orphanage.desc': 'المساعدة والدعم لدور الأيتام.',
        'programs.medical': 'العلاج الطبي',
        'programs.medical.desc': 'خدمات طبية مجانية للمجتمعات المحرومة.',
        'programs.learn': 'اعرف المزيد →',
        'news.title': 'الأخبار والمنشورات',
        'news.loadmore': 'تحميل المزيد',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': 'اقرأ المزيد →',
        'contact.title': 'اتصل بنا',
        'contact.form.title': 'إرسال رسالة',
        'contact.form.name': 'الاسم',
        'contact.form.name.placeholder': 'الاسم الكامل',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'الرسالة',
        'contact.form.message.placeholder': 'اكتب رسالتك...',
        'contact.form.file': 'تحميل المستند',
        'contact.form.file.choose': 'اختر ملفًا',
        'contact.form.file.noFile': 'لم يتم اختيار ملف',
        'contact.form.submit': 'إرسال الرسالة',
        'contact.info.title': 'معلومات الاتصال',
        'contact.info.email': 'البريد الإلكتروني',
        'contact.info.phone': 'الهاتف',
        'contact.info.address': 'العنوان',
        'contact.info.address.text': 'شارع Persada Bakti رقم 123، جاكرتا',
        'footer.about': 'حول YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global مكرسة للمساعدة الإنسانية الاجتماعية.',
        'footer.nav': 'التنقل',
        'footer.legal': 'قانوني',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'الشروط والأحكام',
        'footer.language': 'اللغة',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). جميع الحقوق محفوظة.',
        'about.org.chairman': 'رئيس المجلس',
        'about.org.ceo': 'الرئيس التنفيذي',
        'about.org.secretary': 'الأمين',
        'about.org.treasurer': 'أمين الصندوق',
        'about.org.programs': 'البرامج',
        'about.org.finance': 'المالية',
        'about.org.pr': 'العلاقات العامة'
    },
    'tr': {
        'nav.home': 'Anasayfa',
        'nav.about': 'Hakkında',
        'nav.programs': 'Programlar',
        'nav.news': 'Haberler',
        'nav.contact': 'İletişim',
        'lang.select': 'Dil seçin',
        'skiplink': 'Ana içeriğe git',
        'hero.title': 'Sevgiyle hizmet,<br>umutla inşa.',
        'hero.subtitle': 'Yayasan Persada Bakti Global sürdürülebilir insani sosyal yardıma kararlıdır.',
        'hero.btn.about': 'Vakfımızı Tanıyın',
        'hero.btn.contact': 'Bize Ulaşın',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'Hakkımızda',
        'highlight.about.desc': 'Tarih ve Vizyon',
        'highlight.programs.title': 'Programlar',
        'highlight.programs.desc': 'Gerçek Etki',
        'highlight.news.title': 'Yayınlar',
        'highlight.news.desc': 'Raporlar ve Haberler',
        'about.title': 'Vakıf Hakkında',
        'about.vision': 'Vizyon',
        'about.vision.desc': 'Toplum güçlendirme ve sürdürülebilir kalkınmada lider bir kuruluş olmak.',
        'about.mission': 'Misyon',
        'about.mission.li1': 'Eğitim ve öğretim yoluyla güçlendirmek',
        'about.mission.li2': 'Sosyal inovasyonu teşvik etmek',
        'about.mission.li3': 'Stratejik ortaklıklar kurmak',
        'about.values': 'Temel Değerler',
        'about.values.love': 'Sevgi',
        'about.values.integrity': 'Dürüstlük',
        'about.values.hope': 'Umut',
        'about.values.collaboration': 'İşbirliği',
        'about.org': 'Organizasyon Yapısı',
        'about.gallery': 'Etkinlik Galerisi',
        'carousel.prev': 'Önceki',
        'carousel.next': 'Sonraki',
        'about.program': 'Program Hakkında',
        'program.documents': 'Program Belgeleri',
        'program.gallery': 'Etkinlik Galerisi',
        'back.to.programs': 'Programlara Geri Dön',
        'document.proposal': 'Program Önerisi',
        'document.report': 'Çalışma Raporu',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'Programlar ve Etkinlikler',
        'programs.filter.all': 'Tümü',
        'programs.filter.scholarship': 'Burs',
        'programs.filter.infrastructure': 'Altyapı',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'Sağlık',
        'programs.filter.social': 'Sosyal',
        'programs.scholarship': 'Burs Programı',
        'programs.scholarship.desc': 'Başarılı öğrenciler için kapsamlı eğitim desteği.',
        'programs.infrastructure': 'Altyapı Geliştirme',
        'programs.infrastructure.desc': 'Topluluklar için köy yolları ve kamu tesisleri.',
        'programs.mbg': 'Ücretsiz Besleyici Öğünler (MBG)',
        'programs.mbg.desc': 'Mangrov ekosistemi koruma ve kıyı ağaçlandırma.',
        'programs.irrigation': 'Sulama',
        'programs.irrigation.desc': 'Topluluk tarımı için sulama sistemleri inşa etme.',
        'programs.healthy_food': 'Sağlıklı Gıda',
        'programs.healthy_food.desc': 'İhtiyacı olanlara besleyici gıda sağlama.',
        'programs.mck': 'Banyo, Yıkama, Tuvalet (MCK)',
        'programs.mck.desc': 'Çevre sağlığı için MCK tesisleri inşa etme.',
        'programs.worship_house': 'İbadethane',
        'programs.worship_house.desc': 'İbadet yerlerinin inşası ve yenilenmesi.',
        'programs.orphanage': 'Yetimhane',
        'programs.orphanage.desc': 'Yetimhanelere yardım ve destek.',
        'programs.medical': 'Tıbbi Tedavi',
        'programs.medical.desc': 'Dezavantajlı topluluklar için ücretsiz tıbbi hizmetler.',
        'programs.learn': 'Daha fazla bilgi →',
        'news.title': 'Haberler ve Yayınlar',
        'news.loadmore': 'Daha Fazla Yükle',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '�� <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': 'Daha Fazla Oku →',
        'contact.title': 'Bize Ulaşın',
        'contact.form.title': 'Mesaj Gönder',
        'contact.form.name': 'Ad',
        'contact.form.name.placeholder': 'Tam Ad',
        'contact.form.email': 'E-posta',
        'contact.form.email.placeholder': 'ornek@alanadi.com',
        'contact.form.message': 'Mesaj',
        'contact.form.message.placeholder': 'Mesajınızı yazın...',
        'contact.form.file': 'Belge Yükle',
        'contact.form.file.choose': 'Dosya Seç',
        'contact.form.file.noFile': 'Dosya seçilmedi',
        'contact.form.submit': 'Mesaj Gönder',
        'contact.info.title': 'İletişim Bilgileri',
        'contact.info.email': 'E-posta',
        'contact.info.phone': 'Telefon',
        'contact.info.address': 'Adres',
        'contact.info.address.text': 'Persada Bakti Cad. No:123, Cakarta',
        'footer.about': 'YPBG Hakkında',
        'footer.about.text': 'Yayasan Persada Bakti Global sosyal insani yardıma adanmıştır.',
        'footer.nav': 'Gezinme',
        'footer.legal': 'Yasal',
        'footer.privacy': 'Gizlilik Politikası',
        'footer.terms': 'Şartlar ve Koşullar',
        'footer.language': 'Dil',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Tüm hakları saklıdır.',
        'about.org.chairman': 'Başkan',
        'about.org.ceo': 'İcra Kurulu Başkanı',
        'about.org.secretary': 'Sekreter',
        'about.org.treasurer': 'Hazinedar',
        'about.org.programs': 'Programlar',
        'about.org.finance': 'Finans',
        'about.org.pr': 'Halkla İlişkiler'
    },
    'af': {
        'nav.home': 'Tuis',
        'nav.about': 'Oor',
        'nav.programs': 'Programme',
        'nav.news': 'Nuus',
        'nav.contact': 'Kontak',
        'lang.select': 'Kies taal',
        'skiplink': 'Gaan na hoofinhoud',
        'hero.title': 'Dien met liefde,<br>bou met hoop.',
        'hero.subtitle': 'Yayasan Persada Bakti Global is toegewyd aan volhoubare humanitêre sosiale bystand.',
        'hero.btn.about': 'Ken Ons Stigting',
        'hero.btn.contact': 'Kontak Ons',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'Oor Ons',
        'highlight.about.desc': 'Geskiedenis & Visie',
        'highlight.programs.title': 'Programme',
        'highlight.programs.desc': 'Regte Impak',
        'highlight.news.title': 'Publikasies',
        'highlight.news.desc': 'Verslae & Nuus',
        'about.title': 'Oor die Stigting',
        'about.vision': 'Visie',
        'about.vision.desc': 'Om n toonaangewende organisasie in gemeenskapsbemagtiging en volhoubare ontwikkeling te wees.',
        'about.mission': 'Missie',
        'about.mission.li1': 'Bemagtig deur onderwys en opleiding',
        'about.mission.li2': 'Bevorder sosiale innovasie',
        'about.mission.li3': 'Bou strategiese vennootskappe',
        'about.values': 'Kernwaardes',
        'about.values.love': 'Liefde',
        'about.values.integrity': 'Integriteit',
        'about.values.hope': 'Hoop',
        'about.values.collaboration': 'Samewerking',
        'about.org': 'Organisatoriese Struktuur',
        'about.gallery': 'Aktiwiteitsgalery',
        'carousel.prev': 'Vorige',
        'carousel.next': 'Volgende',
        'about.program': 'Oor Program',
        'program.documents': 'Program Dokumente',
        'program.gallery': 'Aktiwiteitsgalery',
        'back.to.programs': 'Terug na Programme',
        'document.proposal': 'Program Voorstel',
        'document.report': 'Werk Verslag',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'Programme & Aktiwiteite',
        'programs.filter.all': 'Alle',
        'programs.filter.scholarship': 'Beurs',
        'programs.filter.infrastructure': 'Infrastruktuur',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'Gesondheid',
        'programs.filter.social': 'Sosiaal',
        'programs.scholarship': 'Beursprogram',
        'programs.scholarship.desc': 'Volledige onderwyssteun vir hoë-presteerende studente.',
        'programs.infrastructure': 'Infrastruktuurontwikkeling',
        'programs.infrastructure.desc': 'Dorpspaaie en openbare fasiliteite vir gemeenskappe.',
        'programs.mbg': 'Gratis Voedsame Maaltye (MBG)',
        'programs.mbg.desc': 'Mangrove-ekosisteembewaring en kus-herbebossing.',
        'programs.irrigation': 'Besproeiing',
        'programs.irrigation.desc': 'Bou van besproeiingstelsels vir gemeenskapslandbou.',
        'programs.healthy_food': 'Gesonde Kos',
        'programs.healthy_food.desc': 'Verskaffing van voedsame kos vir diegene in nood.',
        'programs.mck': 'Bad, Was, Toilet (MCK)',
        'programs.mck.desc': 'Bou van MCK-fasiliteite vir omgewingsgesondheid.',
        'programs.worship_house': 'Aanbidhuis',
        'programs.worship_house.desc': 'Konstruksie en renovasie van aanbiddingsplekke.',
        'programs.orphanage': 'Weeshuis',
        'programs.orphanage.desc': 'Bystand en ondersteuning vir weeshuise.',
        'programs.medical': 'Mediese Behandeling',
        'programs.medical.desc': 'Gratis mediese dienste vir benadeelde gemeenskappe.',
        'programs.learn': 'Vind meer uit →',
        'news.title': 'Nuus & Publikasies',
        'news.loadmore': 'Laai Meer',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'news.readmore': 'Lees Meer →',
        'contact.title': 'Kontak Ons',
        'contact.form.title': 'Stuur Boodskap',
        'contact.form.name': 'Naam',
        'contact.form.name.placeholder': 'Volle Naam',
        'contact.form.email': 'E-pos',
        'contact.form.email.placeholder': 'voorbeeld@domein.com',
        'contact.form.message': 'Boodskap',
        'contact.form.message.placeholder': 'Tik jou boodskap...',
        'contact.form.file': 'Laai Dokument Op',
        'contact.form.file.choose': 'Kies Lêer',
        'contact.form.file.noFile': 'Geen lêer gekies nie',
        'contact.form.submit': 'Stuur Boodskap',
        'contact.info.title': 'Kontak Inligting',
        'contact.info.email': 'E-pos',
        'contact.info.phone': 'Telefoon',
        'contact.info.address': 'Adres',
        'contact.info.address.text': 'Persada Bakti Straat No.123, Jakarta',
        'footer.about': 'Oor YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global is toegewyd aan sosiale humanitêre bystand.',
        'footer.nav': 'Navigasie',
        'footer.legal': 'Regtig',
        'footer.privacy': 'Privaatheidsbeleid',
        'footer.terms': 'Voorwaardes',
        'footer.language': 'Taal',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). Alle regte voorbehou.',
        'about.org.chairman': 'Voorsitter',
        'about.org.ceo': 'Uitvoerende Direkteur',
        'about.org.secretary': 'Sekretaris',
        'about.org.treasurer': 'Tesourier',
        'about.org.programs': 'Programme',
        'about.org.finance': 'Finansies',
        'about.org.pr': 'Openbare Betrekkinge'
    },
    'en-uk': {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.programs': 'Programmes',
        'nav.news': 'News',
        'nav.contact': 'Contact',
        'lang.select': 'Select language',
        'skiplink': 'Skip to main content',
        'hero.title': 'Serving with love,<br>building with hope.',
        'hero.subtitle': 'Yayasan Persada Bakti Global is committed to sustainable humanitarian social assistance.',
        'hero.btn.about': 'Know Our Foundation',
        'hero.btn.contact': 'Contact Us',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'About Us',
        'highlight.about.desc': 'History & Vision',
        'highlight.programs.title': 'Programmes',
        'highlight.programs.desc': 'Real Impact',
        'highlight.news.title': 'Publications',
        'highlight.news.desc': 'Reports & News',
        'about.title': 'About Foundation',
        'about.vision': 'Vision',
        'about.vision.desc': 'To be a leading organisation in community empowerment and sustainable development.',
        'about.mission': 'Mission',
        'about.mission.li1': 'Empower through education and training',
        'about.mission.li2': 'Promote social innovation',
        'about.mission.li3': 'Build strategic partnerships',
        'about.values': 'Core Values',
        'about.values.love': 'Love',
        'about.values.integrity': 'Integrity',
        'about.values.hope': 'Hope',
        'about.values.collaboration': 'Collaboration',
        'about.org': 'Organisational Structure',
        'about.gallery': 'Activity Gallery',
        'carousel.prev': 'Previous',
        'carousel.next': 'Next',
        'programs.title': 'Programmes & Activities',
        'programs.filter.all': 'All',
        'programs.filter.scholarship': 'Scholarship',
        'programs.filter.infrastructure': 'Infrastructure',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'Health',
        'programs.filter.social': 'Social',
        'programs.scholarship': 'Scholarship Programme',
        'programs.scholarship.desc': 'Full educational support for high-achieving students.',
        'programs.scholarship.narrative.1': 'The Scholarship Programme of Yayasan Persada Bakti Global is our commitment to improving the quality of education for Indonesia\'s younger generation. This programme is designed to provide opportunities for high-achieving students from underprivileged families to continue their education.',
        'programs.scholarship.narrative.2': 'Each scholarship recipient receives full support including school fees, books, uniforms, and monthly allowances. We believe that education is the key to breaking the cycle of poverty and building a better future.',
        'programs.scholarship.narrative.3': 'To date, the YPBG Scholarship Programme has helped more than 500 students complete their education, with a 100% graduation rate and many alumni continuing to prestigious universities.',
        'programs.scholarship.gallery.1': 'Distribution of scholarship assistance to high-achieving students',
        'programs.scholarship.gallery.2': 'Group photo with scholarship recipients and YPBG team',
        'programs.scholarship.gallery.3': 'Tutorial sessions for scholarship recipients',
        'programs.infrastructure': 'Infrastructure Development',
        'programs.infrastructure.desc': 'Village roads and public facilities for communities.',
        'programs.infrastructure.narrative.1': 'The Infrastructure Development Programme of Yayasan Persada Bakti Global focuses on developing public facilities that support the economy and welfare of communities. We build village roads, bridges, drainage systems, and other public facilities that are greatly needed by communities.',
        'programs.infrastructure.narrative.2': 'Each of our infrastructure projects is designed with consideration for long-term community needs and environmental impact. We work with local governments and local communities to ensure sustainable and beneficial development for all.',
        'programs.infrastructure.narrative.3': 'To date, YPBG has completed the construction of more than 50 km of village roads, 10 bridges, and various other public facilities that have improved accessibility and community economies in various regions.',
        'programs.infrastructure.gallery.1': 'Construction of village roads to improve accessibility',
        'programs.infrastructure.gallery.2': 'Group photo with team and community after project completion',
        'programs.infrastructure.gallery.3': 'Bridge construction to connect two villages',
        'programs.mbg': 'Free Nutritious Meals (MBG)',
        'programs.mbg.desc': 'Mangrove ecosystem conservation and coastal reforestation.',
        'programs.mbg.narrative.1': 'The Free Nutritious Meals (MBG) Programme of Yayasan Persada Bakti Global is our commitment to improving the nutritional quality of the community, especially children and underprivileged families. This programme provides nutritious food free of charge to those in need.',
        'programs.mbg.narrative.2': 'In addition to food provision, the MBG programme also includes nutrition education, mangrove ecosystem conservation, and coastal reforestation to create a healthy and sustainable environment.',
        'programs.mbg.narrative.3': 'To date, the MBG programme has distributed more than 10,000 nutritious food packages and planted 5,000 mangrove trees in various coastal regions of Indonesia.',
        'programs.mbg.gallery.1': 'Distribution of nutritious food to the community',
        'programs.mbg.gallery.2': 'Mangrove planting activities for environmental conservation',
        'programs.mbg.gallery.3': 'Nutrition education for mothers and children',
        'programs.irrigation': 'Irrigation',
        'programs.irrigation.desc': 'Building irrigation systems for community agriculture.',
        'programs.irrigation.narrative.1': 'The Irrigation Programme of Yayasan Persada Bakti Global focuses on the construction and rehabilitation of irrigation systems to support community agriculture. Good irrigation systems are essential for increasing agricultural productivity and farmer welfare.',
        'programs.irrigation.narrative.2': 'We build irrigation channels, small dams, and water pump systems that help farmers irrigate their rice fields and fields efficiently. This programme also includes training on sustainable water management.',
        'programs.irrigation.narrative.3': 'To date, YPBG has built and rehabilitated more than 30 km of irrigation channels that irrigate more than 500 hectares of agricultural land in various regions.',
        'programs.irrigation.gallery.1': 'Construction of irrigation channels for community agriculture',
        'programs.irrigation.gallery.2': 'Group photo with farmers after irrigation project completion',
        'programs.irrigation.gallery.3': 'Water pump system for dry land irrigation',
        'programs.healthy_food': 'Healthy Food',
        'programs.healthy_food.desc': 'Providing nutritious food for those in need.',
        'programs.healthy_food.narrative.1': 'The Healthy Food Programme of Yayasan Persada Bakti Global is an initiative to increase community awareness and access to nutritious food. This programme provides nutrition education and healthy food provision for underprivileged families.',
        'programs.healthy_food.narrative.2': 'We work with nutritionists and health workers to develop balanced nutritious menus. This programme also includes counselling on the importance of balanced nutrition and healthy eating patterns.',
        'programs.healthy_food.narrative.3': 'To date, the Healthy Food Programme has reached more than 2,000 families and conducted 50+ nutrition counselling sessions in various communities.',
        'programs.healthy_food.gallery.1': 'Provision of nutritious food for the community',
        'programs.healthy_food.gallery.2': 'Nutrition counselling and healthy eating patterns',
        'programs.healthy_food.gallery.3': 'Healthy nutritious cooking demonstration',
        'programs.mck': 'Bath, Wash, Toilet (MCK)',
        'programs.mck.desc': 'Building MCK facilities for environmental health.',
        'programs.mck.narrative.1': 'The MCK (Bath, Wash, Toilet) Programme of Yayasan Persada Bakti Global focuses on building proper sanitation facilities to improve environmental health and community quality of life.',
        'programs.mck.narrative.2': 'We build public MCKs equipped with clean water, handwashing stations, and hygienic toilets. This programme also includes education on the importance of cleanliness and sanitation to prevent diseases.',
        'programs.mck.narrative.3': 'To date, YPBG has built 25 MCK units serving more than 5,000 residents in various regions, significantly reducing disease rates due to poor sanitation.',
        'programs.mck.gallery.1': 'Construction of MCK facilities for the community',
        'programs.mck.gallery.2': 'Cleanliness and sanitation education',
        'programs.mck.gallery.3': 'Completed MCK facilities',
        'programs.worship_house': 'Worship House',
        'programs.worship_house.desc': 'Construction and renovation of worship places.',
        'programs.worship_house.narrative.1': 'The Worship House Programme of Yayasan Persada Bakti Global is our commitment to supporting worship facilities for the community. We build and renovate mosques, prayer rooms, churches, temples, and viharas to support the spiritual needs of the community.',
        'programs.worship_house.narrative.2': 'Each worship house construction is carried out with consideration for local community needs and good construction standards. This programme also includes the provision of supporting facilities such as ablution areas, toilets, and libraries.',
        'programs.worship_house.narrative.3': 'To date, YPBG has built and renovated 15 worship houses in various regions, providing decent places of worship for thousands of congregations.',
        'programs.worship_house.gallery.1': 'Construction of worship houses for the community',
        'programs.worship_house.gallery.2': 'Group photo with congregation after inauguration',
        'programs.worship_house.gallery.3': 'Religious activities at the worship house',
        'programs.orphanage': 'Orphanage',
        'programs.orphanage.desc': 'Assistance and support for orphanages.',
        'programs.orphanage.narrative.1': 'The Orphanage Programme of Yayasan Persada Bakti Global is our form of care for orphaned and underprivileged children. This programme provides assistance in the form of food, clothing, education, and facilities for orphanages.',
        'programs.orphanage.narrative.2': 'We work with various orphanages to ensure children receive proper care and education. This programme also includes recreational activities, tutoring, and talent development for children.',
        'programs.orphanage.narrative.3': 'To date, YPBG has helped 20 orphanages with a total of more than 500 children benefiting from this programme, giving them hope and a better future.',
        'programs.orphanage.gallery.1': 'Distribution of assistance to orphanages',
        'programs.orphanage.gallery.2': 'Recreational activities and tutoring',
        'programs.orphanage.gallery.3': 'Group photo with orphanage children',
        'programs.medical': 'Medical Treatment',
        'programs.medical.desc': 'Free medical services for underprivileged communities.',
        'programs.medical.narrative.1': 'The Medical Treatment Programme of Yayasan Persada Bakti Global provides free health services for underprivileged communities. This programme includes general health examinations, free treatment, and health counselling.',
        'programs.medical.narrative.2': 'We work with doctors, nurses, and professional health workers to provide quality medical services. This programme also includes free drug distribution and periodic health examinations.',
        'programs.medical.narrative.3': 'To date, the Medical Treatment Programme has served more than 3,000 patients and conducted 40+ health social service activities in various regions, providing health access for those in need.',
        'programs.medical.gallery.1': 'Free medical services for the community',
        'programs.medical.gallery.2': 'Health examination by medical team',
        'programs.medical.gallery.3': 'Health counselling and free drug distribution',
        'programs.learn': 'Learn more →',
        'news.title': 'News & Publications',
        'news.loadmore': 'Load More',
        'news.readmore': 'Read More →',
        'news.category.education': 'Education',
        'news.category.environment': 'Environment',
        'news.category.health': 'Health',
        'news.video': '🎥 VIDEO',
        'news.article': '📰 ARTICLE',
        'news.back': 'Back to News',
        'news.date': 'Date',
        'news.author': 'YPBG Team',
        'news.views': 'Views',
        'news.gallery': '📸 Photo Documentation',
        'news.about': '📖 About',
        'news.1.title': 'Scholarship Programme 2024 Open',
        'news.1.excerpt': 'YPBG opens registration for educational scholarship programme...',
        'news.1.video': '🎥 Programme Video',
        'news.1.about': '📖 About Scholarship Programme',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) officially opens registration for the 2024 Scholarship Programme for high-achieving students from underprivileged families across Indonesia. This programme is YPBG\'s commitment to improving the quality of education for Indonesia\'s younger generation.',
        'news.1.p2': 'The YPBG Scholarship Programme provides full educational support including school fees, books, uniforms, and monthly allowances. To date, the YPBG scholarship programme has helped more than 500 students complete their education with a 100% graduation rate.',
        'news.1.p3': 'Registration for the 2024 Scholarship Programme is open until 31 March 2024. Registration requirements include: (1) Junior/Senior High School students with achievements, (2) From underprivileged families, (3) High learning spirit, and (4) School recommendation.',
        'news.1.gallery.1': '🎓 Distribution of scholarship assistance to high-achieving students',
        'news.1.gallery.2': '👨‍🎓 Group photo with scholarship recipients and YPBG team',
        'news.1.gallery.3': '📚 Tutorial sessions for scholarship recipients',
        'news.2.title': 'Beach Cleanup Activity',
        'news.2.excerpt': 'Hundreds of YPBG volunteers successfully cleaned 5 km of beach...',
        'news.2.video': '🎥 Activity Video',
        'news.2.about': '📖 About Beach Cleanup',
        'news.2.p1': 'Hundreds of Yayasan Persada Bakti Global (YPBG) volunteers successfully cleaned 5 km of coastline from plastic waste and other waste in a beach cleanup activity held on Sunday, 10 February 2024.',
        'news.2.p2': 'The beach cleanup activity was attended by more than 300 volunteers consisting of YPBG members, students, pupils, and local communities. With high spirit of mutual cooperation, the volunteers worked since morning cleaning up various types of waste washed up on the beach.',
        'news.2.p3': 'The waste collected reached 2 tons, consisting of plastic waste, bottles, and other household waste. This waste was then sorted and managed according to type for recycling or disposed of in an environmentally friendly manner.',
        'news.2.p4': 'In addition to beach cleaning, this activity also included planting 1,000 mangrove seedlings to prevent coastal abrasion and preserve marine ecosystems. YPBG is committed to continuing to hold similar activities to maintain the sustainability of Indonesia\'s coastal environment.',
        'news.2.stat.relawan': 'Volunteers',
        'news.2.stat.pantai': 'km Beach',
        'news.2.stat.sampah': 'tons Waste',
        'news.2.stat.mangrove': 'Mangrove Seedlings',
        'news.2.gallery.1': '🧹 Volunteers cleaning up waste on the beach',
        'news.2.gallery.2': '🌱 Planting mangrove seedlings to prevent abrasion',
        'news.2.gallery.3': '👥 Group photo with volunteers after the activity',
        'news.3.title': 'Free Vaccination Campaign',
        'news.3.excerpt': 'YPBG holds free vaccination campaign in 20 villages...',
        'news.3.about': '📖 About Vaccination Campaign',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) held a free vaccination campaign in 20 villages in various regions of Indonesia on Monday, 5 February 2024. This programme is part of YPBG\'s commitment to improving access to health for underprivileged communities.',
        'news.3.p2': 'This vaccination campaign provides various types of free vaccines including COVID-19 vaccine, influenza vaccine, and hepatitis B vaccine. All services are provided free of charge to those in need.',
        'news.3.p3': 'This activity was carried out in collaboration with the local Health Office and involved 50 professional medical personnel consisting of doctors, nurses, and midwives. YPBG targets to serve 5,000 vaccine recipients in this campaign.',
        'news.3.p4': 'In addition to vaccination, this activity also includes health counselling and free health examinations. The community can consult directly with doctors regarding their health problems.',
        'news.3.quote': 'Health is every human\'s right. We are committed to ensuring that underprivileged communities also get decent access to health.',
        'news.3.quote.author': 'YPBG Director',
        'news.3.vaccines': '📋 Available Vaccines',
        'news.3.vaccine.1': 'COVID-19 Vaccine - Protects from coronavirus',
        'news.3.vaccine.2': 'Influenza Vaccine - Prevents seasonal flu',
        'news.3.vaccine.3': 'Hepatitis B Vaccine - Protects liver from infection',
        'news.3.gallery.1': '💉 Vaccination process by professional medical personnel',
        'news.3.gallery.2': '👥 Community queuing to get free vaccination',
        'news.3.gallery.3': '🩺 Health counselling for village communities',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        'contact.title': 'Contact Us',
        'contact.form.title': 'Send Message',
        'contact.form.name': 'Name',
        'contact.form.name.placeholder': 'Full Name',
        'contact.form.email': 'Email',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'Message',
        'contact.form.message.placeholder': 'Type your message...',
        'contact.form.submit': 'Send Message',
        'contact.info.title': 'Contact Information',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone',
        'contact.info.address': 'Address',
        'contact.info.address.text': 'Persada Bakti St. No.123, Jakarta',
        'footer.about': 'About YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global is dedicated to Social Humanitarian Assistance.',
        'footer.nav': 'Navigation',
        'footer.legal': 'Legal',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms & Conditions',
        'footer.language': 'Language',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). All rights reserved.',
        'about.org.chairman': 'Board Chair',
        'about.org.ceo': 'Chief Executive Officer',
        'about.org.secretary': 'Secretary',
        'about.org.treasurer': 'Treasurer',
        'about.org.programs': 'Programmes',
        'about.org.finance': 'Finance',
        'about.org.pr': 'Public Relations'
    }
};

// Merge patch with main translations
if (typeof translations !== 'undefined') {
    Object.keys(translationsPatch).forEach(lang => {
        if (translations[lang]) {
            // Merge patch into existing translations
            translations[lang] = { ...translations[lang], ...translationsPatch[lang] };
        } else {
            // Add new language
            translations[lang] = translationsPatch[lang];
        }
    });
}
// ===== ORGANIZATION STRUCTURE ENGLISH TRANSLATIONS =====

const orgEnglishTranslations = {
    'en': {
        // Organization Positions
        'about.org.chairman': 'Board Chairman',
        'about.org.ceo': 'Chief Executive Officer',
        'about.org.secretary': 'Secretary',
        'about.org.treasurer': 'Treasurer',
        'about.org.programs': 'Programs',
        'about.org.finance': 'Finance',
        'about.org.pr': 'Public Relations',
        
        // Organization Detail Page Titles
        'org.chairman.title': 'Board Chairman - YPBG',
        'org.ceo.title': 'Chief Executive Officer - YPBG',
        'org.secretary.title': 'Secretary - YPBG',
        'org.treasurer.title': 'Treasurer - YPBG',
        'org.programs.title': 'Programs - YPBG',
        'org.finance.title': 'Finance - YPBG',
        'org.pr.title': 'Public Relations - YPBG',
        
        // Organization Detail Sections
        'org.biodata': '📋 Biodata',
        'org.motto': '💡 Life Motto',
        'org.hobbies': '🎯 Hobbies',
        'org.career': '💼 Professional Career',
        
        // Biodata Fields
        'org.fullname': 'Full Name',
        'org.birthdate': 'Date of Birth',
        'org.birthplace': 'Place of Birth',
        'org.education': 'Highest Education',
        
        // Ketua Pembina Data
        'org.chairman.name': 'Dr. H. Muhammad Yusuf, M.Si',
        'org.chairman.birth': 'March 15, 1965',
        'org.chairman.birthplace': 'Jakarta, Indonesia',
        'org.chairman.education': 'PhD in Public Management',
        'org.chairman.motto': '"Do good to others without expecting anything in return, because true happiness lies in giving not receiving."',
        'org.chairman.hobby1': '📖 Reading leadership and management books',
        'org.chairman.hobby2': '🏃 Morning jogging and health sports',
        'org.chairman.hobby3': '✈️ Traveling and exploring new cultures',
        'org.chairman.hobby4': '🎣 Fishing in spare time',
        'org.chairman.career1.year': '2020 - Present',
        'org.chairman.career1.title': 'Board Chairman of YPBG',
        'org.chairman.career1.desc': 'Leading the foundation in community empowerment programs',
        'org.chairman.career2.year': '2015 - 2020',
        'org.chairman.career2.title': 'Director of PT Sejahtera Mandiri',
        'org.chairman.career2.desc': 'Leading management consulting company',
        'org.chairman.career3.year': '2010 - 2015',
        'org.chairman.career3.title': 'Head of Social Services',
        'org.chairman.career3.desc': 'Serving the community in social affairs',
        'org.chairman.career4.year': '2005 - 2010',
        'org.chairman.career4.title': 'Vice Head of District',
        'org.chairman.career4.desc': 'Assisting district development',
        
        // Ketua Yayasan Data
        'org.ceo.name': 'Dr. Siti Aminah, M.M',
        'org.ceo.birth': 'July 22, 1970',
        'org.ceo.birthplace': 'Bandung, Indonesia',
        'org.ceo.education': 'PhD in Organization Management',
        'org.ceo.motto': '"Leadership is not about power, but about serving and inspiring others to reach their best potential."',
        'org.ceo.hobby1': '🧘 Yoga and meditation',
        'org.ceo.hobby2': '📚 Writing articles about leadership',
        'org.ceo.hobby3': '🎵 Listening to classical music',
        'org.ceo.hobby4': '🌱 Gardening ornamental plants',
        'org.ceo.career1.year': '2018 - Present',
        'org.ceo.career1.title': 'CEO of YPBG',
        'org.ceo.career1.desc': 'Leading foundation operations and program development',
        'org.ceo.career2.year': '2012 - 2018',
        'org.ceo.career2.title': 'HR Director of PT Nusantara Jaya',
        'org.ceo.career2.desc': 'Managing human resource development',
        'org.ceo.career3.year': '2008 - 2012',
        'org.ceo.career3.title': 'Operational Manager',
        'org.ceo.career3.desc': 'Supervising company operations',
        'org.ceo.career4.year': '2005 - 2008',
        'org.ceo.career4.title': 'Supervisor',
        'org.ceo.career4.desc': 'Leading operational team',
        
        // Sekretaris Data
        'org.secretary.name': 'Rina Susanti, S.E',
        'org.secretary.birth': 'April 10, 1975',
        'org.secretary.birthplace': 'Surabaya, Indonesia',
        'org.secretary.education': 'Bachelor in Economics Management',
        'org.secretary.motto': '"Accuracy and orderliness are the keys to success in every job."',
        'org.secretary.hobby1': '📝 Writing journals and blogs',
        'org.secretary.hobby2': '🎨 Painting and crafting',
        'org.secretary.hobby3': '📖 Reading novels',
        'org.secretary.hobby4': '🍳 Cooking traditional food',
        'org.secretary.career1.year': '2019 - Present',
        'org.secretary.career1.title': 'Secretary of YPBG',
        'org.secretary.career1.desc': 'Managing foundation administration and documentation',
        'org.secretary.career2.year': '2015 - 2019',
        'org.secretary.career2.title': 'Senior Administrative Officer',
        'org.secretary.career2.desc': 'Coordinating company administrative activities',
        'org.secretary.career3.year': '2010 - 2015',
        'org.secretary.career3.title': 'Administrative Staff',
        'org.secretary.career3.desc': 'Handling daily administration',
        'org.secretary.career4.year': '2007 - 2010',
        'org.secretary.career4.title': 'Junior Secretary',
        'org.secretary.career4.desc': 'Assisting secretariat activities',
        
        // Bendahara Data
        'org.treasurer.name': 'Ahmad Fauzi, S.Kom, Ak',
        'org.treasurer.birth': 'December 5, 1972',
        'org.treasurer.birthplace': 'Medan, Indonesia',
        'org.treasurer.education': 'Bachelor in Accounting & Computer',
        'org.treasurer.motto': '"Honesty in managing finances is a trust that must be guarded with full responsibility."',
        'org.treasurer.hobby1': '💰 Investment and stock trading',
        'org.treasurer.hobby2': '📊 Financial and economic analysis',
        'org.treasurer.hobby3': '⚽ Watching football matches',
        'org.treasurer.hobby4': '🎸 Playing acoustic guitar',
        'org.treasurer.career1.year': '2018 - Present',
        'org.treasurer.career1.title': 'Treasurer of YPBG',
        'org.treasurer.career1.desc': 'Managing foundation finances and assets',
        'org.treasurer.career2.year': '2013 - 2018',
        'org.treasurer.career2.title': 'Finance Manager',
        'org.treasurer.career2.desc': 'Leading company finance department',
        'org.treasurer.career3.year': '2008 - 2013',
        'org.treasurer.career3.title': 'Senior Accountant',
        'org.treasurer.career3.desc': 'Preparing financial reports',
        'org.treasurer.career4.year': '2005 - 2008',
        'org.treasurer.career4.title': 'Junior Accountant',
        'org.treasurer.career4.desc': 'Assisting bookkeeping and audit',
        
        // Program Data
        'org.programs.name': 'Budi Santoso, S.Sos',
        'org.programs.birth': 'September 18, 1980',
        'org.programs.birthplace': 'Yogyakarta, Indonesia',
        'org.programs.education': 'Bachelor in Social & Political Science',
        'org.programs.motto': '"A good program is one that provides real impact for the community."',
        'org.programs.hobby1': '🏃 Marathon running and triathlon',
        'org.programs.hobby2': '📷 Documentary photography',
        'org.programs.hobby3': '🎒 Backpacking to various regions',
        'org.programs.hobby4': '☕ Coffee and social discussions',
        'org.programs.career1.year': '2020 - Present',
        'org.programs.career1.title': 'Head of Programs YPBG',
        'org.programs.career1.desc': 'Designing and managing community empowerment programs',
        'org.programs.career2.year': '2016 - 2020',
        'org.programs.career2.title': 'Program Coordinator',
        'org.programs.career2.desc': 'Coordinating social program implementation',
        'org.programs.career3.year': '2012 - 2016',
        'org.programs.career3.title': 'Field Officer',
        'org.programs.career3.desc': 'Supervising field programs',
        'org.programs.career4.year': '2009 - 2012',
        'org.programs.career4.title': 'Social Worker',
        'org.programs.career4.desc': 'Community social worker',
        
        // Keuangan Data
        'org.finance.name': 'Dewi Lestari, S.E, Ak',
        'org.finance.birth': 'February 12, 1978',
        'org.finance.birthplace': 'Semarang, Indonesia',
        'org.finance.education': 'Bachelor in Accounting',
        'org.finance.motto': '"Every rupiah managed must provide maximum benefit for the community."',
        'org.finance.hobby1': '💵 Personal financial planning',
        'org.finance.hobby2': '📈 Reading company financial reports',
        'org.finance.hobby3': '🎹 Playing piano',
        'org.finance.hobby4': '🍰 Making cakes and desserts',
        'org.finance.career1.year': '2019 - Present',
        'org.finance.career1.title': 'Head of Finance YPBG',
        'org.finance.career1.desc': 'Managing foundation financial planning and reporting',
        'org.finance.career2.year': '2014 - 2019',
        'org.finance.career2.title': 'Senior Finance Staff',
        'org.finance.career2.desc': 'Preparing budget and cash flow',
        'org.finance.career3.year': '2010 - 2014',
        'org.finance.career3.title': 'Finance Staff',
        'org.finance.career3.desc': 'Managing financial transactions',
        'org.finance.career4.year': '2007 - 2010',
        'org.finance.career4.title': 'Accounting Staff',
        'org.finance.career4.desc': 'Assisting bookkeeping and reconciliation',
        
        // Humas Data
        'org.pr.name': 'Andi Pratama, S.I.Kom',
        'org.pr.birth': 'June 25, 1985',
        'org.pr.birthplace': 'Makassar, Indonesia',
        'org.pr.education': 'Bachelor in Communication Science',
        'org.pr.motto': '"Effective communication is the bridge between the foundation and the community."',
        'org.pr.hobby1': '🎤 Public speaking and MC',
        'org.pr.hobby2': '📱 Social media and content creation',
        'org.pr.hobby3': '🎬 Making videos and editing',
        'org.pr.hobby4': '⚽ Futsal and team sports',
        'org.pr.career1.year': '2020 - Present',
        'org.pr.career1.title': 'Head of Public Relations YPBG',
        'org.pr.career1.desc': 'Managing foundation communication and image',
        'org.pr.career2.year': '2016 - 2020',
        'org.pr.career2.title': 'Public Relations Officer',
        'org.pr.career2.desc': 'Building relationships with media and partners',
        'org.pr.career3.year': '2012 - 2016',
        'org.pr.career3.title': 'Communication Staff',
        'org.pr.career3.desc': 'Preparing communication materials and publications',
        'org.pr.career4.year': '2009 - 2012',
        'org.pr.career4.title': 'Junior PR',
        'org.pr.career4.desc': 'Assisting public relations activities'
    }
};

// Merge with main translations
if (typeof translations !== 'undefined') {
    Object.assign(translations, orgEnglishTranslations);
}
// ===== HINDI TRANSLATIONS FOR NEWS & ALL CONTENT =====
// Add this to translations-patch.js or load separately

const hindiTranslations = {
    'hi': {
        'nav.home': 'होम',
        'nav.about': 'परिचय',
        'nav.programs': 'कार्यक्रम',
        'nav.news': 'समाचार',
        'nav.contact': 'संपर्क',
        'lang.select': 'भाषा चुनें',
        'skiplink': 'मुख्य सामग्री पर जाएं',
        'hero.title': 'प्रेम के साथ सेवा,<br>आशा के साथ निर्माण।',
        'hero.subtitle': 'Yayasan Persada Bakti Global टिकाऊ मानवतावादी सामाजिक सहायता के लिए प्रतिबद्ध है।',
        'hero.btn.about': 'हमारी नींव को जानें',
        'hero.btn.contact': 'हमसे संपर्क करें',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'हमारे बारे में',
        'highlight.about.desc': 'इतिहास और दृष्टि',
        'highlight.programs.title': 'कार्यक्रम',
        'highlight.programs.desc': 'वास्तविक प्रभाव',
        'highlight.news.title': 'प्रकाशन',
        'highlight.news.desc': 'रिपोर्ट और समाचार',
        'about.title': 'नींव के बारे में',
        'about.vision': 'दृष्टि',
        'about.vision.desc': 'सामुदायिक सशक्तिकरण और सतत विकास में अग्रणी संगठन बनना।',
        'about.mission': 'मिशन',
        'about.mission.li1': 'शिक्षा और प्रशिक्षण के माध्यम से सशक्त बनाना',
        'about.mission.li2': 'सामाजिक नवाचार को बढ़ावा देना',
        'about.mission.li3': 'रणनीतिक साझेदारी का निर्माण',
        'about.values': 'मूल मूल्य',
        'about.values.love': 'प्रेम',
        'about.values.integrity': 'ईमानदा��ी',
        'about.values.hope': 'आशा',
        'about.values.collaboration': 'सहयोग',
        'about.journey': 'हमारी यात्रा',
        'about.org': 'संगठनात्मक संरचना',
        'about.gallery': 'गतिविधि दीर्घा',
        'carousel.prev': 'पिछला',
        'carousel.next': 'अगला',
        'about.program': 'कार्यक्रम के बारे में',
        'program.documents': 'कार्यक्रम दस्तावेज़',
        'program.gallery': 'गतिविधि दीर्घा',
        'back.to.programs': 'कार्यक्रमों पर वापस जाएं',
        'back.to.news': 'समाचार पर वापस जाएं',
        'document.proposal': 'कार्यक्रम प्रस्ताव',
        'document.report': 'कार्य रिपोर्ट',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'कार्यक्रम और गतिविधियां',
        'programs.filter.all': 'सभी',
        'programs.filter.scholarship': 'छात्रवृत्ति',
        'programs.filter.infrastructure': 'बुनियादी ढांचा',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'स्वास्थ्य',
        'programs.filter.social': 'सामाजिक',
        'programs.scholarship': 'छात्रवृत्ति कार्यक्रम',
        'programs.scholarship.desc': 'उच्च उपलब्धि वाले छात्रों के लिए पूर्ण शैक्षिक सहायता।',
        'programs.infrastructure': 'बुनियादी ढांचा विकास',
        'programs.infrastructure.desc': 'समुदायों के लिए गांव की सड़कें और सार्वजनिक सुविधाएं।',
        'programs.mbg': 'मुफ्त पौष्टिक भोजन (MBG)',
        'programs.mbg.desc': 'मैंग्रोव पारिस्थितिकी तंत्र संरक्षण और तटीय वनीकरण।',
        'programs.irrigation': 'सिंचाई',
        'programs.irrigation.desc': 'कृषि समुदायों के लिए सिंचाई प्रणाली का निर्माण।',
        'programs.healthy_food': 'स्वस्थ भोजन',
        'programs.healthy_food.desc': 'जरूरतमंदों के लिए पौष्टिक भोजन प्रदान करना।',
        'programs.mck': 'स्नान, धुलाई, शौचालय (MCK)',
        'programs.mck.desc': 'पर्यावरण स्वास्थ्य के लिए MCK सुविधाओं का निर्माण।',
        'programs.worship_house': 'पूजा स्थल',
        'programs.worship_house.desc': 'पूजा स्थलों का निर्माण और नवीनीकरण।',
        'programs.orphanage': 'अनाथालय',
        'programs.orphanage.desc': 'अनाथालयों के लिए सहायता और समर्थन।',
        'programs.medical': 'चिकित्सा उपचार',
        'programs.medical.desc': 'वंचित समुदायों के लिए निःशुल्क चिकित्सा सेवाएं।',
        'programs.learn': 'और जानें →',
        'news.title': 'समाचार और प्रकाशन',
        'news.loadmore': 'और लोड करें',
        'news.readmore': 'और पढ़ें →',
        'news.category.education': 'शिक्षा',
        'news.category.environment': 'पर्यावरण',
        'news.category.health': 'स्वास्थ्य',
        'news.video': '🎥 वीडियो',
        'news.article': '📰 लेख',
        'news.back': 'समाचार पर वापस जाएं',
        'news.date': 'तिथि',
        'news.author': 'YPBG टीम',
        'news.views': 'व्यूज़',
        'news.gallery': '📸 फोटो दस्तावेज़ीकरण',
        'news.about': '📖 के बारे में',
        'news.1.title': 'छात्रवृत्ति कार्यक्रम 2024 खुला',
        'news.1.excerpt': 'YPBG शैक्षिक छात्रवृत्ति कार्यक्रम के लिए पंजीकरण खोलता है...',
        'news.1.video': '🎥 कार्यक्रम वीडियो',
        'news.1.about': '📖 छात्रवृत्ति कार्यक्रम के बारे में',
        'news.1.p1': 'Yayasan Persada Bakti Global (YPBG) ने पूरे इंडोनेशिया में वंचित परिवारों से उच्च उपलब्धि वाले छात्रों के लिए 2024 छात्रवृ��्ति कार्यक्रम के लिए पंजीकरण आधिकारिक तौर पर खोल दिया है।',
        'news.1.p2': 'YPBG छात्रवृत्ति कार्यक्रम में स्कूल शुल्क, किताबें, वर्दी और मासिक भत्ता सहित पूर्ण शैक्षि��� सहायता प्रदान की जाती है। आज तक, 500 से अधिक छात्रों को 100% उत्तीर्ण दर के साथ मदद की है।',
        'news.1.p3': '2024 छात्रवृत्ति कार्यक्रम के लिए पंजीकरण 31 मार्च 2024 तक खुला है। पंजीकरण आवश्यकताओं में शामिल हैं: (1) उपलब्धियों के साथ छात्र, (2) वंचित परिवारों से, (3) उच्च सीखने की भावना, और (4) स्कूल की सिफारिश।',
        'news.1.gallery.1': '🎓 उच्च उपलब्धि वाले छात्रों को छात्रवृत्ति सहायता का वितरण',
        'news.1.gallery.2': '👨‍🎓 छात्रवृत्ति प्राप्तकर्ताओं और YPBG टीम के साथ समूह फोटो',
        'news.1.gallery.3': '📚 छात्रवृत्ति प्राप्तकर्ताओं के लिए ट्यूटोरियल सत्र',
        'news.2.title': 'तट सफाई गतिविधि',
        'news.2.excerpt': 'सैकड़ों YPBG स्वयंसेवकों ने सफलतापूर्वक 5 किमी तट को साफ किया...',
        'news.2.video': '🎥 गतिविधि वीडियो',
        'news.2.about': '📖 तट सफाई के बारे में',
        'news.2.p1': 'Yayasan Persada Bakti Global (YPBG) के सैकड़ों स्वयंसेवकों ने रविवार, 10 फरवरी 2024 को 5 किमी तटरेखा को प��लास्टिक कचरे से साफ किया।',
        'news.2.p2': 'तट सफाई गतिविधि में 300 से अधिक स्वयंसेवकों ने भाग लिया। पारस्परिक सहयोग की उच्च भावना के साथ, स्वयंसेवक सु���ह से कचरा साफ करने के लिए काम कर रहे थे।',
        'news.2.p3': 'एकत्र किया गया कचरा 2 टन तक पहुंच गया, जिसमें प्लास्टिक कचरा, बोतलें और अन्य घरेलू कचरा शामिल था।',
        'news.2.p4': 'तट सफाई क��� अलावा, इस गतिविधि में 1,000 मैंग्रोव पौधों को लगाना भी शामिल था। YPBG इंडोनेशिया के तटीय पर्यावरण की स्थिरता बनाए रखने के लिए प्रतिबद्ध है।',
        'news.2.stat.relawan': 'स्वयंसेवक',
        'news.2.stat.pantai': 'किमी तट',
        'news.2.stat.sampah': 'टन कचरा',
        'news.2.stat.mangrove': 'मैंग्रोव पौधे',
        'news.2.gallery.1': '🧹 तट पर कचरा साफ करते स्वयंसेवक',
        'news.2.gallery.2': '🌱 घर्षण को रोकने के लिए मैंग्रोव पौधे लगाना',
        'news.2.gallery.3': '👥 गतिविधि के बाद स्वयंसेवकों के साथ समूह फोटो',
        'news.3.title': 'निःशुल्क टीकाकरण अभियान',
        'news.3.excerpt': 'YPBG 20 गांवों में निःशुल्क टीकाकरण अभियान आयोजित करता है...',
        'news.3.about': '📖 टीकाकरण अभियान के बारे में',
        'news.3.p1': 'Yayasan Persada Bakti Global (YPBG) ने सोमवार, 5 फरवरी 2024 को 20 गांवों में निःशुल्क टीकाकरण अभियान आयोजित किया।',
        'news.3.p2': 'इस टीकाकरण अभियान में COVID-19 वैक्सीन, इन्फ्लुएंजा वैक्सीन और हेपेटाइटिस B वैक्सीन सहित विभिन्न प्रकार के निःशुल्क वैक्सीन प्रदान किए जाते हैं।',
        'news.3.p3': 'इस गतिविधि को स्थानीय स्वास्थ्य कार्यालय के सहयोग से किया गया था और इसमें 50 चिकित��सा कर्मियों को शामिल किया गया था। YPBG 5,000 टीका प्राप्तकर्ताओं की सेवा करने का लक्ष्य रखता है।',
        'news.3.p4': 'टीकाकरण के अलावा, इस गतिविधि में स्वास्थ्य परामर्श और निःशुल्क स्वास्थ्य जांच भी शामिल है।',
        'news.3.quote': 'स्वास्थ्य प्रत्येक मनुष्य का अधिकार है। हम वंचित समुदायों को स्वास्थ्य तक उचित पहुंच सुनिश्चित करने के लिए प्रतिबद्ध हैं।',
        'news.3.quote.author': 'YPBG निदेशक',
        'news.3.vaccines': '📋 उपलब्ध वैक्सीन',
        'news.3.vaccine.1': 'COVID-19 वैक्सीन - कोरोनवायरस से बचाता है',
        'news.3.vaccine.2': 'इन्फ्लुएंजा वैक्सीन - मौसमी फ्लू को रोकता है',
        'news.3.vaccine.3': 'हेपेटाइटिस B वै���्सीन - संक्रमण से लीवर की रक्षा करता है',
        'news.3.gallery.1': '💉 पेशेवर चिकित्सा कर्मियों द्वारा टीकाकरण प्रक्रिया',
        'news.3.gallery.2': '👥 निःशुल्क टीकाकरण प्राप्त करने के लिए कतार में समुदाय',
        'news.3.gallery.3': '🩺 गांव के समुदायों के लिए स्वास्थ्य परामर्श',
        'contact.title': 'हमसे संपर���क करें',
        'contact.form.title': 'संदेश भेजें',
        'contact.form.name': 'नाम',
        'contact.form.name.placeholder': 'पूर्ण नाम',
        'contact.form.email': 'ईमेल',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'संदेश',
        'contact.form.message.placeholder': 'अपना संदेश लिखें...',
        'contact.form.file': 'दस्तावेज़ अपलोड ���रें',
        'contact.form.file.choose': 'फ़ाइल चुनें',
        'contact.form.file.noFile': 'कोई फ़ाइल नहीं चुनी ���ई',
        'contact.form.submit': 'संदेश भेजें',
        'contact.info.title': 'संपर्क जानकारी',
        'contact.info.email': 'ईमेल',
        'contact.info.phone': 'फोन',
        'contact.info.address': 'पता',
        'contact.info.address.text': 'Persada Bakti स्ट्रीट नंबर 123, जकार्ता',
        'footer.about': 'YPBG के बारे में',
        'footer.about.text': 'Yayasan Persada Bakti Global सामाजिक मानवतावादी सहायता के लिए समर्पित है।',
        'footer.nav': 'नेविगेशन',
        'footer.legal': 'कानूनी',
        'footer.privacy': 'गोपनीयता नीति',
        'footer.terms': 'नियम और शर्तें',
        'footer.language': 'भ��षा',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG)। सर्वाधिकार सुरक्षित।',
        'about.org.chairman': 'अध्यक्��',
        'about.org.ceo': 'मुख्य कार्यकारी अधिकारी',
        'about.org.secretary': 'सचिव',
        'about.org.treasurer': 'कोषाध्यक्ष',
        'about.org.programs': 'कार्यक्रम',
        'about.org.finance': 'वित्त',
        'about.org.pr': 'जनसंपर्क'
    }
};

// Merge with main translations object
if (typeof translations !== 'undefined') {
    Object.assign(translations, hindiTranslations);
}
// ===== ARABIC TRANSLATIONS FOR ALL CONTENT =====
// الترجمات العربية لجميع المحتويات

const arabicTranslations = {
    'ar': {
        'nav.home': 'الرئيسية',
        'nav.about': 'حول',
        'nav.programs': 'البرامج',
        'nav.news': 'الأخبار',
        'nav.contact': 'اتصل بنا',
        'lang.select': 'اختر اللغة',
        'skiplink': 'انتقل إلى المحتوى الرئيسي',
        'hero.title': 'الخدمة بالحب،<br>البناء بالأمل.',
        'hero.subtitle': 'Yayasan Persada Bakti Global ملتزمة بالمساعدة الاجتماعية الإنسانية المستدامة.',
        'hero.btn.about': 'تعرف على مؤسستنا',
        'hero.btn.contact': 'اتصل بنا',
        'brand.name': 'Yayasan Persada Bakti Global',
        'highlight.about.title': 'من نحن',
        'highlight.about.desc': 'التاريخ والرؤية',
        'highlight.programs.title': 'البرامج',
        'highlight.programs.desc': 'تأثير حقيقي',
        'highlight.news.title': 'المنشورات',
        'highlight.news.desc': 'التقارير والأخبار',
        'about.title': 'حول المؤسسة',
        'about.vision': 'الرؤية',
        'about.vision.desc': 'أن نكون منظمة رائدة في تمكين المجتمع والتنمية المستدامة.',
        'about.mission': 'الرسالة',
        'about.mission.li1': 'التمكين من خلال التعليم والتدريب',
        'about.mission.li2': 'تعزيز الابتكار الاجتماعي',
        'about.mission.li3': 'بناء شراكات استراتيجية',
        'about.values': 'القيم الأساسية',
        'about.values.love': 'الحب',
        'about.values.integrity': 'النزاهة',
        'about.values.hope': 'الأمل',
        'about.values.collaboration': 'التعاون',
        'about.journey': 'رحلتنا',
        'about.org': 'الهيكل التنظيمي',
        'about.gallery': 'معرض الأنشطة',
        'carousel.prev': 'السابق',
        'carousel.next': 'التالي',
        'about.program': 'عن البرنامج',
        'program.documents': 'وثائق البرنامج',
        'program.gallery': 'معرض الأنشطة',
        'back.to.programs': 'العودة إلى البرامج',
        'back.to.news': 'العودة إلى الأخبار',
        'document.proposal': 'مقترح البرنامج',
        'document.report': 'تقرير العمل',
        'document.pdf.size': 'PDF - 2.5 MB',
        'document.pdf.size.large': 'PDF - 3.8 MB',
        'programs.title': 'البرامج والأنشطة',
        'programs.filter.all': 'الكل',
        'programs.filter.scholarship': 'المنح الدراسية',
        'programs.filter.infrastructure': 'البنية التحتية',
        'programs.filter.mbg': 'MBG',
        'programs.filter.health': 'الصحة',
        'programs.filter.social': 'الاجتماعية',
        'programs.scholarship': 'برنامج المنح الدراسية',
        'programs.scholarship.desc': 'دعم تعليمي كامل للطلاب المتفوقين.',
        'programs.infrastructure': 'تطوير البنية التحتية',
        'programs.infrastructure.desc': 'طرق القرية والمرافق العامة للمجتمعات.',
        'programs.mbg': 'وجبات مغذية مجانية (MBG)',
        'programs.mbg.desc': 'الحفاظ على ��ظام أشجار المانغروف البيئي وإعادة تشجير السواحل.',
        'programs.irrigation': 'الري',
        'programs.irrigation.desc': 'بناء أنظمة الري للزراعة المجتمعية.',
        'programs.healthy_food': 'الغذاء الصحي',
        'programs.healthy_food.desc': 'توفير الغذاء المغذي للمحتاجين.',
        'programs.mck': 'الاستحمام والغسل والمرحاض (MCK)',
        'programs.mck.desc': 'بناء مرافق MCK للصحة البيئية.',
        'programs.worship_house': 'دار العبادة',
        'programs.worship_house.desc': 'بناء وتجديد دور العبادة.',
        'programs.orphanage': 'دار الأيتام',
        'programs.orphanage.desc': 'المساعدة والدعم لدور الأيتام.',
        'programs.medical': 'العلاج الطبي',
        'programs.medical.desc': 'خدمات طبية مجانية للمجتمعات المحرومة.',
        'programs.learn': 'اعرف المزيد →',

        // NEWS & PUBLICATIONS - BERITA & PUBLIKASI
        'news.title': 'الأخبار والمنشورات',
        'news.loadmore': 'تحميل المزيد',
        'news.readmore': 'اقرأ المزيد →',
        'news.category.education': 'التعليم',
        'news.category.environment': 'البيئة',
        'news.category.health': 'الصحة',
        'news.video': '🎥 فيديو',
        'news.article': '📰 مقال',
        'news.back': 'العودة إلى الأخبار',
        'news.date': 'التاريخ',
        'news.author': 'فريق YPBG',
        'news.views': 'مشاهدات',
        'news.gallery': '📸 توثيق الصور',
        'news.about': '📖 عن',

        // NEWS 1: BEASISWA / SCHOLARSHIP
        'news.1.title': 'برنامج المنح الدراسية 2024 مفتوح',
        'news.1.excerpt': 'YPBG يفتح التسجيل لبرنامج المنح الدراسية التعليمية...',
        'news.1.video': '🎥 فيديو البرنامج',
        'news.1.about': '📖 عن برنامج المنح الدراسية',
        'news.1.p1': 'افتتحت Yayasan Persada Bakti Global (YPBG) رسمياً التسجيل في برنامج المنح الدراسية 2024 للطلاب المتفوقين من العائلات المحرومة في جميع أنحاء إندونيسيا. هذا البرنامج هو التزام YPBG بتحسين جودة تعليم الجيل الشاب الإندونيسي.',
        'news.1.p2': 'يوفر برنامج المنح الدراسية YPBG دعماً تعليمياً كاملاً يشمل الرسوم المدرسية والكتب والزي الرسمي والبدلات الشهرية. حتى الآن، ساعد برنامج المنح الدراسية YPBG أكثر من 500 طالب على إكمال تعليمهم بمعدل نجاح 100%.',
        'news.1.p3': 'التسجيل لبرنامج المنح الدراسية 2024 مفتوح حتى 31 مارس 2024. متطلبات التسجيل تشمل: (1) طلاب المدارس المتوسطة/الثانوية المتفوقين، (2) من عائلات محرومة، (3) روح تعلم عالية، و (4) توصية من المدرسة.',
        'news.1.gallery.1': '🎓 توزيع مساعدة المنح الدراسية على الطلاب المتفوقين',
        'news.1.gallery.2': '👨‍🎓 صورة جماعية مع مستلمي المنح الدراسية وفريق YPBG',
        'news.1.gallery.3': '📚 جلسات تعليمية لمستلمي المنح الدراسية',

        // NEWS 2: PEMBERISIHAN PANTAI / BEACH CLEANUP
        'news.2.title': 'نشاط تنظيف الشاطئ',
        'news.2.excerpt': 'مئات المتطوعين YPBG نجحوا في تنظيف 5 كم من الشاطئ...',
        'news.2.video': '🎥 فيديو النشاط',
        'news.2.about': '📖 عن تنظيف الشاطئ',
        'news.2.p1': 'نجح مئات المتطوعين من Yayasan Persada Bakti Global (YPBG) في تنظيف 5 كم من الخط الساحلي من النفايات البلاستيكية والنفايات الأخرى في نشاط تنظيف الشاطئ الذي أقيم يوم الأحد 10 فبراير 2024.',
        'news.2.p2': 'شارك في نشاط تنظيف الشاطئ أكثر من 300 متطوع من أعضاء YPBG والطلاب والتلاميذ والمجتمعات المحلية. بروح عالية من التعاون المتبادل، عمل المتطوعون منذ الصباح لتنظيف أنواع مختلفة من النف��يات التي جرفتها الأمواج إلى الشاطئ.',
        'news.2.p3': 'وصلت النفايات التي تم جمعها إلى 2 طن، تتكون من نفايات بلاستيكية وزجاجات ونفايات منزلية أخرى. تم فرز هذه النفايات بعد ذلك وإدارتها وفقاً لنوعها لإعادة التدوير أو التخلص منها بطريقة صديقة للبيئة.',
        'news.2.p4': 'بالإضافة إلى تنظيف الشاطئ، شمل هذا النشاط أيضاً زراعة 1000 شتلة من أشجار المانغروف لمنع تآكل السواحل والحفاظ على النظم البيئية البحرية. YPBG ملتزمة بمواصلة إقامة أنشطة مماثلة للحفاظ على استدامة البيئة الساحلية الإندونيسية.',
        'news.2.stat.relawan': 'متطوع',
        'news.2.stat.pantai': 'كم شاطئ',
        'news.2.stat.sampah': 'طن نفايات',
        'news.2.stat.mangrove': 'شتلات مانغروف',
        'news.2.gallery.1': '🧹 متطوعون ينظفون النفايات على الشاطئ',
        'news.2.gallery.2': '🌱 زراعة شتلات المانغروف لمنع التآكل',
        'news.2.gallery.3': '👥 صورة جماعية مع المتطوعين بعد النشاط',

        // NEWS 3: VAKSINASI / VACCINATION
        'news.3.title': 'حملة التطعيم المجانية',
        'news.3.excerpt': 'YPBG تقيم حملة تطعيم مجانية في 20 قرية...',
        'news.3.about': '📖 عن حملة التطعيم',
        'news.3.p1': 'أقامت Yayasan Persada Bakti Global (YPBG) حملة تطعيم مجانية في 20 قرية في مناطق مختلفة من إندونيسيا يوم الاثنين 5 فبراير 2024. هذا البرنامج هو جزء من التزام YPBG بتحسين الوصول إلى الصحة للمجتمعات المحرومة.',
        'news.3.p2': 'توفر حملة التطعيم هذه أنواعاً مختلفة من اللقاحات المجانية بما في ذلك لقاح COVID-19 ولقاح الإنفلونزا ولقاح التهاب الكبد B. جميع الخدمات تقدم مجاناً للمحتاجين.',
        'news.3.p3': 'تم تنفيذ هذا النشاط بالتعاون مع مكتب الصحة المحلي وشمل 50 من الكوادر الطبية المهنية من أطباء وممرضات وقابلات. تستهدف YPBG خدمة 5000 متلقٍ للقاح في هذه الحملة.',
        'news.3.p4': 'بالإضافة إلى التطعيم، ��شمل هذا النشاط أيضاً ��لتثقيف الصحي والفحوصات الصحية المجانية. يمكن للمجتمع استشارة الأطباء مباشرة بشأن مشاكلهم الصحية.',
        'news.3.quote': 'الصحة حق لكل إنسان. نحن ملتزمون بضمان حصول المجتمعات المحرومة أيضاً على وصول لائق إلى الصحة.',
        'news.3.quote.author': 'مدير YPBG',
        'news.3.vaccines': '📋 اللقاحات المتاحة',
        'news.3.vaccine.1': 'لقاح COVID-19 - يحمي من فيروس كورونا',
        'news.3.vaccine.2': 'لقاح الإنفلونزا - يمنع الإنفلونزا الموسمية',
        'news.3.vaccine.3': 'لقاح التهاب الكبد B - يحمي الكبد من العدوى',
        'news.3.gallery.1': '💉 عملية التطعيم من قبل كوادر طبية مهنية',
        'news.3.gallery.2': '👥 المجتمع يصطف للحصول على التطعيم المجاني',
        'news.3.gallery.3': '🩺 التثقيف الصحي لمجتمعات القرى',

        // Values Section - Love
        'values.love.subtitle': 'Serving with love, building with hope',
        'values.love.p1': 'Love is the main foundation of every action we take at Yayasan Persada Bakti Global. We believe that sincere service begins with pure love for fellow human beings.',
        'values.love.p2': 'Every program, every activity, and every interaction we have is based on love that does not distinguish ethnicity, religion, race, or social background. Love drives us to keep giving without expecting anything in return.',
        'values.love.principle1': '❤️ <strong>Loving unconditionally</strong> - Giving without expecting anything back',
        'values.love.principle2': '🤝 <strong>Serving sincerely</strong> - Every service is done with all our heart',
        'values.love.principle3': '🌟 <strong>Valuing every individual</strong> - Every person is precious in our eyes',
        'values.love.principle4': '🙏 <strong>Empathizing with others</strong> - Feeling what others feel',
        'values.love.quote': '"Love is patient; love is kind; love is not envious. It does not boast and is not proud."',
        'values.love.quoteRef': '— 1 Corinthians 13:4',
        'values.love.application': 'In every activity we do, from scholarship programs to health social services, love is the main motivation. We not only provide material assistance, but also attention and moral support to those in need.',

        // Values Section - Integrity
        'values.integrity.subtitle': 'Honest in action, consistent in words',
        'values.integrity.p1': 'Integrity is our commitment to always act honestly and transparently in every aspect of the foundation\'s operations. We believe that trust from the community is the greatest asset that must be maintained.',
        'values.integrity.p2': 'Every decision, every use of funds, and every program we run is carried out with high integrity principles. We are accountable to donors, beneficiaries, and all stakeholders.',
        'values.integrity.principle1': '🛡️ <strong>Absolute honesty</strong> - Always speak and act honestly',
        'values.integrity.principle2': '📊 <strong>Financial transparency</strong> - Open and accountable financial reports',
        'values.integrity.principle3': '⚖️ <strong>Justice</strong> - Treating all parties fairly and without discrimination',
        'values.integrity.principle4': '✅ <strong>Accountability</strong> - Responsible for every action and decision',
        'values.integrity.quote': '"Integrity is doing the right thing, even when no one is watching."',
        'values.integrity.quoteRef': '— C.S. Lewis',
        'values.integrity.application': 'We publish transparent annual reports, conduct regular financial audits, and ensure every donation is distributed according to the established purpose. Integrity is our promise to you.',

        // Values Section - Hope
        'values.hope.subtitle': 'Every sunrise brings new hope',
        'values.hope.p1': 'Hope is the light that illuminates our path in serving the community. We believe that every person, regardless of their current condition, deserves a chance for a better future.',
        'values.hope.p2': 'Through every program we run, we strive to ignite new hope for those in need. Hope for better education, better health, and a more prosperous life.',
        'values.hope.principle1': '🌅 <strong>Realistic optimism</strong> - Believing in the possibility of positive change',
        'values.hope.principle2': '🎯 <strong>Focus on solutions</strong> - Seeking ways out, not complaining about problems',
        'values.hope.principle3': '🌱 <strong>Sustainable growth</strong> - Building a better future',
        'values.hope.principle4': '✨ <strong>Inspiration for others</strong> - Being a light of hope for others',
        'values.hope.quote': '"Hope is a good thing, maybe the best of things, and no good thing ever dies."',
        'values.hope.quoteRef': '— Stephen King',
        'values.hope.application': 'Every scholarship recipient who successfully graduates, every family who receives food assistance, and every patient who recovers is concrete proof that the hope we give is not in vain.',

        // Values Section - Collaboration
        'values.collaboration.subtitle': 'Together we are stronger',
        'values.collaboration.p1': 'Collaboration is the key to creating greater impact. We believe that by working together with various parties, we can achieve more than working alone.',
        'values.collaboration.p2': 'We actively build partnerships with government, private sector, community organizations, and individuals who share the same vision. Together, we create synergy for community welfare.',
        'values.collaboration.principle1': '🤝 <strong>Strategic partnerships</strong> - Building mutually beneficial relationships',
        'values.collaboration.principle2': '🗣️ <strong>Open communication</strong> - Honest and constructive dialogue',
        'values.collaboration.principle3': '🎯 <strong>Common goals</strong> - Focus on the impact we want to achieve together',
        'values.collaboration.principle4': '🌟 <strong>Mutual respect</strong> - Valuing each partner\'s contribution',
        'values.collaboration.quote': '"If you want to go fast, go alone. If you want to go far, go together."',
        'values.collaboration.quoteRef': '— African Proverb',
        'values.collaboration.application': 'We partner with the Health Office for vaccination campaigns, with schools for scholarship programs, and with various organizations for social service activities. Collaboration allows us to reach more beneficiaries.',

        // CONTACT & FOOTER
        'contact.title': 'اتصل بنا',
        'contact.form.title': 'إرسال رسالة',
        'contact.form.name': 'الاسم',
        'contact.form.name.placeholder': 'الاسم الكامل',
        'contact.form.email': 'البريد الإلكتروني',
        'contact.form.email.placeholder': 'example@domain.com',
        'contact.form.message': 'الرسالة',
        'contact.form.message.placeholder': 'اكتب رسالتك...',
        'contact.form.file': 'تحميل المستند',
        'contact.form.file.choose': 'اختر ملفاً',
        'contact.form.file.noFile': 'لم يتم اختيار ملف',
        'contact.form.submit': 'إرسال الرسالة',
        'contact.info.title': 'معلومات الاتصال',
        'contact.info.email': 'البريد الإلكتروني',
        'contact.info.phone': 'الهاتف',
        'contact.info.address': 'العنوان',
        'contact.info.address.text': 'شارع Persada Bakti رقم 123، جاكرتا',
        'footer.about': 'عن YPBG',
        'footer.about.text': 'Yayasan Persada Bakti Global مكرسة للمساعدة الإنسانية الاجتماعية.',
        'footer.nav': 'التنقل',
        'footer.legal': 'قانوني',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.terms': 'الشروط والأحكام',
        'footer.language': 'اللغة',
        'footer.copyright': 'Yayasan Persada Bakti Global (YPBG). جميع الحقوق محفوظة.',
        'about.org.chairman': 'رئيس المجلس',
        'about.org.ceo': 'الرئيس التنفيذي',
        'about.org.secretary': 'الأمين',
        'about.org.treasurer': 'أمين الصندوق',
        'about.org.programs': 'البرامج',
        'about.org.finance': 'المالية',
        'about.org.pr': 'العلاقات العامة'
    }
};

// Merge with main translations object
if (typeof translations !== 'undefined') {
    Object.assign(translations, arabicTranslations);
}

// RTL handling moved to translate-all.js - avoid conflicts
// ===== SISTEM TRANSLASI =====
// File ini menangani semua translasi untuk website

function translateAllPage(lang) {
    console.log('[Translate] Menerjemahkan ke:', lang);

    // Perbarui atribut lang HTML
    document.documentElement.lang = lang;

    // Handle RTL untuk Arab - Terapkan ke body, bukan html, untuk mencegah masalah layout
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }

    // Terjemahkan semua elemen dengan atribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Terjemahkan semua elemen dengan atribut data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, lang);
        if (translation && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            element.placeholder = translation;
        }
    });

    // Simpan preferensi bahasa
    localStorage.setItem('selectedLanguage', lang);

    console.log('[Translate] Translasi selesai untuk:', lang);
}

// Dapatkan translasi dari objek translations
function getTranslation(key, lang) {
    if (typeof translations === 'undefined') {
        return key;
    }

    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }

    // Fallback ke Bahasa Indonesia
    if (translations['id'] && translations['id'][key]) {
        return translations['id'][key];
    }

    return key;
}

// Dapatkan bahasa saat ini
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// Muat bahasa yang disimpan saat halaman dimuat
function loadSavedLanguage() {
    const savedLang = getCurrentLanguage();
    return savedLang;
}

// Inisialisasi translasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = loadSavedLanguage();
    console.log('[Translate] Bahasa tersimpan:', savedLang);

    // Tunggu sebentar untuk semua script dimuat
    setTimeout(function() {
        if (typeof translations !== 'undefined') {
            translateAllPage(savedLang);
            console.log('[Translate] Translasi awal diterapkan');
        }
    }, 500);
});

// Ekspor fungsi
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translateAllPage, getTranslation, getCurrentLanguage };
}
// ===== GOOGLE SHEETS & DRIVE INTEGRATION =====
// Configuration - Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGib2xLsGWYIOcZAcYEh_J764VfQnDj0EudU_02DVyCev6r6g6keySMqr_4frI4EwX/exec';

// File upload configuration
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25 MB in bytes
const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/jpg'];
const ALLOWED_EXTENSIONS = ['.pdf', '.jpg', '.jpeg'];

// Debug mode - set to true to see console logs
const DEBUG = true;

function log(message, data = null) {
    if (DEBUG) {
        console.log('[YPBG Form]', message, data || '');
    }
}

function error(message, data = null) {
    console.error('[YPBG Form Error]', message, data || '');
}

// ===== FORM VALIDATION =====
function validateFile(file) {
    if (!file) {
        return { valid: true }; // File is optional
    }

    // Check file size
    if (file.size > MAX_FILE_SIZE) {
        return {
            valid: false,
            message: 'Ukuran file melebihi 25 MB. Silakan pilih file yang lebih kecil.'
        };
    }

    // Check file type
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(fileExtension)) {
        return {
            valid: false,
            message: 'Format file tidak didukung. Hanya PDF dan JPG yang diperbolehkan.'
        };
    }

    return { valid: true };
}

function validateForm(form) {
    const name = form.querySelector('#form-name').value.trim();
    const email = form.querySelector('#form-email').value.trim();
    const message = form.querySelector('#form-message').value.trim();
    const fileInput = form.querySelector('#form-file');
    const file = fileInput.files[0];

    let isValid = true;

    // Validate name
    const errorName = form.querySelector('#error-name');
    if (!name) {
        errorName.textContent = 'Nama harus diisi';
        isValid = false;
    } else {
        errorName.textContent = '';
    }

    // Validate email
    const errorEmail = form.querySelector('#error-email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errorEmail.textContent = 'Email harus diisi';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        errorEmail.textContent = 'Format email tidak valid';
        isValid = false;
    } else {
        errorEmail.textContent = '';
    }

    // Validate message
    const errorMessage = form.querySelector('#error-message');
    if (!message) {
        errorMessage.textContent = 'Pesan harus diisi';
        isValid = false;
    } else {
        errorMessage.textContent = '';
    }

    // Validate file
    const errorFile = form.querySelector('#error-file');
    const fileValidation = validateFile(file);
    if (!fileValidation.valid) {
        errorFile.textContent = fileValidation.message;
        isValid = false;
    } else {
        errorFile.textContent = '';
    }

    return { isValid, name, email, message, file };
}

// ===== CONVERT FILE TO BASE64 =====
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// ===== SUBMIT TO GOOGLE SHEETS & DRIVE =====
async function submitToGoogleSheets(data) {
    log('Submitting data to Google Sheets...', data);
    
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    formData.append('timestamp', new Date().toISOString());

    if (data.fileBase64) {
        log('File detected, adding to form data...');
        formData.append('fileName', data.fileName);
        formData.append('fileType', data.fileType);
        formData.append('fileData', data.fileBase64);
    }

    try {
        // Use no-cors mode for Google Apps Script
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        log('Response received:', response);
        
        // With no-cors, we can't read the response, but if we get here, it worked
        return {
            success: true,
            message: 'Data submitted successfully'
        };
    } catch (fetchError) {
        error('Fetch error:', fetchError);
        throw fetchError;
    }
}

// ===== FORM SUBMISSION HANDLER =====
async function handleContactFormSubmit(e) {
    e.preventDefault();
    
    log('=== FORM SUBMIT TRIGGERED ===');
    log('Event type:', e.type);
    log('Event target:', e.target);

    const form = document.getElementById('contact-form');
    const messageBox = document.getElementById('form-message-box');
    const submitBtn = form.querySelector('.btn-submit');

    log('Form found:', !!form);
    log('Message box found:', !!messageBox);
    log('Submit button found:', !!submitBtn);

    // Validate form
    const validation = validateForm(form);
    log('Form validation result:', validation.isValid);
    
    if (!validation.isValid) {
        error('Form validation failed');
        return;
    }

    log('Form data:', {
        name: validation.name,
        email: validation.email,
        message: validation.message,
        hasFile: !!validation.file
    });

    // Disable submit button
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>⏳</span> <span>Mengirim...</span>';
    messageBox.className = 'form-message';
    messageBox.textContent = '';

    try {
        log('Preparing form data...');
        
        // Prepare data
        const formData = {
            name: validation.name,
            email: validation.email,
            message: validation.message
        };

        // Handle file upload if exists
        if (validation.file) {
            log('Converting file to base64...');
            formData.fileBase64 = await fileToBase64(validation.file);
            formData.fileName = validation.file.name;
            formData.fileType = validation.file.type;
            log('File converted:', formData.fileName);
        }

        log('Submitting to Google Sheets...');
        log('Google Script URL:', GOOGLE_SCRIPT_URL);
        
        // Submit to Google Sheets
        const result = await submitToGoogleSheets(formData);

        log('Submit result:', result);

        if (result.success) {
            messageBox.className = 'form-message success';
            messageBox.textContent = '✓ Pesan berhasil dikirim! Kami akan segera menghubungi Anda.';
            form.reset();
            log('Form reset successfully');
        } else {
            throw new Error(result.message || 'Gagal mengirim pesan');
        }

    } catch (error) {
        error('Submission error:', error);
        error('Error stack:', error.stack);
        messageBox.className = 'form-message error';
        messageBox.textContent = '✗ Terjadi kesalahan: ' + error.message + '. Silakan coba lagi atau hubungi kami via email.';
    } finally {
        // Re-enable submit button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        log('Submit button re-enabled');

        // Clear message after 5 seconds
        setTimeout(() => {
            messageBox.textContent = '';
        }, 5000);
    }
}

// Export functions for global access
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateFile,
        validateForm,
        fileToBase64,
        submitToGoogleSheets,
        handleContactFormSubmit
    };
}
/**
 * Google Apps Script untuk YPBG Contact Form
 * 
 * INSTRUKSI PENGGUNAAN:
 * 1. Buka https://script.google.com/
 * 2. Buat project baru
 * 3. Copy-paste kode ini
 * 4. Ganti FOLDER_ID dan SPREADSHEET_ID dengan milik Anda
 * 5. Deploy sebagai Web App dengan akses "Anyone"
 * 6. Copy URL Web App dan paste ke google-drive-integration.js
 */

// ===== CONFIGURATION =====
// Ganti dengan ID folder Google Drive Anda untuk menyimpan file upload
const FOLDER_ID = '1T9eHs8YqReD_G1j3O3RKAtgfnQ7hxaLG';

// Ganti dengan ID Google Spreadsheet Anda untuk menyimpan data form
const SPREADSHEET_ID = '1fOlqG08gnuYljijDPExCABesXgFYRRDyF4QRmZaguks';

// ===== MAIN FUNCTION =====
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    const data = e.parameter;
    const name = data.name;
    const email = data.email;
    const message = data.message;
    const timestamp = data.timestamp || new Date().toISOString();
    
    // Save to Google Sheets
    const sheetId = saveToSheet(name, email, message, timestamp);
    
    // Handle file upload if exists
    let fileUrl = '';
    if (data.fileData && data.fileName) {
      fileUrl = saveFileToDrive(data.fileData, data.fileName, data.fileType, name, email);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        sheetId: sheetId,
        fileUrl: fileUrl,
        message: 'Data berhasil disimpan'
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
    
  } finally {
    lock.releaseLock();
  }
}

// ===== SAVE TO GOOGLE SHEETS =====
function saveToSheet(name, email, message, timestamp) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if header exists, if not create it
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message', 'File URL', 'Processed']);
      sheet.getRange(1, 1, 1, 6).setFontWeight('bold').setBackground('#f0f0f0');
    }
    
    // Add new row
    const rowData = [timestamp, name, email, message, '', 'Pending'];
    sheet.appendRow(rowData);
    
    const lastRow = sheet.getLastRow();
    return lastRow;
    
  } catch (error) {
    Logger.log('Error saving to sheet: ' + error.toString());
    throw error;
  }
}

// ===== SAVE FILE TO GOOGLE DRIVE =====
function saveFileToDrive(base64Data, fileName, fileType, senderName, senderEmail) {
  try {
    // Get or create folder
    let folder;
    try {
      folder = DriveApp.getFolderById(FOLDER_ID);
    } catch (e) {
      // If folder doesn't exist, create it
      folder = DriveApp.createFolder('YPBG Contact Form Uploads');
    }
    
    // Create subfolder by date (YYYY-MM-DD)
    const today = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
    let dateFolder;
    const folders = folder.getFolders();
    while (folders.hasNext()) {
      const f = folders.next();
      if (f.getName() === today) {
        dateFolder = f;
        break;
      }
    }
    if (!dateFolder) {
      dateFolder = folder.createFolder(today);
    }
    
    // Decode base64 data
    const data = base64Data.split(',')[1]; // Remove data:image/jpeg;base64, prefix
    const blob = Utilities.newBlob(Utilities.base64Decode(data), fileType, fileName);
    
    // Create unique filename
    const timestamp = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyyMMdd_HHmmss');
    const safeName = senderName.replace(/[^a-zA-Z0-9]/g, '_');
    const newFileName = timestamp + '_' + safeName + '_' + fileName;
    
    // Save file
    const file = dateFolder.createFile(blob);
    file.setName(newFileName);
    
    // Set file permissions (optional - make accessible to owner only)
    file.setSharing(DriveApp.Access.PRIVATE, DriveApp.Permission.NONE);
    
    // Get file URL
    const fileUrl = file.getUrl();
    
    // Update spreadsheet with file URL
    updateSheetWithFileUrl(senderEmail, fileUrl);
    
    Logger.log('File saved: ' + fileUrl);
    return fileUrl;
    
  } catch (error) {
    Logger.log('Error saving file: ' + error.toString());
    throw error;
  }
}

// ===== UPDATE SHEET WITH FILE URL =====
function updateSheetWithFileUrl(email, fileUrl) {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getActiveSheet();
    const data = sheet.getDataRange().getValues();
    
    // Find the row with matching email (search from bottom)
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][2] === email && data[i][4] === '') {
        // Update file URL column (column E = index 4)
        sheet.getRange(i + 1, 5).setValue(fileUrl);
        // Update status column (column F = index 5)
        sheet.getRange(i + 1, 6).setValue('Completed');
        break;
      }
    }
    
  } catch (error) {
    Logger.log('Error updating sheet: ' + error.toString());
  }
}

// ===== HELPER FUNCTION - GET SPREADSHEET ID =====
function getSpreadsheetId() {
  return SpreadsheetApp.getActiveSpreadsheet().getId();
}

// ===== HELPER FUNCTION - GET FOLDER ID =====
function getFolderId() {
  const folderName = 'YPBG Contact Form Uploads';
  const folders = DriveApp.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next().getId();
  } else {
    const folder = DriveApp.createFolder(folderName);
    return folder.getId();
  }
}

// ===== TEST FUNCTION =====
function testFunction() {
  Logger.log('Spreadsheet ID: ' + getSpreadsheetId());
  Logger.log('Folder ID: ' + getFolderId());
}
// ===== KONFIGURASI =====
const config = {
    galleryImages: [
        { title: 'Pendidikan', src: 'assets/images/gallery/Foto_1.webp' },
        { title: 'Bantuan Sapi', src: 'assets/images/gallery/Foto_2.webp' },
        { title: 'Air Bersih', src: 'assets/images/gallery/Foto_3.webp' }
    ],
    newsData: [
        { id: 1, title: 'Program Beasiswa 2024 Dibuka', excerpt: 'YPBG membuka pendaftaran program beasiswa pendidikan...', date: '2024-02-15', category: 'Pendidikan', image: 'assets/images/Program_Kegiatan_Beasiswa.webp' },
        { id: 2, title: 'Kegiatan Pembersihan Pantai', excerpt: 'Ratusan relawan YPBG berhasil membersihkan 5 km pantai...', date: '2024-02-10', category: 'Lingkungan', image: 'assets/images/Kegiatan_Pembersihan_Pantai.svg' },
        { id: 3, title: 'Kampanye Vaksinasi Gratis', excerpt: 'YPBG menggelar kampanye vaksinasi gratis di 20 desa...', date: '2024-02-05', category: 'Kesehatan', image: 'assets/images/Program_Kegiatan_Pengobatan.webp' }
    ]
};

// ===== INISIALISASI =====
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa yang disimpan dan terapkan translasi
    const savedLang = loadSavedLanguage();
    if (typeof translateAllPage === 'function') {
        translateAllPage(savedLang);
    }

    // Inisialisasi tema
    initThemeToggle();

    initMobileMenu();
    initDropdownMenu();
    initLanguageSelector();
    initSmoothScroll();
    initCarousel();
    initProgramFilter();
    initContactForm();
    initNews();
    initFadeIn();
    updateYear();
    initHeaderShadow();
    initWhatsappDraggable();
    initYouTubeLite();
});

// ===== TOGGLE TEMA =====
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Muat preferensi tema yang disimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle tema saat diklik
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        console.log('[Tema] Beralih ke mode', isDark ? 'gelap' : 'terang');
        
        // Update dropdown colors dynamically without reload
        updateDropdownColors(isDark);
    });
}

// Update dropdown colors when theme changes
function updateDropdownColors(isDark) {
    const pustakaDropdowns = document.querySelectorAll('.pustaka-dropdown');
    const languageDropdown = document.getElementById('language-dropdown');
    
    const bgColor = isDark ? 'rgba(30, 30, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)';
    const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
    const textColor = isDark ? '#a1a1a6' : '#6e6e73';
    const shadowColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.12)';
    const innerShadow = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)';
    const outerShadow = isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.08)';
    
    // Update Pustaka dropdowns
    pustakaDropdowns.forEach(menu => {
        menu.style.background = bgColor;
        menu.style.borderColor = borderColor;
        menu.style.boxShadow = `0 0 0 1px ${innerShadow}, 0 20px 60px ${shadowColor}, 0 0 120px ${outerShadow}`;
        
        // Update menu items
        menu.querySelectorAll('a').forEach(link => {
            link.style.color = textColor;
        });
    });
    
    // Update Language dropdown
    if (languageDropdown) {
        languageDropdown.style.background = bgColor;
        languageDropdown.style.borderColor = borderColor;
        languageDropdown.style.boxShadow = `0 0 0 1px ${innerShadow}, 0 20px 60px ${shadowColor}, 0 0 120px ${outerShadow}`;
        
        // Update menu items
        languageDropdown.querySelectorAll('.lang-option').forEach(option => {
            option.style.color = textColor;
        });
        
        // Update region titles
        languageDropdown.querySelectorAll('.lang-region-title').forEach(title => {
            title.style.color = isDark ? '#6e6e73' : '#86868b';
        });
    }
}

// Dapatkan bahasa saat ini
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// ===== FUNGSI-FUNGSI =====

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        console.log('[Mobile Menu] Toggle:', isOpen ? 'OPEN' : 'CLOSED');
    });

    // Tutup menu saat mengklik tautan navigasi
    menu.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Tutup menu saat mengklik opsi bahasa
    menu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

// ===== DROPDOWN MENU (DESKTOP & MOBILE) =====
function initDropdownMenu() {
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    console.log('[Dropdown] Found', dropdowns.length, 'dropdowns');

    // Check dark mode
    const isDarkMode = document.body.classList.contains('dark-mode');

    dropdowns.forEach((dropdown, index) => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        const originalMenu = dropdown.querySelector('.nav-dropdown-menu');
        
        console.log('[Dropdown] Toggle:', toggle ? 'FOUND' : 'NOT FOUND');
        console.log('[Dropdown] Original Menu:', originalMenu ? 'FOUND' : 'NOT FOUND');
        
        if (!toggle || !originalMenu) {
            console.log('[Dropdown] Skipping - missing elements');
            return;
        }

        // Dark mode colors
        const bgColor = isDarkMode ? 'rgba(30, 30, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)';
        const borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
        const textColor = isDarkMode ? '#a1a1a6' : '#6e6e73';
        const hoverBg = isDarkMode ? 'rgba(41, 151, 255, 0.15)' : 'rgba(0, 113, 227, 0.06)';
        const hoverColor = isDarkMode ? '#5ac8fa' : '#0071e3';
        const shadowColor = isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.12)';

        // CREATE NEW dropdown menu with Apple-style
        const newMenu = document.createElement('div');
        newMenu.className = 'pustaka-dropdown';
        newMenu.id = 'pustaka-dropdown-' + index;
        newMenu.innerHTML = originalMenu.innerHTML;
        newMenu.style.cssText = `
            display: none !important;
            position: fixed !important;
            top: 52px !important;
            left: 50% !important;
            transform: translateX(-50%) translateY(10px) scale(0.98) !important;
            background: ${bgColor} !important;
            backdrop-filter: saturate(180%) blur(30px) !important;
            -webkit-backdrop-filter: saturate(180%) blur(30px) !important;
            min-width: 340px !important;
            border-radius: 20px !important;
            box-shadow: 
                0 0 0 1px ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'} !important,
                0 20px 60px ${shadowColor} !important,
                0 0 120px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.08)'} !important !important;
            padding: 12px !important;
            list-style: none !important;
            border: 1px solid ${borderColor} !important;
            z-index: 999999 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            pointer-events: none !important;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        `;
        
        document.body.appendChild(newMenu);
        console.log('[Dropdown] New menu created and appended to body');

        // Add hover effect to menu items
        newMenu.querySelectorAll('a').forEach(link => {
            link.style.cssText = `
                display: block !important;
                padding: 14px 18px !important;
                color: ${textColor} !important;
                text-decoration: none !important;
                font-size: 14px !important;
                font-weight: 400 !important;
                border-radius: 14px !important;
                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
                position: relative !important;
                overflow: hidden !important;
            `;
            
            link.addEventListener('mouseenter', () => {
                link.style.background = hoverBg;
                link.style.color = hoverColor;
                link.style.transform = 'translateX(4px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.background = 'transparent';
                link.style.color = textColor;
                link.style.transform = 'translateX(0)';
            });
        });

        // HOVER to show dropdown (desktop only)
        let hoverTimeout;
        
        dropdown.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            hoverTimeout = setTimeout(() => {
                // Close other dropdowns
                document.querySelectorAll('.pustaka-dropdown, .language-dropdown').forEach(menu => {
                    if (menu !== newMenu) {
                        menu.style.opacity = '0';
                        menu.style.visibility = 'hidden';
                        menu.style.pointerEvents = 'none';
                        setTimeout(() => {
                            menu.style.display = 'none';
                        }, 400);
                    }
                });
                
                // Show Pustaka dropdown with animation
                newMenu.style.display = 'block';
                setTimeout(() => {
                    newMenu.style.opacity = '1';
                    newMenu.style.visibility = 'visible';
                    newMenu.style.pointerEvents = 'auto';
                    newMenu.style.transform = 'translateX(-50%) translateY(0) scale(1)';
                }, 10);
            }, 50);
        });
        
        dropdown.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                newMenu.style.opacity = '0';
                newMenu.style.visibility = 'hidden';
                newMenu.style.pointerEvents = 'none';
                newMenu.style.transform = 'translateX(-50%) translateY(10px) scale(0.98)';
                setTimeout(() => {
                    newMenu.style.display = 'none';
                }, 400);
            }, 100);
        });
        
        // Keep dropdown open when hovering over it
        newMenu.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
        });
        
        newMenu.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                newMenu.style.opacity = '0';
                newMenu.style.visibility = 'hidden';
                newMenu.style.pointerEvents = 'none';
                newMenu.style.transform = 'translateX(-50%) translateY(10px) scale(0.98)';
                setTimeout(() => {
                    newMenu.style.display = 'none';
                }, 400);
            }, 100);
        });
    });
}

function initLanguageSelector() {
    const selector = document.querySelector('.language-selector');
    const toggle = document.querySelector('.lang-toggle');
    const originalMenu = document.querySelector('.lang-dropdown');
    const options = document.querySelectorAll('.lang-option');
    const footerSelect = document.getElementById('language-select');

    if (!selector || !toggle || !originalMenu) {
        console.log('[Language] Selector, toggle, or menu not found');
        return;
    }

    console.log('[Language] Initialized');

    // Check dark mode
    const isDarkMode = document.body.classList.contains('dark-mode');

    // Dark mode colors
    const bgColor = isDarkMode ? 'rgba(30, 30, 30, 0.98)' : 'rgba(255, 255, 255, 0.98)';
    const borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
    const textColor = isDarkMode ? '#a1a1a6' : '#6e6e73';
    const titleColor = isDarkMode ? '#6e6e73' : '#86868b';
    const hoverBg = isDarkMode ? 'rgba(41, 151, 255, 0.15)' : 'rgba(0, 113, 227, 0.06)';
    const hoverColor = isDarkMode ? '#5ac8fa' : '#0071e3';
    const activeBg = isDarkMode ? 'rgba(41, 151, 255, 0.2)' : 'rgba(0, 113, 227, 0.08)';
    const shadowColor = isDarkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.12)';

    // CREATE NEW language dropdown menu with Apple-style
    const newMenu = document.createElement('div');
    newMenu.className = 'language-dropdown';
    newMenu.id = 'language-dropdown';
    newMenu.innerHTML = originalMenu.innerHTML;
    newMenu.style.cssText = `
        display: none !important;
        position: fixed !important;
        top: 60px !important;
        right: 200px !important;
        background: ${bgColor} !important;
        backdrop-filter: saturate(180%) blur(30px) !important;
        -webkit-backdrop-filter: saturate(180%) blur(30px) !important;
        border: 1px solid ${borderColor} !important;
        border-radius: 20px !important;
        min-width: 320px !important;
        max-height: 450px !important;
        overflow-y: auto !important;
        box-shadow: 
            0 0 0 1px ${isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'} !important,
            0 20px 60px ${shadowColor} !important,
            0 0 120px ${isDarkMode ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.08)'} !important !important;
        padding: 8px 0 !important;
        z-index: 999999 !important;
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1) !important;
        transform: translateY(10px) scale(0.98) !important;
    `;
    
    document.body.appendChild(newMenu);
    console.log('[Language] New menu created and appended to body');

    // Style region titles
    newMenu.querySelectorAll('.lang-region-title').forEach(title => {
        title.style.cssText = `
            font-size: 11px !important;
            font-weight: 600 !important;
            color: ${titleColor} !important;
            padding: 12px 20px 8px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.8px !important;
            display: block !important;
        `;
    });

    // Style and add hover effect to language options
    newMenu.querySelectorAll('.lang-option').forEach(option => {
        option.style.cssText = `
            display: block !important;
            padding: 12px 20px !important;
            font-size: 14px !important;
            color: ${textColor} !important;
            text-decoration: none !important;
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1) !important;
            cursor: pointer !important;
            position: relative !important;
        `;
        
        option.addEventListener('mouseenter', () => {
            option.style.background = hoverBg;
            option.style.color = hoverColor;
        });
        
        option.addEventListener('mouseleave', () => {
            if (!option.classList.contains('active')) {
                option.style.background = 'transparent';
                option.style.color = textColor;
            }
        });
        
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            console.log('[Language] Selected:', lang);
            
            // Update active
            newMenu.querySelectorAll('.lang-option').forEach(o => {
                o.classList.remove('active');
                o.style.background = 'transparent';
                o.style.color = textColor;
                o.style.fontWeight = '400';
            });
            option.classList.add('active');
            option.style.background = activeBg;
            option.style.color = hoverColor;
            option.style.fontWeight = '600';
            
            // Update button text
            const langText = option.textContent.trim();
            const langCurrent = toggle.querySelector('.lang-current');
            if (langCurrent) {
                langCurrent.textContent = langText;
            }
            
            // Change language
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }
            
            // Sync footer select
            const footerSelect = document.getElementById('language-select');
            if (footerSelect) {
                footerSelect.value = lang;
            }

            // Close with animation
            newMenu.style.opacity = '0';
            newMenu.style.visibility = 'hidden';
            newMenu.style.pointerEvents = 'none';
            newMenu.style.transform = 'translateY(10px) scale(0.98)';
            setTimeout(() => {
                newMenu.style.display = 'none';
            }, 400);
        });
    });

    // Muat bahasa yang disimpan saat halaman dimuat
    const savedLang = loadSavedLanguage();
    updateLanguageUI(savedLang, options, toggle);
    if (footerSelect) {
        footerSelect.value = savedLang;
        
        // Sync footer select change to header
        footerSelect.addEventListener('change', (e) => {
            const lang = e.target.value;
            console.log('[Language] Footer select changed to:', lang);
            
            // Update header language
            updateLanguageUI(lang, options, toggle);
            
            // Translate page
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }
            
            // Update newMenu active state
            const newMenuOption = newMenu.querySelector(`[data-lang="${lang}"]`);
            if (newMenuOption) {
                newMenu.querySelectorAll('.lang-option').forEach(o => {
                    o.classList.remove('active');
                    o.style.background = 'transparent';
                    o.style.color = textColor;
                    o.style.fontWeight = '400';
                });
                newMenuOption.classList.add('active');
                newMenuOption.style.background = activeBg;
                newMenuOption.style.color = hoverColor;
                newMenuOption.style.fontWeight = '600';
            }
        });
    }

    // Toggle dropdown on click
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        // Close other dropdowns
        document.querySelectorAll('.pustaka-dropdown').forEach(menu => {
            menu.style.opacity = '0';
            menu.style.visibility = 'hidden';
            menu.style.pointerEvents = 'none';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 400);
        });
        
        // Toggle language dropdown with animation
        const isHidden = newMenu.style.display === 'none' || newMenu.style.display === '';
        if (isHidden) {
            newMenu.style.display = 'block';
            setTimeout(() => {
                newMenu.style.opacity = '1';
                newMenu.style.visibility = 'visible';
                newMenu.style.pointerEvents = 'auto';
                newMenu.style.transform = 'translateY(0) scale(1)';
            }, 10);
            console.log('[Language] OPEN');
        } else {
            newMenu.style.opacity = '0';
            newMenu.style.visibility = 'hidden';
            newMenu.style.pointerEvents = 'none';
            newMenu.style.transform = 'translateY(10px) scale(0.98)';
            setTimeout(() => {
                newMenu.style.display = 'none';
            }, 400);
            console.log('[Language] CLOSED');
        }
    });

    // Tutup dropdown saat mengklik di luar
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target) && !newMenu.contains(e.target)) {
            newMenu.style.opacity = '0';
            newMenu.style.visibility = 'hidden';
            newMenu.style.pointerEvents = 'none';
            newMenu.style.transform = 'translateY(10px) scale(0.98)';
            setTimeout(() => {
                newMenu.style.display = 'none';
            }, 400);
        }
    });
}

function updateLanguageUI(lang, options, toggle) {
    const currentLang = document.querySelector('.lang-current');
    if (currentLang) {
        // Temukan teks opsi yang dipilih
        const selectedOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
        if (selectedOption) {
            // Tampilkan nama negara lengkap (mis. "Bahasa Indonesia", "English (United States)")
            currentLang.textContent = selectedOption.textContent.trim();
        } else {
            // Fallback ke kode bahasa jika opsi tidak ditemukan
            currentLang.textContent = lang.toUpperCase();
        }
    }

    // Perbarui status aktif
    options.forEach(opt => {
        opt.classList.remove('active');
        if (opt.dataset.lang === lang) {
            opt.classList.add('active');
        }
    });
    
    // Sync footer select
    const footerSelect = document.getElementById('language-select');
    if (footerSelect) {
        footerSelect.value = lang;
    }
}


function initSmoothScroll() {
    document.querySelectorAll('a[data-smooth]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 60;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
}

function initCarousel() {
    // Galeri Gaya Apple Baru
    const appleTrack = document.getElementById('gallery-apple-track');
    const appleIndicators = document.getElementById('gallery-apple-indicators');
    const applePrevBtn = document.getElementById('gallery-apple-prev');
    const appleNextBtn = document.getElementById('gallery-apple-next');

    if (appleTrack) {
        let index = 0;

        // Buat slide dengan keterangan
        appleTrack.innerHTML = config.galleryImages.map(img => `
            <div class="gallery-apple-slide">
                <img src="${img.src}" alt="${img.title}" loading="lazy">
                <div class="gallery-apple-caption">
                    <h4 data-text="${img.title}">${img.title}</h4>
                    <p>Kegiatan YPBG untuk masyarakat</p>
                </div>
            </div>
        `).join('');

        // Buat indikator
        if (appleIndicators) {
            appleIndicators.innerHTML = config.galleryImages.map((_, i) =>
                `<button class="gallery-apple-indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
            ).join('');
        }

        function updateAppleGallery() {
            if (appleTrack) {
                appleTrack.style.transform = `translateX(-${index * 100}%)`;
            }
            document.querySelectorAll('.gallery-apple-indicator').forEach((ind, i) => {
                ind.classList.toggle('active', i === index);
            });

            // Reset animasi pada keterangan
            const activeSlide = appleTrack.querySelectorAll('.gallery-apple-slide')[index];
            if (activeSlide) {
                const caption = activeSlide.querySelector('.gallery-apple-caption h4');
                const description = activeSlide.querySelector('.gallery-apple-caption p');
                if (caption) {
                    caption.style.animation = 'none';
                    caption.offsetHeight; // Trigger reflow
                    caption.style.animation = 'titleFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }
                if (description) {
                    description.style.animation = 'none';
                    description.offsetHeight; // Trigger reflow
                    description.style.animation = 'textFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                    description.style.animationDelay = '0.3s';
                }
            }
        }

        if (applePrevBtn) {
            applePrevBtn.addEventListener('click', () => {
                index = (index - 1 + config.galleryImages.length) % config.galleryImages.length;
                updateAppleGallery();
            });
        }

        if (appleNextBtn) {
            appleNextBtn.addEventListener('click', () => {
                index = (index + 1) % config.galleryImages.length;
                updateAppleGallery();
            });
        }

        document.querySelectorAll('.gallery-apple-indicator').forEach(ind => {
            ind.addEventListener('click', (e) => {
                index = parseInt(e.target.dataset.index);
                updateAppleGallery();
            });
        });
    }

    // Carousel Lama - Simpan untuk fallback
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!track) return;

    let oldIndex = 0;
    track.innerHTML = config.galleryImages.map(img => `
        <div class="carousel-slide">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="slide-caption">${img.title}</div>
        </div>
    `).join('');

    indicators.innerHTML = config.galleryImages.map((_, i) =>
        `<button class="indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
    ).join('');

    function update() {
        track.style.transform = `translateX(-${oldIndex * 100}%)`;
        document.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === oldIndex);
        });
    }

    prevBtn?.addEventListener('click', () => { oldIndex = (oldIndex - 1 + config.galleryImages.length) % config.galleryImages.length; update(); });
    nextBtn?.addEventListener('click', () => { oldIndex = (oldIndex + 1) % config.galleryImages.length; update(); });
    document.querySelectorAll('.indicator').forEach(ind => {
        ind.addEventListener('click', (e) => { oldIndex = parseInt(e.target.dataset.index); update(); });
    });
}

function initProgramFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.program-card');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? 'block' : 'none';
                if(match) card.classList.add('fade-in');
            });
        });
    });
}

function initContactForm() {
    console.log('[initContactForm] Fungsi dipanggil');

    const form = document.getElementById('contact-form');
    console.log('[initContactForm] Elemen form:', form);

    if (!form) {
        console.error('[initContactForm] Form tidak ditemukan!');
        return;
    }

    // Tambahkan listener debug terlebih dahulu
    form.addEventListener('submit', (e) => {
        console.log('=== EVENT SUBMIT FORM TERDETEKSI ===');
        console.log('Tombol submit diklik!');
    });

    // Periksa apakah integrasi Google Drive tersedia
    const googleScriptUrl = typeof GOOGLE_SCRIPT_URL !== 'undefined' ? GOOGLE_SCRIPT_URL : null;
    const hasHandleSubmit = typeof handleContactFormSubmit === 'function';

    console.log('[initContactForm] URL Google Script:', googleScriptUrl);
    console.log('[initContactForm] handleContactFormSubmit tersedia:', hasHandleSubmit);

    if (googleScriptUrl && hasHandleSubmit) {
        // Gunakan integrasi Google Drive
        console.log('[initContactForm] Menggunakan integrasi Google Drive');
        form.addEventListener('submit', handleContactFormSubmit);

        // Tambahkan listener perubahan input file untuk validasi real-time
        const fileInput = document.getElementById('form-file');
        console.log('[initContactForm] Input file:', fileInput);

        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                const errorFile = document.getElementById('error-file');
                const fileUploadText = document.getElementById('file-upload-text');

                if (file) {
                    // Perbarui nama file yang ditampilkan
                    fileUploadText.textContent = file.name;
                    fileUploadText.classList.add('file-selected');

                    const validation = validateFile(file);
                    if (!validation.valid) {
                        errorFile.textContent = validation.message;
                        fileInput.value = ''; // Hapus file yang tidak valid
                        fileUploadText.textContent = t('contact.form.file.noFile', getCurrentLanguage());
                        fileUploadText.classList.remove('file-selected');
                    } else {
                        errorFile.textContent = '';
                    }
                } else {
                    fileUploadText.textContent = t('contact.form.file.noFile', getCurrentLanguage());
                    fileUploadText.classList.remove('file-selected');
                }
            });
            console.log('[initContactForm] Listener input file ditambahkan');

            // Handle klik tombol upload file
            const fileUploadBtn = document.getElementById('file-upload-btn');
            if (fileUploadBtn) {
                fileUploadBtn.addEventListener('click', () => {
                    fileInput.click();
                });
                console.log('[initContactForm] Listener tombol upload ditambahkan');
            }
        }
    } else {
        // Fallback ke metode WhatsApp lama
        console.log('[initContactForm] Menggunakan metode fallback WhatsApp');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                alert('Mohon lengkapi nama, email, dan pesan.');
                return;
            }

            const text = `Halo YPBG, saya ${name} (${email}).%0A%0A${message}`;
            const url = `https://wa.me/628123456789?text=${text}`;

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Mengarahkan...';
            btn.disabled = true;

            setTimeout(() => {
                window.open(url, '_blank');
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
            }, 1000);
        });
    }

    console.log('[initContactForm] Inisialisasi selesai');
}

function initNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    // Dapatkan bahasa saat ini
    const currentLang = localStorage.getItem('selectedLanguage') || 'id';

    newsGrid.innerHTML = config.newsData.map(item => {
        // Dapatkan konten yang diterjemahkan
        const titleKey = `news.${item.id}.title`;
        const excerptKey = `news.${item.id}.excerpt`;
        const categoryKey = `news.${item.id}.category`;

        const title = (translations[currentLang] && translations[currentLang][titleKey]) ||
                      (translations['id'] && translations['id'][titleKey]) || item.title;
        const excerpt = (translations[currentLang] && translations[currentLang][excerptKey]) ||
                        (translations['id'] && translations['id'][excerptKey]) || item.excerpt;
        const category = (translations[currentLang] && translations[currentLang][categoryKey]) ||
                         (translations['id'] && translations['id'][categoryKey]) || item.category;

        // Dapatkan teks "Baca Selengkapnya" yang diterjemahkan
        const readMoreText = t('news.readmore', currentLang) || 'Baca Selengkapnya →';

        return `
        <article class="news-item fade-in-ready">
            <div class="news-image">
                <img src="${item.image}" alt="${title}" loading="lazy">
                <span class="news-category">${category}</span>
            </div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <h3 class="news-title">${title}</h3>
                <p class="news-excerpt">${excerpt}</p>
                <a href="#contact" class="news-read-more">${readMoreText}</a>
            </div>
        </article>
    `;
    }).join('');
}

function initFadeIn() {
    // Observer untuk hero section fade-in
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-ready').forEach(el => heroObserver.observe(el));

    // Observer untuk scroll animations desktop - Enhanced
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Stop observing once visible (animate only once)
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards and sections for desktop scroll animations
    const scrollElements = document.querySelectorAll(
        '.program-card, .news-item, .liquid-glass-card, .apple-hero-card, .org-id-card, .gallery-apple-container'
    );
    
    scrollElements.forEach((el, index) => {
        // Add staggered animation delay for grid items
        if (el.parentElement.classList.contains('programs-grid') || 
            el.parentElement.classList.contains('news-grid') ||
            el.parentElement.classList.contains('values-apple-grid') ||
            el.parentElement.classList.contains('highlights-apple-grid')) {
            el.style.transitionDelay = `${(index % 3) * 0.1}s`;
        }
        scrollObserver.observe(el);
    });
}

function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

function initHeaderShadow() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== TOMBOL WHATSAPP YANG BISA DIGESER =====
function initWhatsappDraggable() {
    const draggable = document.getElementById('whatsapp-draggable');
    const bubble = document.getElementById('whatsapp-bubble');
    if (!draggable || !bubble) return;

    const WHATSAPP_URL = 'https://wa.me/6282144240440';

    let isDragging = false;
    let hasMoved = false;
    let startX = 0, startY = 0, initialX = 0, initialY = 0;
    let currentX = 0, currentY = 0;

    // Muat posisi yang disimpan
    const savedPosition = localStorage.getItem('whatsappPosition');
    if (savedPosition) {
        const pos = JSON.parse(savedPosition);
        currentX = pos.x || 0;
        currentY = pos.y || 0;
        draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    function savePosition() {
        localStorage.setItem('whatsappPosition', JSON.stringify({ x: currentX, y: currentY }));
    }

    // Drag mouse
    draggable.onmousedown = dragStart;
    function dragStart(e) {
        if (e.button !== 0) return;

        isDragging = false;
        hasMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        initialX = currentX;
        initialY = currentY;

        document.onmousemove = drag;
        document.onmouseup = dragEnd;
    }

    function drag(e) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (!isDragging && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            isDragging = true;
            hasMoved = true;
            draggable.classList.add('dragging');
        }

        if (isDragging) {
            currentX = initialX + dx;
            currentY = initialY + dy;
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }

    function dragEnd() {
        document.onmousemove = null;
        document.onmouseup = null;

        if (isDragging) {
            draggable.classList.remove('dragging');
            savePosition();
        }
        isDragging = false;
    }

    // Drag touch
    draggable.ontouchstart = dragStartTouch;
    function dragStartTouch(e) {
        isDragging = false;
        hasMoved = false;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialX = currentX;
        initialY = currentY;

        document.ontouchmove = dragTouch;
        document.ontouchend = dragEndTouch;
    }

    function dragTouch(e) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;

        if (!isDragging && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            isDragging = true;
            hasMoved = true;
            draggable.classList.add('dragging');
        }

        if (isDragging) {
            currentX = initialX + dx;
            currentY = initialY + dy;
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
        e.preventDefault();
    }

    function dragEndTouch() {
        document.ontouchmove = null;
        document.ontouchend = null;

        if (isDragging) {
            draggable.classList.remove('dragging');
            savePosition();
        }
        isDragging = false;
    }

    // Handler klik - buka WhatsApp jika tidak digeser
    draggable.onclick = function() {
        if (!hasMoved) {
            window.open(WHATSAPP_URL, '_blank');
        }
        hasMoved = false;
    };

    // Dukungan keyboard
    draggable.addEventListener('keydown', (e) => {
        const step = 20;
        let moved = false;

        switch (e.key) {
            case 'ArrowUp': currentY -= step; moved = true; break;
            case 'ArrowDown': currentY += step; moved = true; break;
            case 'ArrowLeft': currentX -= step; moved = true; break;
            case 'ArrowRight': currentX += step; moved = true; break;
            case 'Home': currentX = 0; currentY = 0; moved = true; break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                window.open(WHATSAPP_URL, '_blank');
                return;
        }

        if (moved) {
            e.preventDefault();
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
            savePosition();
        }
    });

    // Handler resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const maxX = window.innerWidth - draggable.offsetWidth - 20;
            const maxY = window.innerHeight - draggable.offsetHeight - 20;
            currentX = Math.min(currentX, maxX);
            currentY = Math.min(currentY, maxY);
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
            savePosition();
        }, 250);
    });
}

// ===== YOUTUBE LITE - CLICK TO LOAD UNTUK PERFORMA =====
// Hanya load iframe YouTube saat user klik (menghemat bandwidth & performa mobile)
function initYouTubeLite() {
    const youtubeLites = document.querySelectorAll('.youtube-lite');
    if (!youtubeLites.length) return;

    youtubeLites.forEach(container => {
        container.addEventListener('click', function() {
            const videoId = this.dataset.videoId;
            if (!videoId) return;

            // Ganti dengan iframe YouTube yang sebenarnya
            this.innerHTML = `
                <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
                    src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            `;
            this.style.cursor = 'default';
        });
    });
}
/* END OF CONSOLIDATED JS */
