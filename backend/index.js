import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./Routes/ScheduleRoutes.js";

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// ===== Middleware =====
app.use(express.json());
app.use(cors());

// ===== Routes =====
app.use("/api/schedules", router);

// ===== MongoDB Connection =====
const connectDB = async () => {
  try {
    if (!MONGO_URI) {
      throw new Error("MONGO_URI not found in .env file");
    }
    await mongoose.connect(MONGO_URI); // no options needed in Mongoose v6+
    console.log("✅ MongoDB Connected to Atlas Cluster");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

// ===== Start Server =====
const startServer = async () => {
  try {
    await connectDB(); // Connect DB first
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1);
  }
};

startServer();

// ===== Graceful Shutdown =====
process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("🛑 MongoDB connection closed");
  process.exit(0);
});
