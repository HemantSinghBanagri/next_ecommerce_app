"use client"
import { useRouter } from 'next/navigation';

const ProductDetail = ({params}) => {
  const router =useRouter();
  
  console.log(useRouter)
 

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID{params.product}</p>
    </div>
  );
};

export default ProductDetail;