import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Backend URL

// Get all quizzes
export const fetchQuizzes = async () => {
  const response = await axios.get(`${API_BASE_URL}/quizzes`);
  return response.data;
};

// Create a new quiz
export const createQuiz = async (quizData) => {
  const response = await axios.post(`${API_BASE_URL}/quizzes`, quizData);
  return response.data;
};

// Get a single quiz
export const fetchQuizById = async (quizId) => {
  const response = await axios.get(`${API_BASE_URL}/quizzes/${quizId}`);
  return response.data;
};

// Update a quiz
export const updateQuiz = async (quizId, updatedData) => {
  const response = await axios.put(`${API_BASE_URL}/quizzes/${quizId}`, updatedData);
  return response.data;
};

// Delete a quiz
export const deleteQuiz = async (quizId) => {
  const response = await axios.delete(`${API_BASE_URL}/quizzes/${quizId}`);
  return response.data;
};
