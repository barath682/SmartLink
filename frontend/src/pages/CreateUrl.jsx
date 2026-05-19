// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import Navbar from "../components/Navbar";
// import Loader from "../components/Loader";

// import { createShortUrl } from "../api/url.api";

// function CreateUrl() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     originalUrl: "",
//     customAlias: "",
//     expiryDate: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       await createShortUrl(formData, token);

//       toast.success("Short URL created successfully");

//       navigate("/dashboard");
//     } catch (error) {
//       toast.error(error.response?.data?.message || "URL creation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
    
//     <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
        
//       <div className="bg-slate-800 w-full max-w-lg p-8 rounded-2xl shadow-lg">
        
//         <div className="mb-6">
//           <Link to="/dashboard" className="text-blue-400 hover:underline">
//             ← Back to Dashboard
//           </Link>
//         </div>

//         <h1 className="text-3xl font-bold text-center mb-6">
//           Create Short URL
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-slate-300 mb-2">Original URL</label>

//             <input
//               type="url"
//               name="originalUrl"
//               placeholder="https://example.com"
//               value={formData.originalUrl}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-slate-300 mb-2">
//               Custom Alias optional
//             </label>

//             <input
//               type="text"
//               name="customAlias"
//               placeholder="my-portfolio"
//               value={formData.customAlias}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-slate-300 mb-2">
//               Expiry Date optional
//             </label>

//             <input
//               type="date"
//               name="expiryDate"
//               value={formData.expiryDate}
//               onChange={handleChange}
//               className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold text-white disabled:opacity-60"
//           >
//             {loading ? "Creating..." : "Create Short URL"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateUrl;




import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

import { createShortUrl } from "../api/url.api";
import Navbar from "../components/Navbar";
import formatDate from "../utils/formatDate";


function CreateUrl() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    originalUrl: "",
    customAlias: "",
    expiryDate: "",
  });

  const [loading, setLoading] = useState(false);

//   const token = localStorage.getItem("token");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

    //   await createShortUrl(formData, token);
    await createShortUrl(formData);

      toast.success("Short URL created successfully");

      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "URL creation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="bg-slate-800 w-full max-w-lg p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <Link to="/dashboard" className="text-blue-400 hover:underline">
              ← Back to Dashboard
            </Link>
          </div>

          <h1 className="text-3xl font-bold text-center mb-6">
            Create Short URL
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-slate-300 mb-2">Original URL</label>

              <input
                type="url"
                name="originalUrl"
                placeholder="https://example.com"
                value={formData.originalUrl}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">
                Custom Alias optional
              </label>

              <input
                type="text"
                name="customAlias"
                placeholder="my-portfolio"
                value={formData.customAlias}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 mb-2">
                Expiry Date optional
              </label>

              {/* <input
                type="date"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
              /> */}
              <input
  type="date"
  name="expiryDate"
  value={formData.expiryDate}
  onChange={handleChange}
  min={new Date().toISOString().split("T")[0]}
  className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
/>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold text-white disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Short URL"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUrl;