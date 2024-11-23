from pydantic import BaseModel, Field
from typing import List, Dict

class QuizQuestion(BaseModel):
    question: str = Field(description="Quiz question text")
    choices: List[str] = Field(description="Answer choices")
    user_selection: str = Field(default=None, description="User's chosen answer")
    correct_answer: str = Field(description="Correct answer to the question")

    def to_dict(self):
        return {
            "question": self.question,
            "choices": self.choices,
            "user_selection": self.user_selection,
            "correct_answer": self.correct_answer,
        }

class Quiz(BaseModel):
    questions: List[QuizQuestion] = Field(description="List of quiz questions")

    def to_dict(self):
        return {"questions": [q.to_dict() for q in self.questions]}
