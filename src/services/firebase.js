// src/services/firebase.js
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firebaseConfig } from "../firebase/config";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProducts = async (categoryId) => {
  const productsRef = collection(db, "products");

  const q = categoryId
    ? query(productsRef, where("category", "==", categoryId))
    : productsRef;

  const snapshot = await getDocs(q);

  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...docSnap.data(),
  }));
};

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error("Producto no encontrado");
  }

  return { id: docSnap.id, ...docSnap.data() };
};

export const createOrder = async (order) => {
  const ordersRef = collection(db, "orders");
  const docRef = await addDoc(ordersRef, {
    ...order,
    date: serverTimestamp(),
  });
  return docRef.id;
};
