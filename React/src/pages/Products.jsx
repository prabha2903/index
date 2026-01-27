import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
    const products=[
        {id:1,name:"Laptop",price:"30000"},
        {id:2,name:"Mouse",price:"1000"},
        {id:3,name:"KeyBoard",price:"5000"},
        {id:4,name:"CPU",price:"40000"},
        {id:5,name:"Mobile",price:"70000"},
    ]
  return (
    <div>
        <h1>Products</h1>
    {products.map((product)=>(
        <div key={product.id}>
         <h4>{product.name}</h4>
         <h4>{product.price}</h4>
         <Link to={`/products/${product.id}`}>View Details</Link>
        </div>
    ))}
    </div>
  )
}

export default Products