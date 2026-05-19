// import { Link, useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";

// function Navbar() {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     toast.success("Logged out successfully");

//     navigate("/login");
//   };

//   return (
//     <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <Link to="/dashboard" className="text-2xl font-bold">
//         SmartLink
//       </Link>

//       <div className="flex items-center gap-5">
//         <Link to="/dashboard" className="text-slate-300 hover:text-white">
//           Dashboard
//         </Link>

//         <Link to="/create" className="text-slate-300 hover:text-white">
//           Create URL
//         </Link>

//         <span className="text-slate-400 hidden sm:block">
//           {user?.name}
//         </span>

//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

// import useAuth from "../hooks/useAuth";

// function Navbar() {
//   const { user, logout } = useAuth();

//   const handleLogout = () => {
//     logout();

//     toast.success("Logged out successfully");
//   };

//   return (
//     <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center shadow-lg">
//       <Link to="/dashboard" className="text-2xl font-bold">
//         SmartLink
//       </Link>

//       <div className="flex items-center gap-5">
//         <Link to="/dashboard" className="text-slate-300 hover:text-white">
//           Dashboard
//         </Link>

//         <Link to="/create" className="text-slate-300 hover:text-white">
//           Create URL
//         </Link>

//         <span className="text-slate-400 hidden sm:block">
//           {user?.name}
//         </span>

//         <button
//           onClick={handleLogout}
//           className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
//         >
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

import useAuth from "../hooks/useAuth";

function Navbar() {
  const { user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");
  };

  return (
    <nav className="bg-slate-800 text-white shadow-lg">
      <div className="px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/dashboard" className="text-2xl font-bold">
          SmartLink
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-5">

          <Link
            to="/dashboard"
            className="text-slate-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/create"
            className="text-slate-300 hover:text-white"
          >
            Create URL
          </Link>

          <span className="text-slate-400">
            {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4">

          <Link
            to="/dashboard"
            onClick={() => setMenuOpen(false)}
            className="text-slate-300 hover:text-white"
          >
            Dashboard
          </Link>

          <Link
            to="/create"
            onClick={() => setMenuOpen(false)}
            className="text-slate-300 hover:text-white"
          >
            Create URL
          </Link>

          <span className="text-slate-400">
            {user?.name}
          </span>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
          >
            Logout
          </button>

        </div>
      )}

    </nav>
  );
}

export default Navbar;