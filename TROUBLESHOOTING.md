# 🔧 TROUBLESHOOTING - Google Drive Integration

## Masalah: Form Tidak Merespons Setelah Klik "Kirim Pesan"

### ✅ Langkah Debugging

#### 1. Buka Browser Console
1. Buka website Anda
2. Tekan **F12** (atau klik kanan → Inspect)
3. Pilih tab **Console**
4. Isi form dan klik "Kirim Pesan"
5. **Perhatikan pesan error yang muncul**

---

#### 2. Test dengan Halaman Debug
1. Buka file: `test-google-script.html` di browser
   ```
   file:///path/to/ypbglobal-website/test-google-script.html
   ```
   ATAU upload ke server dan buka:
   ```
   https://your-domain.com/test-google-script.html
   ```

2. Klik **"Kirim Test Data"**
3. Lihat hasilnya:
   - ✅ **Success**: Data seharusnya masuk ke Google Sheets
   - ❌ **Error**: Catat pesan errornya

---

#### 3. Periksa Google Apps Script Deployment

##### A. Cek URL Web App
1. Buka [Google Apps Script](https://script.google.com/)
2. Buka project Anda
3. Klik **Deploy** → **Manage deployments**
4. Pastikan URL benar (harus berakhiran `/exec`)

**URL yang benar:**
```
https://script.google.com/macros/s/AKfycb.../exec
```

**BUKAN:**
```
https://script.google.com/macros/s/AKfycb.../dev  ❌
https://script.google.com/home/projects/...       ❌
```

##### B. Cek Access Settings
1. Di **Manage deployments**, klik ikon pensil ✏️
2. Pastikan **"Who has access"** = **Anyone** ⚠️
   - BUKAN "Only myself"
   - BUKAN "Only domain users"

---

#### 4. Periksa Google Spreadsheet

##### A. Pastikan Spreadsheet Dapat Diakses
1. Buka spreadsheet: https://docs.google.com/spreadsheets/d/1fOlqG08gnuYljijDPExCABesXgFYRRDyF4QRmZaguks/edit
2. Klik tombol **Share** (bagikan) di kanan atas
3. Pastikan akses = **Anyone with the link can edit**
   - Atau minimal: **Anyone with the link can view**

##### B. Periksa Header Kolom
Spreadsheet harus memiliki header di baris 1:
```
| Timestamp | Name | Email | Message | File URL | Processed |
```

Jika belum ada, hapus semua data dan biarkan script membuat header otomatis.

---

#### 5. Periksa Google Drive Folder

##### A. Cek Folder ID
Folder ID dari URL Anda: `1T9eHs8YqReD_G1j3O3RKAtgfnQ7hxaLG`

URL folder:
```
https://drive.google.com/drive/folders/1T9eHs8YqReD_G1j3O3RKAtgfnQ7hxaLG
```

##### B. Pastikan Folder Dapat Diakses
1. Buka folder di Google Drive
2. Klik kanan pada folder → **Share**
3. Pastikan akses = **Anyone with the link can edit**

---

#### 6. Periksa File google-drive-integration.js

Buka file `google-drive-integration.js` dan pastikan URL benar:

```javascript
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzGib2xLsGWYIOcZAcYEh_J764VfQnDj0EudU_02DVyCev6r6g6keySMqr_4frI4EwX/exec';
```

**URL ini HARUS sama persis** dengan URL Web App dari Google Apps Script.

---

### 🧪 Test Manual dengan cURL

Jika Anda memiliki akses terminal, test dengan cURL:

```bash
curl -X POST "https://script.google.com/macros/s/AKfycbzGib2xLsGWYIOcZAcYEh_J764VfQnDj0EudU_02DVyCev6r6g6keySMqr_4frI4EwX/exec" \
  -F "name=Test User" \
  -F "email=test@example.com" \
  -F "message=Test message" \
  -F "timestamp=2024-02-17T00:00:00.000Z"
```

**Expected response:**
```json
{"success":true,"sheetId":2,"fileUrl":"","message":"Data berhasil disimpan"}
```

---

### ❌ Error Umum dan Solusi

#### Error: "404 Not Found"
**Penyebab:** URL Web App salah atau deployment belum dilakukan

**Solusi:**
1. Re-deploy Google Apps Script
2. Copy URL yang benar (berakhiran `/exec`)
3. Update di `google-drive-integration.js`

---

#### Error: "403 Forbidden"
**Penyebab:** Access settings tidak "Anyone"

**Solusi:**
1. Deploy → Manage deployments
2. Edit deployment
3. Change "Who has access" → **Anyone**
4. Redeploy

---

#### Error: "CORS Error" di Console
**Penyebab:** Browser memblokir request cross-origin

**Solusi:**
- Ini NORMAL untuk Google Apps Script
- Script sudah menggunakan `mode: 'no-cors'`
- Form tetap berfungsi meskipun ada CORS warning di console

---

#### Error: "File too large"
**Penyebab:** File > 25 MB

**Solusi:**
- Compress file PDF/JPG
- Maksimal upload: 25 MB

---

#### Data Masuk ke Sheets Tapi File Tidak Upload
**Penyebab:** Folder ID salah atau folder tidak dapat diakses

**Solusi:**
1. Periksa Folder ID di `google-apps-script.js`
2. Pastikan folder dapat diakses (Share → Anyone with link)
3. Test upload file kecil (< 1 MB) dulu

---

### 📋 Checklist Lengkap

- [ ] Google Spreadsheet ID benar: `1fOlqG08gnuYljijDPExCABesXgFYRRDyF4QRmZaguks`
- [ ] Google Drive Folder ID benar: `1T9eHs8YqReD_G1j3O3RKAtgfnQ7hxaLG`
- [ ] Google Apps Script deployed sebagai Web App
- [ ] Web App URL berakhiran `/exec`
- [ ] Web App access = **Anyone**
- [ ] URL Web App sudah diupdate di `google-drive-integration.js`
- [ ] Spreadsheet dapat diakses (share settings)
- [ ] Drive folder dapat diakses (share settings)
- [ ] Browser console tidak ada error (selain CORS warning)
- [ ] Test dengan `test-google-script.html` berhasil

---

### 🆘 Masih Bermasalah?

1. **Screenshot error** dari browser console
2. **Copy pesan error** lengkap
3. **Test hasil** dari `test-google-script.html`
4. Hubungi developer untuk bantuan lebih lanjut

---

**Last Updated:** February 17, 2024
**Version:** 1.0.1
