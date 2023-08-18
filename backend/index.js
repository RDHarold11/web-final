const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const cors = require("cors");
//const Trailer = require("./models/trailersModel"); //eliminar
const trailersRoutes = require("./routes/trailerRoute");
const userRouter = require("./routes/userRoute");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/trailers", trailersRoutes);
app.use("/api/", userRouter);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
