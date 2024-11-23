# Meeting Minutes 6

**Team name:** Neurons  
**Members present:** Imelda Alwana, Christopher Khajira  
**Date:** 2024-10-30  
**Time:** 3:00 PM  

---

## Discussion Points  

### Refined Class Diagrams  
- Added error-handling methods to the following classes:  
  - **Summarizer:** `handleInvalidInput()`.  
  - **QuizGenerator:** `handleQuizErrors()`.  

### Object Diagrams  
- **Christopher** created an object diagram for the **summarization workflow**:  
  - **Objects involved:** User, Summarizer, LLM API.  
- **Imelda** created an object diagram for the **quiz interaction workflow**:  
  - **Objects involved:** User, QuizManager, Question.  

### Relationships Between Models  
- Identified key relationships:  
  - **User** interacts with both **Summarizer** and **QuizGenerator**.  
  - **QuizGenerator** depends on the output from **Summarizer**.  
- Discussed using a **composite relationship** for Quiz and Question objects.  

### Next Steps  
- Finalized planning phase and agreed to begin technical implementation in the next meeting.  

---

## Goals for Next Week  
- **Christopher:** Set up the `/summarize` API using Flask.  
- **Imelda:** Set up Authentication and create basic UI for login and registration.  
