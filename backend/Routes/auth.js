// backend/routes/auth.js
import express from "express";
import { createUser, login} from "../Controllers/authControllers.js";

const router = express.Router();

// ========================
// Auth Routes
// ========================

// Create user (register)
router.post("/", createUser);

// Login user
router.post("/login", login);



export default router;
