// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import Navbar from "../components/Navbar";
// import Loader from "../components/Loader";
// import Chart from "../components/Chart";

// import { getUrlAnalytics } from "../api/analytics.api";

// function Analytics() {
//   const { urlId } = useParams();

//   const [analytics, setAnalytics] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Fetch analytics
//   const fetchAnalytics = async () => {
//     try {
//       const data = await getUrlAnalytics(urlId, token);

//       setAnalytics(data);
//     } catch (error) {
//       toast.error("Failed to load analytics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAnalytics();
//   }, []);

// //   if (loading) {
// //     return (
// //       <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
// //         Loading analytics...
// //       </div>
// //     );
// //   }
// if (loading) {
//   return <Loader />;
// }

//   return (
    
//     <div className="min-h-screen bg-slate-900 text-white p-6">
    
    

//       {/* Back */}
//       <div className="mb-6">
//         <Link
//           to="/dashboard"
//           className="text-blue-400 hover:underline"
//         >
//           ← Back to Dashboard
//         </Link>
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl font-bold mb-8">
//         URL Analytics
//       </h1>

//       {/* Analytics Card */}
//       <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">

//         {/* Original URL */}
//         <div className="mb-5">
//           <p className="text-slate-400 mb-1">
//             Original URL
//           </p>

//           <p className="break-all">
//             {analytics.url.originalUrl}
//           </p>
//         </div>

//         {/* Short URL */}
//         <div className="mb-5">
//           <p className="text-slate-400 mb-1">
//             Short URL
//           </p>

//           <a
//             href={`http://localhost:5000/${analytics.url.shortCode}`}
//             target="_blank"
//             rel="noreferrer"
//             className="text-blue-400 hover:underline break-all"
//           >
//             http://localhost:5000/{analytics.url.shortCode}
//           </a>
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-2 gap-5 mb-8">

//           <div className="bg-slate-700 p-4 rounded-xl">
//             <p className="text-slate-400 mb-2">
//               Total Clicks
//             </p>

//             <h2 className="text-3xl font-bold">
//               {analytics.totalClicks}
//             </h2>
//           </div>

//           <div className="bg-slate-700 p-4 rounded-xl">
//             <p className="text-slate-400 mb-2">
//               Last Visited
//             </p>

//             <h2 className="text-lg font-semibold">
//               {analytics.lastVisited
//                 ? new Date(
//                     analytics.lastVisited
//                   ).toLocaleString()
//                 : "No visits yet"}
//             </h2>
//           </div>

//         </div>
//         <div className="mb-8">
//            <Chart data={analytics.chartData || []} />
//         </div>

//         {/* Recent Visits */}
//         <div>
//           <h2 className="text-2xl font-bold mb-4">
//             Recent Visits
//           </h2>

//           {analytics.recentVisits.length === 0 ? (
//             <p className="text-slate-400">
//               No visits available
//             </p>
//           ) : (
//             <div className="space-y-4">

//               {analytics.recentVisits.map((visit) => (
//                 <div
//                   key={visit._id}
//                   className="bg-slate-700 p-4 rounded-xl"
//                 >

//                   <p>
//                     <span className="font-semibold">
//                       Browser:
//                     </span>{" "}
//                     {visit.browser}
//                   </p>

//                   <p>
//                     <span className="font-semibold">
//                       OS:
//                     </span>{" "}
//                     {visit.os}
//                   </p>

//                   <p>
//                     <span className="font-semibold">
//                       Device:
//                     </span>{" "}
//                     {visit.device}
//                   </p>

//                   <p>
//                     <span className="font-semibold">
//                       Country:
//                     </span>{" "}
//                     {visit.country}
//                   </p>

//                   <p>
//                     <span className="font-semibold">
//                       City:
//                     </span>{" "}
//                     {visit.city}
//                   </p>

//                   <p>
//                     <span className="font-semibold">
//                       Time:
//                     </span>{" "}
//                     {new Date(
//                       visit.visitedAt
//                     ).toLocaleString()}
//                   </p>

//                 </div>
//               ))}

//             </div>
//           )}
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Analytics;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { getUrlAnalytics } from "../api/analytics.api";
import Chart from "../components/Chart";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import formatDate from "../utils/formatDate";

function Analytics() {
  const { urlId } = useParams();

  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

  const fetchAnalytics = async () => {
    try {
    //   const data = await getUrlAnalytics(urlId, token);
    const data = await getUrlAnalytics(urlId);
      setAnalytics(data);
    } catch (error) {
      toast.error("Failed to load analytics");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-6">
        <div className="mb-6">
          <Link to="/dashboard" className="text-blue-400 hover:underline">
            ← Back to Dashboard
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">URL Analytics</h1>

        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <div className="mb-5">
            <p className="text-slate-400 mb-1">Original URL</p>
            <p className="break-all">{analytics.url.originalUrl}</p>
          </div>

          <div className="mb-5">
            <p className="text-slate-400 mb-1">Short URL</p>
            <a
              href={`http://localhost:5000/${analytics.url.shortCode}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 hover:underline break-all"
            >
              {/* http://localhost:5000/{analytics.url.shortCode} */}
              {`${import.meta.env.VITE_BACKEND_URL}/${analytics.url.shortCode}`}
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="bg-slate-700 p-4 rounded-xl">
              <p className="text-slate-400 mb-2">Total Clicks</p>
              <h2 className="text-3xl font-bold">{analytics.totalClicks}</h2>
            </div>

            <div className="bg-slate-700 p-4 rounded-xl">
              <p className="text-slate-400 mb-2">Last Visited</p>
              <h2 className="text-lg font-semibold">
                {analytics.lastVisited
                  ? formatDate(analytics.lastVisited)
                  : "No visits yet"}
              </h2>
            </div>
          </div>

          <div className="mb-8">
            <Chart data={analytics.chartData || []} />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Recent Visits</h2>

            {analytics.recentVisits.length === 0 ? (
              <p className="text-slate-400">No visits available</p>
            ) : (
              <div className="space-y-4">
                {analytics.recentVisits.map((visit) => (
                  <div key={visit._id} className="bg-slate-700 p-4 rounded-xl">
                    <p><b>Browser:</b> {visit.browser}</p>
                    <p><b>OS:</b> {visit.os}</p>
                    <p><b>Device:</b> {visit.device}</p>
                    <p><b>Country:</b> {visit.country}</p>
                    <p><b>City:</b> {visit.city}</p>
                    <p>
                      <b>Time:</b>{" "}
                      {formatDate(visit.visitedAt)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;