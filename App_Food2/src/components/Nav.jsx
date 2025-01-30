import React, { useContext, useEffect } from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { dataContext } from '../context/userContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
    let { input, setInput, cate, setCate, showCart, setShowCart} = useContext(dataContext)
    useEffect(()=> {
        let newList = food_items.filter((item) =>  item.food_name.toLowerCase().includes(input)||item.food_name.toLowerCase().includes(input))
        setCate(newList)
    },[input])

    let items = useSelector(state => state.cart)

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'>
        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-md bg-white shadow-xl'>
        <IoFastFoodOutline className='w-[30px] h-[30px] text-blue-300'/>
        </div>

        <form className='w-[45%] h-[60px] flex items-center rounded-md bg-white shadow-xl px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e) => e.preventDefault()}>
        <IoIosSearch className='text-blue-300 w-[20px] h-[20px]' />
            <input type="text" placeholder='search item...' className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e) => setInput(e.target.value)} value={input} />
        </form>

        <div className='w-[60px] h-[60px] flex justify-center items-center rounded-md bg-white shadow-xl relative cursor-pointer' onClick={() => { setShowCart(true) }}>
            <span className='absolute top-0 right-2 text-blue-300 font-bold text-[18px] shadow-xl'>{items.length}</span>
        <FaShoppingBasket className='w-[30px] h-[30px] text-blue-300' />
        </div>
    </div>
  )
}

export default Nav;