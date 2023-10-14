/* eslint-disable react/prop-types */
import { IoCloseCircleOutline } from "react-icons/io5";
import { LazyLoadImage } from "react-lazy-load-image-component";
import search from "../../../../assets/images/header/search.svg";
import logo from "../../../../assets/images/logo/favicon.ico";

const ModalCoupon = ({ handleOffModalCoupon }) => {
  return (
    <>
      <div className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"></div>
      <div
        className={`bg-[--white-color] rounded-[20px] border-[1px] border-solid border-[--sub-color] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-20 px-[35px] py-[25px] w-[580px]`}
      >
        <IoCloseCircleOutline
          onClick={() => handleOffModalCoupon(false)}
          className="text-[--primary-color] text-[40px] absolute top-[2%] right-[2%] cursor-pointer"
        />
        <div className="text-[16px] text-[--sub-color] font-[500]">
          Mã khuyến mãi của bạn
        </div>
        <div className="flex items-center bg-[#F1F2F2] rounded-[60px] mx-auto my-[20px]">
          <div className="w-[20px] h-[20px] ml-[14px]">
            <LazyLoadImage
              effect="blur"
              className="w-full h-full"
              src={search}
              alt="icon search"
            />
          </div>
          <input
            className="text-[16px] text-[--sub-color] py-[10px] px-[10px] flex-1"
            placeholder="Tìm kiếm tất cả"
            autoComplete="off"
          />
        </div>
        <div className="opacity-50">
          <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-[50%] flex items-center justify-between">
            <div className="px-[22px] py-[35px] bg-[--primary-color] w-fit rounded-l-[10px]">
              <div className="bg-[--white-color] rounded-[50%] p-[14px]">
                <div className="w-[28px] h-[28px]">
                  <LazyLoadImage
                    effect="blur"
                    className="w-full h-full"
                    src={logo}
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="px-[10px] flex flex-col flex-1">
              <div className="text-[16px] text-[--sub-color] font-[500]">
                Giảm 123.000đ
              </div>
              <div className="text-[12px] text-[--sub-color]">
                Đơn hàng từ 500.000đ
              </div>
              <div className="text-[10px] text-[--sub-color] font-[700] my-[10px]">
                Hết hạn: 01/09/2022
              </div>
              <div className="flex-between">
                <span className="text-[12px] text-[--blue-color]">
                  Điều kiện
                </span>
                <span className="text-[12px] font-[700] text-[--white-color] bg-[--primary-color] rounded-[5px] px-[8px] py-[4px]">
                  Dùng ngay
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCoupon;
