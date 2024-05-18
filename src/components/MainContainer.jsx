import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import mix from './img/mix.jpg'
import bolga from './img/bolga.jpg'
import Cards from './Cards'




const MainContainer = () => {
    

    const dataBase = [
        {
            id: 0,
            title: "Arra",
            stock: "27 ta",
            narxi: "55.000 som",
            img: "/src/components/img/arra.jpg",
            description: "quriliwda judayam kerak boladgan asboblardan biri bolmiw arra. Zanglamaydigan metalldan yasalgan va juda o'tkir"
        },
        {
            id: 1,
            title: "Mix", 
            stock: "1000 ta",
            narxi: "1 kg 10.000 som",
            img: "/src/components/img/mix.jpg",
            description: "vapwem kerak bolgan mix. Mixsiz uylaringizni bitira olmaysiz"
        },
        {
            id: 2,
            title: "Bolg'a",
            stock: "109 ta",
            narxi: "40.000 som",
            img: "/src/components/img/bolga.jpg",
            description: "asosi yogoch va ozi temirdan yasalgan bolga. Busiz umuman iwina bitmaydi."
        },
        {
            id: 3,
            title: "Shifer",
            stock: "1003 ta",
            narxi: "560.000",
            img: "/src/components/img/shifr.jpg",
            description: "Suv otkazmaydigan judayam sifatli shifer. Hali yangi ishlatilmagan. Albasterdan yasalgan"
        },
        {
            id: 4,
            title: "Yog'och",
            stock: "2560 ta",
            narxi: "995.000 som",
            img: "/src/components/img/yog'och.webp",
            description: "Sifatli yo'goch. Rossiyadan yetkizib keltiriladi. 12 oy kafolati bor. Yorilib ketmaydi"
        },
        {
            id: 5,
            title: "Shlakablok",
            stock: "698 ta",
            narxi: "787.000 som",
            img: "/src/components/img/shlakablok.png",
            description: "Toza sementdan yasalgan shlakablok. Quriliwlarda 2 yilgacha kafolat bor. Yetkizib beriw hizmati bor"
        },
        {
            id: 6,
            title: "Lampichka",
            stock: "78 ta",
            narxi: "20.000-56.000 som",
            img: "/src/components/img/lampichka.jpg",
            description: "Turli xil razmerdagi akfa lampichkalar. 6 oy kafolati bor va yetkazib beriladi."
        },
        {
            id: 7,
            title: "Sement",
            stock: "89 ta",
            narxi: "1 kg - 100.000 som",
            img: "/src/components/img/sement.jpg",
            description: "Sifatli tez qotadigan va suvda qotadigan sement. Yekazib berish xizmati bor"
        },
        {
            id: 8,
            title: "Armatura",
            stock: "609 ta",
            narxi: "1 metr - 24.000 som",
            img: "/src/components/img/armatura.webp",
            description: "Sifatli 1-sort metall aramtura. 3 oy garantiya bor. Dastavka mavjud."
        },
        {
            id: 9,
            title: "Truba",
            stock: "342 ta",
            narxi: "1 metr - 20.000 som",
            img: "/src/components/img/truba.jpg",
            description: "Metall va plastmassadan yasalga profnastil trubalari. Dastavka xizmati bor"
        },
        {
            id: 10,
            title: "Paqir",
            stock: "12 ta",
            narxi: "15.000 som",
            img: "/src/components/img/paqir.jpg",
            description: "Tunka va plastmassa paqirlar. Teshilib qolmaydi kafolat bor."
        },
        {
            id: 11,
            title: "Lapatka",
            stock: "99 ta",
            narxi: "49.000 som",
            img: "/src/components/img/lapatla.jfif",
            description: "Uchli va sapkavoy lapatka. Tutqichi yogoch ozi temir (sifatli va yemirilmaydi)"
        },
        {
            id: 12,
            title: "Ketmon",
            stock: "78 ta",
            narxi: "39.000 som",
            img: "/src/components/img/ketmon.jpg",
            description: "Abduhllajonni uchar kettmonidan qolishmadigan ketmon. Judayam sifatli duo qilib ishlatasila."
        },  
        {
            id: 13,
            title: "Temir kley",
            stock: "87 ta",
            narxi: "68.000 som",
            img: "/src/components/img/kley.jpg",
            description: "Temirlar uchun kley. Judayam sifatli ko'chib ketmaydi kafolati bor (Titan)."
        },
        {
            id: 14,
            title: "Rangli Bo'yoqlars",
            stock: "107 ta",
            narxi: "99.000 som",
            img: "/src/components/img/kraska.webp",
            description: "WS-Plast rangli bo'yoqlari. Hamma ranglisi mavjud va judayam yorqin ranglarda."
        },
        {
            id: 15,
            title: "Andava",
            stock: "14 ta",
            narxi: "9.000 som",
            img: "/src/components/img/andava.jpg",
            description: "Otdelka va qum suvoqlarda iwlatiw uchun eng sifatli andava (skidka narxlarda)."
        },
        {
            id: 16,
            title: "Ombur",
            stock: "51 ta",
            narxi: "54.000 som",
            img: "/src/components/img/ombur.png",
            description: "Metalldan yasalgan ombur, tishi judayam otkir uncha muncha narsaga ishlaydi"
        },
        {
            id: 17,
            title: "Tok qaychi",
            stock: "21 ta",
            narxi: "34.000 som",
            img: "/src/components/img/ombur.jpg",
            description: "Tok va wunga oxwagan narsalarni qirqiw uchun tok qaychi(zanglamas metalldan yasalgan)"
        },
        {
            id: 18,
            title: "Eshiklar",
            stock: "95 ta",
            narxi: "499.000 som",
            img: "/src/components/img/eshik.jpg",
            description: "Turli xil ranglardagi eshiklar. Yogochdan yasalgan shishib ketmaydi (brand: Rasulov Gi)"
        },
        {
            id: 19,
            title: "Bolt va Gayka",
            stock: "453 ta",
            narxi: "89.000 som ",
            img: "/src/components/img/gayka.jpg",
            description: "Mexmash zavodida ishlab chiqarilgan bold va gaykalar (sifatiga kafolat bor)"
        },
        {
            id: 20,
            title: "Tesha",
            stock: "53 ta",
            narxi: "59.000 som ",
            img: "/src/components/img/tesha.jpg",
            description: "Zanglamas po'latdan yasalgan tesha. Sifatiga kafolat va dastavka bor"
        },
        {
            id: 21,
            title: "Dazmol",
            stock: "23 ta",
            narxi: "259.000 som ",
            img: "/src/components/img/dazmol.jpg",
            description: "Trubalarni birlashtirishda ishlatiladigan dazmol. Qotirilgan trubalar ajrab ketmaydi (poletilin)"
        },
        {
            id: 22,
            title: "Shayton",
            stock: "32 ta",
            narxi: "99.000 som ",
            img: "/src/components/img/shayton.jpg",
            description: "Stabilizator vazifasida iwlatiladigan shayton. Qiyalik va tekkisliklarni o'lchaydi"
        },
        {
            id: 23,
            title: "Qurilish ipi",
            stock: "54 ta",
            narxi: "78.000 som ",
            img: "/src/components/img/ip.jfif",
            description: "Kuchli taranglikka ega qurilish ipi. Bog'lab qo'yilsa uzilib ketmaydi "
        },
        {
            id: 24,
            title: "G'isht",
            stock: "1458 ta",
            narxi: "67.000 som ",
            img: "/src/components/img/gisht.jpg",
            description: "Yuqori sifatli pishiq g'ishtlar, uy qurish un eng yaxwi tanlov"
        },
        {
            id: 25,
            title: "Faner",
            stock: "564 ta",
            narxi: "130.000 som ",
            img: "/src/components/img/ponir.jpg",
            description: "Turli xil ranglardagi fanerlar, yuqori sifatli va suv teksa shishib ketishi kam"
        }
]
    console.log(dataBase);
  return (
    <>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-20 mt-10 gap-5">
            {
                dataBase?.length ? dataBase.map((item, i) => (
                <Cards i={i} item={item} /> 
               )) : <p>Ma'lumotlar topilamdi...</p>
            }
        </div>
        
    </>
  )
}

export default MainContainer



// {
//     data?.length ?
//     data.map((item, i) => (
//        <Cards i={i} ModuleHandler={ModuleHandler} item={item} /> 
//     )) : <p>Ma'lumotlar topilamdi...</p>
// }

// {
//     dataBase?.length ? dataBase.map((item,i) => (
//         <div key={i}  className='flex border  border-black  flex-col gap-4 transition-all  rounded-md overflow-hidden bg-white '>
//                             <div className='aspect-[3/2]   w-full overflow-hidden cursor-pointer group'>
//                                 <img className='w-full h-full object-cover object-top' src={item.img} alt="" />
//                             </div>
//                             {console.log(item.img)}
//                             <div className="flex flex-col flex-1 p-4 gap-2">
//                                 <h1 className='text-lg font-bold '>{item.title}</h1>
//                                 <p className='font-semibold text-cyan-500'>Narxi: <span>{item.narxi}</span></p>
//                                 <p className='font-semibol '><span className="font-semibold">Soni: </span>{item.stock}</p>
//                                 <p className='text-base text-red-500 dark:text-slate-400'>Ta'rif: <span>{item.description}</span></p>
//                                 <button className='bg-cyan-500 text-white py-2 px-3 text-center mt-auto rounded detail hover-eff transition-all duration-300'>Details</button>
//                             </div>
//                         </div>
//     )):<p>salomat</p>
    
// }