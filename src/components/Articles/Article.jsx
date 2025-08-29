import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import '../../index.css';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../../redux/category';
import { Navigation } from 'swiper/modules';
import { fetchArticles } from '../../redux/articles';

export default function Article() {
    const {articles, loading, error} = useSelector((state)=>state.articles)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchArticles())
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
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }} 
      modules={[Navigation]}
      navigation={true}
      className="mySwiper"
    >
        {articles.articles?.map((item)=>{
            return (
              <SwiperSlide key={item.id}>
                    <a href="#" class="flex hover:text-[#0a5abd] items-center shadow-md  rounded-2xl">
                        <div class="w-full rounded-md  mobile:h-[140px] tablet:h-[190px] laptop:h-[215px] flex flex-col justify-center items-center">
                            <div class="w-full mobile:h-[50%] tablet:h-[65%] laptop:h-[70%]">
                                <img class="w-auto rounded-xl mobile:h-full object-cover " src={item.image} alt={item.alt} />
                            </div>
                            <div class="w-full flex items-center justify-center mobile:h-[50%] tablet:h-[35%] laptop:h-[30%]">
                                <h3 class="mobile:leading-6 tablet:leading-7 mobile:line-clamp-2 mobile:text-xs laptop:text-sm overflow-hidden font-[Yekan] text-[#494949]">{item.description}</h3>
                            </div>
                        </div>
                    </a>   
              </SwiperSlide>                  
            )
        })
        }
    </Swiper>      
    </>
  );
}
