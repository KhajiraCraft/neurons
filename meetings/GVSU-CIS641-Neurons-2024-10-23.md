# Meeting Minutes 5

**Team name:** Neurons  
**Members present:** Imelda Alwana, Christopher Khajira  
**Date:** 2024-10-23  
**Time:** 4:00 PM  

---

## Discussion Points  

### UML Diagrams  

#### Sequence Diagrams (Christopher):  
- **Text Summarization Flow:**  
  - User submits text → Frontend sends request → Backend processes with LLM → Backend returns summary → Frontend displays summary.  
- **Quiz Generation Flow:**  
  - User selects options → Frontend sends request → Backend generates quiz → Backend returns quiz → Frontend displays quiz.  

#### Class Diagrams (Imelda):  
- Proposed classes:  
  - **User:**  
    - Attributes: ID, email, password, history.  
  - **Summarizer:**  
    - Methods: `summarizeText()`.  
  - **QuizGenerator:**  
    - Methods: `generateQuestions()`, `saveQuiz()`.  

### Feedback on UML Diagrams  
- **Imelda:** Proposed adding methods for error handling in each class.  
- **Christopher:** Suggested including relationships between `Summarizer` and `QuizGenerator`.  

### Object Diagrams  
- Decided to create object diagrams for specific scenarios, such as a user taking a quiz.  

---

## Goals for Next Week  
- **Imelda:** Expand class diagrams with methods for error handling and data persistence.  
- **Christopher:** Refine UML sequence diagrams and add object diagrams for quiz-related workflows.  
