import React, { useState } from 'react'

const MyForm = () => {

    const [name, setName] = useState("");
    const [age,setAge] = useState("");
    const [salary ,setSalary] = useState("");
  return (
    <div>
      <input type='text'
      placeholder='Enter name'
      value={name}
      onChange={(e) => setName(e.target.value)}
      /> <br />

      <input type='number'
      value={age}
      placeholder='Enter age'
      onChange={(e) => setAge(e.target.value)}
      /> <br />
      <h4>{age}</h4>

      <input type='number'
      value={salary}
      placeholder='Enter salary'
      onChange={(e) => setSalary(e.target.value)}
      /> <br />
      <h4>{salary}</h4>
    </div>
  )
}

export default MyForm
