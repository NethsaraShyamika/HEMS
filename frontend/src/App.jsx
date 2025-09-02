import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Dashboards
import HRDashboard from "./Pages/HR/HRDashboard";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import EmployeeDashboard from "./Pages/Employee/EmployeeDashboard";
import Home from "./Pages/home"; // ✅ import home page

// HR Pages
import SchedulePage from "./Pages/HR/SchedulePage"; // ✅ import schedules page

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root → HR by default (can change later) */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Dashboards */}
        <Route path="/home" element={<Home />} />
        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/hr/schedules" element={<SchedulePage />} /> {/* ✅ Added */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/employee" element={<EmployeeDashboard />} />

        {/* Fallback for unknown routes */}
        <Route path="*" element={<h1 className="p-6">404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
