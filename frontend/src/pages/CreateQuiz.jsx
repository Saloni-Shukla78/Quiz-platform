import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CreateQuiz = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([
    {
      question: '',
      options: ['', '', '', ''],
      correctAnswer: 0,
    },
  ]);
  const [quizSaved, setQuizSaved] = useState(false);

  const handleQuestionChange = (index, value) => {
    const updated = [...questions];
    updated[index].question = value;
    setQuestions(updated);
  };

  const handleOptionChange = (qIndex, oIndex, value) => {
    const updated = [...questions];
    updated[qIndex].options[oIndex] = value;
    setQuestions(updated);
  };

  const handleCorrectAnswerChange = (qIndex, value) => {
    const updated = [...questions];
    updated[qIndex].correctAnswer = parseInt(value);
    setQuestions(updated);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: 0 }]);
  };

  const removeQuestion = (index) => {
    const updated = questions.filter((_, i) => i !== index);
    setQuestions(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const quizData = {
      title: quizTitle,
      description,
      questions,
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/quizzes', quizData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      console.log('Quiz created:', response.data);
  
      // Reset form after successful save
      setQuizTitle('');
      setDescription('');
      setQuestions([
        {
          question: '',
          options: ['', '', '', ''],
          correctAnswer: 0,
        },
      ]);
  
      // Show success message
      setQuizSaved(true);
  
      // Hide success message after 3 seconds
      setTimeout(() => setQuizSaved(false), 3000);
    } catch (error) {
      console.error('Error creating quiz:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 px-4 py-12 flex justify-center">
      <motion.div
        className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-10 space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-indigo-700 text-center">Create a New Quiz</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block mb-2 text-sm text-gray-600">Quiz Title</label>
            <input
              type="text"
              value={quizTitle}
              onChange={(e) => setQuizTitle(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter quiz title"
              required
            />
          </div>

          
          <div>
            <label className="block mb-2 text-sm text-gray-600">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Short description about the quiz"
              rows="3"
            />
          </div>

          
          {questions.map((q, i) => (
            <div key={i} className="bg-indigo-50 p-4 rounded-xl space-y-4 relative">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-indigo-700">Question {i + 1}</h3>
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(i)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>

              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(i, e.target.value)}
                className="w-full p-2 border rounded-lg"
                placeholder="Enter question"
                required
              />

              
              {q.options.map((option, j) => (
                <input
                  key={j}
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(i, j, e.target.value)}
                  className="w-full p-2 border rounded-lg mb-2"
                  placeholder={`Option ${j + 1}`}
                  required
                />
              ))}

              
              <div>
                <label className="block text-sm text-gray-600 mb-1">Correct Answer</label>
                <select
                  value={q.correctAnswer}
                  onChange={(e) => handleCorrectAnswerChange(i, e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  {q.options.map((option, index) => (
                    <option key={index} value={index}>
                      {option ? option : `Option ${index + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          
          <button
            type="button"
            onClick={addQuestion}
            className="w-full bg-indigo-100 text-indigo-700 hover:bg-indigo-200 font-medium py-2 rounded-xl"
          >
            + Add Another Question
          </button>

          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 rounded-xl transition"
          >
            Save Quiz
          </button>

          
          {quizSaved && (
            <div className="mt-4 text-green-600 text-center font-semibold">
              Quiz Saved Successfully!
            </div>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default CreateQuiz
