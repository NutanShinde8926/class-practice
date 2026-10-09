import React, { useEffect, useState } from 'react'

const MyComp = () => {
    const [count, setcount] = useState(0);

    //useEffect(function, dependency, array);
    //case1 --> NO dependency array
    // useEffect(() => {
    //     console.log('component rendered')  also this document.title = 'Count ${count}'
    // })


    //case2 --> Empty array
    // useEffect(() => {
    //     console.log("Component mounted")
    // },[])

//case 3 --> Passing a particular  value to the array
const [ct1, setCt1] = useState(0);
const [ct2, setCt2] = useState(100);

useEffect(() => {
    console.log("Counter updated")
}, [ct1])

  return (
    <div>
      {/* <button onClick={() => setcount(count + 1)}>Count: {count}</button> */}
      <h3>Counter 1 : {ct1}</h3>
      <button onClick={() => setCt1(ct1 + 1)}>+</button>
      <h3>Counter 2 : {ct2}</h3>
      <button onClick={() => setCt2(ct2 + 2)}>+2</button>
    </div>
  )
}

export default MyComp
