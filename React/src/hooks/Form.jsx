import React, { useEffect, useState } from 'react'

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    department: ""
  })

  useEffect(() => {
    console.log("From useEffect")
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
  }

  return (
    <div className="flex justify-center items-center min-h-screen 
                    bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md p-8 rounded-2xl 
                   bg-white/20 backdrop-blur-xl 
                   shadow-2xl border border-white/30
                   transition-transform duration-300 hover:scale-105"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-white drop-shadow">
          Employee Form 📝
        </h2>

        {/* Name */}
        <label className="block text-white font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-lg bg-white/80 
                     border border-transparent
                     focus:outline-none focus:ring-4 focus:ring-blue-300
                     transition-all duration-300"
        />

        {/* Email */}
        <label className="block text-white font-medium mb-1">Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-lg bg-white/80 
                     border border-transparent
                     focus:outline-none focus:ring-4 focus:ring-purple-300
                     transition-all duration-300"
        />

        {/* Age */}
        <label className="block text-white font-medium mb-1">Age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChange}
          className="w-full mb-5 p-3 rounded-lg bg-white/80 
                     border border-transparent
                     focus:outline-none focus:ring-4 focus:ring-pink-300
                     transition-all duration-300"
        />

        {/* Department */}
        <label className="block text-white font-medium mb-1">Department</label>
        <input
          type="text"
          name="department"
          value={form.department}
          onChange={handleChange}
          className="w-full mb-8 p-3 rounded-lg bg-white/80 
                     border border-transparent
                     focus:outline-none focus:ring-4 focus:ring-indigo-300
                     transition-all duration-300"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-full 
                     bg-gradient-to-r from-green-400 to-blue-500
                     text-white font-bold tracking-wide
                     shadow-lg hover:shadow-2xl
                     hover:scale-105 transition-all duration-300"
        >
          Submit 🚀
        </button>
      </form>
    </div>
  )
}

export default Form
