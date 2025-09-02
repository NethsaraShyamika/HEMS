import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../Components/Layout/DashboardLayout";
import ScheduleTable from "../../Components/HR/ScheduleTable";
import ScheduleForm from "../../Components/HR/ScheduleForm";

function SchedulePage() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchedule, setSelectedSchedule] = useState(null); // for edit mode

  // Fetch schedules
  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/schedules");
      setSchedules(res.data);
    } catch (err) {
      console.error("Error fetching schedules:", err);
    } finally {
      setLoading(false);
    }
  };

  // CREATE
  const handleCreate = async (newSchedule) => {
    try {
      const res = await axios.post("http://localhost:5000/api/schedules", newSchedule);
      setSchedules([...schedules, res.data]);
    } catch (err) {
      console.error("Error creating schedule:", err);
    }
  };

  // UPDATE
  const handleUpdate = async (updatedSchedule) => {
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/schedules/${updatedSchedule._id}`,
        updatedSchedule
      );
      setSchedules(
        schedules.map((s) => (s._id === updatedSchedule._id ? res.data : s))
      );
      setSelectedSchedule(null); // close edit mode
    } catch (err) {
      console.error("Error updating schedule:", err);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/schedules/${id}`);
      setSchedules(schedules.filter((s) => s._id !== id));
    } catch (err) {
      console.error("Error deleting schedule:", err);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Schedules</h1>

      {/* Form for create or edit */}
      <ScheduleForm
        schedule={selectedSchedule} // null = create, object = edit
        onCreate={handleCreate}
        onUpdate={handleUpdate}
      />

      {/* Table */}
      {loading ? (
        <p>Loading schedules...</p>
      ) : (
        <ScheduleTable
          schedules={schedules}
          onEdit={(s) => setSelectedSchedule(s)}
          onDelete={handleDelete}
        />
      )}
    </DashboardLayout>
  );
}

export default SchedulePage;
