/* eslint-disable react/prop-types */
import { IoCloseCircleOutline } from "react-icons/io5";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";

import RatingService from "./itemComment/ratingService";
import RatingProduct from "./itemComment/ratingProduct";
import { useState } from "react";
import { ButtonInfoSmall } from "../../../../../components/Button";

const PopupComment = ({ sendDataOffComment }) => {
  const [check, setCheck] = useState(false);
  return (
    <div className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10">
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[--white-color] rounded-[10px] w-[580px]">
        <div className="pt-[30px] pl-[30px] pr-[15px]">
          <div className="max-h-[720px] overflow-y-scroll scroll-noti pr-[15px] pb-[30px] my-[10px]">
            <div
              onClick={() => sendDataOffComment(false)}
              className="absolute top-[1%] right-[3%] cursor-pointer"
            >
              <IoCloseCircleOutline className="text-[30px] text-[--primary-color]" />
            </div>
            <div className="text-[20px] font-[500] text-[--sub-color]">
              Đánh giá đơn hàng: 220808KHHDH999
            </div>
            <RatingService />
            <RatingProduct />
          </div>
        </div>
        <div className="bg-[--border-color] px-[30px] py-[15px] rounded-b-[10px] flex items-center justify-between">
          <div className="flex items-center gap-x-[5px]">
            {check ? (
              <MdCheckBox
                onClick={() => setCheck(!check)}
                className="text-[20px] text-[--primary-color] cursor-pointer"
              />
            ) : (
              <MdCheckBoxOutlineBlank
                onClick={() => setCheck(!check)}
                className="text-[20px] text-[--primary-color] cursor-pointer"
              />
            )}

            <div className="flex flex-col">
              <span className="text-[12px] font-[700] text-[--sub-color]">
                Hiển thị tên đăng nhập trên đánh giá này
              </span>
              <span className="text-[10px] text-[--sub-color]">
                Tên tài khoản sẽ được hiển thị là TrungTamDuocPham
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-[10px]">
            <ButtonInfoSmall className="bg-[--title-table-color] text-[--white-color] rounded-[10px]">
              Làm lại
            </ButtonInfoSmall>
            <ButtonInfoSmall className="bg-[--primary-color] text-[--white-color] rounded-[10px]">
              Hoàn thành
            </ButtonInfoSmall>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupComment;
