import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaShieldAlt, FaClock, FaUserShield } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        // ✅ Store token & role in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.user.role);

        // ✅ Navigate based on role
        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard"); // Or any other page for normal users
        }
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 md:p-8"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1676364424409-e87919caffe1?q=80&w=1170&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>

      <div
        className="w-full max-w-6xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden flex flex-row relative z-10"
        style={{ height: "750px" }}
      >
        {/* Left section */}
        <div className="w-2/5 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-600 p-14 text-white flex flex-col justify-center relative">
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-8 leading-tight">
              Hospital Management System
            </h1>
            <p className="text-indigo-100 text-xl mb-12 opacity-90">
              Secure, efficient healthcare management platform
            </p>

            <div className="space-y-6 text-xl font-medium">
              <p className="flex items-center group cursor-pointer">
                <FaShieldAlt className="mr-3 w-6 h-6 text-pink-400 transform transition-transform duration-300 group-hover:scale-125" />
                HIPAA compliant data security
              </p>
              <p className="flex items-center group cursor-pointer">
                <FaClock className="mr-3 w-6 h-6 text-pink-400 transform transition-transform duration-300 group-hover:scale-125" />
                24/7 availability & support
              </p>
              <p className="flex items-center group cursor-pointer">
                <FaUserShield className="mr-3 w-6 h-6 text-pink-400 transform transition-transform duration-300 group-hover:scale-125" />
                Role-based access control
              </p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-3/5 p-14 flex flex-col justify-center bg-white relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Welcome Back
            </h2>
            <p className="text-gray-600 text-xl font-medium">
              Sign in to continue to your account
            </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                className={`w-full px-5 py-5 text-lg border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300`}
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-gray-800">
                Password
              </label>
              <input
                type="password"
                className={`w-full px-5 py-5 text-lg border-2 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-2xl focus:ring-4 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-300`}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
                />
                <span className="text-lg text-gray-800">Remember me</span>
              </label>
              <a
                href="#"
                className="text-lg text-pink-600 hover:text-pink-700 font-medium"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-white font-bold py-5 px-5 rounded-2xl shadow-xl transition-all duration-300 uppercase tracking-wider text-lg transform hover:scale-[1.02] active:scale-[0.99]"
            >
              {isLoading ? "Logging in..." : "Log In"}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-bold text-pink-600 hover:text-pink-700 underline"
              >
                Request access
              </a>
            </p>
          </div>

          <div className="mt-12 text-center border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-600">
              © 2025 WorkPulse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
