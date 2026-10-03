import ProgramCard from "./ProgramCard";
import { programsData } from "../data/programs";

export default function Programs() {
  return (
    <section id="program" className="py-16 bg-green-100/60 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-green-900">
            Program Unggulan Kami
          </h2>
          <p className="mt-4 text-gray-600">
            Inisiatif berkelanjutan yang kami jalankan bersama relawan dan komunitas lokal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programsData.map((prog) => (
            <ProgramCard
              key={prog.id}
              {...prog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

