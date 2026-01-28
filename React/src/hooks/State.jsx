import React, { useEffect } from 'react'
import { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0);
    const [like,setLike] = useState(0);
  useEffect(()=> {
    console.log('From UseEffect')
  })
  return (
    <div>
        <h3>Like:{like}</h3>
        <button onClick={()=>setLike(like+1)}>👍</button> &nbsp;
        <button onClick={()=>setLike(like-1)}>👎</button>
        <h3>Count:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment➕</button> &nbsp;
        <button onClick={()=>setCount(count-1)}>Decrement➖</button>
        
    </div>
  )
}

export default State