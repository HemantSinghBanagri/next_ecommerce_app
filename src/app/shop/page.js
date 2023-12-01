"use client"
import React from 'react'
import ProductList from './productList/page'
import { useCart } from '../cartcontext/page'

const Shop = () => {
  const {state}=useCart()
  return (
    <div>
    <ProductList/>
    
      
    </div>
  )
}

export default Shop