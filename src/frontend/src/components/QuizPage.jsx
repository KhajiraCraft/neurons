import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quizData = location.state?.quizData || [];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(0);

  if (!quizData.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col">
        <header className="w-full bg-gray-800 py-4 px-6 shadow-lg">
          <h1 className="text-2xl font-bold text-teal-400">Test Your Understanding</h1>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center">
          <p className="text-lg text-teal-400 mb-4">
            No quiz data available. Please generate a quiz first.
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-400"
          >
            Go to Home
          </button>
        </main>
        <footer className="w-full bg-gray-800 py-4 px-6 shadow-lg text-center text-gray-400">
          © 2024 Quiz App
        </footer>
      </div>
    );
  }

  const questions = quizData;

  const handleOptionSelect = (index) => {
    setAnswers({ ...answers, [currentQuestionIndex]: index });
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleSubmit = async () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] !== undefined && q.choices[answers[i]] === q.answer) {
        score += 1;
      }
    });

    try {
      await addDoc(collection(db, 'quizResults'), {
        score: `${score} / ${questions.length}`,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('Error saving quiz result:', error);
    }

    navigate('/progressPage');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col">
      <header className="w-full bg-gray-800 py-4 px-6 shadow-lg">
        <h1 className="text-2xl font-bold text-teal-400">Test Your Understanding</h1>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <AnimatePresence initial={false} custom={direction}>
            {currentQuestion && (
              <motion.div
                key={currentQuestionIndex}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                className="bg-gray-800 p-8 rounded-lg shadow-lg"
              >
                <h2 className="text-xl font-semibold text-teal-400 mb-4">
                  Question {currentQuestionIndex + 1}/{questions.length}
                </h2>
                <p className="text-lg text-gray-300 mb-6">{currentQuestion.question}</p>
                <div className="space-y-4">
                  {currentQuestion.choices.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleOptionSelect(index)}
                      className={`w-full text-left py-3 px-4 rounded-lg border ${answers[currentQuestionIndex] === index
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-700 hover:bg-gray-600'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <footer className="w-full bg-gray-800 py-4 px-6 shadow-lg flex justify-between">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-gray-700 text-gray-300 rounded-lg hover:bg-gray-600 disabled:opacity-50"
          disabled={currentQuestionIndex === 0}
        >
          Back
        </button>
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-400"
            disabled={answers[currentQuestionIndex] === undefined}
          >
            Next
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400"
          >
            Submit
          </button>
        )}
      </footer>
    </div>
  );
};

export default QuizPage;
