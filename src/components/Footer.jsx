"use client";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-green-800 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {/* Brand / Contact */}
          <div>
            <h2 className="text-white text-2xl font-bold">Evriwanken</h2>
            <p className="text-gray-200 text-sm mt-1">
              Pulihkan Hutan Gundul, Wujudkan Bumi Bebas Sampah
            </p>
            <h3 className="text-yellow-500 font-semibold mt-6 mb-3">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>+62-123-4567-8901</li>
              <li>evriwanken@gmail.com</li>
            </ul>
          </div>

          {/* Visi dan Misi */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-3">Visi dan misi</h3>
            <ul className="space-y-2 text-sm">
              <li>Mewujudkan bumi yang hijau, bersih, dan berkelanjutan.</li>
              <li>Memulihkan hutan yang gundul melalui penanaman dan perawatan pohon.</li>
              <li>Mengurangi sampah dengan mengedukasi masyarakat tentang pemilahan dan daur ulang.</li>
            </ul>
          </div>

          {/* Navigasi */}
          <nav aria-label="Link Navigasi Footer">
            <h3 className="text-yellow-500 font-semibold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-500 transition-colors">Beranda</a>
              </li>
              <li>
                <a href="/#program" className="hover:text-yellow-500 transition-colors">Program</a>
              </li>
            </ul>
          </nav>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-3">Dapatkan info menarik lainnya</h3>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Masukkan Email anda
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Masukkan Email anda"
                className="w-full bg-white text-sm text-gray-700 px-3 py-2.5 rounded outline-none"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 transition-colors text-white text-sm font-medium rounded px-4 py-2.5 w-fit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gray-700 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-200 text-center sm:text-left">
            2026 ©Evriwanken All Right reserved
          </p>
          <div className="flex items-center gap-3 text-sm">
            <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center">FB</a>
            <a href="#" aria-label="Google Plus" className="w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center">G+</a>
            <a href="#" aria-label="Twitter" className="w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center">X</a>
            <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-yellow-500 hover:bg-yellow-600 text-white flex items-center justify-center">IG</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
