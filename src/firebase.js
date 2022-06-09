// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD4xshztblGT5n1UHD_GXi9tCQFnM8md0U',
  authDomain: 'netflix-react-app-5a3bc.firebaseapp.com',
  projectId: 'netflix-react-app-5a3bc',
  storageBucket: 'netflix-react-app-5a3bc.appspot.com',
  messagingSenderId: '911864310927',
  appId: '1:911864310927:web:1d1aec9077d1deb28054fa',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
