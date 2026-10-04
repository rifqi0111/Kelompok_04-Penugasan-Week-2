import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { supportModal } from "../data/supportModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-green-900 text-white py-20 lg:py-32 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Teks Hero */}
        <div className="space-y-6">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Pulihkan Hutan Gundul, Wujudkan Bumi Bebas Sampah
          </h1>
          <p className="text-lg text-green-100 leading-relaxed">
            Evriwanken berdedikasi mengembalikan ekosistem hutan kritis di Indonesia sekaligus membangun sistem daur ulang sampah terpadu demi masa depan yang berkelanjutan.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            {/* CTA Utama Navigasi ke /program */}
            <Link
              to="/program"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
            >
              Jelajahi Program Kami
            </Link>

            {/* CTA Tambahan untuk membuka Modal */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-block bg-transparent hover:bg-white/10 text-white font-bold px-6 py-3 rounded-lg border-2 border-emerald-400 shadow-md transition transform hover:-translate-y-0.5 cursor-pointer"
            >
              Dukung Gerakan Kami
            </button>
          </div>
        </div>

        {/* Gambar Hero */}
        <div className="relative">
          <img
            src="/images/hero2.jpg"
            alt="Penanaman pohon reboisasi hutan"
            className="rounded-2xl shadow-2xl w-full h-80 lg:h-96 object-cover"
          />
        </div>
      </div>

      {/* Modal Dukung Gerakan */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Dukung Gerakan Evriwanken"
      >
        <div className="space-y-4">
          <p>{supportModal.intro}</p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-sm text-green-900 space-y-2">
            <p className="font-semibold text-green-950">{supportModal.contributionTitle}</p>
            <ul className="list-disc list-inside space-y-1">
              {supportModal.contributions.map((item) => (
              <li key={item.label}>
                  <strong>{item.label}</strong> {item.text}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-gray-500">{supportModal.footnote}</p>
          <div className="pt-2 flex justify-end">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2.5 rounded-lg transition cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}

