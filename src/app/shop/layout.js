"use client"
import React from 'react'
import { CartProvider } from '../cartcontext/page'
import ProductList from './productList/page'


const Myapp = ({children}) => {
  return (
    <CartProvider>
       
       
        {children}
    </CartProvider>
  )
}

export default Myapp
