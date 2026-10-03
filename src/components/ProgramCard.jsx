export default function ProgramCard({ title, description, image, alt }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
      <img
        src={image}
        alt={alt}
        className="h-50 w-full object-cover"
      />
      <div className="p-6 grow flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

