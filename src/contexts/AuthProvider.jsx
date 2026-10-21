import { useEffect, useState } from "react";
import {signInWithEmailAndPassword, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { AuthContext } from "./AuthContext";



const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const withLoading = async (fn) => {
    setLoading(true);
    try {
      return await fn();
    } catch (err) {
      setLoading(false);
      throw err;
    }
  };

  const signIn = (email, password) =>
    withLoading(() => signInWithEmailAndPassword(auth, email, password));

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  },[]);

  const authInfo = {
    user,
    loading,
    signIn,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
