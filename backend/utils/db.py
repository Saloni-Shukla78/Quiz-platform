from pymongo import MongoClient
from urllib.parse import quote_plus

username = quote_plus("salonishukla875")
password = quote_plus("Saloni7388") 

MONGO_URI = f"mongodb+srv://{username}:{password}>@cluster0.sr1z5jc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tlsAllowInvalidCertificates=true"

client = MongoClient(MONGO_URI ,tls=True)
db = client['quiz_app']  # This will be created automatically if it doesn't exist
quiz_collection = db['quizzes']  # This will be created automatically if it doesn't exist

def test_connection():
    try:
        client.admin.command('ping')
        print("MongoDB connected successfully!")
    except Exception as e:
        print("Failed to connect to MongoDB:", e)
    
