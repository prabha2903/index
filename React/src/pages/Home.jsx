import React, { useState } from 'react'
import Profile from '../components/Profile'
import Parent from '../components/Parent'
import { Link } from 'react-router-dom'
import { userContext } from '../App'

export const Home = () => {
  const [user,setUser] = useState("Prabha")

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="space-y-3 mb-6">
        <Link 
          to={'/form'} 
          className="text-blue-500 hover:underline font-medium"
        >
          Form
        </Link><br />
        <Link 
          to={'/state'} 
          className="text-blue-500 hover:underline font-medium"
        >
          UseState Example
        </Link><br />
        <Link 
          to={'/reducer'} 
          className="text-blue-500 hover:underline font-medium"
        >
          UseReducer Example
        </Link>
      </div>

      <userContext.Provider value={user}>
        <Profile 
          age={20} 
          skills={["HTML","CSS","JS","JAVA","PYTHON"]} 
        />
      </userContext.Provider>

      <div className="mt-6">
        <Parent />
      </div>
    </div>
  )
}

export default Home
