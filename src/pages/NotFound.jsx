import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 px-4 max-w-xl mx-auto text-center">
      <h1 className="text-6xl font-extrabold text-green-900 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-green-800 mb-3">
        Halaman Tidak Ditemukan
      </h2>
      <p className="text-gray-600 mb-8">
        Halaman yang kamu cari tidak tersedia.
      </p>
      <Link
        to="/"
        className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}

