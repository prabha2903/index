import React from 'react'

const Child = ({send}) => {
  return (
    <div>
        <h3>Sending....</h3>
        <button onClick={()=>send("Hello from child")}>Send Data</button>
    </div>
  )
}

export default Child