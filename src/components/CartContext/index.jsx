import { collection, getDocs, query, where } from "firebase/firestore";
import { createContext, useEffect, useMemo, useState } from "react";
import db from "../../../db/firebase-config";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item, quantity) => {
    const itemIndex = cart.findIndex((i) => i.img === item.img);
    
    if (itemIndex === -1) {
      setCart([...cart, { ...item, quantity }]);
    } else {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += quantity;
      setCart(updatedCart);
    }
  };

  const removeItem = (img) => {
    const itemIndex = cart.findIndex((item) => item.img === img);
    if (itemIndex !== -1) {
      const newCart = [...cart];
      newCart.splice(itemIndex, 1);
      setCart(newCart);
    }
  };

  const clear = () => {
    setCart([]);
  };



  useEffect(() => {
    const getTotal = async () => {
      const itemIds = cart.map((item) => item.img);
      const q = query(collection(db, "items"), where("img", "in", itemIds));
      const querySnapshot = await getDocs(q);
      const items = querySnapshot.docs.map((doc) => doc.data());
      const total = cart.reduce((acc, item) => {
        const itemData = items.find((i) => i.img === item.img);
        return acc + itemData.Precio * item.quantity;
      }, 0);
      setTotal(total);
    };
    if (cart.length > 0) {
      getTotal();
    } else {
      setTotal(0);
    }
  }, [cart]);
  

  const CantCarrito = () => {
    return cart.length;
  };


  
  const contextValue = useMemo(
    () => ({
      cart,
      addItem,
      removeItem,
      clear,
      CantCarrito,
      total,
    }),
    [cart, total]
  );

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};



