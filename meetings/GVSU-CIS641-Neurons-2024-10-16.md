# Meeting Minutes 4

**Team name:** Neurons 
**Members present:** Imelda Alwana, Christopher Khajira  
**Date:** 2024-10-16  
**Time:** 3:30 PM  

---

## Discussion Points  

### CRC Cards  
- **Christopher** created initial CRC cards for key components:  
  - **User Authentication:**  
    - **Responsibilities:** Handle user registration, login, and password reset.  
    - **Collaborators:** Firebase Authentication service.  
  - **Summarizer:**  
    - **Responsibilities:** Process input text and return a summarized version.  
    - **Collaborators:** LLM API (OpenAI GPT).  
  - **Quiz Generator:**  
    - **Responsibilities:** Generate quizzes based on summarized text.  
    - **Collaborators:** Summarizer.  

### Feedback on CRC Cards  
- **Imelda** suggested breaking the **Quiz Generator** into subcomponents for better modularity:  
  - **Question Creator:** Generates questions.  
  - **Quiz Manager:** Handles customization and scoring.  

### Wireframes and UI Mockups  
- **Imelda** presented wireframes for:  
  - Login page.  
  - Text summarization page.  
  - Quiz customization and interaction pages.  
- **Feedback from Christopher:** Simplify navigation and add clear indicators for progress.  

---

## Next Steps  
- Plan UML diagrams to visualize system interactions and refine CRC cards.  

---

## Goals for Next Week  
- **Imelda:** Prepare UML class diagrams for frontend and backend components.  
- **Christopher:** Create sequence diagrams for the main use cases (e.g., text summarization, quiz generation).  
