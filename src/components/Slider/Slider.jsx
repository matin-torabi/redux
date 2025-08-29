import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '../../index.css';

import {  Autoplay, Pagination } from 'swiper/modules';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSlider } from '../../redux/slider';

export default function Slider() {
    const {slider, loading, error} = useSelector((state)=>state.slider)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchSlider())
    },[])    
  return (
    <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                {slider.slider?.map((item)=>{
                    return(
                        <SwiperSlide>
                            <a href="#" className="w-full h-full">
                                <div className="w-full h-full">
                                    <img src={item.image} alt={item.alt} className="w-full h-full object-cover rounded-xl" />
                                </div>
                            </a>
                        </SwiperSlide>                                    
                    )
                })}
        </Swiper>    
    </>
  );
}



