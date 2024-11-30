import React, { createContext, useState } from "react";
import auth from "../firebase/firebase.confing";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// Create a Context
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // Define any state or functions you want to provide
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handelRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const value = {
    user,
    setUser,
    handelRegister,
    handleLogin,
    handleGoogleLogin,
  };

  // Pass the value prop to the Provider
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
