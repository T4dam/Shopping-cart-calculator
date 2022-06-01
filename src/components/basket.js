import React from 'react';
import Product from './product';
const Basket = (props) => {
    const {products} = props;
    console.log(products)
  return (
    <aside className="bg-slate-200 bg-slate-200 p-4 m-2 rounded-[4px] grow">
      
        <div className='flex justify-between'>
            {products.map(item=>{
               return <Product key={item.id} merch={item} />
            })}
        </div>
    
    </aside>
  )
}

export default Basket