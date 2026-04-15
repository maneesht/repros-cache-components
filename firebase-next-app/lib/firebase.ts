import { initializeApp, getApps, getApp } from "firebase/app";
import { setLogLevel } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const getFirebaseConfig = () => {
  const defaults = process.env.NEXT_PUBLIC__FIREBASE_DEFAULTS__;
  if (defaults) {
    try {
      const parsed = JSON.parse(defaults);
      if (parsed.config) {
        if (typeof parsed.config === 'string') {
          return JSON.parse(parsed.config);
        }
        return parsed.config;
      }
    } catch (e) {
      console.error("Failed to parse NEXT_PUBLIC__FIREBASE_DEFAULTS__ environment variable", e);
    }
  }
  
  // Fallback to hardcoded config if env var is missing or invalid
  return {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
};

const config = getFirebaseConfig();
const app = getApps().length > 0 ? getApp() : initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  });
setLogLevel('debug');

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export { app, auth, googleProvider };
