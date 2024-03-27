
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppFooter from "./Components/Footer";
import AppHeader from "./Components/Header";
import PageContent from "./Components/PageContent";
import firebase from 'firebase/compat/app'; // Import firebase from 'firebase/compat/app' instead of 'firebase/app'
import "firebase/auth"; // Import firebase auth module


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBusWIv_CHe-y8W5lB1uDCFM9_YpRLJfxI",
  authDomain: "fyp-silvertix.firebaseapp.com",
  projectId: "fyp-silvertix",
  storageBucket: "fyp-silvertix.appspot.com",
  messagingSenderId: "88804918461",
  appId: "1:88804918461:web:3ebe50fc0fdf249229a3d4",
  measurementId: "G-PV7SEBXLER"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <PageContent />
        <AppFooter />
      </BrowserRouter>
    </div>
  );
}
export default App;









