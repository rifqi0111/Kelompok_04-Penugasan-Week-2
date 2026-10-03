import About from "../components/About";

export default function Tentang() {
  return (
    <div className="pt-20 lg:pt-24">
      <About />
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-green-900 mb-4">Visi & Misi Organisasi</h3>
          <ul className="space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
            <li>Mewujudkan bumi yang hijau, bersih, dan berkelanjutan.</li>
            <li>Memulihkan hutan yang gundul melalui penanaman dan perawatan pohon.</li>
            <li>Mengurangi sampah dengan mengedukasi masyarakat tentang pemilahan dan daur ulang.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

