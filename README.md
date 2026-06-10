# Lab11Web_VueJS
# Praktikum 11 - Frontend VueJS

## Tujuan Praktikum
1. Memahami konsep dasar API
2. Memahami konsep dasar Framework VueJS
3. Membuat Frontend API menggunakan Framework VueJS 3

---

## Langkah-Langkah Praktikum

### 1. Persiapan Struktur Folder
Membuat folder `lab8_vuejs` di dalam `htdocs` dengan struktur berikut:
```
lab8_vuejs/
│  index.html
└─ assets/
   ├─ css/
   │   style.css
   └─ js/
       app.js
```

> <img width="171" height="202" alt="image" src="https://github.com/user-attachments/assets/fcf7689a-f54e-4c52-9809-bd6e6fb285a2" />


---

### 2. Download Library VueJS dan Axios
Download library VueJS dan Axios secara lokal menggunakan CMD:
```
curl -L -o assets/js/vue.global.js https://unpkg.com/vue@3/dist/vue.global.js
curl -L -o assets/js/axios.min.js https://unpkg.com/axios/dist/axios.min.js
```

> 📸 Screenshot hasil download di CMD

---

### 3. Membuat File index.html
Membuat tampilan tabel daftar artikel beserta form modal untuk tambah dan ubah data.

> 📸 Screenshot isi file index.html di VS Code

---

### 4. Membuat File app.js
Membuat logika Vue untuk menampilkan, menambah, mengubah, dan menghapus data artikel melalui REST API.

> 📸 Screenshot isi file app.js di VS Code

---

### 5. Membuat File style.css
Menambahkan styling untuk tampilan tabel dan form modal.

> 📸 Screenshot isi file style.css di VS Code

---

### 6. Konfigurasi CORS di CodeIgniter 4
Mengaktifkan CORS di `app/Config/Filters.php` agar VueJS bisa mengakses API dari CI4.

> 📸 Screenshot file Filters.php

---

### 7. Hasil Tampilan Daftar Artikel
Membuka `http://localhost/lab8_vuejs` di browser, data artikel berhasil ditampilkan dari REST API CI4.

> 📸 Screenshot tampilan daftar artikel di browser

---

### 8. Fitur Tambah Data
Klik tombol **Tambah Data**, isi form judul, isi, dan status, lalu klik Simpan.

> 📸 Screenshot form tambah data
> 📸 Screenshot setelah data berhasil ditambahkan

---

### 9. Fitur Edit Data
Klik tombol **Edit** pada salah satu artikel, ubah data, lalu klik Simpan.

> 📸 Screenshot form edit data terisi
> 📸 Screenshot setelah data berhasil diubah

---

### 10. Fitur Hapus Data
Klik tombol **Hapus** pada salah satu artikel, konfirmasi hapus.

> 📸 Screenshot konfirmasi hapus
> 📸 Screenshot setelah data berhasil dihapus

---

## Kendala dan Solusi

**Kendala 1:** Library VueJS dan Axios dari CDN diblokir oleh browser (Tracking Prevention).

**Solusi:** Download file library secara lokal menggunakan `curl -L` di CMD dan simpan ke folder `assets/js/`.

---

**Kendala 2:** Fitur Edit menyebabkan data menjadi kosong setelah disimpan.

**Solusi:** Mengubah cara membaca input di Controller CI4 dari `getRawInput()` menjadi `getJSON(true)` agar bisa membaca data JSON yang dikirim oleh axios.

```php
$json = $this->request->getJSON(true);
$data = [
    'judul'  => $json['judul']  ?? null,
    'isi'    => $json['isi']    ?? null,
    'status' => $json['status'] ?? null,
];
```
