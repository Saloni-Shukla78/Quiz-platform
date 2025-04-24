import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 sm:px-6 py-10">
      <div className="w-full sm:max-w-xl md:max-w-4xl bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-16 lg:p-20">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-snug tracking-tight">
            Create, Share, and Conquer Quizzes!
          </h1>

          <p className="text-indigo-100 text-base sm:text-lg md:text-xl mb-10 font-light max-w-2xl mx-auto">
            A powerful quiz platform where learning meets fun. Build your own quizzes, challenge your friends, and climb the leaderboard.
          </p>

          <Link to="/signup">
            <button className="bg-white text-indigo-700 hover:bg-yellow-300 hover:text-indigo-800 px-8 py-3 rounded-full font-semibold text-lg shadow-md transition duration-300">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
