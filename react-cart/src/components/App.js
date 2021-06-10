import React from "react"
import Cart from "./cart"
import CartData from "./cartData"


function App() {
  const cartComponents = CartData.map(cart => <Cart key={cart.id} name={cart.name} price={cart.price} url={cart.url} />)
  
  return (
      <div className="cart">
          {cartComponents}            
      </div>
  )
}

export default App
