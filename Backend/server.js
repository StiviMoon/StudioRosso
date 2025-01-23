const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Carga las variables de entorno

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el envío del formulario
app.post('/send-email', async (req, res) => {
  const { nombres, apellidos, correo, numeroContacto, servicios, ciudad, idea } = req.body;

  // Configuración de transporte para nodemailer
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Cambia esto si usas otro proveedor como Outlook
    auth: {
      user: process.env.EMAIL_USER, // Tu correo electrónico
      pass: process.env.EMAIL_PASS, // Contraseña de aplicación generada
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER, // Correo desde el cual se envía
    to: process.env.EMAIL_USER,   // Correo receptor (puedes cambiarlo si es diferente)
    subject: 'Nuevo contacto desde el formulario',
    text: `
      Nombre: ${nombres} ${apellidos}
      Correo: ${correo}
      Número de contacto: ${numeroContacto}
      Servicios: ${servicios.join(', ')}
      Ciudad: ${ciudad}
      Idea: ${idea}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error al enviar el correo' });
  }
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});


console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
