import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const PromptPage = () => {
  const [complexText, setComplexText] = useState('');
  const [simplifiedText, setSimplifiedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [quizData, setQuizData] = useState(null);
  const navigate = useNavigate();

  const handleSimplify = () => {
    if (!complexText.trim()) {
      setSimplifiedText('Please provide some text to simplify.');
      return;
    }

    setIsLoading(true);
    setSimplifiedText(''); 

    
    const dataToSend = new FormData();
    dataToSend.append('text', complexText); 

    fetch('http://localhost:5000/summarize', {
      method: 'POST',
      body: dataToSend, 
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setSimplifiedText(data.summary || 'No summary was provided by the backend.');
      })
      .catch((error) => {
        console.error('Error during POST request:', error);
        setSimplifiedText('Error occurred while processing your request.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGenerateQuiz = () => {
    if (!simplifiedText.trim()) {
      setSimplifiedText('Please generate a summary first.');
      return;
    }

    // Use the simplified text to generate a quiz
    const dataToSend = new FormData();
    dataToSend.append('summary', simplifiedText); // Key 'summary' matches the backend

    fetch('http://localhost:5000/generate_quiz', {
      method: 'POST',
      body: dataToSend, // Send FormData instead of JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setQuizData(data.quiz || []);
        navigate('/quizPage');
      })
      .catch((error) => {
        console.error('Error during quiz generation request:', error);
      });
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setComplexText(e.target.result);
      reader.readAsText(file);
    }
  };

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
            <a href="/" className="hover:text-teal-300 text-lg">
              Back to Home
            </a>
          </nav>
        </motion.div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center text-center w-full p-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-extrabold text-teal-400 mb-4">Simplify Complex Content</h2>
          <p className="text-gray-400 text-lg">
            Paste or upload your complex text, and let us simplify it for you.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full max-w-4xl bg-gray-800 shadow-lg p-6 rounded-lg mb-6"
        >
          <textarea
            className="w-full p-4 h-40 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            placeholder="Paste your complex text here..."
            value={complexText}
            onChange={(e) => setComplexText(e.target.value)}
          />
          <div className="flex justify-between items-center mt-4">
            <label
              htmlFor="fileUpload"
              className="bg-green-500 text-gray-900 px-4 py-2 rounded-lg cursor-pointer hover:bg-green-400"
            >
              Upload File
            </label>
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              onClick={handleSimplify}
              className="bg-teal-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-teal-400"
            >
              Simplify Text
            </button>
          </div>
        </motion.div>

        {isLoading ? (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="w-full max-w-4xl bg-gray-800 shadow-lg p-6 rounded-lg flex items-center justify-center"
          >
            <div className="text-teal-400 font-semibold text-lg">Processing...</div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            className="w-full max-w-4xl bg-gray-800 shadow-lg p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-teal-400 mb-4">Simplified Text:</h3>
            <p className="text-gray-300">
              {simplifiedText || 'Your simplified text will appear here...'}
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          className="w-full max-w-4xl bg-gray-800 shadow-lg p-6 rounded-lg mt-6 text-center"
        >
          <button
            onClick={handleGenerateQuiz}
            className="bg-purple-500 text-gray-900 px-6 py-2 rounded-lg shadow-md hover:bg-purple-400"
          >
            Generate Quiz
          </button>
        </motion.div>
      </main>

      <footer className="w-full bg-gray-900 text-gray-500 py-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-7xl mx-auto px-4 text-center"
        >
          <p>&copy; {new Date().getFullYear()} SOMA. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
};

export default PromptPage;
