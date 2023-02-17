import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./cartWidget.css"

const CartWidget = () => {
  return (
    <div className='carrito'>
        <AiOutlineShoppingCart size={40}/>
        <span>0</span>
    </div>
  )
}

export default CartWidget