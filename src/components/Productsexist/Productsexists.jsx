import Productsexist from './Productsexist'

const Productsexists = () => {
    return ( 
      <section dir="rtl" className="w-full mobile:h-auto laptop:h-[576px] flex justify-center items-center mobile:mb-8 laptop:mb-0">
        <div className="flex flex-col mobile:w-full laptop:w-[1240px] mobile:h-auto laptop:h-[546px] laptop:rounded-xl bg-[#E2E2E2] mobile:px-5 laptop:px-[40px] mobile:gap-6 mobile:py-5">
          <div className="w-full h-[15%] flex items-center justify-between">
            <span className="font-[Yekan] text-2xl text-center font-bold text-[#757575]">همین الان موجود شد...</span>
            <a href="#" className="flex font-normal items-center gap-2 text-[#4e5e60]">
                <span className="text-sm mobile:hidden laptop:flex font-[Yekan]">مشاهده همه محصولات</span>
                <i className="text-xl icon-arrow-square-left pb-1 text-[#4e5e60]"></i>
            </a>
          </div>
          <div className="w-full mobile:h-[252px] tablet:h-[320px] laptop:h-[404px] ">
            <Productsexist/>
          </div>
        </div>
      </section>
    );
}
 
export default Productsexists;