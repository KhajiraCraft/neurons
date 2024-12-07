# Neurons

We are developing a web application called *Neurons* that summarizes long and complex text into simpler and more understandable content for students. The application leverages Large Language Models (LLMs) tuned using reactor agents with custom prompts to generate easy-to-understand summaries.

## Team Members and Roles

*  [Alwana Julliet Imelda](https://github.com/julienyaware/CIS641-HW2-Alwana/tree/main) (Backend Developer)
* [Christopher Khajira](https://github.com/KhajiraCraft/CIS641-HW2-Khajira) (Frontend Developer)

## Prerequisites

Before deploying the application, make sure you have the following tools and software installed:

- **Node.js** (v14.x or later)
- **npm** (v6.x or later)
- **React** (for the frontend)
- **Python** (v3.x or later)
- **Flask** (for the backend API)
- **Docker** (optional, for containerized deployment)

### Install Dependencies

In the project root directory, you will need to install the following dependencies:

#### Frontend (React)

1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

2. Install required npm packages:
    ```bash
    npm install
    ```

#### Backend (Flask)

1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Create and activate a virtual environment (optional but recommended):
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows, use 'venv\Scripts\activate'
    ```

3. Install the required Python packages:
    ```bash
    pip install -r requirements.txt
    ```

## Run Instructions

### Frontend

1. In the frontend directory, run the following command to start the React development server:
    ```bash
    npm start
    ```

   This will launch the React app at `http://localhost:3000`.

### Backend

1. In the backend directory, you can run the Flask application by executing:
    ```bash
    python app.py
    ```

   This will start the backend API server at `http://localhost:5000`.

### Testing the Application

- Open a browser and go to `http://localhost:3000` to interact with the frontend.
- The frontend will make API calls to the backend for summarization functionality, which will be processed and returned.

### Dockerized Deployment (Optional)

If you want to deploy the application using Docker, you can build and run the containers with the following steps:

1. **Build the Docker images** for both the frontend and backend:
    ```bash
    docker-compose build
    ```

2. **Run the containers**:
    ```bash
    docker-compose up
    ```

   The app will be available at `http://localhost:3000` (for frontend) and `http://localhost:5000` (for backend).

## Configuration

### React Frontend

The React app is configured with default settings that should work out of the box. However, if you need to modify configurations like API endpoints or environment variables, you can do so in the `.env` file located in the `frontend` directory.

### Flask Backend

The backend API is built using Flask and can be configured by modifying the `config.py` file. You may want to change things like the port or add more routes to extend functionality.

## Features

- **Text Summarization**: The app uses LLMs (Large Language Models) for summarizing long and complex text into simplified versions.
- **Customizable Prompts**: The backend is powered by reactor agents that allow customization of LLM prompts for tailored summaries.
- **Interactive UI**: Students can easily paste or upload text for summarization and view the results.

## Development

If you want to contribute to the development of the project, here are a few tips:

- **Frontend Development**: The React code is inside the `frontend` folder. You can edit components, pages, or add new features by following React development practices.
- **Backend Development**: The Flask API code is inside the `backend` folder. The API handles requests for summarization and can be extended with new endpoints as needed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- The team has leveraged powerful Large Language Models (LLMs) for text summarization.
- Special thanks to various open-source libraries used for building the application (e.g., React, Flask, etc.).
