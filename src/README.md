# src Folder

The *src* folder contains all the source code for the *Neurons* web application, including both the frontend and backend components. This folder is crucial for development and contains the core logic and structure for the application's functionality.

## Folder Structure

The *src* folder is organized into two main subdirectories: `frontend` and `backend`. Each subdirectory holds the respective source code for the frontend and backend parts of the application.


## Components Overview

### 1. **Frontend**

The *frontend* folder contains all the code responsible for the user interface (UI) and user interactions with the *Neurons* web application. The frontend is built using React, a popular JavaScript library for building interactive UIs. The frontend is designed to be responsive and user-friendly, allowing students to interact with the system, view summaries, quizzes, and track their progress.

#### Key Features:
- **React Components**: The frontend is composed of multiple React components that handle different parts of the UI (e.g., header, summary display, quiz section, user profile).
- **State Management**: React's `useState` and `useContext` hooks are used to manage the application state, including user data, summaries, and quiz results.
- **Routing**: React Router is used to handle navigation between different pages or views of the application (e.g., Home, Summary, Quiz).
- **API Integration**: The frontend communicates with the backend using Axios to fetch and send data, such as summaries, quiz results, and user information.
- **Styling**: The frontend uses CSS/SCSS for styling, and a responsive layout is implemented using Flexbox and Grid.

#### Main Directories and Files:
- **components/**: Contains reusable UI components (e.g., `Header`, `SummaryCard`, `QuizQuestion`).
- **pages/**: Contains React components that represent full pages (e.g., `HomePage`, `SummaryPage`, `QuizPage`).
- **services/**: Contains code to interact with backend APIs (e.g., `apiService.js`).
- **App.js**: The root React component that handles routing and page layout.
- **index.js**: The entry point of the frontend application where React is initialized and rendered.

### 2. **Backend**

The *backend* folder contains all the code responsible for handling data processing, database interactions, and providing API endpoints for the frontend to communicate with. The backend is built using Flask, a lightweight Python web framework. It exposes a set of RESTful APIs that the frontend consumes to interact with the system.

#### Key Features:
- **Flask API**: The backend exposes several endpoints for handling content summarization, quiz generation, user authentication, and more.
- **Database**: The backend interacts with a database (e.g., PostgreSQL, MongoDB) to store user data, summaries, quiz results, and other necessary information.
- **Authentication**: User authentication is handled through JWT (JSON Web Tokens) to ensure secure login and access to user-specific data.
- **Data Processing**: The backend handles the processing of text data (e.g., summarization using machine learning models) and quiz generation logic.
- **API Documentation**: The backend includes an OpenAPI (Swagger) documentation for all exposed endpoints, making it easier for developers to understand and interact with the API.

#### Main Directories and Files:
- **app/**: Contains the main Flask application and routes.
  - **routes.py**: Defines the API endpoints and their associated logic.
  - **models.py**: Defines the data models (e.g., `User`, `QuizResult`).
  - **controllers/**: Contains the logic for handling requests, processing data, and returning responses.
  - **services/**: Includes any external integrations or service layers (e.g., text summarization, quiz generation).
- **config/**: Contains configuration files for the Flask application, such as environment variables, database connection settings, and API keys.
- **requirements.txt**: Lists the Python dependencies required to run the backend (e.g., Flask, SQLAlchemy, JWT).
- **run.py**: The entry point to start the Flask application, typically executed with `python run.py`.

### 3. **Shared**

The *shared* folder contains code that is used across both the frontend and backend (if applicable). This might include shared utilities or constants that both parts of the application need.

## Development Workflow

The development workflow involves both frontend and backend components. Here's a typical workflow for working on the *Neurons* web application:

1. **Set up the frontend**: 
   - Navigate to the `frontend/` directory.
   - Install dependencies by running `npm install` or `yarn install`.
   - Start the frontend development server with `npm start` or `yarn start`.

2. **Set up the backend**:
   - Navigate to the `backend/` directory.
   - Create a virtual environment with `python -m venv venv`.
   - Install the required Python packages with `pip install -r requirements.txt`.
   - Run the Flask server with `python run.py`.

3. **Frontend and Backend Integration**:
   - The frontend communicates with the backend through RESTful APIs.
   - Ensure the backend is running before testing the frontend to make sure API calls are successful.

## Running the Application

To run the entire application, you will need to start both the frontend and backend components:

### Frontend:
1. Navigate to the `frontend/` directory.
2. Run the following command to install dependencies:

   ```bash
   npm install

npm start
Access the application at http://localhost:3000.

Navigate to the backend/ directory.

Set up the virtual environment:

bash
Copy code
python -m venv venv
Install the required dependencies:

bash
Copy code
pip install -r requirements.txt
Run the Flask application:

bash
Copy code
python run.py
The backend will be available at http://localhost:5000.


