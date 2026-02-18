# Optimasi Website YPBG untuk Netlify

## 🎯 **Masalah yang Ditemukan:**

### 1. **Video Hero Terlalu Besar (27MB)**
- File: `assets/videos/Hero_Video.mp4` - **27MB**
- Solusi: Kompres menjadi < 5MB

### 2. **Gambar Terlalu Besar**
- `Program_Kegiatan_MCK.jpg` - 3.2MB
- `Hero_Section1.png` - 2.5MB
- `Hero_Section2.jpg` - 1.3MB
- Solusi: Kompres dan convert ke WebP

---

## 📹 **Cara Kompres Video Hero:**

### Opsi 1: Menggunakan HandBrake (Gratis)
1. Download HandBrake: https://handbrake.fr/
2. Open file: `assets/videos/Hero_Video.mp4`
3. Settings:
   - **Format**: MP4
   - **Video Codec**: H.264
   - **Quality**: RF 28-30 (lower = bigger file)
   - **Resolution**: 1920x1080 atau 1280x720
   - **Audio**: AAC, 128kbps (atau remove audio jika tidak perlu)
   - **Frame Rate**: 24-30 fps
4. Save as: `Hero_Video_Compressed.mp4`
5. Target size: **3-5MB**

### Opsi 2: Menggunakan FFmpeg (Command Line)
```bash
# Install FFmpeg: brew install ffmpeg (Mac) atau download dari ffmpeg.org
cd /Users/alcohan/Downloads/ypbglobal-website/assets/videos/

# Compress video
ffmpeg -i Hero_Video.mp4 \
  -vcodec libx264 \
  -crf 28 \
  -preset medium \
  -acodec aac \
  -b:a 128k \
  -vf "scale=1920:1080" \
  -movflags +faststart \
  Hero_Video_Compressed.mp4

# Atau versi lebih kecil (720p)
ffmpeg -i Hero_Video.mp4 \
  -vcodec libx264 \
  -crf 30 \
  -preset slow \
  -acodec aac \
  -b:a 96k \
  -vf "scale=1280:720" \
  -movflags +faststart \
  Hero_Video_Compressed.mp4
```

### Opsi 3: Online Tools
- https://www.freeconvert.com/video-compressor
- https://www.youcompress.com/
- Upload Hero_Video.mp4, download versi kompres, simpan sebagai `Hero_Video_Compressed.mp4`

---

## 🖼️ **Cara Optimasi Gambar:**

### Opsi 1: Menggunakan Squoosh (Online - Gratis)
1. Buka https://squoosh.app/
2. Upload gambar satu per satu
3. Settings:
   - **Format**: WebP atau AVIF
   - **Quality**: 75-85
   - **Resize**: Max width 1920px (atau 1440px untuk web)
4. Download dan replace file asli

### Opsi 2: Menggunakan ImageOptim (Mac - Gratis)
1. Download: https://imageoptim.com/mac
2. Drag & drop semua gambar
3. Auto-compress tanpa kehilangan kualitas visible
4. Replace file asli

### Opsi 3: Menggunakan TinyPNG (Online)
1. Buka https://tinypng.com/
2. Upload gambar (PNG/JPG)
3. Download versi kompres
4. Target: 60-80% smaller

### Opsi 4: FFmpeg untuk Gambar
```bash
# Convert ke WebP dengan quality 80
cd /Users/alcohan/Downloads/ypbglobal-website/assets/images/

for img in *.jpg *.jpeg *.png; do
  cwebp -q 80 "$img" -o "${img%.*}.webp"
done
```

---

## 📊 **Target Optimasi:**

| Asset | Original | Target | Savings |
|-------|----------|--------|---------|
| Video Hero | 27MB | 3-5MB | ~85% |
| Hero_Section1.png | 2.5MB | 400KB | ~84% |
| Hero_Section2.jpg | 1.3MB | 300KB | ~77% |
| Program_Kegiatan_MCK.jpg | 3.2MB | 500KB | ~84% |
| **Total** | **~35MB** | **~5MB** | **~85%** |

---

## ⚡ **Optimasi yang Sudah Diterapkan:**

1. ✅ **Critical CSS Inline** - Above-the-fold styles dimuat langsung
2. ✅ **Preload CSS/JS** - Prioritas loading file penting
3. ✅ **Defer JavaScript** - JS tidak block rendering
4. ✅ **Lazy Loading** - Gambar di-load saat scroll
5. ✅ **Video Preload="metadata"** - Hanya load metadata, bukan full video
6. ✅ **Fallback Image** - Jika video gagal, tampilkan gambar

---

## 🚀 **Deploy ke Netlify:**

### Setelah kompresi video & gambar:

1. **Push ke Git repository**
   ```bash
   git add .
   git commit -m "Optimize: compress video and images for performance"
   git push origin main
   ```

2. **Netlify auto-deploy** - Akan deploy otomatis

3. **Test performance:**
   - https://pagespeed.web.dev/
   - https://gtmetrix.com/
   - Target: Score > 90, Load time < 3s

---

## 🎯 **Checklist Optimasi:**

- [ ] Kompres Video Hero menjadi < 5MB
- [ ] Simpan sebagai `Hero_Video_Compressed.mp4`
- [ ] Kompres semua gambar di `assets/images/`
- [ ] Convert ke WebP jika memungkinkan
- [ ] Push ke repository
- [ ] Test di Netlify
- [ ] Run Lighthouse/PageSpeed test
- [ ] Verify video plays correctly
- [ ] Verify images load properly

---

## 📱 **Performance Tips Tambahan:**

1. **Gunakan CDN** untuk assets statis
2. **Enable Gzip/Brotli compression** di Netlify
3. **Implement Service Worker** untuk caching
4. **Use `loading="lazy"`** untuk semua gambar below-the-fold
5. **Minify CSS/JS** jika file terlalu besar

---

## 🔧 **File netlify.toml (Optional):**

Buat file `netlify.toml` di root untuk optimasi:

```toml
[build]
  publish = "."
  command = "echo 'No build needed'"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

# Enable compression
[[headers]]
  for = "*.js"
  [headers.values]
    Content-Encoding = "gzip"

[[headers]]
  for = "*.css"
  [headers.values]
    Content-Encoding = "gzip"

# Cache static assets
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## ✅ **Hasil Akhir:**

Setelah optimasi:
- ⚡ **Load time**: < 3 detik (dari ~30+ detik)
- 📉 **Total size**: < 5MB (dari 35MB)
- 🎯 **Lighthouse Score**: > 90
- 📱 **Mobile**: Fast & responsive
- 🎬 **Video**: Plays smoothly
- 🖼️ **Images**: Load progressively

**Website akan jauh lebih cepat dan ringan!** 🚀
