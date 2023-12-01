import React, { useState } from 'react'
import styles from "./page.module.scss"
import { useCart } from '@/app/cartcontext/page'
import Link from "next/link"
import UserAuth from '@/app/userAuth/page'
import { useAuth } from '@/app/authcontext/page'

const ProductListData = ({productdata}) => {
  const {dispatch}=useCart()
  const {user,login}=useAuth()
  const [cartItems,setCartItems]=useState([])

  


  const handleLogin = user => {
    setLoggedInUser(user);
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    console.log('user log in ',user)
    console.log(localStorage)
   
   
  };
  const addToCart=()=>{
    

    setCartItems(cartItems);
    localStorage.setItem('loggedInUser',JSON.stringify(user))
    
   
    if(user){
      console.log('Adding to cart ',productdata)
    dispatch({type:"ADD_TO_CART",payload:productdata})

    }else{
      login({ username: 'exampleUser' });

    }
    

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
