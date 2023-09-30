// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { db, getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZaQh-MohXSECFRXLEXBTNXZm09GZQcWg",
  authDomain: "telemetry-ec9d5.firebaseapp.com",
  projectId: "telemetry-ec9d5",
  storageBucket: "telemetry-ec9d5.appspot.com",
  messagingSenderId: "441663575285",
  appId: "1:441663575285:web:a4b633fa3abf15b18521bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const db = collection(firestore, 'telemetry');

export { firestore, db  };

