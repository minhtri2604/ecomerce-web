/* eslint-disable no-extra-boolean-cast */
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { BsCartPlus } from "react-icons/bs";
import { BsCartPlusFill } from "react-icons/bs";

import Container from "../../../components/Container";
import Search from "./component/Search";
// import Describe from "./component/Describe";
import { CategoryProduct } from "./component/CategoryProduct";

import logo from "../../../assets/images/logo/logo.svg";

import MostVisited from "./component/MostVisited";
import ModalAccount from "./component/ModalAccount";
import ModalNoti from "./component/ModalNoti";
import ModalCart from "./component/ModalCart";
import MenuMobile from "./component/MenuMobile";
import useClickOutSide from "../../../hooks/useClickOutSide";

const MainHeader = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [isHovered, setIsHovered] = useState(null);
  const [navBg, setNavBg] = useState(false);

  const dataCart = useSelector((state) => state.cart.dataCart);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  const displayName = useSelector((state) => state.auth.infoUser?.last_name);

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleMouseEnter = (element) => {
    setIsHovered(element);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const onClose = () => {
    if (openNavbar) {
      setOpenNavbar(false);
    }
  };

  const menuBarRef = useRef(null);

  useClickOutSide(onClose, menuBarRef);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <>
      <div
        className={`${
          navBg ? "fixed top-0 w-full bg-[--white-color] box-shadow z-10" : ""
        }`}
      >
        {/* <Describe /> */}
        <Container>
          <div className="py-[15px] flex flex-col items-center gap-y-[20px] lg:flex-row lg:justify-between lg:items-center ">
            <div className="flex items-center justify-between w-full lg:w-fit">
              <div
                className="bg-[--primary-color] p-[5px] rounded-[10px] lg:hidden"
                onClick={() => setOpenNavbar(!openNavbar)}
                ref={menuBarRef}
              >
                <GiHamburgerMenu className="text-[--white-color] text-[20px]" />
              </div>
              <div>
                <Link to={"/"}>
                  <div className="w-[144px] h-[34px]">
                    <LazyLoadImage
                      effect="blur"
                      className="w-full h-full object-contain"
                      src={logo}
                      alt="logo"
                    />
                  </div>
                  <div className="text-[12px] text-[#000]">
                    High Tech Generation Solutions
                  </div>
                </Link>
              </div>
              <div className="lg:hidden"></div>
            </div>
            <Search />
            {accessToken ? (
              <div className="flex-between gap-x-[25px]">
                <div>
                  {displayName == ""
                    ? "Unknown"
                    : displayName?.length > 10
                    ? displayName.substring(0, 3) +
                      "..." +
                      displayName.substring(displayName.length - 4)
                    : displayName}
                </div>
                <div
                  className="w-[20px] h-[20px] relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("account")}
                  onMouseLeave={handleMouseLeave}
                >
                  {isHovered === "account" ? (
                    <GoPersonFill className="text-[24px] text-[--primary-color]" />
                  ) : (
                    <GoPerson className="text-[24px]" />
                  )}
                  {isHovered === "account" && (
                    <ModalAccount className="absolute right-0 top-[150%]" />
                  )}
                </div>
                <div
                  className="w-[20px] h-[20px] relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("noti")}
                  onMouseLeave={handleMouseLeave}
                >
                  {isHovered === "noti" ? (
                    <IoMdNotifications className="text-[24px] text-[--primary-color]" />
                  ) : (
                    <IoMdNotificationsOutline className="text-[24px]" />
                  )}

                  {isHovered === "noti" && (
                    <ModalNoti className="absolute right-0 top-[150%]" />
                  )}
                </div>
                <div
                  className="w-[20px] h-[20px] relative cursor-pointer"
                  onMouseEnter={() => handleMouseEnter("cart")}
                  onMouseLeave={handleMouseLeave}
                >
                  {isHovered === "cart" ? (
                    <BsCartPlusFill className="text-[24px] text-[--primary-color]" />
                  ) : (
                    <BsCartPlus className="text-[24px]" />
                  )}

                  <div className="absolute top-[-8px] right-[-7px] text-[12px] leading-[12px] font-[700] text-[--white-color] px-[3px] py-[2px] bg-[--primary-color] rounded-[10px]">
                    {dataCart?.length || 0}
                  </div>
                  {isHovered === "cart" && (
                    <ModalCart className="absolute right-0 top-[150%]" />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <div className="flex-center gap-x-[10px]">
                  <div className="text-[16px] leading-[16px] font-[500] text-[--sub-color] hover:text-[--primary-color] transition border-r-[2px] border-solid border-[--sub-color] pr-[10px]">
                    <Link to={"/signup"}>Đăng ký</Link>
                  </div>
                  <div className="text-[16px] leading-[16px] font-[500] text-[--sub-color] hover:text-[--primary-color] transition">
                    <Link to={"/signin"}>Đăng nhập</Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* menu mobile */}
          <div
            className={`${
              openNavbar
                ? "fixed top-0 left-0 bg-[#9595955c] w-full h-full"
                : ""
            }`}
          ></div>
          <div
            className={`md:hidden w-[70%] fixed z-[9999999999] bg-[--white-color] top-0 left-0 bottom-0 h-full shadow flex flex-col items-center gap-y-[3rem] pt-[3rem] text-[#ffffff] ${
              openNavbar ? "navbar-open" : "navbar-close"
            }`}
          >
            <MenuMobile />
          </div>
        </Container>
      </div>
      <CategoryProduct />
      <MostVisited />
    </>
  );
};

export default MainHeader;
