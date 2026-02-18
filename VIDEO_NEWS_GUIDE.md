# 📹 Panduan Penggunaan Video di Berita & Publikasi

## ✅ File Halaman Berita yang Sudah Dibuat:

1. **`news/berita-01-beasiswa-2024.html`** - Program Beasiswa 2024 (dengan video)
2. **`news/berita-02-pembersihan-pantai.html`** - Kegiatan Pembersihan Pantai (dengan video)
3. **`news/berita-03-vaksinasi.html`** - Kampanye Vaksinasi Gratis (artikel saja)

---

## 🎥 Cara Menambahkan Video ke Berita

### **OPTION 1: Menggunakan File Video Lokal (MP4)**

1. **Siapkan video** Anda (format MP4 recommended)
2. **Simpan di folder** `assets/videos/`
3. **Ganti nama file** atau update path di HTML

**Contoh:**
```html
<video controls poster="../assets/images/thumbnail.jpg">
    <source src="../assets/videos/nama-video-anda.mp4" type="video/mp4">
    Browser Anda tidak mendukung tag video.
</video>
```

**Di file HTML berita**, cari bagian ini dan ganti:
```html
<!-- GANTI INI -->
<source src="../assets/videos/sample-beasiswa.mp4" type="video/mp4">

<!-- MENJADI -->
<source src="../assets/videos/NAMA_VIDEO_ANDA.mp4" type="video/mp4">
```

---

### **OPTION 2: Menggunakan YouTube Video**

1. **Buka video YouTube** yang ingin ditampilkan
2. **Copy Video ID** dari URL (contoh: `dQw4w9WgXcQ`)
3. **Update HTML** dengan iframe YouTube

**Contoh:**
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID_ANDA" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

**Di file HTML berita**, uncomment bagian ini dan ganti VIDEO_ID:
```html
<!-- UNCOMMENT DAN GANTI VIDEO_ID -->
<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>
```

---

### **OPTION 3: Menggunakan Vimeo Video**

```html
<iframe src="https://player.vimeo.com/video/VIDEO_ID_ANDA" 
        width="640" 
        height="360" 
        frameborder="0" 
        allow="autoplay; fullscreen; picture-in-picture" 
        allowfullscreen>
</iframe>
```

---

## 📊 Spesifikasi Video yang Disarankan:

| Format | MP4 (H.264 codec) |
|--------|-------------------|
| **Resolution** | 1920x1080 (Full HD) atau 1280x720 (HD) |
| **Aspect Ratio** | 16:9 (landscape) |
| **Max File Size** | 50 MB (untuk loading cepat) |
| **Frame Rate** | 24-30 fps |
| **Audio** | AAC, 128 kbps atau lebih tinggi |

---

## 🖼️ Thumbnail/Poster Video:

**Siapkan gambar thumbnail** untuk video (opsional tapi recommended):

```html
<video controls poster="../assets/images/thumbnail-video.jpg">
    <source src="../assets/videos/video.mp4" type="video/mp4">
</video>
```

**Spesifikasi thumbnail:**
- Format: JPG atau PNG
- Size: 1280x720 pixels (16:9 ratio)
- Max file size: 500 KB

---

## 📁 Struktur Folder:

```
ypbglobal-website/
├── news/
│   ├── berita-01-beasiswa-2024.html ✅
│   ├── berita-02-pembersihan-pantai.html ✅
│   └── berita-03-vaksinasi.html ✅
├── assets/
│   ├── videos/
│   │   ├── sample-beasiswa.mp4 (CONTOH - ganti dengan video asli)
│   │   ├── sample-pantai.mp4 (CONTOH - ganti dengan video asli)
│   │   ├── video-beasiswa-2024.mp4 (video asli Anda)
│   │   └── video-pembersihan-pantai.mp4 (video asli Anda)
│   └── images/
│       ├── thumbnail-video-1.jpg
│       └── ...
└── ...
```

---

## ✨ Fitur Video Player:

✅ **Play/Pause** - Klik untuk putar/stop
✅ **Volume Control** - Atur volume suara
✅ **Fullscreen** - Tampilan layar penuh
✅ **Progress Bar** - Seek ke waktu tertentu
✅ **Responsive** - Otomatis menyesuaikan ukuran layar
✅ **Dark Mode Support** - Tampilan gelap otomatis

---

## 🎬 Contoh Penggunaan di Halaman Berita:

### **Berita dengan Video:**
- ✅ `berita-01-beasiswa-2024.html` - Ada video player
- ✅ `berita-02-pembersihan-pantai.html` - Ada video player

### **Berita tanpa Video (Artikel saja):**
- ✅ `berita-03-vaksinasi.html` - Hanya narasi dan galeri foto

---

## 🔧 Troubleshooting:

### **Video tidak muncul:**
- ✅ Cek path file video (harus relatif dari folder news/)
- ✅ Pastikan file video ada di folder `assets/videos/`
- ✅ Cek format video (harus MP4 untuk kompatibilitas maksimal)

### **Video tidak bisa diputar:**
- ✅ Cek format codec (gunakan H.264 untuk MP4)
- ✅ Pastikan file video tidak corrupt
- ✅ Test di browser lain (Chrome, Firefox, Safari)

### **Thumbnail tidak muncul:**
- ✅ Cek path file gambar thumbnail
- ✅ Pastikan gambar ada di folder `assets/images/`
- ✅ Cek format gambar (JPG atau PNG)

---

## 📝 Tips:

1. **Gunakan video pendek** (1-3 menit) untuk engagement lebih baik
2. **Optimize file size** untuk loading cepat (max 50 MB)
3. **Tambahkan thumbnail** yang menarik untuk click-through rate lebih tinggi
4. **Gunakan YouTube** untuk video besar (>50 MB) agar tidak membebani server
5. **Test di mobile** untuk memastikan responsive

---

## 🎯 Cara Mengganti Video Contoh dengan Video Asli:

1. **Buka file** `news/berita-01-beasiswa-2024.html`
2. **Cari baris** ini:
   ```html
   <source src="../assets/videos/sample-beasiswa.mp4" type="video/mp4">
   ```
3. **Ganti dengan** nama file video Anda:
   ```html
   <source src="../assets/videos/video-beasiswa-asli.mp4" type="video/mp4">
   ```
4. **Simpan file** dan refresh browser
5. **Test** video player dengan klik play button

---

**Last Updated:** February 17, 2024
**Version:** 1.0.0
