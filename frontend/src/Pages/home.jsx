import { useNavigate } from "react-router-dom";
import { Users, Briefcase, Shield } from "lucide-react";

function Home() {
  const navigate = useNavigate();

  const dashboards = [
    {
      title: "HR Dashboard",
      description: "Manage employees, departments, and schedules.",
      icon: <Briefcase className="w-10 h-10 text-blue-500" />,
      path: "/hr",
    },
    {
      title: "Employee Dashboard",
      description: "View shifts, update profiles, and request leaves.",
      icon: <Users className="w-10 h-10 text-green-500" />,
      path: "/employee",
    },
    {
      title: "Admin Dashboard",
      description: "Oversee the system, generate reports, and manage roles.",
      icon: <Shield className="w-10 h-10 text-red-500" />,
      path: "/admin",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home Dashboard</h1>
      <p className="mb-6">
        Welcome to the Home Dashboard. Here you can manage user accounts and view
        system reports.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dashboards.map((dashboard, index) => (
          <div
            key={index}
            onClick={() => navigate(dashboard.path)}
            className="cursor-pointer bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition"
          >
            {dashboard.icon}
            <h2 className="mt-4 text-lg font-semibold">{dashboard.title}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {dashboard.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
