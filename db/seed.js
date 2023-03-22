import db from "./firebase-config.js";
import { collection, addDoc } from "firebase/firestore";
import stock from "../stock.js";

const itemsCollectionRef = collection(db, "items");

const promise = stock.map((item) => addDoc(itemsCollectionRef, item));

Promise.all(promise).then(() => {
    console.log("done");
    process.exit(0);
})