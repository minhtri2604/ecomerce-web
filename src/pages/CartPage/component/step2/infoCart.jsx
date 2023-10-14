import { useState } from "react";
import TitleCart from "../titleCart";

import { BiSolidDiscount } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import ModalOrder from "./modalOrder";
import ModalCoupon from "./modalCoupon";

/* eslint-disable react/prop-types */
const InfoCart = ({ dataBuy, handleSetActive }) => {
  const totalPrice = dataBuy?.reduce(
    (i, item) =>
      (i += (item.quantity * (item.price * (100 - item.discount))) / 100),
    0
  );
  const [openModal, setOpenModal] = useState(false);
  const [openModalCoupon, setOpenModalCoupon] = useState(false);

  const handleOffModal = (data) => {
    setOpenModal(data);
  };

  const handleOffModalCoupon = (data) => {
    setOpenModalCoupon(data);
  };

  return (
    <div className="w-[280px] py-[20px] pl-[20px] pr-[10px] bg-[--white-color] rounded-[10px]">
      <TitleCart>Thông tin giỏ hàng</TitleCart>
      <div className="mt-[20px] max-h-[300px] overflow-y-scroll scroll-noti pr-[10px]">
        {dataBuy?.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t-[1px] border-solid border-[--border-cart] py-[15px]"
          >
            <div className="max-w-[130px]">
              <div className="text-[14px] font-[700] text-[--sub-color] two-line">
                {item.title}
              </div>
              <div className="text-[12px] text-[--sub-color] one-line">
                {item.sub}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-[14px] font-[700] text-[--sub-color]">
                {(
                  item.quantity *
                  ((item.price * (100 - item.discount)) / 100)
                ).toLocaleString("vi")}
                đ
              </div>
              <div className="text-[12px] text-[--sub-color]">
                Số lượng : {item.quantity}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pr-[10px]">
        <div className="flex items-center justify-between px-[15px] border-[1px] border-solid border-[--sub-color] rounded-[300px] mt-[10px]">
          <input
            placeholder="Nhập mã khuyến mãi tại đây"
            className="text-[12px] text-[--sub-color] py-[9px] flex-1 pr-[12px]"
          />
          <div
            onClick={() => setOpenModalCoupon(true)}
            className="border-l-[2px] border-solid border-[--primary-color] pl-[12px] cursor-pointer"
          >
            <BiSolidDiscount className="text-[30px] leading-[30px] text-[--primary-color]" />
          </div>
        </div>
      </div>
      <div className="mr-[10px] mt-[15px] border-b-[1px] border-dashed border-[--border-cart] pb-[20px]">
        <div className="text-[14px] font-[700] text-[--sub-color] flex justify-between items-center mb-[10px]">
          <span>Tạm tính :</span>
          <span> {totalPrice.toLocaleString("vi")}đ</span>
        </div>
        <div className="text-[14px] font-[700] text-[--sub-color] flex justify-between items-center">
          <span>Vận chuyển :</span>
          <span className="flex justify-between items-center gap-x-[5px]">
            <TbTruckDelivery className="text-[20px] text-[--primary-color]" />
            <span>0đ</span>
          </span>
        </div>
      </div>
      <div className="text-[24px] font-[700] flex items-center justify-between mr-[10px] pt-[20px]">
        <span className="text-[--sub-color]">Tổng :</span>
        <span className="text-[--primary-color]">
          {totalPrice.toLocaleString("vi")}đ
        </span>
      </div>
      <div
        onClick={() => setOpenModal(true)}
        className={`bg-[--primary-color] text-[16px] font-[500] text-[--white-color]  rounded-[10px] text-center py-[6px] mt-[20px] cursor-pointer`}
      >
        Xác nhận đặt hàng
      </div>
      {openModal && (
        <ModalOrder
          dataBuy={dataBuy}
          handleSetActive={handleSetActive}
          handleOffModal={handleOffModal}
        />
      )}
      {openModalCoupon && (
        <ModalCoupon handleOffModalCoupon={handleOffModalCoupon} />
      )}
    </div>
  );
};

export default InfoCart;
