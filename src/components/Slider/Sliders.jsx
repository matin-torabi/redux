import Slider from "./Slider";

const Sliders = () => {
    return ( 
        <section dir="rtl" className="w-full  mobile:h-[200px] tablet:h-[350px] laptop:h-[470px] flex justify-center items-center mobile:px-[30px] laptop:px-0">
          <div className="mobile:w-full laptop:w-[1240px] mobile:h-[145px] tablet:h-[295px] laptop:h-[400px] ">
                <div className="swiper mySwiper rounded-xl ">
                  <div className="swiper-wrapper slide">
                    <Slider/>
                  </div>
                <div className="swiper-pagination"></div>
              </div>
          </div>
        </section>
    );
}
 
export default Sliders;