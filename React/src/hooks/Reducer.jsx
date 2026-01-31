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
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
        
        <h1 className="text-2xl font-bold text-gray-800">
          UseReducer Example
        </h1>

        <h3 className="text-xl font-semibold">
          Count: <span className="text-purple-600">{state.count}</span>
        </h3>

        <div>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mr-2"
          >
            Increment
          </button>

          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition mr-2"
          >
            Decrement
          </button>

          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
          >
            RESET
          </button>
        </div>

      </div>
    </div>
  )
}

export default Reducer
