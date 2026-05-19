// const Url = require("../models/url.model");
// const Visit = require("../models/visit.model");

// // Get analytics for one URL
// const getUrlAnalytics = async (req, res) => {
//   try {
//     const { urlId } = req.params;

//     const url = await Url.findById(urlId);

//     if (!url) {
//       return res.status(404).json({
//         message: "URL not found",
//       });
//     }

//     // Ownership check
//     if (url.user.toString() !== req.user._id.toString()) {
//       return res.status(401).json({
//         message: "Unauthorized",
//       });
//     }

//     const visits = await Visit.find({ url: urlId }).sort({
//       visitedAt: -1,
//     });

//     res.status(200).json({
//       url,
//       totalClicks: url.clickCount,
//       lastVisited: visits.length > 0 ? visits[0].visitedAt : null,
//       recentVisits: visits.slice(0, 10),
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "Analytics fetch failed",
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//   getUrlAnalytics,
// };



const Url = require("../models/url.model");
const Visit = require("../models/visit.model");

const getUrlAnalytics = async (req, res) => {
  try {
    const { urlId } = req.params;

    const url = await Url.findById(urlId);

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

    const visits = await Visit.find({ url: urlId }).sort({
      visitedAt: -1,
    });

    // Chart data: clicks per date
    const clicksByDate = {};

    visits.forEach((visit) => {
      const date = new Date(visit.visitedAt)
        .toISOString()
        .split("T")[0];

      clicksByDate[date] = (clicksByDate[date] || 0) + 1;
    });

    const chartData = Object.keys(clicksByDate).map((date) => ({
      date,
      clicks: clicksByDate[date],
    }));

    res.status(200).json({
      url,
      totalClicks: url.clickCount,
      lastVisited: visits.length > 0 ? visits[0].visitedAt : null,
      recentVisits: visits.slice(0, 10),
      chartData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Analytics fetch failed",
      error: error.message,
    });
  }
};

module.exports = {
  getUrlAnalytics,
};