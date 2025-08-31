function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-gray-600">Welcome, User</span>
        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;
