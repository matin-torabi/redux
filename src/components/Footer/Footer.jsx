import logo from '../../../public/image/footer/logo.png'
import img_2 from '../../../public/image/footer/img-2.png'
import img_3 from '../../../public/image/footer/img-3.png'

const Footer = () => {
    return ( 
        <footer dir="rtl" className="w-full mobile:h-auto laptop:h-[435px] flex items-center flex-col">
          <div className="w-full mobile:h-auto laptop:h-[92px] bg-[#E2E2E2] flex justify-center">
            <div className="flex mobile:items-start laptop:items-center justify-between mobile:flex-col laptop:flex-row w-[1240px] mobile:gap-7 laptop:gap-0 h-full bg-[#E2E2E2] mobile:p-6 laptop:p-0">
              <div className="flex justify-center items-center gap-2.5">
                <i className="icon-phone text-xl pb-1 text-[#757575]"></i>  
                <h2 className="font-[Yekan] text-[#757575] text-[13px]">021-33902646</h2>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <i className="icon-clock text-xl pb-1 text-[#757575]"></i>
                <h2 className="font-[Yekan] text-[#757575] text-[13px]">شنبه تا چهارشنبه از ساعت 10 صبح الی ساعت 18 پنجشنبه ها از 10 صبح الی ساعت 16</h2>
              </div>
              <div className="flex justify-center items-center gap-2.5">
                <i className="icon-location text-xl pb-1 text-[#757575]"></i>
                <h2 className="font-[Yekan] text-[#757575] text-[13px]">تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه بدیع</h2>
              </div>   
              <a href="#root">
                <div className="mobile:hidden laptop:flex text-[#757575] transition-all duration-200 ease-initial flex w-[96px] h-[44px] bg-white text-xs font-[Yekan] rounded-xl p-2 pr-2 pl-1 cursor-pointer  items-center justify-between leading-5 shadow-md">
                  <span className="hover:text-black ">برو بالا</span> 
                  <i className="icon-up-open text-xs text-gray align-middle p-2"></i>
                </div>
              </a>         
            </div>
          </div>
          <div className="w-full mobile:h-auto laptop:h-[302px] flex justify-center">
            <div className="flex mobile:flex-col justify-between laptop:flex-row w-[1240px] mobile:gap-8 laptop:gap-6 h-full mobile:px-[15px] laptop:px-0">
              <div className="mobile:h-auto laptop:h-full mobile:w-full laptop:w-[220px] flex flex-col justify-center mobile:pt-10 laptop:pt-0 items-center gap-7">
                <img src={logo} className="w-[189px] h-[80px]" alt="" />
                
                <div className=" flex justify-center items-center gap-6">
                  <span className="text-sm font-[Yekan] text-[#2b2b2b]">با ما در ارتباط باشید:</span>
                    <img src={img_2} alt="" />
                </div>
              </div>
              <div className="mobile:h-auto laptop:h-full mobile:w-full laptop:w-[620px] flex flex-col justify-center">
                <h1 className="font-bold font-[Yekan] text-xl text-[#000000de] mb-4">فروشگاه اینترنتی دسترسی</h1>
                <p className="text-[#0009] leading-7 font-[Yekan] text-[16px]">فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی کالا در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و از سال 1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر ارائه کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست اعتماد بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش از طریق سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند با بررسی دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز دسترسی فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ، پاوربانک، ساعت هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و شارژر، لوازم شبکه، تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران گجت جذاب ادامه میدهد.</p>
              </div>
              <div className="mobile:h-auto laptop:h-full mobile:w-full laptop:w-[170px] flex flex-col pt-2.5 gap-4">
                <h3 className="font-bold font-[Yekan] text-[#000000de] text-xl mobile:text-center tablet:text-start">دسترسی سریع</h3>
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">باشگاه مشتریان</a> 
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">سوالات متداول</a> 
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">بلاگ</a> 
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">شرایط و قوانین</a>
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">ارتباط ما</a>
                  <a href="#" className="font-[Yekan] text-sm text-[#757575] hover:text-black transition-all duration-200 ease-initial">درباره ما</a>
              </div>
              <div className="mobile:h-auto laptop:h-full mobile:w-full laptop:w-[170px] mobile:py-5 laptop:py-0 flex justify-center items-center">
                <a href="#">
                    <img src={img_3} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full h-[45px] bg-[#0A5ABD] flex justify-center">
            <div className="flex justify-center items-center w-[1240px] h-full bg-[#0A5ABD]">
              <h1 className="text-white font-[Yekan] mobile:text-xs tablet:text-sm">تمامی حقوق این سایت محفوظ و متعلق به فروشگاه اینترنتی دسترسی می‌باشد.</h1>
            </div>
          </div>
        </footer>        
    );
}
 
export default Footer;