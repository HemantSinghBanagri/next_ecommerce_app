"use client"

import Link from 'next/link'
import styles from "./page.module.scss"
import Image from 'next/image'
import CartIcons from './cartIcons/page'
import { MdOutlineClose } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';






 


const Navbar = () => {

  const [isSlidebarvisile, setIsSlidebarVisible ]=useState(false)
  const ref =useRef();



  useEffect(()=>{
    const handleClickCount=(event)=>{
      if(ref.current && !ref.current.contains(event.target)){
        setIsSlidebarVisible(false)
      }
    }
    document.addEventListener('mousedown',handleClickCount)
    return()=>{
      document.removeEventListener('mousedown',handleClickCount)
    }

  },[ref])
 const togglecart=()=>{
  setIsSlidebarVisible((prev)=>!prev)
  console.log('slide visile',isSlidebarvisile)


 }
 

  return (
    <>
        <nav className={styles.NavContainer}>
        
            <Link href="/"  className={styles.logoContainer}>
               <Image src="/007 crown.svg" alt="crown" width={70} height={50}/>
            </Link> 

            <div className={styles.navLinks}>
            <Link href="/shop">Shop</Link>    
            <Link href="/userAuth">
            <span onClick={togglecart}>login</span>
     
            
            </Link>
           
            
            <CartIcons onClick={togglecart}/>
            

              
            </div>
            
        
         </nav>
         {console.log('isSlifde',isSlidebarvisile)}

         {
  isSlidebarvisile && (
    <div className={styles.sidebar} ref={ref} data-visible={isSlidebarvisile}>
      <h2>Shopping Cart</h2>
      <div className={styles.container}>
      <span onClick={togglecart} className={styles.cartclose}><MdOutlineClose /></span>
      <div className={styles.cartimgae}>
        <img alt="cart-image" />
      </div>
      <div className={styles.cartcontent}>
        <h3>Name</h3>
        <p>Price</p>
      </div>
      </div>
    </div>
  )
}
          

         </>
    
  )
}

export default Navbar
