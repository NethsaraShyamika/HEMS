import mongoose from "mongoose";

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true
  },
  scheduleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedule",
    required: true
  },
  status: {
    type: String,
    enum: ["present", "absent"],
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;
