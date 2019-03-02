import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyCAOq3_p_NY-5lKQ4_-8tNhHI15yMrNH_E',
  authDomain: 'hoa-nam-build.firebaseapp.com',
  databaseURL: 'https://hoa-nam-build.firebaseio.com',
  projectId: 'hoa-nam-build',
  storageBucket: 'hoa-nam-build.appspot.com',
  messagingSenderId: '855752803457',
};

firebase.initializeApp(config);

// firebase.auth().signInAnonymously()
//   .then(data => console.log(data));
// firebase.auth().signInWithEmailAndPassword('technobia@gmail.com', '123456');

export const db = firebase.firestore();

export const auth = firebase.auth();

export const storage = firebase.storage().ref();

export default {};
