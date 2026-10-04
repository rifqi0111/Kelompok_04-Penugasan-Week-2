# Catatan Pembagian Tugas - Kelompok 04

## Anggota Kelompok 04

1. Muhammad Rifqi Fajar Adi Putra
2. Fahri
3. Hilal Muzaki


---

## Pembagian Pekerjaan

Berikut adalah rencana dan rincian alokasi tugas yang dapat disesuaikan sebelum pengumpulan akhir:

### 1. Setup & Arsitektur Project
- Inisialisasi project ReactJS menggunakan Vite dan npm.
- Konfigurasi Tailwind CSS dan asset images (`/images/hero1.jpg` s/d `hero5.jpg`).
- Penataan struktur folder modular (`src/components/`, `src/pages/`, `src/layouts/`, `src/data/`).
  **Penanggung Jawab:** Rifqi

### 2. Multi-Page Routing & Layout
- Konfigurasi React Router DOM (`BrowserRouter`, `Routes`, nested `Route`).
- Implementasi `MainLayout` dengan konsistensi `Navbar`, `<Outlet />`, `Footer`, dan `BackToTop`.
- Pembuatan 5 rute halaman: `/` (Home), `/program` (Program), `/tentang` (Tentang), `/kontak` (Kontak), dan `*` (NotFound 404).
- Navigasi internal menggunakan `NavLink` / `Link` dengan active state indicator tanpa reload.
  **Penanggung Jawab:** Hilal

### 3. Component Architecture & Props
- Pembangunan reusable components: `Navbar`, `Hero`, `Section`, `Card`, `ProgramCard`, `Footer`, `Modal`.
- Pengelolaan data terpusat di `src/data/programs.js` dan mapping dinamis menggunakan `.map()` dengan props.
- Mempertahankan visual identity, typography, warna, dan responsive breakpoints dari Week 1.
  **Penanggung Jawab:** Hilal

### 4. Interactive State & Modal
- Implementasi state management berbasis `useState` (Mobile Menu drawer & Modal popup).
- Pembuatan reusable `Modal` dialog lengkap dengan keyboard event listener (**Escape**), backdrop click-to-close, body scroll lock, dan atribut aksesibilitas ARIA (`role="dialog"`, `aria-modal="true"`).
- Penambahan CTA *"Dukung Gerakan Kami"* pada Hero section untuk memicu Modal.
  **Penanggung Jawab:** Fahri

### 5. Contact Form & API Integration
- Implementasi controlled inputs form (`author`, `title`, `content`) dengan `onChange`.
- Validasi lokal frontend (author $\ge$ 2, title $\ge$ 3, content $\ge$ 10 karakter) sebelum fetch.
- Integrasi POST request ke endpoint API `https://devx2026-post.vercel.app/api/posts` dengan Authorization header `Bearer DEVX2026`.
- Handling response HTTP 201 (success & form reset), 400 (bad request), 401 (unauthorized), dan network error dengan pesan feedback yang ramah pengguna.
- Loading state spinner dan disabled button saat pengiriman berlangsung untuk mencegah duplikasi.
  **Penanggung Jawab:** Fahri

### 6. Testing, Quality Assurance & Dokumentasi
- Pengujian responsivitas lintas breakpoint (375px, 425px, 768px, 1024px, 1280px, 1440px+).
- Verifikasi aksesibilitas elemen semantik, kontras warna, keyboard navigation, dan label form.
- Pengujian build production (`npm run build`) hingga 0 error.
- Penyusunan `vercel.json` untuk SPA rewrites, penulisan `README.md`, dan penyusunan dokumen ini.
  **Penanggung Jawab:** Rifqi

---
