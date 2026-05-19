const express = require("express");
const { getUrlAnalytics } = require("../controllers/analytics.controller");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.get("/:urlId", protect, getUrlAnalytics);

module.exports = router;