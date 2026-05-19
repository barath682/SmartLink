const express = require("express");

const {
  createShortUrl,
  getUserUrls,
  deleteUrl,
  redirectUrl,
} = require("../controllers/url.controller");

const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

// Private routes
router.post("/create", protect, createShortUrl);
router.get("/my-urls", protect, getUserUrls);
router.delete("/:id", protect, deleteUrl);

// Public redirect route
router.get("/:shortCode", redirectUrl);

module.exports = router;