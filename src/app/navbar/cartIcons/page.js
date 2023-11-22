

import React from 'react'
import Image from 'next/image'
import styles from "./page.module.scss"
const CartIcons = ({onClick}) => {

  const handleClick=()=>{
    if(onClick){
      onClick()
    }
  }
  

  return (
    <div  className={styles.cartContainer} onClick={handleClick}>
    <Image src="/004 shopping-bag.svg" alt="shopping" width={24} height={14} className={styles.contaienrimgage}/>
    <span>0</span>
      
    </div>
  )
}

export default CartIcons
