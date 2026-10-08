import React from 'react'

const Mobile = ({ name, ram, storage, price, discounted, onDiscount }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>RAM: {ram}</p>
      <p>Storage: {storage}</p>
      <p>Price: ₹{price}</p>
      <button onClick={onDiscount} disabled={discounted}>
        {discounted ? 'Discount Applied' : 'Discount'}
      </button>
    </div>
  )
}

export default Mobile