"use client"

import React from 'react'
import { useEffect,useState } from 'react'
import ProductListData from './productListData/page'
import { useCart } from '@/app/cartcontext/cartContext'


import styles from "./page.module.scss"

const ProductList = () => {
  const {dispatch}=useCart();
    const [productdata,setProductdata]=useState(null)
    const [loading,setLoading]=useState(true)
    const [error ,seterror]=useState(null)



    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://654b27ca5b38a59f28ee9706.mockapi.io/cloths");
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const data = await response.json();
          console.log(data);
          setProductdata(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      
      (async () => {
        fetchData();
      })();
  
    }, []); 
  
    const groupProductsByTitle = () => {
      const groupedProducts = {};
  
      if (productdata) {
        productdata.forEach((category) => {
          const { title, items } = category;
  
          if (!groupedProducts[title]) {
            groupedProducts[title] = [];
          }
  
          groupedProducts[title] = [...groupedProducts[title], ...items];
        });
      }
  
      return groupedProducts;
    };
  
    const groupedProducts = groupProductsByTitle();
  
    return (
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
  
        {productdata && (
        <div>
          {productdata.map((category) => (
            <React.Fragment key={category.title}>
              <h2>{category.title}</h2>
              <div className={styles.line}></div>
              <div className={styles.categoryContainer}>
                {category.items.slice(0, 4).map((item) => (
                  <ProductListData key={item.id} productdata={item} />
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
      </div>
    );
  };
  export default ProductList
