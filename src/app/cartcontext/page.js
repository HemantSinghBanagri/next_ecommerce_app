"use client"
import React from 'react'
import { createContext,useReducer,useContext } from 'react'



const CartContext=createContext();


const cartReducer=(state,action)=>{
    switch (action.type){
        case "ADD_TO_CART":
            console.log('Reduce :adding to cart',action.payload)
            return{
                ...state,
                cartItems:[...state.cartItems,action.payload]
            };

            default:
                return state
    }
}


const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(cartReducer,{cartItems:[]})
    return(
        <CartContext.Provider value={{state,dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

const  useCart = () => {
    const context=useContext(CartContext)
    if(!context){
        throw new Error('useCArt must used with in a cartProvider')
    }
    return context
 
}

export {CartProvider,useCart}
