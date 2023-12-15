import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnUVmG7D3H0dxgQxQUzUBROHJR7DaFdcs",
  authDomain: "pvp-vote.firebaseapp.com",
  projectId: "pvp-vote",
  storageBucket: "pvp-vote.appspot.com",
  messagingSenderId: "596309244711",
  appId: "1:596309244711:web:ac33d0506e8eb9389c4702",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
