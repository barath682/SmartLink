// const { nanoid } = require("nanoid");
// const validator = require("validator");
// const QRCode = require("qrcode");
// const useragent = require("useragent");
// const geoip = require("geoip-lite");

// const Url = require("../models/url.model");
// const Visit = require("../models/visit.model");
// const generateCode = require("../utils/generateCode");
// const { isValidUrl } = require("../utils/validator");


// // Create Short URL
// const createShortUrl = async (req, res) => {
//   try {
//     const { originalUrl, customAlias, expiryDate } = req.body;

//     // Validate URL
//     if (!validator.isURL(originalUrl)) {
//       return res.status(400).json({
//         message: "Invalid URL",
//       });
//     }

//     // Generate short code
//     // let shortCode = customAlias || nanoid(6);
//     let shortCode = customAlias || generateCode();

//     // Check duplicate short code
//     const existingCode = await Url.findOne({ shortCode });

//     if (existingCode) {
//       return res.status(400).json({
//         message: "Short code already exists",
//       });
//     }

//     // Generate QR code
//     const qrCode = await QRCode.toDataURL(
//     //   `http://localhost:5000/${shortCode}`
//     `${process.env.BASE_URL}/${shortCode}`
//     );

//     // Save URL
//     const url = await Url.create({
//       user: req.user._id,
//       originalUrl,
//       shortCode,
//       customAlias,
//       qrCode,
//       expiryDate,
//     });

//     res.status(201).json({
//       message: "Short URL created",
//       data: url,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Create URL failed",
//       error: error.message,
//     });
//   }
// };


// // Get All URLs of Logged-in User
// const getUserUrls = async (req, res) => {
//   try {
//     const urls = await Url.find({
//       user: req.user._id,
//     }).sort({ createdAt: -1 });

//     res.status(200).json(urls);
//   } catch (error) {
//     res.status(500).json({
//       message: "Failed to fetch URLs",
//       error: error.message,
//     });
//   }
// };


// // Delete URL
// const deleteUrl = async (req, res) => {
//   try {
//     const url = await Url.findById(req.params.id);

//     if (!url) {
//       return res.status(404).json({
//         message: "URL not found",
//       });
//     }

//     // Check ownership
//     if (url.user.toString() !== req.user._id.toString()) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     await url.deleteOne();

//     res.status(200).json({
//       message: "URL deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Delete failed",
//       error: error.message,
//     });
//   }
// };


// // Redirect Short URL
// const redirectUrl = async (req, res) => {
//   try {
//     const { shortCode } = req.params;

//     const url = await Url.findOne({ shortCode });

//     if (!url) {
//       return res.status(404).json({
//         message: "Short URL not found",
//       });
//     }

//     // Expiry check
//     if (url.expiryDate && new Date() > url.expiryDate) {
//       return res.status(400).json({
//         message: "Link expired",
//       });
//     }

//     // Increase click count
//     url.clickCount += 1;

//     await url.save();

//     // Device/browser analytics
//     const agent = useragent.parse(req.headers["user-agent"]);

//     // IP address
//     const ip =
//       req.headers["x-forwarded-for"] ||
//       req.socket.remoteAddress;

//     // Geo location
//     const geo = geoip.lookup(ip);

//     // Save visit
//     await Visit.create({
//       url: url._id,
//       ipAddress: ip,
//       browser: agent.family,
//       os: agent.os.family,
//       device: agent.device.family,
//       country: geo?.country || "Unknown",
//       city: geo?.city || "Unknown",
//     });

//     // Redirect
//     res.redirect(url.originalUrl);
//   } catch (error) {
//     res.status(500).json({
//       message: "Redirect failed",
//       error: error.message,
//     });
//   }
// };


// module.exports = {
//   createShortUrl,
//   getUserUrls,
//   deleteUrl,
//   redirectUrl,
// };


const QRCode = require("qrcode");
const useragent = require("useragent");
const geoip = require("geoip-lite");

const Url = require("../models/url.model");
const Visit = require("../models/visit.model");
const generateCode = require("../utils/generateCode");
const { isValidUrl } = require("../utils/validator");

// Create Short URL
const createShortUrl = async (req, res) => {
  try {
    const { originalUrl, customAlias, expiryDate } = req.body;
    // Expiry date validation
if (expiryDate) {
  const selectedDate = new Date(expiryDate);

  if (selectedDate < new Date()) {
    return res.status(400).json({
      message: "Expiry date cannot be in the past",
    });
  }
}

    // Validate URL
    if (!originalUrl || !isValidUrl(originalUrl)) {
      return res.status(400).json({
        message: "Invalid URL",
      });
    }

    // Expiry date validation
    if (expiryDate) {
      const selectedDate = new Date(expiryDate);

      if (selectedDate < new Date()) {
        return res.status(400).json({
          message: "Expiry date cannot be in the past",
        });
      }
    }

    // Generate short code
    const shortCode = customAlias || generateCode();

    // Check duplicate short code
    const existingCode = await Url.findOne({ shortCode });

    if (existingCode) {
      return res.status(400).json({
        message: "Short code already exists",
      });
    }

    // Generate QR code
    const qrCode = await QRCode.toDataURL(
      `${process.env.BASE_URL}/${shortCode}`
    );

    // Save URL
    const url = await Url.create({
      user: req.user._id,
      originalUrl,
      shortCode,
      customAlias: customAlias || null,
      qrCode,
      expiryDate: expiryDate || null,
    });

    res.status(201).json({
      message: "Short URL created",
      data: url,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create URL failed",
      error: error.message,
    });
  }
};

// Get All URLs
const getUserUrls = async (req, res) => {
  try {
    const urls = await Url.find({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch URLs",
      error: error.message,
    });
  }
};

// Delete URL
const deleteUrl = async (req, res) => {
  try {
    const url = await Url.findById(req.params.id);

    if (!url) {
      return res.status(404).json({
        message: "URL not found",
      });
    }

    if (url.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    await url.deleteOne();

    res.status(200).json({
      message: "URL deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
      error: error.message,
    });
  }
};

// Redirect Short URL
const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({
        message: "Short URL not found",
      });
    }

    if (!url.isActive) {
      return res.status(400).json({
        message: "Link is not active",
      });
    }

    if (url.expiryDate && new Date() > new Date(url.expiryDate)) {
      return res.status(400).json({
        message: "Link expired",
      });
    }

    url.clickCount += 1;
    await url.save();

    const agent = useragent.parse(req.headers["user-agent"] || "");

    let ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "";

    ip = ip.replace("::ffff:", "");

    const geo = geoip.lookup(ip);

    await Visit.create({
      url: url._id,
      ipAddress: ip,
      browser: agent.family || "Unknown",
      os: agent.os?.family || "Unknown",
      device: agent.device?.family || "Unknown",
      country: geo?.country || "Unknown",
      city: geo?.city || "Unknown",
      visitedAt: new Date(),
    });

    return res.redirect(url.originalUrl);
  } catch (error) {
    res.status(500).json({
      message: "Redirect failed",
      error: error.message,
    });
  }
};

module.exports = {
  createShortUrl,
  getUserUrls,
  deleteUrl,
  redirectUrl,
};