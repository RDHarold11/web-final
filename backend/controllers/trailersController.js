const Trailer = require("../models/trailersModel");

const trailersController = {
  getAllTrailers: async (req, res) => {
    try {
      const trailers = await Trailer.find({});
      res.status(200).json({ trailers });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  getTrailerById: async (req, res) => {
    try {
      const { id } = req.params;
      const trailer = await Trailer.findById(id);
      res.status(200).json(trailer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createTrailer: async (req, res) => {
    try {
      const trailer = await Trailer.create(req.body);
      res.status(201).json({ trailer });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  updateTrailer: async (req, res) => {
    try {
      const { id } = req.params;
      const trailer = await Trailer.findByIdAndUpdate(id, req.body);
      if (!trailer) {
        return res
          .status(404)
          .json({ message: `No se encontró ningún trailer con ID ${id}` });
      }
      const trailerUpdate = await Trailer.findById(id);
      res.status(200).json(trailerUpdate);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteTrailer: async (req, res) => {
    try {
      const { id } = req.params;
      const trailer = await Trailer.findByIdAndRemove(id);
      if (!trailer) {
        return res
          .status(404)
          .json({ message: `No se encontró ningún trailer con ID ${id}` });
      }
      res.status(200).json(trailer);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = trailersController;
