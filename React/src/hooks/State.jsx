import React, { useEffect, useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)

  useEffect(() => {
    console.log('From UseEffect')
  })

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      
      <div className="backdrop-blur-lg bg-white/20 border border-white/30 
                      p-8 rounded-2xl shadow-2xl text-center space-y-6 
                      w-full max-w-sm transition transform hover:scale-105">
        
        <h2 className="text-2xl font-bold text-white drop-shadow">
          React State Demo 🚀
        </h2>

        {/* Like Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            ❤️ Likes: <span className="text-yellow-300">{like}</span>
          </h3>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setLike(like + 1)}
              className="px-5 py-2 bg-green-500 text-white rounded-full 
                         shadow-lg hover:bg-green-600 hover:scale-110 
                         transition-all duration-300"
            >
              👍 Like
            </button>

            <button 
              onClick={() => setLike(like - 1)}
              className="px-5 py-2 bg-red-500 text-white rounded-full 
                         shadow-lg hover:bg-red-600 hover:scale-110 
                         transition-all duration-300"
            >
              👎 Dislike
            </button>
          </div>
        </div>

        <hr className="border-white/30" />

        {/* Counter Section */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white">
            🔢 Count: <span className="text-cyan-300">{count}</span>
          </h3>

          <div className="flex justify-center gap-4">
            <button 
              onClick={() => setCount(count + 1)}
              className="px-5 py-2 bg-blue-500 text-white rounded-full 
                         shadow-lg hover:bg-blue-600 hover:scale-110 
                         transition-all duration-300"
            >
              ➕ Increment
            </button>

            <button 
              onClick={() => setCount(count - 1)}
              className="px-5 py-2 bg-orange-500 text-white rounded-full 
                         shadow-lg hover:bg-orange-600 hover:scale-110 
                         transition-all duration-300"
            >
              ➖ Decrement
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default State
