import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import './App.css'
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import QuizList from "./pages/QuizList";
import CreateQuiz from "./pages/CreateQuiz";
import QuizAttempt from "./pages/QuizAttempt";
import Leaderboard from "./pages/Leaderboard";


function App() {

  return (
    <Router>
    {/* Navbar will be on all pages */}
    <Navbar />

    {/* Main Content */}
    <div className="pt-16 bg-gray-50"> {/* Padding to ensure content doesn't overlap the fixed navbar */}
      <Routes>
        {/* Define routes for the pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/create-quiz" element={<CreateQuiz />} />
        <Route path="/quiz/:id" element={<QuizAttempt />} />
        <Route path="/leaderboard/:quizId" element={<Leaderboard />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </div>
  </Router>

  )
}

export default App
