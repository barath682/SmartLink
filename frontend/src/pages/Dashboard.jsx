// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// import { getMyUrls, deleteUrl } from "../api/url.api";

// function Dashboard() {
//   const [urls, setUrls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Fetch all URLs
//   const fetchUrls = async () => {
//     try {
//       const data = await getMyUrls(token);

//       setUrls(data);
//     } catch (error) {
//       toast.error("Failed to fetch URLs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUrls();
//   }, []);

//   // Delete URL
//   const handleDelete = async (id) => {
//     try {
//       await deleteUrl(id, token);

//       toast.success("URL deleted");

//       setUrls(urls.filter((url) => url._id !== id));

//     } catch (error) {
//       toast.error("Delete failed");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white p-6">

//       {/* Top Header */}
//       <div className="flex justify-between items-center mb-8">

//         <h1 className="text-3xl font-bold">
//           SmartLink Dashboard
//         </h1>

//         <Link
//           to="/create"
//           className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
//         >
//           Create URL
//         </Link>
//       </div>

//       {/* Empty state */}
//       {urls.length === 0 ? (
//         <div className="text-center text-slate-400 mt-20">
//           No URLs created yet
//         </div>
//       ) : (
//         <div className="grid gap-5">

//           {urls.map((url) => (
//             <div
//               key={url._id}
//               className="bg-slate-800 p-5 rounded-xl shadow-lg"
//             >

//               {/* Original URL */}
//               <p className="text-sm text-slate-400 mb-2">
//                 Original URL
//               </p>

//               <p className="break-all mb-4">
//                 {url.originalUrl}
//               </p>

//               {/* Short URL */}
//               <p className="text-sm text-slate-400 mb-2">
//                 Short URL
//               </p>

//               <a
//                 href={`http://localhost:5000/${url.shortCode}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-blue-400 hover:underline break-all"
//               >
//                 http://localhost:5000/{url.shortCode}
//               </a>

//               {/* Stats */}
//               <div className="mt-4 flex flex-wrap gap-4 text-sm">

//                 <div className="bg-slate-700 px-4 py-2 rounded-lg">
//                   Clicks: {url.clickCount}
//                 </div>

//                 <div className="bg-slate-700 px-4 py-2 rounded-lg">
//                   Created:{" "}
//                   {new Date(url.createdAt).toLocaleDateString()}
//                 </div>

//               </div>

//               {/* Actions */}
//               <div className="mt-5 flex gap-4">

//                 <Link
//                   to={`/analytics/${url._id}`}
//                   className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
//                 >
//                   Analytics
//                 </Link>

//                 <button
//                   onClick={() => handleDelete(url._id)}
//                   className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//                 >
//                   Delete
//                 </button>

//               </div>

//             </div>
//           ))}

//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// import Navbar from "../components/Navbar";

// import {
//   getMyUrls,
//   deleteUrl,
// } from "../api/url.api";

// function Dashboard() {
//   const [urls, setUrls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Fetch URLs
//   const fetchUrls = async () => {
//     try {
//       const data = await getMyUrls(token);

//       setUrls(data);
//     } catch (error) {
//       toast.error("Failed to fetch URLs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUrls();
//   }, []);

//   // Delete URL
//   const handleDelete = async (id) => {
//     try {
//       await deleteUrl(id, token);

//       toast.success("URL deleted");

//       setUrls(
//         urls.filter((url) => url._id !== id)
//       );
//     } catch (error) {
//       toast.error("Delete failed");
//     }
//   };

//   // Loading
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-slate-900 text-white">

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Content */}
//       <div className="p-6">

//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">

//           <h1 className="text-3xl font-bold">
//             SmartLink Dashboard
//           </h1>

//           <Link
//             to="/create"
//             className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
//           >
//             Create URL
//           </Link>

//         </div>

//         {/* Empty */}
//         {urls.length === 0 ? (
//           <div className="text-center text-slate-400 mt-20">
//             No URLs created yet
//           </div>
//         ) : (
//           <div className="grid gap-5">

//             {urls.map((url) => (
//               <div
//                 key={url._id}
//                 className="bg-slate-800 p-5 rounded-xl shadow-lg"
//               >

//                 {/* Original URL */}
//                 <p className="text-sm text-slate-400 mb-2">
//                   Original URL
//                 </p>

//                 <p className="break-all mb-4">
//                   {url.originalUrl}
//                 </p>

//                 {/* Short URL */}
//                 <p className="text-sm text-slate-400 mb-2">
//                   Short URL
//                 </p>

//                 <a
//                   href={`http://localhost:5000/${url.shortCode}`}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-blue-400 hover:underline break-all"
//                 >
//                   http://localhost:5000/{url.shortCode}
//                 </a>

//                 {/* Stats */}
//                 <div className="mt-4 flex flex-wrap gap-4 text-sm">

//                   <div className="bg-slate-700 px-4 py-2 rounded-lg">
//                     Clicks: {url.clickCount}
//                   </div>

//                   <div className="bg-slate-700 px-4 py-2 rounded-lg">
//                     Created:{" "}
//                     {new Date(
//                       url.createdAt
//                     ).toLocaleDateString()}
//                   </div>

//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-5 flex gap-4">

//                   <Link
//                     to={`/analytics/${url._id}`}
//                     className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
//                   >
//                     Analytics
//                   </Link>

//                   <button
//                     onClick={() =>
//                       handleDelete(url._id)
//                     }
//                     className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>
//             ))}

//           </div>
//         )}

//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import UrlCard from "../components/UrlCard";
import Loader from "../components/Loader";
import DashboardStats from "../components/DashboardStats";

import {
  getMyUrls,
  deleteUrl,
} from "../api/url.api";

function Dashboard() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

  // Fetch URLs
  const fetchUrls = async () => {
    try {
    //   const data = await getMyUrls(token);
    const data = await getMyUrls();

      setUrls(data);
    } catch (error) {
      toast.error("Failed to fetch URLs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  // Delete URL
  const handleDelete = async (id) => {
    try {
    //   await deleteUrl(id, token);
    await deleteUrl(id);

      toast.success("URL deleted");

      setUrls(
        urls.filter((url) => url._id !== id)
      );
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  // Loading
//   if (loading) {
//     return (
//       <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
//         Loading...
//       </div>
//     );
//   }
if (loading) {
  return <Loader />;
}

  return (
    <div className="min-h-screen bg-slate-900 text-white">

      {/* Navbar */}
      <Navbar />
    

      {/* Content */}
      <div className="p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">

          <h1 className="text-3xl font-bold">
            SmartLink Dashboard
          </h1>

          <Link
            to="/create"
            className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
          >
            Create URL
          </Link>

        </div>
         <DashboardStats urls={urls} />
        {/* Empty state */}
        {urls.length === 0 ? (
          <div className="text-center text-slate-400 mt-20">
            No URLs created yet
          </div>
        ) : (
          <div className="grid gap-5">

            {urls.map((url) => (
              <UrlCard
                key={url._id}
                url={url}
                onDelete={handleDelete}
              />
            ))}

          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// import DashboardLayout from "../layouts/DashboardLayout";
// import UrlCard from "../components/UrlCard";
// import Loader from "../components/Loader";

// import {
//   getMyUrls,
//   deleteUrl,
// } from "../api/url.api";

// function Dashboard() {
//   const [urls, setUrls] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const token = localStorage.getItem("token");

//   // Fetch URLs
//   const fetchUrls = async () => {
//     try {
//       const data = await getMyUrls(token);

//       setUrls(data);
//     } catch (error) {
//       toast.error("Failed to fetch URLs");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUrls();
//   }, []);

//   // Delete URL
//   const handleDelete = async (id) => {
//     try {
//       await deleteUrl(id, token);

//       toast.success("URL deleted");

//       setUrls(
//         urls.filter((url) => url._id !== id)
//       );
//     } catch (error) {
//       toast.error("Delete failed");
//     }
//   };

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <DashboardLayout>

//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">

//         <h1 className="text-3xl font-bold">
//           SmartLink Dashboard
//         </h1>

//         <Link
//           to="/create"
//           className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg"
//         >
//           Create URL
//         </Link>

//       </div>

//       {/* Empty */}
//       {urls.length === 0 ? (
//         <div className="text-center text-slate-400 mt-20">
//           No URLs created yet
//         </div>
//       ) : (
//         <div className="grid gap-5">

//           {urls.map((url) => (
//             <UrlCard
//               key={url._id}
//               url={url}
//               onDelete={handleDelete}
//             />
//           ))}

//         </div>
//       )}

//     </DashboardLayout>
//   );
// }

// export default Dashboard;