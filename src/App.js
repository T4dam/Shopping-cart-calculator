import React, { useState } from "react";
import Basket from "./components/basket";
import Header from "./components/header";
import Main from "./components/main";
import data from './data'

function App() {
  const [cartItems, setCartItems] = useState([])
  const { products } = data;

  const onAdd = (products) => {
    const exist = cartItems.find(item=> item.id === products.id);
    if (exist) {
      setCartItems(cartItems.map(item=> item.id === products.id ? {...exist, qty: exist.qty + 1} : item))
    } else {
      setCartItems([...cartItems, {...products, qty:1}])
    }
  }
  const onRemove = (products) => {
    const exist = cartItems.find(item=> item.id === products.id);
    if (exist.qty === 1) {
      setCartItems( cartItems.filter(item => item.id !== products.id))
    
  } else {
    if (exist) {
      setCartItems(cartItems.map(item=> item.id === products.id ? {...exist, qty: exist.qty - 1} : item))
    }
  }
  }

  return (
    <div>
     <Header />
     <div className="w-full flex justify-between">
       <Main products={products} onAdd={onAdd} />
       
       <Basket cartItems={cartItems} onRemove={onRemove} onAdd={onAdd}/>
     </div>
    </div>
  );
}

export default App;
