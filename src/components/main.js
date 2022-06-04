import React from 'react';
import Product from './product';
const Main = (props) => {
    const {products, onAdd} = props;
  return (
    <aside className=" w-full bg-slate-200 bg-slate-200 p-4 m-2 rounded-[4px]">
      
        <div className='flex justify-between gap-2'>
            {products.map(item=>{
               return <Product key={item.id} merch={item} onAdd={onAdd}/>
            })}
        </div>
    
    </aside>
  )
}

export default Main