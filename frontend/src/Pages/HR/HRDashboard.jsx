import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ScheduleTable from "../../Components/HR/ScheduleTable";

function HRDashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Home</h1>
        <p className="text-gray-600">Welcome back to your dashboard</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <input
            type="text"
            placeholder="Search ..."
            className="w-full px-4 py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Greeting Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Good Morning</h2>
            <p className="text-gray-600 italic mb-4">
              "An employee's experience is the sum of all interactions they have with the organization."
              <span className="block font-medium mt-1">- MATT MULLENVEG</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">07 April 2025</p>
                <p className="text-2xl font-bold">10:24:55</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-sm text-gray-600">Monday | 10AM - 7PM</p>
                <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Sign In
                </button>
              </div>
            </div>
          </div>

          {/* Payslip Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Payslip</h2>
            <p className="text-gray-600 mb-4">Mar 1 - Mar 31, 2025 | 31 Paid Days</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Gross Pay</p>
                <p className="text-xl font-bold">$8,500.00</p>
              </div>
              <div className="bg-red-50 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Deduction</p>
                <p className="text-xl font-bold">$1,200.00</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md text-center">
                <p className="text-sm text-gray-600">Net Pay</p>
                <p className="text-xl font-bold">$7,300.00</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Download PDF
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
                Show Salary
              </button>
            </div>
          </div>

          {/* Today Attendance */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Today Attendance</h2>
            <div className="flex gap-4 mb-4">
              <button className="bg-blue-100 text-blue-800 px-4 py-2 rounded-md font-medium">Office</button>
              <button className="bg-green-100 text-green-800 px-4 py-2 rounded-md font-medium">Work From Home</button>
              <button className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-md font-medium">Leave</button>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-center text-gray-700">265 Employees</p>
            </div>
          </div>

          {/* Quick Access */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-4 rounded-md text-center cursor-pointer hover:bg-blue-100 transition-colors">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">Reimbursement</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md text-center cursor-pointer hover:bg-green-100 transition-colors">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">Payslip</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-md text-center cursor-pointer hover:bg-purple-100 transition-colors">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">IT Statement</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-md text-center cursor-pointer hover:bg-orange-100 transition-colors">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">YTD Reports</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Upcoming Holidays */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upcoming Holidays</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold">18</span>
                  </div>
                  <div>
                    <p className="font-medium">Good Friday</p>
                    <p className="text-sm text-gray-600">Friday, Apr 18</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <p className="font-medium">May Day</p>
                    <p className="text-sm text-gray-600">Thursday, May 1</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-green-600 font-bold">27</span>
                  </div>
                  <div>
                    <p className="font-medium">Rathayatra</p>
                    <p className="text-sm text-gray-600">Monday, Jun 27</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">15</span>
                  </div>
                  <div>
                    <p className="font-medium">Independence Day</p>
                    <p className="text-sm text-gray-600">Friday, Aug 15</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Events and Meetings */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Events and Meetings</h2>
              <button className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-md mr-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Marketing Meeting</p>
                  <p className="text-sm text-gray-600">Meeting</p>
                  <p className="text-xs text-gray-500">8:00 am, 15/04/2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-md mr-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Development Meeting</p>
                  <p className="text-sm text-gray-600">Job Interview</p>
                  <p className="text-xs text-gray-500">11:00 am, 23/04/2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-yellow-100 p-2 rounded-md mr-3">
                  <div className="w-3 h-3 bg-yellow-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Safety Consulting</p>
                  <p className="text-xs text-gray-500">11:30 am, 25/04/2025</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-purple-100 p-2 rounded-md mr-3">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium">Meeting with Team</p>
                  <p className="text-sm text-gray-600">Meeting</p>
                  <p className="text-xs text-gray-500">2:30 pm, 26/04/2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}

export default HRDashboard;
