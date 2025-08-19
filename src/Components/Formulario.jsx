"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.js";
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

import imgD from "/img/Logos/rosso-min.svg";

const formSchema = z.object({
  nombres: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  apellidos: z.string().min(2, {
    message: "Los apellidos deben tener al menos 2 caracteres.",
  }),
  correo: z.string().email({
    message: "Por favor ingrese un correo electrónico válido.",
  }),
  numeroContacto: z.string().min(5, {
    message: "Por favor ingrese un número de contacto válido.",
  }),
  servicios: z.array(z.string()).min(1, {
    message: "Por favor seleccione al menos un servicio.",
  }),
  ciudad: z.string().min(2, {
    message: "Por favor ingrese su ciudad.",
  }),
  presupuesto: z.string().min(1, {
    message: "Por favor seleccione un rango de presupuesto.",
  }),
  idea: z.string().min(15, {
    message: "Por favor cuéntenos más sobre su idea (mínimo 15 caracteres).",
  }),
});

const services = [
  { id: "branding", label: "Branding", icon: "🎨" },
  { id: "fotografia", label: "Fotografía", icon: "📸" },
  { id: "ilustracion", label: "Ilustración", icon: "✏️" },
  { id: "contenido-audiovisual", label: "Contenido audiovisual", icon: "🎬" },
  { id: "diseno-empaques", label: "Diseño de empaques", icon: "📦" },
  { id: "diseno-ux", label: "Diseño UX", icon: "💻" },
  { id: "desarrollo", label: "Desarrollo web", icon: "🚀" },
];

const budgetRanges = [
  { value: "menos-2000000", label: "Menos de $2,000,000 COP" },
  { value: "2000000-5000000", label: "$2,000,000 - $5,000,000 COP" },
  { value: "5000000-10000000", label: "$5,000,000 - $10,000,000 COP" },
  { value: "10000000-20000000", label: "$10,000,000 - $20,000,000 COP" },
  { value: "mas-20000000", label: "Más de $20,000,000 COP" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      servicios: [],
      presupuesto: "",
    },
  });

  // Inicializar EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    // Debug: Mostrar los datos que se van a enviar
    console.log("🚀 Iniciando envío del formulario...");
    console.log("📧 Configuración EmailJS:", EMAILJS_CONFIG);
    console.log("📝 Datos del formulario:", values);

    try {
      // Preparar los datos para el template de EmailJS
      const templateParams = {
        from_name: `${values.nombres} ${values.apellidos}`,
        from_email: values.correo,
        phone: values.numeroContacto,
        city: values.ciudad,
        services: values.servicios, // Enviamos el array completo
        budget: values.presupuesto,
        project_description: values.idea,
        to_name: "Studio Rosso",
        email: "studiorossoagency@gmail.com", // Campo que espera el template
        reply_to: values.correo, // Campo para responder al cliente
      };

      console.log("📨 Parámetros del template:", templateParams);

      // Enviar email usando EmailJS
      console.log("📤 Enviando email con EmailJS...");
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log("✅ Respuesta de EmailJS:", response);

      if (response.status === 200) {
        setSubmitSuccess(true);
        form.reset();
        setCurrentStep(1);
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      // Mostrar mensaje de error más específico
      let errorMessage =
        "No se pudo enviar el formulario. Por favor, inténtalo de nuevo.";

      if (error.message?.includes("Configuration incomplete")) {
        errorMessage =
          "Error de configuración. Por favor, contacta al administrador.";
      } else if (error.message?.includes("Service not found")) {
        errorMessage =
          "Error del servicio de email. Por favor, inténtalo más tarde.";
      } else if (error.message?.includes("Template not found")) {
        errorMessage =
          "Error del template de email. Por favor, contacta al administrador.";
      }

      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Success Message */}
      {submitSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md mx-4 text-center shadow-2xl border border-green-100">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCheck className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-dream">
              ¡Proyecto Enviado!
            </h3>
            <p className="text-gray-600 font-montserrat mb-6 leading-relaxed">
              Gracias por compartir tu proyecto con nosotros.
              <br />
              <span className="font-semibold text-green-600">
                Nos pondremos en contacto contigo en las próximas 24 horas.
              </span>
            </p>
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-sm text-green-800 font-montserrat">
                📧 Revisa tu email para confirmar que recibimos tu mensaje
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 font-dream">
            ¡Cuéntanos tu proyecto!
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-montserrat">
            Juntos haremos realidad tu visión digital
          </p>

          {/* Progress Bar */}
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
                className="bg-black h-1.5 sm:h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
          id="contact-form"
        >
          {/* Step 1: Personal Information */}
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
                <div>
                  <label className="text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                    <FaUser className="text-gray-600 text-sm" />
                    <span>Nombres</span>
                  </label>
                  <input
                    {...form.register("nombres")}
                    className="w-full px-3 py-2.5 bg-white/80 border border-gray-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                             transition-all duration-200 text-gray-800 font-montserrat text-sm"
                    placeholder="Tu nombre"
                  />
                  {form.formState.errors.nombres && (
                    <p className="text-red-500 text-xs mt-1 font-montserrat">
                      {form.formState.errors.nombres.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                    <FaUser className="text-gray-600 text-sm" />
                    <span>Apellidos</span>
                  </label>
                  <input
                    {...form.register("apellidos")}
                    className="w-full px-3 py-2.5 bg-white/80 border border-gray-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                             transition-all duration-200 text-gray-800 font-montserrat text-sm"
                    placeholder="Tus apellidos"
                  />
                  {form.formState.errors.apellidos && (
                    <p className="text-red-500 text-xs mt-1 font-montserrat">
                      {form.formState.errors.apellidos.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                    <FaEnvelope className="text-gray-600 text-sm" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    {...form.register("correo")}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                             transition-all duration-200 text-gray-800 font-montserrat text-sm"
                    placeholder="tu@email.com"
                  />
                  {form.formState.errors.correo && (
                    <p className="text-red-500 text-xs mt-1 font-montserrat">
                      {form.formState.errors.correo.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className=" text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                    <FaPhone className="text-gray-600 text-sm" />
                    <span>Teléfono</span>
                  </label>
                  <input
                    {...form.register("numeroContacto")}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                             transition-all duration-200 text-gray-800 font-montserrat text-sm"
                    placeholder="Tu número"
                  />
                  {form.formState.errors.numeroContacto && (
                    <p className="text-red-500 text-xs mt-1 font-montserrat">
                      {form.formState.errors.numeroContacto.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className=" text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-600 text-sm" />
                  <span>Ciudad</span>
                </label>
                <input
                  {...form.register("ciudad")}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                           transition-all duration-200 text-gray-800 font-montserrat text-sm"
                  placeholder="¿En qué ciudad te encuentras?"
                />
                {form.formState.errors.ciudad && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">
                    {form.formState.errors.ciudad.message}
                  </p>
                )}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 sm:px-6 py-2.5 sm:py-2 bg-black text-white rounded-lg font-semibold font-montserrat text-sm
                           hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 active:scale-95
                           shadow-lg hover:shadow-xl flex items-center space-x-2 w-full sm:w-auto justify-center"
                >
                  <span>Siguiente</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
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

              {/* Services */}
              <div>
                <label className=" text-sm font-semibold text-gray-800 mb-3 font-montserrat flex items-center space-x-2">
                  <FaLightbulb className="text-gray-600 text-sm" />
                  <span>Servicios de interés</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <label key={service.id} className="group cursor-pointer">
                      <div
                        className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200
                                      ${
                                        form
                                          .watch("servicios")
                                          ?.includes(service.id)
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
                          className={`text-xs font-medium transition-colors duration-200 font-montserrat
                                        ${
                                          form
                                            .watch("servicios")
                                            ?.includes(service.id)
                                            ? "text-black"
                                            : "text-gray-700 group-hover:text-gray-900"
                                        }`}
                        >
                          {service.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {form.formState.errors.servicios && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">
                    {form.formState.errors.servicios.message}
                  </p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className=" text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                  <FaStar className="text-gray-600 text-sm" />
                  <span>Rango de presupuesto</span>
                </label>
                <select
                  {...form.register("presupuesto")}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                           transition-all duration-200 text-gray-800 font-montserrat text-sm"
                >
                  <option value="">Selecciona un rango</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {form.formState.errors.presupuesto && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">
                    {form.formState.errors.presupuesto.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-2 gap-3 sm:gap-0">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold font-montserrat text-sm
                           hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-4 sm:px-6 py-2.5 bg-black text-white rounded-lg font-semibold font-montserrat text-sm
                           hover:bg-gray-900 transition-all duration-200 transform hover:scale-105 active:scale-95
                           shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <span>Siguiente</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project Description */}
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

              <div>
                <label className=" text-sm font-semibold text-gray-800 mb-2 font-montserrat flex items-center space-x-2">
                  <FaLightbulb className="text-gray-600 text-sm" />
                  <span>Descripción del proyecto</span>
                </label>
                <textarea
                  {...form.register("idea")}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30
                           transition-all duration-200 text-gray-800 font-montserrat text-sm resize-none"
                  placeholder="Cuéntanos sobre tu idea, objetivos, público objetivo, referencias que te gusten..."
                  rows="4"
                />
                {form.formState.errors.idea && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">
                    {form.formState.errors.idea.message}
                  </p>
                )}
              </div>

              {/* Trust indicators */}
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-green-600 text-xs" />
                  <span className="text-xs font-montserrat text-gray-700">
                    Respuesta en 24 horas
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-green-600 text-xs" />
                  <span className="text-xs font-montserrat text-gray-700">
                    Información segura y confidencial
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-green-600 text-xs" />
                  <span className="text-xs font-montserrat text-gray-700">
                    Consulta gratuita sin compromiso
                  </span>
                </div>
              </div>

              {/* Ready to send indicator */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <FaCheck className="text-green-600 text-sm" />
                  <span className="text-sm font-semibold text-green-800 font-montserrat">
                    Formulario completo
                  </span>
                </div>
                <p className="text-xs text-green-700 font-montserrat">
                  Todos los campos están completos. Haz clic en &quot;Enviar
                  proyecto&quot; para continuar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between pt-2 gap-3 sm:gap-0">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold font-montserrat text-sm
                           hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2 w-full sm:w-auto"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Anterior</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() => {
                    console.log("🖱️ Botón clickeado");
                    console.log("📋 Estado del formulario:", form.formState);
                    console.log(
                      "✅ ¿Formulario válido?",
                      form.formState.isValid
                    );
                    console.log("❌ Errores:", form.formState.errors);
                  }}
                  className={`group px-6 py-3 rounded-xl font-semibold font-montserrat text-sm
                           transition-all duration-300 transform hover:scale-105 active:scale-95
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                           shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 w-full
                           ${
                             isSubmitting
                               ? "bg-blue-600 text-white cursor-not-allowed"
                               : "bg-black text-white hover:bg-gray-900 cursor-pointer"
                           }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
          <img
            src={imgD}
            alt="Agencia Rosso"
            className="w-12 h-auto mx-auto opacity-60"
          />
        </div>
      </div>
    </div>
  );
}
