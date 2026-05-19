// import { useNavigate } from "react-router-dom";

// function useAuth() {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");

//   const user = JSON.parse(
//     localStorage.getItem("user")
//   );

//   // Check login
//   const isAuthenticated = !!token;

//   // Logout
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");

//     navigate("/login");
//   };

//   return {
//     token,
//     user,
//     isAuthenticated,
//     logout,
//   };
// }

// export default useAuth;

import { useNavigate } from "react-router-dom";

function useAuth() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  const isAuthenticated = !!token;

  // Logout
  const logout = () => {
    // Clear storage
    localStorage.clear();

    // Redirect login
    navigate("/login", {
      replace: true,
    });
  };

  return {
    token,
    user,
    isAuthenticated,
    logout,
  };
}

export default useAuth;