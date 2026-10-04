import { useEffect, useId, useRef } from "react";

const FOCUSABLE = 
'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function Modal({ isOpen, onClose, title, children }) {
  const titleId = useId();

  const dialogRef = useRef(null);

  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
  if (!isOpen) return;

  const previouslyFocused = document.activeElement;

  const dialog = dialogRef.current;
  const first = dialog.querySelector(FOCUSABLE);
  (first || dialog).focus();

  //pake escape untuk tutup modal
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onCloseRef.current();
    }

    if (e.key === "Tab") {
      const items = dialog.querySelectorAll(FOCUSABLE);
      if (items.length === 0) {
        e.preventDefault();
        return;
      }
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstItem) {
        e.preventDefault();
        lastItem.focus();
      } else if (!e.shiftKey && document.activeElement === lastItem) {
        e.preventDefault();
        firstItem.focus();
      }
    }
  };
  document.addEventListener("keydown", handleKeyDown);

  //buat kunci scroll halaman
  const originalOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
    document.body.style.overflow = originalOverflow;
  };
}, [isOpen, onClose]);

if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    onClick={onClose}
    >
      <div ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? titleId : undefined}
      tabIndex={-1}
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 relative focus:outline-none"
      >
        <div className="flex justify-between items-center mb-4">
          {title && (
            <h3 id={titleId} className="text-xl font-bold text-gray-800">
              {title}</h3>
          )}
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup modal"
            className="ml-auto text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
