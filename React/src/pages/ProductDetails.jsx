import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const products=[
        {id:1,name:"Laptop",price:"30000",description:"Lenovo"},
        {id:2,name:"Mouse",price:"1000",description:"gaming mouse"},
        {id:3,name:"KeyBoard",price:"5000",description:"keyboard"},
        {id:4,name:"CPU",price:"40000",description:"storage"},
        {id:5,name:"Mobile",price:"70000",description:"16 gb ram"}
    ]
    const {id}=useParams()
    const product= products.find((p)=>p.id===Number(id))

  return (
    <div>
        <h1>ProductDetails</h1>
    <h3>{product.name}</h3>
    <h3>{product.price}</h3>
    <h3>{product.description}</h3>
    </div>
  )
}

export default ProductDetails