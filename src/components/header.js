import React from 'react'

const Header = (props) => {
    const {countCartItems} = props;
  return (
    <header className='flex justify-between bg-slate-200 p-4 m-2 rounded-[4px]'>
        <div>
            <a>
                <h1>Shopping cart</h1>
            </a>
        </div>
        <div>
            <a href='#/Cart' className='mr-3'>
                Cart {' '}
                {countCartItems
                ? (<button className='bg-yellow-400 w-6 rounded-lg'>{countCartItems}</button>)
                : ''}
                </a>
            <a href='#/Login'>Login</a>
        </div>
    </header>
  )
}

export default Header