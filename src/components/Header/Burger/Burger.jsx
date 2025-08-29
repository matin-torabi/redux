import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../../redux/MenuSlice";
import { fetchBurger } from "../../../redux/BurgerSlice";


const Burger = () => {
  const dispatch = useDispatch();

  const { post, ...rest1 } = useSelector((state) => state.burger);
  const { post: postList, ...rest2 } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchBurger());
    dispatch(fetchMenu());
  }, []);

  return (
    <>
      <div
        id="burgerMenu"
        className="absolute top-0 right-0 w-[300px] h-screen z-50 bg-white laptop:hidden hidden"
        onMouseLeave={(e) => {
          e.currentTarget.classList.add("hidden");
          document.querySelector("#cover").classList.add("hidden");
        }}

      >
        {/* Burger Image */}
        <div id="burgerImg">
          {post.map(
            (item, index) =>
              index === 0 && (
                <a
                  key={item.id}
                  className="border-b border-black/10 p-4"
                  href={item.link}
                >
                  <img
                    className="h-24 mx-auto py-4"
                    src={item.linkImage}
                    alt={item.alt}
                  />
                </a>
              )
          )}
        </div>

        {/* Mobile Top Line */}
        <div className="flex border-y border-black/10 z-10 bg-white">
          {" "}
          {/* اضافه کردن bg-white */}
          <div className="flex flex-1 laptop:max-w-screen-desktop mx-auto px-4">
            <div id="TopLine" className="flex w-full justify-between">
              {post.map(
                (item) =>
                  item.id === 2 &&
                  item.menu?.map((child) => (
                    <a
                      key={child.name}
                      className="block p-3 text-xs text-[#a3a3a3] hover:text-black"
                      href={child.link}
                    >
                      {child.name}
                    </a>
                  ))
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu List */}
        <div className="overflow-y-scroll mt-4 mr-2 md-16  h-[40vh]">
          <div id="MobListMenu" className="flex flex-col text-[#000000de]">
            {postList.map(
              (item, index) =>
                index !== 0 && (
                  <div key={index}>
                    <div
                      onClick={(e) =>
                        e.currentTarget.nextSibling.classList.toggle("hidden")
                      }
                      className="menu-item flex p-4 shortMenuList !cursor-pointer"
                    >
                      <span className="flex flex-1 font-[shabnam] font-[400] text-[16px] leading-[24px]">
                        {item.name}
                      </span>
                      <span className="icon-chevron-left transform -rotate-90"></span>
                    </div>

                    {/* Sub-list-mobile */}
                    <div className="sub-list bg-black/5 hidden">
                      <span className="flex-col flex p-4 text-gray-500">
                        <a
                          className="menu-item flex text-sm align-middle"
                          href={item.link}
                        >
                          <span className="text-sm">همه موارد این دسته</span>
                          <span className="icon-chevron-left align-middle text-sm font-[shabnam-FD]"></span>
                        </a>
                      </span>
                      {item?.dropdown?.map((child, childIndex) => {
                        return (
                          <span
                            key={childIndex}
                            className="flex-col flex pb-4 px-4 font-[shabnam]"
                          >
                            <a
                              className="menu-item flex text-sm py-2"
                              href={child.link}
                            >
                              {child.name || `${child.fa} | ${child.en}`}
                            </a>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Burger Enter Button */}
        <div id="burgerEnter">
          {post.map(
            (item, index) =>
              index === 2 && (
                <a
                  key={item.id}
                  className="p-3 text-sm block text-center rounded-xl mt-[70px] mx-4 bg-[#0A295A] text-white hover:text-black md-16"
                  href={item.link}
                >
                  {item.name}
                </a>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Burger;
