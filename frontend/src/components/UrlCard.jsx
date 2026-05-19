// import { Link } from "react-router-dom";

// import copyToClipboard from "../utils/copyToClipboard";

// function UrlCard({ url, onDelete }) {

//   const shortUrl = `http://localhost:5000/${url.shortCode}`;

//   return (
//     <div className="bg-slate-800 p-5 rounded-xl shadow-lg">

//       {/* Original URL */}
//       <p className="text-sm text-slate-400 mb-2">
//         Original URL
//       </p>

//       <p className="break-all mb-4 text-white">
//         {url.originalUrl}
//       </p>

//       {/* Short URL */}
//       <p className="text-sm text-slate-400 mb-2">
//         Short URL
//       </p>

//       <a
//         href={shortUrl}
//         target="_blank"
//         rel="noreferrer"
//         className="text-blue-400 hover:underline break-all"
//       >
//         {shortUrl}
//       </a>

//       {/* Stats */}
//       <div className="mt-4 flex flex-wrap gap-4 text-sm">

//         <div className="bg-slate-700 px-4 py-2 rounded-lg">
//           Clicks: {url.clickCount}
//         </div>

//         <div className="bg-slate-700 px-4 py-2 rounded-lg">
//           Created:{" "}
//           {new Date(
//             url.createdAt
//           ).toLocaleDateString()}
//         </div>

//       </div>

//       {/* Buttons */}
//       <div className="mt-5 flex flex-wrap gap-3">

//         {/* Copy */}
//         <button
//           onClick={() =>
//             copyToClipboard(shortUrl)
//           }
//           className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
//         >
//           Copy
//         </button>

//         {/* Analytics */}
//         <Link
//           to={`/analytics/${url._id}`}
//           className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
//         >
//           Analytics
//         </Link>

//         {/* Delete */}
//         <button
//           onClick={() => onDelete(url._id)}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//         >
//           Delete
//         </button>

//       </div>
//     </div>
//   );
// }

// export default UrlCard;



import { useState } from "react";
import { Link } from "react-router-dom";

import copyToClipboard from "../utils/copyToClipboard";
import QRModal from "./QRModal";
import formatDate from "../utils/formatDate";

function UrlCard({ url, onDelete }) {
  const [showQR, setShowQR] = useState(false);

//   const shortUrl = `http://localhost:5000/${url.shortCode}`;
const shortUrl = `${import.meta.env.VITE_BACKEND_URL}/${url.shortCode}`;

  return (
    <>
      <div className="bg-slate-800 p-5 rounded-xl shadow-lg">
        <p className="text-sm text-slate-400 mb-2">Original URL</p>

        <p className="break-all mb-4 text-white">
          {url.originalUrl}
        </p>

        <p className="text-sm text-slate-400 mb-2">Short URL</p>

        <a
          href={shortUrl}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:underline break-all"
        >
          {shortUrl}
        </a>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="bg-slate-700 px-4 py-2 rounded-lg">
            Clicks: {url.clickCount}
          </div>

          <div className="bg-slate-700 px-4 py-2 rounded-lg">
            Created:{formatDate(url.createdAt)}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            onClick={() => copyToClipboard(shortUrl)}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg"
          >
            Copy
          </button>

          <button
            onClick={() => setShowQR(true)}
            className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
          >
            QR Code
          </button>

          <Link
            to={`/analytics/${url._id}`}
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg"
          >
            Analytics
          </Link>

          <button
            onClick={() => onDelete(url._id)}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>

      {showQR && (
        <QRModal
          qrCode={url.qrCode}
          onClose={() => setShowQR(false)}
        />
      )}
    </>
  );
}

export default UrlCard;