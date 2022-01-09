import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    experimentalForceLongPolling: true
}

const firebaseConfig2 = {
    apiKey: "AIzaSyBIlj3worDz292VAzOEVRkVMMHlVpZ-u90",
    authDomain: "portfolio-jn-1da51.firebaseapp.com",
    projectId: "portfolio-jn-1da51",
    storageBucket: "portfolio-jn-1da51.appspot.com",
    messagingSenderId: "485265184973",
    appId: "1:485265184973:web:de43cb373841299314b184",
    experimentalForceLongPolling: true
}

const app = initializeApp(firebaseConfig2)
const db = getFirestore()

export { db }