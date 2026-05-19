import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold mb-4">404</h1>

        <p className="text-slate-400 text-xl mb-8">
          Page not found
        </p>

        <Link
          to="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;