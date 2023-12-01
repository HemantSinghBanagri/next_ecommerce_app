"use client"
import React from 'react'
import { useCart } from '../page'
import CartProduct from './cartProduct/page'

const Cart= () => {
    const {state}=useCart()

    const {cartItems}=state
    console.log("cart Iteam",state.cartItems)

  return (
    <div>
    <h2>Cart</h2>
        <ul>
            
            {cartItems.map((item,index)=>(
                <CartProduct key={index}  name={item.name} price={item.price}/>
            ))}
        </ul>
      
    </div>
  )
}

export default Cart