'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import imgD from '../img/Logos/rossol-min.svg';

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
  servicios: z.array(z.string()).optional(),
  ciudad: z.string().min(2, {
    message: 'Por favor ingrese su ciudad.',
  }),
  idea: z.string().min(10, {
    message: 'Por favor cuéntenos más sobre su idea (mínimo 10 caracteres).',
  }),
});

const services = [
  { id: 'branding', label: 'Branding' },
  { id: 'fotografia', label: 'Fotografía' },
  { id: 'ilustracion', label: 'Ilustración' },
  { id: 'contenido-audiovisual', label: 'Contenido audiovisual para redes sociales' },
  { id: 'diseno-empaques', label: 'Diseño de empaques, etiquetas y material publicitario' },
  { id: 'diseno-ux', label: 'Diseño UX' },
  { id: 'desarrollo', label: 'Desarrollo de aplicaciones web, móviles y de escritorio' },
];

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      servicios: [],
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        alert('Formulario enviado correctamente');
      } else {
        alert('Hubo un error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('No se pudo enviar el formulario');
    }
  };
  

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-crema rounded-3xl m-4 ">
      <h2 className="text-2xl md:text-3xl font-dream text-black text-center mb-6">
        ¡Queremos conocer tu proyecto!
      </h2>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-century text-black font-semibold">Nombres</label>
            <input
              {...form.register('nombres')}
              className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
              placeholder="Escribe tu nombre"
            />
            {form.formState.errors.nombres && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.nombres.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-century text-black font-semibold">Apellidos</label>
            <input
              {...form.register('apellidos')}
              className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
              placeholder="Escribe tus apellidos"
            />
            {form.formState.errors.apellidos && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.apellidos.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-century text-black font-semibold">Correo</label>
            <input
              type="email"
              {...form.register('correo')}
              className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
              placeholder="correo@ejemplo.com"
            />
            {form.formState.errors.correo && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.correo.message}
              </p>
            )}
          </div>

          <div>
            <label className="block font-century text-black font-semibold">Número de contacto</label>
            <input
              {...form.register('numeroContacto')}
              className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
              placeholder="Tu número de contacto"
            />
            {form.formState.errors.numeroContacto && (
              <p className="text-red-500 text-sm mt-1">
                {form.formState.errors.numeroContacto.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block font-century text-black font-semibold">¿Qué servicio o servicios te interesan?</label>
          <div className="grid gap-2 mt-3">
            {services.map((service) => (
              <label key={service.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  value={service.id}
                  {...form.register('servicios')}
                  className="w-4 h-4 text-greenStem border-gray-300 rounded focus:ring-greenStem"
                />
                <span className="text-gray-700 font-century text-sm md:text-base">
                  {service.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-century text-black font-semibold">¿En qué ciudad te encuentras?</label>
          <input
            {...form.register('ciudad')}
            className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
            placeholder="Ciudad"
          />
          {form.formState.errors.ciudad && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.ciudad.message}
            </p>
          )}
        </div>

        <div>
          <label className="block font-century text-black font-semibold">Cuéntanos qué idea quieres llevar a cabo:</label>
          <textarea
            {...form.register('idea')}
            className="w-full border-gris rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-greenStem"
            placeholder="Escribe tu idea aquí..."
            rows="4"
          ></textarea>
          {form.formState.errors.idea && (
            <p className="text-red-500 text-sm mt-1">
              {form.formState.errors.idea.message}
            </p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="border-2 border-black text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition-all duration-300 text-sm md:text-base"
          >
            ¡Enviar mi idea!
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <img
          src={imgD}
          alt="Decorative"
          className="w-32 md:w-40 h-auto mx-auto opacity-80"
        />
      </div>
    </div>
  );
}
