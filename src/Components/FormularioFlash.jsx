import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.js";
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";

const schema = z.object({
  nombre: z.string().min(2, { message: "Mínimo 2 caracteres." }),
  correo: z.string().email({ message: "Correo no válido." }),
  numero: z.string().min(5, { message: "Número de contacto válido." }),
  descripcion: z.string().min(10, { message: "Cuéntanos un poco más (mín. 10 caracteres)." }),
});

const FormularioFlash = ({ serviceName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }, []);

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: values.nombre,
          from_email: values.correo,
          phone: values.numero,
          city: "—",
          services: [serviceName ?? "Consulta general"],
          budget: "Consulta por servicio",
          project_description: `[Servicio: ${serviceName ?? "General"}]\n\n${values.descripcion}`,
          to_name: "Studio Rosso",
          email: "studiorossoagency@gmail.com",
          reply_to: values.correo,
        }
      );
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("No se pudo enviar. Intenta de nuevo o escríbenos por correo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg"
      noValidate
    >
      {serviceName && (
        <p className="text-sm font-medium text-greengrove mb-2">
          Solicitud para: {serviceName}
        </p>
      )}

      <div>
        <label htmlFor="flash-nombre" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <div className="relative">
          <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden />
          <input
            id="flash-nombre"
            type="text"
            placeholder="Tu nombre"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-greengrove focus:border-greengrove outline-none transition-all"
            {...register("nombre")}
            aria-invalid={!!errors.nombre}
            aria-describedby={errors.nombre ? "flash-nombre-error" : undefined}
          />
        </div>
        {errors.nombre && (
          <p id="flash-nombre-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.nombre.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="flash-correo" className="block text-sm font-medium text-gray-700 mb-1">
          Correo
        </label>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden />
          <input
            id="flash-correo"
            type="email"
            placeholder="tu@correo.com"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-greengrove focus:border-greengrove outline-none transition-all"
            {...register("correo")}
            aria-invalid={!!errors.correo}
            aria-describedby={errors.correo ? "flash-correo-error" : undefined}
          />
        </div>
        {errors.correo && (
          <p id="flash-correo-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.correo.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="flash-numero" className="block text-sm font-medium text-gray-700 mb-1">
          Número de contacto
        </label>
        <div className="relative">
          <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" aria-hidden />
          <input
            id="flash-numero"
            type="tel"
            placeholder="+57 300 123 4567"
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-greengrove focus:border-greengrove outline-none transition-all"
            {...register("numero")}
            aria-invalid={!!errors.numero}
            aria-describedby={errors.numero ? "flash-numero-error" : undefined}
          />
        </div>
        {errors.numero && (
          <p id="flash-numero-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.numero.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="flash-descripcion" className="block text-sm font-medium text-gray-700 mb-1">
          Descripción
        </label>
        <textarea
          id="flash-descripcion"
          rows={4}
          placeholder="Cuéntanos brevemente qué necesitas..."
          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-greengrove focus:border-greengrove outline-none transition-all resize-none"
          {...register("descripcion")}
          aria-invalid={!!errors.descripcion}
          aria-describedby={errors.descripcion ? "flash-descripcion-error" : undefined}
        />
        {errors.descripcion && (
          <p id="flash-descripcion-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.descripcion.message}
          </p>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 p-3 rounded-xl" role="alert">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-greengrove bg-greengrove/10 p-3 rounded-xl" role="status">
          Mensaje enviado. Te responderemos pronto.
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-3 px-6 bg-greengrove text-white font-semibold rounded-xl hover:bg-greengrove/90 focus:ring-2 focus:ring-greengrove focus:ring-offset-2 disabled:opacity-70 transition-all"
      >
        {isSubmitting ? (
          <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden />
        ) : (
          <>
            <FaPaperPlane className="text-sm" aria-hidden />
            Enviar consulta
          </>
        )}
      </button>
    </form>
  );
};

export default FormularioFlash;
