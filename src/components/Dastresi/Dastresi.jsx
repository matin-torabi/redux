import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDastresi } from "../../redux/dastresi"


const Dastresi = () => {
    const {dastresi, loading, error} = useSelector((state)=>state.dastresi)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchDastresi())
    },[])  
  return ( 
        <section dir="rtl" className="mobile:hidden tablet:flex w-full h-[350px] flex justify-center items-center">
          <div className="mobile:w-full laptop:w-[1240px] tablet:h-auto laptop:h-[235px]">
            <div className="w-full h-[63px] flex justify-center items-center">
              <h1 className="font-[Yekan] text-2xl font-bold text-[#1D1D16]">چرا دسترسی رو برای خرید انتخاب کنیم؟</h1>
            </div>
            <div className="w-full dast flex justify-between tablet:h-auto laptop:h-[172px] px-[30px]">
              {dastresi.dastresi?.map((item)=>{
                return (
                  <div key={item.id} className="laptop:w-[290px] desktop:w-[312px] h-full flex flex-col justify-center items-center p-4 gap-2.5">
                    <img src={item.icon} alt={item.alt} className="w-[64px] h-[64px]" />
                    <h2 className="font-[Yekan] text-[#7E7575] text-sm font-bold text-center">{item.title}</h2>
                    <p className="font-[Yekan] text-center tablet:text-[12px] laptop:text-sm text-[#2b2b2b] leading-7">${item.description}</p>
                  </div>
                )})
              }

            </div>
          </div>
        </section>
  );
}
 
export default Dastresi;
