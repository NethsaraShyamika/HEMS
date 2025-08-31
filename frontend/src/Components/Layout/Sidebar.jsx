import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md flex flex-col">
      <div className="p-4 text-xl font-bold border-b">HEMS</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/hr"
              className="block p-2 rounded hover:bg-gray-200 transition"
            >
              HR Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin"
              className="block p-2 rounded hover:bg-gray-200 transition"
            >
              Admin Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/employee"
              className="block p-2 rounded hover:bg-gray-200 transition"
            >
              Employee Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
