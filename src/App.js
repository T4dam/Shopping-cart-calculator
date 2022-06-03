import React, { useState } from "react";
import Basket from "./components/basket";
import Header from "./components/header";
import Main from "./components/main";
import data from './data'

function App() {
  const { products } = data;
  const {cartItems, setCartItems} = useState(['cat'])

  const onAdd = (products) => {
    const exist = cartItems.find(item=> item.id === products.id);
    if (exist) {
      setCartItems(cartItems.map(item=> item.id === products.id ? {...exist, qty: exist.qty + 1} : item))
    } else {
      setCartItems([...cartItems, {...products, qty:1}])
    }
  }
  return (
    <div>
     <Header />
     <div className="flex">
       <Basket products={products} />
       
       <Main cartItems={cartItems} onAdd={onAdd}/>
     </div>
    </div>
  );
}

export default App;
