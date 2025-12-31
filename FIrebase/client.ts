
import { getAnalytics } from "firebase/analytics";
import { initializeApp,getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkbqI2b3Y9ZYVdPLDG1yLireiXMW-TUHE",
  authDomain: "prepshala-84b4b.firebaseapp.com",
  projectId: "prepshala-84b4b",
  storageBucket: "prepshala-84b4b.firebasestorage.app",
  messagingSenderId: "380184689878",
  appId: "1:380184689878:web:850e234a1a4bd8ecdc9d77",
  measurementId: "G-LXRB41253X"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db= getFirestore(app);