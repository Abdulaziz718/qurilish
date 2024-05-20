import React from 'react'
import { FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = ({mx}) => {
  return (
    <>
        <div className={`grid grid-cols-1 pb-10 gap-5 md:grid-cols-3 lg:px-16 md:px-13 sm:px-8 px-7 pt-20 mt-20 bg-slate-200`}>
            <div className='flex flex-col gap-4'>
                <h1 className='lg:text-3xl text-2xl text-green-500 font-bold'>Qurilish <span className='text-red-500'>Mollari</span></h1>
                <ul className='text-xl gap-2 flex flex-col'>
                    <li>Biz Haqimizda</li>
                    <li>Biz bilan bog'laning</li>
                </ul>
            </div>
            <div>
                <h1 className='lg:text-3xl text-2xl font-bold mt-10 md:mt-0'>Aloqa</h1>
                <ul className='flex flex-col md:pt-10 pt-5  gap-4 text-xl'>
                    <li>Address: <span>Oromgoh MFY Afroosiyob kocha 2-uy</span></li>
                    <li>Tel nomer: <span>+998998957432</span></li>
                    <li>Email: <span>abdulazizbahriddinov460@icloud.com</span></li>
                </ul>
            </div>
            <div className='flex flex-col gap-5'>
                <h1 className='lg:text-3xl text-2xl font-bold'>Ijtimloiy tarmoqlarimiz</h1>
                <div className='flex flex-col gap-3  text-3xl'>
                    <div className='flex gap-3 items-center'>
                        <FaTelegram />
                        <h1>@Abujon_18</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaSquareInstagram />
                        <h1>1smo1lov1c</h1>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaTwitter />
                        <h1>Hali ochilmagan</h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer