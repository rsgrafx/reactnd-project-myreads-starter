import firebase from 'firebase'

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_db,
    projectId: process.env.REACT_APP_FIREBASE_project,
    storageBucket: "myreads-udacity.appspot.com/",
    messagingSenderId: process.env.REACT_APP_FIREBASE_sender_id,
};
firebase.initializeApp(config);
export default firebase;
