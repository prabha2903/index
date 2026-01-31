import React, { useEffect } from 'react'
import { useState } from 'react'

const Form = () => {
    const [form,setForm] = useState({
        name:"",
        email:"",
        age:"",
        department:""
    })
    
    useEffect(()=>{
      console.log("From useEffect")
    },[])
    
    const handleChange=(e)=>{
      const {name,value} = e.target
      setForm((prev)=>({
        ...prev,//spread operator--> to maintain other values
        [name] : value
      }))
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(form)
    }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Form</h2>
            
            <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
            <input 
                type="text" 
                name="name" 
                value={form.name} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
            <input 
                type="text" 
                name="email" 
                value={form.email} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <label htmlFor="age" className="block text-gray-700 font-medium">Age:</label>
            <input 
                type="text" 
                name="age" 
                value={form.age} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <label htmlFor="department" className="block text-gray-700 font-medium">Department:</label>
            <input 
                type="text" 
                name="department" 
                value={form.department} 
                onChange={handleChange} 
                className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition"
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form
