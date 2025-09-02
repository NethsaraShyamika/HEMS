import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Holidays from "date-holidays";
import logo from "../../assets/logo.png";

function Header() {
  const [date, setDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [notifications, setNotifications] = useState(3);
  const [holidays, setHolidays] = useState([]);
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

  // Fetch Sri Lankan holidays dynamically per year
  useEffect(() => {
    const hd = new Holidays("LK");
    const data = hd.getHolidays(date.getFullYear());
    setHolidays(data.map((h) => ({ date: h.date, name: h.name })));
  }, [date.getFullYear()]);

  // Highlight holidays
  const tileClassName = ({ date }) => {
    const key = date.toISOString().split("T")[0];
    return holidays.some((h) => h.date === key)
      ? "bg-yellow-100 text-yellow-800 font-semibold rounded-full"
      : "";
  };

  // Add * mark on holiday dates
  const tileContent = ({ date }) => {
    const key = date.toISOString().split("T")[0];
    if (holidays.some((h) => h.date === key)) {
      return (
        <div className="text-[10px] text-red-600 text-center font-bold">*</div>
      );
    }
    return null;
  };

  // On day click show holiday info
  const onClickDay = (clickedDate) => {
    const key = clickedDate.toISOString().split("T")[0];
    const found = holidays.find((h) => h.date === key);
    if (found) {
      alert(`Holiday: ${found.name}`);
    }
    setDate(clickedDate);
  };

  // Toggle calendar & reset to today
  const handleCalendarClick = () => {
    setShowCalendar((prev) => !prev);
    if (!showCalendar) {
      setDate(new Date());
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200/50 sticky top-0 z-40">
      <nav className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Left: Logo + Nav Links */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="WorkPulse Logo"
              className="h-10 w-auto filter drop-shadow-sm"
            />
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>
          </div>

          <ul className="flex gap-8">
            {[
              { to: "/hr", label: "Dashboard" },
              { to: "/leave", label: "Employees" },
              { to: "/hr/schedules", label: "Scheduling" },
              { to: "/performance", label: "Salary" }
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="relative text-gray-700 text-sm font-medium hover:text-blue-800 transition-all duration-200 group py-2"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-600 to-blue-600 group-hover:w-full transition-all duration-300 ease-out"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Search + Notifications + Calendar + Avatar */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative w-64">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search employees, documents..."
              className="w-full pl-11 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 shadow-sm hover:shadow-md"
            />
          </div>

          {/* Notifications */}
          <div className="relative">
            <FiBell className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors duration-200 hover:scale-110 transform" />
            {notifications > 0 && (
              <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse">
                {notifications > 9 ? "9+" : notifications}
              </span>
            )}
          </div>

          {/* Calendar */}
          <div className="relative" ref={calendarRef}>
            <div className="relative">
              <FaRegCalendarAlt
                className="text-gray-600 w-5 h-5 cursor-pointer hover:text-blue-600 transition-all duration-200 hover:scale-110 transform"
                onClick={handleCalendarClick}
              />
            </div>

            {showCalendar && (
              <div className="absolute right-0 mt-4 bg-white shadow-2xl rounded-2xl p-4 z-50 w-80 border border-gray-100 animate-in slide-in-from-top-2 duration-200">
                <div className="mb-3 pb-3 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-800">Calendar</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {date.toLocaleDateString("en-LK", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <Calendar
                  onChange={setDate}
                  value={date}
                  tileClassName={tileClassName}
                  tileContent={tileContent}
                  onClickDay={onClickDay}
                  className="rounded-xl border-0 w-full calendar-custom"
                />

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-3 h-3 bg-yellow-100 rounded-full border border-yellow-300"></div>
                    <span>Sri Lankan Holidays</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* User Avatar */}
          <div className="relative group">
            <div
              className="bg-center bg-no-repeat bg-cover rounded-full w-10 h-10 cursor-pointer border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 ring-2 ring-gray-100 hover:ring-blue-200"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAN9mrEKstxGoYGPtI3F04GncabUM3RfptBru40UTdyZ-CHQw9_ROkGzXx134jDunPu3WHqiJWwfOTrx6Bh-Nv7RJqiUw36fD7EbIWiXzzE1L_vwPQepD5wGgL1hsmMHHHTyQc4ZMZuyzvtwiVHznz9dwNl9OszlFOyntwEvPtTDVcf7JKRWmXB2xir0Tfi-DUnoq7ohxr-7L_R2Xft4mPGDsa4SG0pCwerg6ovI2SGgCZoI6suEtWr6n7UUC_bzc2YYNbbXfgB3vU4")`,
              }}
            >
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full shadow-sm"></div>
            </div>

            <div className="absolute right-0 top-12 bg-gray-800 text-white text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              Profile Menu
              <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom CSS for Calendar */}
      <style jsx>{`
        .calendar-custom {
          font-family: inherit;
        }

        .calendar-custom .react-calendar__navigation {
          margin-bottom: 1rem;
        }

        .calendar-custom .react-calendar__navigation button {
          font-weight: 600;
          font-size: 14px;
          color: #374151;
          padding: 8px 12px;
          border-radius: 8px;
          transition: all 0.2s;
        }

        .calendar-custom .react-calendar__navigation button:hover {
          background: #f3f4f6;
          color: #1f2937;
        }

        .calendar-custom .react-calendar__month-view__weekdays {
          font-weight: 600;
          font-size: 12px;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .calendar-custom .react-calendar__tile {
          border-radius: 8px;
          border: none;
          padding: 8px 4px;
          font-size: 13px;
          font-weight: 500;
          transition: all 0.2s;
          position: relative;
        }

        .calendar-custom .react-calendar__tile:hover {
          background: #f3f4f6;
          transform: scale(1.05);
        }

        .calendar-custom .react-calendar__tile--active {
          background: linear-gradient(135deg, #3b82f6, #2563eb) !important;
          color: white !important;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        .calendar-custom .react-calendar__tile--now {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          font-weight: 700;
        }

        .calendar-custom .react-calendar__tile--now:hover {
          background: linear-gradient(135deg, #059669, #047857);
        }

        .animate-in {
          animation: slideInFromTop 0.2s ease-out forwards;
        }

        @keyframes slideInFromTop {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
