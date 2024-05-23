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
                <img className='w-full h-full object-cover' src="https://www.qy1.de/img/f303010.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='rounded-lg p-3 h-[700px]'>
                <img className='w-full h-full object-cover' src="https://earoofing.co.ug/wp-content/uploads/2023/03/istockphoto-493508872-612x612-1.jpg" alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='rounded-lg p-3 h-[700px]'>
                <img className='w-full h-full object-cover'  src="https://avatars.mds.yandex.net/get-altay/10175550/2a0000018ab15a088c1fa4a10bc7c879f3bb/XXL_height" alt="" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default CaruselCom