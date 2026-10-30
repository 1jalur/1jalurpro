# PRODUKSI (Manufactur)

Aplikasi manajemen produksi: timeline proyek, absensi tim, RAP awal/akhir, stok gudang, belanja,
operasional (SOP, surat jalan, QC, reimburse), dan investasi. Data disimpan di browser dan
dicadangkan otomatis ke **Google Drive** lewat Google Apps Script.

Aplikasi ini situs statis: tanpa build, tanpa framework. Cukup HTML, CSS, dan JavaScript biasa.

## Struktur

```
index.html            Kerangka halaman dan urutan pemuatan file
css/
  base.css            Token warna, mode gelap, reset
  layout.css          Sidebar, menu, header
  dashboard.css       Kartu, banner, grafik
  components.css      Tombol, tabel, form, dialog
  gantt.css           Timeline dan absensi
  pages.css           Editor SOP, tabel khusus, status investasi
  login.css           Login dan manajemen pengguna
  responsive.css      Layar kecil (harus dimuat paling akhir)
img/                  Logo, favicon, foto latar login (login-bg.jpg; ganti file ini untuk mengubah tampilan depan)
js/
  config.js           URL Web App (opsional)
  core/               Data, penyimpanan, kolom, konstanta, router, registry halaman
  components/         Tabel, Gantt, folder, cetak, form material
  pages/              Satu file per halaman / fitur
  services/           Sinkron Google Drive, login, mode Hanya lihat, foto (IndexedDB)
  main.js             Titik mulai (dimuat terakhir)
gas/Kode.gs           Skrip Google Apps Script (tempel di script.google.com, bukan dijalankan di sini)
```

## Aturan penting

- **Urutan `<script>` di `index.html` tidak boleh diubah sembarangan.** Semua file memakai
  variabel dan fungsi global yang sama (bukan ES module), karena tombol di halaman memanggil fungsi
  lewat `onclick`. Aturan umum: `core` dulu, lalu `components`, `pages`, `services`, dan `main.js` terakhir.
- `core/registry.js` memuat daftar halaman (`PG`), jadi harus dimuat **setelah** semua file di `pages/`.
- Menambah halaman baru: buat `js/pages/nama.js`, daftarkan di `PG` (`core/registry.js`) dan `MENU`
  (`core/constants.js`), lalu tambahkan `<script>`-nya di `index.html` sebelum `core/registry.js`.
- `responsive.css` harus tetap paling akhir, dan `gantt.css` harus sebelum `login.css`
  (kelas `.lgd` dipakai di keduanya).

## Menjalankan di komputer

```bash
python3 -m http.server 8080
# buka http://localhost:8080
```

## Deploy

**Netlify dari GitHub (disarankan):** Add new site > Import an existing project > pilih repo ini.
Build command dikosongkan, publish directory `.` (sudah diatur di `netlify.toml`). Setiap `git push`
ke branch `main` otomatis menerbitkan versi baru.

**GitHub Pages:** Settings > Pages > Deploy from a branch > `main` / root.

Setelah mengubah CSS atau JS, naikkan nomor versi agar browser tidak memakai cache lama:

```bash
sed -i 's/?v=1.0.0/?v=1.0.1/g' index.html
```

## Hubungkan ke Google Drive

1. Buka script.google.com, buat proyek baru, tempel isi `gas/Kode.gs`.
2. Ganti `TOKEN` (kode rahasia utama) dan `TOKEN_BACA` (kode baca) dengan kode Anda sendiri.
3. Jalankan fungsi `pasang`, lalu Deploy > Deployment baru > Aplikasi web (akses: Siapa saja).
4. Salin URL berakhiran `/exec`. Di aplikasi, klik tombol **Google Drive**, isi URL dan kode rahasia utama.

## Lupa kata sandi / reset akses

Di layar login buka **"Lupa kata sandi atau tidak bisa masuk? Reset akses"**. Isi URL Web App, **kode rahasia utama**
(TOKEN di `gas/Kode.gs`), nama admin, dan kata sandi baru. Aplikasi mengambil data terbaru dari Google Drive,
membuat atau memulihkan akun admin itu, lalu menyimpannya kembali ke Drive. Data produksi tidak berubah.
Centang "Hapus semua pengguna lain" jika hanya ingin admin baru yang tersisa.

Darurat (kode rahasia pun hilang): ganti `TOKEN` di Apps Script dan terbitkan ulang (Deploy > Kelola deployment > Versi baru),
lalu pakai fitur reset di atas dengan kode yang baru.

## Keamanan

- **Jangan commit `TOKEN` atau `TOKEN_BACA` yang asli.** Isi hanya di Apps Script, bukan di repo.
  Jika sudah terlanjur ter-commit, ganti kodenya dan deploy ulang.
- Jangan commit file ekspor data (`.json`, `.xlsx`). `.gitignore` sudah memblokirnya.
- Login dan peran dijalankan di sisi browser. Itu membatasi tampilan, bukan pengaman sungguhan.
  Pengaman datanya adalah kode rahasia di Kode.gs.
- Disarankan memakai repo **private**.
