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
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        setUser(res.user);
        console.log(res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // github provider
  const singInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  // logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError("");
      });
  };
  //  onAuthStateChanged
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
      }
    });
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
  };
};

export default useFirebase;
