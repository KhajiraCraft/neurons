from langchain_community.chat_models import ChatOpenAI
from dotenv import load_dotenv
import os

load_dotenv()  # Load API key from the .env file


def generate_quiz(summary):
    """Generates a 10-question multiple-choice quiz based on summarized content."""
    llm = ChatOpenAI(
        temperature=0,
        model_name="gpt-3.5-turbo",
        openai_api_key=os.getenv("OPENAI_API_KEY"),
    )

    # Use a string prompt directly
    prompt = f"""
    Based on the following summary, create a 10-question multiple-choice quiz in JSON format. 
    Each entry must include the question, answer choices, correct answer, and a placeholder for user selection.

    Summary:
    {summary}
    """

    # Debugging: Print the prompt to see the input being sent
    print("\n===== Sending Prompt to OpenAI =====")
    print(prompt)
    print("====================================\n")

    response = llm.predict(prompt)  # Use .predict() method to handle string input

    # Debugging: Print the response received from OpenAI
    print("\n===== OpenAI Response =====")
    print(response)
    print("===========================\n")

    # Ensure the JSON output is properly parsed
    return eval(response)  # Use `eval` cautiously for controlled input
