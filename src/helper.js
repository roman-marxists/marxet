import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import Link from 'next/link';
import Router from 'next/router';

const auth = getAuth();

export const register = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      Router.push(`/user/${user}`);
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
      alert(error.message);
    });
}

export const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User successfully signed in
      const user = userCredential.user;
      Router.push('/products/1');
    })
    .catch((error) => {
      console.error(error.code);
      console.error(error.message);
      alert(error.message);
    });
}

export const getUserInfo = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      Router.push('/search');
    } else {
      console.error('No user is currently signed in');
    }
  });
}

export const signUserOut = () => {
  signOut(auth)
    .then(() => {
      // TODO: Redirect them to Search
    }).catch((error) => {
      // TODO: Alert
      alert('Unable to sign you out - ', error.message)
    });
}
