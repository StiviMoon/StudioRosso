'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLightbulb, FaCheck, FaPaperPlane, FaStar, FaClock, FaShieldAlt } from 'react-icons/fa';

import imgD from '../img/Logos/rosso-min.svg';

const formSchema = z.object({
  nombres: z.string().min(2, {
    message: 'El nombre debe tener al menos 2 caracteres.',
  }),
  apellidos: z.string().min(2, {
    message: 'Los apellidos deben tener al menos 2 caracteres.',
  }),
  correo: z.string().email({
    message: 'Por favor ingrese un correo electrónico válido.',
  }),
  numeroContacto: z.string().min(5, {
    message: 'Por favor ingrese un número de contacto válido.',
  }),
  servicios: z.array(z.string()).min(1, {
    message: 'Por favor seleccione al menos un servicio.',
  }),
  ciudad: z.string().min(2, {
    message: 'Por favor ingrese su ciudad.',
  }),
  presupuesto: z.string().min(1, {
    message: 'Por favor seleccione un rango de presupuesto.',
  }),
  idea: z.string().min(15, {
    message: 'Por favor cuéntenos más sobre su idea (mínimo 15 caracteres).',
  }),
});

const services = [
  { id: 'branding', label: 'Branding', icon: '🎨' },
  { id: 'fotografia', label: 'Fotografía', icon: '📸' },
  { id: 'ilustracion', label: 'Ilustración', icon: '✏️' },
  { id: 'contenido-audiovisual', label: 'Contenido audiovisual', icon: '🎬' },
  { id: 'diseno-empaques', label: 'Diseño de empaques', icon: '📦' },
  { id: 'diseno-ux', label: 'Diseño UX', icon: '💻' },
  { id: 'desarrollo', label: 'Desarrollo web', icon: '🚀' },
];

const budgetRanges = [
  { value: 'menos-2000000', label: 'Menos de $2,000,000 COP' },
  { value: '2000000-5000000', label: '$2,000,000 - $5,000,000 COP' },
  { value: '5000000-10000000', label: '$5,000,000 - $10,000,000 COP' },
  { value: '10000000-20000000', label: '$10,000,000 - $20,000,000 COP' },
  { value: 'mas-20000000', label: 'Más de $20,000,000 COP' },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      servicios: [],
      presupuesto: '',
    },
  });

  const onSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        setSubmitSuccess(true);
        form.reset();
        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        alert('Hubo un error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('No se pudo enviar el formulario');
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
          <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaCheck className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 font-dream">¡Mensaje Enviado!</h3>
            <p className="text-gray-600 font-century">Gracias por contactarnos. Nos pondremos en contacto contigo pronto.</p>
          </div>
        </div>
      )}

      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 font-dream">
            ¡Cuéntanos tu proyecto!
          </h2>
          <p className="text-gray-600 font-century">
            Juntos haremos realidad tu visión digital
          </p>
          
          {/* Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-century text-gray-600">Paso {currentStep} de 3</span>
              <span className="text-sm font-century text-gray-600">{Math.round((currentStep / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-black h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">Información Personal</h3>
                <p className="text-gray-600 font-century text-sm">Comencemos con tus datos básicos</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                    <FaUser className="text-gray-600 text-sm" />
                    <span>Nombres</span>
                  </label>
                  <input
                    {...form.register('nombres')}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                             transition-all duration-200 text-gray-800 font-century text-sm"
                    placeholder="Tu nombre"
                  />
                  {form.formState.errors.nombres && (
                    <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.nombres.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                    <FaUser className="text-gray-600 text-sm" />
                    <span>Apellidos</span>
                  </label>
                  <input
                    {...form.register('apellidos')}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                             transition-all duration-200 text-gray-800 font-century text-sm"
                    placeholder="Tus apellidos"
                  />
                  {form.formState.errors.apellidos && (
                    <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.apellidos.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                    <FaEnvelope className="text-gray-600 text-sm" />
                    <span>Email</span>
                  </label>
                  <input
                    type="email"
                    {...form.register('correo')}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                             transition-all duration-200 text-gray-800 font-century text-sm"
                    placeholder="tu@email.com"
                  />
                  {form.formState.errors.correo && (
                    <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.correo.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                    <FaPhone className="text-gray-600 text-sm" />
                    <span>Teléfono</span>
                  </label>
                  <input
                    {...form.register('numeroContacto')}
                    className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                             focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                             transition-all duration-200 text-gray-800 font-century text-sm"
                    placeholder="Tu número"
                  />
                  {form.formState.errors.numeroContacto && (
                    <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.numeroContacto.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                  <FaMapMarkerAlt className="text-gray-600 text-sm" />
                  <span>Ciudad</span>
                </label>
                <input
                  {...form.register('ciudad')}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                           transition-all duration-200 text-gray-800 font-century text-sm"
                  placeholder="¿En qué ciudad te encuentras?"
                />
                {form.formState.errors.ciudad && (
                  <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.ciudad.message}</p>
                )}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-black text-white rounded-lg font-semibold font-century text-sm
                           hover:bg-gray-900 transition-all duration-200 transform hover:scale-105
                           shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Siguiente</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Project Details */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">Detalles del Proyecto</h3>
                <p className="text-gray-600 font-century text-sm">Cuéntanos más sobre lo que necesitas</p>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-3 font-century flex items-center space-x-2">
                  <FaLightbulb className="text-gray-600 text-sm" />
                  <span>Servicios de interés</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {services.map((service) => (
                    <label key={service.id} className="group cursor-pointer">
                      <div className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 
                                      ${form.watch('servicios')?.includes(service.id)
                                        ? 'border-black bg-black/5 shadow-md'
                                        : 'border-gray-200 hover:border-gray-300'
                                      }`}>
                        <input
                          type="checkbox"
                          value={service.id}
                          {...form.register('servicios')}
                          className="sr-only"
                        />
                        <span className="text-lg">{service.icon}</span>
                        <span className={`text-xs font-medium transition-colors duration-200 font-century
                                        ${form.watch('servicios')?.includes(service.id)
                                          ? 'text-black'
                                          : 'text-gray-700 group-hover:text-gray-900'
                                        }`}>
                          {service.label}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
                {form.formState.errors.servicios && (
                  <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.servicios.message}</p>
                )}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                  <FaStar className="text-gray-600 text-sm" />
                  <span>Rango de presupuesto</span>
                </label>
                <select
                  {...form.register('presupuesto')}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                           transition-all duration-200 text-gray-800 font-century text-sm"
                >
                  <option value="">Selecciona un rango</option>
                  {budgetRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {form.formState.errors.presupuesto && (
                  <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.presupuesto.message}</p>
                )}
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold font-century text-sm
                           hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Anterior</span>
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2 bg-black text-white rounded-lg font-semibold font-century text-sm
                           hover:bg-gray-900 transition-all duration-200 transform hover:scale-105
                           shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  <span>Siguiente</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Project Description */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1 font-dream">Tu Proyecto</h3>
                <p className="text-gray-600 font-century text-sm">Cuéntanos los detalles de tu idea</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2 font-century flex items-center space-x-2">
                  <FaLightbulb className="text-gray-600 text-sm" />
                  <span>Descripción del proyecto</span>
                </label>
                <textarea
                  {...form.register('idea')}
                  className="w-full px-3 py-2 bg-white/80 border border-gray-200 rounded-lg 
                           focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-black/30 
                           transition-all duration-200 text-gray-800 font-century text-sm resize-none"
                  placeholder="Cuéntanos sobre tu idea, objetivos, público objetivo, referencias que te gusten..."
                  rows="4"
                />
                {form.formState.errors.idea && (
                  <p className="text-red-500 text-xs mt-1 font-century">{form.formState.errors.idea.message}</p>
                )}
              </div>

              {/* Trust indicators */}
              <div className="bg-gray-50 rounded-lg p-3 space-y-2">
                <div className="flex items-center space-x-2">
                  <FaClock className="text-green-600 text-xs" />
                  <span className="text-xs font-century text-gray-700">Respuesta en 24 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-green-600 text-xs" />
                  <span className="text-xs font-century text-gray-700">Información segura y confidencial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaStar className="text-green-600 text-xs" />
                  <span className="text-xs font-century text-gray-700">Consulta gratuita sin compromiso</span>
                </div>
              </div>

              <div className="flex justify-between pt-2">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold font-century text-sm
                           hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Anterior</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-6 py-2 bg-black text-white rounded-lg font-semibold font-century text-sm
                           hover:bg-gray-900 transition-all duration-200 transform hover:scale-105
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                           shadow-lg hover:shadow-xl flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm group-hover:translate-x-1 transition-transform duration-200" />
                      <span>Enviar proyecto</span>
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
