import Schedule from "../Models/Schedule.js";

// Create a new schedule
export const createSchedule = async (req, res) => {
  try {
    const {
      title,
      department,
      shiftType,
      date,
      startTime,
      endTime,
      assignedEmployees,
      status,
      location,
      description,
      minimumStaff,
      maximumStaff,
      specialRequirements,
      createdBy
    } = req.body;

    const schedule = new Schedule({
      title,
      department,
      shiftType,
      date,
      startTime,
      endTime,
      assignedEmployees,
      status,
      location,
      description,
      minimumStaff,
      maximumStaff,
      specialRequirements,
      createdBy
    });

    await schedule.save();
    res.status(201).json({ message: "Schedule created successfully", schedule });
  } catch (error) {
    console.error("Error creating schedule:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Get all schedules
export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json({ schedules });
  } catch (error) {
    console.error("Error fetching schedules:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Get schedule by ID
export const getScheduleById = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);
    if (!schedule) return res.status(404).json({ message: "Schedule not found" });
    res.status(200).json({ schedule });
  } catch (error) {
    console.error("Error fetching schedule:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// ✅ PATCH (partial update)
export const patchSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    // Debug log
    console.log("PATCH body:", req.body);

    const updatedSchedule = await Schedule.findByIdAndUpdate(
      id,
      { $set: req.body },  // only update given fields
      { new: true, runValidators: true }
    );

    if (!updatedSchedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.status(200).json({
      message: "Schedule updated (PATCH)",
      schedule: updatedSchedule
    });
  } catch (error) {
    console.error("Error patching schedule:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};


// ✅ PUT (full replace)
export const replaceSchedule = async (req, res) => {
  try {
    const { id } = req.params;

    const replacedSchedule = await Schedule.findOneAndReplace(
      { _id: id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!replacedSchedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }

    res.status(200).json({
      message: "Schedule replaced (PUT)",
      schedule: replacedSchedule
    });
  } catch (error) {
    console.error("Error replacing schedule:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

// Delete schedule
export const deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    if (!schedule) return res.status(404).json({ message: "Schedule not found" });
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    console.error("Error deleting schedule:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};
