import Category from '../Category/Category';
import Categ from './Categ';

const Categoryes = () => {
    return ( 
        <>
            <section dir="rtl" className="mobile:hidden tablet:flex w-full h-[400px] flex justify-center items-center ">
                <div className="h-[300px] tablet:w-full laptop:w-[1240px] flex flex-col">
                    <div className="h-[50px] tablet:w-full laptop:w-[1240px] flex justify-center items-center">
                    <h1 className="font-bold font-[Yekan] text-2xl text-[#202044]">دسته‌بندی‌های منتخب</h1>
                    </div>
                    <div className="h-[250px] tablet:w-full laptop:w-[1240px] tablet:px-5 laptop:px-[60px] desktop:px-0 ">
                        <Category/>
                    </div>
                </div>
            </section>

            <section dir="rtl" className="mobile:flex tablet:hidden w-full h-auto flex justify-center items-center py-8">
                <div className="w-full h-auto flex flex-col gap-5 items-center justify-center">
                    <div className="w-full h-[15%] flex justify-center items-center">
                    <h1 className="font-[Yekan] text-[#000000] text-2xl">دسته‌بندی‌های منتخب</h1>
                    </div>
                    <div className="w-full h-[85%] mcat flex flex-wrap gap-5 items-center justify-center">
                        <Categ/>
                    </div>
                </div>
            </section>        
        </>
    );
}
 
export default Categoryes;