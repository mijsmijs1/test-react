import React from "react"
import Cart from "./component/Cart/Cart"
import Product from "./component/Product/Product"
import './App.scss' 
function App() {


  return (
    <>
      <div className="app_body"></div>
      <h1>Shopping cart</h1>
      <div className="app_page_container">
        <div className="app_page_container_left">
          <Cart />
        </div>
        <div className="app_page_container_right">
          <Product />
        </div>
      </div>
    </>
  )
}

export default App
