import React from 'react'

const Cards = ({item, i}) => {
  console.log(item);
  return (
    <>
         <div key={i}  className='flex border  border-black  flex-col gap-1 transition-all  rounded-md overflow-hidden bg-white '>
                                    <div className='aspect-[3/2]   w-full overflow-hidden cursor-pointer group'>
                                        <img className='w-full h-full object-cover object-top' src={item.img} alt="" />
                                    </div>
                                    <div className="flex flex-col flex-1 p-4 gap-2">
                                        <h1 className='text-lg font-bold  '>{item.title}</h1>
                                        <p className='font-semibold text-cyan-500'>Narxi: {item.narxi}</p>
                                        <p className='font-semibold '><span className="font-semibold">Soni: </span>{item.stock}</p>
                                        <p className='text-base text-slate-500 dark:text-slate-400'>Ta'rif: {item.description}</p>
                                        <button className='bg-cyan-500 text-white py-2 px-3 text-center mt-auto rounded detail hover-eff transition-all duration-300'>Details</button>
                                    </div>
                                </div>
    </>
  )
}

export default Cards