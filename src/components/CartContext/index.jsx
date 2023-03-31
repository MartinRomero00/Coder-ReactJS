import { collection, getDocs } from "firebase/firestore";
import { createContext, useEffect, useMemo, useState } from "react";
import db from "../../../db/firebase-config";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const itemCollectionRef = collection(db, "carrito");

  const getProducts = async () => {
    const itemCollection = await getDocs(itemCollectionRef);
    setProducts(
      itemCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };

  useEffect(() => {
    getProducts();
  }, []);

  const cartCount = useMemo(() => {
    return products.length;
  }, [products]);

  const contextValue = useMemo(() => {
    return {
      products,
      cartCount,
    };
  }, [products, cartCount]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};



