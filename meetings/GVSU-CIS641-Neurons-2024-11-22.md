# Meeting Minutes 9

**Team name:** Neurons  
**Members present:** Imelda Alwana, Christopher Khajira  
**Date:** 2024-11-22  
**Time:** 4:00 PM  

---

## Discussion Points  

### Frontend Design for Quizzes  
- **Imelda** designed a mockup for the quiz customization page. Key features include:  
  - Dropdown for selecting the number of questions (e.g., 5, 10, 15).  
  - Radio buttons for selecting question types (e.g., multiple-choice, true/false).  

### Quiz Generation API Design  
- **Christopher** proposed the structure for the `/generate-quiz` endpoint:  
  - **Input:** Summarized text, number of questions, and question type.  
  - **Output:** A JSON response with the quiz questions and answers.  
- Discussed the importance of ensuring that quiz questions are contextually accurate and tied to the summarized text.  

---

## Goals for Next Week  
- **Imelda:** Begin developing the quiz customization page in React.  
- **Christopher:** Implement the `/generate-quiz` API endpoint and test with sample data.  
