import React from 'react'
import { SlBasket } from 'react-icons/sl'

const Checked = ({id}) => {
    const cartToLS = JSON.parse(localStorage.getItem("cart"))
    const isCheked = cartToLS?.find(item => item.id == id)
  return (
    <>
        {
        isCheked && 
            <div className='w-max bg-green-500 rounded-full text-white p-2 absolute top-0 left-0'>
                <SlBasket className='text-3xl'/>
            </div> 
        }
    </>
  )
}

export default Checked