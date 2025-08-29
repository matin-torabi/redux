import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "../../index.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBrand } from '../../redux/Brand';


function Brand() {
    const {brand, loading, error} = useSelector((state)=>state.brand)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchBrand())
    },[])  
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 20,
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
        {brand.brand?.map((item)=>{
            return (
                  <SwiperSlide className="rounded-xl">
                        <div class="w-full h-full flex items-center justify-center ">
                            <div class="rounded-xl shadow-md bg-white flex items-center cursor-pointer justify-center w-full h-[96px]  transition-all duration-300 ease-in-out hover:-translate-y-3">
                                <a class="" href="#">
                                    <img src={item.image} alt={item.alt} className="mobile:w-14 mobile:h-14 tablet:w-24 tablet:h-24 object-cover" />
                                </a>
                            </div>
                        </div>        
                  </SwiperSlide>                    

            )
        })

        }

    </Swiper>
  );
}


export default Brand;
