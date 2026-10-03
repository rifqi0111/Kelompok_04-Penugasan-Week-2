export default function Card({ title, description, image, alt, children, className = "" }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden flex flex-col ${className}`}>
      {image && (
        <img
          src={image}
          alt={alt || title}
          className="h-50 w-full object-cover"
        />
      )}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {title && <h3 className="text-xl font-bold text-green-800 mb-2">{title}</h3>}
          {description && (
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
