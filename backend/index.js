const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const Trailer = require("./models/trailersModel");
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
 
app.get("/trailers", async (req, res) => {
  try {
    const trailer = await Trailer.find({});
    res.status(200).json({trailer});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.get("/trailers/:id", async (req,res) => {
  try {
    const {id} = req.params;
    const trailer = await Trailer.findById(id);
    res.status(200).json(trailer);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

app.post("/trailers", async (req, res) => {
  try {
    const trailer = await Trailer.create(req.body);
    res.status(201).json({ trailer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});