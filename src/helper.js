import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, ...args)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
}

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, ...args)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
    });
}

export const getUserInfo = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
}