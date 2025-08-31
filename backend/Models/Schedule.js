import mongoose from "mongoose";

const { Schema } = mongoose;

const assignedEmployeeSchema = new mongoose.Schema({
  role: { type: String, required: true },
  employeeId: { type: String } // You said you're using strings, not ObjectId
});

const scheduleSchema = new Schema(
  {
    // Basic schedule information
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Department/Unit information
    department: {
      type: String,
      required: true,
      enum: [
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
      ],
    },

    // Shift information
    shiftType: {
      type: String,
      enum: ["Day", "Evening", "Night", "On-call"],
      required: true,
    },

    // Date and time
    date: {
      type: Date,
      required: true,
    },

    startTime: {
      type: String, // Format: "HH:MM"
      required: true,
      validate: {
        validator: function (v) {
          return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
        },
        message: "Start time must be in HH:MM format",
      },
    },

    endTime: {
      type: String, // Format: "HH:MM"
      required: true,
      validate: {
        validator: function (v) {
          return /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
        },
        message: "End time must be in HH:MM format",
      },
    },

    // Employee assignment
    assignedEmployees: [
      {
        employeeId: {
          type: String, // Keep as String since you don’t have Employee model
          required: true,
        },
        role: {
          type: String,
          enum: [
            "Doctor",
            "Nurse",
            "Technician",
            "Administrator",
            "Support Staff",
          ],
          required: true,
        },
      },
    ],

    // Schedule status
    status: {
      type: String,
      enum: ["Scheduled", "Active", "Completed", "Cancelled"],
      default: "Scheduled",
    },

    // Location
    location: {
      type: String,
      required: true,
    },

    // Extra details
    description: {
      type: String,
      trim: true,
    },

    // Minimum required staff
    minimumStaff: {
      type: Number,
      default: 1,
    },

    // Maximum capacity
    maximumStaff: {
      type: Number,
      default: 10,
    },

    // Special requirements
    specialRequirements: [
      {
        type: String,
      },
    ],

    // Created by (supervisor/admin)
    createdBy: {
      type: String, // Using String instead of ObjectId
      required: true,
    },
  },
  {
    timestamps: true, // Handles createdAt & updatedAt automatically
  }
);

// Indexes for faster queries
scheduleSchema.index({ date: 1, department: 1 });
scheduleSchema.index({ "assignedEmployees.employeeId": 1 });
scheduleSchema.index({ status: 1 });

// Virtual for schedule duration
scheduleSchema.virtual("duration").get(function () {
  const start = new Date(`2000-01-01T${this.startTime}`);
  const end = new Date(`2000-01-01T${this.endTime}`);
  const diffMs = end - start;
  return Math.round(diffMs / (1000 * 60)); // Duration in minutes
});

export default mongoose.model("Schedule", scheduleSchema);
