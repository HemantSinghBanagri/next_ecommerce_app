import React from 'react'
import styles from "./page.module.scss"

const CategoryItem = ({title,image}) => {
 
  return (
    <div className={styles.CategoryItemContainer}>
    <div className={styles.CategoryItemImage} style={{backgroundImage:`url(${image})`}} ></div>
    <div className={styles.CategoryItemCard}>
        <h1>{title}</h1>
        <p>Shop Now</p>
    </div>
    </div>
  )
}


export default CategoryItem
