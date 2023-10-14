/* eslint-disable react/prop-types */
import { TbTruckDelivery } from "react-icons/tb";
import { useNavigate } from "react-router";
import { ButtonInfo } from "../../../../components/Button";

export const BeingTransport = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/account/order-management/detail/being-transport`, {
          state: { data: data },
        })
      }
      className={`${
        location === "/account/order-management/detail/being-transport"
          ? "bg-[--primary-color]"
          : ""
      } w-full py-[10px] relative border-r-[2px] border-solid border-[--border-cart] cursor-pointer`}
    >
      <TbTruckDelivery className="m-auto text-[35px] text-[--border-cart]" />
      {(location === "/account/order-management/detail/being-transport" ||
        location === "/account/order-management/detail/delivered" ||
        location === "/account/order-management/detail/rating") && (
        <div className="absolute top-[100%] flex flex-col items-center w-full">
          <span className="text-[14px] font-[500] text-[--sub-color] mt-[10px]">
            Đang vận chuyển
          </span>
          <span className="text-[12px] text-[--sub-color]">
            10:30 - 22/12/2022
          </span>
        </div>
      )}
    </div>
  );
};

export const InfoBeingTransport = ({ location }) => {
  return (
    <>
      {location === "/account/order-management/detail/being-transport" && (
        <>
          <div className="text-[14px] text-[--sub-color]">
            Đơn hàng sẽ được giao trước{" "}
            <span className="font-[700]">25/12/2022</span>
          </div>
          <div className="flex items-center gap-x-[20px]">
            <span className="underline text-[14px] text-[--title-table-color]">
              Trả hàng/ Hoàn tiền
            </span>
            <ButtonInfo className="rounded-[10px] bg-[--primary-color] text-[--white-color]">
              Đã nhận được hàng
            </ButtonInfo>
          </div>
        </>
      )}
    </>
  );
};
