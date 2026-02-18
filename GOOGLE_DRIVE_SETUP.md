# YPBG Website - Google Drive & Sheets Integration

## Fitur Upload Dokumen

Form kontak sekarang mendukung upload dokumen dengan spesifikasi:
- **Format File**: PDF, JPG, JPEG
- **Ukuran Maksimal**: 25 MB
- **Penyimpanan**: Google Drive (terorganisir per tanggal)
- **Data Form**: Google Sheets

---

## 📋 Instruksi Setup Google Apps Script

### Langkah 1: Buat Google Spreadsheet

1. Buka [Google Sheets](https://sheets.google.com/)
2. Klik **+ Blank** untuk membuat spreadsheet baru
3. Beri nama spreadsheet: `YPBG Contact Form Submissions`
4. **Copy Spreadsheet ID** dari URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit`
   - Copy bagian `SPREADSHEET_ID_HERE`

### Langkah 2: Buat Google Drive Folder

1. Buka [Google Drive](https://drive.google.com/)
2. Klik **New** → **Folder**
3. Beri nama folder: `YPBG Contact Form Uploads`
4. **Copy Folder ID** dari URL:
   - URL format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - Copy bagian `FOLDER_ID_HERE`

### Langkah 3: Buat Google Apps Script

1. Buka [Google Apps Script](https://script.google.com/)
2. Klik **+ New Project**
3. Hapus semua kode di `Code.gs`
4. Copy-paste kode dari file `google-apps-script.js` ke `Code.gs`

### Langkah 4: Konfigurasi Script

Di file `google-apps-script.js`, ganti nilai berikut:

```javascript
// Ganti dengan ID folder Google Drive Anda
const FOLDER_ID = 'YOUR_GOOGLE_DRIVE_FOLDER_ID_HERE';

// Ganti dengan ID Google Spreadsheet Anda
const SPREADSHEET_ID = 'YOUR_GOOGLE_SPREADSHEET_ID_HERE';
```

Contoh:
```javascript
const FOLDER_ID = '1a2b3c4d5e6f7g8h9i0j';
const SPREADSHEET_ID = '9i8h7g6f5e4d3c2b1a0';
```

### Langkah 5: Deploy sebagai Web App

1. Di Google Apps Script, klik tombol **Deploy** (terletak di kanan atas)
2. Pilih **New deployment**
3. Klik ikon roda gigi ⚙️ → Pilih **Web app**
4. Isi konfigurasi:
   - **Description**: `YPBG Contact Form`
   - **Execute as**: `Me (your email)`
   - **Who has access**: `Anyone` ⚠️ (PENTING!)
5. Klik **Deploy**
6. Salin **Web app URL** yang muncul

### Langkah 6: Konfigurasi Website

1. Buka file `google-drive-integration.js`
2. Ganti nilai `GOOGLE_SCRIPT_URL`:

```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';
```

Dengan URL dari Langkah 5:
```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx.../exec';
```

### Langkah 7: Upload File ke Server

Upload semua file berikut ke server website Anda:
- ✅ `index.html` (sudah diupdate)
- ✅ `google-drive-integration.js` (file baru)
- ✅ `google-apps-script.js` (referensi saja, tidak perlu diupload)

---

## 🧪 Testing

### Test Form Submission

1. Buka website Anda
2. Scroll ke bagian **Hubungi Kami**
3. Isi form:
   - Nama: Test User
   - Email: test@example.com
   - Pesan: Ini adalah pesan test
   - Upload Dokumen: Pilih file PDF atau JPG (< 25 MB)
4. Klik **Kirim Pesan**

### Verifikasi Data

1. **Google Sheets**: Buka spreadsheet yang Anda buat
   - Data akan muncul di baris baru dengan kolom: Timestamp, Name, Email, Message, File URL, Processed
   
2. **Google Drive**: Buka folder yang Anda buat
   - File akan tersimpan di subfolder dengan format: `YYYY-MM-DD/filename`

---

## 📁 Struktur Folder Google Drive

```
YPBG Contact Form Uploads/
├── 2024-02-17/
│   ├── 20240217_143022_Test_User_dokumen.pdf
│   └── 20240217_145530_Another_User_foto.jpg
├── 2024-02-18/
│   └── ...
└── ...
```

---

## 🔒 Keamanan

- File upload disimpan dengan akses **PRIVATE** (hanya owner yang bisa akses)
- Form submission menggunakan **Lock Service** untuk mencegah race condition
- File validation dilakukan di client-side (browser) dan server-side (Google Script)

---

## ⚠️ Troubleshooting

### Error: "File size exceeds limit"
- Pastikan file tidak lebih dari 25 MB
- Compress file PDF/JPG jika terlalu besar

### Error: "Invalid file type"
- Hanya file PDF, JPG, dan JPEG yang diperbolehkan
- Konversi file ke format yang didukung

### Error: "Failed to save to Google Sheets"
- Periksa apakah SPREADSHEET_ID sudah benar
- Pastikan Google Apps Script memiliki akses ke spreadsheet

### Error: "Failed to save file to Drive"
- Periksa apakah FOLDER_ID sudah benar
- Pastikan Google Apps Script memiliki akses ke folder

### Form tidak mengirim data
- Periksa apakah GOOGLE_SCRIPT_URL sudah benar
- Buka browser console (F12) untuk melihat error detail
- Pastikan Web App deployed dengan akses "Anyone"

---

## 📊 Kolom Google Sheets

| Kolom | Deskripsi |
|-------|-----------|
| A - Timestamp | Waktu submission (ISO format) |
| B - Name | Nama pengirim |
| C - Email | Email pengirim |
| D - Message | Pesan yang dikirim |
| E - File URL | Link ke file di Google Drive |
| F - Processed | Status (Pending/Completed) |

---

## 📝 Catatan Penting

1. **Google Apps Script Quota**:
   - Maksimum 20,000 request/hari (akun Google gratis)
   - Maksimum 6 menit execution time per request

2. **Google Drive Storage**:
   - Akun Google gratis: 15 GB storage
   - Pantau usage di [Google One](https://one.google.com/)

3. **File Retention**:
   - File disimpan permanen di Google Drive
   - Backup file secara berkala jika diperlukan

---

## 📞 Support

Jika mengalami masalah, silakan hubungi:
- Email: info@ypbglobal.org
- Check Google Apps Script execution logs di [script.google.com](https://script.google.com/)

---

**Last Updated**: February 17, 2024
**Version**: 1.0.0
