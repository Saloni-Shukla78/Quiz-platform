import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { getFirestore, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Leaderboard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        // Get Firestore instance
        const db = getFirestore();
        
        // Create a query to fetch leaderboard data, ordered by score in descending order, limiting to top 10
        const leaderboardRef = collection(db, "leaderboard");
        const leaderboardQuery = query(leaderboardRef, orderBy("score", "desc"), limit(10));
        
        // Fetch the leaderboard data from Firestore
        const querySnapshot = await getDocs(leaderboardQuery);
        const leaderboardData = [];

        // Process the fetched data
        querySnapshot.forEach((doc) => {
          leaderboardData.push(doc.data());
        });

        // Sort scores just in case
        const sortedScores = leaderboardData.sort((a, b) => b.score - a.score);
        setScores(sortedScores);
      } catch (error) {
        console.error("Failed to fetch leaderboard data:", error);
      }
    };

    fetchScores();
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
          {scores.length > 0 ? (
            scores.map((user, index) => (
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
            ))
          ) : (
            <div className="text-center text-gray-600">No scores yet.</div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Leaderboard
