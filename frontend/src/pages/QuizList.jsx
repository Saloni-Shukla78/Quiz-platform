import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ref, get } from 'firebase/database';
import { db } from '../firebase';
import axios from "axios";


const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/quizzes");
        setQuizzes(response.data.quizzes);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 px-6 py-12">
      <motion.h2
        className="text-3xl font-bold text-indigo-700 text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Available Quizzes
      </motion.h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz, index) => (
          <motion.div
            key={quiz._id || index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition hover:scale-[1.02] flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
          >
            <div>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {quiz.title}
              </h3>
              <p className="text-gray-600 mb-3">{quiz.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                {quiz.questions.length} Questions
              </p>
            </div>

          {quizzes.map(quiz => (
            <Link
              to={`/quiz/${quiz._id}`}
              className="mt-auto inline-block cursor-pointer text-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition font-medium"
            >
              Start Quiz
            </Link>
          ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QuizList