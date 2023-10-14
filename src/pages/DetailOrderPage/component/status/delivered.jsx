/* eslint-disable react/prop-types */
import { AiOutlineInbox } from "react-icons/ai";
import { useNavigate } from "react-router";
import { ButtonInfo } from "../../../../components/Button";

export const Delivered = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/account/order-management/detail/delivered`, {
          state: { data: data },
        })
      }
      className={`${
        location === "/account/order-management/detail/delivered"
          ? "bg-[--primary-color]"
          : ""
      } w-full py-[10px] relative border-r-[2px] border-solid border-[--border-cart] cursor-pointer`}
    >
      <AiOutlineInbox className="m-auto text-[35px] text-[--border-cart]" />
      {(location === "/account/order-management/detail/delivered" ||
        location === "/account/order-management/detail/rating") && (
        <div className="absolute top-[100%] flex flex-col items-center w-full">
          <span className="text-[14px] font-[500] text-[--sub-color] mt-[10px]">
            Đã giao
          </span>
          <span className="text-[12px] text-[--sub-color]">
            10:30 - 24/12/2022
          </span>
        </div>
      )}
    </div>
  );
};

export const InfoDelivered = ({ location }) => {
  return (
    <>
      {location === "/account/order-management/detail/delivered" && (
        <>
          <div className="text-[14px] text-[--sub-color] max-w-[240px]">
            Nếu hài lòng với sản phẩm đã nhận, hãy chọn “Trả hàng/hoàn tiền”.
            Nếu không hài lòng, hãy chọn “Trả hàng/hoàn tiền” trước{" "}
            <span className="font-[700]">30-12-2022</span> nhé!
          </div>
          <div className="flex items-center gap-x-[20px]">
            <span className="underline text-[14px] text-[--title-table-color]">
              Trả hàng/ Hoàn tiền
            </span>
            <ButtonInfo className="rounded-[10px] text-[--primary-color] border-[1px] border-solid border-[--primary-color]">
              Đặt lại đơn
            </ButtonInfo>
            <ButtonInfo className="rounded-[10px] bg-[--primary-color] text-[--white-color]">
              Đã nhận được hàng
            </ButtonInfo>
          </div>
        </>
      )}
    </>
  );
};
