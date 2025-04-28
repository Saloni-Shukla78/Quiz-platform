import React from 'react';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;
  
    const handleLogout = async () => {
      await signOut(auth);
      navigate('/login');
    };
  
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-6">
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center">
          <h1 className="text-3xl font-bold text-indigo-600 mb-6">
            Welcome {user?.displayName || "User"}!
          </h1>
          <p className="text-gray-700 mb-8">You're successfully logged in!</p>
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl transition duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    );
  };
  

export default Dashboard;
