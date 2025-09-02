import { useState } from "react";
import axios from "axios";

function ScheduleForm({ onCreated }) {
  const [form, setForm] = useState({
    title: "",
    department: "Emergency",
    shiftType: "Day",
    date: "",
    startTime: "",
    endTime: "",
    assignedEmployees: [{ employeeId: "", role: "Doctor" }],
    status: "Scheduled",
    location: "",
    description: "",
    minimumStaff: 1,
    maximumStaff: 10,
    specialRequirements: [""],
    createdBy: "HR001",
  });

  const [loading, setLoading] = useState(false);

  const handleEmployeeChange = (index, field, value) => {
    const updated = [...form.assignedEmployees];
    updated[index][field] = value;
    setForm({ ...form, assignedEmployees: updated });
  };

  const addEmployee = () => {
    setForm({
      ...form,
      assignedEmployees: [
        ...form.assignedEmployees,
        { employeeId: "", role: "Doctor" },
      ],
    });
  };

  const handleRequirementChange = (index, value) => {
    const updated = [...form.specialRequirements];
    updated[index] = value;
    setForm({ ...form, specialRequirements: updated });
  };

  const addRequirement = () => {
    setForm({ ...form, specialRequirements: [...form.specialRequirements, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/api/schedules", form);

      alert("✅ Schedule created successfully!");

      if (onCreated) onCreated(res.data); // pass new schedule back to parent if needed

      // Reset form
      setForm({
        title: "",
        department: "Emergency",
        shiftType: "Day",
        date: "",
        startTime: "",
        endTime: "",
        assignedEmployees: [{ employeeId: "", role: "Doctor" }],
        status: "Scheduled",
        location: "",
        description: "",
        minimumStaff: 1,
        maximumStaff: 10,
        specialRequirements: [""],
        createdBy: "HR001",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Failed to create schedule. Check console/logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow p-6 rounded-lg mb-6 space-y-4"
    >
      <h2 className="text-lg font-semibold">Create New Schedule</h2>

      {/* Basic Info */}
      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />

      <select
        value={form.department}
        onChange={(e) => setForm({ ...form, department: e.target.value })}
        className="border p-2 rounded w-full"
      >
        {[
          "Emergency",
          "ICU",
          "Surgery",
          "Pediatrics",
          "Cardiology",
          "Neurology",
          "Oncology",
          "Radiology",
          "Laboratory",
          "Pharmacy",
          "Administration",
          "Nursing",
          "Other",
        ].map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>

      <select
        value={form.shiftType}
        onChange={(e) => setForm({ ...form, shiftType: e.target.value })}
        className="border p-2 rounded w-full"
      >
        {["Day", "Evening", "Night", "On-call"].map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={form.date}
        onChange={(e) => setForm({ ...form, date: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />

      <div className="grid grid-cols-2 gap-4">
        <input
          type="time"
          value={form.startTime}
          onChange={(e) => setForm({ ...form, startTime: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          type="time"
          value={form.endTime}
          onChange={(e) => setForm({ ...form, endTime: e.target.value })}
          className="border p-2 rounded"
          required
        />
      </div>

      {/* Assigned Employees */}
      <div className="space-y-2">
        <h3 className="font-medium">Assigned Employees</h3>
        {form.assignedEmployees.map((emp, i) => (
          <div key={i} className="flex gap-2">
            <input
              type="text"
              placeholder="Employee ID"
              value={emp.employeeId}
              onChange={(e) =>
                handleEmployeeChange(i, "employeeId", e.target.value)
              }
              className="border p-2 rounded flex-1"
              required
            />
            <select
              value={emp.role}
              onChange={(e) => handleEmployeeChange(i, "role", e.target.value)}
              className="border p-2 rounded"
            >
              {[
                "Doctor",
                "Nurse",
                "Technician",
                "Administrator",
                "Support Staff",
              ].map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button
          type="button"
          onClick={addEmployee}
          className="text-blue-600 text-sm underline"
        >
          + Add Employee
        </button>
      </div>

      {/* Location */}
      <input
        type="text"
        placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
        className="border p-2 rounded w-full"
        required
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="border p-2 rounded w-full"
      />

      {/* Staff Numbers */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="number"
          placeholder="Minimum Staff"
          value={form.minimumStaff}
          onChange={(e) =>
            setForm({ ...form, minimumStaff: parseInt(e.target.value) })
          }
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Maximum Staff"
          value={form.maximumStaff}
          onChange={(e) =>
            setForm({ ...form, maximumStaff: parseInt(e.target.value) })
          }
          className="border p-2 rounded"
        />
      </div>

      {/* Special Requirements */}
      <div className="space-y-2">
        <h3 className="font-medium">Special Requirements</h3>
        {form.specialRequirements.map((req, i) => (
          <input
            key={i}
            type="text"
            placeholder="Requirement"
            value={req}
            onChange={(e) => handleRequirementChange(i, e.target.value)}
            className="border p-2 rounded w-full"
          />
        ))}
        <button
          type="button"
          onClick={addRequirement}
          className="text-blue-600 text-sm underline"
        >
          + Add Requirement
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Creating..." : "Create Schedule"}
      </button>
    </form>
  );
}

export default ScheduleForm;
