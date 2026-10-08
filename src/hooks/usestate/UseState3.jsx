import React, { useState } from 'react'

const UseState3 = () => {
    const [employee, setEmployee] = useState({
        name: 'Reshma',
        age: 24, 
        salary: 83000,
        address: 'pune'
    })

    function updateSalary(){
        setEmployee(data => {
            return {
                ...data,
                salary:data.salary + 120000
                
            }
        })
    }

    function updateAddress(){
        setEmployee(data => {
            return {
                ...data,
                address: 'delhi'
                
            }
        })
    }


  return (
    <div>
      <h4>Name: {employee.name}</h4>
      <h4>Age: {employee.age}</h4>
      <h4>Salary: {employee.salary}</h4>
      <h4>Address: {employee.address}</h4>

      <button onClick={updateSalary}>Update Salary</button>
      <br />
      <button onClick={updateAddress}>Update address</button>
      

    </div>
  )
}

export default UseState3

