"use client"
import React from 'react'
import { CartProvider } from './page'


const Myapp = ({children}) => {
  return (
    <CartProvider>
       
        
        {children}
    </CartProvider>
  )
}

export default Myapp
