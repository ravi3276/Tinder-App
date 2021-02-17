import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBNaSfh0Tx8284U_PMs6ZaquoBGuKodZQI",
    authDomain: "tinder-application-1.firebaseapp.com",
    projectId: "tinder-application-1",
    storageBucket: "tinder-application-1.appspot.com",
    messagingSenderId: "960817442040",
    appId: "1:960817442040:web:b821c4c9ab9eb586855f0d",
    measurementId: "G-S4PJCFTNWX"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db =firebaseApp.firestore();

  export default db;

  