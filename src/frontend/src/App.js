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

// import React, { useEffect, useState } from 'react';

// function App() {
//     const [data, setData] = useState(null);

//     useEffect(() => {
//         const dataToSend = new FormData();
//         dataToSend.append("text", "This is sample text to summarize."); // Use 'text' to match backend
    
//         fetch("http://localhost:5000/summarize", {
//             method: "POST",
//             body: dataToSend, // Send FormData instead of JSON
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 return response.json();
//             })
//             .then((responseData) => {
//                 setData(responseData);
//             })
//             .catch((error) => {
//                 console.error("Error during POST request:", error);
//             });
//     }, []);
    
//     return (
//         <div>
//             <h1>React Frontend</h1>
//             {data ? (
//                 <>
//                     <h2>Summary:</h2>
//                     <p>{data.summary}</p>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

// export default App;
