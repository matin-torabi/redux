import { useDispatch, useSelector } from "react-redux";
import img_1 from "../../../public/image/card/img-1.jpg";
import img_2 from "../../../public/image/card/img-2.jpg";
import { useEffect } from "react";
import { fetchCard } from "../../redux/card";

const Card = () => {
  const { card, loading, error } = useSelector((state) => state.card);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCard());
  }, []);
  return (
    <section
      dir="rtl"
      className=" w-full mobile:h-auto laptop:h-[761px] flex justify-center items-center mobile:pb-6 laptop:pb-0"
    >
      <div className="mobile:w-full laptop:w-[1240px] bg-[#e2e2e2] laptop:px-[50px] laptop:pb-[50px] mobile:px-5 tablet:px-12 laptop:rounded-xl h-full flex items-center flex-col">
        <div className="w-full h-[15%] mobile:py-8 flex mobile:justify-center items-center">
          <div className="w-full h-full flex items-center laptop:justify-start mobile:justify-center">
            <i className="mobile:hidden laptop:flex icon-percent text-4xl text-[#FE5F55]"></i>
            <h1 className="text-[#757575] mobile:text-2xl laptop:text-4xl font-[Yekan]">
              تخفیف‌های روزانه دسترسی
            </h1>
          </div>
        </div>
        <div className="cards w-full mobile:h-auto laptop:h-[85%] flex laptop:flex-row mobile:flex-col justify-between mobile:gap-5 laptop:gap-0">
          <a href="" className="">
            <div className="mobile:w-full mobile:h-[161px] laptop:w-[405px] laptop:h-[605px] bg-white rounded-xl hover:shadow-xl laptop:p-5 flex mobile:flex-row laptop:flex-col laptop:gap-5">
              <img src={img_1} className="rounded-r-xl" alt="" />
              <div className="mobile:w-full laptop:w-auto flex flex-col laptop:h-full justify-between">
                <p className="text-start font-[Yekan] mobile:text-xs tablet:text-sm laptop:text-[16px] leading-7 line-clamp-3 text-[#000000DE]">
                  شارژر دیواری و پاوربانک وایرلس 20000 میلی آمپری 22.5 واتی
                  هیسکا مدل Hiska HP-223PD
                </p>
                <div className="flex flex-col">
                  <div className="flex mobile:justify-between laptop:gap-2 mobile:w-full laptop:w-auto mobile:pl-2.5 laptop:pl-0">
                    <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#9E9E9E]">
                      3,040,000
                    </span>
                    <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#FE5F55]">
                      300,000 تومان تخفیف
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-end gap-1 pt-2.5 mobile:pl-2.5 laptop:pl-0">
                    <span className="text-[#0A5ABD] font-[Yekan] font-bold mobile:text-sm tablet:text-xl">
                      2,740,000
                    </span>
                    <span className="text-[#A1A3A1] font-[Yekan] mobile:text-[10px] tablet:text-xs">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="">
            <div className="mobile:w-full mobile:h-[161px] laptop:w-[346px] laptop:h-[605px] bg-white rounded-xl hover:shadow-xl laptop:p-5 flex mobile:flex-row laptop:flex-col laptop:gap-5">
              <img src={img_2} className="rounded-r-xl" alt="" />
              <div className="mobile:w-full laptop:w-auto flex flex-col laptop:h-full justify-between">
                <p className="text-start font-[Yekan] mobile:text-xs tablet:text-sm laptop:text-[16px] leading-7 line-clamp-3 text-[#000000DE]">
                  شارژر دیواری 67 واتی گان با کابل تایپ سی مک دودو مدل Mcdodo
                  CH-410
                </p>
                <div className="flex flex-col">
                  <div className="flex mobile:justify-between laptop:gap-2 mobile:w-full laptop:w-auto mobile:pl-2.5 laptop:pl-0">
                    <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#9E9E9E]">
                      2,354,000
                    </span>
                    <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#FE5F55]">
                      355,000 تومان تخفیف
                    </span>
                  </div>
                  <div className="flex flex-row items-center justify-end gap-1 pt-2.5 mobile:pl-2.5 laptop:pl-0">
                    <span className="text-[#0A5ABD] font-[Yekan] font-bold mobile:text-sm tablet:text-xl">
                      1,999,000
                    </span>
                    <span className="text-[#A1A3A1] font-[Yekan] mobile:text-[10px] tablet:text-xs">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <div className="card laptop:w-[346px] laptop:h-[605px] flex flex-col justify-between mobile:gap-5 laptop:gap-0 mobile:pb-5 laptop:pb-0">
            {card.card?.map((i, index) => {
              if (index >= 2) {
                return (
                  <a href="#" key={i.id}>
                    <div className="w-full mobile:h-[161px] laptop:h-[187px] rounded-xl hover:shadow-xl flex bg-white">
                      <img
                        src={i.image}
                        alt={i.alt}
                        className="rounded-xl"
                      />
                      <div className="mobile:w-full laptop:w-auto flex flex-col justify-center">
                        <p className="text-start font-[Yekan] mobile:text-xs tablet:text-sm leading-6 line-clamp-3 text-[#000000DE]">
                          {i.description}
                        </p>
                        <div className="flex mobile:justify-between laptop:gap-2 pt-6 mobile:w-full laptop:w-auto pl-2.5">
                          <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#9E9E9E]">
                            {i.off}
                          </span>
                          <span className="font-[Yekan] mobile:text-[13px] tablet:text-sm text-[#FE5F55]">
                            {i.pureoff}
                          </span>
                        </div>
                        <div className="flex flex-row items-center justify-end gap-1 pt-2.5 pl-2.5">
                          <span className="text-[#0A5ABD] font-[Yekan] font-bold mobile:text-sm tablet:text-xl">
                            {i.price}
                          </span>
                          <span className="text-[#A1A3A1] font-[Yekan] mobile:text-[10px] tablet:text-xs">
                            تومان
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
