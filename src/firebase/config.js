import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtPJKRylKDX5zlrGyHuV2I5IGm79INqEk",
  authDomain: "apple-photogallery-a0b8a.firebaseapp.com",
  projectId: "apple-photogallery-a0b8a",
  storageBucket: "apple-photogallery-a0b8a.appspot.com",
  messagingSenderId: "93113207245",
  appId: "1:93113207245:web:20cc9fde91a71b24e75c84"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };