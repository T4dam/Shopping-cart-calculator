import React from 'react'

const Basket = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    console.log(cartItems)
  return (
    <aside className=" min-w-[300px] g-slate-200 bg-slate-200 p-4 m-2 rounded-[4px]">
        <div className='font-bold'>Cart</div>
       <div>
           {(cartItems === undefined || cartItems.length === 0) && <div>Cart is empty</div>}
           {cartItems.map((item)=> (
               <div key={item.id} className="flex justify-between">
                    <div>{item.name}</div>
               <div className='h-7'>
                   <button onClick={()=>onAdd(item)} className="bg-green-400  mr-3 h-6 w-6 rounded-xl"><p>+</p></button>
                   <button onClick={()=>onRemove(item)} className="bg-red-400  mr-3 h-6 w-6 rounded-xl">-</button>
               </div>
              <div>{item.qty} x ${item.price}</div>
               </div>
           ))}
    </div> 
    </aside>
  )
}

export default Basket