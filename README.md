# 🎯 Quiz Platform

An interactive quiz application that allows users to take quizzes, view scores, and manage quiz content. The frontend is built with React and Tailwind CSS, while the backend is developed in Python, interfacing with Firebase Firestore for data storage.

---

## 🚀 Tech Stack

- **Frontend:**
  - React
  - Tailwind CSS
  - React Router

- **Backend:**
  - Python (Flask or FastAPI)
  - Firebase Admin SDK

- **Database:**
  - Firebase Firestore

- **Authentication:**
  - Firebase Authentication

---

## 📁 Project Structure

```
quiz-platform/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── tailwind.config.js
│   ├── package.json
│   └── ...
├── firebase.js
└── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/quiz-platform.git
cd quiz-platform
```

### 2. Firebase Configuration

- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
- Enable **Firestore** and **Authentication**.
- Obtain your Firebase config object and replace the placeholders in `firebase.js`:

```javascript
// firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_STORAGE_BUCKET',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- The frontend will be accessible at `http://localhost:5173/`.

### 4. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

- The backend API will run at `http://localhost:5000/`.

---

## 🔧 Features

- **User Authentication:** Secure login and registration using Firebase Authentication.
- **Quiz Management:** Create, read, update, and delete quizzes.
- **Quiz Attempt:** Users can attempt quizzes and receive immediate feedback.
- **Score Tracking:** User scores are stored and can be reviewed.
- **Responsive Design:** Mobile-friendly interface with Tailwind CSS.

---

## 📄 License

This project is licensed under the MIT License.

---
