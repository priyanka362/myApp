import React from 'react'
import Image from 'next/image'
import { Products } from '@/types/index'
import BuyButton from './components/BuyButton'

const page = async ({ params }: { params: { id: number } }) => {

  let singleProduct: Products;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
    if (!response.ok) {
      throw new Error("Error while fetching data")
    }
    singleProduct = await response.json();
    console.log(singleProduct);
  } catch {
    throw new Error("Other Errors..")
  }

  return (
    <div>
      {
        <>
          <Image src={`${singleProduct.image}`} alt={singleProduct.title} width={100} height={100}/>
          <h1>{singleProduct.id} </h1>
          <h1>{singleProduct.title} </h1>
          <BuyButton/>
        </>
      }
    </div>
  )
}

export default page
