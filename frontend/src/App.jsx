import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HRDashboard from "./pages/HRDashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Reusable Navbar */}
        <Header />

        {/* Page Content */}
        <main className="flex-grow p-4 bg-gray-100">
          <Routes>
            <Route path="/" element={<HRDashboard />} />
            <Route path="/hr-dashboard" element={<HRDashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
