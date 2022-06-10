import React, { useState } from "react"

const initialCart = [
  { id: 1, title: "Product", description: "Desc" },
  { id: 2, title: "Product #2", description: "Desc #2" },
]

const ShoppingCart = () => {
  const [cart, setCart] = useState(initialCart)

  const deleteProduct = (productId) => {
    // El metodo filter retorna un nuevo arreglo con los elementos que cumplan la condicion
    // Nos traera los productos que sean diferentes con el id que se le pase
    const changedCart = cart.filter((product) => product.id !== productId)

	 // 
    setCart(changedCart)
  }

  const addProduct = (newProduct) => {
	  //  Cremos un identificador unico ID, a los nuevos productos. 
	  newProduct.id = Date.now();
	  const changedCart = [
		  // Agregamos el nuevo producto al arreglo
		  newProduct,
		  // Accemos una copia del arreglo que ya tenemos.
		  ...cart,
	  ];
	  setCart(changedCart);
  }

  const updateProduct = (editProduct) => {
	   const changedCart = cart.map(product => ( 
			product.id === editProduct.id
			? editProduct
			: product
		))
	   setCart(changedCart)
  }

  return (
    <div>  
		<button onClick={() => addProduct({ title: "Nuevo titulo", description: "Nueva Desc"})}> 
			Add
		</button>

      {cart.map((product) => (
        <div key={product.id}>
          <h1>
            {product.id} {product.title}
          </h1>
          <p>{product.description}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
          <button 
			 	onClick={() => updateProduct({ id: product.id, title: "Edit titulo", description: "Edit Desc"})}
			 >
				Update
			 </button>
        </div>
      ))}

		<br/> 
		<pre>
			{JSON.stringify(cart, null, 3)}
		</pre>
    </div>
  )
}

export default ShoppingCart
