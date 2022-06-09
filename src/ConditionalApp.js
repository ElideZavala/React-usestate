import React, { useState } from 'react'

const ConditionalApp = () => {
	const [condition, setCondition] = useState(true)
	console.log(condition)

  return (
	 <div>
		 <button onClick={() => setCondition(!condition)}> 
			 Toggle 
		 </button>

		 {/* {
			 condition && 
			 <h1>Show message in true</h1>
		 } */}

		 <h1>State value is { condition.toString() } </h1>
	 </div>
  )
}

export default ConditionalApp