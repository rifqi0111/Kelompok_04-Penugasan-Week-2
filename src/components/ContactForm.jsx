import { useState } from "react";

const API_URL = "https://devx2026-post.vercel.app/api/posts";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    type: "", // "success" | "error" | ""
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Hapus pesan error saat pengguna mulai mengetik ulang
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Bersihkan banner feedback ketika ada perubahan input
    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.author.trim()) {
      newErrors.author = "Nama wajib diisi.";
    } else if (formData.author.trim().length < 2) {
      newErrors.author = "Nama minimal 2 karakter.";
    }

    if (!formData.title.trim()) {
      newErrors.title = "Subjek wajib diisi.";
    } else if (formData.title.trim().length < 3) {
      newErrors.title = "Subjek minimal 3 karakter.";
    }

    if (!formData.content.trim()) {
      newErrors.content = "Pesan wajib diisi.";
    } else if (formData.content.trim().length < 10) {
      newErrors.content = "Pesan minimal 10 karakter.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setStatus({ type: "", message: "" });

    // 1. Jalankan frontend validation sebelum request API
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const payload = {
      author: formData.author.trim(),
      title: formData.title.trim(),
      content: formData.content.trim(),
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer DEVX2026",
        },
        body: JSON.stringify(payload),
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (response.status === 201) {
        // Status 201 - Success
        setStatus({
          type: "success",
          message:
            "Pesan berhasil dikirim. Terima kasih telah menghubungi Evriwanken!",
        });
        // Reset seluruh form input dan error
        setFormData({
          author: "",
          title: "",
          content: "",
        });
        setErrors({});
      } else if (response.status === 400) {
        // Status 400 - Bad Request
        const errorMsg =
          responseData?.message ||
          responseData?.error ||
          "Gagal mengirim pesan. Periksa kembali data yang kamu masukkan.";
        setStatus({
          type: "error",
          message: errorMsg,
        });
      } else if (response.status === 401) {
        // Status 401 - Unauthorized
        setStatus({
          type: "error",
          message: "Akses ditolak, token tidak valid.",
        });
      } else {
        // Status HTTP error lainnya
        const fallbackMsg =
          responseData?.message ||
          responseData?.error ||
          `Terjadi kesalahan pada server (Status: ${response.status}). Silakan coba lagi.`;
        setStatus({
          type: "error",
          message: fallbackMsg,
        });
      }
    } catch (error) {
      // Network Error
      console.error("Contact Form Submission Error:", error);
      setStatus({
        type: "error",
        message: "Terjadi masalah koneksi. Silakan coba lagi.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white p-8 rounded-2xl shadow-md max-w-2xl mx-auto space-y-6 text-left"
    >
      {/* Feedback status message (Success / Error) dengan role="status" dan aria-live */}
      {status.message && (
        <div
          role="status"
          aria-live="polite"
          className={`p-4 rounded-xl text-sm font-medium flex items-start gap-3 border ${
            status.type === "success"
              ? "bg-emerald-50 border-emerald-300 text-emerald-800"
              : "bg-red-50 border-red-300 text-red-800"
          }`}
        >
          {status.type === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.74-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-600 shrink-0 mt-0.5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <span>{status.message}</span>
        </div>
      )}

      {/* Input Nama / Author */}
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Nama Lengkap <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={!!errors.author}
          aria-describedby={errors.author ? "author-error" : undefined}
          placeholder="Masukkan nama Anda (min. 2 karakter)"
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition text-sm ${
            errors.author
              ? "border-red-500 focus:ring-red-400 bg-red-50/30"
              : "border-gray-300 focus:ring-emerald-500"
          } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.author && (
          <p id="author-error" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.author}
          </p>
        )}
      </div>

      {/* Input Subjek / Title */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Subjek / Judul <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={!!errors.title}
          aria-describedby={errors.title ? "title-error" : undefined}
          placeholder="Subjek pesan (min. 3 karakter)"
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition text-sm ${
            errors.title
              ? "border-red-500 focus:ring-red-400 bg-red-50/30"
              : "border-gray-300 focus:ring-emerald-500"
          } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.title && (
          <p id="title-error" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.title}
          </p>
        )}
      </div>

      {/* Input Pesan / Content */}
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-700 mb-1"
        >
          Pesan <span className="text-red-500">*</span>
        </label>
        <textarea
          id="content"
          name="content"
          rows={4}
          value={formData.content}
          onChange={handleChange}
          disabled={isSubmitting}
          aria-invalid={!!errors.content}
          aria-describedby={errors.content ? "content-error" : undefined}
          placeholder="Tuliskan pesan Anda di sini (min. 10 karakter)..."
          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:outline-none transition text-sm ${
            errors.content
              ? "border-red-500 focus:ring-red-400 bg-red-50/30"
              : "border-gray-300 focus:ring-emerald-500"
          } ${isSubmitting ? "bg-gray-100 cursor-not-allowed" : ""}`}
        />
        {errors.content && (
          <p id="content-error" className="mt-1.5 text-xs text-red-600 font-medium">
            {errors.content}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full font-bold py-3.5 px-6 rounded-lg shadow transition flex items-center justify-center gap-2 ${
          isSubmitting
            ? "bg-emerald-400 text-white cursor-not-allowed"
            : "bg-emerald-600 hover:bg-emerald-700 text-white cursor-pointer"
        }`}
      >
        {isSubmitting && (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            />
          </svg>
        )}
        <span>{isSubmitting ? "Mengirim..." : "Kirim Pesan"}</span>
      </button>
    </form>
  );
}

