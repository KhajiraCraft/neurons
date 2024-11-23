import React from 'react';

const ProgressPage = () => {
  const quizResults = JSON.parse(localStorage.getItem('quizResults') || '[]');

  // Calculate average score
  const averageScore = quizResults.length
    ? Math.round(
        (quizResults.reduce((sum, result) => {
          const [score, total] = result.score.split(' / ').map(Number);
          return sum + (score / total) * 100;
        }, 0) / quizResults.length) || 0
      )
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 flex flex-col items-center">
    
      <header className="w-full bg-gray-800 py-4 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-teal-400">Quiz Progress</h1>
          <a href="/" className="text-gray-400 hover:text-teal-300 text-lg">
            Back to Home
          </a>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl bg-gray-800 shadow-lg p-8 rounded-lg mt-6">
        <h2 className="text-2xl font-bold text-teal-400 text-center mb-6">
          Your Quiz Results
        </h2>

        <div className="mb-6">
          <h3 className="text-lg text-gray-300 mb-2">Overall Performance:</h3>
          <div className="w-full bg-gray-700 rounded-lg h-6">
            <div
              className="bg-teal-500 h-6 rounded-lg text-center text-sm font-bold text-gray-900"
              style={{ width: `${averageScore}%` }}
            >
              {averageScore}%
            </div>
          </div>
        </div>

        {quizResults.length > 0 ? (
          <ul className="space-y-4">
            {quizResults.map((result, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-4 border border-gray-700 rounded-lg bg-gray-700 hover:bg-gray-600"
              >
                <span>{result.date}</span>
                <span className="font-bold text-teal-300">{result.score}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">
            No quiz results yet. Take a quiz to see your progress!
          </p>
        )}
      </main>
    </div>
  );
};

export default ProgressPage;
