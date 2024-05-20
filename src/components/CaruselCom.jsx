import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';

const CaruselCom = () => {
  return (
    <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='rounded-lg p-3 h-[700px]'>
                <img className='w-full h-full object-cover' src="/src/components/img/gayka.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='rounded-lg p-3 h-[700px]'>
                <img className='w-full h-full object-cover' src="/src/components/img/ip.jfif" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='rounded-lg p-3 h-[700px]'>
                <img className='w-full h-full object-cover'  src="/src/components/img/arra.jpg" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CaruselCom