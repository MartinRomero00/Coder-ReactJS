import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"


const CartWidget = () => {
  return (
    <div className='text-black'>
        <AiOutlineShoppingCart size={42}/>
        <span className='relative bottom-6 left-10'>0</span>
    </div>
  )
}

export default CartWidget