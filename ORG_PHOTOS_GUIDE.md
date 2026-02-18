# 📸 PANDUAN FOTO PROFIL STRUKTUR ORGANISASI

## 📁 LOKASI FOLDER

Simpan foto profil di folder:
```
assets/images/org/
```

## 📋 DAFTAR FOTO YANG DIBUTUHKAN

| No | Jabatan | Nama File | Ukuran | Warna Gradient |
|----|---------|-----------|--------|----------------|
| 1 | **Ketua Pembina** | `ketua-pembina.jpg` | 200x200 px | Purple (#667eea) |
| 2 | **Ketua Yayasan** | `ketua-yayasan.jpg` | 200x200 px | Green (#11998e) |
| 3 | **Sekretaris** | `sekretaris.jpg` | 200x200 px | Pink (#f5576c) |
| 4 | **Bendahara** | `bendahara.jpg` | 200x200 px | Orange (#fda085) |
| 5 | **Program** | `program.jpg` | 200x200 px | Purple (#667eea) |
| 6 | **Keuangan** | `keuangan.jpg` | 200x200 px | Pink-Yellow (#fa709a) |
| 7 | **Humas** | `humas.jpg` | 200x200 px | Blue (#4facfe) |

## 🎨 SPESIFIKASI FOTO

### **Ukuran & Format:**
- ✅ **Ukuran**: 200x200 pixels (square)
- ✅ **Format**: JPG atau PNG
- ✅ **Max File Size**: 500 KB
- ✅ **Background**: Polos atau gradient sesuai warna jabatan

### **Kualitas Foto:**
- ✅ **Resolusi**: Minimal 200x200 px
- ✅ **Face**: Wajah terlihat jelas (frontal atau 3/4)
- ✅ **Lighting**: Pencahayaan cukup, tidak gelap
- ✅ **Expression**: Senyum ramah, profesional

### **Background Color (Opsional):**
Setiap jabatan memiliki warna gradient yang sesuai:

1. **Ketua Pembina** - Purple Gradient
2. **Ketua Yayasan** - Green Gradient
3. **Sekretaris** - Pink Gradient
4. **Bendahara** - Orange Gradient
5. **Program** - Purple Gradient
6. **Keuangan** - Pink-Yellow Gradient
7. **Humas** - Blue Gradient

## 📷 CARA MENAMBAHKAN FOTO

### **Opsi 1: Foto Asli**
1. Siapkan foto profil asli untuk setiap jabatan
2. Crop menjadi square (200x200 px)
3. Simpan di `assets/images/org/` dengan nama file sesuai tabel
4. Refresh halaman website

### **Opsi 2: Placeholder Otomatis**
Jika foto belum ada, sistem akan otomatis menampilkan placeholder dengan:
- ✅ Background gradient sesuai warna jabatan
- ✅ Text nama jabatan
- ✅ Ukuran otomatis 200x200 px

**Contoh Placeholder:**
```
https://via.placeholder.com/200x200/667eea/ffffff?text=Ketua+Pembina
```

## 🛠️ TOOLS UNTUK EDIT FOTO

### **Online (Gratis):**
1. **Canva** - canva.com
   - Template foto profil
   - Background remover
   - Gradient background

2. **Remove.bg** - remove.bg
   - Hapus background otomatis
   - Gratis untuk ukuran standar

3. **ILoveIMG** - iloveimg.com
   - Crop, resize, compress
   - Batch processing

### **Software:**
1. **Photoshop** - Professional
2. **GIMP** - Free alternative
3. **Paint.NET** - Simple & free

## ✅ CHECKLIST SETELAH UPLOAD

- [ ] Semua 7 foto sudah diupload
- [ ] Nama file sesuai (lowercase, pakai hyphen)
- [ ] Ukuran 200x200 px
- [ ] File size < 500 KB
- [ ] Foto terlihat jelas di website
- [ ] Hover effect berfungsi (foto naik saat di-hover)
- [ ] Link ke halaman detail berfungsi

## 🎯 TEST

1. **Buka** index.html dengan Live Server
2. **Scroll** ke "Struktur Organisasi"
3. **Periksa** setiap jabatan:
   - ✅ Foto muncul dengan benar
   - ✅ Hover effect bekerja
   - ✅ Klik jabatan → Buka halaman detail
   - ✅ Halaman detail menampilkan foto yang sama

## 📝 CONTOH STRUKTUR FOLDER

```
ypbglobal-website/
├── assets/
│   └── images/
│       └── org/
│           ├── ketua-pembina.jpg ✅
│           ├── ketua-yayasan.jpg ✅
│           ├── sekretaris.jpg ✅
│           ├── bendahara.jpg ✅
│           ├── program.jpg ✅
│           ├── keuangan.jpg ✅
│           └── humas.jpg ✅
└── org/
    ├── ketua-pembina.html
    ├── ketua-yayasan.html
    ├── sekretaris.html
    ├── bendahara.html
    ├── program.html
    ├── keuangan.html
    └── humas.html
```

## 🎨 WARNA GRADIENT UNTUK BACKGROUND

Jika ingin membuat background gradient manual:

```css
/* Ketua Pembina */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ketua Yayasan */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);

/* Sekretaris */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Bendahara */
background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);

/* Program */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Keuangan */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Humas */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

---

**Last Updated:** February 18, 2024
**Version:** 1.0.0
