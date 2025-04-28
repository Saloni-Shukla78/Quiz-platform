from flask import Flask, jsonify
from flask_cors import CORS
from firebase_config import db
from routes.quiz_routes import quiz_bp

app = Flask(__name__)
CORS(app)

# Register quiz routes
app.register_blueprint(quiz_bp)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Quiz Platform Backend!"})

if __name__ == '__main__':
    app.run(debug=True)
