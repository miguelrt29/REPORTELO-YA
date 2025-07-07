const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));


app.post('/enviar-enlace', async (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ mensaje: 'Correo inválido' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maicol123shl@gmail.com',
      pass: 'ckrp yoxj baeo dcmm',
    }
  });

  try {
    await transporter.sendMail({
      from: '"Soporte REPÓRTELO YA" <maicol123shl@gmail.com>',
      to: email,
      subject: 'Restablecimiento de contraseña',
      html: `
        <h2>Recuperación de contraseña</h2>
        <p>Haz clic en el siguiente enlace para restablecer tu contraseña:</p>
        <a href="http://localhost:3000/restablecer.html">Restablecer contraseña</a>
        <br/><br/>
        <small>Si no solicitaste este cambio, ignora este mensaje.</small>
      `
    });

    res.json({ mensaje: 'Correo enviado con éxito' });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ mensaje: 'Error al enviar el correo' });
  }
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'recuperar.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

