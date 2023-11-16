import React from 'react'
import CategoryItem from './categoryItem/page'
import styles from "./page.module.css"

const Directory = ({category}) => {
  return (
    <div className={styles.categoryContainer}>
    {
        category.map(({title,imageUrl,id})=>(
            <CategoryItem key={id} title={title} image={imageUrl}/>

        ))
    }
      
    </div>
  )
}

export default Directory
