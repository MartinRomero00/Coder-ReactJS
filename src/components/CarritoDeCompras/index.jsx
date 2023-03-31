import { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { CartContext } from '../CartContext';


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

  const {cartCount} = useContext(CartContext)

  return (
    <>
      <div onClick={toggleCarrito}>
        <div className=''><AiOutlineShoppingCart size={50}/><span className='relative left-8 bottom-14 text-xl border-solid border-2 border-orange-500 rounded-full font-mono bg-orange-500 text-white pl-2 pr-2 pb-1 pt-1'><span>{cartCount}</span></span></div>
      </div>
      {estaAbierto && (
        <div id="carrito-overlay" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50" onClick={handleClickFuera}>
          <div id="carrito" className="bg-white rounded-lg p-8 w-1/2 h-4/5">
            <h2 className="text-2xl text-center font-bold mb-4">Carrito de compras</h2>
            <ul className="mb-4">
              {products.map((product) => {
                  return(
                  <div className='flex justify-around' key={product.id}>
                    {product.Nombre}
                    {product.Precio}
                    {product.Stock}
                    {product.img}
                  </div>
                  )
              })
              }
            </ul>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={toggleCarrito}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CarritoDeCompras;