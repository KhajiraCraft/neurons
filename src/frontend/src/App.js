// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Homepage from './components/Homepage';
// import PromptPage from './components/PromptPage';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import QuizPage from './components/QuizPage';
// import ProgressPage from './components/ProgressPage';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/promptPage" element={<PromptPage />} />
//         <Route path="/login" element={<Login/>} />
//         <Route path="/signup" element={<Signup/>} />
//         <Route path="/quizPage" element={<QuizPage/>  } />
//         <Route path="/progressPage" element={<ProgressPage/>} />
//       </Routes>
//     </Router>
   
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Data object to send in the POST request
       // const dataToSend = { text: 'This is a sample text to summarize.' };
        const dataToSend = { summary: 'summary' };
        fetch('/summarize', {
            method: 'POST', // Use the POST method
            headers: {
                'Content-Type': 'application/json', // Specify JSON format
            },
            body: JSON.stringify(dataToSend), // Send the data object as a JSON string
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json(); // Parse the JSON response
            })
            .then((responseData) => {
                setData(responseData); // Save the response data
            })
            .catch((error) => {
                console.error('Error during POST request:', error);
            });
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div>
            <h1>React Frontend</h1>
            {data ? (
                <>
                    <h2>Summary:</h2>
                    <p>{data.summary}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default App;
