// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyD-U_BZvhRSTJKgjqVaD__V7qrIRuiw6tQ",
//     authDomain: "fir-training-7ea1d.firebaseapp.com",
//     projectId: "fir-training-7ea1d",
//     storageBucket: "fir-training-7ea1d.appspot.com",
//     messagingSenderId: "100793648509",
//     appId: "1:100793648509:web:ac1d9fc6a8fb4b836b7814"
//   };

//   // Initialize Firebase
//   const firebaseApp = firebase.initializeApp(firebaseConfig)

//   // initialise the auth service
//   const projectAuth = firebaseApp.auth()

//   // Initialize Cloud Firestore through Firebase
//   const db = firebaseApp.firestore()
//   // we are going to need timestamps for our DB fields
//   const timestamp = firebaseApp.firestore().FieldValue.serverTimestamp

//   export { projectAuth, db, timestamp }

//---------------------------------------------------
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore'
// import 'firebase/compat/auth'

// const firebaseConfig = {
//     apiKey: "AIzaSyD-U_BZvhRSTJKgjqVaD__V7qrIRuiw6tQ",
//     authDomain: "fir-training-7ea1d.firebaseapp.com",
//     projectId: "fir-training-7ea1d",
//     storageBucket: "fir-training-7ea1d.appspot.com",
//     messagingSenderId: "100793648509",
//     appId: "1:100793648509:web:ac1d9fc6a8fb4b836b7814"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig)

//   // initialise the auth service
//   const projectAuth = firebase.auth()

//   // Initialize Cloud Firestore through Firebase
//   const db = firebase.firestore()
//   // we are going to need timestamps for our DB fields
//   const timestamp = firebase.firestore().FieldValue.serverTimestamp

//   export { projectAuth, db, timestamp }

//------------------------------




import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-U_BZvhRSTJKgjqVaD__V7qrIRuiw6tQ",
    authDomain: "fir-training-7ea1d.firebaseapp.com",
    databaseURL: 'https://fir-training-7ea1d.firebaseio.com',
    projectId: "fir-training-7ea1d",
    storageBucket: "fir-training-7ea1d.appspot.com",
    messagingSenderId: "100793648509",
    appId: "1:100793648509:web:428c66e527d8c1ae6b7814"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const projectAuth = firebaseApp.auth()

// Initialize Cloud Firestore through Firebase
const db = firebaseApp.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, db, timestamp }
   
        