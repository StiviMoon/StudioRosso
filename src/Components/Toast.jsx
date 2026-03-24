import { useEffect, useState } from "react";
import { FaCheck, FaTimes, FaExclamationCircle } from "react-icons/fa";

const ICONS = {
  success: <FaCheck className="text-green-600 text-lg" />,
  error: <FaExclamationCircle className="text-red-500 text-lg" />,
};

const STYLES = {
  success: "border-green-200 bg-green-50",
  error: "border-red-200 bg-red-50",
};

const TITLE_STYLES = {
  success: "text-green-800",
  error: "text-red-800",
};

const DESC_STYLES = {
  success: "text-green-700",
  error: "text-red-700",
};

/**
 * Toast — notificación flotante temporal
 * Props: type ("success" | "error"), title, description, onClose, duration (ms)
 */
export default function Toast({ type = "success", title, description, onClose, duration = 5000 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Entrada animada
    const enterTimer = setTimeout(() => setVisible(true), 10);
    // Auto-cierre
    const closeTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(closeTimer);
    };
  }, [duration, onClose]);

  return (
    <div
      className={`fixed top-6 right-4 sm:right-6 z-[100] max-w-sm w-full mx-auto
                  border rounded-2xl shadow-xl p-4 flex items-start space-x-3
                  transition-all duration-300
                  ${STYLES[type]}
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex-shrink-0 mt-0.5">{ICONS[type]}</div>

      <div className="flex-1 min-w-0">
        <p className={`font-semibold font-montserrat text-sm ${TITLE_STYLES[type]}`}>
          {title}
        </p>
        {description && (
          <p className={`text-xs mt-1 font-montserrat leading-relaxed ${DESC_STYLES[type]}`}>
            {description}
          </p>
        )}
      </div>

      <button
        onClick={() => {
          setVisible(false);
          setTimeout(onClose, 300);
        }}
        className="flex-shrink-0 p-1 rounded-full hover:bg-black/10 transition-colors duration-200"
        aria-label="Cerrar notificación"
      >
        <FaTimes className="text-xs text-gray-500" />
      </button>
    </div>
  );
}
