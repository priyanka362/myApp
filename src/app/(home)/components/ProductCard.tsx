import React from 'react'
import Image from "next/image";
import Link from 'next/link'
import {Products} from '@/types/index'

const ProductCard = ({product}:{product : Products}) => {
  return (
    <span>
        <Image src={`${product.image}`} alt={product.title} width={100} height={100}/>
        <Link href={`/singleProduct/${product.id}`}>{product.title}</Link>
    </span>
  )
}

export default ProductCard
