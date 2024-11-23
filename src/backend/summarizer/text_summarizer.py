from langchain_community.chat_models import ChatOpenAI  # Updated import
from .text_chunker import chunk_text
from dotenv import load_dotenv
import os

load_dotenv()  # Load API key from the .env file


def summarize_text(text):
    """Summarizes lengthy text using OpenAI's GPT model via LangChain."""
    llm = ChatOpenAI(
        temperature=0,
        model_name="gpt-3.5-turbo",
        openai_api_key=os.getenv("OPENAI_API_KEY"),
    )

    summaries = []
    for chunk in chunk_text(text):
        # Use a string prompt directly
        prompt = f"Summarize the following text concisely:\n\n{chunk}"

        # Debugging: Print the prompt to see the input being sent
        print("\n===== Sending Prompt to OpenAI =====")
        print(prompt)
        print("====================================\n")

        response = llm.predict(prompt)  # Use .predict() method to handle string input

        # Debugging: Print the response received from OpenAI
        print("\n===== OpenAI Response =====")
        print(response)
        print("===========================\n")

        summaries.append(response)

    # Combine all chunk summaries into a single summary
    return " ".join(summaries)
