import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../../Cover/Cover";
import Burger from "../Burger/Burger";
import { fetchHeaderTop } from "../../../redux/HeaderTopSlice";

const HeaderTop = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.header);

  const focusF = (e) => {
    document.querySelector("#cover").classList.remove("hidden");
  };

  const blurF = (e) => {
    document.querySelector("#cover").classList.add("hidden");
  };

  useEffect(() => {
    dispatch(fetchHeaderTop());
  }, []);

  return (
    <>
      <Cover />
      {/* loading */}
      <div
        className={`${
          loading === false ? "hidden" : null
        } bg-white flex justify-center items-center fixed top-0 left-0 w-full h-full z-[200]`}
      >
        <div className="loading loading-infinity w-[100px] h-[100px]"></div>
      </div>
      {/* loading */}

      {/* error */}
      <div
        className={`${
          error === "" ? "hidden" : null
        } bg-white flex justify-center items-center fixed top-0 left-0 w-full h-full z-[200]`}
      >
        <div className="text-2xl">{error}</div>
      </div>
      {/* error */}

      <div
        id="head"
        className="header-box-top w-full h-[45px] flex justify-between items-center"
      >
        <div className="header-box-top-left flex laptop:gap-8 items-center max-w-2/3">
          <div
            id="burger"
            className="icon-menu text-2xl  ml-4 laptop:hidden block cursor-pointer"
            onClick={(e) => {
              e.currentTarget.firstElementChild.classList.remove("hidden");
              document.querySelector("#cover").classList.remove("hidden");
            }}
          >
            <Burger />
          </div>
          <img
            className="laptop:w-[96px] laptop:h-[40.89px] w-[58.67px] h-[24.98px] block"
            src={post[0]?.linkImage}
            alt={post[0]?.alt}
          />

          <div
            id="search-box"
            className="desktop:w-[371.23px]  laptop:w-[300px] h-[40px]  bg-[#f7f8fa] pr-[8px] shadow-1 rounded-[12px] laptop:flex justify-center items-center duration-500 relative z-[160] hidden"
          >
            <span className="w-[20px] h-[28px] text-xl text-[#999999] icon-search"></span>
            <input
              onFocus={(e) => focusF(e)}
              onBlur={(e) => blurF(e)}
              id="search"
              placeholder={post[1]?.placeholder}
              type="search"
              className="desktop:w-[343.22px] laptop:w-[270px] h-full py-[8px] pl-[12px] p-[4px] font-[400] text-[16px] leading-[24px] text-[#757575] font-[shabnam] placeholder:text-[#757575] outline-none search-input"
              aria-label="Search Products"
            />
          </div>

          <div className="min-w-[300.77px] h-[45px] laptop:flex gap-4 font-[shabnam] font-[400] leading-[21px] text-[14px] text-[#a3a3a3] hidden">
            {post[2]?.menu.map((item) => {
              return (
                <a
                  key={item.id}
                  href={item.link}
                  className="w-fit py-[12px] pl-[12px] cursor-pointer hover:text-[#0a295a] duration-300"
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </div>

        <div className="header-box-top-right flex gap-4 items-center">
          <a href={post[3]?.link}>
            <span className="laptop:hidden block text-2xl icon-searcher text-[#666666]"></span>
          </a>
          <a href={post[3]?.link}>
            <span className="laptop:hidden block text-2xl icon-account text-[#666666]"></span>
          </a>
          <a
            href={post[3]?.link}
            className="laptop:shadow flex items-center justify-center group relative laptop:rounded-xl w-[42px] h-[42px] laptop:bg-[#F7F8FA]"
          >
            <span className="laptop:text-xl text-2xl icon-cart icon-basket-desktop laptop:text-[#FE5F55] laptop:group-hover:text-[#000] text-[#666666] duration-300"></span>
            <span className="absolute laptop:top-[-10px] laptop:right-[-10px] top-[-3px] right-[-3px] font-[shabnam-BFD] font-[500] text-[14px] leading-[21px] rounded-full w-[20px] h-[21px] bg-[#FE5F55] text-white flex justify-center items-center">
              {post[3]?.counter}
            </span>
          </a>
          <a
            href={post[4]?.link}
            className="h-[42px] shadow laptop:flex hidden items-center text-sm rounded-xl bg-[#0A5ABD] text-white hover:bg-[#0A295A] duration-300 font-[400] text-[14px] leading-[21px] font-[shabnam] px-3"
          >
            <span>{post[4]?.name}</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
