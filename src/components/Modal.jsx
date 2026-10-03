export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative">
        <div className="flex justify-between items-center mb-4">
          {title && <h3 className="text-xl font-bold text-gray-800">{title}</h3>}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal"
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
