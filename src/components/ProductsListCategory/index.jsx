import { collection, query, where, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../../db/firebase-config.js";

const ProductsListCategory = () => {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "items");
    const q = query(productosRef, where("Nombre", "==", categoria));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const products = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          products.push({
            id: doc.id,
            data: doc.data(),
          });
        }
      });
      setProductos(products);
    });

    return unsubscribe;
  }, [categoria]);




  return (
    <div className="grid grid-cols-3">
      <div className="col-start-1 ">
        <div className="grid grid-rows-7 pl-4 mt-36 ml-16 w-72 gap-9 border-2 border-orange-300 rounded-lg border-solid shadow-2xl shadow-orange-500/100 ">
          <h1 className="mt-2 quicksand underline decoration-solid">
            Categorías
          </h1>
          <Link to="/categoria/Placa Madre">
            <h3 className="open-sans hover-underline-animation">Placa Madre</h3>
          </Link>
          <Link to="/categoria/Disco">
            <h3 className="open-sans hover-underline-animation">
              Almacenamiento
            </h3>
          </Link>
          <Link to="/categoria/Placa de Video">
            <h3 className="open-sans hover-underline-animation">
              Placa de video
            </h3>
          </Link>
          <Link to="/categoria/Memoria Ram">
            <h3 className="open-sans hover-underline-animation">Memoria Ram</h3>
          </Link>
          <Link to="/categoria/Procesador">
            <h3 className="open-sans hover-underline-animation">
              Procesadores
            </h3>
          </Link>
          <Link to="/categoria/Computadora">
            <h3 className="mb-2 open-sans hover-underline-animation">
              Computadoras
            </h3>
          </Link>
        </div>
      </div>
        <div className="col-start-2 col-span-3 grid grid-cols-2 grid-rows-1">
        {productos.map((producto) => (
          <Link to={`${producto.id}`} key={producto.data.id}>
            <div className="grid place-items-center mt-6  gap-4 ml-3 mr-4 rounded-xl shadow-lg bg-white border-solid border-orange-400 border shadow-red-500/80 h-80 ">
              <img className="w-40" src={producto.data.img} alt={producto.data.Nombre} />
              <h2 className="text-center source-sans-pro text-lg">{producto.data.Nombre} {producto.data.Marca} {producto.data.Descripcion}</h2>
              <h3 className="text-center text-lg roboto-condensed">${producto.data.Precio}</h3>
            </div>
           </Link>
        ))}
        </div>
    </div>
  );
};

export default ProductsListCategory;

