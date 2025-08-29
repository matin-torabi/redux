import Products from "./Products";

const Productses = () => {
    return ( 
      <section dir="rtl" className="w-full mobile:h-auto laptop:h-[576px] flex justify-center items-center ">
        <div className="flex flex-col mobile:w-full laptop:w-[1240px] mobile:h-auto laptop:h-[546px] laptop:rounded-xl bg-[#E2E2E2] mobile:px-5 laptop:px-[40px] mobile:gap-6 mobile:py-5">
          <div className="w-full h-[15%] flex items-center justify-between">
            <span className="font-[Yekan] text-2xl text-center font-bold text-[#757575]">پرفروش‌ترین محصولات</span>
            <a href="#" className="flex text-base font-normal items-center gap-2 text-[#4e5e60]">
              <span className="text-sm mobile:hidden laptop:block font-[Yekan]">مشاهده همه محصولات</span>
              <i className="text-xl icon-arrow-square-left pb-1 text-[#4e5e60]"></i>
            </a>
          </div>
          <div className="w-full mobile:h-[252px] tablet:h-[320px] laptop:h-[404px] ">
            <Products/>
          </div>


        </div>
      </section>
    );
}
 
export default Productses;