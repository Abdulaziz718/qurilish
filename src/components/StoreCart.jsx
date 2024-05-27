import React, { useContext } from 'react'
import { AiOutlinePlus } from "react-icons/ai";
import { LiaMinusSolid } from "react-icons/lia";
import { BsTrash3 } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { ProductContext } from '../App';


const StoreCart = ({setIsOpen, isOpen, data}) => {
    const [state, dispatch] = useContext(ProductContext)
    const deleteHandler = (item) =>{
        let cartToLS = JSON.parse( localStorage.getItem("cart")) || []
        cartToLS = cartToLS.filter(elem => elem.id !== item.id)
        dispatch({type: "PRODUCT", payload: cartToLS})
        localStorage.setItem("cart", JSON.stringify(cartToLS))
    }
    
    const DecIncHandler = (item, type) =>{
        let cartToLS = JSON.parse( localStorage.getItem("cart")) || []
        cartToLS.find(elem => {
        if(elem.id == item.id){
            if(type == "inc"){
                elem.count = elem.count + 1
                if(elem.count > elem.stock){
                    elem.count = elem.stock
                }
            }
            else if(type == "dec"){
                elem.count = elem.count - 1
                if(elem.count < 1){
                    elem.count = 1
                }
            }
        } 
        })
    }
  return (
        <div className={`${isOpen ? "w-[500px]" : "w-0"} fixed transition-all duration-500 top-0 right-0 shadow-md h-screen backdrop-blur-lg`}>
            <div className='p-5'>
                <button onClick={()=>setIsOpen(false)} className='bg-red-500 m-5 px-3 py-1 rounded-md text-white text-xl hover-eff transition-all duration-300'>remove</button>
            </div>
            <div className='flex flex-col gap-2 max-h-[75vh] min-h-[75vh] overflow-y-scroll px-3'> 
                {
                    data?.length ? data.map((item,i ) => (
                        <div key={i} className='flex p-2 whitespace-nowrap border border-black/20 rounded-md bg-slate-500 gap-2 text-white'>
                            <div className='w-36 h-15'>
                                <img className='w-full h-full' src={item.img} alt="" />
                            </div>
                            <div className='flex flex-col gap-1 flex-1 px-3'>
                                <h1 className='font-medium'>{item.title}</h1>
                                <p className='text-xs'><span>price: <span className='text-green-500'>$1{item.narxi}</span></span></p>
                                <p className='text-xs'><span>stock: <span>{item.stock}</span></span></p>
                                <div className='flex justify-between mt-1'>
                                    <div className='border border-black/20 flex items-center w-max rounded px-2 gap-4 text-center text-sm'>
                                        <button className='text-red-500 text-xl' onClick={()=>DecIncHandler(item,"dec")}>
                                            <LiaMinusSolid />
                                        </button>
                                        <button>{item.count}</button>
                                        <button className='text-green-500 text-xl' onClick={()=>DecIncHandler(item,"inc")}>
                                            <AiOutlinePlus />
                                        </button>
                                    </div>
                                    <div className='flex gap-2 mt-auto justify-end'>
                                        <button onClick={()=>deleteHandler(item)} className='bg-red-500 text-white py-2 px-3 text-center rounded trash'><BsTrash3 /></button>
                                        <button className='bg-green-500 text-black py-2 px-3 text-center rounded next'><GrNext /></button>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    )):<h1>Malumotlar yoq</h1>
                }
            </div>
            <div className='flex flex-col gap-2 p-3 mt-5'>
                <div className='flex justify-between'>
                    <h1>umumiy: </h1>
                    <h1 className='text-xl text-green-500 font-semibold'>{(21212).brm()} so'm</h1>
                </div>
                <div className='flex justify-between'>
                    <h1>Maxsulot: </h1>
                    <h1 className='text-xl text-green-500 font-semibold'>7 ta</h1>
                </div>
            </div>
        </div>
  )
}

export default StoreCart