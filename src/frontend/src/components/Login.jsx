import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error.message);
      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8"
      >

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-teal-400">LOGIN</h1>
          <p className="text-gray-400">Log in to continue</p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-gray-900 py-3 rounded-lg font-semibold hover:bg-teal-400"
          >
            Log In
          </button>
        </form>


        <p className="text-center text-gray-400 mt-6">
          Don’t have an account?{' '}
          <a
            href="/signup"
            className="text-teal-400 font-medium hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-teal-400 font-medium hover:underline"
          >
            Back to Homepage
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
