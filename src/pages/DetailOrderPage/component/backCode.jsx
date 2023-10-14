/* eslint-disable react/prop-types */
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router";

const BackCode = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div className="flex-between p-[30px]">
      <div
        onClick={() => navigate(-1)}
        className="flex items-center gap-x-[5px] cursor-pointer"
      >
        <HiOutlineArrowLeft className="text-[18px]" />
        <span className="text-[16px] font-[500] text-[--gray-color]">
          Trở lại
        </span>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <div className="text-[16px] font-[500] text-[--sub-color]">
          Mã đơn hàng : {data?.code}
        </div>
        <div className="uppercase text-[16px] leading-[18px] font-[500] text-[--primary-color] border-l-[2px] border-solid border-[--primary-color] pl-[10px]">
          {/* {data?.status} */}
          {location === "/account/order-management/detail/wait-confirm" &&
            "Chờ xác nhận"}
          {location === "/account/order-management/detail/wait-goods" &&
            "Chờ lấy hàng"}
          {location === "/account/order-management/detail/being-transport" &&
            "đang giao"}
          {location === "/account/order-management/detail/delivered" &&
            "Đã giao"}
          {location === "/account/order-management/detail/rating" && "Đã giao"}
        </div>
      </div>
    </div>
  );
};

export default BackCode;
