/* eslint-disable react/prop-types */
import { MdOutlineStars } from "react-icons/md";
import { useNavigate } from "react-router";
import { ButtonInfo } from "../../../../components/Button";

export const Rating = ({ data, location }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() =>
        navigate(`/account/order-management/detail/rating`, {
          state: { data: data },
        })
      }
      className={`${
        location === "/account/order-management/detail/rating"
          ? "bg-[--primary-color]"
          : ""
      } w-full py-[10px] relative rounded-r-[50px] cursor-pointer`}
    >
      <MdOutlineStars className="m-auto text-[35px] text-[--border-cart]" />
      {location === "/account/order-management/detail/rating" && (
        <span className="text-[14px] font-[500] text-[--sub-color] text-center absolute top-[100%] w-full mt-[10px]">
          Đánh giá
        </span>
      )}
    </div>
  );
};

export const InfoRating = ({ location }) => {
  return (
    <>
      {location === "/account/order-management/detail/rating" && (
        <>
          <div className="text-[14px] text-[--sub-color] max-w-[250px]">
            Đánh giá đơn hàng trước{" "}
            <span className="font-[500]">30-01-2023</span> để nhận{" "}
            <span className="text-[--primary-color]">2 điểm tích lũy.</span>
          </div>
          <div className="flex items-center gap-x-[20px]">
            <ButtonInfo className="rounded-[10px] text-[--primary-color] border-[1px] border-solid border-[--primary-color]">
              Đặt lại đơn
            </ButtonInfo>
            <ButtonInfo className="rounded-[10px] bg-[--primary-color] text-[--white-color]">
              Đánh giá
            </ButtonInfo>
          </div>
        </>
      )}
    </>
  );
};
