import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { ProductContext } from '../App';


const Navbar = ({mx, setIsOpen, state}) => {
  return (
    <>
        <div className={`flex  mt-3 justify-between items-center ${mx}`}>
          <div>
            <h1 className='lg:text-3xl text-2xl text-green-500 font-bold'>Quriliw <span className='text-red-500'>Mollari</span></h1>
          </div>
           <div className='md:flex hidden border border-black gap-0 py-1 items-center w-[45%] radius'>
              <input type="text" className='px-2 py-2 w-[100%] ml-2' placeholder='Mahsulotlarni kiriting'/>
              <button  className='border bg-green-500 font-bold text-xl text-white cursor-pointer py-[7px] px-3 rounded-lg mr-1'><CiSearch /></button>
           </div>
            <div className='flex gap-5 text-white'>
              <button className='bg-green-500 flex gap-5 px-3 md:px-5 py-2 hover-eff transition-all duration-300 rounded-lg'>Savatcha</button>
              <button className='bg-red-500 px-3 md:px-5 py-2 hover-eff transition-all duration-300 rounded-lg'>Registratsiya</button>
              <button onClick={() => setIsOpen(true)} className='text-black text-4xl relative'><SlBasket /> <span className='top-0 right-0 absolute min-w-5 h-5 flex items-center justify-center rounded-full text-sm bg-green-500'>{state?.cart.length}</span></button>
            </div>
          </div>
        
    </>

  )
}

export default Navbar