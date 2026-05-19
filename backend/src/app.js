// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(cookieParser());

// // Test Route
// app.get("/", (req, res) => {
//   res.send("SmartLink Backend Running");
// });

// // Export app
// module.exports = app;

// const express = require("express");
// const cors = require("cors");
// const helmet = require("helmet");
// const morgan = require("morgan");
// const cookieParser = require("cookie-parser");

// const authRoutes = require("./routes/auth.routes");
// const urlRoutes = require("./routes/url.routes");
// const analyticsRoutes = require("./routes/analytics.routes");

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("SmartLink Backend Running");
// });

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/url", urlRoutes);
// app.use("/", urlRoutes);
// app.use("/api/analytics", analyticsRoutes);

// module.exports = app;



const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth.routes");
const urlRoutes = require("./routes/url.routes");
const analyticsRoutes = require("./routes/analytics.routes");

const {
  authLimiter,
  urlLimiter,
} = require("./middleware/rateLimit.middleware");
const {
  notFound,
  errorHandler,
} = require("./middleware/error.middleware");

const { redirectUrl } = require("./controllers/url.controller");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());

// Home Route
app.get("/", (req, res) => {
  res.send("SmartLink Backend Running");
});

// API Routes
app.use(
  "/api/auth",
  authLimiter,
  authRoutes
);

app.use(
  "/api/url",
  urlLimiter,
  urlRoutes
);

app.use(
  "/api/analytics",
  analyticsRoutes
);

// Redirect Route (keep last)
app.get("/:shortCode", redirectUrl);

app.use(notFound);
app.use(errorHandler);

// Export app
module.exports = app;