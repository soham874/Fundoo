import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyBKHYp-P7QGigSMGLGmxwAUczrWCztV3_A",
    authDomain: "fundoo-cceec.firebaseapp.com",
    projectId: "fundoo-cceec",
    storageBucket: "fundoo-cceec.appspot.com",
    messagingSenderId: "506041542223",
    appId: "1:506041542223:web:3d9b5e6bab86c23d87ec3a"
  };

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;