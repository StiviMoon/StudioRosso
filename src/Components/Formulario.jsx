import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLightbulb,
  FaCheck,
  FaPaperPlane,
  FaStar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import Toast from "./Toast.jsx";
import { sendContactEmail } from "../services/emailService.js";
import imgD from "/img/Logos/rosso-min.svg";

// ─── Constantes ────────────────────────────────────────────────────────────
const PHONE_REGEX = /^(\+?57\s?)?[3][0-9]{9}$|^(\+?[1-9]\d{6,14})$/;
const COOLDOWN_MS = 30_000; // 30 segundos entre envíos

const SERVICES = [
  { id: "branding", label: "Branding", icon: "🎨" },
  { id: "fotografia", label: "Fotografía", icon: "📸" },
  { id: "ilustracion", label: "Ilustración", icon: "✏️" },
  { id: "contenido-audiovisual", label: "Contenido audiovisual", icon: "🎬" },
  { id: "diseno-empaques", label: "Diseño de empaques", icon: "📦" },
  { id: "diseno-ux", label: "Diseño UX", icon: "💻" },
  { id: "desarrollo", label: "Desarrollo web", icon: "🚀" },
];

const BUDGET_RANGES = [
  { value: "menos-2000000", label: "Menos de $2,000,000 COP" },
  { value: "2000000-5000000", label: "$2,000,000 - $5,000,000 COP" },
  { value: "5000000-10000000", label: "$5,000,000 - $10,000,000 COP" },
  { value: "10000000-20000000", label: "$10,000,000 - $20,000,000 COP" },
  { value: "mas-20000000", label: "Más de $20,000,000 COP" },
];

// Campos requeridos por paso para validación progresiva
const STEP_FIELDS = {
  1: ["nombres", "apellidos", "correo", "numeroContacto", "ciudad"],
  2: ["servicios", "presupuesto"],
  3: ["idea"],
};

// ─── Schema ────────────────────────────────────────────────────────────────
const formSchema = z.object({
  nombres: z.string().min(2, "El nombre debe tener al menos 2 caracteres."),
  apellidos: z.string().min(2, "Los apellidos deben tener al menos 2 caracteres."),
  correo: z.string().email("Por favor ingresa un correo electrónico válido."),
  numeroContacto: z
    .string()
    .regex(PHONE_REGEX, "Ingresa un número colombiano válido (ej: 3001234567)."),
  servicios: z.array(z.string()).min(1, "Selecciona al menos un servicio."),
  ciudad: z.string().min(2, "Por favor ingresa tu ciudad."),
  presupuesto: z.string().min(1, "Selecciona un rango de presupuesto."),
  idea: z.string().min(15, "Cuéntanos más sobre tu idea (mínimo 15 caracteres)."),
});

// ─── Componente principal ──────────────────────────────────────────────────
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [lastSentAt, setLastSentAt] = useState(null);
  const [toast, setToast] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { servicios: [], presupuesto: "" },
    mode: "onBlur",
  });

  const showToast = useCallback((type, title, description) => {
    setToast({ type, title, description });
  }, []);

  const onSubmit = async (values) => {
    // Rate limiting: cooldown entre envíos
    if (lastSentAt && Date.now() - lastSentAt < COOLDOWN_MS) {
      const secsLeft = Math.ceil((COOLDOWN_MS - (Date.now() - lastSentAt)) / 1000);
      showToast("error", "Demasiado rápido", `Espera ${secsLeft}s antes de volver a enviar.`);
      return;
    }

    setIsSubmitting(true);

    try {
      await sendContactEmail(values);
      setLastSentAt(Date.now());
      showToast(
        "success",
        "¡Proyecto enviado!",
        "Nos pondremos en contacto contigo en las próximas 24 horas. Revisa tu email."
      );
      form.reset();
      setCurrentStep(1);
    } catch (error) {
      let message = "No se pudo enviar el formulario. Inténtalo de nuevo.";

      if (error?.message?.includes("Configuration incomplete")) {
        message = "Error de configuración. Contacta al administrador.";
      } else if (error?.message?.includes("Service not found")) {
        message = "Servicio de email no disponible. Intenta más tarde.";
      } else if (error?.message?.includes("Template not found")) {
        message = "Error de template. Contacta al administrador.";
      }

      showToast("error", "Error al enviar", message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Validar los campos del paso actual antes de avanzar
  const nextStep = async () => {
    const fields = STEP_FIELDS[currentStep];
    const valid = await form.trigger(fields);
    if (valid && currentStep < 3) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((s) => s - 1);
  };

  const watchedServicios = form.watch("servicios") ?? [];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Toast notifications */}
      {toast && (
        <Toast
          type={toast.type}
          title={toast.title}
          description={toast.description}
          onClose={() => setToast(null)}
        />
      )}

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6">
        {/* Header + Progress */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-dream">
            ¡Cuéntanos tu proyecto!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-montserrat">
            Juntos haremos realidad tu visión digital
          </p>

          <div className="mt-3 sm:mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs sm:text-sm font-montserrat text-gray-600">
                Paso {currentStep} de 3
              </span>
              <span className="text-xs sm:text-sm font-montserrat text-gray-600">
                {Math.round((currentStep / 3) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
              <div
                className="bg-black h-1.5 sm:h-2 rounded-full transition-all duration-500"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              />
            </div>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4" id="contact-form" noValidate>

          {/* ── PASO 1: Datos personales ─────────────────────────────── */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">
                  Información Personal
                </h3>
                <p className="text-gray-600 font-montserrat text-sm">
                  Comencemos con tus datos básicos
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <FormField
                  label="Nombres"
                  icon={<FaUser />}
                  error={form.formState.errors.nombres?.message}
                >
                  <input
                    {...form.register("nombres")}
                    className={inputClass}
                    placeholder="Tu nombre"
                    autoComplete="given-name"
                  />
                </FormField>

                <FormField
                  label="Apellidos"
                  icon={<FaUser />}
                  error={form.formState.errors.apellidos?.message}
                >
                  <input
                    {...form.register("apellidos")}
                    className={inputClass}
                    placeholder="Tus apellidos"
                    autoComplete="family-name"
                  />
                </FormField>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <FormField
                  label="Email"
                  icon={<FaEnvelope />}
                  error={form.formState.errors.correo?.message}
                >
                  <input
                    type="email"
                    {...form.register("correo")}
                    className={inputClass}
                    placeholder="tu@email.com"
                    autoComplete="email"
                  />
                </FormField>

                <FormField
                  label="Teléfono"
                  icon={<FaPhone />}
                  error={form.formState.errors.numeroContacto?.message}
                >
                  <input
                    {...form.register("numeroContacto")}
                    className={inputClass}
                    placeholder="3001234567"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </FormField>
              </div>

              <FormField
                label="Ciudad"
                icon={<FaMapMarkerAlt />}
                error={form.formState.errors.ciudad?.message}
              >
                <input
                  {...form.register("ciudad")}
                  className={inputClass}
                  placeholder="¿En qué ciudad te encuentras?"
                  autoComplete="address-level2"
                />
              </FormField>

              <div className="flex justify-end pt-2">
                <button type="button" onClick={nextStep} className={btnPrimaryClass}>
                  <span>Siguiente</span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* ── PASO 2: Detalles del proyecto ────────────────────────── */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">
                  Detalles del Proyecto
                </h3>
                <p className="text-gray-600 font-montserrat text-sm">
                  Cuéntanos más sobre lo que necesitas
                </p>
              </div>

              {/* Servicios */}
              <div>
                <label className="text-sm font-semibold text-gray-900 mb-3 font-montserrat flex items-center space-x-2">
                  <FaLightbulb className="text-gray-700 text-sm" />
                  <span>Servicios de interés</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {SERVICES.map((service) => {
                    const isChecked = watchedServicios.includes(service.id);
                    return (
                      <label key={service.id} className="group cursor-pointer">
                        <div
                          className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 ${
                            isChecked
                              ? "border-black bg-black/5 shadow-md"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            value={service.id}
                            {...form.register("servicios")}
                            className="sr-only"
                          />
                          <span className="text-lg">{service.icon}</span>
                          <span
                            className={`text-xs font-medium transition-colors duration-200 font-montserrat ${
                              isChecked ? "text-black" : "text-gray-700 group-hover:text-gray-900"
                            }`}
                          >
                            {service.label}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
                {form.formState.errors.servicios && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">
                    {form.formState.errors.servicios.message}
                  </p>
                )}
              </div>

              {/* Presupuesto */}
              <FormField
                label="Rango de presupuesto"
                icon={<FaStar />}
                error={form.formState.errors.presupuesto?.message}
              >
                <select {...form.register("presupuesto")} className={inputClass}>
                  <option value="">Selecciona un rango</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
              </FormField>

              <div className="flex flex-col sm:flex-row justify-between pt-2 gap-3 sm:gap-0">
                <button type="button" onClick={prevStep} className={btnSecondaryClass}>
                  <ChevronLeft />
                  <span>Anterior</span>
                </button>
                <button type="button" onClick={nextStep} className={btnPrimaryClass}>
                  <span>Siguiente</span>
                  <ChevronRight />
                </button>
              </div>
            </div>
          )}

          {/* ── PASO 3: Descripción del proyecto ─────────────────────── */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">
                  Tu Proyecto
                </h3>
                <p className="text-gray-600 font-montserrat text-sm">
                  Cuéntanos los detalles de tu idea
                </p>
              </div>

              <FormField
                label="Descripción del proyecto"
                icon={<FaLightbulb />}
                error={form.formState.errors.idea?.message}
              >
                <textarea
                  {...form.register("idea")}
                  className={`${inputClass} resize-none`}
                  placeholder="Cuéntanos sobre tu idea, objetivos, público objetivo, referencias que te gusten..."
                  rows="4"
                />
              </FormField>

              {/* Trust indicators */}
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                {[
                  { icon: <FaClock className="text-green-600 text-xs" />, text: "Respuesta en 24 horas" },
                  { icon: <FaShieldAlt className="text-green-600 text-xs" />, text: "Información segura y confidencial" },
                  { icon: <FaStar className="text-green-600 text-xs" />, text: "Consulta gratuita sin compromiso" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center space-x-2">
                    {icon}
                    <span className="text-xs font-montserrat text-gray-700">{text}</span>
                  </div>
                ))}
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaCheck className="text-green-600 text-sm" />
                  <span className="text-sm font-semibold text-green-800 font-montserrat">
                    Formulario completo
                  </span>
                </div>
                <p className="text-xs text-green-700 font-montserrat">
                  Haz clic en &quot;Enviar proyecto&quot; para continuar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-2 gap-3 sm:gap-0">
                <button type="button" onClick={prevStep} className={btnSecondaryClass}>
                  <ChevronLeft />
                  <span>Anterior</span>
                </button>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group px-6 py-3 rounded-xl font-semibold font-montserrat text-sm
                             transition-all duration-300 transform hover:scale-105 active:scale-95
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                             shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 w-full sm:w-auto
                             ${isSubmitting ? "bg-blue-600 text-white" : "bg-black text-white hover:bg-gray-900"}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="font-medium">Enviando proyecto...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-base group-hover:translate-x-1 transition-transform duration-200" />
                      <span className="font-medium">Enviar proyecto</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>

        {/* Logo */}
        <div className="text-center mt-6">
          <img src={imgD} alt="Studio Rosso" className="w-12 h-auto mx-auto opacity-60" />
        </div>
      </div>
    </div>
  );
}

// ─── Sub-componentes internos ──────────────────────────────────────────────
function FormField({ label, icon, error, children }) {
  return (
    <div>
      <label className="text-sm font-semibold text-gray-900 mb-2 font-montserrat flex items-center space-x-2 block">
        <span className="text-gray-700 text-sm">{icon}</span>
        <span>{label}</span>
      </label>
      {children}
      {error && (
        <p className="text-red-500 text-xs mt-1 font-montserrat">{error}</p>
      )}
    </div>
  );
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );
}

// ─── Clases reutilizables ──────────────────────────────────────────────────
const inputClass =
  "w-full px-3 py-2.5 bg-white/80 border border-gray-200 rounded-lg " +
  "focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 " +
  "transition-all duration-200 text-gray-800 font-montserrat text-sm";

const btnPrimaryClass =
  "px-4 sm:px-6 py-2.5 bg-black text-white rounded-lg font-semibold font-montserrat text-sm " +
  "hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 active:scale-95 " +
  "shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center";

const btnSecondaryClass =
  "px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold font-montserrat text-sm " +
  "hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 " +
  "flex items-center justify-center space-x-2 w-full sm:w-auto";
