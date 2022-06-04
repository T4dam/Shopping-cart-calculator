import React from 'react'

const Product = (props) => {
    const {merch, onAdd} = props;

  return (
    <div>
        <div>
            <img className="max-w-[16rem] min-w-[12rem]"src={merch.image} alt={merch.name} />
            <h3 className='font-bold'>{merch.name}</h3>
            <div>{merch.price} Eur</div>
            <div>
                <button className='bg-green-400 px-2 rounded-[4px]' onClick={()=>onAdd(merch)}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product