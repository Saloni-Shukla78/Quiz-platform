from flask import Blueprint, request, jsonify
from firebase_config import db

quiz_bp = Blueprint('quiz_bp', __name__)

# Route to create a quiz
@quiz_bp.route('/api/quizzes', methods=['POST'])
def create_quiz():
    try:
        # Get quiz data from the request body
        data = request.get_json()
        
        # Validate the incoming data
        if not data.get("title") or not data.get("questions"):
            return jsonify({"error": "Missing quiz title or questions"}), 400
        
        # Prepare the data to save in Firestore
        quiz_data = {
            "title": data["title"],
            "description": data.get("description", ""),
            "questions": data["questions"],  # Questions array
        }

        # Add quiz to Firestore
        quiz_ref = db.collection('quizzes').add(quiz_data)
        
        return jsonify({"message": "Quiz created successfully!", "quiz_id": quiz_ref.id}), 201
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Route to get a list of all quizzes
@quiz_bp.route('/api/quizzes', methods=['GET'])
def get_quizzes():
    try:
        quizzes = db.collection("quizzes").get()
        quiz_data = [quiz.to_dict() for quiz in quizzes]
        return jsonify({"quizzes": quiz_data}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Route to get a specific quiz by ID
@quiz_bp.route('/api/quizzes/<quiz_id>', methods=['GET'])
def get_quiz(quiz_id):
    try:
        # Fetch specific quiz by ID from Firestore
        quiz_ref = db.collection('quizzes').document(quiz_id)
        quiz = quiz_ref.get()
        
        if quiz.exists:
            quiz_data = quiz.to_dict()
            quiz_data['id'] = quiz.id
            return jsonify({"quiz": quiz_data}), 200
        else:
            return jsonify({"error": "Quiz not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 500
