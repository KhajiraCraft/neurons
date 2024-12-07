import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import PromptPage from './components/PromptPage';
import Login from './components/Login';
import Signup from './components/Signup';
import QuizPage from './components/QuizPage';
import ProgressPage from './components/ProgressPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/promptPage" element={<PromptPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/quizPage" element={<QuizPage/>  } />
        <Route path="/progressPage" element={<ProgressPage/>} />
      </Routes>
    </Router>
   
  );
}

export default App;
