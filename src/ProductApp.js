import React, { useState } from 'react'

const initialProduct = {
	title: "titulo",
	description: "description",
}

const ProductApp = () => {
	const [product, setProduct] = useState(initialProduct);

	const updateProduct = (property, value) => {
		setProduct({
			...product,
			// para que sea variable lo ponemos entre corchetes. 
			[property]: value
		});
	}

	return (
		<div>
			<button onClick={() => updateProduct("description", "Nuevo descripcion")}> 
				Update
			</button>
			<h1>{product.title}</h1>
			<h1>{product.description}</h1>

			<pre>{JSON.stringify(product, null, 2)}</pre>
		</div>
	)
}

export default ProductApp