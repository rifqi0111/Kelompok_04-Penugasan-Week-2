# Evriwanken - Penugasan Week 2 (Kelompok 04)

Platform edukasi dan aksi lingkungan digital yang dibangun menggunakan arsitektur modern **ReactJS + Vite**, **React Router DOM**, dan **Tailwind CSS**. Project ini merupakan kelanjutan dan pengembangan dari penugasan Week 1 yang kini telah bertransformasi menjadi web app multi-halaman interaktif dan terintegrasi dengan REST API.

---

## Anggota Kelompok 04

- **Muhammad Rifqi Fajar Adi Putra**
- **Fahri**
- **Hilal Muzaki**

---

## Tautan Live & Repository

- **Live Demo (Vercel):** [https://evriwanken.vercel.app/](https://evriwanken.vercel.app/)
- **GitHub Repository:** [https://github.com/rifqi0111/Kelompok_04-Penugasan-Week-2](https://github.com/rifqi0111/Kelompok_04-Penugasan-Week-2)

---

## Tech Stack

- **Framework / Bundler:** React 19 + Vite 8
- **Language:** JavaScript (ES6+ / JSX)
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM v7
- **Icons:** Heroicons (SVG semantik)
- **Deployment & Hosting:** Vercel

---

## Struktur Project

```text
evriwanken/
├── public/
│   ├── favicon.ico
│   └── images/               # Asset gambar lokal (hero1.jpg - hero5.jpg)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── BackToTop.jsx     # Tombol floating back to top
│   │   ├── Card.jsx          # Reusable Card container
│   │   ├── ContactForm.jsx   # Form kontak terintegrasi POST API
│   │   ├── Footer.jsx        # Footer semantik & navigasi
│   │   ├── Hero.jsx          # Hero section dengan trigger modal
│   │   ├── Modal.jsx         # Accessible Modal dialog (Escape key & backdrop click)
│   │   ├── Navbar.jsx        # Navigasi utama dengan mobile menu drawer
│   │   ├── ProgramCard.jsx   # Card representasi program kegiatan
│   │   ├── ScrollAnimation.jsx # IntersectionObserver reveal animation
│   │   ├── ScrollToTop.jsx   # Router scroll reset on navigation
│   │   └── Section.jsx       # Section wrapper standar
│   ├── data/
│   │   └── programs.js       # Data terpusat 4 pilar program utama
│   ├── layouts/
│   │   └── MainLayout.jsx    # Layout konsisten (Navbar + Outlet + Footer + BackToTop)
│   ├── pages/
│   │   ├── Home.jsx          # Halaman beranda
│   │   ├── Program.jsx       # Halaman daftar program lengkap
│   │   ├── Tentang.jsx       # Halaman visi, misi, dan nilai organisasi
│   │   ├── Kontak.jsx        # Halaman kontak & formulir kirim pesan
│   │   └── NotFound.jsx      # Halaman 404 penanganan rute tidak terdaftar
│   ├── App.jsx               # Deklarasi routing React Router DOM
│   ├── index.css             # Tailwind v4 theme & utility import
│   └── main.jsx              # Entry point aplikasi
├── index.html                # Single Page Application HTML shell
├── package.json              # Dependensi & script manajemen
├── vercel.json               # Konfigurasi SPA rewrite Vercel
├── PengerjaanKelompok.md     # Catatan pembagian tugas kelompok
└── README.md                 # Dokumentasi project
```

---

## Fitur Utama

1. **Multi-Page Routing (SPA):**
   - Rute terdaftar: `/` (Home), `/program` (Program), `/tentang` (Tentang), `/kontak` (Kontak), dan wildcard `*` (NotFound 404).
   - Navigasi mulus tanpa reload menggunakan `NavLink` dengan indikator status aktif.
   - Konfigurasi `vercel.json` (`rewrites` ke `/index.html`) memastikan direct access dan reload browser tidak menyebabkan HTTP 404 di production.
2. **Interactive Modal:**
   - Dibuat custom tanpa library eksternal dengan standar aksesibilitas WAI-ARIA (`role="dialog"`, `aria-modal="true"`).
   - Dilengkapi keyboard listener (`Escape` key), overlay backdrop click dismissal, dan body scroll lock.
3. **Contact Form & POST API Integration:**
   - Controlled component dengan validasi lokal (nama $\ge$ 2, subjek $\ge$ 3, pesan $\ge$ 10 karakter).
   - Pengiriman POST request ke endpoint `https://devx2026-post.vercel.app/api/posts` dengan Authorization token `Bearer DEVX2026`.
   - Penanganan status HTTP 201 (berhasil & reset form), 400 (bad request), 401 (unauthorized), dan network error dengan pesan feedback visual.
   - Loading indicator & disabled submit button untuk mencegah spam/duplikasi request.
4. **Desain Responsif & Aksesibel:**
   - Optimal di berbagai resolusi layar: 375px, 425px, 768px, 1024px, 1280px, hingga 1440px+.
   - Kontras warna memadai dan navigasi keyboard friendly.

---

## 💻 Panduan Instalasi & Menjalankan Lokal

1. **Clone repository:**
   ```bash
   git clone https://github.com/rifqi0111/Kelompok_04-Penugasan-Week-2.git
   cd evriwanken
   ```

2. **Install dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173`.

4. **Build untuk production:**
   ```bash
   npm run build
   ```
   Output build siap deploy akan dihasilkan di folder `dist/`.

5. **Preview build production:**
   ```bash
   npm run preview
   ```
