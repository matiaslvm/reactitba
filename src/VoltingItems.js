import React, { useState } from 'react'

// import dogImage from 
export const VoltingItems = () => {
    const [itemVotes, setItemVotes] = useState(0);
  return ( <>
    <h1> Perro Mati </h1>
    <div>VoltingItems</div>
    <div> Prueba Mati v2: {itemVotes} </div>
    <button onClick={() => setItemVotes(itemVotes + 1)}> Votaaar </button>
    </>
  )
}
