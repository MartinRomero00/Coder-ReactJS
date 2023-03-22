import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyChWQuN1gKCdrfiyXh4nzbhblgtQYjwfdg",

  authDomain: "coder-pag.firebaseapp.com",

  projectId: "coder-pag",

  storageBucket: "coder-pag.appspot.com",

  messagingSenderId: "816688258400",

  appId: "1:816688258400:web:aed518649be76d6fb75205"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;