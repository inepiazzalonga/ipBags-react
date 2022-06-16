
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCAkFPPqMcIOaZ4lMGIKiOrpDzXdAnFLd4",
  authDomain: "ip-bags.firebaseapp.com",
  projectId: "ip-bags",
  storageBucket: "ip-bags.appspot.com",
  messagingSenderId: "357714462086",
  appId: "1:357714462086:web:5962884c09b7a33dded807"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app;
}