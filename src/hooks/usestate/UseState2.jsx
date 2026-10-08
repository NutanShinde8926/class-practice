import React, { useState } from 'react'

const UseState2 = () => {
  const [brand, setBrand] = useState("Mercedes");
  const [country, setCountry] = useState("German");

  return (
    <div>
      <h2>{brand} is the best {country} manufacturer</h2>
      <button onClick={() => setBrand("BMV")}>Change Brand</button>
    </div>
  )
}

export default UseState2