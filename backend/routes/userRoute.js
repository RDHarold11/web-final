const express = require('express');
const User = require("../models/userModel")
const router = express.Router();

router.get("/users", async (req, res) => {

  try {
    const users = await User.find({})
    res.status(200).json({users});
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/users", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error.message });
  }
});

router.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id,req.body);
    if(!user){
      return res.status(404).json({ message: `Usuario con el ID ${id} no encontrado` });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/users/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findByIdAndDelete(id);
    if(!user){
      return res.status(404).json({message: `Usuario con el ID ${id} no encontrado`});
    }
    res.status(200).json({ message: `Usuario con el ID ${id} eliminado correctamente` });
  } catch (error) {
    res.status(500).json({message: error.message});
  }
});


module.exports = router;