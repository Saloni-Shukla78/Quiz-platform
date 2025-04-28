import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const QuizAttempt = () => {
  const { quizId } = useParams();  // Get quizId from the URL params
  const [quiz, setQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(null);

  useEffect(() => {
    // Fetch quiz data from the backend
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/quizzes/${quizId}`);
        setQuiz(response.data);  // Set quiz data for the frontend
      } catch (error) {
        console.error("Error fetching quiz:", error);
      }
    };
    
    fetchQuiz();
  }, [quizId]);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold text-xl">
        No questions available for this quiz.
      </div>
    );
  }
  
  // Demo quiz structure in case of issues (this should come from backend)
  const questions = quiz.questions;

  const handleOptionClick = (index) => {
    const updated = [...selectedAnswers];
    updated[currentQ] = index;
    setSelectedAnswers(updated);
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Final Submit - Calculate score
      let calculatedScore = 0;
      questions.forEach((q, i) => {
        if (selectedAnswers[i] === q.correctAnswer) {
          calculatedScore++;
        }
      });
      setScore(calculatedScore);
    }
  };

  const restartQuiz = () => {
    setCurrentQ(0);
    setSelectedAnswers([]);
    setScore(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl bg-white p-8 rounded-3xl shadow-lg space-y-6">
        {score === null ? (
          <>
            <h2 className="text-xl font-semibold text-indigo-700">
              Question {currentQ + 1} of {questions.length}
            </h2>
            <p className="text-lg font-medium text-gray-700">
              {questions[currentQ].question}
            </p>

            <div className="grid gap-4 mt-4">
              {questions[currentQ].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleOptionClick(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl border transition 
                    ${selectedAnswers[currentQ] === i
                      ? "bg-indigo-100 border-indigo-400 text-indigo-700 font-semibold"
                      : "bg-gray-50 hover:bg-gray-100 border-gray-300"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-xl hover:bg-indigo-700 font-bold"
            >
              {currentQ < questions.length - 1 ? "Next" : "Submit"}
            </button>
          </>
        ) : (
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-indigo-700">Quiz Completed!</h2>
            <p className="text-lg font-medium text-gray-700">
              Your Score: <span className="text-indigo-600">{score}</span> / {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizAttempt;
