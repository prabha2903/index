import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }
    case "DECREMENT":
      return { count: state.count - 1 }
    case "RESET":
      return { count: 0 }
    default:
      return state
  }
}

const initialState = { count: 0 }

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="min-h-screen flex justify-center items-center 
                    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      <div className="bg-white/20 backdrop-blur-xl 
                      border border-white/30
                      p-10 rounded-2xl shadow-2xl 
                      text-center space-y-6
                      transition-transform duration-300 hover:scale-105">

        <h1 className="text-3xl font-extrabold text-white drop-shadow">
          useReducer Counter ⚙️
        </h1>

        <h3 className="text-2xl font-semibold text-white">
          Count: <span className="text-yellow-300">{state.count}</span>
        </h3>

        <div className="flex justify-center gap-4 pt-4">
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-6 py-2 rounded-full 
                       bg-green-500 text-white font-semibold
                       shadow-lg hover:bg-green-600
                       hover:scale-110 transition-all duration-300"
          >
            ➕ Increment
          </button>

          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-6 py-2 rounded-full 
                       bg-red-500 text-white font-semibold
                       shadow-lg hover:bg-red-600
                       hover:scale-110 transition-all duration-300"
          >
            ➖ Decrement
          </button>

          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="px-6 py-2 rounded-full 
                       bg-gray-600 text-white font-semibold
                       shadow-lg hover:bg-gray-700
                       hover:scale-110 transition-all duration-300"
          >
            🔄 Reset
          </button>
        </div>

      </div>
    </div>
  )
}

export default Reducer
