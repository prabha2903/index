import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
   const [product,setProduct] = useState({})
   const { id } = useParams()

   useEffect(() => {
     fetch(`https://fakestoreapi.com/products/${id}`)
       .then(response => response.json())
       .then(data => setProduct(data))
   }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl w-full">
        
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Product Details
        </h1>

        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          {product.title}
        </h3>

        <p className="text-lg font-medium text-green-600 mb-3">
          Price: ₹{product.price}
        </p>

        <h6 className="text-gray-600 leading-relaxed">
          {product.description}
        </h6>

      </div>
    </div>
  )
}

export default ProductDetails
