import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Products = () => {
  const [products,setProducts] = useState([])
  const getProducts = async()=>{
    const res= await axios.get('https://fakestoreapi.com/products')
    setProducts(res.data)
  }
  useEffect(()=>{
    getProducts()
  },[])
    
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product)=>(
          <div 
            key={product.id} 
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h4 className="font-semibold text-gray-700 mb-2">
              {product.title}
            </h4>

            <h4 className="text-green-600 font-medium mb-3">
              ₹{product.price}
            </h4>

            <Link 
              to={`/products/${product.id}`} 
              className="text-blue-500 hover:underline font-medium"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
