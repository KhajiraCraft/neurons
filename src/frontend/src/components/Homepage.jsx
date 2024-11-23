import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const sliderWords = [
    'Simplify Complex Content.',
    'Save Time, Stay Informed.',
    'Improve Your Understanding.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderWords.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col">
      <header className="w-full bg-gray-800 text-teal-400 py-4 shadow-md">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 flex justify-between items-center"
        >
          <h1 className="text-2xl font-bold">SOMA</h1>
          <nav>
            <ul className="flex space-x-6">
            <li>
                <Link to="/login" className="hover:text-teal-300">
                  Login
                </Link>
              </li> {/* Updated to use Link for navigation */}
              <li>
              <Link to="/quizPage" className="hover:text-teal-300">
                  Features
                </Link>
              </li>
              <li>
              <Link to="/progressPage" className="hover:text-teal-300">
                  About us 
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl font-extrabold text-teal-400 mb-4"
        >
          {sliderWords[currentIndex]}
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mb-6"
        >
          Our platform helps you summarize complex content into concise, easy-to-understand insights. Stay informed without having to go through long complex materials.
        </motion.p>
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          onClick={() => navigate('/promptPage')}
          className="bg-teal-500 text-gray-900 px-6 py-3 rounded-lg shadow-md hover:bg-teal-400"
        >
          Get Started
        </motion.button>
      </main>


      <section id="features" className="w-full bg-gray-800 py-12">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <h3 className="text-2xl font-bold text-teal-400 mb-6">Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-teal-400 mb-2">AI-Powered Summaries</h4>
              <p className="text-gray-400">Get concise, accurate simplified summaries of long complex content in seconds.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-teal-400 mb-2">Test Your Understanding</h4>
              <p className="text-gray-400">Take a small test to see if you have understood the content.</p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-teal-400 mb-2">Track Your Progress</h4>
              <p className="text-gray-400">View the results of your progress in comprehension of the material.</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="w-full bg-gray-900 text-gray-500 py-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <p>&copy; {new Date().getFullYear()} Soma. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default Homepage;
