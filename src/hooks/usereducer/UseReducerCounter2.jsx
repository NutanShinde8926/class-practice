import React from 'react'

const UseReducerCounter2 = () => {
    const initialState ={
        count : 0
    }

    function reducer (state ,action) {
    switch (action.type) {
        case  "increment" : {
        return{ count: state.count + 1}
    }
        
}
}
  return (
    <div>
      <h1>count: {state.count}</h1>
      <button onClick={() => dispatch({type: "increment"})}>incremet</button>

    </div>
  )
}

export default UseReducerCounter2
