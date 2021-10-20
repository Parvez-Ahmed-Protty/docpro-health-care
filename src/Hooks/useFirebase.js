import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  //  auth provider
  const auth = getAuth();
  // state user
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[loading, setLoading] = useState(true);
  // google provider
  const googleProvider = new GoogleAuthProvider();
  // github provider
  const githubProvider = new GithubAuthProvider();
  // sing in with email and password
  const handelName = (e) => {
    setName(e.target.value);
  };
  const handalEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handelPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  // email and password
  const SingInWithEmailPassword = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const newUser = res.user;
        newUser.displayName = name;
        setUser(newUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // singin with google
  const singInWithGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
      
  };
  // github provider
  const singInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
  
  };
  // logOut
  const logOut = () => {
    setLoading(true)
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //  onAuthStateChanged
  useEffect(() => {
    const stateChange =  onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
      setLoading(false)
    })
    return stateChange;
  }, []);
  return {
    user,
    error,
    singInWithGoogle,
    singInWithGithub,
    logOut,
    handalEmailChange,
    handelPasswordChange,
    SingInWithEmailPassword,
    handelName,
    loading,
    setLoading,
    setError
  };
};

export default useFirebase;
