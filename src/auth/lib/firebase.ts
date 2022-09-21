// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth";
import {getApps, initializeApp, getApp} from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5j9OGY8OX1-Pu7JXU_JOb5fXf_fjETk",
  authDomain: "fir-auth-e7944.firebaseapp.com",
  projectId: "fir-auth-e7944",
  storageBucket: "fir-auth-e7944.appspot.com",
  messagingSenderId: "167169295020",
  appId: "1:167169295020:web:f7307380e9ac6937fcd509"
};

let app;

if (getApps().length === 0) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp()
}

export const auth = getAuth(app)