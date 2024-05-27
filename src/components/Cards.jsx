import React from 'react'
import { SlBasket } from "react-icons/sl";
import Checked from './Checked';

const Cards = ({item, i, buyHandler}) => {
  
  
  return (
    <>
         <div key={i}  className='flex border  border-black  flex-col gap-1 transition-all  rounded-md overflow-hidden bg-white '>
            <div className='aspect-[3/2] relative  w-full overflow-hidden cursor-pointer group'>
                <img className='w-full h-full object-cover object-top hoverr' src={item.img} alt="" />
                <Checked id={item.id}/>
            </div>
            <div className="flex flex-col flex-1 p-4 gap-2">
              <h1 className='text-lg font-bold  '>{item.title}</h1>
              <p className='font-semibold text-cyan-500'>Narxi: {item.narxi} so'm</p>
              <p className='font-semibold '><span className="font-semibold">Soni: </span>{item.stock}</p>
              <p className='text-base text-slate-500 dark:text-slate-400'>Ta'rif: {item.description}</p>
             <div className="flex flex-1 justify-center gap-5 items-center">
                <button onClick={()=>buyHandler(item)} className='bg-green-500 flex items-center justify-center gap-3 text-white py-2 px-20 text-center mt-auto rounded detail hover-eff transition-all duration-300'><span className='text-lg'>Buy</span> <span><SlBasket /></span></button>
                <button className='bg-red-500 tetx-lg text-white py-2.5 px-3 text-center mt-auto rounded detail hover-eff transition-all duration-300'>Batafsil</button>
             </div>
            </div>
          </div>
    </>
  )
}

export default Cards