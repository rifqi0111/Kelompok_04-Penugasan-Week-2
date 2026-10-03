export default function About() {
  return (
    <section id="tentang" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-green-900">Kenali Evriwanken</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Kerusakan hutan dan krisis sampah adalah dua ancaman terbesar bagi ekosistem kita saat ini. Evriwanken mengambil aksi nyata melalui pendekatan terpadu dari akar masalah.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-green-800 mb-3">1. Reboisasi Hutan Kritis</h3>
          <p className="text-gray-600 leading-relaxed">
            Jutaan hektar hutan hilang akibat pembalakan liar dan kebakaran. Kami memulihkan kawasan hutan yang gundul dengan menanam bibit pohon lokal berkelanjutan untuk mengembalikan habitat satwa dan mencegah bencana alam.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-green-800 mb-3">2. Pengelolaan dan Daur Ulang Sampah</h3>
          <p className="text-gray-600 leading-relaxed">
            Penumpukan sampah yang tidak terkelola mencemari tanah dan lautan. Kami menghadirkan sistem daur ulang terpadu serta edukasi pemilahan sampah dari tingkat rumah tangga.
          </p>
        </div>
      </div>
    </section>
  );
}

