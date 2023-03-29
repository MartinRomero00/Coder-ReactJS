import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CarritoDeCompras() {
  const [estaAbierto, setEstaAbierto] = useState(false);

  const toggleCarrito = () => {
    setEstaAbierto(!estaAbierto);
  };

  const handleClickFuera = (event) => {
    if (event.target.id === "carrito-overlay") {
      setEstaAbierto(false);
    }
  };

  return (
    <>
      <div onClick={toggleCarrito}>
        <div className=''><AiOutlineShoppingCart size={50}/></div>
      </div>
      {estaAbierto && (
        <div id="carrito-overlay" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50" onClick={handleClickFuera}>
          <div id="carrito" className="bg-white rounded-lg p-8 w-1/2 h-4/5">
            <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>
            <ul className="mb-4">
              <li>Producto 1</li>
              <li>Producto 2</li>
              <li>Producto 3</li>
            </ul>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={toggleCarrito}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CarritoDeCompras;
