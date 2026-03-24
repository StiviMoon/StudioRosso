import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs.js";

// Inicializar EmailJS una sola vez al cargar el módulo
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

export const sendContactEmail = async (formValues) => {
  const templateParams = {
    from_name: `${formValues.nombres} ${formValues.apellidos}`,
    from_email: formValues.correo,
    phone: formValues.numeroContacto,
    city: formValues.ciudad,
    services: Array.isArray(formValues.servicios)
      ? formValues.servicios.join(", ")
      : formValues.servicios,
    budget: formValues.presupuesto,
    project_description: formValues.idea,
    to_name: "Studio Rosso",
    email: "studiorossoagency@gmail.com",
    reply_to: formValues.correo,
  };

  const response = await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    templateParams
  );

  if (response.status !== 200) {
    throw new Error("Email no enviado correctamente");
  }

  return response;
};
