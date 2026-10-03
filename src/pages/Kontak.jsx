import ContactForm from "../components/ContactForm";

export default function Kontak() {
  return (
    <div className="pt-28 pb-16 px-4 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
        Hubungi Kami
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto mb-8 leading-relaxed">
        Untuk pertanyaan, kerja sama, atau informasi program konservasi, hubungi kami melalui formulir di bawah ini atau melalui email di <span className="font-semibold text-green-800">evriwanken@gmail.com</span> dan telepon <span className="font-semibold text-green-800">+62-123-4567-8901</span>.
      </p>
      <ContactForm />
    </div>
  );
}

