import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt50a_UdmQWWCrhyBNbyqv4CQUSPEgzjE",
  authDomain: "mad-lab-task-58ec5.firebaseapp.com",
  projectId: "mad-lab-task-58ec5",
  storageBucket: "mad-lab-task-58ec5.firebasestorage.app",
  messagingSenderId: "442503661263",
  appId: "1:442503661263:web:22a5aa7438cfd724db19ba"
};


const app = initializeApp(firebaseConfig);

// ✅ Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});


const db = getFirestore(app);

export { auth, db };
