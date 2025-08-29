import Article from "./Article";

const Articles = () => {
    return ( 
        <section dir="rtl" class="w-full h-[390px] flex justify-center items-center mobile:px-[20px] laptop:px-0">
          <div class="mobile:w-full laptop:w-[1240px] h-full">
            <div class="w-full h-[84px] flex items-center justify-between">
              <h1 class="font-[Yekan] text-2xl text-[#757575]">آخرین مقالات</h1>
              <a href="#" class="flex text-base font-normal gap-2.5 items-center font-[Yekan] text-[#4e5e60]">
                  <span class="mobile:hidden laptop:block">ورود به بلاگ</span>
                  <i class="text-xl icon-arrow-square-left text-[#4e5e60]"></i>
              </a>
            </div>
            <div class="w-full mobile:h-[178px] tablet:h-[230px] laptop:h-[256px]">
              <Article/>
            </div>
          </div>
        </section>
    );
}
 
export default Articles;
