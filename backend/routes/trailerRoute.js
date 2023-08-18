const express = require("express");
const trailersController = require("../controllers/trailersController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/", trailersController.getAllTrailers);
router.get("/trailersAdmin", protect, trailersController.getAllTrailers);
router.get("/:id", trailersController.getTrailerById);
router.post("/", protect, trailersController.createTrailer);
router.put("/:id", protect, trailersController.updateTrailer);
router.delete("/:id", protect, trailersController.deleteTrailer);

module.exports = router;
