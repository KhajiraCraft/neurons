# Overview

The Software Requirements Specification (SRS) for the LLM Powered Education Summarization App provides a detailed description of the system’s functional and non-functional requirements.

# Fuctional Requirements
1. Sign Up and Login
            1.1 The system shall allow users to register an account using their email and password
    1.2 The system shall allow users to login to their accounts by providing their email and password
    1.3 The system shall allow users to reset their password to recover their account in case they forget their password
    1.4 The system shall allow users to log out after completing their session.
    1.5 The system shall send a verification email to the user's registered email address upon account creation to verify their identity

2. Content Summarization
    2.1 The system shall allow users to input educational content in text format for summarization
    2.2 The system shall generate customized summaries based pre-coded templates embedded in the application

3. Quiz Generation
    3.1 The application shall generate a quiz to gauge the user's understanding of the summary.
    3.2 The application shall provide feedback for the quiz to consolidate the knowledge
    3.3 The application shall allow users to track their progress by checking their previous scores
    3.4 The application shall randomize quiz questions to prevent repetition when the quiz is retaken
    3.5 The application shall allow users to review detailed explanations for correct and incorrect answers after completing the quiz.

5. Output Handling
    4.1 The system shall allow users to copy the generated output to the clipboard easily so that they can paste at a different destination
    4.2 The system shall allow users to download the output as a pdf file

# Non-Functional Requirements
1. Performance
     1.1 The system shall process and return content summaries within 10 seconds for documents under 500 words
     1.2 The system’s response time for generating quizzes based on summaries shall not exceed 20 seconds to maintain a smooth user experience
     1.3 The system shall be resilient during peak usage and support concurrent summarization text generation

2. Data Security
     2.1 The system shall protect the user's data through secure authentication measures

3. Availability
     3.1 The application shall always be available to users at all hours even during peak usage times

4. User Friendliness
     4.1 The user interface shall be intuitive and user-friendly, requiring no more than two steps to input text and receive a summary
     4.2 The system shall be accessible to users with disabilities from browsers, desktop or phones
   
   
