import Brand from "./Brand";

const Brands = () => {
    return ( 
        <section dir="rtl" class="w-full h-[260px] flex justify-center items-center mobile:px-[20px] laptop:px-0">
          <div class="mobile:w-full laptop:w-[1240px] h-[210px]">
            <div class="w-full h-[44px] ">
              <span class="text-2xl font-[Yekan] text-center font-bold text-[#696969]">محبوب ترین برندها</span>
            </div>
            <div class="w-full h-[166px]">
                <Brand/>
            </div>

          </div>
        </section>
    );
}
 
export default Brands;