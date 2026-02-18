# 📹 Cara Menambahkan Video ke Berita

## 🎯 **Lokasi File Berita Video:**

1. **Berita Pendidikan:** `news/berita-01.html`
2. **Berita Lingkungan:** `news/berita-02.html`

---

## 📋 **Cara Menambahkan Video YouTube:**

### **STEP 1: Upload Video ke YouTube**

1. Login ke YouTube channel YPBG
2. Upload video kegiatan
3. Set visibility: **Public** atau **Unlisted**
4. Copy **Video ID** dari URL

**Contoh URL YouTube:**
```
https://www.youtube.com/watch?v=VIDEO_ID_DISINI
                                        ↑
                                    Ini Video ID
```

---

### **STEP 2: Update HTML File**

#### **Untuk Berita Pendidikan (berita-01.html):**

Buka file: `news/berita-01.html`

Cari bagian video embed (sekitar baris 487-495):
```html
<iframe
    src="https://www.youtube.com/embed/VIDEO_ID_PENDIDIKAN"
    title="Program Beasiswa 2024"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

**Ganti** `VIDEO_ID_PENDIDIKAN` dengan **Video ID YouTube** Anda.

**Contoh:**
```html
<!-- Jika Video ID: dQw4w9WgXcQ -->
<iframe 
    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
    title="Program Beasiswa 2024"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>
```

---

#### **Untuk Berita Lingkungan (berita-02.html):**

Buka file: `news/berita-02.html`

Cari bagian video embed (sekitar baris 487-495):
```html
<iframe
    src="https://www.youtube.com/embed/VIDEO_ID_LINGKUNGAN"
    title="Kegiatan Pembersihan Pantai"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
</iframe>
```

**Ganti** `VIDEO_ID_LINGKUNGAN` dengan **Video ID YouTube** Anda.

---

### **STEP 3: Test**

1. Save file HTML
2. Buka di browser: `file:///.../news/berita-01.html`
3. Video YouTube harus muncul dan bisa diputar

---

## 🎬 **Alternatif: Upload Video Sendiri**

Jika tidak ingin pakai YouTube, upload video ke folder `assets/videos/`:

### **STEP 1: Upload Video**

```bash
# Upload file video (MP4, max 10MB recommended)
assets/videos/berita-pendidikan.mp4
assets/videos/berita-lingkungan.mp4
```

### **STEP 2: Update HTML**

**Ganti iframe YouTube dengan tag video:**

```html
<div class="video-container">
    <video controls autoplay muted loop playsinline>
        <source src="../assets/videos/berita-pendidikan.mp4" type="video/mp4">
        Browser Anda tidak mendukung tag video.
    </video>
</div>
```

---

## 🎨 **Fitur Desain Apple-Style:**

### ✅ **Yang Sudah Ada:**

1. **Hero Section dengan Video Background**
   - Full screen dengan overlay gradient
   - Category badge dengan glassmorphism
   - Animated title fade-in
   - Meta information (tanggal & type)

2. **Video Player Section**
   - Aspect ratio 16:9 responsive
   - Rounded corners (24px)
   - Box shadow untuk depth
   - Caption dengan styling Apple

3. **Article Content**
   - Clean typography (Playfair Display + Inter)
   - Highlight box dengan gradient border
   - Proper spacing & readability

4. **Statistics/Impact Cards**
   - Gradient numbers
   - Hover animations
   - Responsive grid layout

5. **Gallery Grid**
   - Responsive auto-fit
   - Hover scale effect
   - Box shadows
   - Rounded corners

6. **Dark Mode Support**
   - Full dark theme
   - Glassmorphism effects
   - Proper contrast

---

## 📊 **Struktur Halaman:**

```
📹 Hero Video Background
   ├── Back Button
   ├── Category Badge
   ├── Title (Animated)
   └── Meta Info (Date & Type)

🎬 Video Player Section
   ├── Video Container (16:9)
   └── Caption

📄 Article Content
   ├── Title
   ├── Main Text
   └── Highlight Box

📊 Statistics Section (4 cards)
   ├── Stat 1
   ├── Stat 2
   ├── Stat 3
   └── Stat 4

🖼️ Gallery Section (3 images)
   ├── Image 1 + Caption
   ├── Image 2 + Caption
   └── Image 3 + Caption

Footer
```

---

## 🎯 **Customization:**

### **Ubah Warna Category Badge:**

**Pendidikan (Biru):**
```css
background: rgba(0, 113, 227, 0.2); /* #0071e3 */
```

**Lingkungan (Hijau):**
```css
background: rgba(16, 185, 129, 0.2); /* #10b981 */
```

**Kesehatan (Merah):**
```css
background: rgba(245, 87, 108, 0.2); /* #f5576c */
```

---

### **Ubah Gradient Highlight Box:**

**Pendidikan (Biru-Ungu):**
```css
background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
border-left-color: #0071e3;
```

**Lingkungan (Hijau):**
```css
background: linear-gradient(135deg, rgba(17, 153, 142, 0.08) 0%, rgba(56, 239, 125, 0.08) 100%);
border-left-color: #10b981;
```

---

## ✅ **Checklist Sebelum Publish:**

- [ ] ✅ Video YouTube sudah di-upload
- [ ] ✅ Video ID sudah diganti di HTML
- [ ] ✅ Test video play di desktop
- [ ] ✅ Test video play di mobile
- [ ] ✅ Semua gambar gallery muncul
- [ ] ✅ Text content sudah sesuai
- [ ] ✅ Statistics/impact numbers benar
- [ ] ✅ Dark mode tampil bagus
- [ ] ✅ Responsive di semua ukuran
- [ ] ✅ Link "Kembali" berfungsi

---

## 🚀 **Deploy:**

```bash
# Navigate to your project folder
cd /path/to/your/ypbglobal-website

# Commit changes
git add news/
git commit -m "Add: Apple-style news video pages for Education & Environment"

# Push to GitHub
git push origin main
```

**Netlify auto-deploy dalam 1-2 menit!** 🎉

---

## 📱 **Preview URLs:**

Setelah deploy:

- **Berita Pendidikan:** `https://your-domain.netlify.app/news/berita-01.html`
- **Berita Lingkungan:** `https://your-domain.netlify.app/news/berita-02.html`

> **Note:** Ganti `your-domain` dengan subdomain Netlify Anda yang sebenarnya.

---

## 🎨 **Design Highlights:**

✨ **Apple-Style Features:**
- Large hero dengan video background
- Typography: Playfair Display (headings) + Inter (body)
- Glassmorphism effects
- Smooth animations
- Clean, minimal layout
- Proper whitespace
- Subtle shadows & depth
- Responsive grid layouts
- Dark mode support
- Hover animations

🎯 **Performance:**
- Lazy loading images
- Optimized video embed
- Minimal CSS
- No external dependencies
- Fast load time

♿ **Accessibility:**
- Semantic HTML
- Alt text untuk gambar
- Keyboard navigation
- Screen reader friendly
- Proper contrast ratios

---

**Status: READY TO USE!** ✅🎉

Tinggal ganti `VIDEO_ID` dengan video YouTube Anda!
