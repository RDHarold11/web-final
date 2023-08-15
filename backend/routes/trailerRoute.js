const express = require ('express');
const Trailer = require("../models/trailersModel");

const router = express.Router();
router.get("/", async (req, res) => {
    try {
      const trailer = await Trailer.find({});
      res.status(200).json({trailer});
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  });
  
  router.get("/:id", async (req,res) => {
    try {
      const {id} = req.params;
      const trailer = await Trailer.findById(id);
      res.status(200).json(trailer);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  });
  
  router.post("/", async (req, res) => {
    try {
      const trailer = await Trailer.create(req.body);
      res.status(201).json({ trailer });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: error.message });
    }
  });
  
  router.put("/:id", async (req,res) => {
    try {
      const {id} = req.params;
      const trailer = await Trailer.findByIdAndUpdate(id,req.body);
      if(!trailer){
        return res.status(404).json({message: 'No se pudo encontrar ningun trailer con este ID ${id}'});
      }
      const trailerUpdate = await Trailer.findById(id);
      res.status(200).json(trailerUpdate);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  });
  
  router.delete("/:id", async (req,res) => {
    try {
      const {id} = req.params;
      const trailer = await Trailer.findByIdAndRemove(id);
      if(!trailer){
        return res.status(404).json({message: 'No se pudo encontrar ningun trailer con este ID ${id}'});
      }
      res.status(200).json(trailer);
    } catch (error) {
      res.status(500).json({message: error.message});
    }
  });

  module.exports = router;