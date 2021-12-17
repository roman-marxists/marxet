import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@services/firebase';
import { doCreateUser, doGetUserData } from '@api/user';
import Router from 'next/router';

export default function useProvideAuth() {
  const [user, setUser] = useState(null);


  const signin = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUser({...response.user, ...doGetUserData(response.user.uid)});
      console.log({user})
      Router.push('/');
      return response;
    } catch (e) {
      console.error(e.code);
      console.error(e.message);
      alert(e.message);
      Router.push('/login');
    }
  };

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(response => {
<<<<<<< HEAD
        setUser({...response.user, ...doGetUserData(response.user.uid)});
=======
        setUser(response.user);
        debugger;
>>>>>>> development
        doCreateUser(response.user);
        Router.push('/');
        return response.user;
      })
      .catch((err) => {
        console.error(err.code);
        console.error(err.message);
        alert(err.message);
        Router.push('/login');
      });
  };

  const signout = () => {
    return auth.signOut().then(() => {
      setUser(false);
    });
  };

  const sendPasswordResetEmail = email => {
    return auth.sendPasswordResetEmail(email).then(() => {
      return true;
    });
  };

  const confirmPasswordReset = (code, password) => {
    return auth.confirmPasswordReset(code, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user);
      } else {
        setUser(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return {
    user,
    signin,
    signup,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset,
  };
}
