const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Configuración del motor de plantillas PUG
app.set('view engine', 'pug');
app.set('views', './views');

// Ruta simple para probar Pug
//http://localhost:3000/
app.get("/", (req, res) => {
  res.render('home');
});

// Otra ruta de ejemplo
app.get("/about", (req, res) => {
  res.render('about');
});

// Ruta dinámica de ejemplo
app.get("/contact", (req, res) => {
  res.render('contact');
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});