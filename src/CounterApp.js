import React, { useState } from 'react'

const CounterApp = () => {
	let [counter, setCounter] = useState(0)

	const incrementCounter = () => {
		setCounter(counter+1)
		// Buscara la ultima actualizacion de counter y le sumara 1
		setCounter(prevCounter => prevCounter + 1)
	}

  return (
	 <div>
		 <button onClick={incrementCounter}>
			 Increment
		 </button>
		 <h1>Clicks: {counter} </h1>
	 </div>
  )
}

export default CounterApp