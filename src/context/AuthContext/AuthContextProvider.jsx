import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  deleteUser,
} from "firebase/auth";
import auth from "@/firebase/firebase.init";
import { generateToken } from "@/services/TokenService";
import Loader from "@/components/Fallback/Loader";
import { getProfile } from "@/services/UserService";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signOutUser = () => {
    return signOut(auth);
  };

  const updateUser = (data) => {
    return updateProfile(auth.currentUser, {
      displayName: data.displayName,
      photoURL: data.photoURL,
    });
  };

  const removeUser = () => {
    return deleteUser(auth.currentUser);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        setUser(currentUser);
        const result = await generateToken(currentUser.email);
        if (!result.success) {
          signOut(auth);
          setLoading(false);
        }
        const profile = await getProfile();
        if (profile.success) {
          setUserProfile(profile.data);
        }
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }

  const authInfo = {
    createUser,
    signinUser,
    signOutUser,
    updateUser,
    removeUser,
    setLoading,
    setUser,
    loading,
    user,
    userProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
