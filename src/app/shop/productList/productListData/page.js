import React from 'react'
import styles from "./page.module.scss"
import { useCart } from '@/app/cartcontext/cartContext'
import Link from "next/link"

const ProductListData = ({productdata}) => {
  const {dispatch}=useCart()

  
  const addToCart=()=>{
    dispatch({type:"ADD_TO_CART",payload:productdata})

  }
    

    const {name,title,imageUrl,price}=productdata
  return (

    <div className={styles.productdataContainer}>
        <img src={imageUrl}></img>
        <div  className={styles.productdatafooter}>
        <h3>{name} {title}</h3>
        
        <p>{price}</p>

        </div>
        <button className={styles.buttonContaier} onClick={addToCart}>Add to Cart</button>
    </div>
    
  
  )
}

export default ProductListData
