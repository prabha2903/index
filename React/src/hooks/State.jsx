import React, { useEffect } from 'react'
import { useState } from 'react'

const State = () => {
  const [count,setCount] = useState(0)
  const [like,setLike] = useState(0)

  useEffect(()=> {
    console.log('From UseEffect')
  })

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
        
        <h3 className="text-xl font-semibold">
          Like: <span className="text-blue-600">{like}</span>
        </h3>

        <div>
          <button 
            onClick={()=>setLike(like+1)} 
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition mr-2"
          >
            👍
          </button>

          <button 
            onClick={()=>setLike(like-1)} 
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            👎
          </button>
        </div>

        <h3 className="text-xl font-semibold">
          Count: <span className="text-purple-600">{count}</span>
        </h3>

        <div>
          <button 
            onClick={()=>setCount(count+1)} 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mr-2"
          >
            Increment ➕
          </button>

          <button 
            onClick={()=>setCount(count-1)} 
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
          >
            Decrement ➖
          </button>
        </div>

      </div>
    </div>
  )
}

export default State
