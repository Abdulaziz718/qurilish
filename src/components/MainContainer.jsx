import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Cards from './Cards'
import Footer from './Footer'
import Carusel from './Carusel'





const MainContainer = () => {
    
    const category = [
        "Barchasi",
        "qurilish uchun",
        "ichki dizayn",
        "tashqi dizayn",
        "yogoch material",
        "temir material",
        "santexnika",
        "kafolatli",
        "yetkazib berish",
        "poydevor",
        "yana nimadir"
    ]
    const dataBaseProducts = [
        {
            id: 0,
            title: "Arra",
            stock: "27 ta",
            narxi: "55.000 som",
            category: "yogoch material",
            img: "https://www.qy1.de/img/f303010.jpg",
            description: "quriliwda judayam kerak boladgan asboblardan biri bolmiw arra. Zanglamaydigan metalldan yasalgan va juda o'tkir"
        },
        {
            id: 1,
            title: "Mix", 
            stock: "1000 ta",
            narxi: "1 kg 10.000 som",
            category: "temir material",
            img: "https://earoofing.co.ug/wp-content/uploads/2023/03/istockphoto-493508872-612x612-1.jpg",
            description: "vapwem kerak bolgan mix. Mixsiz uylaringizni bitira olmaysiz"
        },
       {
            id: 2,
            title: "Bolg'a",
            stock: "109 ta",
            narxi: "40.000 som",
            category: "qurilish uchun",
            img: "https://cdn.mediapark.uz/imgs/672e373e-d5fa-463d-8b3c-fcf939078786_24a994c7437b11ebb4ca00505690a4dd_0109a52a028211ed865e00505690a4dd.resize1.webp",
            description: "asosi yogoch va ozi temirdan yasalgan bolga. Busiz umuman iwina bitmaydi."
        },
        {
            id: 3,
            title: "Shifer",
            stock: "1003 ta",
            narxi: "560.000",
            category: "tashqi dizayn",
            img: "https://shop.chuztrade.uz/wp-content/uploads/2018/12/a77103e688fba88173fa8.png",
            description: "Suv otkazmaydigan judayam sifatli shifer. Hali yangi ishlatilmagan. Albasterdan yasalgan"
        },
        {
            id: 4,
            title: "Yog'och",
            stock: "2560 ta",
            narxi: "995.000 som",
            category: "yogoch material",
            img: "https://files.glotr.uz/company/000/026/521/products/2021/10/04/2021-10-04-15-38-02-530811-2691ce2fc7d28c976d8d48a67a2fa165.jpg?_=ozbol",
            description: "Sifatli yo'goch. Rossiyadan yetkizib keltiriladi. 12 oy kafolati bor. Yorilib ketmaydi"
        },
        {
            id: 5,
            title: "Shlakablok",
            stock: "698 ta",
            narxi: "787.000 som",
            category: "qurilish uchun",
            img: "https://frankfurt.apollo.olxcdn.com/v1/files/nbgp3yzix02t1-UZ/image",
            description: "Toza sementdan yasalgan shlakablok. Quriliwlarda 2 yilgacha kafolat bor. Yetkizib beriw hizmati bor"
        },
        {
            id: 6,
            title: "Lampichka",
            stock: "78 ta",
            narxi: "20.000-56.000 som",
            category: "kafolatli",
            img: "https://cdn.aarp.net/content/dam/aarp/money/budgeting_savings/2022/04/1140-light-bulb-types.jpg",
            description: "Turli xil razmerdagi akfa lampichkalar. 6 oy kafolati bor va yetkazib beriladi."
        },
        {
            id: 7,
            title: "Sement",
            stock: "89 ta",
            narxi: "1 kg - 100.000 som",
            category: "poydevor",
            img: "https://turon-eco.uz/wp-content/uploads/2021/01/post4-e1611651928835.jpg",
            description: "Sifatli tez qotadigan va suvda qotadigan sement. Yekazib berish xizmati bor"
        },
        {
            id: 8,
            title: "Armatura",
            stock: "609 ta",
            category: "yana nimadir",
            narxi: "1 metr - 24.000 som",
            img: "https://www.shutterstock.com/image-photo/end-rustic-steel-bar-construction-600nw-1258111429.jpg",
            description: "Sifatli 1-sort metall aramtura. 3 oy garantiya bor. Dastavka mavjud."
        },
        {
            id: 9,
            title: "Truba",
            category: "qurilish uchun",
            stock: "342 ta",
            narxi: "1 metr - 20.000 som",
            img: "https://shop.chuztrade.uz/wp-content/uploads/2018/12/132dde1289d4db1019855.jpg",
            description: "Metall va plastmassadan yasalga profnastil trubalari. Dastavka xizmati bor"
        },
        {
            id: 10,
            title: "Paqir",
            stock: "12 ta",
            narxi: "15.000 som",
            category: "yana nimadir",
            img: "https://lh4.googleusercontent.com/proxy/dw8eSyF9Ga0PBy9o8mzHcvuct5qhnF2-7Mg3M8HJ6wtHfV8Qfxa5BHpJ59R0i6C-MDIz4oGdP41189Rp1UXzDTmybm3fc09pxzTWQq5UhbrhnftIOshAFA86vgV5E1futHpLQdeZqLjLpQ",
            description: "Tunka va plastmassa paqirlar. Teshilib qolmaydi kafolat bor."
        },
        {
            id: 11,
            title: "Lapatka",
            category: "yana nimadir",
            stock: "99 ta",
            narxi: "49.000 som",
            img: "https://pngimg.com/uploads/shovel/shovel_PNG108899.png",
            description: "Uchli va sapkavoy lapatka. Tutqichi yogoch ozi temir (sifatli va yemirilmaydi)"
        },
        {
            id: 12,
            title: "Ketmon",
            category: "yana nimadir",
            stock: "78 ta",
            narxi: "39.000 som",
            img: "https://forum4x4club.ru/uploads/monthly_04_2018/post-7004-0-13356000-1524919494.jpg",
            description: "Abduhllajonni uchar kettmonidan qolishmadigan ketmon. Judayam sifatli duo qilib ishlatasila."
        },  
        {
            id: 13,
            title: "Temir kley",
            stock: "87 ta",
            narxi: "68.000 som",
            categor: "yetkazib berish",
            img: "https://a.allegroimg.com/original/11c79d/606edd4a4bdaa409d910128fb2b0/3xBLYSKAWICZNY-KLEJ-SUPER-GLUE-SZYBKI-MOCNY-STRONG-Typ-Cyjanoakrylowe",
            description: "Temirlar uchun kley. Judayam sifatli ko'chib ketmaydi kafolati bor (Titan)."
       },
        {
            id: 14,
            title: "Rangli Bo'yoqlar",
            category: "ichki dizayn",
            stock: "107 ta",
            narxi: "99.000 som",
            img: "https://grassfire.org/wp-content/uploads/2016/09/Acrylic-paint-for-wood.jpg",
            description: "WS-Plast rangli bo'yoqlari. Hamma ranglisi mavjud va judayam yorqin ranglarda."
        },
        {
            id: 15,
            title: "Andava",
            stock: "14 ta",
            narxi: "9.000 som",
            category: "qurilish uchun",
            img: "https://labequip.ru/wp-content/uploads/1/3/5/135c4444b6060f0161c56d043f6f0b41.jpeg",
            description: "Otdelka va qum suvoqlarda iwlatiw uchun eng sifatli andava (skidka narxlarda)."
        },
        {
            id: 16,
            title: "Ombur",
            stock: "51 ta",
            narxi: "54.000 som",
            category: "qurilish uchun",
            img: "https://m.media-amazon.com/images/I/8106boYgozL._AC_SL1500_.jpg",
            description: "Metalldan yasalgan ombur, tishi judayam otkir uncha muncha narsaga ishlaydi"
        },
        {
            id: 17,
            title: "Tok qaychi",
            stock: "21 ta",
            narxi: "34.000 som",
            category: "yana nimadir",
            img: "https://i.ytimg.com/vi/RGxGXMtlu2E/maxresdefault.jpg",
            description: "Tok va wunga oxwagan narsalarni qirqiw uchun tok qaychi(zanglamas metalldan yasalgan)"
        },
        {
            id: 18,
            title: "Eshiklar",
            stock: "95 ta",
            narxi: "499.000 som",
            category: "ichki dizayn",
            img: "https://www.alemdarogluyapi.com/upload/icerik/lake-kapi-modelleri-ve-montaji-15e90e2b7e15eb.jpg",
            description: "Turli xil ranglardagi eshiklar. Yogochdan yasalgan shishib ketmaydi (brand: Rasulov Gi)"
        },
        {
            id: 19,
            title: "Bolt va Gayka",
            stock: "453 ta",
            narxi: "89.000 som ",
            category: "santexnika",
            img: "https://tdpk.company/upload/catalog/metizi/metizi.webp",
            description: "Mexmash zavodida ishlab chiqarilgan bold va gaykalar (sifatiga kafolat bor)"
        },
        {
            id: 20,
            title: "Tesha",
            stock: "53 ta",
            narxi: "59.000 som ",
            category: "qurilish uchun",
            img: "https://panzy.club/uploads/posts/2023-07/thumbs/1688607298_panzy-club-p-armyanskii-instrument-urak-vkontakte-6.jpg",
            description: "Zanglamas po'latdan yasalgan tesha. Sifatiga kafolat va dastavka bor"
        },
        {
            id: 21,
            title: "Dazmol",
            stock: "23 ta",
            narxi: "259.000 som ",
            category: "poydevor",
            img: "https://i.ytimg.com/vi/S3kYCaNSwXo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgVihBMA8=&amp;rs=AOn4CLBcuz7a3fuwVXTBeFZCHie-raWqGQ",
            description: "Trubalarni birlashtirishda ishlatiladigan dazmol. Qotirilgan trubalar ajrab ketmaydi (poletilin)"
        },
        {
            id: 22,
            title: "Shayton",
            category: "ichki dizayn",
            stock: "32 ta",
            narxi: "99.000 som ",
            img: "https://www.oma.by/upload/iblock/25c/25c5d0d30e1261e388f478c6877f4c96.jpg",
            description: "Stabilizator vazifasida iwlatiladigan shayton. Qiyalik va tekkisliklarni o'lchaydi"
        },
        {
            id: 23,
            title: "Qurilish ipi",
            category: "tashqi dizayn",
            stock: "54 ta",
            narxi: "78.000 som ",
            img: "https://sc01.alicdn.com/kf/HTB1KTDyMpXXXXXhXXXXq6xXFXXXN/5882657/HTB1KTDyMpXXXXXhXXXXq6xXFXXXN.jpg",
            description: "Kuchli taranglikka ega qurilish ipi. Bog'lab qo'yilsa uzilib ketmaydi "
        },
        {
            id: 24,
            title: "G'isht",
            stock: "1458 ta",
            narxi: "67.000 som ",
            category: "poydevor",
            img: "https://static.tildacdn.com/tild3965-3238-4132-b232-643333303533/noroot.png",
            description: "Yuqori sifatli pishiq g'ishtlar, uy qurish un eng yaxwi tanlov"
        },
       {
            id: 25,
            title: "Faner",
            stock: "564 ta",
            narxi: "130.000 som ",
            category: "qurilish uchun",
            img: "https://avatars.mds.yandex.net/get-altay/10175550/2a0000018ab15a088c1fa4a10bc7c879f3bb/XXL_height",
            description: "Turli xil ranglardagi fanerlar, yuqori sifatli va suv teksa shishib ketishi kam"
        }
    ]
    const [dataBase, setDataBase] = useState(dataBaseProducts)
    const [data, setData] = useState()
    const mx = "lg:mx-16 md:mx-13 sm:mx-8 mx-7  "
    console.log(dataBase);
    const filterHandler = async (value) =>{   
        
    }
    const searchHandkler = (value) =>{
        if(dataBase.title.includes(value) || dataBase.category.includes(value)){
            setData(dataBase)
        }
    }
  return (
    <>
        {/* navbar qowdm */}
        <Navbar mx={mx}/>
        {/* carusel qoshdim */}
        <div className=' mt-10 mb-20 '>
            <Carusel />
        </div>
       {/* categoriya bn search qowdm */}
         <div className={`flex justify-between items-center ${mx} mt-10`}>
            <select onChange={(e)=>filterHandler(e.target.value)} className="border bg-transparent  rounded outline-none py-2 px-4 w-full md:w-52  border-black">
                        {category.length ? category.map((item,i) => (
                            <option onChange={(e)=>filterHandler(e.target.value)} key={i} value={item}>{item}</option>
                        )): <option>malumot yoq</option>
                    }
                </select>
            <input type="text" onChange={(e) => searchHandkler(e.target.value)} className='rounded-lg border border-black px-5 py-2' placeholder='Mahsulot qidiring...'/>
        </div>
        {/* dataBase ni map qildim */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${mx} mt-10 gap-5`}>
            {
                dataBase?.length ? dataBase.map((item, i) => (
                <Cards i={i} item={item} /> 
               )) : <p>Ma'lumotlar topilamdi...</p>
            }
        </div>
        <Footer mx={mx} />
    </>
  )
}

export default MainContainer