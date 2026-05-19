// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {

//   // Get token from localStorage
//   const token = localStorage.getItem("token");

//   // If no token redirect to login
//   if (!token) {
//     return <Navigate to="/login" />;
//   }

//   // If logged in show page
//   return children;
// }

// export default ProtectedRoute;


import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;