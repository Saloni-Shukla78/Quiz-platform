import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  // Replace with backend fetch
  useEffect(() => {
    const sampleScores = [
      { name: "Anika Sharma", score: 9 },
      { name: "Rahul Mehta", score: 8 },
      { name: "Neha Verma", score: 7 },
      { name: "Amit Singh", score: 6 },
      { name: "Saloni Shukla", score: 5 },
    ];
    // Sort high to low
    setScores(sampleScores.sort((a, b) => b.score - a.score));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-12 px-4">
      <motion.div
        className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center mb-6">
          🏆 Leaderboard
        </h2>

        <div className="grid gap-4">
          {scores.map((user, index) => (
            <motion.div
              key={index}
              className={`flex items-center justify-between px-5 py-3 rounded-xl shadow-sm ${
                index === 0
                  ? "bg-yellow-100"
                  : index === 1
                  ? "bg-gray-200"
                  : index === 2
                  ? "bg-orange-100"
                  : "bg-gray-50"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex items-center gap-4">
                <span className="text-xl font-bold text-indigo-600 w-6 text-right">
                  #{index + 1}
                </span>
                <span className="text-lg font-medium text-gray-700">
                  {user.name}
                </span>
              </div>
              <span className="text-indigo-700 font-semibold">{user.score} pts</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}


export default Leaderboard