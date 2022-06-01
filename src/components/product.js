import React from 'react'

const Product = (props) => {
    console.log(props)
    const {merch} = props;

  return (
    <div className='flex'>
        <div>
            <img className="max-w-[16rem] min-w-[12rem]"src={merch.image} alt={merch.name} />
            <h3>{merch.name}</h3>
            <div>{merch.price} Eur</div>
            <div>
                <button>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Product