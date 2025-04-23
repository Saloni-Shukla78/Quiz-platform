import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
     <nav className="bg-gradient-to-r from-indigo-500 to-purple-500 shadow-md fixed w-full z-50 top-0">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold tracking-wide">
              QuizMaster
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/quizzes" className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
              Quizzes
            </Link>
            <Link to="/create-quiz" className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
              Create Quiz
            </Link>
            <Link to="/leaderboard" className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300">
              Leaderboard
            </Link>
            <Link to="/login" className="ml-4 bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-800 px-6 py-2 rounded-full text-sm font-bold shadow transition duration-300">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-indigo-500 to-purple-500 shadow-lg">
          <div className="px-6 py-6 space-y-6 flex flex-col items-center">
            <Link to="/quizzes" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-yellow-300">
              Quizzes
            </Link>
            <Link to="/create-quiz" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-yellow-300">
              Create Quiz
            </Link>
            <Link to="/leaderboard" onClick={() => setMenuOpen(false)} className="text-white text-lg hover:text-yellow-300">
              Leaderboard
            </Link>
            <Link to="/login" onClick={() => setMenuOpen(false)} className="bg-white text-indigo-600 hover:bg-yellow-300 hover:text-indigo-800 px-5 py-2 rounded-full text-base font-semibold transition">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar