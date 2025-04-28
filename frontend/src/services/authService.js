// src/services/authService.js
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

export const updateUserProfile = async (name) => {
  if (auth.currentUser) {
    await updateProfile(auth.currentUser, {
      displayName: name
    });
  }
};
