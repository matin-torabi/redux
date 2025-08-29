import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../index.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsexist } from '../../redux/productsexist';

function Productsexist() {
    const {productsexist, loading, error} = useSelector((state)=>state.productsexist)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProductsexist())
    },[])  
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 5,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 5,
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
      {productsexist.productsexist?.map((item)=>{
            if (item.status==="exist") {
                return (
                  <SwiperSlide className="rounded-xl">
                      <a href="#" className="w-full h-full">
                          <div className="w-full h-full flex justify-between flex-col relative">
                              <div className="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                  <img src={item.image} alt={item.alt} className="w-full h-full tablet:object-cover rounded-xl" />
                              </div>
                                  <div className="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                  <h3 className="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">{item.title}</h3>
                                  <p className="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">{item.description}</p>
                              </div>
                              <div className="w-full mobile:h-[58px] tablet:h-[62px] laptop:h-[62px] flex flex-col gap-2 py-2.5 justify-center mobile:items-center mobile:pl-0 laptop:items-end laptop:pl-5">
                                  <span className="font-[Yekan] text-[#A3A3A3] text-xs">{item.off}</span>
                                  <div className="flex justify-center items-center gap-2.5 ">
                                      <span className="font-[Yekan] font-bold mobile:text-[12px] tablet:text-xl text-[#0a5abd]">{item.price}</span>
                                      <span className="font-[Yekan] mobile:text-[12px] tablet:text-xs text-[#A3A3A3]">تومان</span>
                                  </div>
                              </div>
                              <div className="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                          </div>
                      </a>        
                  </SwiperSlide>                    
                )
            }else{
                return (
                  <SwiperSlide className="rounded-xl ">
                        <a href="#" className="w-full h-full">
                            <div className="w-full h-full flex justify-between flex-col relative">
                                <div className="w-full mobile:h-[138px] tablet:h-[190px] laptop:h-[272px]">
                                    <img src={item.image} alt={item.alt} className="w-full h-full tablet:object-cover rounded-xl" />
                                </div>
                                    <div className="w-full mobile:h-[56px] tablet:h-[68px] laptop:h-[70px] flex flex-col items-center justify-center gap-2.5">
                                    <h3 className="mobile:hidden laptop:block font-[Yekan] text-[#A3A3A3] text-xs">{item.title}</h3>
                                    <p className="font-[Yekan] text-[#000000DE] text-xs line-clamp-1">{item.description}</p>
                                </div>
                                <div className="w-full bg-[#FFF5F5] mobile:h-[58px] tablet:h-[62px] rounded-b-xl laptop:h-[62px] flex flex-col items-center justify-center">
                                    <span className="text-[#9b2c2c] text-sm font-[Yekan]">ناموجود</span>

                                </div>
                                <div className="mobile:hidden laptop:block w-[12px] h-[12px] rounded-full bg-[#000000de] absolute left-5 top-5" ></div>
                            </div>
                        </a>
                  </SwiperSlide>                    
                )
            }        
      })}


    </Swiper>
  );
}


export default Productsexist;
