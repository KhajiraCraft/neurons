import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const QuizPage = () => {
   const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correct: 2,
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correct: 1,
    },
    {
      id: 3,
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correct: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [direction, setDirection] = useState(0);

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

  const handleSubmit = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) {
        score += 1;
      }
    });

    const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');
    quizResults.push({
      date: new Date().toLocaleString(),
      score: `${score} / ${questions.length}`,
    });
    localStorage.setItem('quizResults', JSON.stringify(quizResults));

   navigate('/progressPage');
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center justify-center">
   
      <header className="w-full bg-gray-800 py-4 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">Test Your Understanding</h1>
          <a href="/" className="text-gray-400 hover:text-teal-300 text-lg">
            Home
          </a>
        </div>
      </header>

     
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-4xl"> 
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentQuestionIndex}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-semibold text-teal-400 mb-4">
                Question {currentQuestionIndex + 1}/{questions.length}
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                {currentQuestion.question}
              </p>
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left py-3 px-4 rounded-lg border ${
                      answers[currentQuestionIndex] === index
                        ? 'bg-teal-600 text-white'
                        : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="w-full bg-gray-800 py-4 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
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
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-400 disabled:opacity-50"
              disabled={answers[currentQuestionIndex] === undefined}
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-400 disabled:opacity-50"
              disabled={answers[currentQuestionIndex] === undefined}
            >
              Submit
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};

export default QuizPage;
