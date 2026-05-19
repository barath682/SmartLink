// import { Routes, Route, Navigate } from "react-router-dom";

// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import Dashboard from "../pages/Dashboard";
// import CreateUrl from "../pages/CreateUrl";
// import Analytics from "../pages/Analytics";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* Redirect root */}
//       <Route path="/" element={<Navigate to="/login" />} />

//       {/* Auth pages */}
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />

//       {/* Dashboard pages */}
//       <Route path="/dashboard" element={<Dashboard />} />
//       <Route path="/create" element={<CreateUrl />} />
//       <Route path="/analytics/:urlId" element={<Analytics />} />
//     </Routes>
//   );
// }

// export default AppRoutes;


import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import CreateUrl from "../pages/CreateUrl";
import Analytics from "../pages/Analytics";

import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Redirect root */}
      <Route
        path="/"
        element={<Navigate to="/login" />}
      />

      {/* Public routes */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create"
        element={
          <ProtectedRoute>
            <CreateUrl />
          </ProtectedRoute>
        }
      />

      <Route
        path="/analytics/:urlId"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;