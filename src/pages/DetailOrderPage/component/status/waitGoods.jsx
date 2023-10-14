/* eslint-disable react/prop-types */
import { AiOutlineFileText } from "react-icons/ai";
import { useNavigate } from "react-router";

export const WaitGoods = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/account/order-management/detail/wait-goods`, {
          state: { data: data },
        })
      }
      className={`${
        location === "/account/order-management/detail/wait-goods"
          ? "bg-[--primary-color]"
          : ""
      } w-full py-[10px] relative border-r-[2px] border-solid border-[--border-cart] cursor-pointer`}
    >
      <AiOutlineFileText className="m-auto text-[35px] text-[--border-cart]" />
      {location === "/account/order-management/detail/wait-goods" && (
        <span className="text-[14px] font-[500] text-[--sub-color] text-center absolute top-[100%] w-full mt-[10px]">
          Chờ lấy hàng
        </span>
      )}
      {(location === "/account/order-management/detail/being-transport" ||
        location === "/account/order-management/detail/delivered" ||
        location === "/account/order-management/detail/rating") && (
        <div className="absolute top-[100%] flex flex-col items-center w-full">
          <span className="text-[14px] font-[500] text-[--sub-color] mt-[10px]">
            Đã lấy hàng
          </span>
          <span className="text-[12px] text-[--sub-color]">
            20:30 - 21/12/2022
          </span>
        </div>
      )}
    </div>
  );
};

export const InfoWaitGoods = ({ location }) => {
  return (
    <>
      {location === "/account/order-management/detail/wait-goods" && (
        <>
          <span className="text-[14px] text-[--sub-color]">
            Đơn hàng đang được người bán xử lý. <br /> Dự kiến giao hàng trước{" "}
            <span className="font-[700]">25/12/2022</span>
          </span>
        </>
      )}
    </>
  );
};
