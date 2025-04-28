import firebase_admin
from firebase_admin import credentials, firestore

# Path to your downloaded JSON file
cred = credentials.Certificate(r'C:\Users\dell\Downloads\quiz.json')

# Initialize Firebase app
firebase_admin.initialize_app(cred)

# Create Firestore client
db = firestore.client()
