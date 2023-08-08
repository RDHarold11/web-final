const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/api/trailers", (req, res) => {
  res.json({ msg: "Hola Mundo" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
