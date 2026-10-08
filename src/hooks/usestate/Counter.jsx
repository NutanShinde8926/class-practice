import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='btn'>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count+1)}>+</button>
       <button onClick={() => setCount(count-1)}>-</button>
       <button onClick={() => setCount(0)}>reset</button>

      
    </div>
  )
}

export default Counter
