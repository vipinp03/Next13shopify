"use client";
import React from 'react'
import ProductDetail from '@/components/Product/productDetail'
// import { useSearchParams } from 'next/navigation';

function ProductDetails({params}) {

  // const searchParams = useSearchParams();


  // console.log(id)
  console.log(params)
  return (
    <div>
      <ProductDetail handle={`${params.slug}`}/>
    </div>
  )
}

export default ProductDetails