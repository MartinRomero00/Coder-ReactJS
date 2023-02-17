import React from 'react'
import CartWidget from "../CartWidget/CartWidget"
import "./navBar.css"

function NavBar() {
  return (
    <div className='bg'>
        <div className='titulo'>
        <h1>Tienda de Componentes</h1>
        </div>
        <div>
            <ul className='categorias'>
                <a href="" className='decoracion'>
                <li>Productos</li>
                </a>
                <a href="" className='decoracion'>
                <li>Marcas Sponsors</li>
                </a>
                <a href="" className='decoracion'>
                <li>Contacto</li>
                </a>
                <CartWidget />
            </ul>
        </div>
    </div>
  )
}

export default NavBar