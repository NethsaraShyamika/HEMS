import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Dashboards
import HRDashboard from "./Pages/HR/HRDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import EmployeeDashboard from "./Pages/Employee/EmployeeDashboard";

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root → HR by default (can change later) */}
        <Route path="/" element={<Navigate to="/hr" replace />} />

        {/* Dashboards */}
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<h1 className="p-6">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
