import React, { useState } from 'react'

const State = () => {
    const [count,setCount] = useState(0)
    const [like, setLike] = useState(0);
    const [dislike, setDisLike] = useState(0);

  return (
    <div >
        <h1>useState Example</h1>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(prev=>prev+1)}>Increase</button>
        <div style={{ marginTop: '20px' }}>
        <button onClick={()=>setLike(l=>l+1)}>👍{like}</button>
        <button onClick={()=>setDisLike(d=>d+1)}>👎{dislike}</button>
        </div>
    </div>
  )
}

export default State