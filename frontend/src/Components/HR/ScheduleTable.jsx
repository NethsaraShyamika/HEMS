import { useEffect, useState } from "react";
import axios from "axios";
import ScheduleForm from "./ScheduleForm";

const API_URL = "http://localhost:5000/api/schedules"; // adjust if different

function ScheduleTable() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch schedules
  const fetchSchedules = async () => {
    try {
      const res = await axios.get(API_URL);
      setSchedules(res.data.schedules || []);
    } catch (err) {
      setError("Failed to fetch schedules");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSchedules();
  }, []);

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this schedule?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchSchedules();
    } catch (err) {
      alert("Error deleting schedule");
    }
  };

  // Open edit form
  const handleEdit = (schedule) => {
    setSelectedSchedule(schedule);
    setShowForm(true);
  };

  // Open create form
  const handleCreate = () => {
    setSelectedSchedule(null);
    setShowForm(true);
  };

  return (
    <div>
      {/* Create button */}
      <div className="mb-4 flex justify-end">
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          + New Schedule
        </button>
      </div>

      {/* Form modal */}
      {showForm && (
        <ScheduleForm
          schedule={selectedSchedule}
          onClose={() => setShowForm(false)}
          onSuccess={fetchSchedules}
        />
      )}

      {/* Table */}
      {loading ? (
        <p>Loading schedules...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full bg-white shadow rounded overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Title</th>
              <th className="p-2">Date</th>
              <th className="p-2">Shift</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {schedules.map((s) => (
              <tr key={s._id} className="border-b hover:bg-gray-50">
                <td className="p-2">{s.title}</td>
                <td className="p-2">{s.date?.substring(0, 10)}</td>
                <td className="p-2">{s.shiftType}</td>
                <td className="p-2">{s.status}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(s)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(s._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {schedules.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No schedules found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ScheduleTable;
