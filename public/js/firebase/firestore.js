import { db } from "./config.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Example collection
const COLLECTION_NAME = "records";

// CREATE
export async function addRecord(data) {
  return await addDoc(collection(db, COLLECTION_NAME), data);
}

// READ
export async function getRecords() {
  const snapshot = await getDocs(collection(db, COLLECTION_NAME));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}