from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv
from summarizer.text_summarizer import summarize_text
from quiz_generator.quiz_maker import generate_quiz
from flask_cors import CORS

load_dotenv()

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow React's frontend

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/summarize", methods=["POST"])
def summarize():
    try:
        # Get JSON data from the request
        # data = request.json
        # text = data.get("text")
        text = request.form.get("text")
        if not text:
            return jsonify({"error": "Text field is required"}), 400

        # Generate the summary
        summary = summarize_text(text)
        return jsonify({"summary": summary})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/generate_quiz", methods=["POST"])
def generate_quiz_endpoint():
    try:
        # Get JSON data from the request

        summary = request.form.get("summary")

        if not summary:
            return jsonify({"error": "Summary field is required"}), 400

        # Generate the quiz
        quiz = generate_quiz(summary)
        return jsonify(quiz)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
