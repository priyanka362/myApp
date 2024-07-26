import React from 'react'
import {Products} from '@/types/index'
import ProductCard from './ProductCard'

const ProductList = async () => {
  
  const response = await fetch(`https://fakestoreapi.com/products`, {cache: 'no-store'} );
  if(!response.ok){
    throw new Error("Error occured while fetching products list")
  }

  const products = await response.json();

  console.log(`response = ${products}`);

  return (
    <div>
      {      
        products.map((product:Products) => (
            // <h1>{pro.title}</h1>
            <ProductCard product={product}/>
        ))
      }
    </div>
  )
}

export default ProductList
