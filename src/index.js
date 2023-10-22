const express = require("express");
const chatPDFRoutes = require("./routes/chatPDFRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de variables de entorno
require("dotenv").config();

// Middleware para analizar JSON en las solicitudes
app.use(express.json());

//Routes
app.use("/api/v1/consultPFD", chatPDFRoutes);

app.listen(PORT, () => {
  console.log(`• Server listening on port ${PORT} 🚀`);
});
