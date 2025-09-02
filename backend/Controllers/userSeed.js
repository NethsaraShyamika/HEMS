import User from './models/User.js';
import bcrypt from 'bcrypt';
import connectToDatabase from './db.js';

const userRegister = async () => {
  try {
    await connectToDatabase();  // Wait for connection

    // Hash the password you want for admin login
    const hashPassword = await bcrypt.hash("admin", 10);

    // If a user with the same email exists, delete it first (avoid duplicate key errors)
    await User.deleteOne({ email: "rachitaeshan@gmail.com" });

    // Create the admin user
    const newUser = new User({
      name: "Rachita Eshan",
      email: "rachitaeshan@gmail.com",
      password: hashPassword,
      role: "admin"
    });

    await newUser.save();
    console.log("✅ Admin user created successfully");
    process.exit(0);  // Exit after completion
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    process.exit(1);
  }
};

userRegister();
