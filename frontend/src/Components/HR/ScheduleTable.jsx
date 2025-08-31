function ScheduleTable() {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-2">Employee Schedule</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Employee</th>
            <th className="p-2 border">Shift</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">John Doe</td>
            <td className="p-2 border">Morning</td>
            <td className="p-2 border">2025-09-01</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
