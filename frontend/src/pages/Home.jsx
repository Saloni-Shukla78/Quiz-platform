import React from 'react'
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center px-6 py-12">
      <motion.div 
        className="text-center text-white max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wide">
          Create, Share, and Conquer Quizzes!
        </h1>

        <p className="text-lg md:text-xl mb-8 font-light">
          Unlock your learning potential with our interactive quiz platform.  
          Create your own quizzes or challenge yourself today!
        </p>

        <Link to="/signup">
          <button className="bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-800 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition duration-300">
            Get Started
          </button>
        </Link>
      </motion.div>
    </div>
    </>
  )
}

export default Home