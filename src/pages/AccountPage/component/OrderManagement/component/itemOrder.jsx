import { useState } from "react";

import { BsQuestionCircle } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import { ButtonInfo } from "../../../../../components/Button";
import PopupComment from "./popupComment";
import { useNavigate } from "react-router";
import ModalCancelOrder from "../../../../DetailOrderPage/component/modalCancelOrder";

const dataOrder = [
  {
    id: 1,
    status: "CHờ xác nhận",
    code: "220808KHHDH999",
    cmt: null,
    date: null,
  },
  {
    id: 2,
    status: "CHờ lấy hàng",
    code: "220808KHHDH998",
    cmt: null,
    date: "Đơn hàng dự kiến giao đến trước 25/12/2022",
  },
  {
    id: 3,
    status: "Đang giao",
    code: "220808KHHDH997",
    cmt: null,
    date: "Đơn hàng dự kiến giao đến trước 25/12/2022",
  },
  {
    id: 4,
    status: "Đã giao",
    code: "220808KHHDH997",
    cmt: null,
    date: "Nếu hài lòng với sản phẩm đã nhận, hãy chọn “Đã nhận được hàng”. Nếu không hài lòng hãy chọn “Trả hàng/ Hoàn tiền” trước 25/12/2022 nhé!",
  },
];

const ItemOrder = () => {
  const navigate = useNavigate();
  const [openComment, setOpenComment] = useState(false);
  const [openModalCencel, setOpenModalCancel] = useState(false);

  const handleSendDataOpen = (data) => {
    setOpenModalCancel(data);
  };

  const sendDataOffComment = (data) => {
    setOpenComment(data);
  };

  return (
    <div className="flex flex-col gap-y-[20px]">
      {dataOrder.map((item) => (
        <div
          key={item.id}
          className="bg-[--white-color] p-[30px] rounded-[10px]"
        >
          <div className="flex-between">
            <div className="text-[16px] font-[500] text-[--sub-color]">
              Mã đơn hàng : {item.code}
            </div>
            <div className="flex items-center gap-x-[5px]">
              <BsQuestionCircle className="text-[18px]" />
              <span className="uppercase text-[16px] font-[500] text-[--primary-color]">
                {item.status}
              </span>
            </div>
          </div>
          <div className="border-y-[1px] border-solid border-[--border-color] my-[25px] pb-[20px]">
            <div className="grid grid-cols-9 pt-[20px] gap-2">
              <div className="text-[14px] font-[700] text-[--sub-color] col-span-2 two-line">
                Gel silicone làm mờ sẹo SCARmed Gel silicone làm mờ sẹo SCARmed
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-[14px] text-[--blue-color]">
                  Polysiloxane ...
                </span>
                <span className="text-[14px] text-[--sub-color]">
                  Hạn dùng: 36 tháng
                </span>
              </div>
              <div className="flex flex-col justify-center col-span-2">
                <span className="text-[12px] text-[--sub-color] font-[500]">
                  Gel
                </span>
                <span className="text-[12px] text-[--sub-color]">
                  Hộp 1 tuýp x 15g
                </span>
              </div>
              <div className="text-[14px] font-[500] text-[--sub-color] col-span-1 flex items-center">
                SL: 01
              </div>
              <div className="flex items-center justify-end gap-x-[5px] col-span-2">
                <span className="text-[12px] leading-[16px] font-[500] text-[--gray-color] line-through">
                  330.000đ
                </span>
                <span className="text-[16px] font-[500] text-[--primary-color]">
                  165.000đ
                </span>
              </div>
            </div>
            <div className="grid grid-cols-9 pt-[20px] gap-2">
              <div className="text-[14px] font-[700] text-[--sub-color] col-span-2 two-line">
                Gel silicone làm mờ sẹo SCARmed Gel silicone làm mờ sẹo SCARmed
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-[14px] text-[--blue-color]">
                  Polysiloxane ...
                </span>
                <span className="text-[14px] text-[--sub-color]">
                  Hạn dùng: 36 tháng
                </span>
              </div>
              <div className="flex flex-col justify-center col-span-2">
                <span className="text-[12px] text-[--sub-color] font-[500]">
                  Gel
                </span>
                <span className="text-[12px] text-[--sub-color]">
                  Hộp 1 tuýp x 15g
                </span>
              </div>
              <div className="text-[14px] font-[500] text-[--sub-color] col-span-1 flex items-center">
                SL: 01
              </div>
              <div className="flex items-center justify-end gap-x-[5px] col-span-2">
                <span className="text-[12px] leading-[16px] font-[500] text-[--gray-color] line-through">
                  330.000đ
                </span>
                <span className="text-[16px] font-[500] text-[--primary-color]">
                  165.000đ
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center gap-x-[10px]">
            <div className="text-[12px] text-[--sub-color] max-w-[550px]">
              {item.date}
            </div>
            <div>
              <span className="text-[14px] text-[--gray-color]">
                Tổng số tiền :
              </span>
              <span className="text-[20px] font-[500] text-[--primary-color]">
                665.000đ
              </span>
            </div>
          </div>
          {item.status === "CHờ xác nhận" && (
            <div className="flex justify-end items-center gap-x-[10px] mt-[22px]">
              <div
                onClick={() => setOpenModalCancel(true)}
                className="underline text-[14px] text-[--primary-color] cursor-pointer"
              >
                Hủy đơn hàng
              </div>
              <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-fit px-[16px] py-[8px] cursor-pointer">
                <AiOutlineMessage className="text-[22px]" />
              </div>
              <ButtonInfo className="bg-[--primary-color] text-[--white-color] cursor-pointer rounded-[10px]">
                Thay đổi thông tin
              </ButtonInfo>
              {openModalCencel && (
                <ModalCancelOrder handleSendDataOpen={handleSendDataOpen} />
              )}
            </div>
          )}
          {item.status === "CHờ lấy hàng" && (
            <div className="flex justify-end items-center gap-x-[10px] mt-[22px]">
              <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-fit px-[16px] py-[8px] cursor-pointer">
                <AiOutlineMessage className="text-[22px]" />
              </div>
              <ButtonInfo
                onClick={() =>
                  navigate(`/account/order-management/detail/wait-confirm`, {
                    state: { data: item },
                  })
                }
                className="bg-[--primary-color] text-[--white-color] cursor-pointer rounded-[10px]"
              >
                Xem chi tiết
              </ButtonInfo>
            </div>
          )}
          {item.status === "Đang giao" && (
            <div className="flex justify-end items-center gap-x-[10px] mt-[22px]">
              <div className="underline text-[14px] text-[--title-table-color] cursor-pointer">
                Trả hàng/ Hoàn tiền
              </div>
              <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-fit px-[16px] py-[8px] cursor-pointer">
                <AiOutlineMessage className="text-[22px]" />
              </div>
              <ButtonInfo className="bg-[--primary-color] text-[--white-color] cursor-pointer rounded-[10px]">
                Đã nhận được hàng
              </ButtonInfo>
            </div>
          )}
          {item.status === "Đã giao" && (
            <div className="flex justify-end items-center gap-x-[10px] mt-[22px]">
              <div className="underline text-[14px] text-[--primary-color] cursor-pointer">
                Trả hàng/ Hoàn tiền
              </div>
              <div className="border-[1px] border-solid border-[--primary-color] rounded-[10px] w-fit px-[16px] py-[8px] cursor-pointer">
                <AiOutlineMessage className="text-[22px]" />
              </div>
              <ButtonInfo className="bg-[--white-color] text-[--primary-color] border-[1px] border-solid border-[--primary-color] cursor-pointer rounded-[10px]">
                Đặt lại đơn
              </ButtonInfo>
              <ButtonInfo
                onClick={() => setOpenComment(!openComment)}
                className="bg-[--primary-color] text-[--white-color] cursor-pointer rounded-[10px]"
              >
                Đánh giá
              </ButtonInfo>
            </div>
          )}
        </div>
      ))}
      {openComment && <PopupComment sendDataOffComment={sendDataOffComment} />}
    </div>
  );
};

export default ItemOrder;
