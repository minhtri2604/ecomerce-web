/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";
import attention from "../../../assets/images/signup/step1/attention.svg";

const NotiOrder = ({ ...props }) => {
  return (
    <div
      className={`${props.className} bg-[#F0F3F2] flex items-center gap-x-[10px] py-[10px] 2xl:py-[15px] px-[30px] mb-[30px]`}
    >
      <div className="w-[22px] h-[22px]">
        <LazyLoadImage
          effect="blur"
          className="w-full h-full"
          src={attention}
          alt="img"
        />
      </div>
      <div className="text-[14px] tracking-[0.7px] text-[#3B394F] flex-1">
        Vui lòng thanh toán{" "}
        <span className="text-[14px] font-[700] text-[--primary-color]">
          {props.price}
        </span>{" "}
        khi nhận được hàng
      </div>
    </div>
  );
};

export default NotiOrder;
