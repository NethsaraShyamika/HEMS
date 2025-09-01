import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import logo from "../assets/Logo.png";

// Sri Lankan holidays (2025) with labels
const sriLankanHolidays = {
  "2025-01-14": "Tamil Thai Pongal",
  "2025-02-04": "Independence Day",
  "2025-04-13": "Sinhala & Tamil New Year’s Eve",
  "2025-04-14": "Sinhala & Tamil New Year",
  "2025-05-01": "Labour Day",
  "2025-05-17": "Vesak Full Moon Poya",
  "2025-06-16": "Poson Full Moon Poya",
};

function Header() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);

  // Close calendar if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Highlight holidays
  const tileClassName = ({ date }) => {
    const formatted = date.toISOString().split("T")[0];
    return sriLankanHolidays[formatted]
      ? "bg-red-200 text-red-800 font-semibold rounded-full"
      : "";
  };

  // Add labels under holiday dates
  const tileContent = ({ date }) => {
    const formatted = date.toISOString().split("T")[0];
    if (sriLankanHolidays[formatted]) {
      return (
        <p className="text-[10px] text-red-600 mt-1 text-center leading-tight">
          {sriLankanHolidays[formatted]}
        </p>
      );
    }
    return null;
  };

  // Toggle calendar & reset to today
  const handleCalendarClick = () => {
    setShowCalendar((prev) => !prev);
    if (!showCalendar) {
      setDate(new Date()); // reset to today
    }
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <nav className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-10">
          <img src={logo} alt="WorkPulse Logo" className="h-9 w-auto" />
          <ul className="flex gap-6">
            <li>
              <Link
                to="/hr-dashboard"
                className="text-gray-800 text-sm font-medium hover:text-blue-600 transition"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/leave"
                className="text-gray-800 text-sm font-medium hover:text-blue-600 transition"
              >
                Leave
              </Link>
            </li>
            <li>
              <Link
                to="/attendance"
                className="text-gray-800 text-sm font-medium hover:text-blue-600 transition"
              >
                Attendance
              </Link>
            </li>
            <li>
              <Link
                to="/performance"
                className="text-gray-800 text-sm font-medium hover:text-blue-600 transition"
              >
                Performance
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Search + Notifications + Calendar + Avatar */}
        <div className="flex items-center gap-4">
          {/* Search Bar */}
          <div className="relative w-32">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-9 pr-2 py-1 text-xs border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Notification Icon */}
          <FiBell className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600 transition" />

          {/* Calendar Dropdown */}
          <div className="relative" ref={calendarRef}>
            <FaRegCalendarAlt
              className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600 transition"
              onClick={handleCalendarClick}
            />
            {showCalendar && (
              <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-lg p-3 z-50 w-72 border">
                <Calendar
                  onChange={setDate}
                  value={date}
                  tileClassName={tileClassName}
                  tileContent={tileContent}
                  className="rounded-lg border-0 w-full calendar-custom"
                />
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-9 cursor-pointer border border-gray-300 shadow-sm"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAN9mrEKstxGoYGPtI3F04GncabUM3RfptBru40UTdyZ-CHQw9_ROkGzXx134jDunPu3WHqiJWwfOTrx6Bh-Nv7RJqiUw36fD7EbIWiXzzE1L_vwPQepD5wGgL1hsmMHHHTyQc4ZMZuyzvtwiVHznz9dwNl9OszlFOyntwEvPtTDVcf7JKRWmXB2xir0Tfi-DUnoq7ohxr-7L_R2Xft4mPGDsa4SG0pCwerg6ovI2SGgCZoI6suEtWr6n7UUC_bzc2YYNbbXfgB3vU4")`,
            }}
          ></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
