import React from 'react'
import ProductItem from '../Component/ProductItem'

const Product = () => {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-[250px] bg-white text-center px-6 md:px-12 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 pt-[177px]">
        Products
        </h1>
      </div>
      <ProductItem/>
    </>
  )
}

export default Product