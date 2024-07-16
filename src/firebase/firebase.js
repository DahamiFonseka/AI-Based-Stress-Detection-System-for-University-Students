import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfSS81S_NlKC6dWz--pirHl50XVxjj-GU",
  authDomain: "stress-detection-app-a5983.firebaseapp.com",
  projectId: "stress-detection-app-a5983",
  storageBucket: "stress-detection-app-a5983.appspot.com",
  messagingSenderId: "465170029903",
  appId: "1:465170029903:web:9be977f1182b741bd8b93a",
  measurementId: "G-W7FFYMBJ55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth};