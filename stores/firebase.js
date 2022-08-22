// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxbjzFVzxPWjMpXxxaqW2s4LXUoDlj3vg",
  authDomain: "listers-357916.firebaseapp.com",
  projectId: "listers-357916",
  storageBucket: "listers-357916.appspot.com",
  messagingSenderId: "390429814047",
  appId: "1:390429814047:web:ff845d758c0cb845d5542a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export const googleAuth = () => {
  return signInWithPopup(auth, googleProvider);
};

export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
