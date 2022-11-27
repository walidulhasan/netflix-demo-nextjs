// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfXfF9hQxCQnEcY6KyPdyFIUQVjgt6Yas",
  authDomain: "netflix-clone-yt-3669c.firebaseapp.com",
  projectId: "netflix-clone-yt-3669c",
  storageBucket: "netflix-clone-yt-3669c.appspot.com",
  messagingSenderId: "242840609658",
  appId: "1:242840609658:web:b5c82c9159b62a8eb02cc3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }