import React from 'react';

const Basket = (props) => {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrices= cartItems.reduce((a,b)=> a + b.price * b.qty, 0);
    let taxPrices = itemsPrices * 0.14;
    let shippingPricess = itemsPrices > 2000 ? 0 : 50;
    let totalPrices = itemsPrices + taxPrices + shippingPricess;

  return (
    <aside className=" min-w-[300px] g-slate-200 bg-slate-200 p-4 m-2 rounded-[4px]">
        <div className='font-bold'>Cart</div>
       <div>
           {(cartItems === undefined || cartItems.length === 0) && <div>Cart is empty</div>}
           {cartItems.map((item)=> 
               <div key={item.id} className="flex justify-between">
                    <div>{item.name}</div>
               <div className='h-7'>
                   <button onClick={()=>onAdd(item)} className="bg-green-400  mr-3 h-6 w-6 rounded-xl"><p>+</p></button>
                   <button onClick={()=>onRemove(item)} className="bg-red-400  mr-3 h-6 w-6 rounded-xl">-</button>
               </div>
              <div>{item.qty} x ${item.price}</div>
               </div>
           )}
    </div> 
    {cartItems.length !== 0 && (
      <>
       
        <div className='flex justify-between mt-4'>
          <div className=''>Items Price</div>
          <div className=''>${itemsPrices.toFixed(2)}</div>
        </div>
        <div className='flex justify-between'>
          <div className=''>Tax</div>
          <div className=''>${taxPrices.toFixed(2)}</div>
        </div>
        <div className='flex justify-between'>
          <div className=''>Shipping</div>
          <div className=''>${shippingPricess.toFixed(2)}</div>
        </div>
        <div className='flex justify-between'>
          <div className='font-bold'>Total</div>
          <div className='font-bold'>${totalPrices.toFixed(2)}</div>
        </div>
      <div className='flex justify-center mt-2'>
        <button className='bg-yellow-400 rounded-lg px-3 p-1' onClick={()=> alert('Nukreipimas į mokėjimo puslapį')}>Continue to payment</button>
      </div>
      </>
    ) }
    
   </aside>
  )
}

export default Basket