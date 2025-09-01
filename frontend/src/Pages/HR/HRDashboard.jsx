import { Link } from "react-router-dom";
import DashboardLayout from "../../Components/Layout/DashboardLayout";

function HRDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-6">HR Dashboard</h1>

      <div className="grid gap-4">
        {/* Card for Schedule Management */}
        <div className="bg-white shadow rounded p-6 flex flex-col items-start">
          <h2 className="text-lg font-semibold mb-2">Schedule Management</h2>
          <p className="text-gray-600 mb-4">
            Create, update, and manage employee schedules.
          </p>
          <Link
            to="/hr/schedules"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Go to Schedules
          </Link>
        </div>

        {/* You can add more HR features like Employee Records, Reports, etc. later */}
      </div>
    </DashboardLayout>
  );
}

export default HRDashboard;
