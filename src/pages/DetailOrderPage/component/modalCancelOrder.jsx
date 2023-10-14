/* eslint-disable react/prop-types */

import { IoCloseOutline } from "react-icons/io5";
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

import NotiCheckInfo from "../../../components/NotiCheck";
import { useState } from "react";
import { ButtonInfo } from "../../../components/Button";
import { dataCancelOrder } from "../../../data/dataCancelOrder";

const ModalCancelOrder = ({ handleSendDataOpen }) => {
  const [check, setCheck] = useState(null);
  return (
    <>
      <div
        onClick={() => handleSendDataOpen(false)}
        className="fixed w-full h-full top-0 left-0 bg-[#0000005c] z-10"
      ></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[580px] bg-[--white-color] px-[20px] py-[22px] rounded-[20px] z-20">
        <div
          className={`relative rounded-[10px] border-[2px] border-solid border-[--primary-color] px-[15px]`}
        >
          <div className="absolute top-[-12%] left-[50%] translate-x-[-50%] bg-[--white-color] rounded-[50%] p-[15px]">
            <IoCloseOutline className="text-[60px] text-[--black-color] border-[4px] border-solid border-[--primary-color] rounded-[50%]" />
          </div>
          <div className="text-24px leading-[26px] font-[700] text-[--sub-color] text-center mt-[40px]">
            Chọn lý do hủy
          </div>
          <NotiCheckInfo
            title="Vui lòng chọn lý do hủy đơn hàng.  Lưu ý: Thao tác này sẽ hủy tất cả các sản phẩm có trong đơn hàng và không thể hoàn tác."
            className="my-[20px]"
          />
          <div className="flex flex-col gap-y-[10px]">
            {dataCancelOrder.map((item) => (
              <div key={item.id} className="flex flex-col">
                <div className="flex gap-x-[20px]">
                  {check === item.id ? (
                    <MdRadioButtonChecked
                      onClick={() => setCheck(null)}
                      className="text-[22px] text-[--primary-color] cursor-pointer"
                    />
                  ) : (
                    <MdRadioButtonUnchecked
                      onClick={() => setCheck(item.id)}
                      className="text-[22px] cursor-pointer"
                    />
                  )}

                  <div className="flex flex-col">
                    <span className="text-[14px] font-[500]">{item.title}</span>
                    <span className="text-[12px]">{item.desc}</span>
                  </div>
                </div>
                {item.title === "Khác" && check === 7 && (
                  <textarea
                    className="min-h-[80px] w-full bg-[#F1F2F2] text-[14px] leading-[16px] rounded-[8px] px-[20px] py-[15px] mt-[5px]"
                    placeholder="Mời bạn điền lý do khác tại đây..."
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex-center gap-x-[20px] my-[25px]">
            <ButtonInfo
              onClick={() => handleSendDataOpen(false)}
              className="rounded-[32px] bg-[--title-table-color] text-[--white-color] cursor-pointer"
            >
              Không phải bây giờ
            </ButtonInfo>
            <ButtonInfo className="rounded-[32px] bg-[--primary-color] text-[--white-color]">
              Hủy đơn hàng
            </ButtonInfo>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCancelOrder;
