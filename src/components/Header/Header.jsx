import HeaderTop from "./HeaderTop/HeaderTop";
import Menu from "./Menu/Menu";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 left-0 z-[150]">
        <div className="w-full laptop:h-[133px] h-[57px] shadow laptop:pt-[24px] laptop:bg-white bg-[#EFEFEF]">
          <div className="header-box max-w-[1280px] h-full mx-auto px-[16px]  laptop:block flex items-center">
            <HeaderTop />
            <Menu />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
