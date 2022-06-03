import React from 'react'

const Main = (props) => {
    const {cartItems}=props;
  return (
    <aside className=" w-[300px] g-slate-200 bg-slate-200 p-4 m-2 rounded-[4px]">
        <div className='font-bold'>Main</div>
       <div>
           {(cartItems === undefined || cartItems.length === 0) && <div>Cart is empty</div>}
    </div> 
    </aside>
  )
}

export default Main