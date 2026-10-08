import React, { useState } from 'react'
import mobiles from './mobile'
import Mobile from './Mobile.jsx'

const DISCOUNT_PERCENT = 10

const Mobiles = () => {
  const [list, setList] = useState(mobiles)

  const handleDiscount = (id) => {
    setList(
      list.map((item) =>
        item.id === id
          ? {
              ...item,
              price: item.price - (item.price * DISCOUNT_PERCENT) / 100,
              discounted: true,
            }
          : item
      )
    )
  }

  return (
    <div className="parent">
      {list.map((item) => (
        <Mobile
          key={item.id}
          name={item.name}
          ram={item.ram}
          storage={item.storage}
          price={item.price}
          discounted={item.discounted}
          onDiscount={() => handleDiscount(item.id)}
        />
      ))}
    </div>
  )
}

export default Mobiles