import DashboardLayout from "../../Components/Layout/DashboardLayout";

function AdminDashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Welcome to the Admin Dashboard. Here you can manage user accounts and view system reports.</p>
    </DashboardLayout>
  );
}

export default AdminDashboard;
