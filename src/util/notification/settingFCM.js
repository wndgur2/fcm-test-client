// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA3jZLbjGiFKkW5ziiyLsufgAHyBab-B6Y',
  authDomain: 'heycheese-6b35b.firebaseapp.com',
  projectId: 'heycheese-6b35b',
  storageBucket: 'heycheese-6b35b.firebasestorage.app',
  messagingSenderId: '634117833334',
  appId: '1:634117833334:web:ec650b274bc76bb9575557',
  measurementId: 'G-68C145RQDG',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
