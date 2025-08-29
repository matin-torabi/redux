import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../../../redux/MenuSlice";

function splitIntoChunks(array, chunks) {
  const size = Math.ceil(array.length / chunks);
  const result = [];

  for (let i = 0; i < chunks; i++) {
    result.push(array.slice(i * size, (i + 1) * size));
  }

  return result;
}

const Menu = () => {
  const dispatch = useDispatch();
  const { post, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  return (
    <>
      {/* loading */}
      <div
        className={`${
          loading === false ? "hidden" : null
        } bg-white  flex justify-center items-center fixed top-0 left-0 w-full h-full`}
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
      <nav className="w-full h-[56px] mt-[8px] z-[150] laptop:block hidden">
        <div className="w-full h-full">
          <ul
            id="menuList"
            className="w-full h-full flex justify-between items-center font-[shabnam] font-[400] desktop:text-sm text-xs leading-[21px] relative"
          >
            <li className="text-[#fe5f55] border-[#fe5f55] border-solid border-b-[3px] h-[56px]">
              <a
                href="#"
                className=" flex items-center justify-between py-[12px]"
              >
                <span className="flex items-center h-[30px]">خانه</span>
              </a>
              <div className="bline hid w-full h-[3px] bg-[#fe5f55] hidden"></div>
            </li>
            {post.map((item) => {
              if (item.id === 1) return;

              return (
                <li
                  key={item.id}
                  className="navList text-[#00000099] h-[56px] border-[#fe5f55]  border-solid hover:border-b-[3px]"
                  onMouseEnter={(e) => {
                    e.currentTarget.firstElementChild.lastElementChild.classList.remove(
                      "hidden"
                    );
                    document
                      .querySelector("#coverMenu")
                      .classList.remove("hidden");
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.firstElementChild.lastElementChild.classList.add(
                      "hidden"
                    );
                    document
                      .querySelector("#coverMenu")
                      .classList.add("hidden");
                  }}
                >
                  <div
                    className={`hover:text-[#fe5f55]  flex items-center justify-between duration-300 py-[12px] ${
                      item.id === 8 ? null : "relative"
                    }`}
                  >
                    <a href={item.link}>
                      <span className="h-[20px]">{item.name}</span>
                      <span className="icon-arrow-down text-xl"></span>
                    </a>
                    {(() => {
                      const chunks = splitIntoChunks(item.dropdown, 5);
                      const [part1, part2, part3, part4, part5] = chunks;
                      if (item.id === 8) {
                        return (
                          <div className="absolute w-full top-[100%] left-0 bg-white text-[#828282] hidden">
                            <div className="flex flex-row-reverse">
                              {chunks.map((child, index) => {
                                return (
                                  <div
                                    key={index + 1}
                                    className="flex flex-col border-[1px] w-[248.609px] border-[#DFDFDF] pt-3 basis-1/5"
                                  >
                                    {child.map((pchild) => {
                                      return (
                                        <a
                                          key={pchild.id}
                                          href={pchild.link}
                                          className="flex justify-between items-center h-[34px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[8px] cursor-pointer hover:bg-[#E1E1E1] text-black/60"
                                        >
                                          <span className="text-xs">
                                            {pchild.fa}
                                          </span>
                                          <span className="text-xs">
                                            {pchild.en}
                                          </span>
                                        </a>
                                      );
                                    })}
                                  </div>
                                );
                              })}
                            </div>

                            <div className="w-full flex p-3">
                              <a
                                href="#"
                                className="flex items-center text-[#fe5f55] text-xs"
                              >
                                <span>{item.extra[0].name}</span>
                                <span className="icon-chevron-left"></span>
                              </a>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div className="absolute top-[100%] right-0 bg-white -z-[1] mt-[0] text-[#828282] hidden ">
                            {item.dropdown.map((child) => {
                              if (
                                !child.dropdown ||
                                child.dropdown.length === 0
                              ) {
                                return (
                                  <a
                                    key={child.id}
                                    href={child.link}
                                    className="flex justify-between items-center desktop-w-[330px] laptop:w-[210px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60"
                                  >
                                    <span>{child.name}</span>
                                  </a>
                                );
                              } else {
                                return (
                                  <div
                                    key={child.id}
                                    className="dropdown-childs desktop-w-[330px] laptop:w-[210px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] cursor-pointer hover:bg-[#E1E1E1] text-black/60 relative"
                                    onMouseEnter={(e) => {
                                      e.currentTarget.lastElementChild.classList.remove(
                                        "hidden"
                                      );
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.lastElementChild.classList.add(
                                        "hidden"
                                      );
                                    }}
                                  >
                                    <a
                                      className="flex justify-between items-center w-full h-full p-[12px]"
                                      href={child.link}
                                    >
                                      <span>{child.name}</span>
                                      <span className="icon-chevron-left text-xl"></span>
                                    </a>

                                    {(() => {
                                      if (item.id === 7) {
                                        return (
                                          <div className="absolute left-[100%] top-0 bg-white  hidden text-[#828282]">
                                            {child.dropdown.map((pchild) => {
                                              return (
                                                <a
                                                  key={pchild.id}
                                                  href={pchild.link}
                                                  className="flex justify-between items-center desktop-w-[330px] laptop:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60"
                                                >
                                                  <span>{pchild.name}</span>
                                                </a>
                                              );
                                            })}
                                          </div>
                                        );
                                      } else {
                                        return (
                                          <div className="absolute right-[100%] top-0 bg-white  hidden text-[#828282]">
                                            {child.dropdown.map((pchild) => {
                                              return (
                                                <a
                                                  key={pchild.id}
                                                  href={pchild.link}
                                                  className="flex justify-between items-center desktop-w-[330px] laptop:w-[220px]  h-[42px] font-[shabnam] font-[400] text-[12px] leading-[18px] hover:text-[#0a5abd] p-[12px] cursor-pointer hover:bg-[#E1E1E1] text-black/60"
                                                >
                                                  <span>{pchild.name}</span>
                                                </a>
                                              );
                                            })}
                                          </div>
                                        );
                                      }
                                    })()}
                                  </div>
                                );
                              }
                            })}
                          </div>
                        );
                      }
                    })()}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
