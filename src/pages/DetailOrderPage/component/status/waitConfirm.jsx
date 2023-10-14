/* eslint-disable react/prop-types */
import { AiOutlineFileDone } from "react-icons/ai";
import { useNavigate } from "react-router";

export const WaitConfirm = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/account/order-management/detail/wait-confirm`, {
          state: { data: data },
        })
      }
      className={`${
        location === "/account/order-management/detail/wait-confirm"
          ? "bg-[--primary-color]"
          : ""
      }  rounded-l-[50px] w-full py-[10px] relative border-r-[2px] border-solid border-[--border-cart] cursor-pointer`}
    >
      <AiOutlineFileDone className="m-auto text-[35px] text-[--border-cart]" />
      {location === "/account/order-management/detail/wait-confirm" && (
        <span className="text-[14px] font-[500] text-[--sub-color] text-center absolute top-[100%] w-full mt-[10px]">
          Chờ xác nhận
        </span>
      )}
      {(location === "/account/order-management/detail/wait-goods" ||
        location === "/account/order-management/detail/being-transport" ||
        location === "/account/order-management/detail/delivered" ||
        location === "/account/order-management/detail/rating") && (
        <div className="absolute top-[100%] flex flex-col items-center w-full">
          <span className="text-[14px] font-[500] text-[--sub-color] mt-[10px]">
            Đã xác nhận
          </span>
          <span className="text-[12px] text-[--sub-color]">
            20:30 - 21/12/2022
          </span>
        </div>
      )}
    </div>
  );
};

export const InfoWaitConfirm = ({ handleSendDataOpen, location }) => {
  return (
    <>
      {location === "/account/order-management/detail/wait-confirm" && (
        <>
          <span className="text-[14px] text-[--sub-color]">
            Đơn hàng đang đợi xác nhận từ nhà bán
          </span>
          <span
            onClick={() => handleSendDataOpen(true)}
            className="underline text-[14px] text-[--primary-color] cursor-pointer"
          >
            Hủy đơn hàng
          </span>
        </>
      )}
    </>
  );
};
