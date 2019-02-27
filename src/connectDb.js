import firebase from 'firebase/app';

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

// const db = firebase.firestore();
//
// db.collection('root').doc('home').get()
//   .then(snapshot => console.log(snapshot.data()));

// firebase.auth().signOut();
