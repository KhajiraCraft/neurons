# Meeting Minutes 8

**Team name:** Neurons  
**Members present:** Imelda Alwana, Christopher Khajira  
**Date:** 2024-11-15  
**Time:** 3:30 PM  

---

## Discussion Points  

### Frontend Integration  
- **Imelda** developed the summarization page with:  
  - A text input box and a button to call the backend API.  
  - A progress spinner to indicate when the summarization is in progress.  
- Decided to display the summary in a card format for better readability.  

### Text Summarization Backend  
- **Christopher** successfully set up the `/summarize` API endpoint using OpenAI GPT.  
- Tested the endpoint with various text inputs:  
  - Results were accurate but slow for large inputs.  
- Agreed to set a **character limit** for input text to optimize response time.  

---

## Goals for Next Week  
- **Christopher:** Optimize the summarization API and improve error handling for invalid inputs.  
- **Imelda:** Style the summarization results and test API integration in the React app.  
