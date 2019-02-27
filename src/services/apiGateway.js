import firebase from 'firebase/app';

// const db = firebase.firestore();
const auth = firebase.auth();

export const logout = () => auth.signOut();

export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default {};
