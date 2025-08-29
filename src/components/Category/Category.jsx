
import React, { useEffect, useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../index.css';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../redux/category';
import { Navigation } from 'swiper/modules';

export default function App() {
    const {category, loading, error} = useSelector((state)=>state.category)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchCategory())
    },[])        
  return (
    <>
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 5,
          spaceBetween: 5,
        },
        1100: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1500: {
          slidesPerView: 6,
          spaceBetween: 20,
        },
      }}   
      modules={[Navigation]}
      navigation={true}
      className="mySwiper"
    >
        {category.category?.map((item)=>{
            return (
              <SwiperSlide key={item.id}>
                <a href="" className="">
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-[185px] pt-[28px] object-cover h-[185px]" 
                  />
                </a>
              </SwiperSlide>                  
            )
        })
        }
    </Swiper>      
    </>
  );
}
