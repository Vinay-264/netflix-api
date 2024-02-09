import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAJ9HX7M9m4nk5FXClEcklTZw99fjsZQF4",
  authDomain: "netflix-ui-react.firebaseapp.com",
  projectId: "netflix-ui-react",
  storageBucket: "netflix-ui-react.appspot.com",
  messagingSenderId: "790222311114",
  appId: "1:790222311114:web:9ed0dc04da84475ab92e33",
  measurementId: "G-L2626Y9T2M"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
