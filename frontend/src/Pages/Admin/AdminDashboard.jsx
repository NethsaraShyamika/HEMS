import React from "react";
import {
  FaUserShield,
  FaUserLock,
  FaUserCog,
  FaKey,
  FaCog,
  FaClipboardList,
  FaUserCircle,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const AdminDashboard = () => {
  // ✅ Dummy chart data (based on your cards)
  const chartData = [
    { name: "Roles", value: 15 },
    { name: "Restricted", value: 8 },
    { name: "Profiles", value: 124 },
    { name: "Access", value: 42 },
    { name: "Settings", value: 5 },
    { name: "Logs", value: 234 },
  ];

  return (
    <div className="flex h-screen bg-gray-50"> {/* 60% Neutral background */}
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-teal-700 to-teal-900 text-white flex flex-col shadow-lg">
        <div className="p-6 text-2xl font-bold border-b border-teal-600">
          Workpulse
        </div>
        <nav className="flex-1 p-6">
          <ul className="space-y-4">
            {[
              { icon: <FaUserShield />, label: "Create Roles" },
              { icon: <FaUserLock />, label: "Restrict Account Access" },
              { icon: <FaUserCog />, label: "User Profile Management" },
              { icon: <FaKey />, label: "Give Access" },
              { icon: <FaCog />, label: "Settings" },
              { icon: <FaClipboardList />, label: "Logs" },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 bg-teal-800 hover:bg-teal-600 transition duration-200 p-4 rounded-xl cursor-pointer text-lg shadow-md"
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="bg-white shadow-md p-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-700">Welcome, Admin</h1>
          <div className="flex items-center space-x-6">
            <FaUserCircle className="text-4xl text-gray-600 cursor-pointer hover:text-teal-700" />
            <button className="bg-teal-600 hover:bg-teal-700 px-6 py-3 rounded-xl text-white font-semibold shadow-md transition duration-200">
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-10 overflow-y-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Dashboard Overview
          </h2>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {/* Keep accent colors limited (10%) */}
            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-teal-600">
              <FaUserShield className="text-3xl text-teal-700" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Roles Created
                </h3>
                <p className="text-gray-500">15</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-indigo-500">
              <FaUserLock className="text-3xl text-indigo-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Restricted Accounts
                </h3>
                <p className="text-gray-500">8</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-pink-500">
              <FaUserCog className="text-3xl text-pink-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Profiles Managed
                </h3>
                <p className="text-gray-500">124</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-yellow-500">
              <FaKey className="text-3xl text-yellow-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Access Given
                </h3>
                <p className="text-gray-500">42</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-purple-500">
              <FaCog className="text-3xl text-purple-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  Settings Updated
                </h3>
                <p className="text-gray-500">5</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg flex items-center space-x-4 border-l-4 border-red-500">
              <FaClipboardList className="text-3xl text-red-600" />
              <div>
                <h3 className="text-lg font-semibold text-gray-700">
                  System Logs
                </h3>
                <p className="text-gray-500">234</p>
              </div>
            </div>
          </div>

          {/* ✅ Professional Chart Section */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">
              System Overview Chart
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#14b8a6" radius={[6, 6, 0, 0]} />
                <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
