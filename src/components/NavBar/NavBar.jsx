import React from 'react'
import CartWidget from "../CartWidget/CartWidget"


function NavBar() {
  return (
    <div className='bg-gray-200'>
        <div className='flex justify-center items-center pt-4  text-2xl text-violet-500 font-serif'>
        <h1>Tienda de Componentes</h1>
        </div>
        <div>
            <ul className='grid grid-cols-4 place-items-center  mt-6 text-sky-600'>
                <a href="">
                <li>Productos</li>
                </a>
                <a href="">
                <li>Marcas Sponsors</li>
                </a>
                <a href="">
                <li>Contacto</li>
                </a>
                <CartWidget />
            </ul>
        </div>
    </div>
  )
}

export default NavBar