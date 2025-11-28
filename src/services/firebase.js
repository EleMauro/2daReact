import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";
import { firebaseConfig } from "../firebase/config";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const productsRef = collection(db, "products");

export async function getProducts(categoryId) {
  let q = productsRef;

  if (categoryId) {
    q = query(productsRef, where("category", "==", categoryId));
  }

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
