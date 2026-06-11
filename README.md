<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e1a03692-79d1-46da-ba09-d3ce61c3a60f" /># Lab11Web_VueJS
# Praktikum 11 - Frontend VueJS
# Nama: Putri Melati Ramadhaniati
# NIM: 312410194
# Kelas: I241B

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

<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/80901d3f-fdcd-4c1c-b302-67b5bf1bc769" />


---

### 3. Membuat File index.html
Membuat tampilan tabel daftar artikel beserta form modal untuk tambah dan ubah data.

---

### 4. Membuat File app.js
Membuat logika Vue untuk menampilkan, menambah, mengubah, dan menghapus data artikel melalui REST API.

---

### 5. Membuat File style.css
Menambahkan styling untuk tampilan tabel dan form modal.

---

### 6. Konfigurasi CORS di CodeIgniter 4
Mengaktifkan CORS di `app/Config/Filters.php` agar VueJS bisa mengakses API dari CI4.

---

### 7. Hasil Tampilan Daftar Artikel
Membuka `http://localhost/lab8_vuejs` di browser, data artikel berhasil ditampilkan dari REST API CI4.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d941e2e6-7ab9-4c86-a0c2-f711ff8351a3" />


---

### 8. Fitur Tambah Data
Klik tombol **Tambah Data**, isi form judul, isi, dan status, lalu klik Simpan.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b88c6e6c-567f-4d85-a0d5-59f8ccadcba1" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dcb6bba8-f3f2-41f5-9c60-89494de6b0e5" />


---

### 9. Fitur Edit Data
Klik tombol **Edit** pada salah satu artikel, ubah data, lalu klik Simpan.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/845a9fd6-2128-411f-a4a4-58ff2b613823" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d09c4d7d-4bcf-4723-9415-946d956ab8a7" />


---

### 10. Fitur Hapus Data
Klik tombol **Hapus** pada salah satu artikel, konfirmasi hapus.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/45395c5b-eaa0-4c22-af2f-8a327c036df0" />

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9c3c1c97-222b-43e7-8250-5f2c77776350" />


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

# Praktikum 12 - VueJS Komponen dan Routing (Single Page Application)

---

## Tujuan Praktikum
1. Memahami konsep komponen pada Framework VueJS
2. Memahami konsep Client-Side Routing untuk membangun Single Page Application (SPA)
3. Mengimplementasikan komponen dan routing menggunakan Vue Router berbasis CDN

---

## Langkah-Langkah Praktikum

### 1. Download Library Vue Router
Download Vue Router secara lokal menggunakan CMD:

> 📸 Screenshot hasil download CMD

### 2. Struktur Folder Project

> 📸 Screenshot struktur folder di VS Code

### 3. Membuat Komponen Home.js
Membuat file `assets/components/Home.js` sebagai halaman beranda.

> 📸 Screenshot isi file Home.js di VS Code

### 4. Membuat Komponen Artikel.js
Memindahkan logika CRUD artikel ke komponen terisolasi `assets/components/Artikel.js`.

> 📸 Screenshot isi file Artikel.js di VS Code

### 5. Membuat Komponen About.js
Membuat komponen baru `assets/components/About.js` berisi profil mahasiswa sebagai tugas tambahan.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/813b367a-5c67-445b-8a6c-dd569344893d" />

### 6. Mengkonfigurasi Vue Router di app.js
Mendaftarkan semua rute dan komponen pada `assets/js/app.js`.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/1cf3b4e5-dcc7-463c-b294-b8006b22ff10" />


### 7. Update index.html
Menambahkan Vue Router dan navigasi menggunakan `router-link` dan `router-view`.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6e4c9532-43c7-4542-a985-930554971f6e" />


### 8. Hasil Halaman Beranda

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/531201fc-b86a-4c8c-acc2-770fc88420a7" />


### 9. Hasil Halaman Kelola Artikel

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6b7bc3ca-eaf7-4e16-80a7-6cc4a5308b02" />


### 10. Hasil Halaman About

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d9cf1e33-3478-4efe-bc8f-62d4397befe1" />


---

## Hasil Pengujian SPA

| No | Menu | URL | Hasil |
|----|------|-----|-------|
| 1 | Beranda | /#/ | Tampil halaman beranda |
| 2 | Kelola Artikel | /#/artikel | Tampil daftar artikel |
| 3 | About | /#/about | Tampil profil mahasiswa |

Perpindahan antar halaman lancar dan browser tidak reload sama sekali — SPA-nya berhasil.

---

## Kendala yang Saya Temui

**Kendala 1:** File Home.js dan Artikel.js error 404 tidak ketemu.

Ternyata path-nya salah di index.
**Kendala 2:** Error `Identifier 'About' has already been declared`.

**Solusi:** Kode komponen `About` yang tidak sengaja ada di `app.js` dihapus karena sudah ada di file `About.js` tersendiri.

# Praktikum 13 - VueJS Autentikasi dan Navigation Guards (SPA Security)

---

## Tujuan
Di praktikum ini saya belajar cara mengamankan halaman pada aplikasi SPA menggunakan Navigation Guards dari Vue Router. Selain itu juga belajar bikin endpoint login di sisi backend CI4 dan menghubungkannya ke frontend VueJS lewat Axios.

---

## Langkah Praktikum

### 1. Membuat Auth Controller di CI4
Buat file baru di `app/Controllers/Api/Auth.php` untuk menangani proses login dari frontend. Controller ini menerima username dan password, lalu memverifikasinya ke database.

<img width="300" height="159" alt="image" src="https://github.com/user-attachments/assets/6488ff2e-4412-43d1-8ba9-ee724b9cec5c" />

Daftarkan route POST untuk endpoint login di `app/Config/Routes.php`.

### 3. Membuat Komponen Login.js
Buat file `assets/components/Login.js` yang berisi form login. Komponen ini mengirim data username dan password ke API backend menggunakan Axios, lalu menyimpan token ke localStorage jika login berhasil.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4a198d4c-2921-433f-8412-f39e9f5ec926" />

### 4. Update app.js — Navigation Guards
Update `assets/js/app.js` dengan menambahkan route `/login`, properti `meta: { requiresAuth: true }` pada route `/artikel` dan `/about`, fungsi `router.beforeEach()` sebagai pencegat akses rute, dan fungsi `logout()` untuk menghapus session dari localStorage.

### 5. Update index.html
Tambahkan script Login.js dan ubah navigasi agar tampil Login/Logout secara dinamis menggunakan `v-if` dan `v-else`.

### 6. Tambah CSS Login
Tambahkan styling form login di bagian bawah `assets/css/style.css`.

### 7. Skenario A — Akses Ditolak (Belum Login)
Saat belum login dan mencoba klik menu Kelola Artikel, sistem langsung menolak akses, menampilkan alert, dan mengarahkan ke halaman login.

<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/89a47f92-452e-4a9d-956b-7d715bbf2515" />
<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/ae22c058-a404-468c-812a-e870aa04388c" />

### 8. Skenario B — Login Berhasil
Isi form login dengan username dan password yang valid, klik Masuk Aplikasi. Sistem memvalidasi ke backend CI4 lewat Axios, lalu masuk ke halaman Kelola Artikel. Menu navigasi berubah dari Login menjadi Logout.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/e1d29558-10c9-4b79-9550-b84b117f9a20" />

### 9. Fitur Logout
Klik menu Logout, muncul konfirmasi. Setelah konfirmasi, session dihapus dari localStorage dan diarahkan kembali ke halaman Beranda.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4f7ce9bc-338a-4236-bcf9-63bb40405f04" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/bab3e6c1-405b-49f0-97c4-7540452fd3d6" />


---

## Hasil Pengujian

| No | Skenario | Kondisi | Hasil |
|----|----------|---------|-------|
| 1 | Akses /artikel tanpa login | Belum login | ✅ Ditolak, diarahkan ke /login |
| 2 | Akses /about tanpa login | Belum login | ✅ Ditolak, diarahkan ke /login |
| 3 | Login dengan kredensial valid | Form diisi benar | ✅ Masuk ke halaman artikel |
| 4 | Logout | Sudah login | ✅ Session terhapus, kembali ke beranda |

---

## Analisis Cara Kerja

**router.beforeEach()** bekerja sebagai interceptor — setiap kali user mau pindah halaman, fungsi ini dicek dulu. Kalau halaman tujuan punya `meta: { requiresAuth: true }` dan localStorage tidak punya `isLoggedIn = true`, maka akses ditolak dan diarahkan paksa ke `/login`.

**Axios HTTP Post** dipakai untuk mengirim data username dan password ke endpoint `/api/login` di backend CI4. Kalau verifikasi berhasil, backend kirim token dan status 200, lalu token disimpan di localStorage browser sebagai bukti sudah login.

---

## Kendala dan Solusi

**Kendala:** Warna tampilan masih biru setelah update CSS.

**Solusi:** Lakukan hard refresh dengan Ctrl+Shift+R agar browser memuat ulang file CSS yang terbaru dan tidak menggunakan cache lama.

# Praktikum 14 - API Authentication dan Token-Based Security

---

## Tujuan
Di praktikum ini saya belajar cara mengamankan REST API menggunakan token-based authentication. Backend CI4 dilindungi filter yang mengecek token di setiap request POST, PUT, dan DELETE. Sementara di sisi frontend, Axios Interceptors dipakai supaya token terkirim otomatis tanpa harus ditambahkan manual di setiap request.

---

## Langkah Praktikum

### 1. Membuat ApiAuthFilter.php
Buat file `app/Filters/ApiAuthFilter.php` di project CI4. Filter ini bertugas mengecek header Authorization di setiap request yang masuk. Kalau tidak ada token atau tokennya kosong, request langsung ditolak dengan status 401.

> 📸 Screenshot isi file ApiAuthFilter.php di VS Code

### 2. Mendaftarkan Filter di Filters.php
Daftarkan alias `apiauth` di `app/Config/Filters.php` supaya filter bisa dipanggil dari Routes.

### 3. Menerapkan Filter ke Routes.php
Hapus `$routes->resource('post')` dan ganti dengan route manual. Endpoint GET dibiarkan bebas, sedangkan POST, PUT, dan DELETE dilindungi dengan `['filter' => 'apiauth']`.

### 4. Update app.js — Axios Interceptors
Tambahkan Axios Interceptors di `assets/js/app.js`. Request interceptor menyuntikkan token dari localStorage ke header Authorization secara otomatis. Response interceptor menangkap error 401 dan mengarahkan user ke halaman login jika token tidak valid atau kedaluwarsa.

### 5. Test Postman — Tanpa Token (401)
Kirim POST request ke `http://localhost/lab11_ci/ci4/public/post` tanpa header Authorization. Hasilnya 401 Unauthorized dengan pesan "Akses Ditolak. Token tidak ditemukan pada request!".

<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/6ff5b9cd-02ea-4d2a-8255-0738c565119c" />

### 6. Test Postman — Dengan Token (201)
Tambahkan header `Authorization: Bearer TOKEN-SECRET-admin` lalu kirim ulang request POST. Hasilnya 201 Created — data berhasil ditambahkan karena token valid.

<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/b44841f9-f1fa-489d-8af7-d41472186da8" />

### 7. Verifikasi Axios Interceptors di Browser
Buka browser ke `http://localhost/lab8_vuejs`, login, lalu buka DevTools → Network. Lakukan operasi di halaman Kelola Artikel, klik request `post` di panel Network → tab Headers → Request Headers. Terlihat `Authorization: Bearer ...` terkirim otomatis oleh Axios Interceptors.

<img width="1456" height="819" alt="image" src="https://github.com/user-attachments/assets/e613a4ac-106b-4fd0-b4b5-f4567843f2b0" />


---

## Hasil Pengujian

| No | Kondisi | Method | Hasil |
|----|---------|--------|-------|
| 1 | Tanpa token | POST | 401 Unauthorized — ditolak |
| 2 | Dengan token valid | POST | 201 Created — berhasil |
| 3 | Axios Interceptors aktif | GET (load data) | Token terkirim otomatis di header |

---

## Analisis Cara Kerja

**ApiAuthFilter** bekerja sebagai penjaga di sisi backend — setiap request yang masuk ke endpoint POST, PUT, DELETE akan dicek dulu headernya. Kalau tidak ada `Authorization: Bearer ...`, request langsung diblokir sebelum sampai ke controller.

**Axios Interceptors** bekerja di sisi frontend — setiap kali Axios mau kirim request, interceptor menyisipkan token dari localStorage ke header secara otomatis. Jadi tidak perlu tambahkan header manual di setiap fungsi `loadData`, `saveData`, atau `hapus`.

Kombinasi keduanya membentuk sistem keamanan end-to-end: frontend selalu kirim token, backend selalu verifikasi token.

---

## Kendala dan Solusi

**Kendala:** Filter tidak terpanggil meski sudah didaftarkan, request POST tetap berhasil tanpa token.

**Solusi:** Ternyata `$routes->resource('post')` lebih prioritas dari route manual di bawahnya. Solusinya adalah menghapus `$routes->resource('post')` dan menggantinya dengan route manual terpisah per method, sehingga filter `apiauth` bisa diterapkan hanya ke POST, PUT, dan DELETE saja.
