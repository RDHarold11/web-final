const express = require("express");
const trailersController = require("../controllers/trailersController");

const router = express.Router();

router.get("/", trailersController.getAllTrailers);
router.get("/:id", trailersController.getTrailerById);
router.post("/", trailersController.createTrailer);
router.put("/:id", trailersController.updateTrailer);
router.delete("/:id", trailersController.deleteTrailer);

module.exports = router;