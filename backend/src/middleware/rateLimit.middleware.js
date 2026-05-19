const rateLimit = require("express-rate-limit");

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: {
    message: "Too many login/register attempts. Try again later.",
  },
});

const urlLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 50,
  message: {
    message: "Too many URL requests. Try again later.",
  },
});

module.exports = {
  authLimiter,
  urlLimiter,
};