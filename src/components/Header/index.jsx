import logo from "../../assets/logo.svg"
import { CartContext } from "../CartContext";
import ModalCompra from "../ModalCompra";
import './styles.css'
import { useContext, useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Header = () => {

  const [estaAbierto, setEstaAbierto] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleCarrito = () => {
    setEstaAbierto(!estaAbierto);
  };

  const handleClickFuera = (event) => {
    if (event.target.id === "carrito-overlay") {
      setEstaAbierto(false);
    }
  };

  const { cart, CantCarrito, removeItem, total, clear } = useContext(CartContext);



  return (
    <header>
      <div className='grid grid-cols-3  place-items-center mt-2'>
        <li className='flex justify-center'><img src={logo} alt="logo" width={88}/><h1 className='text-6xl mt-3 ml-1 font-bold text-orange-400 titulo underline decoration-pink-500 font-mono'>Tecno <span className='text-6xl font-bold text-orange-400 '>Facts</span></h1></li>
        <div className="mt-6 col-start-3">
        
        <div onClick={toggleCarrito} className="relative">
        <div className=''><AiOutlineShoppingCart size={50}/><span className='relative left-8 bottom-14 text-xl border-solid border-2 border-orange-500 rounded-full font-mono bg-orange-500 text-white pl-2 pr-2 pb-1 pt-1'><span>{CantCarrito()}</span></span></div>
      </div>
      {estaAbierto && (
        <div id="carrito-overlay" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50" onClick={handleClickFuera}>
          <div id="carrito" className="bg-white rounded-lg p-8 w-1/2 h-4/5 overflow-y-auto">
            <h2 className="text-2xl text-center font-bold mb-4">Carrito de compras</h2>
            <div className="mb-4">
              <div >
              {cart.map((product, index) => (
                  <div className="grid grid-cols-4 place-items-center mb-3 border-2 rounded bg-stone-100" key={index}>
                    <img src={product.img} alt="" width={80}/>
                    <div>
                    <h2 className="pb-2">{product.Nombre} </h2>
                    <h2>${product.Precio} </h2>
                    </div>
                    <h2 className="col-start-3">Cant: {product.quantity}</h2>
                    <button className="bg-red-500 border rounded-full pb-2 pr-2 pl-2 pt-1" onClick={() => removeItem(product.img)}>Eliminar</button>
                  </div>
              ))
              }
              </div>
            </div>
            <div className="grid grid-cols-3 place-items-center ">
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={toggleCarrito}>Cerrar</button>
            <button className="bg-red-400 text-white font-bold py-2 px-4 rounded" onClick={clear}>Vaciar Carrito</button>
            <h3 className="text-lg">Precio Total: ${total}</h3>
            </div>
            <div className="flex justify-center mt-5">
            <button onClick={() => setShowModal(true)} className="bg-green-400 text-white font-bold py-2 px-4 rounded">Comprar</button>
            <ModalCompra showModal={showModal} setShowModal={setShowModal} setEstaAbierto={setEstaAbierto}/>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </header>
  )
}

export default Header